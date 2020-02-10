import { Component } from '@angular/core';
import { status} from '../main-status-pie.data';
import { AppSettings } from '../../../../../app.settings';
import { Settings } from '../../../../../app.settings.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main-status-pie',
  templateUrl: './main-status-pie.component.html',
  styleUrls: ['./main-status-pie.component.scss']
})
export class MainStatusPieComponent {

  public status: any[];
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
    Object.assign(this, {status}); 
  }
  
  // public onSelect(event,custom) {
  //   this.router.navigate(['/instanttransport/orders/oris' , custom]);
  //   console.log(event);
  //   console.log(custom);
  // }
 
}
