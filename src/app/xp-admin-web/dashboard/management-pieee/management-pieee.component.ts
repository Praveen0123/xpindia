import { Component } from '@angular/core';
import { triple} from '../pie.data';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';

@Component({
  selector: 'app-management-pieee',
  templateUrl: './management-pieee.component.html',
  styleUrls: ['./management-pieee.component.scss']
})
export class ManagementPieeeComponent {

  public triple: any[];
  public multi: any[];
  public showLegend = false;
  public gradient = true;
  public colorScheme = {
    domain: ['#378D3B', '#D22E2E','#2F3E9E', '#D22E2E',  '#0096A6', '#F47B00', '#606060']
  }; 
  public showLabels = true;
  public explodeSlices = false;
  public doughnut = false;
  public settings: Settings;

  constructor(public appSettings:AppSettings) {
    this.settings = this.appSettings.settings; 
    Object.assign(this, {triple}); 
  }
  
  public onSelect(event) {
    console.log(event);
  }


}
