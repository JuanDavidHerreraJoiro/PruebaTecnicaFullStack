import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Boton } from 'src/app/shared/classes/boton';
import { Nota } from '../../classes/nota';
import { NotaService } from '../../services/nota.service';
import { ActualizarNotaComponent } from '../actualizar-nota/actualizar-nota.component';

@Component({
  selector: 'app-consultar-nota',
  templateUrl: './consultar-nota.component.html',
  styleUrls: ['./consultar-nota.component.css']
})
export class ConsultarNotaComponent implements OnInit {

  botonRegistrar : Boton;
  notas!: Nota[];
  suscription?: Subscription;

  constructor(private notaService:NotaService) {
    this.botonRegistrar = {
      mensaje: 'Registrar Nota',
      color: 'primary',
      icono: 'app_registration',
      ruta:  'nota/registrar-nota'
    }
  }

  ngOnInit(): void {
    this.consultarNotas();
    this.suscription = this.notaService.refrescar$.subscribe(() => {
      this.consultarNotas();
    });
  }

  consultarNotas(){
    this.notaService.get()
      .subscribe(notas=>this.notas = notas);
  }
  
  redireccionar(nota: Nota): Boton[] {
    var botones: Boton[] = [];
    botones.push(
      {
        mensaje: 'Actualizar Nota',
        icono: 'edit_note',
        id: nota.id,
        objeto: nota,
        componente: ActualizarNotaComponent
      }
    )
    return botones;
  }

}
