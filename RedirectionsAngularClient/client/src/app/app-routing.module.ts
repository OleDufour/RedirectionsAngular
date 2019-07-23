import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './crudFeatureModule/add/add.component'
import { SearchComponent } from './crudFeatureModule/search/search.component';
import { PublishComponent } from './crudFeatureModule/publish/publish.component';
import { ImportComponent } from './crudFeatureModule/import/import.component';

const routes: Routes = [

  { path: '', component: AddComponent },
 
  { path: 'search', component: SearchComponent },
  { path: 'importer', component: ImportComponent }
  , { path: 'publier', component: PublishComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
