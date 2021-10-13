import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TakeoutComponent } from './takeout/takeout.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'takeout', component: TakeoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
