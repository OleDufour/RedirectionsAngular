import { Component, ElementRef, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { FormGroup, FormBuilder } from '@angular/forms';

import { EnumService } from '../../services/enum.service';
import { ApiService } from '../../services/api.service';
import { RedirectModel } from '../../modelSharedModule/interfaces/redirectModel';
import { ApiParmData } from '../../modelSharedModule/interfaces/apiParmData';
import { ApiReturnData } from 'src/app/modelSharedModule/interfaces/apiReturnData';
 
import { ErrorShowService } from '../../services/error-show.service';

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

  dtp: ApiParmData;

  public result: ApiReturnData<RedirectModel>;
  public p: number = 1; // active page in paginator
  redirectModel: RedirectModel;

  constructor(enumService: EnumService, private apiService: ApiService, private fb: FormBuilder
    , private errorShowService: ErrorShowService) {
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

  ngOnInit() { }

  getPage(event: any) {
    console.log('event', event);
    this.p = event;
    this.dtp.pageNo = event;
    this.loadLessonsNEW(this.dtp);
  }

  selectNbItembyPage(event: any, deviceValue) {
    console.log(deviceValue);
    this.dtp.pageSize = deviceValue;
  }

  submit = () => {
    this.redirectModel = this.form.value;//this.route.snapshot.data["course"];

    this.dtp = new ApiParmData();
    this.dtp.pageNo = 1;
    this.dtp.pageSize = 20;
    this.dtp.redirectModel = new RedirectModel();
    this.dtp.redirectModel.domainId = 1;
    this.dtp.redirectModel = this.form.value;
    this.loadLessonsNEW(this.dtp);

    console.log('this. addform.value', this.dtp.redirectModel);
  }

  public loadLessonsNEW(dtp: ApiParmData) {
    this.apiService.search(dtp).subscribe(
      x => {
        this.result = x;
        console.log('data:', this.result);
      },
      error => {
        console.log("Error", error);
        this.errorShowService.passError(error.name);
        return error;
      }
    );
  }
}
