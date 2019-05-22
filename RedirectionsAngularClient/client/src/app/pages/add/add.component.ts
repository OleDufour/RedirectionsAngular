import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//import { AddService } from './add.service';
import {EnumService} from '../../services/enum.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './add.component.html'

})
export class AddComponent {

  addform: FormGroup;
  public domains: { id: number; name: string }[] = [];
  public sourceTypes: { id: number; name: string }[] = [];
  public targetTypes: { id: number; name: string }[] = [];


  constructor(a: EnumService, private fb: FormBuilder) {
    this.createForm();
    this.domains = a.getEnumDomain();
    this.sourceTypes = a.getEnumSourceType();
    var empty = { id: -1, name: '' };
    this.sourceTypes.unshift(empty);
    this.targetTypes = a.getEnumTargetType();
  }

  createForm() {
    this.addform = this.fb.group({
      source: ['', Validators.required]
    });
  }

  submit() {
    console.log(this.addform.value);
  }

}