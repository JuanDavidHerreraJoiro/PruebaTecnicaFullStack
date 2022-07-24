import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ValidacionService } from '../../../nota/services/validacion.service';
import { Curso } from '../../classes/curso';
import { CursoService } from '../../services/curso.service';

@Component({
  selector: 'app-registrar-curso',
  templateUrl: './registrar-curso.component.html',
  styleUrls: ['./registrar-curso.component.css']
})
export class RegistrarCursoComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    creditos  :['',[Validators.required,Validators.pattern(this.vs.numeroPattern)]],
    nombre  :['',[Validators.required]]
  });

  curso?: Curso;

  constructor(private fb: FormBuilder,
    private cursoService: CursoService,
    public vs: ValidacionService,
  ) { }

  ngOnInit(): void {
    this.miFormulario.valueChanges.subscribe(({ creditos,nombre,...form }) => {
      this.curso = {
        'nombre': nombre,
        'creditos': creditos
      }
    })
  }

  guardar() {
    
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    //console.log(this.curso);
    
    this.cursoService.post(this.curso!)
      .subscribe(resp => {
        if (resp.ok !== false) {
          Swal.fire('Curso registrado correctamente', resp.error, 'success');
          this.miFormulario.reset();
        } else {
          Swal.fire('Error curso ya registradas', resp.error, 'error');
        }
      });
  }
}
