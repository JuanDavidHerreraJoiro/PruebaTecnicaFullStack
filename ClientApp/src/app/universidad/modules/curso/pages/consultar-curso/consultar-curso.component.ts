import { Component, OnInit } from '@angular/core';
import { Boton } from 'src/app/shared/classes/boton';
import { VerCursoEstudianteComponent } from '../../../nota/pages/ver-curso-estudiante/ver-curso-estudiante.component';
import { Curso } from '../../classes/curso';
import { CursoService } from '../../services/curso.service';

@Component({
  selector: 'app-consultar-curso',
  templateUrl: './consultar-curso.component.html',
  styleUrls: ['./consultar-curso.component.css']
})
export class ConsultarCursoComponent implements OnInit {
  
  botonRegistrar : Boton;
  cursos!: Curso[];

  constructor(private cursoService:CursoService) {
    this.botonRegistrar = {
      mensaje: 'Registrar Curso',
      color: 'primary',
      icono: 'app_registration',
      ruta:  'curso/registrar-curso'
    }
  }

  ngOnInit(): void {
    this.consultarCursos();
  }

  consultarCursos(){
    this.cursoService.get()
      .subscribe(cursos=>this.cursos = cursos);
  }

  redireccionar(curso: Curso): Boton[] {
    var botones: Boton[] = [];
    botones.push(
      {
        mensaje: 'Ver estudiantes',
        icono: 'manage_search',
        id: curso.id,
        objeto: curso,
        componente: VerCursoEstudianteComponent
      }
    )
    return botones;
  }

}
