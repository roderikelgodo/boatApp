import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styles: []
})
export class GaugeComponent implements OnInit {

  @Input() childMessage: any;
  constructor() { }

  ngOnInit() {
  }

}
