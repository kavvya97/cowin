import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataApiService } from '../services/data-api.service';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.scss'],
})
export class PinComponent implements OnInit {

  public pinForm: FormGroup;
  setView: boolean = false;
  pinResult: any;
  constructor(
    private dataApi: DataApiService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.pinForm = this.formBuilder.group({
      pin: ['', Validators.required],
      date: ['', Validators.required],
    });
   }

  ngOnInit() {}


  submitFormHandler() {
    if (this.pinForm.status === 'VALID') {
      let {pin, date} = this.pinForm.value;
      this.dataApi.getVaccinationSessionsByPin(pin, moment(date).format('DD-MM-YY'), this.responseViewHandler.bind(this));
    }
  }


  responseViewHandler(result) {
    this.setView = true;
    this.pinResult = result;
    this.router.navigate(['/vaccine-result/'], {
      state: result
    });
  }

}
