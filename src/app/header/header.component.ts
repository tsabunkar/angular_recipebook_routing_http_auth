import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RecipeStorageBackendService } from '../shared/server-services/recipe-storage.service';
import { Recipe } from '../recipe/models/recipe.model';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'
})

export class HeaderComponent implements OnInit {
    constructor(private recipeStorageBackendService: RecipeStorageBackendService) { }

    ngOnInit() { }
    /*     @Output() customeChild_ClickedEvent = new EventEmitter<string>();
    
        OnClickOfTab(myVara: string) {
            this.customeChild_ClickedEvent.emit(myVara);
        } */

    onSaveData() {
        this.recipeStorageBackendService.storeRecipe()
            .subscribe(
                (respData: Recipe[]) => {
                    console.log('---subscriber----');
                    console.log(respData);
                },
                (err) => {
                    console.log(err);
                }
            )
    }

    onFetchData() {
        this.recipeStorageBackendService.getAllRecipe()
            .subscribe();
    }


}