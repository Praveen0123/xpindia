import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zones-in-dashboard',
  templateUrl: './zones-in-dashboard.component.html',
  styleUrls: ['./zones-in-dashboard.component.scss']
})
export class ZonesInDashboardComponent implements OnInit {

  checkbox:boolean=true;
  checkboxfalse:boolean=false;
 
  constructor() { }

  ngOnInit() {
  }

}
