import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RecipeService } from '../recipe-service/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  constructor(private recipeService : RecipeService) { }

  ngOnInit() {
  }

  @Input('detailededRecipeFromP2C') recipeObj: Recipe;

  onClickOfAddIngredientToShoppingList() {
    this.recipeService.addIngredientToShoppingList(this.recipeObj.ingredients);
    //ingredients -> is an array of ingredient elements
  }

}
