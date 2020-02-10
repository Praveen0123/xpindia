import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.scss']
})
export class LineGraphComponent implements OnInit {
  public analytics: any[];
  tempArray : any[] = [];
  public showXAxis = true;
  public text = "Monthly trend of new customer";
  public showYAxis = true;
  public gradient = true;
  public showLegend = false;
  public trends = [{id:0 , value:"Orders"} , {id:1 , value:"Active Orders"} , {id:2 , value:"Trips"} , {id:3 , value:"Refunded Orders"}];
  public showXAxisLabel = true;
  public xAxisLabel = 'Days';
  public showYAxisLabel = true;
  public yAxisLabel = 'Customer';
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
  
  constructor() { }
  
  ngOnInit() {
    this.filterToggle = false;
    var arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
    var scheduledAarray = [15, 8, 12, 4, 22, 25, 36, 10, 17, 39, 19, 28, 20, 19, 29, 39, 59, 36, 39, 59, 35, 36, 28, 17, 39, 19, 28, 6, 7, 30, 22];
    var scheduledObj = { name: "Customer", series: [] };
    for (var i = 1; i <= 31; i++) {
      scheduledObj.series.push({ "name": arr[i - 1], value: scheduledAarray[i - 1] });
    }
    this.tempArray.push(scheduledObj);
    this.analytics = this.tempArray; 
  }
  
  onSelect(event) {
    
  }

}
