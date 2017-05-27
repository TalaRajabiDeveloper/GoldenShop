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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var productType_service_1 = require("../products/productType.service");
var product_service_1 = require("../products/product.service");
var order_service_1 = require("../orders/order.service");
var NavBarComponent = (function () {
    function NavBarComponent(productTypeService, productService, orderService, activatedRoute, router) {
        this.productTypeService = productTypeService;
        this.productService = productService;
        this.orderService = orderService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.isLoading = false;
        this.myOrderItems = 0;
    }
    NavBarComponent.prototype.find = function (searchText) {
        var _this = this;
        var productTypeId = 0;
        this.activatedRoute.params.subscribe(function (params) {
            if (params['id']) {
                productTypeId = params['id'];
            }
            _this.router.navigate(['/productlist', productTypeId, searchText]);
        });
    };
    NavBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productTypeService
            .getAll()
            .subscribe(function (res) { return _this.productTypes = res; });
        this.orderService
            .getMyOrders()
            .subscribe(function (res) {
            _this.myOrderItems = res.OrderItems.length;
        });
    };
    return NavBarComponent;
}());
NavBarComponent = __decorate([
    core_1.Component({
        selector: 'navbar',
        templateUrl: './navbar.component.html',
        providers: [productType_service_1.ProductTypeService,
            order_service_1.OrderService,
            product_service_1.ProductService]
    }),
    __metadata("design:paramtypes", [productType_service_1.ProductTypeService,
        product_service_1.ProductService,
        order_service_1.OrderService,
        router_1.ActivatedRoute,
        router_1.Router])
], NavBarComponent);
exports.NavBarComponent = NavBarComponent;
//# sourceMappingURL=navbar.component.js.map