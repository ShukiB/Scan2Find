import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpotComponent } from './spot.component';

const routes: Routes = [
  {
    path: ':spotId',
    component: SpotComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpotRoutingModule {
}
