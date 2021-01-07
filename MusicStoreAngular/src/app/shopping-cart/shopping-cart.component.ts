import { Component, OnInit } from '@angular/core';
import {ItemList} from '../itemList';
import {AccountService} from '../account.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  itemList: ItemList;
  total: string;

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.getShoppingCart();
  }

  getTotal(itemList: ItemList): string {
    let total = 0;
    for (const itemqt of itemList.items) {
      total += itemqt.quantity * itemqt.item.price;
    }
    return total.toFixed(2);
  }

  incItem(index: number): void {
    const item = this.itemList.items[index];
    item.quantity += 1;
    this.total = this.getTotal(this.itemList);
  }

  decItem(index: number): void {
    const item = this.itemList.items[index];
    item.quantity -= 1;
    if (item.quantity === 0) {
      this.itemList.items.splice(index, 1);
    }
    this.total = this.getTotal(this.itemList);
  }

  getShoppingCart(): void {
    this.accountService.getShoppingCart().subscribe(
      itemList => {this.itemList = itemList; this.total = this.getTotal(itemList); });
  }

}