import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-allfood',
  templateUrl: './allfood.component.html',
  styleUrls: ['./allfood.component.scss']
})
export class AllfoodComponent implements OnInit {

  public foodlist:any=[];
  constructor(private router:Router,private _apiservice:ApiService,private toastr:ToastrService,private queryRoute:ActivatedRoute) { }

  ngOnInit(): void {
    let token = localStorage.getItem('token');

    if(!token){
      this.router.navigate(['/login']);
    }
    //getting allfood data
    this._apiservice.allfood().subscribe(
      data =>{
        console.log(data['food']);
        this.foodlist = data['food'];
      },
      error =>{
        this.toastr.error(error.error.message,"Error");
      }
    )
      //searching for items
    this.queryRoute.queryParams.subscribe(
      param =>{
  
       if(param['searchBy']){
        const name=param['searchBy'];
        console.log(name);
        this.foodlist = this.foodlist.filter(food =>{
          if(food.name.includes(name)) return food;
        })
       }
      })
  }
  

}
