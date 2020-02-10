import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, PageEvent } from '@angular/material';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
// import { UsersService } from './users.service';
// import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { AlertService } from '../../../shared/services/alert.service';
import { AddUserComponent } from './add-user/add-user.component';


@Component({
  selector: 'app-customer-manage-users',
  templateUrl: './customer-manage-users.component.html',
  styleUrls: ['./customer-manage-users.component.scss']
})
export class CustomerManageUsersComponent implements OnInit {
  tableList:any;
  tableLists: any;
  status = [{id:1 , value:"Active"} , {id:2 , value:"Inactive"}];
  filterToggle: boolean;
  pageEvent: PageEvent;
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
  public searchText: string;
  public page: any;
  showEmpty: boolean = false;
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this user?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status?';
  public cancelClicked: boolean = false;
  public settings: Settings;
  constructor(public appSettings: AppSettings,
      public dialog: MatDialog, private alertService: AlertService) {
      this.settings = this.appSettings.settings;
  }

  ngOnInit() {
      this.getUser()
  }

  getUser() {
    this.tableList = [
      {name:"David Malhotra" , email:"david@xpindia.com" , phone:"9698785478" , permissions:"0/120" , is_verified:0 , address:"Plot no 101, Near YSR statue" , country:"India" , state:"Telangana" , city:"Hyderabad" , postalCode:"500081" , status:true , Permissions:"28/28"},
      {name:"Rahul Batra" , email:"rahul@xpindia.com" , phone:"7854525259" , permissions:"120/120" , is_verified:1 ,  address:"Plot no 52, Near KCR statue" , country:"India" , state:"Maharashtra" , city:"Mumbai" , postalCode:"230532" , status:true , Permissions:"28/28"},
      {name:"Ramesh Lal" , email:"ramesh@xpindia.com" , phone:"8956471203" , permissions:"120/120" , is_verified:1 ,  address:"Plot no 1, Near NTR statue" , country:"United States" , state:"New York" , city:"Yonkers" , postalCode:"10001" , status:true , Permissions:"28/28"},
      {name:"Bikash Das" , email:"aman@xpindia.com" , phone:"9969658741" , permissions:"0/120" , is_verified:0 , address:"Plot no 12, Near KBR park" , country:"India" , state:"Punjab" , city:"Chandigarh" , postalCode:"160003" , status:false , Permissions:"28/28"},
      {name:"Bhagat Chaudhary" , email:"bhagat@xpindia.com" , phone:"6987412630" , permissions:"120/120" , is_verified:1 , address:"Plot no 005, Near Madhapur" , country:"United States" , state:"California" , city:"Los Angeles" , postalCode:"90001" , status:true , Permissions:"28/28"},
      {name:"Rajan Suwal" , email:"rajan@xpindia.com" , phone:"9060504789" , permissions:"120/120" , is_verified:1 , address:"Plot no 5, Near Neerus" , country:"India" , state:"Rajasthan" , city:"Jaipur" , postalCode:"302005" , status:false , Permissions:"28/28"},
      {name:"Jasveer Singh" , email:"arpit@xpindia.com" , phone:"6954102365" , permissions:"0/120" , is_verified:0  , address:"Plot no 5525, Inorbit mall road" , country:"Germany" , state:"Bavaria" , city:"Munich" , postalCode:"80337" , status:true , Permissions:"28/28"},
      {name:"Navin Malik" , email:"navin@xpindia.com" , phone:"7575898956" , permissions:"0/120" , is_verified:0 ,  address:"Plot no 3303, Opposite Forum mall" , country:"United States" , state:"New Jersey" , city:"Jersey City" , postalCode:"07101" , status:true , Permissions:"28/28"},
      {name:"Varun Dhawan" , email:"varun@xpindia.com" , phone:"9562147852" , permissions:"120/120" , is_verified:1  , address:"Plot no 7, Community hall road" , country:"India" , state:"Tamil Nadu" , city:"Chennai" , postalCode:"600001" , status:true , Permissions:"28/28"},
      {name:"Pranab Ray" , email:"pranab@xpindia.com" , phone:"8858478521" , permissions:"0/120" , is_verified:0  , address:"Plot no 558, Sikindar farm" , country:"France" , state:"Paris" , city:"Marseille" , postalCode:"75000" , status:false , Permissions:"28/28"},
      {name:"Nikhil Kumar" , email:"nikhil@xpindia.com" , phone:"6365478547" , permissions:"120/120" , is_verified:1 , address:"Plot no 114, Madailand" , country:"India" , state:"Kerala" , city:"Thiruvananthapuram" , postalCode:"605038" , status:false , Permissions:"28/28"},
    ];
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    this.totalSize = 10    

  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
  }


  public openUserDialog(id) {
      let dialogRef = this.dialog.open(AddUserComponent, {
          data: id,
          height: 'auto',
          width: '600px',
          autoFocus:false
      });
      dialogRef.afterClosed().subscribe(data => {
      });
  }


  deleteCustomer(){
      this.alertService.createAlert('User deleted successfully', 1);
  }

  saveStatus() {
      this.alertService.createAlert('User status changed successfully', 1);
  }

}
