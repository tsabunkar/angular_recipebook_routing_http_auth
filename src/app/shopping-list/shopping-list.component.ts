import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';
import { ShoppingListService } from './shopping-service/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredientsArray: Ingredient[] = [];
  // ingredirentObjectAddedProp : Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    // this.ingredientsArray.push(this.ingredientObj1, this.ingredientObj2)
    this.ingredientsArray = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientElementAddedToIngredientArray_CustomEvent
      .subscribe((ingredEle: Ingredient[]) => {
        this.ingredientsArray = ingredEle
      })
  }

  /*   ingredientObj1: Ingredient = new Ingredient('Laptop', 100000);
    ingredientObj2: Ingredient = new Ingredient('Keyboard', 999); */

  /*  ingredirentObjectAddedFunc(event: Ingredient) {
     this.ingredientsArray.push(event)
   } */

}
