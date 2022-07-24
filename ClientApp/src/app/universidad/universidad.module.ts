import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { UniversidadRoutingModule } from './universidad-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../design-modules/material.module';
import { PrimeNgModule } from '../design-modules/prime-ng.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    UniversidadRoutingModule,
    MaterialModule,
    PrimeNgModule,
    SharedModule
  ]
})

export class UniversidadModule { }
