import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.scss']
})
export class MycartComponent implements OnInit {

  public orderlist:any=[];
  public displaystatus:string="none";
  public buybtn:string="block";
  public showcmtbox:string="none";

  public details:any={
    "customer_name":"",
    "number":"",
    "address":""
  }

  public model:any={};
  public cmtstatus:string="none";

  constructor(private router:Router,private _apiservice:ApiService,private toastr:ToastrService) { }

  ngOnInit(): void {
    const user_name=localStorage.getItem('username');
    this._apiservice.allorder().subscribe(
      data =>{
        this.orderlist=data['order'].filter(data =>{
          if(data.username === user_name ) return data;
        });
        console.log(this.orderlist);
      },
      error =>{
        this.toastr.error(error.error.message,"Error");
      }
    )
      //getting profile details name,address,number
    this._apiservice.profileDetails().subscribe(
    data =>{
        var data = data['profile'].filter(data=>{
          if(data.email === user_name){
            return data;
          }
        }) 
        data = data[0];

        this.details.customer_name=data['name'];
        this.details.number = data['number'];
        this.details.address = data['address'];  
        
    }
  )}
//deleting order
  deletefromcart(foodname:any){
    this._apiservice.deleteorder(foodname).subscribe(
      data =>{
        this.toastr.success(data["message"],"Success");
        this.ngOnInit();
      },
      error =>{
        this.toastr.error(error.error.message,"Error");
      }
    )
  }
  //updating order
  buynow(order){

    order.status="Waiting";
    order.customer_name=this.details.customer_name;
    order.number=this.details.number;
    order.address=this.details.address;

    console.log(order);
    this.displaystatus="block";
    this.buybtn = "none";
    this._apiservice.updateorder(order).subscribe(
      data=>{
        this.toastr.success(data["message"],"Success");
      }
      ,error =>{
        this.toastr.error(error.error.message,"Error");
      }
    )
     location.reload();
  }
  //adding comments to database
  addcomment(order:any){
    if(this.model.comment!=undefined){
      console.log("comment added");
      order.comment = this.model.comment;
      this._apiservice.addComments(order).subscribe(
        data =>{
          this.toastr.success(data["message"],"Success");
        },
        error =>{
          this.toastr.error(error.error.message,"Error");
        }
      )
      this.cmtstatus="block";
      setTimeout(()=>{
        this.showcmtbox="none";
      },1000); 
    }
  }

  showcmtBox(){
    this.showcmtbox=this.showcmtbox=="block"?"none":"block";
  }
}
