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

  // set boat and wind variable
  boat: Boat = new Boat();
  wind: Wind = new Wind();
  // set the counter value to 10 seconds
  secondsCounter = interval(10000);


  constructor(
    public windService: WindService,
    public boatService: BoatService
  ) { }


  ngOnInit() {
    // Call of function that fetches the needed boat and wind data
    this.getData();
    // set the counter to call the getData() function every 10 seconds
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
