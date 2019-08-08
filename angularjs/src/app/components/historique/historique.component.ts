import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {

  points: any = [];
  coorsY = { 0: 350, 5: 300, 10: 250, 15: 200, 20: 150, 25: 100, 30: 50 };   // Noeuds
  coorsX = [450, 400, 350, 300, 250, 200, 150, 100];                       // Seconds

  @Input() boat: any;

  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnChanges() {

    let noeud = parseInt(this.boat.vitesseNoeud);
    const length = this.points.length;

    if (noeud) {
      if (length) {

        this.points.forEach(function (value) {
          value[1] = value[1] - 50; // coordX Second
        });
      }

      this.points.push([this.coorsY[noeud], this.coorsX[0]]);

      if (length >= 8) {
        this.points.shift();
      }
    }

  }

}
