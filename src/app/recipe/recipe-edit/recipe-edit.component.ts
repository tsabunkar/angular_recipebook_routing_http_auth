import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe-service/recipe.service';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  recipeFormGroup: FormGroup;
  idToBeEdited: number;
  isInEditMode: boolean = false;//initially assuming we creating a new recipe (i.e- not in the edit mode)

  constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((param: Params) => {
      console.log();
      this.idToBeEdited = +param['id']
      console.log('fetching id value ', param['id']);
      //if url is http://localhost:4200/recipes/new -> then we get param['id'] value as undefined  (New Recipe)
      //if url is http://localhost:4200/recipes/0/edit -> then we get param['id'] value as - 0 (Edit Recipe)
      this.isInEditMode = param['id'] != null;
      console.log('isInEditMode ? ', this.isInEditMode);
      // if (this.isInEditMode) {
      this.initializeForm();
      // }
    })
  }



  private initializeForm() {

    let recipeName = '';
    let imageUrl = '';
    let recipeDescription = '';
    let recipeIngredientArray = new FormArray([]);//intinally formArray will be empty an array


    if (this.isInEditMode) { //if in edit mode then fetching the value from service  (Edit Recipe)
      console.log(this.idToBeEdited);
      const recipeObj = this.recipeService.getRecipeDetailsFromId(this.idToBeEdited);
      recipeName = recipeObj.name;
      imageUrl = recipeObj.imagePath;
      recipeDescription = recipeObj.description;
      if (recipeObj['ingredients']) {//recipeObj.ingredients is an array which has list of Ingredients Object
        for (const ingredientItem of recipeObj.ingredients) {
          recipeIngredientArray.push(new FormGroup({
            'name': new FormControl(ingredientItem.name, Validators.required),
            'amount': new FormControl(ingredientItem.amount, [
              Validators.required,
              Validators.pattern(/[1-9]+[0-9]*$/)
            ])
          })
          );
        }
      }
    } //end of if

    //if not in editmode then where r adding empty formControl values  (Add New Recipe)
    this.recipeFormGroup = new FormGroup({
      'nameControl': new FormControl(recipeName, Validators.required),
      'imageControl': new FormControl(imageUrl, Validators.required),
      'descriptionControl': new FormControl(recipeDescription, Validators.required),
      'recipeIngredientArrayControl': recipeIngredientArray
    });

  }

  onSubmitForm() {

    console.log(this.recipeFormGroup);
    console.log(this.recipeFormGroup.value['nameControl']);
    console.log(this.recipeFormGroup.value);
    console.log(this.recipeFormGroup.value['recipeIngredientArrayControl']);

    const newRecipeObject = new Recipe(
      this.recipeFormGroup.value['nameControl'],
      this.recipeFormGroup.value['descriptionControl'],
      this.recipeFormGroup.value['imageControl'],
      this.recipeFormGroup.value['recipeIngredientArrayControl'],
    );
    if (this.isInEditMode) {
      this.recipeService.updateRecipeOnFormSubmission(this.idToBeEdited, newRecipeObject)
    } else {
      this.recipeService.addNewRecipeOnFormSubmission(newRecipeObject)
      //! Instead of injecting the value in C.I and then passing the object to save or we can 
      //!directly save the form value, (bcoz- this.recipeFormGroup.value Object is same our Recipe Model)
      //! but for me it is not working bcoz - I have given different property names in model and form value
      //! for ex - name (in model) whereas (In model) nameControl,ingredients(in model) whereas (In model) recipeIngredientArrayControl
      // this.recipeService.addNewRecipeOnFormSubmission(this.recipeFormGroup.value)
    }

    //after form is submitted naviagate to landing page
    // this.router.navigate(['/recipes']);
    this.onCancelOfRecipeForm();
  }


  onAddEditIngredients() {
    (<FormArray>this.recipeFormGroup.get('recipeIngredientArrayControl')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required), //nameControl field
        'amount': new FormControl(null, [Validators.required, Validators.pattern(/[1-9]+[0-9]*$/)]), //amountControl field
      })
    )
  }

  onCancelOfRecipeForm() {
    // this.router.navigate(['/recipes']);
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });//go back to previous route in the url
  }

  deleteIngredientFromRecipeItem(index: number) {
    (<FormArray>this.recipeFormGroup.get('recipeIngredientArrayControl')).removeAt(index);
  }

}
