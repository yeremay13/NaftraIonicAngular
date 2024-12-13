// app.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  currentView: 'artistas' | 'favoritos' | 'usuarios' = 'artistas' ;

  constructor() {}

  showArtistas() {
    this.currentView = 'artistas';
  }

  showUsuarios() {
    this.currentView = 'usuarios';
  }
  showFavoritos() {
    this.currentView = 'favoritos';
  }
}
