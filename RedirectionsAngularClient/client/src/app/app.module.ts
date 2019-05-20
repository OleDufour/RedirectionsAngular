import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ControlModule } from './controls/controls.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { MenuComponent } from './pages/add/menu/menu.component';
import { PublishComponent } from './pages/publish/publish.component';

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
    AppRoutingModule,
    ControlModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
