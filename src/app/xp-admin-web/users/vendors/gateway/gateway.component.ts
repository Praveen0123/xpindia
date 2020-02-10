import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-gateway',
  templateUrl: './gateway.component.html',
  styleUrls: ['./gateway.component.scss']
})
export class GatewayComponent implements OnInit {

  constructor(public alertService:AlertService) { }

  ngOnInit() {
  }
  saveLane() {
    this.alertService.createAlert('Gateways added successfully', 1);
   
  }

}
