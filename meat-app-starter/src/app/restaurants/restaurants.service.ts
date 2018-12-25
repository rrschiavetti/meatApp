import { Restaurant } from "./restaurant/restaurant.model";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable"
import { MEAT_API } from "app/app.api"
import { Injectable } from "@angular/core";
import { ErrorHandler } from "./../app.error-handler"
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { errorHandler } from "@angular/platform-browser/src/browser";
import { MenuItem } from "app/restaurant-detail/menu-item/menu-item.model";

@Injectable()
export class RestaurantServices {

    constructor(private http: Http){}

    restaurants(): Observable<Restaurant[]> {
        return this.http.get(`${MEAT_API}/restaurants`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError);
    }

    restaurantById(id: string): Observable<Restaurant> {
        return this.http.get(`${MEAT_API}/restaurants/${id}`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError);
    }

    reviewsOfRestaurant(id: string): Observable<any> {
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError);
    }

    menuOfRestaurant(id: string): Observable<MenuItem[]>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError);

    }
}