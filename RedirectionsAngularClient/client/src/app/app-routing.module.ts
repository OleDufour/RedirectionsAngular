import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './pages/add/add.component'
import { SearchComponent } from './pages/search/search.component';
import { PublishComponent } from './pages/publish/publish.component';
import { ImportComponent } from './pages/import/import.component';

const routes: Routes = [

  { path: '', component: AddComponent },
  { path: 'search', component: SearchComponent },
  { path: 'importer', component: ImportComponent }
  , { path: 'publier', component: PublishComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
