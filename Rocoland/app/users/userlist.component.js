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
var user_service_1 = require("./user.service");
var cell_component_1 = require("./cell.component");
var UserListComponent = (function () {
    function UserListComponent(userService, router, render) {
        this.userService = userService;
        this.router = router;
        this.render = render;
        this.fadeOut = false;
        this.mode = 'Observable';
        this.isLoading = true;
        this.gridOptions = {};
        this.gridOptions.columnDefs = [
            {
                headerName: "ID",
                field: "id",
                width: 100
            },
            {
                headerName: "Value",
                field: "value",
                cellRendererFramework: cell_component_1.CellComponent,
                width: 100
            },
        ];
        this.gridOptions.rowData = [
            { id: 5, value: 10 },
            { id: 10, value: 15 },
            { id: 15, value: 20 }
        ];
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    UserListComponent.prototype.getAll = function () {
        var _this = this;
        this.isLoading = true;
        this.userService.
            getAll()
            .subscribe(function (p) {
            _this.users = p;
            _this.isLoading = false;
        });
    };
    UserListComponent.prototype.delete = function (user, e) {
        var _this = this;
        var target = e.currentTarget;
        this.userService.delete(user.Id).subscribe(function (p) {
            e.preventDefault();
            _this.render.setElementClass(target.parentElement.parentElement, "step", true);
            //target.parentElement.parentElement.addClass('step');
            //this.fadeOut = true;
            //let exists = this.users.indexOf(user);
            //if (exists > -1) {
            //    this.users.splice(exists, 1);
            //}
        });
    };
    UserListComponent.prototype.edit = function (id) {
        this.router.navigate(['/users/edit', id]);
    };
    return UserListComponent;
}());
UserListComponent = __decorate([
    core_1.Component({
        selector: 'userlist',
        templateUrl: './userlist.component.html',
        providers: [user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        router_1.Router,
        core_1.Renderer])
], UserListComponent);
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=userlist.component.js.map