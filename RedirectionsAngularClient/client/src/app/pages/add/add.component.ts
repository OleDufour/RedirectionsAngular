import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//import { AddService } from './add.service';
import { EnumService } from '../../services/enum.service';

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

  constructor(a: EnumService, private fb: FormBuilder) {
    this.createForm();

    this.domains = a.getEnumDomain();
    this.sourceTypes = a.getEnumSourceType();
    var empty = { id: -1, name: '' };
    this.sourceTypes.unshift(empty);
    this.targetTypes = a.getEnumTargetType();

    this.redirectionTypes = a.getRedirectionTypes();
  }

  createForm() {
    this.addform = this.fb.group({
      sourceTypes: ['', Validators.required],
      source: ['', [Validators.required, Validators.minLength(2)]],
      targetTypes: ['', Validators.required],
      target: ['', Validators.required],
      redirectionTypes: ['', Validators.required],
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

    let sourceTypeVal: any = group.controls['sourceTypes'].value;
    let sourceVal: string = group.controls['source'].value;
    let targetTypeVal = group.controls['targetTypes'].value;
    let targetVal = group.controls['target'].value;


    // l'utilisateur a remodifié. Pas besoin de tester les autres !
    if (sourceTypeVal == -1 || sourceTypeVal == '' || sourceVal.trim() == '')
      return null;

    //console.log(sourceTypeVal, sourceVal, targetTypeVal, targetVal);

    if (sourceTypeVal == targetTypeVal && sourceVal == targetVal)
      return { circularDep: 'Circular Dependency detected' };
    return null;
  }


  submit() {
    console.log(this.addform);
    this.submitting=true;
  }




}