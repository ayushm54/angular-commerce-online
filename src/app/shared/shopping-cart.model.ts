import { Item } from './item.model';
export class ShoppingCart {
  constructor(
    public item: Item,
    public quantity: number,
    public itemTotal: number
  ) { }
}
