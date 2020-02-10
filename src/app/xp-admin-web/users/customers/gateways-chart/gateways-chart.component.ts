import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gateways-chart',
  templateUrl: './gateways-chart.component.html',
  styleUrls: ['./gateways-chart.component.scss']
})
export class GatewaysChartComponent implements OnInit  {

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
        name: 'Hyderabd-1',
        value: 69
      },
      {
        name: 'Delhi-2',
        value: 23,
      },
      {
        name: 'Pune-1',
        value: 20
      },
      {
        name: 'Mumbai-2',
        value: 57
      },
      {
        name: 'Chennai-1',
        value: 23,
      },
      {
        name: 'Tripura-2',
        value: 20
      },
      {
        name: 'Others',
        value: 57
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

