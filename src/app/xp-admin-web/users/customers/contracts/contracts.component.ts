import { Component, OnInit } from '@angular/core';
import { PageEvent, MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import {AddContractsComponent} from './add-contracts/add-contracts.component';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit {
  tableList:any;
  tableLists: any;
  status = [{id:1 , value:"Active"} , {id:2 , value:"Inactive"}];
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
  showEmpty: boolean = false;
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status?';
  public cancelClicked: boolean = false;

  constructor(public dialog:MatDialog,public alertService:AlertService) { }

  ngOnInit() {
    this.tableList = [
      {contracttitle:"XP India - BHEL Haridwar" , description:"The is the contract between the shipper and the carrier" , startdate:"01/20/2020" , expirydate:"01/23/2020" , status:1},
      {contracttitle:"XP India - Cargo Delhi" , description:"The is the contract between the shipper and the carrier" , startdate:"01/16/2020" , expirydate:"10/20/2020" , status:1},
      {contracttitle:"XP India - Navatha Chennai" , description:"The is the contract between the shipper and the carrier" , startdate:"01/20/2020" , expirydate:"01/23/2020" , status:1},
      {contracttitle:"XP India - ECIL HYD" , description:"The is the contract between the shipper and the carrier" , startdate:"01/20/2020" , expirydate:"01/23/2020" , status:1},
      {contracttitle:"XP India - SRS Pune" , description:"The is the contract between the shipper and the carrier" , startdate:"01/20/2020" , expirydate:"01/23/2020" , status:1},
      {contracttitle:"XP India - First Cargo Mumbai" , description:"The is the contract between the shipper and the carrier" , startdate:"01/20/2020" , expirydate:"01/23/2020" , status:1},

     

      
     
    ];
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    this.totalSize = 10;
  }


  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
  }


  public openContractDialog(lane) {
    let dialogRef = this.dialog.open(AddContractsComponent,{
      data:lane,
      height:'auto',
      width:'600px',
      autoFocus:false
    });
    dialogRef.afterClosed().subscribe(data => {

    });
  }

  deleteContract(){
    this.alertService.createAlert("Document deleted successfully",1)
  }
}
