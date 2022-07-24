import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { AutoCompleteService } from 'src/app/shared/services/auto-complete.service';
import { Curso } from '../../../curso/classes/curso';
import { CursoService } from '../../../curso/services/curso.service';
import { Estudiante } from '../../../estudiante/classes/estudiante';
import { EstudianteService } from '../../../estudiante/services/estudiante.service';
import { Nota } from '../../classes/nota';
import { ValidacionService } from '../../services/validacion.service';
import Swal from 'sweetalert2';
import { NotaService } from '../../services/nota.service';

@Component({
  selector: 'app-registrar-nota',
  templateUrl: './registrar-nota.component.html',
  styleUrls: ['./registrar-nota.component.css']
})
export class RegistrarNotaComponent implements OnInit {
  
  miFormulario: FormGroup = this.fb.group({
    nota1  :['',[Validators.required,Validators.pattern(this.vs.decimalPattern)]],
    nota2  :['',[Validators.required,Validators.pattern(this.vs.decimalPattern)]],
    nota3  :['',[Validators.required,Validators.pattern(this.vs.decimalPattern)]],
    estudiante  :['',[Validators.required]],
    curso  :['',[Validators.required]],
  });

  filteredOptionsEstudiantes?: Observable<any[]>;
  filteredOptionsCursos?: Observable<any[]>;

  listaEstudiantes: Estudiante[] = [];
  listaCursos: Curso[] = [];

  dato: any;

  nota?: Nota;
  estudianteId: number = 0;
  cursoId: number = 0;

  constructor(private fb: FormBuilder,
    private notaService: NotaService,
    private estudianteService: EstudianteService,
    private cursoService: CursoService,
    public vs: ValidacionService,
    private autoCompleteService: AutoCompleteService
  ) { }

  ngOnInit(): void {

    this.vs.recibirForm(this.miFormulario);
    this.autoCompleteService.recibirForm(this.miFormulario);
    this.autoComplete();

    this.miFormulario.valueChanges.subscribe(({ nota1,nota2,nota3, ...form }) => {
      this.nota = {
        'nota1': nota1,
        'nota2': nota2,
        'nota3': nota3,
        'estudianteId': this.estudianteId,
        'cursoId': this.cursoId
      }
    })
  }

  autoComplete() {
    this.estudianteService.get()
      .subscribe(res => {
        this.listaEstudiantes = res;
        this.filteredOptionsEstudiantes = this.autoCompleteService.autoComplete(this.listaEstudiantes, 'estudiante', '1');
        this.filteredOptionsEstudiantes?.subscribe(result => this.listaEstudiantes = result) ;
      });

    this.cursoService.get()
      .subscribe(res => {
        this.listaCursos = res;
        this.filteredOptionsCursos = this.autoCompleteService.autoComplete(this.listaCursos, 'curso', '2');
        this.filteredOptionsCursos?.subscribe(result => this.listaCursos = result) ;
      });
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent, tipo: string) {
    switch (tipo) {
      case 'estudiante':
        this.estudianteId = event.option.value['id'];
        this.dato = event.option.value;
        this.autoCompleteService.opcionSeleccionada(this.dato, tipo);
        break;
      case 'curso':
        this.cursoId = event.option.value['id'];
        this.dato = event.option.value;
        this.autoCompleteService.opcionSeleccionada(this.dato, tipo);
        break;
    }
  }

  guardar() {
    
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    
    this.notaService.post(this.nota!)
      .subscribe(resp => {
        if (resp.ok !== false) {
          Swal.fire('Nota registrada correctamente', resp.error, 'success');
          this.miFormulario.reset();
        } else {
          Swal.fire('Error nota ya registradas', resp.error, 'error');
        }
      }
      );
  }
}
