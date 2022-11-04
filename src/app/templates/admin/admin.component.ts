import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  searchitem = new FormControl('');
  public item=["tony","steve"];
  public itemDisplay:string="";
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
 //navigation to options
  allfood(){
    this.router.navigate(['admin/allfood']);
  }

  menuItem(){
    this.router.navigate(['admin/menuitem']);
  }
  showOrders(){
    this.router.navigate(['admin/orders']);
  }
  addFood(){
    this.router.navigate(['admin/addfood']);
  }
  removeFood(){
    this.router.navigate(['admin/removefood']);
  }
  updateFood(){
    this.router.navigate(['admin/updatefood']);
  }
  comments(){
    this.router.navigate(['admin/comments']);
  }
  
  searchItem(foodname){
   this.router.navigate(['admin/allfood'],{queryParams:{searchBy:foodname}});
    }
  logout(){
    localStorage.clear();
    this.router.navigate(['']);
  }
}
