import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MaterializeModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
