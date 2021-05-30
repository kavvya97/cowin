import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'pin',
    loadChildren: () => import('./components/pin/pin.module').then( m => m.PinModule)
  },
  {
    path: 'vaccine-result',
    loadChildren: () => import('./components/vaccine-result/vaccine-result.module').then( m => m.VaccineResultModule)
  },
  {
    path: 'center/:id',
    loadChildren: () => import('./components/vaccine-result/view-center/view-center.module').then( m => m.ViewCenterModule)
  },
  {
    path: '',
    redirectTo: 'pin',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
