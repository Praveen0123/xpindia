import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-xpcn-documents-dialog',
  templateUrl: './xpcn-documents-dialog.component.html',
  styleUrls: ['./xpcn-documents-dialog.component.scss']
})
export class XpcnDocumentsDialogComponent implements OnInit {

  tableList:any;

  constructor(public dialogRef:MatDialogRef<XpcnDocumentsDialogComponent>) { }

  ngOnInit() {
    this.tableList = [
      {docuName:"RC" , docuType:"pdf"},
      {docuName:"Pollution Certificate" , docuType:"pdf"},
      {docuName:"Insurance" , docuType:"pdf"}
    ]
  }
  close():void{
    this.dialogRef.close()
  }

}
