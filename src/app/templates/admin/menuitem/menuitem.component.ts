import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-menuitem',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.scss']
})
export class MenuitemComponent implements OnInit {

  public menulist:any=[];
  constructor(private router:Router,private _apiservice:ApiService,private toastr:ToastrService) { }

  ngOnInit(): void {
    //getting menuitem
    this._apiservice.allfood().subscribe(
      data =>{
        this.toastr.success(data['message'],"Success");
        this.menulist=data['food'];
        console.log(data['food']);
      },
      error =>{
        this.toastr.error(error.error.message,"Error");
      }
    )
  }

}
