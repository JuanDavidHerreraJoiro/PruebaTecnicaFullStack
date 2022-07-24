import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarNotaComponent } from './pages/registrar-nota/registrar-nota.component';
import { ConsultarNotaComponent } from './pages/consultar-nota/consultar-nota.component';

const routes: Routes = [
  {
    path:'registrar-nota',
    component:RegistrarNotaComponent
  },
  {
    path:'consultar-nota',
    component:ConsultarNotaComponent
  },
  {
    path:'**',
    redirectTo:'consultar-nota'
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotaRoutingModule { }
