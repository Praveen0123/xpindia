import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-package-detail',
  templateUrl: './package-detail.component.html',
  styleUrls: ['./package-detail.component.scss']
})
export class PackageDetailComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PackageDetailComponent>,@Inject(MAT_DIALOG_DATA) public packageData: any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
