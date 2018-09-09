import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeComponent } from '../recipe/recipe.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { RecipeDetailsComponent } from '../recipe/recipe-details/recipe-details.component';
import { RecipeStartComponent } from '../recipe/recipe-start/recipe-start.component';

const appRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/recipes' },
    {
        path: 'recipes', component: RecipeComponent, children: [
            { path: '', component: RecipeStartComponent },// http://localhost:4200/recipes
            { path: ':myid', component: RecipeDetailsComponent }, // http://localhost:4200/recipes/{myid}
        ]
    },
    { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }

