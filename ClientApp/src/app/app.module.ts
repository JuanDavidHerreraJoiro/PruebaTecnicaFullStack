import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './design-modules/material.module';

import localEs from "@angular/common/locales/es-CO";
import { registerLocaleData, TitleCasePipe } from '@angular/common';
registerLocaleData( localEs );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'es-CO' }, TitleCasePipe ],
  bootstrap: [AppComponent]
})
export class AppModule { }
