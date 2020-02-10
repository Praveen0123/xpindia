import { Component } from '@angular/core';
import { zone} from '../all-pie.data';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zone-pie',
  templateUrl: './zone-pie.component.html',
  styleUrls: ['./zone-pie.component.scss']
})
export class ZonePieComponent {

  public zone: any[];
  public multi: any[];
  public showLegend = false;
  public gradient = true;
  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#606060', '#F47B00', '#0096A6']
  }; 
  public showLabels = true;
  public explodeSlices = false;
  public doughnut = false;
  public settings: Settings;

  constructor(public appSettings:AppSettings, public router:Router) {
    this.settings = this.appSettings.settings; 
    Object.assign(this, {zone}); 
  }
  
  public onSelect(event,custom) {
    this.router.navigate(['/instanttransport/orders/oris' , custom]);
    console.log(event);
  }
 

}
