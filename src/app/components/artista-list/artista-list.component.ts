import { Component, OnInit } from '@angular/core';
import { ArtistaService, Artista } from '../../services/artista.service';
import { ModalController, AlertController } from '@ionic/angular';
import { ArtistaFormComponent } from '../artista-form/artista-form.component';


@Component({
  selector: 'app-artista-list',
  templateUrl: './artista-list.component.html',
  styleUrls: ['./artista-list.component.scss'],
})
export class ArtistaListComponent implements OnInit {

  artistas: Artista[] = [];

  constructor (
    private artistaService: ArtistaService,
    private modalController: ModalController,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.loadArtista();
  }

  loadArtista() {
    this.artistaService.getArtistas().subscribe((data: Artista[]) => {
      this.artistas = data;
    });
  }

  async addArtista() {
    const modal = await this.modalController.create({
      component: ArtistaFormComponent
    });
    modal.onDidDismiss().then(() => {
      this.loadArtista();
    });
    return await modal.present();
  }

  async editArtista(artista: Artista) {
    const modal = await this.modalController.create({
      component: ArtistaFormComponent,
      componentProps: { artista }
    });
    modal.onDidDismiss().then(() => {
      this.loadArtista();
    });
    return await modal.present();
  }

  async deleteArtista(id: number) {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Estás seguro de que deseas eliminar este artista?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.artistaService.deleteArtista(id).subscribe(() => {
              this.loadArtista();
            });
          },
        },
      ],
    });

    await alert.present();
  
  }

}