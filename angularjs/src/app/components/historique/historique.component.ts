import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnChanges {

  points: any = [];
  coorsY = { 0: 350, 5: 300, 10: 250, 15: 200, 20: 150, 25: 100, 30: 50 };   // Noeuds
  coorsX = [450, 400, 350, 300, 250, 200, 150, 100];                       // Seconds

  @Input() boat: any;

  constructor() { }

  setViewBox() {
    const svg = document.getElementsByTagName('svg');
    if (window.innerWidth <= 575.98) {
      svg[0].setAttribute('viewBox', '0 0 460 450');
    } else {
      svg[0].removeAttribute('viewBox');
    }
  }

  onResize($event) {
    this.setViewBox();
  }
  ngOnChanges() {

    const noeud = Number(this.boat.vitesseNoeud);
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
