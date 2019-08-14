import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnChanges {

  /**
   * coorsY = {}
   * 'Y-coordetates' to draw the <svg></svg>
   * the object 'key' makes reference to the knot boat speed value
   * the object 'value' set dot position in the history graph to indicate the knot speed
   *
   * For this prototype app all knot-speed-value are: 5, 10, 15, 20, 25 and 30.
   */
  coorsY = { 0: 350, 5: 300, 10: 250, 15: 200, 20: 150, 25: 100, 30: 50 };   // Knots
  /**
   * coorsX = []
   * 'X-coordetates' to draw the <svg></svg>
   * the array 'value' set dot position in the history graph to indicate the seconds
   */
  coorsX = [450, 400, 350, 300, 250, 200, 150, 100];                       // Seconds
  /**
   * points = [[dotPositionX,dotPositionY], ...]
   * array variable that keeps the last 8 histories of boat speed (dot position in graph and)
   * Each items is formed by an array having x and y dot coordates to draw the svg
   */
  points: any = [];

  @Input() boat: any;

  constructor() { }

  /**
   * Sets viewBox attribute for mobile
   */
  setViewBox() {
    const svg = document.getElementsByTagName('svg');
    if (window.innerWidth <= 575.98) {
      svg[0].setAttribute('viewBox', '0 0 460 450');
    } else {
      svg[0].removeAttribute('viewBox');
    }
  }

  onResize(event) {
    this.setViewBox();
  }

  /**
   * Every time new data is fetched it is pushed into 'this.points' to keep the speed history
   */
  ngOnChanges() {
    /**
     * we get the knot speed of the current boat data to get the 'this.coorsY' value
     * that have the dot position to set in the history graph
     */
    const noeud = Number(this.boat.vitesseNoeud);
    // the length of 'this.point' reflects the knot speed history that we keeps until 8 items
    const length = this.points.length;

    // if the boat instance is not empty
    if (noeud) {
      // if is not the first boat data fectch
      if (length) {
        // for each item we subtract 50 in item[1] which is the dot position for seconds history
        this.points.forEach((value: any) => value[1] = value[1] - 50);
      }
      // add the new boat speed value to the history array
      this.points.push([this.coorsY[noeud], this.coorsX[0]]);

      // if the history array have more than 8 items
      if (length >= 8) {
        // we delete the first (oldest)
        this.points.shift();
      }
    }

  }

}
