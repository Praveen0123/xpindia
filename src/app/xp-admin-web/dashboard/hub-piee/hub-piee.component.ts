import { Component } from '@angular/core';
import { double} from '../pie.hub.data';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';

@Component({
  selector: 'app-hub-piee',
  templateUrl: './hub-piee.component.html',
  styleUrls: ['./hub-piee.component.scss']
})
export class HubPieeComponent {

  public double: any[];
  public multi: any[];
  public showLegend = false;
  public gradient = true;
  public colorScheme = {
    domain: ['#378D3B', '#D22E2E','#2F3E9E',  '#0096A6', '#F47B00', '#606060']
  }; 
  public showLabels = true;
  public explodeSlices = false;
  public doughnut = false;
  public settings: Settings;

  constructor(public appSettings:AppSettings) {
    this.settings = this.appSettings.settings; 
    Object.assign(this, {double}); 
  }
  
  public onSelect(event) {
    console.log(event);
  }

}
