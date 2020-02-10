import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../../../app.settings';
import { Settings } from '../../../../../app.settings.model';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-single-patient-claim',
  templateUrl: './create-single-patient-claim.component.html',
  styleUrls: ['./create-single-patient-claim.component.scss']
})
export class CreateSinglePatientClaimComponent implements OnInit {

  tableList:any;
  public settings: Settings;
  constructor(public appSettings: AppSettings,
    public dialog: MatDialog, public router: Router,public location:Location) {
    this.settings = this.appSettings.settings;
}

ngOnInit() {
  this.tableList = [  
    {cpt:"51729" , cptDesc:"CMG w Voiding pressure" , mod:"" , modDesc:"-" , units:"1" , diaPointers:"" , Aselected:false , Bselected:false , Cselected:false , Dselected:false , Eselected:false , Fselected:false , Gselected:false , Hselected:false , Iselected:false , Jselected:false , Kselected:false , Lselected:false},
    {cpt:"51748" , cptDesc:"EMG of Anal or Urethra" , mod:"" , modDesc:"-" , units:"1" , diaPointers:"" , Aselected:false , Bselected:false , Cselected:false , Dselected:false , Eselected:false , Fselected:false , Gselected:false , Hselected:false , Iselected:false , Jselected:false , Kselected:false , Lselected:false},
    {cpt:"81002" , cptDesc:"Urine Analysis" , mod:"" , modDesc:"-" , units:"1" , diaPointers:"" , Aselected:false , Bselected:false , Cselected:false , Dselected:false , Eselected:false , Fselected:false , Gselected:false , Hselected:false , Iselected:false , Jselected:false , Kselected:false , Lselected:false},
    {cpt:"51797" , cptDesc:"Void Press Intra Abdom" , mod:"" , modDesc:"-" , units:"1" , diaPointers:"" , Aselected:false , Bselected:false , Cselected:false , Dselected:false , Eselected:false , Fselected:false , Gselected:false , Hselected:false , Iselected:false , Jselected:false , Kselected:false , Lselected:false},
    ]
}

saveOrder() {
  this.router.navigateByUrl('/sapphire/patients/managevisits/billing');
}

back() {
  this.location.back();
}
 
}
