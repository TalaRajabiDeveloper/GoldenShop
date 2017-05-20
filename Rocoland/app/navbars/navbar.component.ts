import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductType } from '../products/productType';
import { ProductTypeService } from '../products/productType.service';
import { Product } from '../products/product';
import { ProductService } from '../products/product.service';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    providers: [ProductTypeService, ProductService]
    })

export class NavBarComponent implements  OnInit {
    productTypes: ProductType[];
    isLoading: boolean = false;
    products: Product[];

    constructor(private productTypeService: ProductTypeService,
        private productService: ProductService,
        private router: Router) {
        
    }

    find(filter: string) {    
        this.router.navigate(['/productlist/', 0]);
        //if (filter !== '') {
        //    this.isLoading = true;
        //    this.productService.find(filter).subscribe(p => {
        //        this.products = p;
        //        this.isLoading = false;
        //    });
        //} else {
        //    this.isLoading = true;
        //    this.productService.getAll(0).subscribe(p => {
        //        this.products = p;
        //        this.isLoading = false;
        //    });
        //}
    }

    ngOnInit(): void {

        this.productTypeService
            .getAll()
            .subscribe(res => this.productTypes = res);
    }
}