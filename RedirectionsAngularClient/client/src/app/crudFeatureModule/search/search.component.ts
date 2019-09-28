import { Component, ElementRef, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import Swal from 'sweetalert2';

import { EnumService } from '../../services/enum.service';
import { ApiService } from '../../services/api.service';
import { RedirectModel } from '../../modelSharedModule/interfaces/redirectModel';
import { ApiParmData } from '../../modelSharedModule/interfaces/apiParmData';
import { ApiReturnData } from 'src/app/modelSharedModule/interfaces/apiReturnData';
import { LogModel } from 'src/app/modelSharedModule/interfaces/logModel';
import { ErrorShowService } from '../../services/error-show.service';

import apiUrl from '../../modelSharedModule/const/apiUrl'

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

  constructor(enumService: EnumService
    , private apiService: ApiService
    , private fb: FormBuilder
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

    var logData = <LogModel>({});

    this.apiService.search(dtp).subscribe(
      x => {
        this.result = x;
        logData.ok = true;
        console.log('data:', this.result);
      },
      error => {
        console.log("Error", error);
        logData.ok = false;
        logData.message = error.name;
        this.errorShowService.passError(logData);
        return error;
      }
    );
  }

  public async delete(redirectId: number) {

    var logData = <LogModel>({});

    // const await this.apiService.delete2(redirectId)

    //   x => {
    //     this.result = x;
    //     logData.ok = true;
    //     console.log('data:', this.result);
    //   },
    //   error => {
    //     console.log("Error", error);
    //     logData.ok = false;
    //     logData.message = error.name;
    //     this.errorShowService.passError(logData);
    //     return error;
    //   }
    // );
  }



  showPopup(redirectId) {

    // alert(redirectId);
    // this.delete(5);
    var mes;

    Swal.fire({
      title: 'Are you sure you want to delete this redirect',
      //  input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      cancelButtonText:'Canceler',
      confirmButtonText: 'Ok',
      showLoaderOnConfirm: true,
      preConfirm:    () => {
      return  this.apiService.delete2(redirectId);
        // return fetch(apiUrl + 'Delete/' + redirectId, {
        //   method: 'delete'
        // })
        //   .then(response => {
        //     return response.json();
        //   });
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.value) {    
       
        Swal.fire({
          title: `${result.value.message}` 
        })
      }
    }).then(function(text) {
      console.log('Request successful', text);
    })




  }





}
