//import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
 

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http'; // npm install --save @angular/material @angular/cdk

import { ControlModule } from './controlsSharedModule/controls.module';
import { ServiceModule } from './services/services.module'; // bientot obsolete

import {CrudModule} from './crudFeatureModule/crud.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './pages/menu/menu.component'; 
import { NavbarComponent } from './pages/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
  
 

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NavbarComponent,
    HomeComponent,  
  ],
  imports: [   
    BrowserAnimationsModule,   
    ServiceModule,
    ReactiveFormsModule,  
    HttpClientModule,
    ControlModule,   
    
    AppRoutingModule, // After CrudModule !
    
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),        
  ],
  exports:[TranslateModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  
constructor(){
}

 }

 // required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
