import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

import { JwtHelperService } from "@auth0/angular-jwt";
const helper = new JwtHelperService();
 

import { EnvServicesService } from '../envServices/env-services.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private envServices: EnvServicesService
    ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  public autenticar(): Observable<any> {
    return this.http.get(this.envServices.env["produtos"].api + 'token');
  }

  public authJWT(): boolean {
    let token: string;
    let decodedToken = {iat: 0, token: ''};
    if(localStorage.getItem('token')){
      token = localStorage.getItem('token')
      decodedToken = helper.decodeToken(localStorage.getItem('token'));
    }else{
      decodedToken.token = '';
    }
    
    return decodedToken.token == 'APIJWTTOKEN';
  }
}
