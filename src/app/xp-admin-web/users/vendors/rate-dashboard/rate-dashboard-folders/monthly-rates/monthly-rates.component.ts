import { Component, OnInit } from '@angular/core';
import { PageEvent, MatDialog } from '@angular/material';
import { AlertService } from '../../../../../../shared/services/alert.service';
import { AddMonthlyRateComponent } from './add-monthly-rate/add-monthly-rate.component';

@Component({
  selector: 'app-monthly-rates',
  templateUrl: './monthly-rates.component.html',
  styleUrls: ['./monthly-rates.component.scss']
})
export class MonthlyRatesComponent implements OnInit {

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
  public popoverMessage: string = 'Are you sure you want to delete this vendor ?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status ?';
  public cancelClicked: boolean = false;

  constructor(public dialog:MatDialog,public alertService:AlertService) { }

  ngOnInit() {
    this.tableList = [
    {gateway:"Gachibowli" , distance:"3000" , price:"40,000" , rate:"15"},
    {gateway:"Tarnaka" , distance:"2500" , price:"20,000" , rate:"11"},
    {gateway:"Hubsiguda" , distance:"5000" , price:"45,031" , rate:"12"},
    {gateway:"Uppal" , distance:"4150" , price:"49,999" , rate:"5"},
    {gateway:"Secunderabad" , distance:"3650" , price:"41,214" , rate:"17"},
    {gateway:"Patny" , distance:"2144" , price:"55,000" , rate:"14"},
    {gateway:"Ghatkesar" , distance:"2020" , price:"65,000" , rate:"2"},
    {gateway:"Jublee Hills" , distance:"2014" , price:"74,000" , rate:"10"},
    {gateway:"Banjara Hills" , distance:"5847" , price:"82,969" , rate:"8"},
    {gateway:"Madhapur" , distance:"4444" , price:"32,500" , rate:"5"},
    ];
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    this.totalSize = 10    
  }

  // public openVendorDialog(customer) {
  //   let dialogRef = this.dialog.open(AddVendorComponent, {
  //     data:customer,
  //     height: 'auto',
  //     width: '600px',
  //     autoFocus: false
  //   });
  //   dialogRef.afterClosed().subscribe(data => {
  //   });
  // }
  // public openZoneModal(customer) {
  //   let dialogRef = this.dialog.open(AddZoneComponent, {
  //     data:customer,
  //     height: 'auto',
  //     width: '600px',
  //     autoFocus: false
  //   });
  //   dialogRef.afterClosed().subscribe(data => {
  //   });
  // }
  public openfclrates(customer) {
    let dialogRef = this.dialog.open(AddMonthlyRateComponent, {
      data:customer,
      height: 'auto',
      width: '600px',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
  // public openlocalratesModal(customer) {
  //   let dialogRef = this.dialog.open(AddLocalRatesComponent, {
  //     data:customer,
  //     height: 'auto',
  //     width: '600px',
  //     autoFocus: false
  //   });
  //   dialogRef.afterClosed().subscribe(data => {
  //   });
  // }

  deleteVendor() {
    this.alertService.createAlert("Vendor deleted successfully",1)
  }

  // openVehiclesModal(vehicleDetails) {
  //   let dialogRef = this.dialog.open(VehicleDetailsComponent,{
  //     data:vehicleDetails,
  //     height:'auto',
  //     width:'600px',
  //     autoFocus:false
  //   });
  //   dialogRef.afterClosed().subscribe(data => {

  //   });
  // }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
  }

}
