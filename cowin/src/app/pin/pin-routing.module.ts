import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PinComponent } from './pin.component';


const routes: Routes = [
  {
    path: '',
    component: PinComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PinRoutingModule {}
