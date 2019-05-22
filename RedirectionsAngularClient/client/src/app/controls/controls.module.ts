import { NgModule } from '@angular/core';
 
import {DropdownComponent} from './dropdown/dropdown.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { CommonModule } from "@angular/common";
 


@NgModule({
    declarations: [DropdownComponent
    ],
    imports: [
      CommonModule,
    
      BsDropdownModule.forRoot()
    ],
    exports: [DropdownComponent],
    providers: [],
    bootstrap: []
  })

  export class ControlModule { }