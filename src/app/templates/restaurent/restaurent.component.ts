import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-restaurent',
  templateUrl: './restaurent.component.html',
  styleUrls: ['./restaurent.component.scss']
})
export class RestaurentComponent implements OnInit {

  public foodname:string="";
  dropdown:string="none";
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  sortBy(){
    this.dropdown = this.dropdown==="block"?"none":"block";
  }
  //functions to route to components and based display based on ordering
  allfood(){
    this.router.navigate(['restaurent/food'],{queryParams:{orderBy:'allfood'}});
  }
  getShake(){
    this.router.navigate(['restaurent/food'],{queryParams:{orderBy:'shake'}});
  }
  getBiriyani(){
    this.router.navigate(['restaurent/food'],{queryParams:{orderBy:'biriyani'}});
  }
  getIcecream(){
    this.router.navigate(['restaurent/food'],{queryParams:{orderBy:'icecream'}});
  }
  getPizza(){
    this.router.navigate(['restaurent/food'],{queryParams:{orderBy:'pizza'}});
  }
  getBurger(){
    this.router.navigate(['restaurent/food'],{queryParams:{orderBy:'burger'}});
  }

  sortByName(){
    this.dropdown="none";
    this.router.navigate(['restaurent/food'],{queryParams:{orderBy:'name'}});
  }
  sortByPrice(){
    this.dropdown="none";
    this.router.navigate(['restaurent/food'],{queryParams:{orderBy:'price'}});
  }
  searchFood(foodname){
    this.router.navigate(['restaurent/food'],{queryParams:{searchBy:foodname}});
  }
  mycart(){
    this.router.navigate(['restaurent/mycart']);
  }
  myprofile(){
    this.router.navigate(['restaurent/profile']);
  }
}
