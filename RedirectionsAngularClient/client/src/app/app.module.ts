import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HttpClientModule } from '@angular/common/http';  // npm install --save @angular/material @angular/cdk

import { ControlModule } from './controlsSharedModule/controls.module';
import { ServiceModule } from './services/services.module'; // bientot obsolete

import {CrudModule} from './crudFeatureModule/crud.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './pages/menu/menu.component'; 
import { NavbarComponent } from './pages/navbar/navbar.component';
  
 

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NavbarComponent,  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,   
    ServiceModule,
    ReactiveFormsModule,  
    HttpClientModule,        
    ControlModule,   
    CrudModule,
    AppRoutingModule, // After CrudModule !
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  
constructor(){


}

 }
