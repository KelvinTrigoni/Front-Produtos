import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

import { EnvServicesService } from '../envServices/env-services.service';
import { Produto } from './../../model/Produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(
    private http: HttpClient,
    private envServices: EnvServicesService
  ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token'), 'Content-Type': 'application/json' })
  }

  public postProdutos(body: Produto): Observable<any> {
    return this.http.post(this.envServices.env["produtos"].api + 'produtos', body, this.httpOptions);
  }

  public getProdutos(): Observable<any> {
    return this.http.get(this.envServices.env["produtos"].api + 'produtos', this.httpOptions);
  }

  public getProdutosById(id: string): Observable<any> {
    return this.http.get(this.envServices.env["produtos"].api + `produtos/${id}`, this.httpOptions);
  }

  public putProdutos(body: Produto): Observable<any> {
    return this.http.put(this.envServices.env["produtos"].api + 'produtos', body , this.httpOptions);
  }

  public deleteProdutos(id: string): Observable<any> {
    return this.http.delete(this.envServices.env["produtos"].api + `produtos/${id}`, this.httpOptions);
  }
}
