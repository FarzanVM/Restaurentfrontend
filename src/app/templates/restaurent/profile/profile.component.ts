import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public model:any={};
  public details:any={
    "name":"",
    "number":"",
    "address":""
  }
  public addbtn:string="block";
  constructor(private router:Router,private _apiservice:ApiService,private toastr:ToastrService) { }

  ngOnInit(): void {
    const username=localStorage.getItem('username');
    this._apiservice.profileDetails().subscribe(
      data =>{
          var data = data['profile'].filter(data=>{
            if(data.email === username){
              return data;
            }
          })
          if(data['length']==1){
            this.addbtn="none";
          }
          data = data[0];
          this.details.name=data['name'];
          this.details.number = data['number'];
          this.details.address = data['address'];
      }
    )
  }
//adding to profile
  addProfile(){ 
    const token = localStorage.getItem('token');
    if(!token) {
      this.router.navigate(['/login']);
    }
    this.model.email=localStorage.getItem('username');
    this._apiservice.addProfile(this.model).subscribe(
      data =>{
        this.toastr.success(data["message"],"Success");
      },
      error =>{
        this.toastr.error(error.error.message,"Error");
      }
    )
  }

  updateDetails(){
    const token = localStorage.getItem('token');
    if(!token) {
      this.router.navigate(['/login']);
    }
    this._apiservice.updateprofile(this.model).subscribe(
      data =>{
        this.toastr.success(data["message"],"Success");
      },
      error =>{
        this.toastr.error(error.error.message,"Error");
      }
    )
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['']);
  }
}
