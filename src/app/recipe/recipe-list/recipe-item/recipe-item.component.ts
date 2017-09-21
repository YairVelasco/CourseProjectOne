import { Component, OnInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input('rec') recipe: Recipe;
  @Output() item = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }
  recipeItemClicked(){
    this.item.emit(this.recipe);
    console.log(this.recipe);
  }

}
