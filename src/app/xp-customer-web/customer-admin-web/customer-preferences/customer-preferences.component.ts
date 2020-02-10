import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../../shared/services/alert.service';

@Component({
  selector: 'app-customer-preferences',
  templateUrl: './customer-preferences.component.html',
  styleUrls: ['./customer-preferences.component.scss']
})
export class CustomerPreferencesComponent implements OnInit {

  public popoverStatusTitle: string = 'Confirm Save Change';
  public popoverStatusMessage: string = 'Are you sure you want to save changes.?';
  public cancelClicked: boolean = false;

  constructor(private alertService: AlertService) { }

  ngOnInit() {
  }

  tableList: Object[] = [
    // { intSettingsId: 1, name: 'Prospect Follow-up Days', description:'Prospect Follow-up Days', old_value:'10'},
    // { intSettingsId: 2, name: 'Opportunity Follow-up Days', description:'Opportunity Follow-up Days', old_value:'10'},
    { intSettingsId: 3, name: 'Grid Length', description:'Default Grid Length', old_value:'10'},
    { intSettingsId: 4, name: 'Notification Email', description:'Default Admin Notification Email	', old_value:'admin@xpindia.com'},
    // { intSettingsId: 5, name: 'Time Zone', description:'Default Time Zone', old_value:'EDT'},

  ];

  saveSettings() {
    this.alertService.createAlert('Changes saved successfully', 1);
  }

}
