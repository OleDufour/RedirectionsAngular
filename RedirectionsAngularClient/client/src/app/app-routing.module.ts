import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddComponent} from './pages/add/add.component'
import {SearchComponent} from './pages/search/search.component';
import { PublishComponent } from './pages/publish/publish.component';

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
