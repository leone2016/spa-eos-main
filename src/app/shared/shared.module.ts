import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelFormComponent } from './label-form/label-form.component';
import {ErrorHandlerService} from './service/error-handler.service';



@NgModule({
  declarations: [
    LabelFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LabelFormComponent
  ],
  providers: [
    ErrorHandlerService
  ]
})
export class SharedModule { }
