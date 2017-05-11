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
var ProductComponent = (function () {
    function ProductComponent(productService, router, render) {
        this.productService = productService;
        this.router = router;
        this.render = render;
        this.fadeOut = false;
        this.mode = 'Observable';
    }
    ProductComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    ProductComponent.prototype.getAll = function () {
        var _this = this;
        this.productService.
            getAll(0).
            subscribe(function (p) { return _this.products = p; });
    };
    ProductComponent.prototype.delete = function (product, e) {
        var _this = this;
        var target = e.currentTarget;
        this.productService.delete(product.Id).subscribe(function (p) {
            e.preventDefault();
            _this.render.setElementClass(target.parentElement.parentElement, "step", true);
            //target.parentElement.parentElement.addClass('step');
            //this.fadeOut = true;
            //let exists = this.products.indexOf(product);
            //if (exists > -1) {
            //    this.products.splice(exists, 1);
            //}
        });
    };
    ProductComponent.prototype.edit = function (id) {
        this.router.navigate(['/products/edit', id]);
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    core_1.Component({
        selector: 'product',
        templateUrl: 'app/products/product.component.html',
        providers: [product_service_1.ProductService]
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService,
        router_1.Router, core_1.Renderer])
], ProductComponent);
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product.component.js.map