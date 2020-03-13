import { Injectable } from '@angular/core';
import {AbstractControl, ValidationErrors} from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor() { }

  public isControlInvalid( control: AbstractControl): boolean {
    return control.invalid && ( control.touched || control.dirty );
  }
  public getErrorMessage(errors: ValidationErrors): string {
    // debugger;
    // if (errors != null) {
    //   Object.keys(errors).forEach(keyError => {
    //     console.info('Key control: , keyError: ' + keyError + ', err value: ', errors[keyError]);
    //   });
    // }
    if ( !errors ) { return ''; }
    if ( 'required' in errors || 'allRequired' in errors ) {
      return 'Field required';
    }
    if ( 'minLength' in errors) {
      return `Must be at least ${errors.minlength.requiredLength } characters`;
    }
    if ( 'maxLength' in errors) {
      return `Must be at most ${errors.maxlength.requiredLength } characters`;
    }
    return 'error not handler';
  }
}
