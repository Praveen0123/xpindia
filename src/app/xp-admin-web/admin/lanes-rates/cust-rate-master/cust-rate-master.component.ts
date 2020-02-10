import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shared/services/alert.service';
import { MatDialog, PageEvent } from '@angular/material';

@Component({
  selector: 'app-cust-rate-master',
  templateUrl: './cust-rate-master.component.html',
  styleUrls: ['./cust-rate-master.component.scss']
})
export class CustRateMasterComponent implements OnInit {
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
  public popoverMessage: string = 'Are you sure you want to delete this location?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status?';
  public cancelClicked: boolean = false;

  constructor(public dialog:MatDialog,public alertService:AlertService) { }

  ngOnInit() {
    this.tableList = [
      {lane:"Nag-Hyd" , vehicletype:"55ft / 120000kg" , status:true , rate:"12000"},
      {lane:"Mum-Kok" , vehicletype:"50ft / 150000kg" , status:true , rate:"16000"},
      {lane:"Che-Del" , vehicletype:"60ft / 110000kg" , status:true , rate:"11000"},
      {lane:"Del-Hyd" , vehicletype:"40ft / 10000kg" , status:true, rate:"15000"},
      {lane:"Hyd-Del" , vehicletype:"35ft / 8000kg" , status:true , rate:"8000"},
    ];
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    this.totalSize = 10;
  }

  deleteGateway() {
    this.alertService.createAlert("Location deleted successfully",1);
  }

  // public openLocationDialog(location) {
  //   let dialogRef = this.dialog.open(AddLocationComponent,{
  //     data:location,
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
