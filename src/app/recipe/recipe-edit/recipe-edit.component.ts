import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { FormGroup, FormControl } from '@angular/forms';
import { RecipeService } from '../recipe-service/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  recipeFormGroup: FormGroup;
  idToBeEdited: number;
  isInEditMode: boolean = false;//initially assuming we creating a new recipe (i.e- not in the edit mode)

  constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((param: Params) => {
      console.log();
      this.idToBeEdited = +param['id']
      console.log('fetching id value ', param['id']);
      //if url is http://localhost:4200/recipes/new -> then we get param['id'] value as undefined  (New Recipe)
      //if url is http://localhost:4200/recipes/0/edit -> then we get param['id'] value as - 0 (Edit Recipe)
      this.isInEditMode = param['id'] != null;
      console.log('isInEditMode ', this.isInEditMode);
      if (this.isInEditMode) {
        this.initializeForm();
      }
    })
  }



  private initializeForm() {

    let recipeName = '';
    let imageUrl = '';
    let recipeDescription = '';

    if (this.isInEditMode) { //if in edit mode then fetching the value from service
      console.log(this.idToBeEdited);
      const recipeObj = this.recipeService.getRecipeDetailsFromId(this.idToBeEdited);
      recipeName = recipeObj.name;
      imageUrl = recipeObj.imagePath;
      recipeDescription = recipeObj.description;
    }

    this.recipeFormGroup = new FormGroup({
      'nameControl': new FormControl(recipeName),
      'imageControl': new FormControl(imageUrl),
      'descriptionControl': new FormControl(recipeDescription)
    });

  }

  onSubmitForm() {
    console.log(this.recipeFormGroup);
  }


}
