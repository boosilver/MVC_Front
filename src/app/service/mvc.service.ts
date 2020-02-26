import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { throwError } from 'rxjs';

import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { Http, Headers, Request, RequestMethod, Response, ResponseContentType } from '@angular/http';
import { Output,Input, Join,Myinterfacedata} from '../model';

import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MVCService {

  constructor(
    private http: Http,
    private httpClient: HttpClient
  ) { }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Content-Type', 'application/json');
  }


  private handleError(error: any) {
    let errorBody = JSON.parse(error._body);
    let errorMsg = errorBody.message;
    console.log('Error message: ', errorMsg);
    return throwError(errorMsg);
  };

   //  ----------------------------------- Join --------------------------------------------------------
   submitJoin(model: Join): Observable<any> {
    const url = environment.backendMVC + 'join'; // transaction.submit.service.request
    let headers = new Headers();       //http://localhost:1596/express/inputdata
    this.createAuthorizationHeader(headers);
    return this.http.post(url, model, {
      headers: headers
    }).map((res: Response) => {
      return res.json();
    })
      .catch(this.handleError);
  }
  //  ----------------------------------- ------------------ --------------------------------------------------------
  //  ----------------------------------- Input --------------------------------------------------------
  submitInput(model: Input): Observable<any> {
    const url = environment.backendMVC + 'register'; // transaction.submit.service.request
    let headers = new Headers();       //http://localhost:1596/express/inputdata
    this.createAuthorizationHeader(headers);
    return this.http.post(url, model, {
      headers: headers
    }).map((res: Response) => {
      return res.json();
    })
      .catch(this.handleError);
  }
  //  ----------------------------------- ------------------ --------------------------------------------------------

  // --------------------------------------------- Output -----------------------------------------------------------
  Output(model: Output): Observable<any> {
    const url = environment.backendMVC + 'QueryAccount';//asset.service.request
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(url, model, {
      headers: headers
    }).map((res: Response) => {
      return res.json();
      // return res.json()[0];
    })
      .catch(this.handleError);
  }
  // -------------------------------------------------- End key -----------------------------------------------------------

  
  // --------------------------------------------- Get Dashboard -----------------------------------------------------------

  dashboardlist(): Observable<any> {
    const url = environment.backendMVC + 'test';
    // const url = 'assets/config.json';
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    console.log(this.httpClient.get(url))
    return this.httpClient.get<Myinterfacedata>(url)
  }

  dashboardlist1(): Observable<any> {
    const url = environment.backendMVC + 'test';
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      headers: headers
    }).map((res: Response) => {
      return res.json();
      // return res.json()[0];
    })
      .catch(this.handleError);
  }
  // -------------------------------------------------- End  -----------------------------------------------------------

}