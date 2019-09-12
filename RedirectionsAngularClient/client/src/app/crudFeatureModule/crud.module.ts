import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { ControlModule } from './../controlsSharedModule/controls.module';
import { faCoffee, faHistory, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { RouterModule, Routes } from '@angular/router';

import { CrudRoutingModule } from './crud-routing.module';

import { AddComponent } from './add/add.component';
import { SearchComponent } from './search/search.component';
import { ImportComponent } from './import/import.component';
import { PublishComponent } from './publish/publish.component';
import { TestCompComponent } from './test-comp/test-comp.component';

@NgModule({
  declarations: [AddComponent, SearchComponent, ImportComponent, PublishComponent, TestCompComponent],
  imports: [
    CommonModule, ReactiveFormsModule, NgxPaginationModule, FontAwesomeModule, ControlModule, CrudRoutingModule, RouterModule,
    TranslateModule.forChild({}),
  ]
  , exports: [RouterModule]
})
export class CrudModule {

  constructor() {
    library.add(faCoffee, faHistory, faPen, faTrash);
  }


}
