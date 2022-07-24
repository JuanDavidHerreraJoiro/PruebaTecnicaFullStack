import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarEstudianteComponent } from './pages/consultar-estudiante/consultar-estudiante.component';
import { RegistrarEstudianteComponent } from './pages/registrar-estudiante/registrar-estudiante.component';

const routes: Routes = [
  {
    path:'registrar-estudiante',
    component:RegistrarEstudianteComponent
  },
  {
    path:'consultar-estudiante',
    component:ConsultarEstudianteComponent
  },
  {
    path:'**',
    redirectTo:'consultar-estudiante'
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudianteRoutingModule { }
