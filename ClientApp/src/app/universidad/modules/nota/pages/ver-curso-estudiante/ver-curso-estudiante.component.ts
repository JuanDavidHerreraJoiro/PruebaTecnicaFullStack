import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Curso } from '../../../curso/classes/curso';
import { NotaService } from '../../services/nota.service';
import { Nota } from '../../classes/nota';

@Component({
  selector: 'app-ver-curso-estudiante',
  templateUrl: './ver-curso-estudiante.component.html',
  styleUrls: ['./ver-curso-estudiante.component.css']
})
export class VerCursoEstudianteComponent implements OnInit {

  notas!: Nota[];

  constructor(private notaService:NotaService,
    @Inject(MAT_DIALOG_DATA) public data: Curso,
  public dialogRef?: MatDialogRef<VerCursoEstudianteComponent>) {}

  ngOnInit(): void {
    this.consultarEstudiantes();
  }

  consultarEstudiantes(){
    this.notaService.getNotaXIdCurso(this.data.id!)
      .subscribe(notas=>this.notas = notas);
  }
}
