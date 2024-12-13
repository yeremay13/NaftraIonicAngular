// plato.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Usuario } from './usuario.service';

export interface Artista {
  id?: number;
  nombre: string;
  edad: string;
  generoMusical: Float32Array;
}

@Injectable({
  providedIn: 'root',
})
export class ArtistaService {
  private apiUrl = 'http://localhost:8080/api/artista';

  constructor(private http: HttpClient) {}

  getArtistas(): Observable<Artista[]> {
    return this.http.get<Artista[]>(this.apiUrl);
  }

  getArtista(id: number): Observable<Artista> {
    return this.http.get<Artista>(`${this.apiUrl}/${id}`);
  }

  addArtista(artista: Artista): Observable<Artista> {
    return this.http.post<Artista>(this.apiUrl, artista);
  }

  updateArtista(artista: Artista): Observable<Artista> {
    return this.http.put<Artista>(`${this.apiUrl}/${artista.id}`, artista);
  }

  deleteArtista(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
