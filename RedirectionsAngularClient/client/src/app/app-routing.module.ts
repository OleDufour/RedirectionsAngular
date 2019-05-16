import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddComponent} from './add/add.component'
import {SearchComponent} from './search/search.component';
import { PublishComponent } from './publish/publish.component';

const routes: Routes = [
  {path:'', component: SearchComponent},
  {path:'add', component: AddComponent},
  {path:'importer', component: PublishComponent}
  ,  {path:'publier', component: PublishComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
