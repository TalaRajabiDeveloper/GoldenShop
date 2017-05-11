import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductType } from '../products/productType';
import { ProductTypeService } from '../products/productType.service';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    providers: [ProductTypeService]
    })

export class NavBarComponent implements  OnInit {
    productTypes: ProductType[];

    constructor(private  productTypeService: ProductTypeService) {
        
    }

    ngOnInit(): void {

        this.productTypeService
            .getAll()
            .subscribe(res => this.productTypes = res);
    }
}