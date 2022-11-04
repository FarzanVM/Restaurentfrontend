import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  public commentlist:any=[];
  constructor(private router:Router,private _apiservice:ApiService,private toastr:ToastrService) { }

  ngOnInit(): void {
    //getting all comments whenever this component loads
    this._apiservice.getComments().subscribe(
      data =>{
        console.log(data['comment']);
        this.commentlist=data['comment'];
      },
      error =>{
        this.toastr.error(error.error.message,"Error");
      }
    )
  }

}
