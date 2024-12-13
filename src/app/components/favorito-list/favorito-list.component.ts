// import { Component, OnInit } from '@angular/core';
// import { FavoritoService } from '../../services/favorito.service';
// import { AlertController, ModalController } from '@ionic/angular';
// import { FavoritoFormComponent } from '../favorito-form/favorito-form.component';

// export interface Favorito {
//   id: {
//     usuario_id: number;
//     artista_id: number;
//   };
//   favorito: boolean;
//   nombre_usuario?: string; // Nombre del usuario
//   nombre_artista?: string;   // Nombre del artista
// }

// @Component({
//   selector: 'app-favorito-list',
//   templateUrl: './favorito-list.component.html',
//   styleUrls: ['./favorito-list.component.scss'],
// })
// export class FavoritoListComponent implements OnInit {
//   favoritos: Favorito[] = [];

//   constructor(
//     private favoritoservice: FavoritoService,
//     private alertController: AlertController,
//     private modalController: ModalController
//   ) {}

//   ngOnInit() {
//     this.loadFavoritos();
//   }

//   loadFavoritos() {
//     this.favoritoservice.getFavoritos().subscribe((favoritos) => {
//       this.favoritos = favoritos;
//     });
//   }

//   async addFavorito() {
//     const modal = await this.modalController.create({
//       component: FavoritoFormComponent,
//     });

//     modal.onDidDismiss().then(() => {
//       this.loadFavoritos();
//     });

//     return await modal.present();
//   }

//   async editFavorito(favorito: Favorito) {
//     const modal = await this.modalController.create({
//       component: FavoritoFormComponent,
//       componentProps: { favorito },
//     });

//     modal.onDidDismiss().then(() => {
//       this.loadFavoritos();
//     });

//     return await modal.present();
//   }

//   async deleteFavorito(idUsuario: number, idArtista: number) {
//     const alert = await this.alertController.create({
//       header: 'Confirmar',
//       message: '¿Estás seguro de que deseas eliminar este favorito?',
//       buttons: [
//         {
//           text: 'Cancelar',
//           role: 'cancel',
//         },
//         {
//           text: 'Eliminar',
//           handler: () => {
//             this.favoritoservice.deleteFavorito(idUsuario, idArtista).subscribe(() => {
//               this.loadFavoritos();
//             });
//           },
//         },
//       ],
//     });

//     await alert.present();
//   }
// }