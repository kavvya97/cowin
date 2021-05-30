import { NgModule } from '@angular/core';
import { VaccineResultComponent } from './vaccine-result.component';
import { MaterialModule } from '../../material.module';
import { VaccineResultRoutingModule } from './vaccine-result-routing.module';
import { CentersModule } from './centers/centers.module';


@NgModule({
  imports: [
    MaterialModule,
    VaccineResultRoutingModule,
    CentersModule
  ],
  declarations: [VaccineResultComponent ]
})
export class VaccineResultModule {}
