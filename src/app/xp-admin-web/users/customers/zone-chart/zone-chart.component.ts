import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zone-chart',
  templateUrl: './zone-chart.component.html',
  styleUrls: ['./zone-chart.component.scss']
})
export class ZoneChartComponent implements OnInit  {

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
        name: 'South-1',
        value: 37
      },
      {
        name: 'West-2',
        value: 23,
      },
      {
        name: 'North-1',
        value: 20
      },
      {
        name: 'East-2',
        value: 57
      },
      {
        name: 'South-3',
        value: 23,
      },
      {
        name: 'North-3',
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

