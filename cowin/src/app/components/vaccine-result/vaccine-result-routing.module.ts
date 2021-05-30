import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VaccineResultComponent } from './vaccine-result.component';


const routes: Routes = [
  {
    path: '',
    component: VaccineResultComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VaccineResultRoutingModule {}
