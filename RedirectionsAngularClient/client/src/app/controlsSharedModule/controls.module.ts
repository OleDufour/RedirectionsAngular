import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from "@angular/common";

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DropdownComponent } from './dropdown/dropdown.component';
import { UploadComponent } from './upload/component/upload.component';
import { DragDropDirective } from './upload/drag-drop.directive';
import { ErrorComponent } from './error/error.component';
 
import { faFileCsv ,faPen, faFileExcel} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';


@NgModule({
  declarations: [DropdownComponent, UploadComponent, DragDropDirective, ErrorComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    BsDropdownModule.forRoot()
  ],
  exports: [DropdownComponent, UploadComponent, DragDropDirective, ErrorComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: []
})

export class ControlModule {

  constructor() {
    library.add(faFileCsv,faPen, faFileExcel);

  }


}