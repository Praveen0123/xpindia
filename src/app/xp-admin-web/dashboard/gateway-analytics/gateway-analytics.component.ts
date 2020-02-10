import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { analytics } from '../dashboard.data';

@Component({
  selector: 'app-gateway-analytics',
  templateUrl: './gateway-analytics.component.html',
  styleUrls: ['./gateway-analytics.component.scss']
})
export class GatewayAnalyticsComponent implements OnInit {

  public analytics: any[];
  ordersArray : any[] = [];
  activeOrdersArray : any[] = [];
  refundedOrdersArray : any[] = [];
  tempArray : any[] = [];
  public showXAxis = true;
  public text = "Monthly Distribution of orders";
  public showYAxis = true;
  public gradient = true;
  public showLegend = false;
  public status_filter = "";
  public trends = [{id:0 , value:"Active Orders"} , {id:1 , value:"Deliveries"} , {id:2 , value:"New orders"} , {id:3 , value:"Trips"}];
  public showXAxisLabel = true;
  public xAxisLabel = 'Days';
  public showYAxisLabel = true;
  public yAxisLabel = 'Orders';
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
    if(this.status_filter == "0") {
      this.yAxisLabel = "Active Orders";
      this.analytics = this.ordersArray;
      this.text = "Monthly distribution of active orders";
    }
    if(this.status_filter == "1") {
      this.yAxisLabel = "Deliveries";
      this.analytics = this.activeOrdersArray;
      this.text = "Monthly distribution of deliveries";
    }
    if(this.status_filter == "2") {
      this.yAxisLabel = "New orders";
      this.analytics = this.tempArray;
      this.text = " Monthly distribution of new orders";
    }
    if(this.status_filter == "3") {
      this.yAxisLabel = "Trips";
      this.analytics = this.refundedOrdersArray;
      this.text = " Monthly distribution of trips";
    }
  }
  
  clearFilters() {
    this.status_filter = "";
    this.analytics = this.tempArray;
    this.text = "Monthly Distribution of new orders";
  }
  
  constructor() { }
  
  ngOnInit() {
    this.filterToggle = false;
    var arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
   
    var scheduledAarray = [15, 8, 12, 4, 22, 25, 36, 10, 17, 39, 19, 28, 20, 19, 29, 39, 59, 36, 39, 59, 35, 36, 28, 17, 39, 19, 28, 6, 7, 30, 22];
   
    var scheduledObj = { name: "Active Orders", series: [] };
    for (var i = 1; i <= 31; i++) {
      scheduledObj.series.push({ "name": arr[i - 1], value: scheduledAarray[i - 1] });
    }
    this.tempArray.push(scheduledObj);
    var arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
  
     var scheduledAarray = [15014, 8547, 1201, 4757, 2257, 2596, 3601, 10987, 1774, 3999, 1954, 2880, 2004, 1974, 2998, 3971, 5955, 3633, 3939, 5947, 3510, 3687, 18011, 17147, 3999, 1917, 2800, 6140, 7785, 3096, 22014];
   
    var scheduledObj = { name: "Deliveries", series: [] };
    for (var i = 1; i <= 31; i++) {
      scheduledObj.series.push({ "name": arr[i - 1], value: scheduledAarray[i - 1] });
    }
    this.ordersArray.push(scheduledObj);
     var arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
   
     var scheduledAarray = [1501, 807, 1201, 496, 2201, 2500, 3601, 1014, 1708, 3996, 1939, 2828, 2021, 1900, 2965, 3900, 5985, 3674, 3936, 5914, 3573, 3629, 2819, 1717, 3958, 1961, 2837, 600, 7741, 3017, 2222];
   
    var scheduledObj = { name: "New orders", series: [] };
    for (var i = 1; i <= 31; i++) {
      scheduledObj.series.push({ "name": arr[i - 1], value: scheduledAarray[i - 1] });
    }
    this.activeOrdersArray.push(scheduledObj);
    var arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
    
    var scheduledAarray = [150, 80, 121, 49, 225, 252, 367, 106, 170, 393, 194, 289, 201, 195, 290, 398, 594, 366, 399, 591, 351, 362, 280, 170, 398, 199, 284, 600, 700, 304, 227];

    var scheduledObj = { name: "Trips", series: [] };
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
