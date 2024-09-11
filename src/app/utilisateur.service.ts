import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from './utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  [x: string]: any;

  private baseURL = 'http://localhost:8080/api/v1/utilisateur';

  constructor(private httpClient: HttpClient) { }

  getUtilisateurList(): Observable<Utilisateur[]> {
    return this.httpClient.get<Utilisateur[]>(`${this.baseURL}`);
  }

  createUtilisateur(utilisateur : Utilisateur) : Observable<object>{
    return this.httpClient.post(`${this.baseURL}`, utilisateur);
  }

  getUtilisateurById(id : number) : Observable<Utilisateur>{

    return this.httpClient.get<Utilisateur>(`${this.baseURL}/${id}`);
  }

  updateUtilisateur(id:number , utilisateur:Utilisateur): Observable <object>{
    return this.httpClient.put(`${this.baseURL}/${id} `, utilisateur);
  }

  deleteUtilisateur( id:number) : Observable<object>{

    return this.httpClient.delete(`${this.baseURL}/${id} `);
  }

}
