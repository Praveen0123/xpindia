import { Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import { AlertService } from '../../../../shared/services/alert.service';

@Component({
    selector: 'app-permissions',
    templateUrl: './permissions.component.html',
    styleUrls: ['./permissions.component.scss'],
    providers: [AlertService]
  })
  export class PermissionsComponent implements OnInit {
      constructor(private location:Location, private alertService: AlertService) {}
      public screens = [{"name":"Dashboard","value1":"true","value2":"false","value3":"true","value4":"true"},{"name":"Users","value1":true,"value2":true,"value3":true,"value4":true},{"name":"Location Master","value1":true,"value2":true,"value3":true,"value4":true},{"name":"Contracts","value1":true,"value2":true,"value3":true,"value4":true},{"name":"Invoices","value1":true,"value2":true,"value3":true,"value4":true},{"name":"Testimonials","value1":true,"value2":true,"value3":true,"value4":true},{"name":"Preferences","value1":true,"value2":true,"value3":true,"value4":true}];
      ngOnInit() {

      }
      goBack() {
        this.location.back();
      }

      savePermissions() {
        this.alertService.createAlert('Successfully Saved.', 1);
      }
  }