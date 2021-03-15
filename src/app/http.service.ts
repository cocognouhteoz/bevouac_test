import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getApiData() {
    
    const headers = new HttpHeaders().set(
      'Authorization',
      'Bearer o-M4VUZFPRL6jYFK-lkZZGQJgjo' // c'est Bearer + Access token pour utiliser API
    );

    const params = new HttpParams()
      .set('departments', '75,13')        // Choisir departments de Paris et Marseille
      .set('rome_codes', 'M1805');        // Choisir le rome code pour l'informatique

    const options = { params: params, headers: headers };
    return this.http.get(
      'https://api.emploi-store.fr/partenaire/labonneboite/v1/company/',
      options
    );
  }
}