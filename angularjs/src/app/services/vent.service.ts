import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICE } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class VentService {

  constructor(

    public http: HttpClient

  ) { }

  getVent() {

    const url = URL_SERVICE + '/vent';

    return this.http.get(url);
  }

  getVentJson() {

    let vents = require('../../../../database/vent.json');
    const count = vents.length;
    const random = Math.floor(Math.random() * count);
    return vents[random];

  }
}
