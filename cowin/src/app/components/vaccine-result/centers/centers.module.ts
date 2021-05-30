import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CentersComponent } from './centers.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [CentersComponent],
  imports: [ MaterialModule],
  exports: [
    CentersComponent
  ]
})
export class CentersModule { }
