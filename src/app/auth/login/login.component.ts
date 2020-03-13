import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ErrorHandlerService} from '../../shared/service/error-handler.service';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  constructor(private fb: FormBuilder,
              private router: Router,
              private errorHandler: ErrorHandlerService,
              private authService: AuthService,
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      username: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])]
    });
  }


  onSubmit() {
    console.log(this.form.value);
    this.authService.login(this.form.value).subscribe(console.log);
    // this.router.navigate(['/dashboards/dashboard1']);
  }
  private f(control: string): AbstractControl {

    return this.form.controls[control];
  }
}
