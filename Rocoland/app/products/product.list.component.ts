import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Product } from './Product';
import { User } from '../users/User';
import { ProductType } from './ProductType';
import { ProductService } from './product.service';

@Component({
    selector: 'product-list',
    templateUrl: 'app/products/product.list.component.html',
    providers: [ProductService]
})
export class ProductListComponent implements OnInit {
    errorMessage: string;
    products: Product[];
    user : User;
    
    constructor(private productService: ProductService,
        private router: Router,
        private activatedRoute: ActivatedRoute) {
        
    }

    ngOnInit() {

        this.activatedRoute.params.subscribe(params => {
            if (params['id']) {
                this.getAll(params['id']);
            }
        });
    }

    changeFavourite(e: any, product: Product) {
        //this.user = new User("89fb16d0-8ad7-4bee-8864-3130971f0a0f");
        //product.fanUsers = User[1];
        //product.fanUsers.push(this.user);
        product.IsFavourite = e.newVal;

        this.productService
            .update(product)
            .subscribe(p => console.log(p));
    }

    getAll(id : number) {
        this.productService.
            getAll(id).
            subscribe(p => {
                this.products = p;
                console.log(p+'t');
            });
    }
}

