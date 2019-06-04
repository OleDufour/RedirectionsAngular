import { Component, ElementRef, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MatPaginator, MatSort } from "@angular/material";
import { FormGroup, FormBuilder } from '@angular/forms';
import { tap} from 'rxjs/operators';
import { merge } from 'rxjs'
import { EnumService } from '../../services/enum.service';
import { ApiService } from '../../services/api.service';
import { RedirectModel } from '../../interfaces/redirectModel';
import { SearchDataSource } from './../../services/search.datasource';
import { ApiParmData } from '../../interfaces/apiParmData';
import { ApiReturnData } from 'src/app/interfaces/apiReturnData';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {
  form: FormGroup;
  public domains: { id: number; name: string }[] = [];
  public sourceTypes: { id: number; name: string }[] = [];
  public targetTypes: { id: number; name: string }[] = [];
  public redirectionTypes: { id: number; name: string }[] = [];

  dtp: ApiParmData;

  public result: ApiReturnData<RedirectModel>;
  public dataSource: SearchDataSource;
  public p: number = 2;

  displayedColumns = ["redirectId", "sourceTypeString", "source", "target", "targetTypeString", "redirectTypeString"];

  redirectModel: RedirectModel;


  constructor(enumService: EnumService, private apiService: ApiService, private fb: FormBuilder, private route: ActivatedRoute) {
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

    this.dtp = new ApiParmData();
    this.dtp.pageNo = 1;
    this.dtp.pageSize = 20;
    this.dtp.redirectModel = new RedirectModel();
    this.dtp.redirectModel.domainId = 1;
    this.dataSource = new SearchDataSource(this.apiService);
    this.dataSource.loadLessonsNEW(this.dtp);
    this.getPage(1);
  }

  getPage(event: any) {
   // console.log(this.dataSource?.bsApiReturnData.value.recordsTotal );
   console.log('event', event); 
   this.p = event;
    this.dtp.pageNo = event;
    this.dataSource = new SearchDataSource(this.apiService);
    this.dataSource.loadLessonsNEW(this.dtp);
  }

  selectNbItembyPage (event: any, deviceValue){
    console.log(deviceValue);
    this.dtp.pageSize = deviceValue;
  }

  submit = () => {
    console.log('this. addform.value', this.form.value);
  }

}
