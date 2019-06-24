import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ControlModule } from './controls/controls.module';
import { ServiceModule } from './services/services.module';
import { HttpClientModule } from '@angular/common/http';  // npm install --save @angular/material @angular/cdk

import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


import { AppComponent } from './app.component';
import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { MenuComponent } from './pages/menu/menu.component';
import { PublishComponent } from './pages/publish/publish.component';
import { NgxPaginationModule } from 'ngx-pagination';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

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
    BrowserAnimationsModule,
    AppRoutingModule,
    ServiceModule,
    ReactiveFormsModule,
    ControlModule,
    HttpClientModule,
   
    NgxPaginationModule,    
    FontAwesomeModule
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

constructor(){
  library.add(faCoffee);

}

 }
