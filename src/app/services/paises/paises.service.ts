import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(
    private http: HttpClient
  ) { }

  public getPaises(): Observable<any> {
    return this.http.get('https://restcountries.eu/rest/v2/all');
  }
}
