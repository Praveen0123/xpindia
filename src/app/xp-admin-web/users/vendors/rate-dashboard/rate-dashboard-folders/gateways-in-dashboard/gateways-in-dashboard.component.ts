import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-gateways-in-dashboard',
  templateUrl: './gateways-in-dashboard.component.html',
  styleUrls: ['./gateways-in-dashboard.component.scss']
})
export class GatewaysInDashboardComponent implements OnInit {

  constructor(public alertService:AlertService) { }

  ngOnInit() {
  }
  saveLane() {
    this.alertService.createAlert('Gateways added successfully', 1);
   
  }

}
