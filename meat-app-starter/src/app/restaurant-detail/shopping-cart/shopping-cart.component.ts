import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart-service';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartServices: ShoppingCartService) { }

  ngOnInit() {
  }

  items(): any {
    return this.shoppingCartServices.items;
  }

  clear(){
    this.shoppingCartServices.clear();
  }

  removeItem(item: any){
    this.shoppingCartServices.removeItem(item);
  }

  addItem(item: any){
    this.shoppingCartServices.addItem(item);
  }

  total(): number{
    return this.shoppingCartServices.total();
  }

}
