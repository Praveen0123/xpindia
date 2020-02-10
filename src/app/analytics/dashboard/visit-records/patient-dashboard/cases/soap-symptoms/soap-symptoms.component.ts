import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../../../../app.settings';
import { Settings } from '../../../../../../app.settings.model';
import { AddSymptomsComponent } from './add-symptoms/add-symptoms.component';

@Component({
  selector: 'app-soap-symptoms',
  templateUrl: './soap-symptoms.component.html',
  styleUrls: ['./soap-symptoms.component.scss']
})
export class SoapSymptomsComponent implements OnInit {

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

public searchText: string;
public page: any;
public settings: Settings;
constructor(public appSettings: AppSettings,
  public dialog: MatDialog) {
  this.settings = this.appSettings.settings;
}

ngOnInit() {
  this.tableList = [  
    {id:1 , painType:"Fabrice Vanegas" , location:"Right,Left" , quality:"not known" , severity:"1 out of 10" , duration:"getting better,steady" , onset:"abrupt,after meal,at rest" , context:"at rest,during physical exertion" , modifyingFactors:"abated on their own" , associatedSymptoms:"numbness,tingling"},
    {id:2 , painType:"Stephen McGill" , location:"Right,Left" , quality:"aching,acute" , severity:"10 out of 10" , duration:"have been increasing since onset,wakes up from sleep" , onset:"awakened form sleep,continuous" , context:"during mental exertion" , modifyingFactors:"abated on their own,abated when on medication(s)" , associatedSymptoms:"weakness,tingling"},
    {id:3 , painType:"Otto Rieder" , location:"Bilateral" , quality:"acute" , severity:"5 out of 10" , duration:"wakes up from sleep" , onset:"date of occurance" , context:"during a sporting activity,at work" , modifyingFactors:"increased with inspiration,decrease with movement" , associatedSymptoms:"headache,change in vision,dizziness"},
    {id:4 , painType:"Joe Deu-Ngoc" , location:"Left" , quality:"aching" , severity:"4 out of 10" , duration:"most symptomatic in evening" , onset:"episodes,gradual" , context:"with familial stress,pre-hospital" , modifyingFactors:"exacerbate with movement" , associatedSymptoms:"loss of bowel control,sexual dysfunction"},
    {id:5 , painType:"Chris Soles" , location:"Right" , quality:"chronic,constant" , severity:"1 out of 10" , duration:"most symptomatic in mid day" , onset:"intermittent,time not known" , context:"post-hospital visit" , modifyingFactors:"decrease with movement" , associatedSymptoms:"loss of blader control"}
    ]
}

public openSymptomsDialog(id) {
let dialogRef = this.dialog.open(AddSymptomsComponent, {
    data: id,
    height: 'auto',
    width: '600px',
    autoFocus: false
});
dialogRef.afterClosed().subscribe(data => {
});
}

deleteSymptom(){
//this.alertService.createAlert('Successfully deleted.', 1);
}

}
