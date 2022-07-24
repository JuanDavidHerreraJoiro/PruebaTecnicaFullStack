import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
    `
      mat-toolbar {
        background: #ffff;
        position: sticky;
        position: -webkit-sticky; /* For macOS/iOS Safari */
        top: 0; /* Sets the sticky toolbar to be on top */
        z-index: 1000; /* Ensure that your app's content doesn't overlap the toolbar */
      }
    `
  ]
})
export class NavbarComponent implements OnInit {

  @Input() sidenav!: MatSidenav;

  constructor() { }

  ngOnInit(): void {
  }

}
