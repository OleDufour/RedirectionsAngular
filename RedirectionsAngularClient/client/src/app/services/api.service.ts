import { Injectable } from '@angular/core';
import { RedirectModel } from '../interfaces/redirectModel';
import { ApiReturnModel } from '../interfaces/apiReturnData';
import { DataTableParms } from './../interfaces/dataTableParms';

import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";


import apiUrl from '../const/apiUrl'

@Injectable({
    providedIn: 'root'
})
export class ApiService {

 //  dtp: DataTableParms;

    constructor(private httpClient: HttpClient) { }

    public AddOrEdit(rm: RedirectModel) {
        return this.httpClient.post(apiUrl + 'AddOrEdit', rm);
    }

    search(dtp:DataTableParms)  {
       
       return this.httpClient.post(apiUrl + 'Search', dtp);

       
    }
 

}