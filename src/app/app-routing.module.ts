import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
// import { TakeoutComponent } from './takeout/takeout.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'takeout', loadChildren: () => import('./takeout/takeout.module').then(m => m.TakeoutModule)},
  // {path: 'takeout', component: TakeoutComponent}
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, {preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
