import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personne } from '../interfaces/personne';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  private url: string = "http://localhost:8000/ws/personnes";
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders().set("Authorization", `Bearer ${localStorage.getItem('jeton')}`);
    console.log(this.headers.get("Authorization"))
  }

  getAllPersonnes() {
    return this.http.get<Array<Personne>>(this.url, { headers: this.headers });
  }
  getOnePersonne(id: any) {
    return this.http.get<Personne>(`${this.url}/${id}`, { headers: this.headers });
  }
  addPersonne(p: Personne) {
    return this.http.post<Personne>(this.url, p, { headers: this.headers });
  }
  editPersonne(p: Personne) {
    return this.http.put<Personne>(`${this.url}/${p.id}`, p, { headers: this.headers });
  }
  removePersonne(id: any) {
    return this.http.delete(`${this.url}/${id}`, { headers: this.headers });
  }
}
