import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,ValidatorFn,ValidationErrors, AbstractControl, FormGroup,Validator, Validators} from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-adminsignup',
  templateUrl: './adminsignup.component.html',
  styleUrls: ['./adminsignup.component.scss']
})
export class AdminsignupComponent implements OnInit {

  adminsignupForm = new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    confirm:new FormControl('',Validators.required),
    code:new FormControl('',Validators.required)
  },{validators:[this.passwordMatcher(),this.secretcodeValidator()]})

  get password(){
    return this.adminsignupForm.get('password');
  }
  get confirm(){
    return this.adminsignupForm.get('confirm');
  }
  get code(){
    return this.adminsignupForm.get('code');
  }
 //custom validator for password matcher
  passwordMatcher():ValidatorFn{
    return(control:AbstractControl):ValidationErrors=>{
      const password = control.get('password')?.value;
      const confirm = control.get('confirm')?.value;

      if(!password || !confirm){
        return null as any;
      }
      else if(password!=confirm){
        return {'nomatch':true};
      }
      return null as any;
    }
  }
  //custom validator for restaurent code matcher
  secretcodeValidator():ValidatorFn{
    return (control:AbstractControl):ValidationErrors =>{
      const secret_code = control.get('code')?.value;
      
      if(!secret_code){
        return null as any;
      }

      if(secret_code!="1234"){
        return {'nocodematch':true};
      }
      return null as any;
    }
  }
  constructor(private router:Router,private _apiservice:ApiService,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  //admin creation
  adminsignup(){
    if(this.adminsignupForm.status==="INVALID"){
      console.log("Give Credentials");
    }
    else{
      this._apiservice.adminsignup(this.adminsignupForm.value).subscribe(
        data=>{
          this.toastr.success(data['message'],"Success");
          this.router.navigate(['/login']);
        },
        error =>{
          this.toastr.error(error.error.message,"Error");
        }
      )
      // console.log("Admin created");
      // console.log(this.adminsignupForm.value);
    }
    
  }
}
