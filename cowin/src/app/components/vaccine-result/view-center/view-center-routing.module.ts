import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewCenterComponent } from './view-center.component';

const routes: Routes = [
  {
    path: '',
    component: ViewCenterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewCenterRoutingModule { }
