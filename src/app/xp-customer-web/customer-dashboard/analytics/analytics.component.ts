import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { analytics } from '../dashboard.data';

@Component({
  selector: 'app-analytics',
  styleUrls: ['./analytics.component.scss'],
  templateUrl: './analytics.component.html'
})
export class AnalyticsComponent implements OnInit {
  
  public analytics: any[];
  ordersArray : any[] = [];
  activeOrdersArray : any[] = [];
  refundedOrdersArray : any[] = [];
  tempArray : any[] = [];
  public showXAxis = true;
  public text = "Monthly distribution Of Active Orders";
  public showYAxis = true;
  public gradient = true;
  public showLegend = false;
  public status_filter = "";
  public months = [{id:1 , value:"January"} , {id:2 , value:"February"} , {id:3 , value:"March"} , {id:4 , value:"April"} , {id:5 , value:"May"} , {id:6 , value:"June"} , {id:7 , value:"July"} , {id:8 , value:"August"} , {id:9 , value:"September"} , {id:10 , value:"October"} , {id:11 , value:"November"} , {id:12 , value:"December"}];
  public trends = [{id:0 , value:"Orders"} , {id:1 , value:"Active Orders"} , {id:2 , value:"Trips"} , {id:3 , value:"Refunded Orders"}];
  public showXAxisLabel = true;
  public xAxisLabel = 'Days';
  public showYAxisLabel = true;
  public yAxisLabel = 'Active Orders';
  public filterToggle : boolean;
  public colorScheme = {
    domain: ['#283593', '#039BE5', '#FF5252']
  }; 
  public autoScale = true;
  public roundDomains = true;
  @ViewChild('resizedDiv') resizedDiv:ElementRef;
  public previousWidthOfResizedDiv:number = 0; 
  
  toggleFilter() {
    this.filterToggle = !this.filterToggle;
  }
  
  trendSearch() {
    if(this.status_filter == "1") {
      this.analytics = this.ordersArray;
    }
    if(this.status_filter == "2") {
      this.analytics = this.activeOrdersArray;
    }
    if(this.status_filter == "3") {
      this.analytics = this.tempArray;
    }
    if(this.status_filter == "4") {
      this.analytics = this.refundedOrdersArray;
    }
    if(this.status_filter == "5") {
      this.analytics = this.ordersArray;
    }
    if(this.status_filter == "6") {
      this.analytics = this.activeOrdersArray;
    }
    if(this.status_filter == "7") {
      this.analytics = this.tempArray;
    }
    if(this.status_filter == "8") {
      this.analytics = this.refundedOrdersArray;
    }
    if(this.status_filter == "9") {
      this.analytics = this.ordersArray;
    }
    if(this.status_filter == "10") {
      this.analytics = this.activeOrdersArray;
    }
    if(this.status_filter == "11") {
      this.analytics = this.tempArray;
    }
    if(this.status_filter == "12") {
      this.analytics = this.refundedOrdersArray;
    }
  }
  
  clearFilters() {
    this.status_filter = "";
    this.analytics = this.tempArray;
    this.text = "Distribution of trips By Days";
  }
  
  constructor() { }
  
  ngOnInit() {
    this.filterToggle = false;
    var arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
    var scheduledAarray = [15, 8, 12, 4, 22, 25, 36, 10, 17, 39, 19, 28, 20, 19, 29, 39, 59, 36, 39, 59, 35, 36, 28, 17, 39, 19, 28, 6, 7, 30, 22];
    var scheduledObj = { name: "Trips", series: [] };
    for (var i = 1; i <= 31; i++) {
      scheduledObj.series.push({ "name": arr[i - 1], value: scheduledAarray[i - 1] });
    }
    this.tempArray.push(scheduledObj);
    var arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
    var scheduledAarray = [15014, 8547, 1201, 4757, 2257, 2596, 3601, 10987, 1774, 3999, 1954, 2880, 2004, 1974, 2998, 3971, 5955, 3633, 3939, 5947, 3510, 3687, 18011, 17147, 3999, 1917, 2800, 6140, 7785, 3096, 22014];
    var scheduledObj = { name: "Orders", series: [] };
    for (var i = 1; i <= 31; i++) {
      scheduledObj.series.push({ "name": arr[i - 1], value: scheduledAarray[i - 1] });
    }
    this.ordersArray.push(scheduledObj);
    var arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
    var scheduledAarray = [1501, 807, 1201, 496, 2201, 2500, 3601, 1014, 1708, 3996, 1939, 2828, 2021, 1900, 2965, 3900, 5985, 3674, 3936, 5914, 3573, 3629, 2819, 1717, 3958, 1961, 2837, 600, 7741, 3017, 2222];
    var scheduledObj = { name: "Active Orders", series: [] };
    for (var i = 1; i <= 31; i++) {
      scheduledObj.series.push({ "name": arr[i - 1], value: scheduledAarray[i - 1] });
    }
    this.activeOrdersArray.push(scheduledObj);
    var arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
    var scheduledAarray = [150, 80, 121, 49, 225, 252, 367, 106, 170, 393, 194, 289, 201, 195, 290, 398, 594, 366, 399, 591, 351, 362, 280, 170, 398, 199, 284, 600, 700, 304, 227];
    var scheduledObj = { name: "Refunded Orders", series: [] };
    for (var i = 1; i <= 31; i++) {
      scheduledObj.series.push({ "name": arr[i - 1], value: scheduledAarray[i - 1] });
    }
    this.refundedOrdersArray.push(scheduledObj);
    this.analytics = this.tempArray; 
  }
  
  onSelect(event) {
  }
  
  ngAfterViewChecked() {    
    if(this.previousWidthOfResizedDiv != this.resizedDiv.nativeElement.clientWidth){
      this.analytics = [...analytics];
    }
    this.previousWidthOfResizedDiv = this.resizedDiv.nativeElement.clientWidth;
  }
  
}