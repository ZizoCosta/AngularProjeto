import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CampoControlErroComponent,
    FormDebugComponent 
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CampoControlErroComponent,
    FormDebugComponent  
  ]
})
export class SharedModule { }
