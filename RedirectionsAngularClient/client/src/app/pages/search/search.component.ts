import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, startWith, tap, delay } from 'rxjs/operators';
import { merge } from 'rxjs'
import { fromEvent } from 'rxjs';
import { Observable } from 'rxjs';

import { EnumService } from '../../services/enum.service';
import { ApiService } from '../../services/api.service';
import { RedirectModel } from '../../interfaces/redirectModel';
import { ApiReturnModel } from 'src/app/interfaces/apiReturnData';
import { SearchDataSource } from './../../services/search.datasource';

import { DataTableParms } from '../../interfaces/dataTableParms';
import { DataSource } from '@angular/cdk/table';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  form: FormGroup;
  public domains: { id: number; name: string }[] = [];
  public sourceTypes: { id: number; name: string }[] = [];
  public targetTypes: { id: number; name: string }[] = [];
  public redirectionTypes: { id: number; name: string }[] = [];

  dtp: DataTableParms;

  public dataSource: SearchDataSource;
//  displayedColumns = ["redirectId", "sourceType", "source", "targetType", "target"];
//  displayedColumns = ["redirectId",  "sourceTypeString","source",   "targetTypeString" ,"target","redirectionTypeString" ];
 
  displayedColumns = ["redirectId",    "sourceTypeString",  "source",  "target",    "targetTypeString",  "redirectTypeString" ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('input') input: ElementRef;
  redirectModel: RedirectModel;
 

  constructor(enumService: EnumService, private apiService: ApiService, private fb: FormBuilder, private route: ActivatedRoute  ) {
    this.createForm();

    this.domains = enumService.getEnumDomain();
    this.sourceTypes = enumService.getEnumSourceType();
    this.targetTypes = enumService.getEnumTargetType();
    this.redirectionTypes = enumService.getRedirectionTypes();
    this.form.controls['domainId'].setValue(1, { onlySelf: true });
  }

  createForm() {
    this.form = this.fb.group({
      redirectId: [''],
      domainId: [''],
      sourceType: [''],
      source: [''],
      targetType: [''],
      target: [''],
      redirectionType: [''],
    });
  }

  ngOnInit() {
    this.redirectModel = this.form.value;//this.route.snapshot.data["course"];


    this.dtp = new  DataTableParms();
    this.dtp.pageNo=1;
    this.dtp.pageSize=20;
    this.dtp.redirectModel= new RedirectModel(); 
    
    this.dtp.redirectModel.domainId =1;// this.form.value;
   console.log('999999',this.dtp)

    this.dataSource = new SearchDataSource(this.apiService);
    this.dataSource.loadLessonsNEW(this.dtp);

    console.log('¤¤¤¤¤¤¤¤¤¤¤¤¤', this.dataSource)
  }

  ngAfterViewInit() {
    // this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    // fromEvent(this.input.nativeElement, 'keyup')
    //   .pipe(
    //     debounceTime(150),
    //     distinctUntilChanged(),
    //     tap(() => {
    //       this.paginator.pageIndex = 0;

    //       this.loadLessonsPage();
    //     })
    //   )
    //   .subscribe();

    // merge(this.sort.sortChange, this.paginator.page)
    //   .pipe(
    //     tap(() => this.loadLessonsPage())
    //   )
    //   .subscribe();

  }

  // loadLessonsPage() {
  //   this.dataSource.loadLessonsNEW(
  //     this.redirectModel.redirectId,
  //     this.input.nativeElement.value,
  //     this.sort.direction,
  //     this.paginator.pageIndex,
  //     this.paginator.pageSize);
  // }



  submit = () => {
    console.log('this. addform.value', this.form.value);
  }

}
