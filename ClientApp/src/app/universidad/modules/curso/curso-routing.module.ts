import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarCursoComponent } from './pages/registrar-curso/registrar-curso.component';
import { ConsultarCursoComponent } from './pages/consultar-curso/consultar-curso.component';

const routes: Routes = [
  {
    path:'registrar-curso',
    component:RegistrarCursoComponent
  },
  {
    path:'consultar-curso',
    component:ConsultarCursoComponent
  },
  {
    path:'**',
    redirectTo:'consultar-curso'
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursoRoutingModule { }
