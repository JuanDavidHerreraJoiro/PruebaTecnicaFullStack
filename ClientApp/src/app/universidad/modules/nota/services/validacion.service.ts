import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/shared/classes/myErrorStateMatcher';

@Injectable({
  providedIn: 'root'
})
export class ValidacionService {

  miFormulario?: FormGroup;
  matcher: MyErrorStateMatcher;

  correoPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  numeroPattern: string = '^[0-9]*$';
  decimalPattern: string = '^[0-9.]*$';

  constructor() { 
    this.matcher = new MyErrorStateMatcher();
  }

  recibirForm(formulario: FormGroup) {
    this.miFormulario = formulario;
  }
  
  campoEsValido(campo:string): boolean | undefined{
    return this.miFormulario?.get(campo)?.invalid && 
    this.miFormulario?.get(campo)?.touched;
  }

  getMensaje(campo: string): string{
    const errorControl = this.miFormulario?.get(campo)?.errors;

    if (errorControl?.['required']) return 'El campo es requerido';
    else if (errorControl?.['minlength']) return 'El campo debe contener mínimo '+ errorControl?.['minlength'].requiredLength + ' caracteres';
    else if (errorControl?.['pattern']) {
      if (errorControl?.['pattern'].requiredPattern === this.numeroPattern) return 'El campo debe ser un número positivo sin comas ni puntos';
      else if (errorControl?.['pattern'].requiredPattern === this.decimalPattern) return 'El campo debe ser un número positivo';
      else if (errorControl?.['pattern'].requiredPattern === this.correoPattern) return 'El campo debe ser un correo electrónico';
    }
    else if (errorControl?.['correoTomado']) return 'Este correo ya se encuentra registrado';
    else if (errorControl?.['noExiste'])  return 'Este '+ campo +' no se encuentra registrado';

    return '';
  }

}
