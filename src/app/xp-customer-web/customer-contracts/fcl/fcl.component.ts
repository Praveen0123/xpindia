import { Component, OnInit } from '@angular/core';
import { PageEvent, MatDialog } from '@angular/material';
import { AlertService } from '../../../shared/services/alert.service';
import { AddFCLContractComponent } from './add-fclcontract/add-fclcontract.component';

@Component({
  selector: 'app-fcl',
  templateUrl: './fcl.component.html',
  styleUrls: ['./fcl.component.scss']
})
export class FclComponent implements OnInit {

  tableList: any;
  tableLists: any;
  // status = [{id:1 , value:"20-40"} , {id:2 , value:"40-50"}, {id:2 , value:"25-35"}];
  status = ['Active', 'Inactive'];
  filterToggle: boolean;
  pageEvent: PageEvent;
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
  public searchText: string;
  public page: any;
  showEmpty = false;
  public popoverTitle = 'Confirm Delete';
  public popoverMessage = 'Are you sure you want to delete this?';
  public popoverStatusTitle = 'Confirm Status Change';
  public popoverStatusMessage = 'Are you sure you want to change status?';
  public cancelClicked = false;

  constructor(public dialog: MatDialog, public alertService: AlertService) { }

  ngOnInit() {
    this.tableList = [
      { PDD: '23-02-2020', EDD: '25-02-2020', origin: 'Hyderabad-1', destination: 'Lucknow-1', vehicleType: '30 feet', payload: '25 Tons', status: true, cbm: '20 ', tat: '7', height: '7ft 6in', rate: '10,000' },
      { PDD: '23-02-2020', EDD: '25-02-2020', origin: 'Bangalore-1', destination: 'Udaipur-1', vehicleType: '9 feet', payload: '10 Tons', status: false, cbm: '30 ', tat: '8', height: '8ft 6in', rate: '30,000' },
      { PDD: '23-02-2020', EDD: '25-02-2020', origin: 'Chennai-2', destination: 'Jaipur-1', vehicleType: '12 feet', payload: '15 Tons', status: true, cbm: '40 ', tat: '8', height: '8ft 6in', rate: '20,000' },
      { PDD: '23-02-2020', EDD: '25-02-2020', origin: 'Coimbatore-1', destination: 'Jaisalmer-1', vehicleType: '11 feet', payload: '30 Tons', status: false, cbm: '50 ', tat: '8', height: '8ft 6in', rate: '50,000' },
      { PDD: '23-02-2020', EDD: '25-02-2020', origin: 'Delhi-1', destination: 'Chennai-2', vehicleType: '25 feet', payload: '50 Tons', status: true, cbm: '20 ', tat: '7', height: '7ft 6in', rate: '60,000' },
      { PDD: '23-02-2020', EDD: '25-02-2020', origin: 'Manipal-2', destination: 'Bangalore-2', vehicleType: '10 feet', payload: '22 Tons', status: false, cbm: '30 ', tat: '8', height: '8ft 6in', rate: '90,000' },
      { PDD: '23-02-2020', EDD: '25-02-2020', origin: 'Udaipur-2', destination: 'Hyderabad-1', vehicleType: '20 feet', payload: '13 Tons', status: true, cbm: '40 ', tat: '8', height: '8ft 6in', rate: '30,000' },
      { PDD: '23-02-2020', EDD: '25-02-2020', origin: 'Jaipur-1', destination: 'Manipal-1', vehicleType: '22 feet', payload: '11 Tons', status: true, cbm: '30 ', tat: '8', height: '8ft 6in', rate: '50,000' },
      { PDD: '23-02-2020', EDD: '25-02-2020', origin: 'Jaisalmer-1', destination: 'Coimbatore-1', vehicleType: '30 feet', payload: '08 Tons', status: true, cbm: '20 ', tat: '7', height: '7ft 6in', rate: '20,000' },
      { PDD: '23-02-2020', EDD: '25-02-2020', origin: 'Lucknow-1', destination: 'Delhi-1', vehicleType: '21 feet', payload: '18 Tons', status: false, cbm: '25 ', tat: '8', height: '8ft 6in', rate: '16,000' }
    ];
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    this.totalSize = 10;
  }

  deleteGateway() {
    this.alertService.createAlert('Vehicle type deleted successfully', 1);
  }

  public openCustomerDialog(gateway) {
    const dialogRef = this.dialog.open(AddFCLContractComponent, {
      data: gateway,
      height: 'auto',
      width: '600px',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(data => {

    });
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
  }

}
