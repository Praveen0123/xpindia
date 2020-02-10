import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-level-chart',
  templateUrl: './service-level-chart.component.html',
  styleUrls: ['./service-level-chart.component.scss']
})
export class ServiceLevelChartComponent implements OnInit {

  public single: any[];
  public multi: any[];
  public showLegend = false;
  public gradient = true;
  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  };
  public showLabels = true;
  public explodeSlices = false;
  public doughnut = false;

  constructor() {
    const single = [
      {
        name: 'Customer (57)',
        value: 57
      },
      {
        name: 'FFVs (23)',
        value: 23,
      },
      {
        name: 'Hubs (20)',
        value: 20
      }
    ];
    Object.assign(this, { single });
  }

  public onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
  }

}

