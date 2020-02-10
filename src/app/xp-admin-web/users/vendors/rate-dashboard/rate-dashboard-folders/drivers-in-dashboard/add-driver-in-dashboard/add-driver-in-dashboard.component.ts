import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef ,MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-add-driver-in-dashboard',
  templateUrl: './add-driver-in-dashboard.component.html',
  styleUrls: ['./add-driver-in-dashboard.component.scss']
})
export class AddDriverInDashboardComponent implements OnInit {

  value: Date;
  constructor(@Inject(MAT_DIALOG_DATA) public lead: any ,public dialogRef: MatDialogRef<AddDriverInDashboardComponent>) { }
  allFields = [1];
  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

  removeItem(index){
    this.allFields.splice(index, 1);
  }


}
