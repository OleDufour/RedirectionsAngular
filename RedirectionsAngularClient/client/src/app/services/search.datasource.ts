import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { Observable } from 'rxjs';


import { BehaviorSubject } from "rxjs";
import { catchError, finalize } from "rxjs/operators";
import { of } from "rxjs";

import { RedirectModel } from '../interfaces/redirectModel';
import { ApiParmData } from '../interfaces/apiParmData';
import { ApiService } from "./api.service";
import { ApiReturnData } from './../interfaces/apiReturnData';
// import {ApiReturnInfo} from './../interfaces/apiReturnInfo';

export class SearchDataSource {
    private apdRedirectModel = new ApiReturnData<RedirectModel>();
    public bsApiReturnData = new BehaviorSubject<ApiReturnData<any>>(this.apdRedirectModel);
    private loadingSubject = new BehaviorSubject<boolean>(false);
    public loading$ = this.loadingSubject.asObservable();
    public test = this.bsApiReturnData.value;

    constructor(private coursesService: ApiService) {
    }

    public async loadLessonsNEW(dtp: ApiParmData) {


        console.log('loadLessonsNEW', dtp);
        //this.loadingSubject.next(true);

        return await this.coursesService.search(dtp);
    }

    // connect(collectionViewer: CollectionViewer): Observable<any> {
    //     console.log("Connecting data source");
    //     return this.bsApiReturnData.asObservable();
    // }

    // disconnect(collectionViewer: CollectionViewer): void {
    //     this.bsApiReturnData.complete();
    //     this.loadingSubject.complete();
    // }

}