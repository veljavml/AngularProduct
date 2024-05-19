import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrikazComponent } from './components/prikaz/prikaz.component';
import { AddEditComponent } from './components/add-edit/add-edit.component';
import { Error404Component } from './components/error404/error404.component';
import  { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule  } from '@angular/material/form-field';
import {MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {ReactiveFormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import {MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    PrikazComponent,
    AddEditComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule

    
  ],
  providers: [provideAnimations(),MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
