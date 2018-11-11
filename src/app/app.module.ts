

import { AppartooService } from './Services/Appartoo.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { map } from "rxjs/operators";

import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
   

],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
    
  
      
    ])
  ],
  providers: [
     AppartooService,
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
