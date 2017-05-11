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
var ProductListComponent = (function () {
    function ProductListComponent(productService, router, activatedRoute) {
        this.productService = productService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            if (params['id']) {
                _this.getAll(params['id']);
            }
        });
    };
    ProductListComponent.prototype.changeFavourite = function (e, product) {
        //this.user = new User("89fb16d0-8ad7-4bee-8864-3130971f0a0f");
        //product.fanUsers = User[1];
        //product.fanUsers.push(this.user);
        product.IsFavourite = e.newVal;
        this.productService
            .update(product)
            .subscribe(function (p) { return console.log(p); });
    };
    ProductListComponent.prototype.getAll = function (id) {
        var _this = this;
        this.productService.
            getAll(id).
            subscribe(function (p) {
            _this.products = p;
            console.log(p + 't');
        });
    };
    return ProductListComponent;
}());
ProductListComponent = __decorate([
    core_1.Component({
        selector: 'product-list',
        templateUrl: 'app/products/product.list.component.html',
        providers: [product_service_1.ProductService]
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService,
        router_1.Router,
        router_1.ActivatedRoute])
], ProductListComponent);
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product.list.component.js.map