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
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var http_1 = require("@angular/http");
var ProductTypeService = (function () {
    function ProductTypeService(http) {
        this.http = http;
    }
    ProductTypeService.prototype.getAll = function () {
        return this.http.get('api/ProductType/GetAll').map(function (res) { return res.json(); });
    };
    ProductTypeService.prototype.get = function (id) {
        return this.http.get("api/ProductType/" + id).map(function (res) { return res.json(); });
    };
    ProductTypeService.prototype.update = function (productType) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.put('api/ProductType/', productType, headers).map(function (res) { return res; });
    };
    ProductTypeService.prototype.delete = function (id) {
        return this.http.delete("api/ProductType/" + id);
    };
    return ProductTypeService;
}());
ProductTypeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProductTypeService);
exports.ProductTypeService = ProductTypeService;
//# sourceMappingURL=productType.service.js.map