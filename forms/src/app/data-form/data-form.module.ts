import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DataFormComponent } from './data-form.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    DataFormComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,  
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule
  ],
  exports: [
  ]
})
export class DataFormModule { }
