

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ArtistaFormComponent } from './artista-form/artista-form.component';
import { ArtistaListComponent } from './artista-list/artista-list.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
// import { FavoritoFormComponent } from './favorito-form/favorito-form.component';
// import { FavoritoListComponent } from './favorito-list/favorito-list.component';

@NgModule({
  declarations: [
    ArtistaFormComponent,
    ArtistaListComponent,
    UsuarioFormComponent,
    UsuarioListComponent,
    // FavoritoFormComponent,
    // FavoritoListComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    ArtistaFormComponent,
    ArtistaListComponent,
    UsuarioFormComponent,
    UsuarioListComponent,
    // FavoritoFormComponent,
    // FavoritoListComponent
  ],
})
export class ArtistasModule {}
