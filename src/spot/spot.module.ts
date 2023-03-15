import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedMaterialComponentsModule } from 'src/shared/material/shared-material-components.module';
import { SpotRoutingModule } from './spot-routing.module';
import { SpotComponent } from './spot.component';

@NgModule({
  declarations: [
    SpotComponent,
  ],
  imports: [
    CommonModule,
    SpotRoutingModule,
    SharedMaterialComponentsModule,
  ],
})
export class SpotModule {
}
