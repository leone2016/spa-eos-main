import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl} from '@angular/forms';
import {ErrorHandlerService} from '../service/error-handler.service';

@Component({
  selector: 'app-label-form',
  templateUrl: './label-form.component.html',
  styleUrls: ['./label-form.component.css']
})
export class LabelFormComponent implements OnInit {

  @Input() invalid: boolean;
  @Input() invalidText: string;
  constructor() { }

  ngOnInit() {

  }

}
