import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-fleet-linechart',
  templateUrl: './fleet-linechart.component.html'
})
export class FleetLinechartComponent implements OnInit {

  public temporaryArray: any;
  public showXAxis = true;
  public showYAxis = true;
  public gradient = false;
  public showLegend = false;
  public showXAxisLabel = false;
  public xAxisLabel = 'Year';
  public showYAxisLabel = false;
  public yAxisLabel = 'Profit';
  public colorScheme = {
    domain: ['#283593', '#039BE5', '#FF5252']
  };
  public autoScale = true;
  public roundDomains = true;
  @ViewChild('resizedDiv') resizedDiv: ElementRef;
  public previousWidthOfResizedDiv = 0;

  constructor() { }

  ngOnInit() {
    this.temporaryArray = [];
    const arra = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
    const scheduledAarr = [25, 18, 42, 4, 27, 25, 36, 15, 17, 39, 29, 38, 20, 20, 49, 29, 39, 26, 19, 49, 37, 30, 28, 27, 39, 19, 36, 6, 7, 35, 29];
    const completedArr = [15, 10, 30, 1, 15, 15, 25, 10, 12, 28, 20, 30, 14, 16, 36, 20, 25, 17, 15, 36, 27, 20, 18, 17, 23, 13, 27, 3, 2, 20, 20];
    const scheduledObject = { name: 'NEW Trips', series: [] };
    const completedObject = { name: 'FTR Deliver', series: [] };
    for (let i = 1; i <= 31; i++) {
      scheduledObject.series.push({ 'name': arra[i - 1], value: scheduledAarr[i - 1] });
      completedObject.series.push({ 'name': arra[i - 1], value: completedArr[i - 1] });
    }
    this.temporaryArray.push(scheduledObject, completedObject);

  }

  onSelect(event) {

  }

  ngAfterViewChecked() {
    if (this.previousWidthOfResizedDiv != this.resizedDiv.nativeElement.clientWidth) {
      this.temporaryArray = [...this.temporaryArray];
    }
    this.previousWidthOfResizedDiv = this.resizedDiv.nativeElement.clientWidth;
  }

}
