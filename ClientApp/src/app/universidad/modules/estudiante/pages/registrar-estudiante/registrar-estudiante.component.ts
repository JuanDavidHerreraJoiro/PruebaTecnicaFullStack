import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ValidacionService } from '../../../nota/services/validacion.service';
import { Estudiante } from '../../classes/estudiante';
import { EstudianteService } from '../../services/estudiante.service';

@Component({
  selector: 'app-registrar-estudiante',
  templateUrl: './registrar-estudiante.component.html',
  styleUrls: ['./registrar-estudiante.component.css']
})
export class RegistrarEstudianteComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    identificacion  :['',[Validators.required]],
    tipoIdentificacion  :['',[Validators.required]],
    nombres  :['',[Validators.required]],
    apellidos  :['',[Validators.required]],
    correo  :['',[Validators.required]],
    telefono  :['',[Validators.required]],
    direccion  :['',[Validators.required]]
  });

  estudiante?: Estudiante;

  constructor(private fb: FormBuilder,
    private estudianteService: EstudianteService,
    public vs: ValidacionService,
  ) { }

  ngOnInit(): void {
    this.miFormulario.valueChanges.subscribe(({ identificacion,tipoIdentificacion,nombres,apellidos,correo,telefono,direccion,...form }) => {
      this.estudiante = {
        'identificacion': ''+identificacion,
        'tipoIdentificacion': tipoIdentificacion, 
        'nombres': nombres,
        'apellidos': apellidos,
        'correo': correo,
        'telefono': ''+telefono,
        'direccion': direccion
      }
    })
  }

  guardar() {
    
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    //console.log(this.estudiante);
    
    this.estudianteService.post(this.estudiante!)
      .subscribe(resp => {
        if (resp.ok !== false) {
          Swal.fire('Estudiante registrado correctamente', resp.error, 'success');
          this.miFormulario.reset();
        } else {
          Swal.fire('Error estudiante ya registrado', resp.error, 'error');
        }
      });
  }

}
