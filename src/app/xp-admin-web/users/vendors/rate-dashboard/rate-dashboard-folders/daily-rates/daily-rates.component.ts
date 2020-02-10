import { Component, OnInit } from '@angular/core';
import { PageEvent, MatDialog } from '@angular/material';
import { AlertService } from '../../../../../../shared/services/alert.service';
import { AddDailyRateComponent } from './add-daily-rate/add-daily-rate.component';

@Component({
  selector: 'app-daily-rates',
  templateUrl: './daily-rates.component.html',
  styleUrls: ['./daily-rates.component.scss']
})
export class DailyRatesComponent implements OnInit {

  tableList:any;
  tableLists: any;
  status = [{id:1 , value:"Active"} , {id:2 , value:"Inactive"}];
  gateways = [{id:1 , value:"Gachibowli"} , {id:2 , value:"Tarnaka"} , {id:3 , value:"Hubsiguda"} , {id:4 , value:"Uppal"} , {id:5 , value:"Secunderabad"}];
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
    {gateway:"Gachibowli" , distance:"30" , price:"4000" , rate:"15"},
    {gateway:"Tarnaka" , distance:"25" , price:"2000" , rate:"11"},
    {gateway:"Hubsiguda" , distance:"50" , price:"4503" , rate:"12"},
    {gateway:"Uppal" , distance:"41" , price:"4999" , rate:"5"},
    {gateway:"Secunderabad" , distance:"36" , price:"4214" , rate:"17"},
    {gateway:"Patny" , distance:"21" , price:"5000" , rate:"14"},
    {gateway:"Ghatkesar" , distance:"20" , price:"6000" , rate:"2"},
    {gateway:"Jublee Hills" , distance:"20" , price:"7000" , rate:"10"},
    {gateway:"Banjara Hills" , distance:"58" , price:"8969" , rate:"8"},
    {gateway:"Madhapur" , distance:"44" , price:"3500" , rate:"5"},
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
    let dialogRef = this.dialog.open(AddDailyRateComponent, {
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
