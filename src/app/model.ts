import { Util } from '../util/util';
var todate;
import { Injectable } from '@angular/core';
import { ValueTransformer } from '@angular/compiler/src/util';
import * as moment from 'moment'


const construct = function (constructor, argsArray) {


  function F(): void {
    constructor.apply(this, argsArray);
  }
  F.prototype = constructor.prototype;
  return new F();
}

const empty = function (constructor, numArgs: number) {
  todate = Util.todate();
  const nullArgs = new Array(numArgs).fill(null);
  return construct(constructor, nullArgs);
}


//  ---------------------------------------------- Ouput key ------------------------------------------------
export class Output {
  static empty(): Output {
    const emptyObj = empty(Output, 5);
    return emptyObj;
  }

  static sampleSubmitSr(): Output {
    const sample: Output = Output.empty();

    sample.SORT = '';


    return sample;
  }

  constructor(
    public SORT: string,
  ) { }
}
//  ---------------------------------------------- END key -----------------------------------------------------------


// ----------------------------------------- Register ---------------------------------------------------------
export class Input {
  static empty(): Input {
    const emptyObj = empty(Input, 4);
    return emptyObj;
  }

  static sampleSubmitSr(): Input {
    const sample: Input = Input.empty();

    sample.accountID = '';
    sample.password = '';
    sample.numtocome = '';

    return sample;
  }

  constructor(

    public accountID: string,
    public password: string,
    public numtocome: string,

  ) { }
}
// ------------------------------------------------- END ---------------------------------------------------------


// ----------------------------------------- Join ---------------------------------------------------------
export class Join {
  static empty(): Join {
    const emptyObj = empty(Join, 2);
    return emptyObj;
  }

  static sampleSubmitSr(): Join {
    const sample: Join = Join.empty();

    sample.accountID = '';
    sample.password = '';

    return sample;
  }

  constructor(

    public accountID: string,
    public password: string,

  ) { }
}
// ------------------------------------------------- END ---------------------------------------------------------




//  ---------------------------------------------- Check Dashboard list key ------------------------------------------------
export class InquirePOByKeyFields {
  static empty(): InquirePOByKeyFields {
    const emptyObj = empty(InquirePOByKeyFields, 2);
    return emptyObj;
  }

  static sampleSubmitSr(): InquirePOByKeyFields {
    const sample: InquirePOByKeyFields = InquirePOByKeyFields.empty();

    sample.KEY = '100';
    sample.TYPE = 'PO';

    return sample;
  }

  constructor(
    public KEY: string,
    public TYPE: string,

  ) { }
}
//  ---------------------------------------------- END key -----------------------------------------------------------




// ----------------------------------------- Dashboard ---------------------------------------------------------
export interface Myinterfacedata {
  password: string
  _id: string
  come: string
  // DASHBOARD_DATA: DashboardData
  DASHBOARD_LIST: DashboardList[]

}

// export interface DashboardData {
//   PO: number
//   PO_WAIT: number
//   PO_COMPLETE: number
//   INVOICE: number
//   INVOICE_WAIT: number
//   INVOICE_COMPLETE: number
//   LOAN_INFO_WAIT: number
//   ENDORSE_LOAN_WAIT: number
// }

export interface DashboardList {
  password: string
  _id: string
  come: string
}

export interface inquirevalue {
  TO: string,
  FROM: string,
  TYPE: string,
  ADDRESS: string,
  PO_KEY: string,
  EMAIL: string,
  TEL_NUMBER: string,
  TAX_ID: string,
  DELIVERY_ADDRESS: string,
  PRODUCT: string,
  NUM_PRODUCT: string,
  PRICE: string,
  VAT: string,
  VALUE: string,
  TOTAL_PRICE: string,
  DELIVERY_DATE: Date,
  PAYMENT: Date,
  DETAIL: string,
} { }
// ------------------------------------------------- END ---------------------------------------------------------