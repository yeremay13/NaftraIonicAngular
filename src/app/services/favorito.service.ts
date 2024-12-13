import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Favorito {
  id_usuario: number;
  id_artista: number;
  favorito: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class FavoritoService {
  private apiUrl = 'http://localhost:8080/api/favorito';

  constructor(private http: HttpClient) {}

  getFavoritos(): Observable<Favorito[]> {
    return this.http.get<Favorito[]>(this.apiUrl);
  }

  getFavorito(id_usuario: number, id_artista: number): Observable<Favorito> {
    return this.http.get<Favorito>(
      `${this.apiUrl}?id_usuario=${id_usuario}&id_artista=${id_artista}`
    );
  }

  addFavorito(favorito: Favorito): Observable<Favorito> {
    return this.http.post<Favorito>(this.apiUrl, favorito);
  }

  updateFavorito(favorito: Favorito): Observable<Favorito> {
    return this.http.put<Favorito>(
      `${this.apiUrl}?id_usuario=${favorito.id_usuario}&id_artista=${favorito.id_artista}`,
      favorito
    );
  }

  deleteFavorito(id_usuario: number, id_artista: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiUrl}?id_usuario=${id_usuario}&id_artista=${id_artista}`
    );
  }
}
