import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upcoming-payable',
  templateUrl: './upcoming-payable.component.html',
  styleUrls: ['./upcoming-payable.component.scss']
})
export class UpcomingPayableComponent implements OnInit {
  public single: any[];
  public multi: any[];

  public showLegend = true;
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
        name: 'Serene Technologies Pvt Ltd',
        value: 10000
      },
      {
        name: 'ABC Logistics',
        value: 3000,
      },
      {
        name: 'Globex Corporation ',
        value: 2000
      },
      {
        name: 'Vehement Capital Partners',
        value: 3000
      },
      {
        name: 'Rajbir',
        value: 2000
      },

    ];
    Object.assign(this, { single });
  }

  public onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
  }



}






