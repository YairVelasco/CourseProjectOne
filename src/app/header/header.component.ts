import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  recipeTogg: boolean;
  shoppingTogg: boolean;
  @Output() recipeClicked = new EventEmitter<boolean>();
  @Output() shoppingClicked = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }
  onRecipeClicked(){
    //console.log("Shoppinglist was clicked has been clicked!");
    //console.log(this.recipeClicked);
    this.recipeTogg = true;
    this.shoppingTogg = false;
    this.recipeClicked.emit(this.recipeTogg);
    this.shoppingClicked.emit(this.shoppingTogg);
  }
  onShoppingClicked(){
    //console.log("Shoppinglist was clicked has been clicked!");
    this.recipeTogg = false;
    this.shoppingTogg = true;
    this.recipeClicked.emit(this.recipeTogg);
    this.shoppingClicked.emit(this.shoppingTogg);
  }

}
