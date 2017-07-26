import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { NavComponent } from './nav/nav.component';

import{UserService} from './user/user.service';
import {StudentService} from './student/studentservice/student.service';


import { StudentloginComponent } from './student/studentlogin/studentlogin.component';
import { StudentregistrationComponent } from './student/studentregistration/studentregistration.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    NavComponent,
    StudentloginComponent,
    StudentregistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    UserService,
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
