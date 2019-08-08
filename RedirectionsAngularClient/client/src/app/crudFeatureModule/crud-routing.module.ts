import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AddComponent } from './add/add.component';
import { SearchComponent } from './search/search.component';
import { ImportComponent } from './import/import.component';
import { PublishComponent } from './publish/publish.component';

const routes: Routes = [
  { path: 'add', component: AddComponent },
  { path: 'add/:id', component: AddComponent },
  { path: 'search', component: SearchComponent },
  { path: 'publish', component: PublishComponent },
  { path: 'import', component: ImportComponent },
]
   
@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes) 
  ]
})
export class CrudRoutingModule { }
