import { Component, OnInit } from '@angular/core';
import { PageEvent, MatDialog } from '@angular/material';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AlertService } from '../../../shared/services/alert.service';
import { UserDialogInMainScreenComponent } from './user-dialog-in-main-screen/user-dialog-in-main-screen.component';
import { ContractsComponent } from './contracts/contracts.component';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  tableList: any;
  tableLists: any;
  status = [{ id: 1, value: 'Active' }, { id: 2, value: 'Inactive' }];
  filterToggle: boolean;
  // pageEvent: PageEvent;
  // public pageSize = 5;
  // public currentPage = 0;
  // public totalSize = 0;
  // public searchText: string;
  // public page: any;
  pageEvent: PageEvent;
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
  public searchText: string;
  public page: any;
  showEmpty = false;
  public popoverTitle = 'Confirm Delete';
  public popoverMessage = 'Are you sure you want to delete this ?';
  public popoverStatusTitle = 'Confirm Status Change';
  public popoverStatusMessage = 'Are you sure you want to change status?';
  public cancelClicked = false;

  constructor(public dialog: MatDialog, public alertService: AlertService) { }

  ngOnInit() {
    this.tableList = [
      { name: 'DHL logistics companies', FCL: false, Express: true, Bespoke: false , Origins: '5', Trips: '3', Freight: '0.66', ServiceLevel: '79', Destinations: '9', Received: '23', Overdue: '48', Upcoming: '91', Contracts: '5', Rates: '9' },
      { name: 'Agarwal Packers and Movers Ltd', FCL: false, Express: false, Bespoke: true , Origins: '3', Trips: '9', Freight: '0.20', ServiceLevel: '40', Destinations: '15', Received: '73', Overdue: '27', Upcoming: '62', Contracts: '9', Rates: '12' },
      { name: 'Blue Dart Express Ltd', FCL: true, Express: true, Bespoke: false , Origins: '1', Trips: '6', Freight: '0.21', ServiceLevel: '39', Destinations: '6', Received: '45 ', Overdue: '78', Upcoming: '75', Contracts: '4', Rates: '17' },
      { name: 'Allcargo Logistics Ltd', FCL: false, Express: true, Bespoke: true , Origins: '9', Trips: '2', Freight: '0.46', ServiceLevel: '71', Destinations: '10', Received: '85', Overdue: '86', Upcoming: '56', Contracts: '7', Rates: '2' },
      { name: 'Transport Corporation of India Ltd', FCL: false, Express: true, Bespoke: false , Origins: '3', Trips: '11', Freight: '1.80', ServiceLevel: '88', Destinations: '16', Received: '24', Overdue: '23', Upcoming: '14', Contracts: '8', Rates: '7' },
      { name: 'Trans India Limited', FCL: false, Express: true, Bespoke: false , Origins: '7', Trips: '17', Freight: '1.24', ServiceLevel: '47', Destinations: '3', Received: '42', Overdue: '6', Upcoming: '25', Contracts: '10', Rates: '9' },
      { name: 'Om Logistics LTD', FCL: true, Express: true, Bespoke: false , Origins: '8', Trips: '19', Freight: '1.23', ServiceLevel: '91', Destinations: '1', Received: '6', Overdue: '4', Upcoming: '32', Contracts: '15', Rates: '12' },
      { name: 'Container Corporation of India Ltd', FCL: false, Express: false, Bespoke: false , Origins: '3', Trips: '5', Freight: '1.78', ServiceLevel: '87', Destinations: '19', Received: '8', Overdue: '5', Upcoming: '7', Contracts: '5', Rates: '13' },
      { name: 'Associated Road Carriers Limited', FCL: false, Express: true, Bespoke: false , Origins: '8', Trips: '1', Freight: '0.98', ServiceLevel: '96', Destinations: '13', Received: '42', Overdue: '1', Upcoming: '45', Contracts: '12', Rates: '18' },
      { name: 'Agarwal Packers and Movers Ltd', FCL: false, Express: false, Bespoke: true , Origins: '2', Trips: '8', Freight: '0.45', ServiceLevel: '60', Destinations: '9', Received: '32', Overdue: '12', Upcoming: '41', Contracts: '11', Rates: '19'}

    ];
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    this.totalSize = 10;
  }


  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
  }

  public openCustomerDialog(customer) {
    const dialogRef = this.dialog.open(AddCustomerComponent, {
      data: customer,
      height: 'auto',
      width: '600px',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }


  public openusersModal(lane) {
    const dialogRef = this.dialog.open(UserDialogInMainScreenComponent, {
      data: lane,
      height: 'auto',
      width: '300px',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(data => {

    });
  }

  deleteCustomer() {
    this.alertService.createAlert('Customer deleted successfully', 1);
  }
  deleteContract() {
    this.alertService.createAlert('Contract deleted successfully', 1);
  }
  reset() {
    this.alertService.createAlert('Reset password link is sent to you registered email id ', 1);
  }
}
