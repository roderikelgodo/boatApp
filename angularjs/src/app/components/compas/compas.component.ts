import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import * as $ from 'jquery';

@Component({
  selector: 'app-compas',
  templateUrl: './compas.component.html',
  styleUrls: ['./compas.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CompasComponent implements OnInit {

  control = true;

  @Input() data: any
  // set data(data: any) {

  //   if (data[0].cap !== undefined && data[1].vitesse !== undefined && this.control) {
  //     from()
  //     this.donnes(data);
  //   }
  // }
  constructor() { }

  ngOnInit() { }
  ngOnChanges() {
    this.donnes(this.data);
  }

  donnes(data) {

    this.control = false;
    const bateau = data[0];
    const vent = data[1];


    let spans = $('.grades').find('span');

    let angle = parseInt(bateau.compas);

    const anglesCoord = ['N  0°', '45°', 'E 90°', '135°', 'S 180°', '225°', 'O 270°', '315°'];
    const windTypes = ['Face', 'Près', 'Travers', 'Large', 'Arrière', 'Large', 'Travers', 'Pres'];
    const angles = [0, 45, 90, 135, 180, 225, 270, 315];

    $(spans).each(function (i: any, span: any) {
      const grado = (angle === 0 ? (i * 45) : (angle));

      $(span).attr('grado', grado)
      $(span).css({
        WebkitTransform: 'rotate(' + grado + 'deg)'
      });

      $(span).css('border', '2x dashed')
      $(span).text(anglesCoord[i]);
      $(span).css({
        WebkitTransform: 'rotate(' + grado + 'deg)'
      });
      if (grado === 360 || grado === 0) {
        $(span).css('color', 'red');
      }

      angle += 45;
    });

    spans = $('.grades_vent').find('span');
    $('.vent').remove();
    let reached = false;
    let windType = '';
    $(spans).each(function (i: any, span: any) {

      if (vent.angle > angles[i] && vent.angle <= angles[i + 1]) {

        $(span).append('<div class="vent"></div>');
        $(span).css({
          WebkitTransform: 'rotate(' + angles[i + 1] + 'deg)'
        });
        reached = true;
        windType = windTypes[i + 1];
      } else if (typeof angles[i + 1] === 'undefined' && !reached) {
        // $(spans[0]).append('<div class="vent"></div>');
        windType = windTypes[0];
      }
    });
    $('.info').remove();
    $('<div class="info">Angle du vent: <span>' + vent.angle + '°</span>: <span id="texto">' + windType + '</span><div>').insertBefore('#vitesseVent');
  }



}
