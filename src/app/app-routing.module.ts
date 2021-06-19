import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { SolicitantesComponent } from './solicitantes/solicitantes.component';
import { VacantesComponent } from './vacantes/vacantes.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'inicio-component', component: InicioComponent },
  { path: 'solicitantes-component', component: SolicitantesComponent },
  { path: 'vacantes-component', component: VacantesComponent },
  { path: 'about-component', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
