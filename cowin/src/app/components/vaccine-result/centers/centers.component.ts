import { Component, Input, OnInit } from '@angular/core';
import { VaccineResultModel } from '../interfaces/result.meta.model';

@Component({
  selector: 'app-centers',
  templateUrl: './centers.component.html',
  styleUrls: ['./centers.component.scss'],
})
export class CentersComponent implements OnInit {
@Input() center : VaccineResultModel;
  constructor() { }

  ngOnInit() {}

}
