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
var product_1 = require("./product");
var product_service_1 = require("./product.service");
var productType_service_1 = require("./productType.service");
var producer_service_1 = require("../producers/producer.service");
var ProductEditComponent = (function () {
    function ProductEditComponent(productService, productTypeService, producerService, router, route) {
        var _this = this;
        this.productService = productService;
        this.productTypeService = productTypeService;
        this.producerService = producerService;
        this.router = router;
        this.route = route;
        this.model = new product_1.Product();
        route.params.subscribe(function (params) {
            if (params['id']) {
                _this.get(params['id']);
                _this.getAllProductTypes();
                _this.getAllProducers();
            }
        });
    }
    ProductEditComponent.prototype.getAllProducers = function () {
        var _this = this;
        this.producerService.
            getAll().
            subscribe(function (result) { return _this.producers = result; });
    };
    ProductEditComponent.prototype.getAllProductTypes = function () {
        var _this = this;
        this.productTypeService.
            getAll().
            subscribe(function (result) { return _this.productTypes = result; });
    };
    ProductEditComponent.prototype.get = function (id) {
        var _this = this;
        this.productService.get(id).subscribe(function (result) {
            _this.model = result;
        });
    };
    ProductEditComponent.prototype.save = function (form) {
        var _this = this;
        if (form.valid) {
            this.productService.update(this.model).subscribe(function (result) {
                console.log(result);
                _this.back();
            });
        }
    };
    ProductEditComponent.prototype.back = function () {
        this.router.navigate(['/products']);
    };
    return ProductEditComponent;
}());
ProductEditComponent = __decorate([
    core_1.Component({
        selector: 'product-edit',
        templateUrl: 'app/products/product.edit.component.html',
        providers: [product_service_1.ProductService, productType_service_1.ProductTypeService, producer_service_1.ProducerService]
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService,
        productType_service_1.ProductTypeService,
        producer_service_1.ProducerService,
        router_1.Router,
        router_1.ActivatedRoute])
], ProductEditComponent);
exports.ProductEditComponent = ProductEditComponent;
//# sourceMappingURL=product.edit.component.js.map