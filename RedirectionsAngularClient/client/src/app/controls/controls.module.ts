import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
 
import { BrowserModule } from '@angular/platform-browser';


import {DropdownComponent} from './dropdown/dropdown.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { CommonModule } from "@angular/common";
import { UploadComponent } from './upload/component/upload.component';
import { DragDropDirective } from './upload/drag-drop.directive';

 


@NgModule({
    declarations: [ DropdownComponent, UploadComponent, DragDropDirective
    ],
    imports: [
      CommonModule,
    
      BsDropdownModule.forRoot()
    ],
    exports: [DropdownComponent, UploadComponent , DragDropDirective ],
    schemas:[CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
    bootstrap: []
  })

  export class ControlModule { }