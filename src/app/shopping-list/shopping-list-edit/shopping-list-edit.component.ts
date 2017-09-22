import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  // @ViewChild('ingredientInput') ingInput: ElementRef;
  // @ViewChild('amountInput') amntInput: ElementRef;
  @Output() ingredient = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }
  onAddClick(){
    event.preventDefault();
    console.log(event);
    //this.ingredient.emit(new Ingredient(this.ingInput.nativeElement.value, this.amntInput.nativeElement.value ));
    this.ingredient.emit(new Ingredient(event.target[0].value, event.target[1].value));
  }

}
