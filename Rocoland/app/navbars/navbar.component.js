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
var productType_service_1 = require("../products/productType.service");
var NavBarComponent = (function () {
    function NavBarComponent(productTypeService, router) {
        this.productTypeService = productTypeService;
        this.router = router;
    }
    NavBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productTypeService
            .getAll()
            .subscribe(function (res) { return _this.productTypes = res; });
    };
    return NavBarComponent;
}());
NavBarComponent = __decorate([
    core_1.Component({
        selector: 'navbar',
        templateUrl: './navbar.component.html',
        providers: [productType_service_1.ProductTypeService]
    }),
    __metadata("design:paramtypes", [productType_service_1.ProductTypeService,
        router_1.Router])
], NavBarComponent);
exports.NavBarComponent = NavBarComponent;
//# sourceMappingURL=navbar.component.js.map