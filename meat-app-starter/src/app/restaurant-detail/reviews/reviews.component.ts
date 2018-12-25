import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RestaurantServices } from 'app/restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>

  constructor(private restaurantServices: RestaurantServices,
              private routes: ActivatedRoute) { }

  ngOnInit() {
    //using pipe async on template
    this.reviews = this.restaurantServices.reviewsOfRestaurant(this.routes.parent.snapshot.params['id']);
  }

}
