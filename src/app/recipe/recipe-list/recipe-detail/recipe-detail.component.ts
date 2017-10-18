import { Component, OnInit, ContentChild, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})


export class RecipeDetailComponent implements OnInit {
  @Input() recipeDetail: Recipe;
  constructor() { }


  ngOnInit() {
    //Default selected recipe 
    this.recipeDetail = {name: 'Chiles en nogada', description: 'Platillo poblano por excelencia', imagePath: 'http://www.aspic.edu.mx/wp-content/uploads/2013/09/chile-en-nogada.jpg'};
  }

}
