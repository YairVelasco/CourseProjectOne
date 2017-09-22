import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Chiles', 5),
    new Ingredient('Crema', 1),
    new Ingredient('Eggs', 3)
  ];
  constructor() { }

  ngOnInit() {
  }
  addIngredient(ingred: Ingredient){
    console.log(ingred);
    this.ingredients.push(ingred);

  }
}
