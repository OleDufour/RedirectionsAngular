import { Injectable } from '@angular/core';
import { RedirectModel } from '../interfaces/redirectModel';
import { ApiReturnData } from '../interfaces/apiReturnData';
import { ApiParmData } from '../interfaces/apiParmData';


import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
//import {IApiReturnData} from './../interfaces/apiReturnData';

import apiUrl from '../const/apiUrl'





import { CollectionViewer, DataSource } from "@angular/cdk/collections";


import { BehaviorSubject } from "rxjs";
import { catchError, finalize } from "rxjs/operators";
import { of } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class ApiService {

    dtp: any;
    //iApiReturnData :IApiReturnData;
    constructor(private httpClient: HttpClient) { }

    public AddOrEdit(rm: RedirectModel) {
        return this.httpClient.post(apiUrl + 'AddOrEdit', rm);
    }

    public search(dtp: ApiParmData): Promise<ApiReturnData<any>> {

        // var test = this.httpClient.post<ApiReturnData<any>>(apiUrl + 'Search', dtp).pipe(
        //     map(res => res)
        // ) ;

        // console.log('µµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµ', test);
        return this.httpClient.post<ApiReturnData<any>>(apiUrl + 'Search', dtp).pipe(
            map(res => res)
        ).toPromise();

    }
}