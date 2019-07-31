import { Component, OnInit } from '@angular/core';
import { VentService } from '../../services/service.index';
import { BateauService } from '../../services/service.index';
import { Vent } from '../../models/vent.model';
import { Bateau } from '../../models/bateau.model';
import { interval } from 'rxjs';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {

  vent: Vent = new Vent();
  bateau: Bateau = new Bateau();
  secondsCounter = interval(10000);


  constructor(
    public ventService: VentService,
    public bateauService: BateauService
  ) { }


  ngOnInit() {
    this.getData();
    this.secondsCounter.subscribe(n => {
      this.getData();
    });
  }



  getData() {

    const config = require('../../../../../config/config.json');

    if (config.database) {
      this.ventService.getVent()
        .subscribe((resp: any) => {

          if (resp.ok) {
            this.vent = resp.vent;

          }
        });
      this.bateauService.getBateau()
        .subscribe((resp: any) => {

          if (resp.ok) {
            this.bateau = resp.bateau;

          }
        });
    } else {
      this.vent = this.ventService.getVentJson();
      this.bateau = this.bateauService.getBateauJson();
    }

  }
}
