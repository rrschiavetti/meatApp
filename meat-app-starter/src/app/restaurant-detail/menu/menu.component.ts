import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RestaurantServices } from 'app/restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>

  constructor(private restaurantServices: RestaurantServices,
              private routes: ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.restaurantServices
      .menuOfRestaurant(this.routes.parent.snapshot.params['id'])
  }

  addMenuItem(item: MenuItem){
    console.log(item);
  }

}
