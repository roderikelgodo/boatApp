import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICE } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class BateauService {

  constructor(

    public http: HttpClient

  ) { }

  getBateau() {

    const url = URL_SERVICE + '/bateau';

    return this.http.get(url);
  }

  getBateauJson() {

    let bateaux = require('../../../../database/bateau.json');

    const count = bateaux.length;
    const random = Math.floor(Math.random() * count);
    return bateaux[random];

  }
}
