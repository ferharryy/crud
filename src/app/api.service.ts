import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getAllUsuarios(): Observable<any>{
    return this.http.get(this.baseurl + '/usuarios/', {headers: this.httpHeaders});
  }

  getOneUsuarios(id): Observable<any>{
    return this.http.get(this.baseurl + '/usuarios/' + id + '/', {headers: this.httpHeaders});
  }

  updateUsuario(usuario): Observable<any>{
    const body = {nome: usuario.nome, email: usuario.email, dataCadastro: usuario.dataCadastro, ativo: usuario.ativo};
    return this.http.put(this.baseurl + '/usuarios/' + usuario.id + '/', body, {headers: this.httpHeaders});
  }

  createUsuario(usuario): Observable<any>{
    const body = {nome: usuario.nome, email: usuario.email, dataCadastro: usuario.dataCadastro, ativo: true};
    return this.http.post(this.baseurl + '/usuarios/', body, {headers: this.httpHeaders});
  }

  deleteUsuario(id): Observable<any>{
    return this.http.delete(this.baseurl + '/usuarios/' + id + '/', {headers: this.httpHeaders});
  }
}
