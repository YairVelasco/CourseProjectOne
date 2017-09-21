import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() item = new EventEmitter<Recipe>();
  value = 'Nothing';
  recipes: Recipe[] = [
    new Recipe('Chiles en nogada',
    'platillo poblano por excelencia',
    'http://www.aspic.edu.mx/wp-content/uploads/2013/09/chile-en-nogada.jpg'),
    new Recipe('Sopitos',
    'Platillo Colimense muy rico',
    'http://www.afmedios.com/file/2017/09/sopitos.jpg'),
    new Recipe('Enchiladas colimotas',
    'Ricas enchiladas de mole rellenas de carne',
    'http://farm4.static.flickr.com/3061/2505847148_819f5e2481.jpg'),
    new Recipe('Pozole seco',
    'Platillo colimense, acompañado con rabanos',
    'http://img1.wikia.nocookie.net/__cb20140515011853/colimacapital/images/e/ec/Pozole1.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }
  itemDetails(Object: Recipe){
    this.item.emit(Object);
    console.log(Object);
  }

}
