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
   * Get a mock boat data from https://my.api.mockaroo.com
   */
  getBoatData() {

    const url = URL_BOAT;
    const httpOptions = {
      headers: new HttpHeaders({
        'X-API-Key': '331c4280',
        'Access-Control-Allow-Origin': 'https://mockaroo.com'
      })
    };

    return this.http.get(url, httpOptions);
  }
}
