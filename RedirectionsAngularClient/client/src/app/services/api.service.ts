import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject } from "rxjs";
import { catchError, finalize } from "rxjs/operators";
import { of } from "rxjs";

import { RedirectModel } from '../modelSharedModule/interfaces/redirectModel';
import { ApiReturnData } from '../modelSharedModule/interfaces/apiReturnData';
import { ApiParmData } from '../modelSharedModule/interfaces/apiParmData';
import apiUrl from '../modelSharedModule/const/apiUrl'

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

    public delete(redirectId: number): Observable<ApiReturnData<any>> {
        return this.httpClient.delete<ApiReturnData<any>>(apiUrl + 'Delete/' + redirectId).pipe(
            map(res => res)
        );
    }

    public async delete2(redirectId: number): Promise<string> {
        console.log('delete2');
        const result = await this.httpClient.delete(apiUrl + 'Delete/' + redirectId).toPromise().then(res=>{return "ddd"});
        console.log('result');
     
        return result;
    }



}