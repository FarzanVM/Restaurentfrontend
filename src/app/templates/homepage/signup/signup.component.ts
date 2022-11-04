import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,ValidatorFn,ValidationErrors, AbstractControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm = new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    confirm:new FormControl('',Validators.required),
  },{validators:this.passwordMatcher()})

  get password(){
    return this.signupForm.get('password');
  }
  get confirm(){
    return this.signupForm.get('confirm');
  }
  constructor(private _apiservice:ApiService,private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  //custom validator for password matcher
  passwordMatcher():ValidatorFn{
    return (control:AbstractControl):ValidationErrors =>{
      const password  = control.get('password');
      const confirm = control.get('confirm');

      if(!password || !confirm){
        return null as any;
      }
      if(password.value != confirm.value){
        return {'nomatch':true};
      }
      return null as any;
    }
  }
  //signing up and routing
  signup(){

    if(this.signupForm.status==="INVALID"){
      console.log("Give credentials");
    }
    else{
      this._apiservice.signup(this.signupForm.value).subscribe(
        data =>{
          this.toastr.success(data['message'],"Success");
          this.router.navigate(['/login']);
        },
        error =>{
          this.toastr.error(error.error.message,"Error");
        }
      )
      // console.log("user created");
      // console.log(this.signupForm.value);
    }
   
  }
}
