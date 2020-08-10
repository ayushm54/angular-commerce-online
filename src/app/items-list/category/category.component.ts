import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../shared/item.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  selectedCategory = 'All Categories';
  categories = [
    'All Categories',
    'Bread',
    'Dairy',
    'Fruits',
    'Seasoning and Spices',
    'Vegetables'
  ];

  constructor(
    private itemService: ItemService
  ) { }

  ngOnInit(): void {
  }

  filterItems(category: string): void {
    this.selectedCategory = category;
    this.itemService.filterItems(category);
  }

}
