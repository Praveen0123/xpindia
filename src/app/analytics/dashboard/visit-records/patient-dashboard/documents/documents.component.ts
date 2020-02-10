import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../../../app.settings';
import { Settings } from '../../../../../app.settings.model';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {

  tableList: any;
  
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;
  
  filterToggle: boolean;
  toggleFilter() {
    this.filterToggle = !this.filterToggle;
  }
  public dateTime2: Date;
  public dateTime3: Date;
  referringOptions = ["Stephen McGill","Otto Rieder","Joe Deu-Ngoc","Chris Soles","Brad Kewalramani","Michael Persaud","Habib Kharsa"];
  stepsOptionSelected: any;
  onStepsOptionsSelected(event){
  
  }
  
  public searchText: string;
  public page: any;
  public settings: Settings;
  constructor(public appSettings: AppSettings,
    public dialog: MatDialog) {
      this.settings = this.appSettings.settings;
    }
    
    ngOnInit() {
      this.tableList = [  
       {caseNumber:"120457" , documentName:"fabrice_oral_gluso_tolerance.pdf" , documentType:"Oral glucose" , businessCenter:"Sapphire MD" , addedAt:"Prescreening" , addedDate:"03/25/2019"},
       {caseNumber:"102147" , documentName:"fabrice_mri_report.pdf" , documentType:"MRI report" , businessCenter:"Core Health" , addedAt:"Scheduled Visit" , addedDate:"04/26/2019"},
       {caseNumber:"102147" , documentName:"fabrice_xray.docx" , documentType:"Xray" , businessCenter:"Core Health" , addedAt:"Diagnosis" , addedDate:"07/12/2019"},
      ]
    }
    

   
   

   
    
    deleteNewPatientOrder(){
      //this.alertService.createAlert('Successfully deleted.', 1);
    }

}
