import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Output } from '.././model';
import { MVCService } from '../service/mvc.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  model: Output = Output.empty();
  public jasontree:any;
  public responseValue:any;
  public responseValueEN:any;
  public headerDatas:any;
  public loading = false;
  

  constructor(
   
    private router:Router,
    private svc: MVCService
  ) { }  
 
  ngOnInit() {
    var that = this;
            that.model = Output.sampleSubmitSr();
}

  onSubmit(){
    this.loading = true;
    this.model.SORT = "H";
    this.svc.Output(this.model)
      .subscribe(result => {
        this.loading = false;
        console.log('result : '+JSON.stringify(result));   
        this.jasontree = JSON.stringify(result);   
        this.responseValue = []; //new Array
        let body ={
          "_id": result.data._id,
          "password": result.data.password,
        }
        this.responseValue.push(body);    
        this.responseValueEN = [];
        document.getElementById("result").style.display = "block";
        document.getElementById("error").style.display = "none";
      },
      ( err ) => {
        this.loading = false;
        document.getElementById("result").style.display = "none";
        (<HTMLInputElement>document.getElementById("erMass")).value =  err;
        document.getElementById("error").style.display = "block";
        // กรณี error
        if (err.error instanceof Error) {
          // กรณี error ฝั่งผู้ใช้งาน หรือ การเชื่อมต่อเกิด error ขึ้น
          console.log('An error occurred:', err.error.message);
        } else { // กรณี error ฝั่ง server ไม่พบไฟล์ ,server error
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      });
    }
  
  }
