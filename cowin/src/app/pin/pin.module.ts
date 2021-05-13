import { NgModule } from '@angular/core';
import { PinComponent } from './pin.component';
import { PinRoutingModule } from './pin-routing.module';
import { VaccineResultComponent } from '../vaccine-result/vaccine-result.component';

import { MaterialModule } from '../material.module';


@NgModule({
  imports: [
    MaterialModule,
    PinRoutingModule,
  ],
  declarations: [PinComponent,VaccineResultComponent ]
})
export class PinModule {}
