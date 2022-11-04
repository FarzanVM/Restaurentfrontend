import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-addfood',
  templateUrl: './addfood.component.html',
  styleUrls: ['./addfood.component.scss']
})
export class AddfoodComponent implements OnInit {

  public model:any={};
  constructor(private router:Router,private _apiservice:ApiService,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  //converting image into base64url
  encodeImg(event:any){
    console.log(event.target.files[0]);
    var file = event.target.files[0];
    console.log(file);
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () =>{
      this.model.myfile = reader.result;
      console.log(reader.result);
     }

  }
  reLoad(){
    this.ngOnInit();
  }
//adding food to database
  addFood(){
    // console.log(this.model);
    this._apiservice.addfood(this.model).subscribe(
      data =>{
        console.log("food item added")
        this.toastr.success(data['message'],"Success");
        this.reLoad();
      },
      error =>{
        this.toastr.error(error.error.message,"Error");
      }
    )
    
  }

}
