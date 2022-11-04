import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from './interceptors/header-interceptor';
import { ApiService } from './services/api.service';
import { ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './templates/homepage/homepage.component';
import { LoginComponent } from './templates/homepage/login/login.component';
import { SignupComponent } from './templates/homepage/signup/signup.component';
import { RestaurentComponent } from './templates/restaurent/restaurent.component';
import { FoodComponent } from './templates/restaurent/food/food.component';
import { AdminComponent } from './templates/admin/admin.component';
import { AdminsignupComponent } from './templates/homepage/adminsignup/adminsignup.component';
import { AddfoodComponent } from './templates/admin/addfood/addfood.component';
import { RemovefoodComponent } from './templates/admin/removefood/removefood.component';
import { OrdersComponent } from './templates/admin/orders/orders.component';
import { UpdatefoodComponent } from './templates/admin/updatefood/updatefood.component';
import { MenuitemComponent } from './templates/admin/menuitem/menuitem.component';
import { MycartComponent } from './templates/restaurent/mycart/mycart.component';
import { ProfileComponent } from './templates/restaurent/profile/profile.component';
import { AllfoodComponent } from './templates/admin/allfood/allfood.component';
import { CommentComponent } from './templates/admin/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    SignupComponent,
    RestaurentComponent,
    FoodComponent,
    AdminComponent,
    AdminsignupComponent,
    AddfoodComponent,
    RemovefoodComponent,
    OrdersComponent,
    UpdatefoodComponent,
    MenuitemComponent,
    MycartComponent,
    ProfileComponent,
    AllfoodComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    ApiService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:HeaderInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
