import { Component, Input } from '@angular/core';
import { Recipe } from './recipe.model';
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html'

})

export class RecipeComponent {
  finalObject: Recipe;
  itemDetails(Object: Recipe){
    this.finalObject = Object;
    //console.log(Object);
  }
}
