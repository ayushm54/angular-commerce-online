import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../shared/item.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  selectedCategory = 'All';

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
