import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-type',
  templateUrl: './service-type.component.html',
  styleUrls: ['./service-type.component.scss']
})
export class ServiceTypeComponent implements OnInit {

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
        name: 'FCL',
        value: 57
      },
      {
        name: 'Express',
        value: 23,
      },
      {
        name: 'Bespoke',
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

