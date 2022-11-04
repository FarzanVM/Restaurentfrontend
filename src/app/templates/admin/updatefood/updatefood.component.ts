import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-updatefood',
  templateUrl: './updatefood.component.html',
  styleUrls: ['./updatefood.component.scss']
})
export class UpdatefoodComponent implements OnInit {

  public model:any={};
  constructor(private router:Router,private _apiservice:ApiService,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
//updating food from database
  updatefood(){
      this._apiservice.updatefood(this.model).subscribe(
        data =>{
          console.log("food item updated")
          this.toastr.success(data['message'],"Success")
          this.ngOnInit();
        },
        error =>{
          this.toastr.error(error.error.message,"Error");
        }
      )
  }

}
