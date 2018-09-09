import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RecipeService } from '../recipe-service/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipesArray: Recipe[] = []; //Array of Recipe Object
 
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipesArray = this.recipeService.getRecipe();
  }
  /* 
    recipeObj: Recipe = new Recipe('Pasta', 'Pasta dish is made of sunfest pasta', 'https://images.media-allrecipes.com/images/56589.png')
    recipeObj1: Recipe = new Recipe('Gobi Manchuri ', 'Gobi Manchuri is an indian cum chinse dish', 'http://s3.amazonaws.com/appforest_uf/f1486610188974x481748790945857800/Semi_Gravy_gobi__manchurian.jpg')
   */

 
  /* 
  @Output() selectedRecipeForDetailDescriptionFrmC2P_customEvent = new EventEmitter<Recipe>();

   onClickOfSingleRecipeItem(singleRecipeElement: Recipe) {
   // console.log(singleRecipeElement);
   this.selectedRecipeForDetailDescriptionFrmC2P_customEvent.emit(singleRecipeElement);

 } */

}
