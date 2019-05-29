import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ControlModule } from './controls/controls.module';
import { ServiceModule } from './services/services.module';
import { HttpClientModule } from '@angular/common/http';  // npm install --save @angular/material @angular/cdk
import {
  MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
  MatSortModule, MatTableModule
} from "@angular/material";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { MenuComponent } from './pages/menu/menu.component';
import { PublishComponent } from './pages/publish/publish.component';




@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    SearchComponent,
    MenuComponent,
    PublishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceModule,
    ReactiveFormsModule,
    ControlModule,
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
