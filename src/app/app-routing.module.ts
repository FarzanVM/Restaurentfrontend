import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddfoodComponent } from './templates/admin/addfood/addfood.component';
import { AdminComponent } from './templates/admin/admin.component';
import { AllfoodComponent } from './templates/admin/allfood/allfood.component';
import { CommentComponent } from './templates/admin/comment/comment.component';
import { MenuitemComponent } from './templates/admin/menuitem/menuitem.component';
import { OrdersComponent } from './templates/admin/orders/orders.component';
import { RemovefoodComponent } from './templates/admin/removefood/removefood.component';
import { UpdatefoodComponent } from './templates/admin/updatefood/updatefood.component';
import { AdminsignupComponent } from './templates/homepage/adminsignup/adminsignup.component';
import { HomepageComponent } from './templates/homepage/homepage.component';
import { LoginComponent } from './templates/homepage/login/login.component';
import { SignupComponent } from './templates/homepage/signup/signup.component';
import { FoodComponent } from './templates/restaurent/food/food.component';
import { MycartComponent } from './templates/restaurent/mycart/mycart.component';
import { ProfileComponent } from './templates/restaurent/profile/profile.component';
import { RestaurentComponent } from './templates/restaurent/restaurent.component';

const routes: Routes = [
  {
    path:'',
    component:HomepageComponent,
    children:[
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'signup',
        component:SignupComponent
      },
      {
        path:'adminsignup',
        component:AdminsignupComponent
      }
    ]
  },
  {
    path:'restaurent',
    component:RestaurentComponent,
    children:[
      {
        path:'',
        component:FoodComponent
      },
      { 
        path:'food',
        component:FoodComponent
      },
      {
        path:'mycart',
        component:MycartComponent
      },
      {
        path:'profile',
        component:ProfileComponent
      }
    ]
  },
  {
    path:'admin',
    component:AdminComponent,
    children:[
      {
        path:'',
        component:MenuitemComponent
      },
      {
        path:'allfood',
        component:AllfoodComponent
      },
      {
        path:'menuitem',
        component:MenuitemComponent
      },
      {
        path:'orders',
        component:OrdersComponent
      },
      {
        path:'addfood',
        component:AddfoodComponent
      },
      {
        path:'removefood',
        component:RemovefoodComponent
      },
      {
        path:'updatefood',
        component:UpdatefoodComponent
      },
      {
        path:'comments',
        component:CommentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
