import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_WIND } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class WindService {

  constructor(

    public http: HttpClient

  ) { }


  /**
   * Get a mock wind data model instance from Firebase backend
   */
  getWindData() {

    const url = URL_WIND;
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.http.get(url, httpOptions);
  }
}
