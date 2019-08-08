import { Component, OnInit } from '@angular/core';
import { WindService } from '../../services/service.index';
import { BoatService } from '../../services/service.index';
import { Wind } from '../../models/wind.model';
import { Boat } from '../../models/boat.model';
import { interval } from 'rxjs';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
/**
 * html 'body' content
 */
export class BodyComponent implements OnInit {

  wind: Wind = new Wind();
  boat: Boat = new Boat();
  secondsCounter = interval(10000);


  constructor(
    public windService: WindService,
    public boatService: BoatService
  ) { }


  ngOnInit() {
    this.getData();
    this.secondsCounter.subscribe(n => {
      this.getData();
    });
  }



  getData() {
    /**
     * Call mock boat data from boatService
     */
    this.boatService.getBoatData()
      .subscribe((resp: any) => {
        if (resp.ok) {
          this.boat = resp.boat;
        }
      });
    /**
     * Call mock wind data from windService
     */
    this.windService.getWindData()
      .subscribe((resp: any) => {
        if (resp.ok) {
          this.wind = resp.wind;
        }

      });
  }
}
