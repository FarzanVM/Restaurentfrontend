import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-removefood',
  templateUrl: './removefood.component.html',
  styleUrls: ['./removefood.component.scss']
})
export class RemovefoodComponent implements OnInit {

  public model:any={}
  constructor(private router:Router,private _apiservice:ApiService,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  //removing food from database
  removefood(){
    this._apiservice.deletefood(this.model).subscribe(
      data =>{
        console.log("food item removed")
        this.toastr.success(data['message'],"Success");
      },
      error =>{
        this.toastr.error(error.error.message,"Error");
      }
    )
  }
}
