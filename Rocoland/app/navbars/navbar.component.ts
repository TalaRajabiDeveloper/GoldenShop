import { Component , OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductType } from '../products/productType';
import { ProductTypeService } from '../products/productType.service';
import { Product } from '../products/product';
import { ProductService } from '../products/product.service';
import { OrderService } from '../orders/order.service';
import { AuthenticationService } from '../account/authentication.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  providers: [
    ProductTypeService,
    OrderService,
    ProductService,
    AuthenticationService
  ]
})
export class NavBarComponent implements OnInit {
  productTypes: ProductType[];
  isLoading: boolean = false;
  products: Product[];
  myOrderItems: number = 0;
  userName: string;
  loginTitle: string ="Login";
  loginImage: string ="glyphicon-log-in";


  constructor(private productTypeService: ProductTypeService,
    private productService: ProductService,
    private orderService: OrderService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private auth : AuthenticationService) {

    }

  loginlogout(){
    if (this.auth.loggedIn()) {
      this.auth.logout();;
      this.router.navigate(['productlist']);
    } else {
      this.router.navigate(['login']);
    }
  }

 
  find(searchText: string) {
      let productTypeId: number=0;

      this.activatedRoute.params.subscribe(params => {
        if (params['id']) {
          productTypeId = params['id'];
        }
        this.router.navigate(['/productlist', productTypeId, searchText]);
      });
    }

    ngOnInit(): void {
        this.productTypeService
            .getAll()
        .subscribe(res => this.productTypes = res);

      this.orderService
        .getMyOrders()
        .subscribe(res => {
          this.myOrderItems = res.OrderItems.length;
        });
      
    }
}