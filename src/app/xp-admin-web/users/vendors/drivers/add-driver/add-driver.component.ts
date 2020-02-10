import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef ,MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.scss']
})
export class AddDriverComponent implements OnInit {

  value: Date;
  constructor(@Inject(MAT_DIALOG_DATA) public lead: any ,public dialogRef: MatDialogRef<AddDriverComponent>) { }
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
