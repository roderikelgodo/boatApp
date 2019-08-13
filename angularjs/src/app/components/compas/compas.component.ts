import { Component, ViewEncapsulation, Input, OnChanges, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-compas',
  templateUrl: './compas.component.html',
  styleUrls: ['./compas.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CompasComponent {

  /**
   * Binding Input from 'body component' >> [data]='{boat:boat,wind:wind}'
   */
  @Input() data: any;

  // Array to form the compass bezel (coordenates)
  anglesCoord = ['N  0°', '45°', 'E 90°', '135°', 'S 180°', '225°', 'O 270°', '315°'];
  // Array of wind types
  windTypes = ['Face', 'Près', 'Travers', 'Large', 'Arrière', 'Large', 'Travers', 'Pres'];
  // Actual wind type
  windType = '';
  // Array of custom (fixed) angles to make the graph work
  angles = [0, 45, 90, 135, 180, 225, 270, 315];
  // Variable to set the degree the compass must turn
  degree = 0;

  constructor() { }

  /**
   * Compass styles (the outsider part that shows degrees and cardinal points)
   */
  getStylesCompass() {

    const styles = {
      WebkitTransform: '',
      border: '',
      color: ''
    };


    if (this.degree === 0) {
      this.degree = this.data.boat.compas;
    }
    styles.WebkitTransform = 'rotate(' + this.degree + 'deg)';
    styles.border = '2x dashed';

    if (this.degree === 360 || this.degree === 0) {
      styles.color = 'red';
    }

    this.degree = Number(this.degree) + 45;

    return styles;

  }
  /**
   * Compass styles (the inner part that shows the red arrow with wind direction)
   */
  thisDirection(index) {

    if (this.data.wind.angle > this.angles[index] && this.data.wind.angle <= this.angles[index + 1]) {
      return true;
    }
    return false;
  }
  /**
   * Compass styles (the inner part that shows the red arrow with wind direction)
   */
  getStylesWindDirection(index) {

    const styles = {
      WebkitTransform: ''
    };
    if (this.data.wind.angle > this.angles[index] && this.data.wind.angle <= this.angles[index + 1]) {
      styles.WebkitTransform = 'rotate(' + this.angles[index + 1] + 'deg)';
      this.windType = this.windTypes[index + 1];
    }
    return styles;

  }

}
