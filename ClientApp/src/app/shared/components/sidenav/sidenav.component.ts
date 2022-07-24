import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styles: [
    `
      .active {
        background: rgba(0,0,0,.2);
      }

      .texto-blanco {
        color: #ffff;
      }
      
    `
  ]
})

export class SidenavComponent implements OnInit {

  @Input() sidenav!: MatSidenav;

  cambiar: boolean = true;

  ngOnInit() {
  }

  constructor(public media: MediaObserver) {}

  cerrarSidenav() {
    if (this.sidenav.mode === "over") {
      this.sidenav.toggle()
    }
  }

  CambiarIcono() {
    return this.cambiar = this.cambiar ? false : true;
  }
}
