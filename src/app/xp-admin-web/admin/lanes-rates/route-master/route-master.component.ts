import { Component, OnInit } from '@angular/core';
import { PageEvent, MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-route-master',
  templateUrl: './route-master.component.html',
  styleUrls: ['./route-master.component.scss']
})
export class RouteMasterComponent implements OnInit {
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
      {routename:"Del-Nag-Hyd",lane:"Del-Hyd" ,via:"Nagpur", country:"India" , status:true , origin:"Delhi" , destination:"Hyderabad"},
      {routename:"Pun-Nag-Hyd",lane:"Pun-Hyd" ,via:"Nagpur", country:"India" , status:true , origin:"Pune" , destination:"Hyderabad"},
      {routename:"Che-Hyd-Del",lane:"Che-Del" ,via:"Hyderabad", country:"India" , status:true , origin:"Chennai" , destination:"Delhi"},
      {routename:"Del-Nag-Hyd",lane:"Del-Hyd" ,via:"Nagpur", country:"India" , status:true , origin:"Delhi" , destination:"Hyderabad"},
      {routename:"Del-Nag-Hyd",lane:"Del-Hyd" ,via:"Nagpur", country:"India" , status:true , origin:"Delhi" , destination:"Hyderabad"},

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
