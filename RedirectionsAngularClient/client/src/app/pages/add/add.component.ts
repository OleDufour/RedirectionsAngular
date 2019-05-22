import { Component, OnInit } from '@angular/core';
//import { DropdownComponent } from '../../controls/dropdown/dropdown.component';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AddService } from './add.service'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public form2: FormGroup;

  public domains: { id: number; name: string }[] = [];
  public sourceTypes: { id: number; name: string }[] = [];

source= new FormControl();

  constructor(a: AddService, fb: FormBuilder) {
    // this.domains = a.getEnumDomain();
    // this.sourceTypes = a.getEnumSourceType();
    // var empty = { id: -1, name: '' };
    // this.sourceTypes.unshift(empty);


    this.form2 = fb.group({
      sourceType: ['', Validators.required]
      , source: ['', Validators.required]
    });


  }

  submit() {

    console.log(this.form2.value);

  }

  myValidator(group: FormGroup) {
    let sum = 0;
    for (let a in group.controls) {
      sum += group.get([a]).value;
      console.log('myValidator', group.get([a]).value);


    }
    //  return sum > 10 ? { notValid: true} : null
  }



  ngOnInit() {
  }

}
