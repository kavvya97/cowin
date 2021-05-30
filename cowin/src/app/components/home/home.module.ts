import { NgModule } from '@angular/core';
import { HomePage } from './home.page';


import { HomePageRoutingModule } from './home-routing.module';
import { MaterialModule } from '../../material.module';


@NgModule({
  imports: [
    MaterialModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
