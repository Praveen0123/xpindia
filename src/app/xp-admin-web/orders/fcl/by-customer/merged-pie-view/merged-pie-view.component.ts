import { Component } from '@angular/core';
import { customerPie , confirmed, allocated, placed, loaded, tripstarted} from '../main-customer-pie.data';
import { AppSettings } from '../../../../../app.settings';
import { Settings } from '../../../../../app.settings.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-merged-pie-view',
  templateUrl: './merged-pie-view.component.html',
  styleUrls: ['./merged-pie-view.component.scss']
})
export class MergedPieViewComponent {

  public customerPie: any[];
  public confirmed: any[];
  public allocated: any[];
  public placed: any[];
  public loaded: any[];
  public tripstarted: any[];
  public multi: any[];
  public showLegend = false;
  public gradient = true;
  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  }; 
  public tabArray = [{id:1 , value:"confirmed"} , {id:2 , value:"allocated"} , {id:3 , value:"placed"} , {id:4 , value:"loaded"} , {id:5 , value:"tripstarted"}];
  public showLabels = true;
  public explodeSlices = false;
  public doughnut = false;
  public settings: Settings;
  public resultant : any;
  public id : any;
  public value :any;

  constructor(public appSettings:AppSettings, public router:Router) {
    this.settings = this.appSettings.settings;
    this.id = 1;
    this.value = this.tabArray[0].value;
    this.resultant = confirmed;
    // Object.assign(this, {customerPie});
  }
  
  // public onSelect(event) {
  //   this.router.navigate(['/instanttransport/orders/fcl/customer/customer' , event.name]);
  //   console.log(event);
  //   // console.log(custom);
  // }

}
