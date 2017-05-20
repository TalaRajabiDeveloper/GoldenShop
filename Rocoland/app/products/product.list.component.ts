import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Product } from './Product';
import { User } from '../users/User';
import { Login } from '../users/login';
import { ProductType } from './ProductType';
import { ProductService } from './product.service';
import { UserService } from '../users/user.service';
import {OrderService} from '../orders/order.service';

@Component({
    selector: 'product-list',
    templateUrl: 'app/products/product.list.component.html',
    providers: [ProductService,
                UserService,
                OrderService]
})
export class ProductListComponent implements OnInit {
    errorMessage: string;
    products: Product[];
    user : User;
    lg: Login;
    isLoading: boolean = true;

    constructor(private productService: ProductService,
        private userService: UserService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private orderService: OrderService) {
        
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            if (params['id']) {
                this.getAll(params['id']);
            }
        });
    }

    changeFavourite(e: any, product: Product) {
       
        product.IsFavourite = e.newVal;

        this.productService
            .update(product)
            .subscribe(p => console.log(p));
    }

    addToCart(product: Product) {
        this.orderService
            .post(product)
            .subscribe(p => console.log((p)));
    }

    getAll(id: number) {
        this.productService.
            getAll(id).
            subscribe(p => {
                this.isLoading = false;
                this.products = p;
            });
    }
}

