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
   * Get a mock wind data from https://my.api.mockaroo.com
   */
  getWindData() {

    const url = URL_WIND;
    const httpOptions = {
      headers: new HttpHeaders({
        'X-API-Key': '331c4280',
        'Access-Control-Allow-Origin': 'https://mockaroo.com'
      })
    };

    return this.http.get(url, httpOptions);
  }
}
