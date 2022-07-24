import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
      .toolbar-sidenav{
        background: #3f51b5;
        color: #ffff;
        border: 0;
      }

      mat-sidenav{
        background: #3f51b5;
        width: 240px;
      }
    `
  ]
})
export class HomeComponent implements OnInit {

  private mediaSubscription!: Subscription;
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  cerraSide: boolean = false;
  medias = ['md', 'sm', 'xs'];
  
  constructor(private media: MediaObserver) { }

  ngOnInit(): void {
    this.mediaSubscription = this.media.asObservable()
      .subscribe((change) => {
          if (this.sidenav) {
            if (this.medias.includes(change[0].mqAlias)) {
              this.sidenav.mode = 'over';
              this.sidenav.close();
            } else {
              this.sidenav.mode = 'side';
              this.sidenav.open();
            }
          }
      });
  }

  ngOnDestroy(): void {
    this.mediaSubscription.unsubscribe();
  }
}
