import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Boton } from '../../classes/boton';


@Component({
  selector: 'app-boton-responsive',
  templateUrl: './boton-responsive.component.html',
  styles: [
  ]
})
export class BotonResponsiveComponent implements OnInit {

  @Input() boton!: Boton;
  @Output() onSelect: EventEmitter<number> = new EventEmitter();

  constructor(
    public media: MediaObserver,
    public dialog: MatDialog,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  accion() {
    if(this.boton.componente){
      const dialogRef = this.dialog.open(this.boton.componente);

      dialogRef.afterClosed()
        .subscribe(result => {
          if ( result ) {
            this.onSelect.emit(result);
          }
        });
    }else if(this.boton.ruta){
      this.router.navigate([this.boton.ruta]);
    }
  }

}
