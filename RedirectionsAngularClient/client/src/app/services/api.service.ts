import { Injectable } from '@angular/core';
import { RedirectModel } from '../interfaces/redirectModel';
import { ApiReturnModel } from '../interfaces/apiReturnData';

import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import {map} from "rxjs/operators";


import apiUrl from '../const/apiUrl'

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private httpClient: HttpClient) { }

    public AddOrEdit(rm: RedirectModel) {
        return this.httpClient.post(apiUrl + 'AddOrEdit', rm);
    }

    // public Search(rm: RedirectModel) {
    //     return this.httpClient.post(apiUrl + 'AddOrEdit', rm);
    // }

    search(courseId:number, filter = '', sortOrder = 'asc', pageNumber = 0, pageSize = 3):  Observable<RedirectModel[]> {

        return this.httpClient.post(apiUrl +'Search', {
            params: new HttpParams()
                .set('courseId', courseId.toString())
                .set('filter', filter)
                .set('sortOrder', sortOrder)
                .set('pageNumber', pageNumber.toString())
                .set('pageSize', pageSize.toString())
        }).pipe(
            map(res =>  res["payload"])
        );
    }

}