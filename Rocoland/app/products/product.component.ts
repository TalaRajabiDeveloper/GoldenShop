import { Component, OnInit, Renderer } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Product } from './Product';
import { ProductType } from './ProductType';
import { ProductService } from './product.service';
import { ProductTypeService } from '../products/productType.service';

@Component({
    selector: 'product',
    templateUrl: 'app/products/product.component.html',
    providers: [ProductService, ProductTypeService]
})
export class ProductComponent implements OnInit {
    errorMessage: string;
    fadeOut: boolean=false;
    products: Product[];
    productTypes: ProductType[];
    mode = 'Observable';
    isLoading: boolean = true;

    constructor(private productService: ProductService,
        private productTypeService: ProductTypeService,
        private router: Router,
        private render: Renderer) {

    }

    ngOnInit() {
        this.getAll(0);
        this.getAllProductTypes();
    }


    getAll(productType: number) {
        this.isLoading = true;
        this.productService.getAll(productType).subscribe(p => {
            this.products = p;
            this.isLoading = false;
        });
    }

    getAllProductTypes() {
        this.productTypeService.getAll().subscribe(p => {
            this.productTypes = p;
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




