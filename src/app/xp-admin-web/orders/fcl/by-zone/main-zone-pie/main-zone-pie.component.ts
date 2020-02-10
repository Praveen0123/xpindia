import { Component } from '@angular/core';
import { zone} from '../main-zone-pie.data';
import { AppSettings } from '../../../../../app.settings';
import { Settings } from '../../../../../app.settings.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-zone-pie',
  templateUrl: './main-zone-pie.component.html',
  styleUrls: ['./main-zone-pie.component.scss']
})
export class MainZonePieComponent {

  public zone: any[];
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

  constructor(public appSettings:AppSettings, public router:Router) {
    this.settings = this.appSettings.settings; 
    Object.assign(this, {zone}); 
  }
  
  // public onSelect(event,custom) {
  //   this.router.navigate(['/instanttransport/orders/oris' , custom]);
  //   console.log(event);
  //   console.log(custom);
  // }

}
