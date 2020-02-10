import { Component, OnInit } from '@angular/core';
import { PageEvent, MatDialog } from '@angular/material';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { AlertService } from '../../shared/services/alert.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

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
  public popoverMessage: string = 'Are you sure you want to delete this staff?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status?';
  public cancelClicked: boolean = false;

  constructor(public dialog:MatDialog,public alertService:AlertService) { }

  ngOnInit() {
    this.tableList = [
      {name:"David Malhotra" , email:"david@xpindia.com" , phone:"9698785478" , permissions:"0/120" , is_verified:0 , status:1 , address:"Plot no 101, Near YSR statue" , country:"India" , state:"Telangana" , city:"Hyderabad" , postalCode:"500081" , staffType:"Inhouse",},
      {name:"Rahul Batra" , email:"rahul@xpindia.com" , phone:"7854525259" , permissions:"120/120" , is_verified:1 , status:1 , address:"Plot no 52, Near KCR statue" , country:"India" , state:"Maharashtra" , city:"Mumbai" , postalCode:"230532" , staffType:"Ground"},
      {name:"Ramesh Lal" , email:"ramesh@xpindia.com" , phone:"8956471203" , permissions:"120/120" , is_verified:1 , status:1 , address:"Plot no 1, Near NTR statue" , country:"United States" , state:"New York" , city:"Yonkers" , postalCode:"10001" , staffType:"Inhouse"},
      {name:"Bikash Das" , email:"aman@xpindia.com" , phone:"9969658741" , permissions:"0/120" , is_verified:0 , status:1 , address:"Plot no 12, Near KBR park" , country:"India" , state:"Punjab" , city:"Chandigarh" , postalCode:"160003" , staffType:"Ground"},
      {name:"Bhagat Chaudhary" , email:"bhagat@xpindia.com" , phone:"6987412630" , permissions:"120/120" , is_verified:1 , status:1 , address:"Plot no 005, Near Madhapur" , country:"United States" , state:"California" , city:"Los Angeles" , postalCode:"90001" , staffType:"Ground"},
      {name:"Rajan Suwal" , email:"rajan@xpindia.com" , phone:"9060504789" , permissions:"120/120" , is_verified:1 , status:1 , address:"Plot no 5, Near Neerus" , country:"India" , state:"Rajasthan" , city:"Jaipur" , postalCode:"302005" , staffType:"Ground"},
      {name:"Jasveer Singh" , email:"arpit@xpindia.com" , phone:"6954102365" , permissions:"0/120" , is_verified:0 , status:1 , address:"Plot no 5525, Inorbit mall road" , country:"Germany" , state:"Bavaria" , city:"Munich" , postalCode:"80337" , staffType:"Inhouse"},
      {name:"Navin Malik" , email:"navin@xpindia.com" , phone:"7575898956" , permissions:"0/120" , is_verified:0 , status:1 , address:"Plot no 3303, Opposite Forum mall" , country:"United States" , state:"New Jersey" , city:"Jersey City" , postalCode:"07101" , staffType:"Inhouse"},
      {name:"Varun Dhawan" , email:"varun@xpindia.com" , phone:"9562147852" , permissions:"120/120" , is_verified:1 , status:1 , address:"Plot no 7, Community hall road" , country:"India" , state:"Tamil Nadu" , city:"Chennai" , postalCode:"600001" , staffType:"Inhouse"},
      {name:"Pranab Ray" , email:"pranab@xpindia.com" , phone:"8858478521" , permissions:"0/120" , is_verified:0 , status:1 , address:"Plot no 558, Sikindar farm" , country:"France" , state:"Paris" , city:"Marseille" , postalCode:"75000" , staffType:"Inhouse"},
      {name:"Nikhil Kumar" , email:"nikhil@xpindia.com" , phone:"6365478547" , permissions:"120/120" , is_verified:1 , status:1 , address:"Plot no 114, Madailand" , country:"India" , state:"Kerala" , city:"Thiruvananthapuram" , postalCode:"605038" , staffType:"Inhouse"},
    ];
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    this.totalSize = 10    
  }

  public openStaffDialog(staff) {
    let dialogRef = this.dialog.open(AddStaffComponent, {
      data:staff,
      height: 'auto',
      width: '600px',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  deleteStaff() {
    this.alertService.createAlert("Staff deleted successfully",1)
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
  }

}

