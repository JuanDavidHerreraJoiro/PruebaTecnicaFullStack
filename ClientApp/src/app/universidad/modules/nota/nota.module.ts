import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/design-modules/material.module';
import { PrimeNgModule } from 'src/app/design-modules/prime-ng.module';
import { SharedModule } from '../../../shared/shared.module';
import { NotaRoutingModule } from './nota-routing.module';
import { ConsultarNotaComponent } from './pages/consultar-nota/consultar-nota.component';
import { RegistrarNotaComponent } from './pages/registrar-nota/registrar-nota.component';
import { VerEstudianteCursoComponent } from './pages/ver-estudiante-curso/ver-estudiante-curso.component';
import { VerCursoEstudianteComponent } from './pages/ver-curso-estudiante/ver-curso-estudiante.component';
import { ActualizarNotaComponent } from './pages/actualizar-nota/actualizar-nota.component';



@NgModule({
  declarations: [
    ConsultarNotaComponent,
    RegistrarNotaComponent,
    VerEstudianteCursoComponent,
    VerCursoEstudianteComponent,
    ActualizarNotaComponent
  ],

  imports: [
    CommonModule,
    NotaRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    PrimeNgModule,
    SharedModule
  ]
})

export class NotaModule { }
