import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-addlanes',
  templateUrl: './addlanes.component.html',
  styleUrls: ['./addlanes.component.scss']
})
export class AddlanesComponent implements OnInit {

  constructor(public alertService:AlertService) { }

  ngOnInit() {
  }
  saveLane() {
    this.alertService.createAlert('Lanes added successfully', 1);
   
  }
}
