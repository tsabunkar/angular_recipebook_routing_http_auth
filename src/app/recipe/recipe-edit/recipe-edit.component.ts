import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NumberFormatStyle } from '@angular/common';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  idToBeEdited: number;
  isInEditMode: boolean = false;//initially assuming we creating a new recipe (i.e- not in the edit mode)

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((param: Params) => {
      console.log();
      this.idToBeEdited = +param['id']
      console.log('fetching id value ', param['id']);
      //if url is http://localhost:4200/recipes/new -> then we get param['id'] value as undefined  (New Recipe)
      //if url is http://localhost:4200/recipes/0/edit -> then we get param['id'] value as - 0 (Edit Recipe)
      this.isInEditMode = param['id'] != null;
      console.log('isInEditMode ', this.isInEditMode);
    })
  }

}
