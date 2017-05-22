import { Component, OnInit , Input } from '@angular/core';
import {Product} from '../products/product';

@Component({
    selector: 'product-search',
    templateUrl: 'app/search/product.search.component.html'
})
export class ProductSearchComponent  {
    errorMessage: string;
    @Input() products: Product[];
    isLoading: boolean = true;

    constructor() {
        
    }
}

