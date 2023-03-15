import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [{
  path: '',
  component: AppComponent,
  children: [
    {
      path: 'spot',
      loadChildren: () => import('../spot/spot.module').then(m => m.SpotModule),
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
