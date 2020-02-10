
import { Component } from '@angular/core';
import { double} from '../pie.data';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';

@Component({
  selector: 'app-pie2',
  templateUrl: './pie2.component.html',
  styleUrls: ['./pie2.component.scss']
})
export class Pie2Component  {
  public double: any[];
  public multi: any[];
  public showLegend = false;
  public gradient = true;
  public colorScheme = {
    domain: ['#F47B00','#378D3B','#2F3E9E', '#D22E2E',  '#0096A6',  '#606060']
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













