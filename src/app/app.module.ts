import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import { StudentDetailComponent } from './student-detail.component';
import {StudentComponent} from './student.component';
import {StudentService} from './student-service';
import {StudentDashboardComponent} from './student-dashboard.component';
import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule , FormsModule ,AppRoutingModule ],
  declarations: [ AppComponent , StudentDetailComponent,StudentComponent , StudentDashboardComponent],
  providers:[StudentService],
  bootstrap:    [ AppComponent ]
  
})
export class AppModule { }
