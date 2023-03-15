import { NgModule } from '@angular/core';
import { SpotRoutingModule } from './spot-routing.module';
import { SpotComponent } from './spot.component';

@NgModule({
  declarations: [
    SpotComponent,
  ],
  imports: [
    SpotRoutingModule,
  ],
})
export class SpotModule {
}
