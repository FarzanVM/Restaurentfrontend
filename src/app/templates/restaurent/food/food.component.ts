import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})

export class FoodComponent implements OnInit {

  public foodlist:any=[];
  bgcolor:string="#f4b688";
  btnValue:string = "Add to Cart"
  constructor(private router:Router,private _apiservice:ApiService,private toastr:ToastrService,private queryRoute:ActivatedRoute) { }

  ngOnInit(): void {
    console.log("Food component reached");
    let token = localStorage.getItem('token');

    if(!token){
      this.router.navigate(['/login']);
    }
  //filtering only food items based on the food type and showing
    this.queryRoute.queryParams.subscribe(
      param =>{

       if(param['searchBy']){
        const name=param['searchBy'];
        console.log(name);
        this.foodlist = this.foodlist.filter(food =>{
          if(food.name.includes(name)) return food;
        })
       }

      if(param['orderBy']==="biriyani"){
        this._apiservice.allfood().subscribe(
          data =>{
            this.foodlist=data['food'].filter(data =>{
                if(data.food_type==="Biriyani"){
                  return data;
                }
            })
          },
          error =>{
            this.toastr.error(error.error.message,"Error");
          }
        )
      }  
      if(param['orderBy']==="icecream"){
        this._apiservice.allfood().subscribe(
          data =>{
            this.foodlist=data['food'].filter(data =>{
                if(data.food_type==="icecream"){
                  return data;
                }
            })
          },
          error =>{
            this.toastr.error(error.error.message,"Error");
          }
        )
      }  
      if(param['orderBy']==="shake"){
        this._apiservice.allfood().subscribe(
          data =>{
            this.foodlist=data['food'].filter(data =>{
                if(data.food_type==="shake"){
                  return data;
                }
            })
          },
          error =>{
            this.toastr.error(error.error.message,"Error");
          }
        )
      } 
      if(param['orderBy']==="pizza"){
        this._apiservice.allfood().subscribe(
          data =>{
            this.foodlist=data['food'].filter(data =>{
                if(data.food_type==="pizza"){
                  return data;
                }
            })
          },
          error =>{
            this.toastr.error(error.error.message,"Error");
          }
        )
      } 
      if(param['orderBy']==="burger"){
        this._apiservice.allfood().subscribe(
          data =>{
            this.foodlist=data['food'].filter(data =>{
                if(data.food_type==="burger"){
                  return data;
                }
            })
          },
          error =>{
            this.toastr.error(error.error.message,"Error");
          }
        )
      } 
      
      if(param['orderBy']==="allfood"){
        this._apiservice.allfood().subscribe(
          data =>{
            console.log(data['food']);
            this.foodlist = data['food'];
          },
          error =>{
            this.toastr.error(error.error.message,"Error");
          }
        )
      }
      
      if(param['orderBy']==="name"){
        this.foodlist.sort((a,b)=>{
          if(a.name>b.name) return 1;
          if(a.name<b.name) return -1;
          return 0;   
        })
      }

      if(param['orderBy']==="price"){
        this.foodlist.sort((a,b)=>{
          if(a.price>b.price) return 1;
          if(a.price<b.price) return -1;
          return 0;   
        })
      }
      
      }
    )

    this._apiservice.allfood().subscribe(
      data =>{
        console.log(data['food']);
        this.foodlist = data['food'];
      },
      error =>{
        this.toastr.error(error.error.message,"Error");
      }
    )
  }
  //adding to cart that is on order
  addtoCart(model:any){

    const user_name = localStorage.getItem('username');
    console.log(model);
    model.username = user_name;
    model.status = "Buy Now";
    var btn = document.getElementById(model.name);
    btn.innerHTML="Added to cart";
    this._apiservice.addorder(model).subscribe(
      data =>{
        this.toastr.success(data["message"],"Success");
      },
      error =>{
        this.toastr.error(error.error.message,"Error");
      }
    )
    
  }

}
