import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-lanes-in-dashboard',
  templateUrl: './lanes-in-dashboard.component.html',
  styleUrls: ['./lanes-in-dashboard.component.scss']
})
export class LanesInDashboardComponent implements OnInit {

  constructor(public alertService:AlertService) { }

  ngOnInit() {
  }
  saveLane() {
    this.alertService.createAlert('Lanes added successfully', 1);
   
  }

}
