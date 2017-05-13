import { Component, OnInit, Renderer } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Product } from './Product';
import { ProductType } from './ProductType';
import { ProductService } from './product.service';

@Component({
    selector: 'product',
    templateUrl: 'app/products/product.component.html',
    providers: [ProductService]
})
export class ProductComponent implements OnInit {
    errorMessage: string;
    fadeOut: boolean=false;
    products: Product[];
    mode = 'Observable';
    isLoading: boolean = true;

    constructor(private productService: ProductService,
        private router: Router,
        private render: Renderer) {

    }

    ngOnInit() {
        this.getAll();
    }


    getAll() {
        this.productService.getAll(0).subscribe(p => {
            this.products = p;
            this.isLoading = false;
        });
    }


delete(product: any, e: any) {
        var target = e.currentTarget;

        this.productService.delete(product.Id).subscribe(p => {
            e.preventDefault();
            this.render.setElementClass(target.parentElement.parentElement, "step", true);
            //target.parentElement.parentElement.addClass('step');
            //this.fadeOut = true;
            //let exists = this.products.indexOf(product);
            //if (exists > -1) {
            //    this.products.splice(exists, 1);
            //}
        });
    }

    edit(id: number) {
        this.router.navigate(['/products/edit', id]);
    }
    
}




