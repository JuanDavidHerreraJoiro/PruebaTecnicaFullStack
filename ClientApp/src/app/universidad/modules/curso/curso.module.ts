import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/design-modules/material.module';
import { PrimeNgModule } from 'src/app/design-modules/prime-ng.module';
import { SharedModule } from '../../../shared/shared.module';
import { ConsultarCursoComponent } from './pages/consultar-curso/consultar-curso.component';
import { RegistrarCursoComponent } from './pages/registrar-curso/registrar-curso.component';
import { CursoRoutingModule } from './curso-routing.module';



@NgModule({
  declarations: [
    ConsultarCursoComponent,
    RegistrarCursoComponent
  ],

  imports: [
    CommonModule,
    CursoRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    PrimeNgModule,
    SharedModule
  ]
})

export class CursoModule { }
