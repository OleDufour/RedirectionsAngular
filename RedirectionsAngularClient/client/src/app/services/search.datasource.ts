import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { Observable } from 'rxjs';
import { RedirectModel } from '../interfaces/redirectModel';
import { ApiService } from "./api.service";
import { BehaviorSubject } from "rxjs";
import { catchError, finalize } from "rxjs/operators";
import { of } from "rxjs";
import { DataTableParms } from './../interfaces/dataTableParms';


export class SearchDataSource implements DataSource<RedirectModel> {
    private lessonsSubject = new BehaviorSubject<RedirectModel[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);
    public loading$ = this.loadingSubject.asObservable();

    constructor(private coursesService: ApiService) {
    }

    loadLessonsNEW(dtp: DataTableParms) {
        console.log('loadLessonsNEW', dtp);
        this.loadingSubject.next(true);

        this.coursesService.search(dtp).pipe(
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false))
        )
            .subscribe(redirectModels => this.lessonsSubject.next(redirectModels));

    }

    connect(collectionViewer: CollectionViewer): Observable<RedirectModel[]> {
        console.log("Connecting data source");
        return this.lessonsSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.lessonsSubject.complete();
        this.loadingSubject.complete();
    }

}