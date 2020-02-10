import { Component, OnInit } from '@angular/core';
import { MatDialog, PageEvent } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-lane-master',
  templateUrl: './lane-master.component.html',
  styleUrls: ['./lane-master.component.scss']
})
export class LaneMasterComponent implements OnInit {
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
      {lane:"Mum - Del" , country:"India" , status:true , origin:"Mumbai" , destination:"Delhi"},
      {lane:"Mum -Pun" , country:"India" , status:true , origin:"Mumbai" , destination:"Pune"},
      {lane:"Mum - Hyd" , country:"India" , status:true , origin:"Mumbai" , destination:"Hyderabad"},
      {lane:"Mum - Che" , country:"India" , status:true , origin:"Mumbai" , destination:"Chennai"},
      {lane:"Mum - Kol" , country:"India" , status:false , origin:"Mumbai" , destination:"Kolkata"},
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
