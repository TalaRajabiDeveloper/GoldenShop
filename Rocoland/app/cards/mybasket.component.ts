import { Component, OnInit } from '@angular/core';
import { Order } from '../orders/order';
import { OrderService } from '../orders/order.service';

@Component({
    selector: 'my-basket',
    templateUrl: './mybasket.component.html',
    providers: [OrderService]
})
export class MyBasketComponent implements OnInit {
    isLoading: boolean = true;
    mybasket: any;
    order : Order;

    constructor(private orderService: OrderService) {

    }

    ngOnInit(): void {
        this.getMyOrders();
    }

    getMyOrders() {
        this.orderService.getMyOrders().subscribe(p => {
            this.order = p;
            this.mybasket = p.OrderItems;
            this.isLoading = false;
        });
    }
}