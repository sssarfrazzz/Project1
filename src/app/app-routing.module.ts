import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PracticeAreasComponent } from './practice-areas/practice-areas.component';
const routes: Routes = [
  {
  path: '',
  component: DashboardComponent,
},
{
  path: 'About Us',
  component: AboutusComponent,
},
{
  path: 'Practise Areas',
  component: PracticeAreasComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
