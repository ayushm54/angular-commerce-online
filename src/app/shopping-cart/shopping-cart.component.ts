import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/item.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartTotal = 0;

  items: Item[] = [
    new Item('Brown Bread', 25, 'Bread',
      'data:image/jpeg;base64,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', 1),
    new Item('Mango', 125, 'Fruits',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS3S4VZ9U6Yu-9RnvFe7GXdsNxzBBaij4Crzw&usqp=CAU', 1),
    new Item('Amul Butter', 90, 'Dairy',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRU9aFLdDEnNzD7EoEn5QXAPfAtxp655F6pew&usqp=CAU', 1),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}