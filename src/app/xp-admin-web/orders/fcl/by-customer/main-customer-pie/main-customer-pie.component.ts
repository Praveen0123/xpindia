import { Component } from '@angular/core';
import { customerPie} from '../main-customer-pie.data';
import { AppSettings } from '../../../../../app.settings';
import { Settings } from '../../../../../app.settings.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-customer-pie',
  templateUrl: './main-customer-pie.component.html',
  styleUrls: ['./main-customer-pie.component.scss']
})
export class MainCustomerPieComponent {

  public customerPie: any[];
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
    Object.assign(this, {customerPie}); 
  }
  
  public onSelect(event) {
    this.router.navigate(['/instanttransport/orders/fcl/customer/customer' , event.name]);
    console.log(event);
    // console.log(custom);
  }
}
