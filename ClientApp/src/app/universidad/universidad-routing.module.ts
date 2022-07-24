import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConsultarNotaComponent } from './modules/nota/pages/consultar-nota/consultar-nota.component';

const routes: Routes = [
  {
    path: '',
    //component:ConsultarNotaComponent,
    component: HomeComponent,
    children: [
      {
        path: 'estudiante',
        loadChildren: () => import('../universidad/modules/estudiante/estudiante.module').then( m => m.EstudianteModule)
      },
      {
        path: 'curso',
        loadChildren: () => import('../universidad/modules/curso/curso.module').then( m => m.CursoModule)
      },
      {
        path: 'nota',
        loadChildren: () => import('../universidad/modules/nota/nota.module').then( m => m.NotaModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/nota/consultar-nota'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversidadRoutingModule { }
