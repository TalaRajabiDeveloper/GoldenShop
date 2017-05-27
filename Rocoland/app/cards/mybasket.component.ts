import { Component, OnInit, Renderer } from '@angular/core';
import { Order } from '../orders/order';
import { OrderItem } from '../orders/orderItem';
import { OrderService } from '../orders/order.service';

@Component({
    selector: 'my-basket',
    templateUrl: './mybasket.component.html',
    providers: [OrderService]
})
export class MyBasketComponent implements OnInit {
    isLoading: boolean = true;
    quantityValues: number[];
    mybasket: OrderItem[];
    order : Order;

    constructor(private orderService: OrderService,
        private render: Renderer) {

    }

    ngOnInit(): void {
      this.quantityValues = [1, 2, 3, 4, 5];
      console.log(this.quantityValues);
      this.getMyOrders();
    }

    getMyOrders() {
        this.orderService.getMyOrders().subscribe(p => {
            this.order = p;
            this.mybasket = p.OrderItems;
            this.isLoading = false;
        });
    }

    getTotalPricePerItem(price:number,quantity:number) {
      return price * quantity;
    }


  getTotalPrice() {
    let total: number = 0;
    if (this.mybasket != undefined) {
      for (let orderItem of this.mybasket) {
        total += this.getTotalPricePerItem(orderItem.Price, orderItem.Quantity);
      }
      return total.toFixed(2);
    }
  }

  delete(orderItemId: number, e: any) {
        var target = e.currentTarget;

        this.orderService.delete(orderItemId).subscribe(p => {
            e.preventDefault();
            this.render.
                setElementClass(target.parentElement.parentElement, "step", true);
        });
    }

}