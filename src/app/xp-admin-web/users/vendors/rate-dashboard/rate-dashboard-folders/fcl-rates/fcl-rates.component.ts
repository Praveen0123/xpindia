import { Component, OnInit } from '@angular/core';
import { PageEvent, MatDialog } from '@angular/material';
import { AlertService } from '../../../../../../shared/services/alert.service';
import {AddFclRateInDashboardComponent} from './add-fcl-rate-in-dashboard/add-fcl-rate-in-dashboard.component';

@Component({
  selector: 'app-fcl-rates',
  templateUrl: './fcl-rates.component.html',
  styleUrls: ['./fcl-rates.component.scss']
})
export class FCLRatesComponent implements OnInit {

  tableList:any;
  tableLists: any;
  status = [{id:1 , value:"Active"} , {id:2 , value:"Inactive"}];
  lanes = [{id:1 , value:"DEL-BLR"} , {id:2 , value:"HYD-BLR"} , {id:3 , value:"CHE-MUM"} , {id:4 , value:"Del-COC"} , {id:5 , value:"BLG-GNT"} , {id:6 , value:"HYD-BAN"}]
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
    {lane:"DEL-BLR" , rate:"45,000"},
    {lane:"HYD-BLR " , rate:"25,000"},
    {lane:"CHE-MUM" , rate:"55,000"},
    {lane:"Del-COC " , rate:"20,000"},
    {lane:"BLG-GNT" , rate:"74,000"},
    {lane:"VSK-VIJ " , rate:"12,000"},
    {lane:"JNK-UDA" , rate:"63,000"},
    {lane:"SRM-TPT " , rate:"10,000"},
    {lane:"BUW-DEL" , rate:"14,000"},
    {lane:"KOL-KKP " , rate:"36,000"}
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
    let dialogRef = this.dialog.open(AddFclRateInDashboardComponent, {
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
