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
    this.recipeDetail = {name: 'chiles en nogada', description: 'Chiles que estan chidos', imagePath: 'http://www.aspic.edu.mx/wp-content/uploads/2013/09/chile-en-nogada.jpg'};
  }

}
