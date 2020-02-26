import { AppRoutes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule, RequestOptions } from '@angular/http';
import { CommonModule, APP_BASE_HREF } from '@angular/common';

import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { ModalModule } from 'ngx-bootstrap/modal';

//------- Service --------
import { MVCService } from './service/mvc.service';
//------- End Service ----------

//------- Component --------
import { AppComponent } from './app.component';
import { InputdataComponent } from './inputdata/inputdata.component';
import { OutputComponent } from './output/output.component';
import { JoinComponent } from './join/join.component';
import { DashboardComponent } from './dashboard/dashboard.component';

//------- End Component ----------

@NgModule({
  declarations: [
    AppComponent,
    InputdataComponent,
    OutputComponent,
    JoinComponent,
    DashboardComponent,



  ],
  imports: [
    HttpModule, CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes),
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.circleSwish,
      backdropBackgroundColour: 'rgba(0,0,0,0.5)',
      backdropBorderRadius: '4px',
      primaryColour: '#FF6666',
      secondaryColour: '#FF6633',
      tertiaryColour: '#FF3333'
    }),
    ModalModule.forRoot()

  ],
  providers: [MVCService],
  bootstrap: [AppComponent]
})
export class AppModule { }
