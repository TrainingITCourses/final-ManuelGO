import { StatusDetailsComponent } from './status-details/status-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LaunchDetailsComponent } from './launch-details/launch-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'status/:id', component: StatusDetailsComponent },
  { path: 'launch/:id', component: LaunchDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
