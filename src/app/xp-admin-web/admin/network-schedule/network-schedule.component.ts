import { Component, OnInit } from '@angular/core';
import { MatDialog, PageEvent } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-network-schedule',
  templateUrl: './network-schedule.component.html',
  styleUrls: ['./network-schedule.component.scss']
})
export class NetworkScheduleComponent implements OnInit {
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
      {ex:"Pune",zones:"South-1",to:"Banglore",size:"20",payload:"9",assest:"2",transit:"18",std:"0100H",eta:"1900H",viastation:"Hyderabad",viaeta:"0700H",viastd:"7300H",status:true},
      {ex:"Pune",zones:"South-2",to:"Nasik",size:"24",payload:"9",assest:"2",transit:"12",std:"0200H",eta:"1400H",viastation:"Direct",viaeta:"-",viastd:"-",status:true},
      {ex:"Pune",zones:"South-2",to:"Aurangabad",size:"28",payload:"6",assest:"6",transit:"17",std:"0300H",eta:"2000H",viastation:"Direct",viaeta:"-",viastd:"-",status:true},
      {ex:"Pune",zones:"South-3",to:"Goa",size:"30",payload:"9",assest:"3",transit:"20",std:"0100H",eta:"2100H",viastation:"Direct",viaeta:"-",viastd:"-",status:true},
      {ex:"Pune",zones:"South-3",to:"Chennai",size:"20",payload:"9",assest:"2",transit:"24",std:"0100H",eta:"2500H",viastation:"Direct",viaeta:"-",viastd:"-",status:true},
      
      
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
