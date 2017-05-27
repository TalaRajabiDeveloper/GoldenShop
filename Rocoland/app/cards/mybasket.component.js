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
var order_service_1 = require("../orders/order.service");
var MyBasketComponent = (function () {
    function MyBasketComponent(orderService, render) {
        this.orderService = orderService;
        this.render = render;
        this.isLoading = true;
    }
    MyBasketComponent.prototype.ngOnInit = function () {
        this.quantityValues = [1, 2, 3, 4, 5];
        console.log(this.quantityValues);
        this.getMyOrders();
    };
    MyBasketComponent.prototype.getMyOrders = function () {
        var _this = this;
        this.orderService.getMyOrders().subscribe(function (p) {
            _this.order = p;
            _this.mybasket = p.OrderItems;
            _this.isLoading = false;
        });
    };
    MyBasketComponent.prototype.getTotalPricePerItem = function (price, quantity) {
        return price * quantity;
    };
    MyBasketComponent.prototype.getTotalPrice = function () {
        var total = 0;
        if (this.mybasket != undefined) {
            for (var _i = 0, _a = this.mybasket; _i < _a.length; _i++) {
                var orderItem = _a[_i];
                total += this.getTotalPricePerItem(orderItem.Price, orderItem.Quantity);
            }
            return total.toFixed(2);
        }
    };
    MyBasketComponent.prototype.delete = function (orderItemId, e) {
        var _this = this;
        var target = e.currentTarget;
        this.orderService.delete(orderItemId).subscribe(function (p) {
            e.preventDefault();
            _this.render.
                setElementClass(target.parentElement.parentElement, "step", true);
        });
    };
    return MyBasketComponent;
}());
MyBasketComponent = __decorate([
    core_1.Component({
        selector: 'my-basket',
        templateUrl: './mybasket.component.html',
        providers: [order_service_1.OrderService]
    }),
    __metadata("design:paramtypes", [order_service_1.OrderService,
        core_1.Renderer])
], MyBasketComponent);
exports.MyBasketComponent = MyBasketComponent;
//# sourceMappingURL=mybasket.component.js.map