import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  public status:string="Change status";
  public displayStatus:string="none";
  public color:string="orange";
  public orderlist:any=[];
  public profilelist:any=[];
  public name:string="";
  public food:any=[];
  // public changeQuantity ={
  //   "quantity":0
  // }

  constructor(private router:Router,private _apiservice:ApiService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this._apiservice.allorder().subscribe(
      data =>{
        this.orderlist = data['order']
        console.log(this.orderlist);
      }
      
    )
  }

  changeStatus(){
    this.displayStatus = this.displayStatus==="none"?"block":"none";
  }

  //updating order status
  orderStatus(order){
    this._apiservice.updateorder(order).subscribe(
      data =>{
        this.toastr.success(data["message"],"Success");
      },
      error =>{
        this.toastr.error(error.error.message,"Error");
      }
    )
  }
  //function to get the name of food whih ordered
  async changeQuantity(order:any){
    await new Promise((resolve,reject) =>{
      this._apiservice.allfood().subscribe(data =>{
          this.food = data['food'].filter(data =>{
              if(data.name === order.name){
                return data
              }
            })
            resolve(this.food)
      })     
    })
  }
 //function to update quantity
  async updatequantity(food:any){
    await new Promise((resolve,reject) =>{
      this._apiservice.updatefood(food).subscribe(data =>{
        resolve("Done");
        this.toastr.success(data["message"],"Success");
      },
      error =>{
        this.toastr.error(error.error.message,"Error");
      }
      )
    })
  }
//accepting order
  async acceptOrder(order){
    this.status = "Accepted";
    this.displayStatus="none";
    this.color = "rgb(98, 98, 194)";
    order.status = this.status;
    await this.changeQuantity(order);
    this.food[0].quantity=this.food[0].quantity-1;
    await this.updatequantity(this.food[0]);
    console.log("updated",this.food[0]);
    this.orderStatus(order);
  }
  //rejecting order
  rejectOrder(order){
    this.status = "Rejected";
    this.displayStatus="none";
    this.color ="red";
    order.status = this.status;
    this.orderStatus(order);
  }
  //deliver order
  deliverOrder(order){
    this.status = "Delivered";
    this.displayStatus="none";
    this.color="rgb(10, 246, 10)";
    order.status = this.status;
    this.orderStatus(order);
  }
}
