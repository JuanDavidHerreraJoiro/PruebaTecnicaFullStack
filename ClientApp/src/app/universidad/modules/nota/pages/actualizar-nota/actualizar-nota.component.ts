import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { Nota } from '../../classes/nota';
import { NotaService } from '../../services/nota.service';
import { ValidacionService } from '../../services/validacion.service';

@Component({
  selector: 'app-actualizar-nota',
  templateUrl: './actualizar-nota.component.html',
  styleUrls: ['./actualizar-nota.component.css']
})

export class ActualizarNotaComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nota1  :[this.data.nota1,[Validators.required,Validators.pattern(this.vs.decimalPattern)]],
    nota2  :[this.data.nota2,[Validators.required,Validators.pattern(this.vs.decimalPattern)]],
    nota3  :[this.data.nota3,[Validators.required,Validators.pattern(this.vs.decimalPattern)]],
  });

  nota!: Nota;

  constructor(private fb: FormBuilder,
    private notaService: NotaService,
    @Inject(MAT_DIALOG_DATA) public data: Nota,
    public vs: ValidacionService,
    public dialogRef?: MatDialogRef<ActualizarNotaComponent>) {}

  ngOnInit(): void {

    this.miFormulario.valueChanges.subscribe(({ nota1,nota2,nota3, ...form }) => {
      this.nota = {
        'nota1': nota1,
        'nota2': nota2,
        'nota3': nota3,
        'estudianteId': this.data.estudianteId,
        'cursoId': this.data.cursoId
      }
    })
  }

  actualizar() {
    
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    
    this.notaService.put(this.nota!)
      .subscribe(resp => {
        if (resp.ok !== false) {
          Swal.fire('Nota Actualizada correctamente', resp.error, 'success');
          this.miFormulario.reset();
        } else {
          Swal.fire('Error nota no Actualizada', resp.error, 'error');
        }
      }
      );
      this.dialogRef?.close();
      //window.location.reload();
  }

}
