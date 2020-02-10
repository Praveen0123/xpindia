import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageEvent, MatDialog } from '@angular/material';
import { Location } from '@angular/common';
import { customerPie , confirmed, allocated, placed, loaded, tripstarted} from '../main-customer-pie.data';
import { AppSettings } from '../../../../../app.settings';
import { Settings } from '../../../../../app.settings.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-specific-customer',
  templateUrl: './specific-customer.component.html',
  styleUrls: ['./specific-customer.component.scss']
})
export class SpecificCustomerComponent implements OnInit {

  public name:any;
  public id : any;
  public value :any;
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
  public tabArray = [{id:1 , value:"Confirmed"} , {id:2 , value:"Allocated"} , {id:3 , value:"Placed"} , {id:4 , value:"Loaded"} , {id:5 , value:"Trip Started"}];
  public showLabels = true;
  public explodeSlices = false;
  public doughnut = false;
  public settings: Settings;
  public resultant : any;
  constructor(public appSettings:AppSettings, public router:Router,public dialog:MatDialog,public route:ActivatedRoute,private location:Location) {
    this.settings = this.appSettings.settings;
   }

  ngOnInit() {
    this.id = 1;
    this.value = this.tabArray[0].value;
    this.name = this.route.snapshot.paramMap.get('name');
    console.log(this.name);
    this.resultant = confirmed;
  }

  rightArrowClicked(event) {
    console.log(this.id);
    this.id = this.id + 1;
    this.value = this.tabArray[this.id - 1].value;
    console.log(this.id);
    if(this.id == 1) {
      this.resultant = confirmed;
    }
    if(this.id == 2) {
      this.resultant = allocated;
    }
    if(this.id == 3) {
      this.resultant = placed;
    }
    if(this.id == 4) {
      this.resultant = loaded;
    }
    if(this.id == 5) {
      this.resultant = tripstarted;
    }
  }

  leftArrowClicked(event) {
    console.log(this.id);
    this.id = this.id - 1;
    console.log(this.id);
    this.value = this.tabArray[this.id -1].value;
    if(this.id == 1) {
      this.resultant = confirmed;
    }
    if(this.id == 2) {
      this.resultant = allocated;
    }
    if(this.id == 3) {
      this.resultant = placed;
    }
    if(this.id == 4) {
      this.resultant = loaded;
    }
    if(this.id == 5) {
      this.resultant = tripstarted;
    }
  }

}
