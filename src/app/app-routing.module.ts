import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunesComponent } from './communes/communes.component';
import { DepartementsComponent } from './departements/departements.component';
import { RegionsComponent } from './regions/regions.component';

const routes: Routes = [
  { path: '', component: RegionsComponent },
  { path: 'region', component: RegionsComponent },
  { path: 'region/:region.code/departements', component: DepartementsComponent },
  { path: 'region/:departement.codeRegion/departements/:departement.code/communes', component: CommunesComponent },
  { path: 'communes', component: CommunesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
