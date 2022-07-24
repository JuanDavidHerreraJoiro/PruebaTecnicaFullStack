import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/design-modules/material.module';
import { PrimeNgModule } from 'src/app/design-modules/prime-ng.module';
import { SharedModule } from '../../../shared/shared.module';
import { EstudianteRoutingModule } from './estudiante-routing.module';
import { ConsultarEstudianteComponent } from './pages/consultar-estudiante/consultar-estudiante.component';
import { RegistrarEstudianteComponent } from './pages/registrar-estudiante/registrar-estudiante.component';



@NgModule({
  declarations: [
    ConsultarEstudianteComponent,
    RegistrarEstudianteComponent
  ],

  imports: [
    CommonModule,
    EstudianteRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    PrimeNgModule,
    SharedModule
  ]
})

export class EstudianteModule { }
