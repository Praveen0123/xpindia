import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-claim-dialog-in-manage-visits',
  templateUrl: './add-claim-dialog-in-manage-visits.component.html',
  styleUrls: ['./add-claim-dialog-in-manage-visits.component.scss']
})
export class AddClaimDialogInManageVisitsComponent implements OnInit {

  constructor(public router:Router) { }
  tableList:any;

  ngOnInit() {
    this.tableList = [  
      {cpt:"51729" , cptDesc:"CMG w Voiding pressure" , mod:"" , modDesc:"-" , units:"1" , diaPointers:""},
      {cpt:"51748" , cptDesc:"EMG of Anal or Urethra" , mod:"" , modDesc:"-" , units:"1" , diaPointers:""},
      {cpt:"81002" , cptDesc:"Urine Analysis" , mod:"" , modDesc:"-" , units:"1" , diaPointers:""},
      {cpt:"51797" , cptDesc:"Void Press Intra Abdom" , mod:"" , modDesc:"-" , units:"1" , diaPointers:""},
      ]
  }
  
  saveOrder() {
    this.router.navigateByUrl('/sapphire/billing/manageclaims');
  }
  

}
