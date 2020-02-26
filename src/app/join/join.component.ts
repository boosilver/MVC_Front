import { Component, OnInit } from '@angular/core';
import { Join } from '.././model';
import { MVCService } from '../service/mvc.service';
import { Util } from '../../util/util'
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {
  model: Join = Join.empty(); 
  public loading = false;
  modalRef: BsModalRef;
  bsModalRef: BsModalRef;
  message: string;
  
  constructor(
    private svc: MVCService,
    private modalService: BsModalService,

  ) { }

  ngOnInit() {
    var that = this;
    // setTimeout(function(){
    that.model = Join.sampleSubmitSr();
  }

  openModal(template: Join) {
    if (this.model.accountID.trim() && this.model.password ) {
      this.modalRef = this.modalService.show(template, { class: 'modal-dialog-centered modal-sm fade show' });

    }
    // this.modalRef = this.modalService.show(template, { class: 'modal-sm' });

  }
  confirm(resulttempalte : any,errortemplate: any): void {
    this.model.accountID = this.model.accountID.trim();
    this.model.password = this.model.password;

    console.log('Endorse DATA');
    console.log('saving draft ' + JSON.stringify(this.model.accountID));
    this.loading = true;
    this.svc.submitJoin(this.model)
      .subscribe(
        sr => {
          this.loading = false;
          console.log('saving draft ' + JSON.stringify(sr));
          this.message = 'Join Success';
          this.modalRef = this.modalService.show(resulttempalte, { class: 'modal-dialog-centered modal-md fade show' });
        },
        error => {
          this.loading = false;
          // let header = 'Error';
          // let message = error;
          // (<HTMLInputElement>document.getElementById('status')).value = message;
          // document.getElementById("statusfield").style.display = "block";
          this.message = error;
          // console.log('Error>>>>:' + error);
          this.modalRef = this.modalService.show(errortemplate, { class: 'modal-dialog-centered modal-lg fade show' });

        });
    this.message = 'Confirmed!';
    this.modalRef.hide();
  }

  decline(): void {
    this.message = 'Declined!';
    this.modalRef.hide();
  }
  Ok(): void {
    this.message = 'Ok!';
    this.modalRef.hide();
  }
  Oknorefresh(): void {
    this.message = 'Ok!';
    this.modalRef.hide();
  }
}

