// plato-form.component.ts

import { Component, OnInit, Input } from '@angular/core';
import { ArtistaService, Artista } from '../../services/artista.service';
import { UsuarioService, Usuario } from '../../services/usuario.service';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-artista-form',
  templateUrl: './artista-form.component.html',
  styleUrls: ['./artista-form.component.scss'],
})
export class ArtistaFormComponent implements OnInit {
  @Input() artista?: Artista;
  artistaForm!: FormGroup;
  usuariosDisponibles: Usuario[] = [];
  
  generosDisponibles: string[] = [
    'Trap',
    'Reguetón',
    'Pop',

  ];
  
  constructor(
    private artistaService: ArtistaService,
    private usuarioService: UsuarioService,
    private modalController: ModalController,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.loadUsuarios();

    this.artistaForm = this.formBuilder.group({
      nombre: [this.artista?.nombre || '', Validators.required],
      edad: [this.artista?.edad || '', Validators.required],
      generoMusical: [this.artista?.generoMusical || '', [Validators.required]],
    });
  }

  loadUsuarios() {
    this.usuarioService.getUsuarios().subscribe((usuarios) => {
      this.usuariosDisponibles = usuarios;
    });
  }

  saveArtista() {
    const data = this.artistaForm.value;

    if (this.artista) {
      // Editar artista existente
      const artistaActualizado: Artista = {
        ...this.artista,
        ...data,
      };

      this.artistaService.updateArtista(artistaActualizado).subscribe(() => {
        this.modalController.dismiss(true);
      });
    } else {
      // Crear nuevo artista
      this.artistaService.addArtista(data).subscribe(() => {
        this.modalController.dismiss(true);
      });
    }
  }

  dismiss() {
    this.modalController.dismiss();
  }
}
