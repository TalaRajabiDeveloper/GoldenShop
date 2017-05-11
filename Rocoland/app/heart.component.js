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
var HeartComponent = (function () {
    function HeartComponent() {
        this.isFavourite = false;
        this.change = new core_1.EventEmitter();
    }
    HeartComponent.prototype.changefav = function () {
        this.isFavourite = !this.isFavourite;
        this.change.emit({ newVal: this.isFavourite });
    };
    return HeartComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], HeartComponent.prototype, "isFavourite", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], HeartComponent.prototype, "change", void 0);
HeartComponent = __decorate([
    core_1.Component({
        selector: 'heart',
        templateUrl: './heart.component.html'
    })
], HeartComponent);
exports.HeartComponent = HeartComponent;
//# sourceMappingURL=heart.component.js.map