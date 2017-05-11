"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
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
var heart_component_1 = require("./heart.component");
var appRoutes = [
    { path: 'productlist/:id', component: product_list_component_1.ProductListComponent },
    { path: 'products', component: product_component_1.ProductComponent },
    { path: 'products/edit/:id', component: product_edit_component_1.ProductEditComponent },
    { path: '*', component: product_list_component_1.ProductListComponent },
    { path: '', redirectTo: '/productlist/0', pathMatch: 'full' }
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
            router_1.RouterModule.forRoot(appRoutes)],
        declarations: [
            app_component_1.AppComponent,
            navbar_component_1.NavBarComponent,
            product_component_1.ProductComponent,
            product_edit_component_1.ProductEditComponent,
            product_list_component_1.ProductListComponent,
            footer_component_1.FooterComponent,
            header_component_1.HeaderComponent,
            heart_component_1.HeartComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map