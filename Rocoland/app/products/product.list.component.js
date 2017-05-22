"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var product_service_1 = require("./product.service");
var user_service_1 = require("../users/user.service");
var order_service_1 = require("../orders/order.service");
var ProductListComponent = (function () {
    function ProductListComponent(productService, userService, router, activatedRoute, orderService) {
        this.productService = productService;
        this.userService = userService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.orderService = orderService;
        this.isLoading = true;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            var id = 0;
            var productName = "0";
            if (params['id']) {
                id = params['id'];
            }
            if (params['productName']) {
                productName = params['productName'];
            }
            _this.getAll(id, productName);
        });
    };
    ProductListComponent.prototype.changeFavourite = function (e, product) {
        product.IsFavourite = e.newVal;
        this.productService
            .update(product)
            .subscribe(function (p) { return console.log(p); });
    };
    ProductListComponent.prototype.addToCart = function (product) {
        this.orderService
            .post(product)
            .subscribe(function (p) { return console.log((p)); });
    };
    ProductListComponent.prototype.getAll = function (id, productName) {
        var _this = this;
        this.productService.
            getAll(id, productName).
            subscribe(function (p) {
            _this.isLoading = false;
            _this.products = p;
        });
    };
    return ProductListComponent;
}());
ProductListComponent = __decorate([
    core_1.Component({
        selector: 'product-list',
        templateUrl: 'app/products/product.list.component.html',
        providers: [product_service_1.ProductService,
            user_service_1.UserService,
            order_service_1.OrderService]
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService,
        user_service_1.UserService,
        router_1.Router,
        router_1.ActivatedRoute,
        order_service_1.OrderService])
], ProductListComponent);
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product.list.component.js.map