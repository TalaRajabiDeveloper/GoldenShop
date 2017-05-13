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
var ValidationErrorComponent = (function () {
    function ValidationErrorComponent() {
    }
    return ValidationErrorComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ValidationErrorComponent.prototype, "fieldName", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ValidationErrorComponent.prototype, "fieldTitle", void 0);
ValidationErrorComponent = __decorate([
    core_1.Component({
        selector: 'validation-error',
        template: "\n        <div *ngIf=\"fieldName.errors && (fieldName.dirty || fieldName.touched)\"\n             class=\"alert alert-danger\">\n            <div *ngIf =\"fieldName.errors.required\">\n                {{fieldTitle}} is required.\n            </div>\n            <div *ngIf =\"fieldName.errors.minlength\">\n                {{fieldTitle}} must be at least {{fieldName.errors.minlength.requiredLength}} characters long.\n            </div>\n            <div *ngIf =\"fieldName.errors.maxlength\">\n                {{fieldTitle}} cannot be more than {{fieldName.errors.maxlength.requiredLength}} characters long.\n            </div>\n        </div>\n"
    })
], ValidationErrorComponent);
exports.ValidationErrorComponent = ValidationErrorComponent;
//# sourceMappingURL=validation.error.component.js.map