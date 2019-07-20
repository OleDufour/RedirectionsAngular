import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { ControlModule } from './../controlsSharedModule/controls.module';
import { faCoffee, faHistory, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

import { AddComponent } from './add/add.component';
import { SearchComponent } from './search/search.component';
import { ImportComponent } from './import/import.component';
import {PublishComponent} from './publish/publish.component';

@NgModule({
  declarations: [AddComponent, SearchComponent, ImportComponent, PublishComponent],
  imports: [
    CommonModule, ReactiveFormsModule, NgxPaginationModule, FontAwesomeModule,ControlModule
  ]
})
export class CrudModule {

  constructor() {

    library.add(faCoffee, faHistory, faPen, faTrash);
  }


}
