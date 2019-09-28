import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { faFileCsv, faPen, faFileExcel } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';


import { DropdownComponent } from './dropdown/dropdown.component';
import { UploadComponent } from './upload/component/upload.component';
import { DragDropDirective } from './upload/drag-drop.directive';
import { ErrorComponent } from './error/error.component';

import { TabComponent } from './tabs/tab.component';
import { TabsComponent } from './tabs/tabs.component';


@NgModule({
  declarations: [DropdownComponent, UploadComponent, DragDropDirective, ErrorComponent, TabComponent, TabsComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    BsDropdownModule.forRoot()
    //, BrowserAnimationsModule
    , TranslateModule.forChild({})
  ],
  exports: [DropdownComponent, UploadComponent, DragDropDirective, ErrorComponent, TabComponent, TabsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: []
})

export class ControlModule {

  constructor() {
    library.add(faFileCsv, faPen, faFileExcel);

  }


}