import { Component } from '@angular/core';
import { tripstarted} from '../../all-pie.data';
import { AppSettings } from '../../../../app.settings';
import { Settings } from '../../../../app.settings.model';

@Component({
  selector: 'app-trip-started-pie-internal',
  templateUrl: './trip-started-pie-internal.component.html',
  styleUrls: ['./trip-started-pie-internal.component.scss']
})
export class TripStartedPieInternalComponent {

  public tripstarted: any[];
  public multi: any[];
  public showLegend = false;
  public gradient = true;
  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  }; 
  public showLabels = true;
  public explodeSlices = false;
  public doughnut = false;
  public settings: Settings;

  constructor(public appSettings:AppSettings) {
    this.settings = this.appSettings.settings; 
    Object.assign(this, {tripstarted}); 
  }
  
  public onSelect(event) {
    console.log(event);
  }


}
