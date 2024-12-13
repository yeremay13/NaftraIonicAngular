// import { Component, OnInit, Input } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ModalController } from '@ionic/angular';
// import { FavoritoService } from '../../services/favorito.service';
// import { UsuarioService } from '../../services/usuario.service';
// import { ArtistaService } from '../../services/artista.service';
// import { Favorito } from '../../services/favorito.service';
// import { Usuario } from '../../services/usuario.service';
// import { Artista } from '../../services/artista.service';

// @Component({
//   selector: 'app-favorito-form',
//   templateUrl: './favorito-form.component.html',
//   styleUrls: ['./favorito-form.component.scss'],
// })
// export class FavoritoFormComponent implements OnInit {
//   @Input() favorito?: Favorito;
//   favoritoForm!: FormGroup;
//   usuarios: Usuario[] = [];
//   artistas: Artista[] = [];

//   constructor(
//     private favoritoService: FavoritoService,
//     private usuarioService: UsuarioService,
//     private artistaService: ArtistaService,
//     private modalController: ModalController,
//     private formBuilder: FormBuilder
//   ) {}

//   ngOnInit() {
//     this.favoritoForm = this.formBuilder.group({
//       id_usuario: [this.favorito?.id.usuario_id || '', Validators.required],  // Asegúrate de usar el nombre correcto
//       id_artista: [this.favorito?.id.artista_id || '', Validators.required],      // Asegúrate de usar el nombre correcto
//       favorito: [this.favorito?.favorito || false, Validators.required]
//     });

//     this.loadUsuarios();
//     this.loadArtistas();
//   }

//   loadUsuarios() {
//     this.usuarioService.getUsuarios().subscribe((usuarios) => {
//       this.usuarios = usuarios;
//     });
//   }


//   async addFavorito() {
//     const modal = await this.modalController.create({
//       component: FavoritoFormComponent,
//     });}

//   loadArtistas() {
//     this.artistaService.getArtistas().subscribe((artistes) => {
//       this.artistas = artistas;
//     });
//   }
//   saveFavorito() {
//     const data = this.favoritoForm.value;
  
//     if (this.favorito) {
//       // Si estamos actualizando el favorito
//       const favoritoActualizado: Favorito = {
//         ...this.favorito,
//         id: {
//           idUsuario: data.id_usuario,
//           idArtista: data.id_artista,
//         },
//         favorito: data.favorito,
//       };
  
//       this.favoritoService.updateFavorito(this.favorito.id.usuario_id, this.favorito.id.artista_id, this.favorito).subscribe(
//         () => {
//           this.modalController.dismiss(true);
//         },
//         (error) => {
//           console.error('Error al actualizar favorito:', error);
//         }
//       );
//     } else {
//       // Si estamos creando un nuevo favorito
//       const nuevoFavorito: Favorito = {
//         id: {
//           idUsuario: data.id_usuario,
//           idArtista: data.id_artista,
//         },
//         favorito: data.favorito,
//       };
  
//       this.favoritoService.addFavorito(nuevoFavorito).subscribe(
//         () => {
//           this.modalController.dismiss(true);
//         },
//         (error) => {
//           console.error('Error al crear favorito:', error);
//         }
//       );
//     }
//   }
  

//   dismiss() {
//     this.modalController.dismiss();
//   }
// }
