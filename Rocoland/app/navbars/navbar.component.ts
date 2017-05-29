import { Component , OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductType } from '../products/productType';
import { ProductTypeService } from '../products/productType.service';
import { Product } from '../products/product';
import { ProductService } from '../products/product.service';
import { OrderService } from '../orders/order.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  providers: [
    ProductTypeService,
    OrderService,
    ProductService
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
    private router: Router) {

    let currentUser: any;
    currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser)
      this.userName = currentUser.dbUser.Email;
    this.changeLoginTitle();
  }

  loginlogout(){
    if (localStorage.getItem('currentUser')) {
      localStorage.removeItem('currentUser');
      this.router.navigate(['productlist']);
    } else {
      this.router.navigate(['login']);
    }
  }

  changeLoginTitle() {
    if (localStorage.getItem('currentUser')) {
      this.loginTitle = "Logout";
      this.loginImage = "glyphicon-log-out";
    } else {
      this.loginTitle = "Login";
      this.loginImage = "glyphicon-log-in";
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