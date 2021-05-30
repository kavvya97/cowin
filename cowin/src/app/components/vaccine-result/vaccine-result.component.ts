import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VaccineResultModel } from './interfaces/result.meta.model';
@Component({
  selector: 'app-vaccine-result',
  templateUrl: './vaccine-result.component.html',
  styleUrls: ['./vaccine-result.component.scss'],
})
export class VaccineResultComponent implements OnInit {

  results: Array<VaccineResultModel>;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    if (this.router.getCurrentNavigation().extras.state) {
      let state = this.router.getCurrentNavigation().extras.state;
      this.results = state?.sessions;
    }
  }

}
