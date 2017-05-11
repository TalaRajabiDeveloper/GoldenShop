import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Product } from './Product';
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
    mode = 'Observable';

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

    changeFavourite(e:any) {
        console.log('a' + e);
    }

    getAll(id : number) {
        this.productService.
            getAll(id).
            subscribe(p => this.products = p);
    }
}

