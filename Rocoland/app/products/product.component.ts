import { Component, OnInit, Renderer } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Product } from './Product';
import { ProductType } from './ProductType';
import { ProductService } from './product.service';
import { ProductTypeService } from '../products/productType.service';
import { GridOptions } from "ag-grid";
import { ProductCellComponent } from './productcell.component';

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
    private gridOptions: GridOptions;

    constructor(private productService: ProductService,
        private productTypeService: ProductTypeService,
        private router: Router,
        private render: Renderer) {
      this.initGrid();
    }

  initGrid() {
    this.gridOptions = {};
    this.gridOptions.columnDefs = [
      {
        headerName: "Id",
        field: "Id",
        width: 50
      },
      {
        headerName: "Name",
        field: "Name",
        width: 100
      },
      {
        headerName: "Product Type",
        field: "ProductTypeName",
        width: 100
      },
      ,
      {
        headerName: "Price",
        field: "Price",
        width: 100
      },
      {
        headerName: "Producer",
        field: "ProducerName",
        width: 100
      },
      {
        headerName: "Description",
        field: "Description",
        width: 100
      },
      {
        headerName: "Image",
        field: "PictrureId",
        cellRendererFramework: ProductCellComponent,
        width: 100
      }
    ];

  }

  ngOnInit() {
        this.getAll(0);
        this.getAllProductTypes();
    }


    getAll(productType: number) {
        this.isLoading = true;
        this.productService.
          getAll(productType, "t")
          .subscribe(p => {
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




