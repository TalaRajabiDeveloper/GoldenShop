import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavBarComponent } from './navbars/navbar.component';
import { FooterComponent } from './footers/footer.component';
import { HeaderComponent } from './headers/header.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './products/product.component';
import { ProductEditComponent } from './products/product.edit.component';
import { ProductListComponent } from './products/product.list.component';
import { HeartComponent } from './utilities/heart.component';
import { RegisterComponent } from './account/register.component';
import { LoginComponent } from './account/login.component';
import { MyBasketComponent } from './cards/mybasket.component';
import {LoadingComponent} from './utilities/loading.component';
import { ValidationErrorComponent} from './utilities/validation.error.component';
import { AuthGuard } from './account/auth.guard';
import { AlertComponent } from './alert/alert.component';
import { AlertService } from './alert/alert.service';

const appRoutes: Routes = [
  { path: 'productlist/:id/:productName', component: ProductListComponent},
    { path: 'productlist', component: ProductListComponent },
    { path: 'products', component: ProductComponent ,canActivate : [AuthGuard]},
    { path: 'products/edit/:id', component: ProductEditComponent },
    { path: '*', component: ProductListComponent },
    { path: '', redirectTo: '/productlist', pathMatch: 'full' },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'shoppingcart', component: MyBasketComponent }
];

@NgModule({
    imports: [BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        RouterModule.forRoot(appRoutes)],
    declarations: [
        AppComponent,
        NavBarComponent,
        ProductComponent,
        ProductEditComponent,
        ProductListComponent,
        FooterComponent,
        HeaderComponent,
        HeartComponent,
        LoginComponent,
        RegisterComponent,
        LoadingComponent,
        ValidationErrorComponent,
      MyBasketComponent,
      AlertComponent
    ],
    providers: [AuthGuard, AlertService],
    bootstrap: [AppComponent]
})
export class AppModule {
    
}