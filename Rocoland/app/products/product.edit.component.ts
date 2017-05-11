import { Component } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Product } from './product';
import { ProductType } from './productType';
import { Producer } from '../producers/producer';
import { ProductService } from './product.service';
import { ProductTypeService } from './productType.service';
import { ProducerService } from '../producers/producer.service';

@Component({
    selector: 'product-edit',
    templateUrl: 'app/products/product.edit.component.html',
    providers: [ProductService, ProductTypeService, ProducerService]
})

export class ProductEditComponent {
    public model: Product;
    public productTypes: ProductType[];
    public producers: Producer[];

    constructor(private productService: ProductService,
        private productTypeService: ProductTypeService,
        private producerService: ProducerService,
        private router: Router,
        private route: ActivatedRoute) {

        this.model = new Product();

        route.params.subscribe(params => {
            if (params['id']) {
                this.get(params['id']);
                this.getAllProductTypes();
                this.getAllProducers();
            }
        });
    }

    getAllProducers() {
        this.producerService.
            getAll().
            subscribe(result => this.producers = result);
    }

    getAllProductTypes() {
        this.productTypeService.
            getAll().
            subscribe(result => this.productTypes = result);
    }
    private get(id:number) {
        this.productService.get(id).subscribe(result => {
            this.model = result;
        });
    }

    private save(form : any) {
        if (form.valid) {
            this.productService.update(this.model).subscribe(result => {
                console.log(result);
                this.back();
            });
        }
    }

    private back() {
        this.router.navigate(['/products']);
    }

}