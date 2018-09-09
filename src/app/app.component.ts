import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  shouldShowRecipesTab: string;

  onClickOfHeaderEvent(event) {
    if (event == 'recipe')
      this.shouldShowRecipesTab = 'show_recipe';
    else
      this.shouldShowRecipesTab = 'show_shopping';
  }


}
