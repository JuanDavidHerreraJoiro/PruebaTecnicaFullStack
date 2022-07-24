import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Estudiante } from '../../../estudiante/classes/estudiante';
import { Nota } from '../../classes/nota';
import { NotaService } from '../../services/nota.service';

@Component({
  selector: 'app-ver-estudiante-curso',
  templateUrl: './ver-estudiante-curso.component.html',
  styleUrls: ['./ver-estudiante-curso.component.css']
})
export class VerEstudianteCursoComponent implements OnInit {
  notas!: Nota[];

  constructor(private notaService:NotaService,
    @Inject(MAT_DIALOG_DATA) public data: Estudiante,
  public dialogRef?: MatDialogRef<VerEstudianteCursoComponent>) {}

  ngOnInit(): void {
    this.consultarCursos();
  }

  consultarCursos(){
    this.notaService.getNotaXIdEstudiante(this.data.identificacion!)
      .subscribe(notas=>this.notas = notas);
  }

}
