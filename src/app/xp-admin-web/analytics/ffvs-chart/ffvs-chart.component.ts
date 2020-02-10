import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ffvs-chart',
  templateUrl: './ffvs-chart.component.html',
  styleUrls: ['./ffvs-chart.component.scss']
})
export class FFVsChartComponent implements OnInit {

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
          name: 'Onboarded (37)',
          value: 37
      },
      {
          name: 'New additions (23)',
          value: 	23,
      },
      {
          name : 'Active (20)',
          value: 20
      },
      {
          name : 'Inactive (20)',
          value: 20
      }
  ];
    Object.assign(this, {single});
  }

  public onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
  }

}

