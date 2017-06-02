"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var main_1 = require("ag-grid-angular/main");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var navbar_component_1 = require("./navbars/navbar.component");
var footer_component_1 = require("./footers/footer.component");
var header_component_1 = require("./headers/header.component");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var product_component_1 = require("./products/product.component");
var product_edit_component_1 = require("./products/product.edit.component");
var product_list_component_1 = require("./products/product.list.component");
var heart_component_1 = require("./utilities/heart.component");
var register_component_1 = require("./account/register.component");
var login_component_1 = require("./account/login.component");
var mybasket_component_1 = require("./cards/mybasket.component");
var loading_component_1 = require("./utilities/loading.component");
var validation_error_component_1 = require("./utilities/validation.error.component");
var auth_guard_1 = require("./account/auth.guard");
var alert_component_1 = require("./alert/alert.component");
var alert_service_1 = require("./alert/alert.service");
var userlist_component_1 = require("./users/userlist.component");
var cell_component_1 = require("./users/cell.component");
var user_edit_component_1 = require("./users/user.edit.component");
var appRoutes = [
    { path: 'productlist/:id/:productName', component: product_list_component_1.ProductListComponent },
    { path: 'productlist', component: product_list_component_1.ProductListComponent },
    { path: 'userlist', component: userlist_component_1.UserListComponent },
    { path: 'products', component: product_component_1.ProductComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'products/edit/:id', component: product_edit_component_1.ProductEditComponent },
    { path: 'users/edit/:id', component: user_edit_component_1.UserEditComponent },
    { path: '*', component: product_list_component_1.ProductListComponent },
    { path: '', redirectTo: '/productlist', pathMatch: 'full' },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'shoppingcart', component: mybasket_component_1.MyBasketComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            main_1.AgGridModule.withComponents([cell_component_1.CellComponent]),
            router_1.RouterModule.forRoot(appRoutes)],
        declarations: [
            app_component_1.AppComponent,
            navbar_component_1.NavBarComponent,
            product_component_1.ProductComponent,
            product_edit_component_1.ProductEditComponent,
            product_list_component_1.ProductListComponent,
            footer_component_1.FooterComponent,
            header_component_1.HeaderComponent,
            heart_component_1.HeartComponent,
            login_component_1.LoginComponent,
            register_component_1.RegisterComponent,
            loading_component_1.LoadingComponent,
            validation_error_component_1.ValidationErrorComponent,
            mybasket_component_1.MyBasketComponent,
            alert_component_1.AlertComponent,
            userlist_component_1.UserListComponent,
            user_edit_component_1.UserEditComponent,
            cell_component_1.CellComponent
        ],
        providers: [auth_guard_1.AuthGuard, alert_service_1.AlertService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map