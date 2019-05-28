import { Injectable } from '@angular/core';
import { RedirectModel } from '../interfaces/redirectModel';
import { ApiReturnModel } from '../interfaces/apiReturnData';

import { HttpClient } from "@angular/common/http";
import apiUrl from '../const/apiUrl'
@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private httpClient: HttpClient) { }
    
    public AddOrEdit(rm: RedirectModel) {
        return this.httpClient.post(apiUrl + 'AddOrEdit', rm);
    }

}