import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject } from "rxjs";
import { catchError, finalize } from "rxjs/operators";
import { of } from "rxjs";

import { RedirectModel } from '../interfaces/redirectModel';
import { ApiReturnData } from '../interfaces/apiReturnData';
import { ApiParmData } from '../interfaces/apiParmData';
import apiUrl from '../const/apiUrl'

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    dtp: any;

    constructor(private httpClient: HttpClient) { }

    public AddOrEdit(rm: RedirectModel) {
        return this.httpClient.post(apiUrl + 'AddOrEdit', rm);
    }

    public search(dtp: ApiParmData): Observable<ApiReturnData<any>> {
        return this.httpClient.post<ApiReturnData<any>>(apiUrl + 'Search', dtp).pipe(
            map(res => res)
        );
    }





}