import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
/**
 * html 'footer' content
 */
export class FooterComponent implements OnInit {

  anio: number;
  constructor() {
    this.anio = new Date().getFullYear();
  }

  ngOnInit() {
  }

}
