import { NgModule } from '@angular/core';
import { VaccineResultComponent } from '../vaccine-result/vaccine-result.component';
import { MaterialModule } from '../material.module';
import { VaccineResultRoutingModule } from './vaccine-result-routing.module';


@NgModule({
  imports: [
    MaterialModule,
    VaccineResultRoutingModule
  ],
  declarations: [VaccineResultComponent ]
})
export class VaccineResultModule {}
