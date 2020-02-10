import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-h-and-pesi-images',
  templateUrl: './h-and-pesi-images.component.html',
  styleUrls: ['./h-and-pesi-images.component.scss']
})
export class HAndPEsiImagesComponent implements OnInit {

  tableList:any;

  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;

  constructor() { }

  ngOnInit() {
    this.tableList = [
      {docuName:"fabrice_oral_gluso_tolerance.pdf" , notes:"This was repeated for each of the above mentioned medial branches The patient tolerated the procedure well with no complications identified"},
      {docuName:"fabrice_mri_report.pdf" , notes:"This was repeated for each of the above mentioned medial branches The patient tolerated the procedure well with no complications identified"},
      {docuName:"fabrice_xray.docx" , notes:"This was repeated for each of the above mentioned medial branches The patient tolerated the procedure well with no complications identified"}
    ]
  }

  deleteVisit(){
    //this.alertService.createAlert('Successfully deleted.', 1);
    }

  saveForm() {
    
  }

}
