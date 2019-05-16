import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { SearchComponent } from './search/search.component';
import { MenuComponent } from './menu/menu.component';
import { PublishComponent } from './publish/publish.component';


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    SearchComponent,
    MenuComponent,
    PublishComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
