import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';
import { ShoppingListService } from './shopping-service/shopping.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  private mysubscription: Subscription;
  ingredientsArray: Ingredient[] = [];
  // ingredirentObjectAddedProp : Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  /*   ngOnInit() {
      // this.ingredientsArray.push(this.ingredientObj1, this.ingredientObj2)
      this.ingredientsArray = this.shoppingListService.getIngredients();
      this.shoppingListService.ingredientElementAddedToIngredientArray_CustomEvent
        .subscribe((ingredEle: Ingredient[]) => {
          this.ingredientsArray = ingredEle
        })
    }
   */
  //!using subject instead of emitting customEvent
  ngOnInit() {
    // this.ingredientsArray.push(this.ingredientObj1, this.ingredientObj2)
    this.ingredientsArray = this.shoppingListService.getIngredients();
    this.mysubscription = this.shoppingListService.ingredientElementAddedToIngredientArray_CustomSubject
      .subscribe((ingredEle: Ingredient[]) => {
        this.ingredientsArray = ingredEle
      })
  }

  /*   ingredientObj1: Ingredient = new Ingredient('Laptop', 100000);
    ingredientObj2: Ingredient = new Ingredient('Keyboard', 999); */

  /*  ingredirentObjectAddedFunc(event: Ingredient) {
     this.ingredientsArray.push(event)
   } */

  //*unsubscribing the custom created subject or Observable
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.mysubscription.unsubscribe();//this will prevent any memory leak, whil creating own subject/observable
  }

  onEditItem(index: number) {
    this.shoppingListService.startedEditingShoppingItem_CustomSubject.next(index);
  }
}
