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
var user_1 = require("./user");
var user_service_1 = require("./user.service");
var UserEditComponent = (function () {
    function UserEditComponent(userService, router, route) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.model = new user_1.User();
        route.params.subscribe(function (params) {
            if (params['id']) {
                _this.get(params['id']);
            }
        });
    }
    UserEditComponent.prototype.get = function (id) {
        var _this = this;
        this.userService.getById(id).subscribe(function (result) {
            _this.model = result;
        });
    };
    UserEditComponent.prototype.save = function (form) {
        var _this = this;
        if (form.valid) {
            this.userService.update(this.model).subscribe(function (result) {
                console.log(result);
                _this.back();
            });
        }
    };
    UserEditComponent.prototype.back = function () {
        this.router.navigate(['/users']);
    };
    return UserEditComponent;
}());
UserEditComponent = __decorate([
    core_1.Component({
        selector: 'user-edit',
        templateUrl: './user.edit.component.html',
        providers: [user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        router_1.Router,
        router_1.ActivatedRoute])
], UserEditComponent);
exports.UserEditComponent = UserEditComponent;
//# sourceMappingURL=user.edit.component.js.map