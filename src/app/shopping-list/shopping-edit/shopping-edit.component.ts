import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/models/ingredient.model';
import { ShoppingListService } from '../shopping-service/shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  @ViewChild('nameInput') nameVara: ElementRef;
  @ViewChild('amountInput') amountVara: ElementRef;

  /* 
    @Output('sendIngredientObjFrmC2P_customEvent') ingredientObj = new EventEmitter<Ingredient>();
  
    onAddInShoppingCart() {
      // console.log(this.nameVara.nativeElement.value);
      // console.log(this.amountVara.nativeElement.value);
      const ingredientName =  this.nameVara.nativeElement.value
      const ingredientAmount =  this.amountVara.nativeElement.value
      const newIngredient = new Ingredient(ingredientName, ingredientAmount);
      this.ingredientObj.emit(newIngredient)
  
    } 
    */

  onAddInShoppingCart() {
    const ingredientName = this.nameVara.nativeElement.value
    const ingredientAmount = this.amountVara.nativeElement.value
    const newIngredient = new Ingredient(ingredientName, ingredientAmount);
    this.shoppingListService.addIngredientsElementsToArray(newIngredient)
  }

}
