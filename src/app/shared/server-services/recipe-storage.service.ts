import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RecipeService } from '../../recipe/recipe-service/recipe.service';
import { Recipe } from '../../recipe/models/recipe.model';

import { Observable, throwError, of } from "rxjs";
import { catchError, map } from 'rxjs/operators';


@Injectable()
export class RecipeStorageBackendService {
    //This service is used to fetch and post the data from/to the backend server
    //we r using backend server as firebase (which has builitn database to persist our data)
    constructor(private httpClient: HttpClient, private recipeService: RecipeService) { }

    url: string = 'https://ng-recipe-book-4712d.firebaseio.com/recipes.json';

    //Both POST & PUT (bcoz- firebase server is smart enough to create new record if sending 
    //data for first time, update exisiting record if sending exisitng data)
    storeRecipe(): Observable<void | Recipe[]> {

        let payload: Recipe[] = this.recipeService.getRecipe();

        //put u can perform both post(create new) and put(update existing data)
        return this.httpClient.put<Recipe[]>(this.url, payload) //! we r specifiying that put request must 
            //!  return me <Recipe[]> data type, Rather than specifiying in the map() methods argument
            .pipe(
                map((responseData) => { //* map((responseData : Recipe[]) -> no need to specifiy the data type bcoz already specified at-> put<Recipe[]>
                    console.log(responseData);
                    return responseData;
                    //! This return -bcoz-> while subscribe(ing) this Observable type
                    //! I specifically need Recipe[] datatype
                }),
                catchError(err => {
                    this.handlerError(err);
                    throw err;
                })
            )

    }

    //GETALL
    getAllRecipe(): Observable<void> {
        return this.httpClient.get<Recipe[]>(this.url)
            .pipe(
                map((responseData) => {
                    this.recipeService.setRecipesArray(responseData); //!updating the recipeArray which is present in recipeService class
                    console.log(responseData);
                    // return responseData;
                }),
                catchError(err => {
                    this.handlerError(err);
                    throw err;
                })
            )
    }

    handlerError(err: any) {
        console.log('error has occured bro:', err);
        return err;
    }

}