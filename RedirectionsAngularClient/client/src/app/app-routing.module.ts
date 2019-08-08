import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent }
  , { path: 'crud', loadChildren: () => import(`./crudFeatureModule/crud.module`).then(x => x.CrudModule) }
  // , { path: 'search', loadChildren: () => import(`./crudFeatureModule/crud.module`).then(x => x.CrudModule) }
  // , { path: 'importer', loadChildren: () => import(`./crudFeatureModule/crud.module`).then(x => x.CrudModule) }
  // , { path: 'publier', loadChildren: () => import(`./crudFeatureModule/crud.module`).then(x => x.CrudModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
