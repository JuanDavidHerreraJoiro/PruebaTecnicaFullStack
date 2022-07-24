import { Component, OnInit } from '@angular/core';
import { Boton } from 'src/app/shared/classes/boton';
import { VerEstudianteCursoComponent } from '../../../nota/pages/ver-estudiante-curso/ver-estudiante-curso.component';
import { Estudiante } from '../../classes/estudiante';
import { EstudianteService } from '../../services/estudiante.service';

@Component({
  selector: 'app-consultar-estudiante',
  templateUrl: './consultar-estudiante.component.html',
  styleUrls: ['./consultar-estudiante.component.css']
})
export class ConsultarEstudianteComponent implements OnInit {

  botonRegistrar : Boton;
  estudiantes!: Estudiante[];

  constructor(private estudianteService:EstudianteService) {
    this.botonRegistrar = {
      mensaje: 'Registrar Estudiante',
      color: 'primary',
      icono: 'app_registration',
      ruta:  'estudiante/registrar-estudiante'
    }
  }

  ngOnInit(): void {
    this.consultarEstudiantes();
  }

  consultarEstudiantes(){
    this.estudianteService.get()
      .subscribe(estudiantes=>this.estudiantes = estudiantes);
  }

  redireccionar(estudiante: Estudiante): Boton[] {
    var botones: Boton[] = [];
    botones.push(
      {
        mensaje: 'Ver cursos',
        icono: 'manage_search',
        id: estudiante.id,
        objeto: estudiante,
        componente: VerEstudianteCursoComponent
      }
    )
    return botones;
  }
}
