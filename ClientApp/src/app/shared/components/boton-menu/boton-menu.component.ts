import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Boton } from '../../classes/boton';

@Component({
  selector: 'app-boton-menu',
  templateUrl: './boton-menu.component.html',
  styles: []
})
export class BotonMenuComponent implements OnInit {

  @Input() botones: Boton[] = [];
  @Output() onSelect: EventEmitter<number | string | boolean> = new EventEmitter();

  constructor(private router: Router, public dialog: MatDialog,) { }

  ngOnInit(): void {
  }

  redireccionar(url: string) {
    //this.router.navigate([url]);
    console.log(url);
  }

  emitir(boton: Boton) {
      if (boton.componente) {
        const dialogRef = this.dialog.open(boton.componente,{ data:boton.objeto});
        
        dialogRef.afterClosed()
          .subscribe(result => {
            if (result) {
              this.onSelect.emit(result);
            }
          });
      }
  }

  /*
  accion() {
    if(this.boton.componente){
      const dialogRef = this.dialog.open(this.boton.componente);

      dialogRef.afterClosed()
        .subscribe(result => {
          if ( result ) {
            this.onSelect.emit(result);
          }
        });
    }

    if(this.boton.ruta){
      this.router.navigate([this.boton.ruta]);
    }
  }
  */

}
