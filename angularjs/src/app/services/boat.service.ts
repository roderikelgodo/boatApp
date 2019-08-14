import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_BOAT } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class BoatService {

  constructor(

    public http: HttpClient

  ) { }


  /**
   * Get a mock boat data model instance from Firebase backend
   */
  getBoatData() {

    const url = URL_BOAT;
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.http.get(url, httpOptions);
  }
}
