import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  value = 'Nothing';
  recipes: Recipe[] = [
    new Recipe('Chiles en nogada',
    'platillo poblano por excelencia',
    'http://www.aspic.edu.mx/wp-content/uploads/2013/09/chile-en-nogada.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
