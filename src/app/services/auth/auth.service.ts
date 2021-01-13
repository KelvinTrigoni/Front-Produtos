import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
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
}
