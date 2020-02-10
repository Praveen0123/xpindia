import { Component, OnInit } from '@angular/core';
import { PageEvent, MatDialog } from '@angular/material';
import { AddContractComponent } from './add-contract/add-contract.component';
import { AlertService } from '../../../shared/services/alert.service';

@Component({
  selector: 'app-lcl',
  templateUrl: './lcl.component.html',
  styleUrls: ['./lcl.component.scss']
})
export class LclComponent implements OnInit {
  tableList:any;
  tableLists: any;
  // status = [{id:1 , value:"Active"} , {id:2 , value:"Inactive"}];
  status = ["Active","Incative"];
  countries=[{id:1 , value:"India"} , {id:2 , value:"China"}];
  zones=[{id:1 , value:"Central"} , {id:2 , value:"North"}];
  filterToggle: boolean;
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

  constructor(public dialog:MatDialog,public alertService:AlertService,) { }

  ngOnInit() {
    this.tableList = [
      {PDD: '23-02-2020', EDD: '25-02-2020', customer:"Option Matrix" , orderby:"Navin Malik" , packages:"55" , origin:"Chennai-1" , destination:"Bangalore-2" , value:"1,25,000" , pickupDate:"20-12-2019" , pickupTime:"0700H" , tat:"1" , status:"Delivered" , map:"" , network:"7" , truck:"Tippo" , pod:"20" , orderID:"20145787",},
      {PDD: '23-02-2020', EDD: '25-02-2020', customer:"Surya Exports and Imports" , orderby:"Surya Teja" , packages:"55" , origin:"Mumbai-2" , destination:"Hyderabad-2" , value:"1,10,000" , pickupDate:"20-12-2019" , pickupTime:"1600H" , tat:"3" , status:"Delivered" , map:"" , network:"5" , truck:"Tippo" , pod:"20" , orderID:"52014547"},
      {PDD: '23-02-2020', EDD: '25-02-2020', customer:"3A Infotech" , orderby:"Rahul" , packages:"55" , origin:"Bangalore-2" , destination:"Mumbai-1" , value:"57,520" , pickupDate:"21-12-2019" , pickupTime:"0600H" , tat:"2" , status:"Delivered" , map:"" , network:'4' , truck:"Tippo" , pod:"20" , orderID:"30214785"},
      {PDD: '23-02-2020', EDD: '25-02-2020', customer:"BHEL Industries limited" , orderby:"Siva Kumar" , packages:"55" , origin:"West Bengal-2" , destination:"Hyderabad-5" , value:"2,25,500" , pickupDate:"21-12-2019" , pickupTime:"0500H" , tat:"4" , status:"In Transit" , map:"" , network:"3" , truck:"Tippo" , pod:"20" , orderID:"30214747"},
      {PDD: '23-02-2020', EDD: '25-02-2020', customer:"Visaka Steel Plant" , orderby:"Kalanithi Maran" , packages:"55" , origin:"Jaipur-3" , destination:"Chennai-5" , value:"4,50,600" , pickupDate:"22-12-2019" , pickupTime:"1630H" , tat:"1" , status:"In Transit" , map:"" , network:"6" , truck:"Tippo" , pod:"20" , orderID:"63214785"},
      {PDD: '23-02-2020', EDD: '25-02-2020', customer:"GMR Constructions" , orderby:"Pooja Maran" , packages:"55" , origin:"Udaipur-4" , destination:"Bangalore-2" , value:"3,50,000" , pickupDate:"23-12-2019" , pickupTime:"1500H" , tat:"6" , status:"In Transit" , map:"" , network:"8" , truck:"Tippo" , pod:"20" , orderID:"63254710"},
      {PDD: '23-02-2020', EDD: '25-02-2020', customer:"L&T Constructions" , orderby:"Jhon-Doe" , packages:"55" , origin:"Lucknow-5" , destination:"Bangalore-4" , value:"2,75,000" , pickupDate:"24-12-2019" , pickupTime:"1700H" , tat:"4" , status:"In Transit" , map:"" , network:"9" , truck:"Tippo" , pod:"20" , orderID:"30214578"},
      {PDD: '23-02-2020', EDD: '25-02-2020', customer:"Vijay Services Pvt Ltd" , orderby:"Vijay Tanala" , packages:"55" , origin:"Kolkata-1" , destination:"Bangalore-1" , value:"74,300" , pickupDate:"24-12-2019" , pickupTime:"1830H" , tat:"2" , status:"In Transit" , map:"" , network:"5" , truck:"Tippo" , pod:"20" , orderID:"30214740"}
    ];
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    this.totalSize = 10;
  }

  deleteVendor() {
    this.alertService.createAlert("Contract deleted successfully",1);
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
  }
  public openContractDialog(id) {
    let dialogRef = this.dialog.open(AddContractComponent, {
      data:id,
      height: 'auto',
      width: '600px',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

 

}
