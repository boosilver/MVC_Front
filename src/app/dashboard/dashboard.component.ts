import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import { MVCService } from '../service/mvc.service';
import { Myinterfacedata } from '../model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Observable, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private updateSubscription: Subscription;
  DASHBOARD$: Myinterfacedata
  // DASHBOARD_LIST: Myinterfacedata[]
  showUI = false;
  loading = false;
  modalRef: BsModalRef;
  bsModalRef: BsModalRef;
  body: any;
  key: any;
  message: any;
  showAccept: any;
  showAcceptLoan: any;
  showReject: any;
  statuscolor: any;
  constructor(
    private svc: MVCService,
    private modalService: BsModalService,

  ) { }

  async ngOnInit() {

    await this.svc.dashboardlist1().subscribe((DASHBOARD: Myinterfacedata) => {
        // console.log('5555555555555555555555555555' + (JSON.stringify(DASHBOARD)))
        this.DASHBOARD$ = DASHBOARD
        // console.log('----------------------------' + (JSON.stringify(this.DASHBOARD$)))
        if (this.DASHBOARD$) this.showUI = true;

        // setTimeout(function () {
        //   location.reload();
        // }, 5000); // 5000 milliseconds means 5 seconds.
      })

  }

  async view(key: any) {
    console.log('saving draft ' + JSON.stringify(key));
  }
}


