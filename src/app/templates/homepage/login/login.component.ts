import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:any={};
  constructor(private router:Router,private _apiservice:ApiService,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  //login and on successsfult change route
  login(){
  
    this._apiservice.login(this.loginForm).subscribe(
      data=>{
        if(data['message'] === "Auth successfull"){
          console.log("data:",data);
        this.toastr.success(data["message"],"Success");
        if(data['user_type']==="admin"){
          localStorage.clear();
          localStorage.setItem('user_type',data['user_type']);
          localStorage.setItem("token",data['token']);  
          this.router.navigate(['/admin']);
        }
        else{
          localStorage.clear();
          localStorage.setItem('user_type',data['user_type']);
          localStorage.setItem("token",data['token']);
          localStorage.setItem('username',data['username']);  
          this.router.navigate(['/restaurent']);
        }
        
        }
      },
      error =>{
        this.toastr.error(error.error.message,"Error");
      }
    )
  }
}
