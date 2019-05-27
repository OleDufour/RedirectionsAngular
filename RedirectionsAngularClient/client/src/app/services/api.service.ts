import { Injectable } from '@angular/core';
import { RedirectModel } from '../interfaces/redirectModel';

import { HttpClient } from "@angular/common/http";
import  apiUrl  from '../const/apiUrl'
@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private httpClient: HttpClient) { }


    public AddOrEdit(rm: RedirectModel): string {
        console.log('00000000000',rm);
        this.httpClient.post(apiUrl+'', '')
            .subscribe(
                data => {
                    console.log("PUT Request is successful ", data);
                    return data;
                },
                error => {
                    console.log("Rrror", error);
                    return error;
                }
            );
        return null;
    }

}