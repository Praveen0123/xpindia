
import { Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import { AlertService } from '../../../../shared/services/alert.service';


@Component({
  selector: 'app-role-permissions',
  templateUrl: './role-permissions.component.html',
  styleUrls: ['./role-permissions.component.scss'],
  providers: [AlertService] 
})
export class RolePermissionsComponent implements OnInit {
  constructor(private location:Location, private alertService: AlertService) {}
  public screens = [{"name":"Dashboard","value1":"true","value2":"false","value3":"true","value4":"true"},{"name":"Incoming Order Queue","value1":true,"value2":true,"value3":true,"value4":true},{"name":"Add New Order","value1":true,"value2":true,"value3":true,"value4":true},{"name":"Invoice","value1":true,"value2":true,"value3":true,"value4":true},{"name":"Bills","value1":true,"value2":true,"value3":true,"value4":true},];
  ngOnInit() {

  }
  goBack() {
    this.location.back();
  }

  savePermissions() {
    this.alertService.createAlert('Successfully Saved.', 1);
  }


}
