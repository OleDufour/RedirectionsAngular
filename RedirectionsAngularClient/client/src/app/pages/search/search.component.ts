import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {debounceTime, distinctUntilChanged, startWith, tap, delay} from 'rxjs/operators';
import { merge } from 'rxjs/operators'
import {fromEvent} from 'rxjs';


import { EnumService } from '../../services/enum.service';
import { ApiService } from '../../services/api.service';
import { RedirectModel } from '../../interfaces/redirectModel';
import { ApiReturnModel } from 'src/app/interfaces/apiReturnData';

import { DataTableParms } from '../../interfaces/dataTableParms';


  
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

  dtp: DataTableParms

  constructor(enumService: EnumService, private apiService: ApiService, private fb: FormBuilder) {
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
  }

  submit = () => {


   // dtp

    console.log('this. addform.value', this.form.value);



  }

}
