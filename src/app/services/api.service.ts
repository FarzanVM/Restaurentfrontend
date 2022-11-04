import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient) { }

  //endpoints
  login(model:any){
    return this.httpClient.post("http://localhost:3000/user/login",model);
  }
  signup(model:any){
  
    return this.httpClient.post("http://localhost:3000/user/signup",model);
  }
  adminsignup(model:any){
    return this.httpClient.post("http://localhost:3000/user/adminsignup",model);
  }
  //getting food details
  addfood(model:any){
    return this.httpClient.post("http://localhost:3000/food/addfood",model);
  }
  allfood(){
    return this.httpClient.get("http://localhost:3000/food/allfood");
  }
  deletefood(model:any){
    return this.httpClient.patch("http://localhost:3000/food/deletefood",model);
  }
  updatefood(model:any){
    return this.httpClient.patch("http://localhost:3000/food/updatefood",model)
  }

  //getting order details
  allorder(){
    return this.httpClient.get("http://localhost:3000/order/allorder");
  }

  addorder(model:any){
    return this.httpClient.post("http://localhost:3000/order/addorder",model);
  }

  deleteorder(model:any){
    return this.httpClient.patch("http://localhost:3000/order/deleteorder",model)
  }

  updateorder(model:any){
    return this.httpClient.patch("http://localhost:3000/order/updateorder",model)
  }

 //getting profile details
  profileDetails(){
    return this.httpClient.get("http://localhost:3000/profile/profile");
  }
  addProfile(model:any){
    return this.httpClient.post("http://localhost:3000/profile/addprofile",model);
  }
  updateprofile(model:any){
    return this.httpClient.patch("http://localhost:3000/profile/updateprofile",model);
  }

  //getting comment & adding comments

  getComments(){
    return this.httpClient.get("http://localhost:3000/comment/allcomment");
  }

  addComments(model:any){
    return this.httpClient.post("http://localhost:3000/comment/addcomment",model);
  }
}
