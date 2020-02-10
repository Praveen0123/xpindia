import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-lanes',
  templateUrl: './lanes.component.html',
  styleUrls: ['./lanes.component.scss']
})
export class LanesComponent implements OnInit {

  checkbox=true;
  constructor(public alertService:AlertService) { }

  ngOnInit() {
  }


  saveLane() {
    this.alertService.createAlert('Lanes added successfully', 1);
   
  }
  // close(){
  //   this.alertService.createAlert('Canceled successfully', 1);
  // }

}
