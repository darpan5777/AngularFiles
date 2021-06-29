import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentService } from './Shared/student.service';
import { MapserviceService } from './rxjs-opraters/mapservice.service';
import { SubjectsharingService } from './Shared/subjectsharing.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({ 
  declarations: [
    AppComponent,
  
 

  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,FormsModule,ReactiveFormsModule,
   
  ],
  providers: [StudentService,SubjectsharingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
