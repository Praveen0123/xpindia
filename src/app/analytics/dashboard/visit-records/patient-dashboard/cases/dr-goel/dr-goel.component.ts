import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dr-goel',
  templateUrl: './dr-goel.component.html',
  styleUrls: ['./dr-goel.component.scss']
})
export class DrGoelComponent implements OnInit {
  checked = false;
  selection:any;
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  deleteVisit() {}

}
