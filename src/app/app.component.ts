import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recipeClicked= true;
  shoppinglistClicked= false;
  recipeToggled(state: boolean){
    this.recipeClicked = state;
  }
  shoppingToggled(state: boolean){
    this.shoppinglistClicked = state;
  }
}
