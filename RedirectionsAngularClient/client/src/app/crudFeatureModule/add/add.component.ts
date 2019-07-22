import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//import { AddService } from './add.service';
import { EnumService } from '../../services/enum.service';
import { ApiService } from '../../services/api.service';
import { RedirectModel } from '../../modelSharedModule/interfaces/redirectModel';
import { ApiReturnInfo } from 'src/app/modelSharedModule/interfaces/apiReturnInfo';
import { ErrorShowService } from '../../services/error-show.service';

@Component({
  selector: 'app-root',
  templateUrl: './add.component.html'

})
export class AddComponent {

  addform: FormGroup;
  public domains: { id: number; name: string }[] = [];
  public sourceTypes: { id: number; name: string }[] = [];
  public targetTypes: { id: number; name: string }[] = [];
  public redirectionTypes: { id: number; name: string }[] = [];
  //public submitting: boolean = false;
  public editUpdateResult: ApiReturnInfo;

  constructor(enumService: EnumService, private apiService: ApiService, private fb: FormBuilder
    , private errorShowService: ErrorShowService) {
    this.createForm();

    this.domains = enumService.getEnumDomain();
    this.sourceTypes = enumService.getEnumSourceType();
    this.targetTypes = enumService.getEnumTargetType();
    this.redirectionTypes = enumService.getRedirectionTypes();
    this.addform.controls['domainId'].setValue(1, { onlySelf: true });
  }

  createForm() {
    this.addform = this.fb.group({
      redirectId: [''],
      domainId: [''],  // pas de validation, mais c'est pour inclure dans le modèle.
      sourceType: ['', Validators.required],
      source: ['', [Validators.required, Validators.minLength(2)]],
      targetType: ['', Validators.required],
      target: ['', Validators.required],
      redirectionType: ['', Validators.required],
    }, { validator: this.CompareSourceTarget });
  }


  CompareSourceTarget = (group: FormGroup) => {
    if (group.pristine) {
      return null;
    }
    // for (let a in group.controls) {console.log('myValidator', group.get([a]).value);   }

    let sourceTypeVal: any = group.controls['sourceType'].value;
    let sourceVal: string = group.controls['source'].value;
    let targetTypeVal = group.controls['targetType'].value;
    let targetVal = group.controls['target'].value;

    // l'utilisateur a remodifié. Pas besoin de tester les autres !
    if (sourceTypeVal == -1 || sourceTypeVal == '' || sourceVal.trim() == '')
      return null;

    if (sourceTypeVal == targetTypeVal && sourceVal == targetVal)
      return { circularDep: 'Circular Dependency detected' };
    return null;
  }


  submit = () => {
    console.log('this. addform.value', this.addform.value);

    if (this.addform.status === 'VALID')
      this.apiService.AddOrEdit(this.addform.value).subscribe(
        (response: ApiReturnInfo) => {
          console.log("PUT Request is successful ", response);
          this.editUpdateResult = response;
          console.log('222222222222222222', this.editUpdateResult);
          console.log('3333333333333', this.editUpdateResult.data.redirectId);
          this.addform.controls['redirectId'].setValue(this.editUpdateResult.data.redirectId);
        },
        error => {        
          console.log("Error", error);
          this.errorShowService.passError(error.name);
          return error;
        }
      );
    console.log('111111111111111111111111', this.editUpdateResult)
  }

  testError   ()   {
     

  }




}