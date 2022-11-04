import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public bgcolor:string="none";
  constructor(private router:Router) { }

  ngOnInit(): void {
    if(this.router.url==='/login'||'/signup'||'/adminsignup'){
      this.bgcolor="aliceblue";
    }
  }
 //routing to specific components
  login(){
    this.bgcolor="aliceblue";
    console.log("lgoun clicked");
    this.router.navigate(['/login']);
  }
  signup(){
    this.bgcolor="aliceblue";
    this.router.navigate(['/signup']);
  }
  adminsignup(){
    this.bgcolor="aliceblue";
    this.router.navigate(['/adminsignup']);
  }
}
