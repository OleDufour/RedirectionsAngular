import { NgModule } from '@angular/core';
import { AngularDropdownModule } from 'angular-dropdown';
import {DropdownComponent} from './dropdown/dropdown.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [DropdownComponent
    ],
    imports: [
      CommonModule, AngularDropdownModule, BsDropdownModule.forRoot()
    ],
    exports: [DropdownComponent],
    providers: [],
    bootstrap: []
  })
  export class ControlModule { }