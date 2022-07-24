import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MaterialModule } from '../design-modules/material.module';
import { PrimeNgModule } from '../design-modules/prime-ng.module';
import { InputFiltroComponent } from './components/input-filtro/input-filtro.component';
import { BotonResponsiveComponent } from './components/boton-responsive/boton-responsive.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { BotonMenuComponent } from './components/boton-menu/boton-menu.component';



@NgModule({
  declarations: [
    SidenavComponent,
    NavbarComponent,
    InputFiltroComponent,
    BotonResponsiveComponent,
    SpinnerComponent,
    BotonMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MaterialModule,
    PrimeNgModule
  ],
  exports: [
    SidenavComponent,
    NavbarComponent,
    InputFiltroComponent,
    BotonResponsiveComponent,
    SpinnerComponent,
    BotonMenuComponent
  ]
})
export class SharedModule { }
