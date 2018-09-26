import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeComponent } from '../recipe/recipe.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { RecipeDetailsComponent } from '../recipe/recipe-details/recipe-details.component';
import { RecipeStartComponent } from '../recipe/recipe-start/recipe-start.component';
import { RecipeEditComponent } from '../recipe/recipe-edit/recipe-edit.component';
import { SignupComponent } from '../auth/signup/signup.component';
import { SigninComponent } from '../auth/signin/signin.component';
import { AuthGuard } from '../auth/auth-guard.service';

const appRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/recipes' },
    {
        path: 'recipes', component: RecipeComponent, children: [
            { path: '', component: RecipeStartComponent },// http://localhost:4200/recipes
            { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] }, // http://localhost:4200/recipes/new
            { path: ':myid', component: RecipeDetailsComponent }, // http://localhost:4200/recipes/{myid}
            { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] }, // http://localhost:4200/recipes/{id}/edit

            //!Note : dynamic paramter in the routes should come last in the priority
            //! i.e - first preference to  http://localhost:4200/recipes/new then next prefernce to
            //! http://localhost:4200/recipes/{myid}
        ]
    },
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }

