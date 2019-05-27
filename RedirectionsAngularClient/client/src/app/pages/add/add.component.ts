import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//import { AddService } from './add.service';
import { EnumService } from '../../services/enum.service';
import { ApiService } from '../../services/api.service';
import { RedirectModel } from '../../interfaces/redirectModel';
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
  public submitting: boolean = false;
  //_apiService: ApiService;

  constructor(a: EnumService, private apiService: ApiService, private fb: FormBuilder) {
    this.createForm();

    this.domains = a.getEnumDomain();
    this.sourceTypes = a.getEnumSourceType();
    var empty = { id: -1, name: '' };
    this.sourceTypes.unshift(empty);
    this.targetTypes = a.getEnumTargetType();
    this.redirectionTypes = a.getRedirectionTypes();

    //this._apiService = apiService;
  }

  createForm() {
    this.addform = this.fb.group({
      sourceType: ['', Validators.required],
      source: ['', [Validators.required, Validators.minLength(2)]],
      targetType: ['', Validators.required],
      target: ['', Validators.required],
      redirectionType: ['', Validators.required],
    }, { validator: this.CompareSourceTarget });
  }


  CompareSourceTarget = (group: FormGroup) => {
    if (group.pristine) {
      console.log('pristine !')
      return null;
    }
    // for (let a in group.controls) {
    // console.log('myValidator', group.get([a]).value);
    // }

    let sourceTypeVal: any = group.controls['sourceType'].value;
    let sourceVal: string = group.controls['source'].value;
    //TypeError: Cannot read property 'value' of undefined

    let targetTypeVal = group.controls['targetType'].value;
    let targetVal = group.controls['target'].value;

    // l'utilisateur a remodifié. Pas besoin de tester les autres !
    if (sourceTypeVal == -1 || sourceTypeVal == '' || sourceVal.trim() == '')
      return null;

    if (sourceTypeVal == targetTypeVal && sourceVal == targetVal)
      return { circularDep: 'Circular Dependency detected' };
    return null;
  }


  submit(rm: RedirectModel) {
    console.log('this. addform.value', this.addform.value);
    this.submitting = true;
    this.apiService.AddOrEdit(this.addform.value);
  }




}