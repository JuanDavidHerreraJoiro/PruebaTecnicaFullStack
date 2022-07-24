import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { TitleCasePipe } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class AutoCompleteService {

  miFormulario?: FormGroup;
  filteredOptions?: Observable<any[]>;
  dato: any;

  constructor(private tc: TitleCasePipe) { }

  recibirForm(formulario: FormGroup) {
    this.miFormulario = formulario;
  }

  autoComplete(lista: any[], campo: string, tipo: string) {
    return this.filteredOptions = this.miFormulario?.get(campo)?.valueChanges.pipe(
      startWith(''),
      map(name => (name ? this._filter(lista, name, tipo).slice(0, 5) : lista.slice(0, 5))),
    );
  }

  opcionSeleccionada(dato: any, tipo: string) {

    if( dato == undefined ) {
      return;
    }

    var formulario = this.miFormulario?.get(tipo);

    switch (tipo) {
      case 'curso':
        formulario?.reset(this.tc.transform(dato.nombre));
        break;

      case 'estudiante':
        formulario?.reset(this.tc.transform(dato.nombres + ' ' + dato.apellidos));
        break;
    }
  }

  private _filter(lista: any[], name: string, tipo: string): any[] {
    const filterValue = name.toString().toLowerCase();
    if (tipo == '1') {
      return lista.filter(option => option['nombres']!.toLowerCase().includes(filterValue) || option['apellidos']!.toLowerCase().includes(filterValue));
    } else {
      return lista.filter(option => option['nombre']!.toLowerCase().includes(filterValue));
    }
  }
}
