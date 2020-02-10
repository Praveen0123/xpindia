import { Component, OnInit } from '@angular/core';

import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-add-lanes',
  templateUrl: './add-lanes.component.html',
  styleUrls: ['./add-lanes.component.scss']
})
export class AddLanesComponent implements OnInit {
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
