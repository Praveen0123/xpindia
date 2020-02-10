import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-fleet-dashboard',
  templateUrl: './fleet-dashboard.component.html',
  styleUrls: ['./fleet-dashboard.component.scss']
})
export class FleetDashboardComponent implements OnInit {

  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  };
  public colorScheme1 = {
    domain: ['#33cc33', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  };
  public filterToggle: boolean;

  public dashboardPieData: any;
  public dashboardLineData: any;
  public tempArray = [];
  public tempArray1 = [];
  public tempArray2 = [];
  public marketing = [
    {
      name: 'BLR - DL',
      value: 20
    },
    {
      name: 'BZA - LDH',
      value: 36
    },
    {
      name: 'PUNE - BRC',
      value: 34
    },
    {
      name: 'CBE - LKO',
      value: 10
    },
  ];
  public sales = [
    {
      name: 'FCL',
      value: 33
    },
    {
      name: 'LCC',
      value: 33
    },
    {
      name: 'BB',
      value: 34
    }
  ];
  public Zones = [
    {
      country_id: '1',
      country_name: 'Telangana'
    },
    {
      country_id: '2',
      country_name: 'Andhra Pradesh'
    },
    {
      country_id: '3',
      country_name: 'Kerala'
    },
    {
      country_id: '4',
      country_name: 'Tamilnadu'
    },
    {
      country_id: '5',
      country_name: 'Delhi'
    }
  ];
  public Regions = [
    {
      country_id: '1',
      country_name: 'Hyderabad'
    },
    {
      country_id: '2',
      country_name: 'Vijayawada'
    },
    {
      country_id: '3',
      country_name: 'Kochi'
    },
    {
      country_id: '4',
      country_name: 'Chennai'
    },
    {
      country_id: '5',
      country_name: 'NCR'
    }
  ];
  public Divisions = [
    {
      country_id: '1',
      country_name: 'Madhapur'
    },
    {
      country_id: '2',
      country_name: '1-Town'
    },
    {
      country_id: '3',
      country_name: 'Kaloor'
    },
    {
      country_id: '4',
      country_name: 'Adambakkam'
    },
    {
      country_id: '5',
      country_name: 'Gurgaon'
    }
  ];
  public showLegend = false;
  public gradient = true;

  public showLabels = true;
  public explodeSlices = false;
  public doughnut = false;
  public lineGraphData: any[];
  public showXAxis = true;
  public showYAxis = true;
  public linegradient = false;
  public lineshowLegend = false;
  public showXAxisLabel = false;

  public xAxisLabel = 'Month';
  public showYAxisLabel = false;

  public yAxisLabel = 'Ratio';
  public autoScale = true;
  public roundDomains = true;
  public lat = 17.4486;
  public lng = 78.3908;

  @ViewChild('resizedDiv') resizedDiv: ElementRef;

  public zoomControlOptions: any = {
    style: google.maps.ControlPosition.small,
    position: google.maps.ControlPosition.TOP_LEFT,
  };

  constructor() { }

  toggleFilter() {
    this.filterToggle = !this.filterToggle;
  }
  ngOnInit() {
    this.filterToggle = false;
  }

}
