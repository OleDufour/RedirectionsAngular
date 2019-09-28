import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {AuthGardService} from './services/auth-gard.service';

const routes: Routes = [
  { path: '', component: HomeComponent }
  , { path: 'crud', loadChildren: () => import(`./crudFeatureModule/crud.module`).then(x => x.CrudModule) ,  canActivate:[AuthGardService]}
  , { path: '**', component:PageNotFoundComponent }
  // , { path: 'importer', loadChildren: () => import(`./crudFeatureModule/crud.module`).then(x => x.CrudModule) }
  //    , { path: 'publier', loadChildren: () => import(`./crudFeatureModule/crud.module`).then(x => x.CrudModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
