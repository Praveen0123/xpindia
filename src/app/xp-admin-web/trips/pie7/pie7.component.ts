import { Component } from '@angular/core';
import { seven} from '../pie.data';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';


@Component({
  selector: 'app-pie7',
  templateUrl: './pie7.component.html',
  styleUrls: ['./pie7.component.scss']
})
export class Pie7Component  {
  public seven: any[];
  // public multi: any[];
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
    Object.assign(this, {seven}); 
  }
  
  public onSelect(event) {
    console.log(event);
  }

}






























