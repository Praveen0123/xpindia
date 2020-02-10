import { Component, OnInit } from '@angular/core';
import { PageEvent, MatDialog } from '@angular/material';
import { AddBBContractComponent } from './add-bbcontract/add-bbcontract.component';
import { AlertService } from '../../../shared/services/alert.service';


@Component({
  selector: 'app-bb',
  templateUrl: './bb.component.html',
  styleUrls: ['./bb.component.scss']
})
export class BbComponent implements OnInit {
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
      {PDD: '23-02-2020', EDD: '25-02-2020', origin:"Mumbai-2" ,orderId:"10214548" , customer:"Navin Malik" , vehType:"50 feet" , value:"1,25,800" , pickupDate:"20-12-2019" , pickupTime:"	0800H" , packages:"7" ,  tat:"2" , status:"Delivered" , map:"" , network:"7" , truck:"Tippo"},
      {PDD: '23-02-2020', EDD: '25-02-2020', origin:"Mumbai-2" ,orderId:"20246578" , customer:"Surya teja" , vehType:"30 feet" , value:"75,800" , pickupDate:"20-12-2019" , pickupTime:"	0630H" , packages:"10" ,  tat:"7" , status:"Delivered" , map:"" , network:"3" , truck:"Tippo"},
      {PDD: '23-02-2020', EDD: '25-02-2020', origin:"Mumbai-2" ,orderId:"74530019" , customer:"Vijay Tanala" , vehType:"25 feet" , value:"4,56,000" , pickupDate:"21-12-2019" , pickupTime:"	0730H" , packages:"8" ,  tat:"1" , status:"Delivered" , map:"" , network:"4" , truck:"Tippo"},
      {PDD: '23-02-2020', EDD: '25-02-2020', origin:"Mumbai-2",orderId:"30124785" , customer:"Siva Kumar" , vehType:"20 feet" , value:"9,45,800" , pickupDate:"22-12-2019" , pickupTime:"	0500H" , packages:"6" ,  tat:"3" , status:"In Transit" , map:"" , network:"5" , truck:"Tippo"},
      {PDD: '23-02-2020', EDD: '25-02-2020', origin:"Mumbai-2" ,orderId:"85457512" , customer:"Radha Krishna" , vehType:"15 feet" , value:"12,52,000" , pickupDate:"23-12-2019" , pickupTime:"0930H" , packages:"9" ,  tat:"4" , status:"In Transit" , map:"" , network:"6" , truck:"Tippo"},
      {PDD: '23-02-2020', EDD: '25-02-2020', origin:"Mumbai-2" ,orderId:"30120145" , customer:"Suresh" , vehType:"10 feet" , value:"8,82,000" , pickupDate:"24-12-2019" , pickupTime:"0900H" , packages:"5" ,  tat:"1" , status:"In Transit" , map:"" , network:"7" , truck:"Tippo"},
      {PDD: '23-02-2020', EDD: '25-02-2020', origin:"Mumbai-2" ,orderId:"60124789" , customer:"Sachin" , vehType:"12 feet" , value:"15,45,200" , pickupDate:"24-12-2019" , pickupTime:"0730H" , packages:"3" ,  tat:"6" , status:"In Transit" , map:"" , network:"4" , truck:"Tippo"},
      {PDD: '23-02-2020', EDD: '25-02-2020', origin:"Mumbai-2" ,orderId:"98645784" , customer:"Naveen" , vehType:"17 feet" , value:"11,45,750" , pickupDate:"24-12-2019" , pickupTime:"1330H" , packages:"2" ,  tat:"5" , status:"In Transit" , map:"" , network:"3" , truck:"Tippo"},
      {PDD: '23-02-2020', EDD: '25-02-2020', origin:"Mumbai-2" ,orderId:"50124200" , customer:"Sree Bharath" , vehType:"30 feet" , value:"2,20,100" , pickupDate:"24-12-2019" , pickupTime:"1600H" , packages:"1" ,  tat:"4" , status:"In Transit" , map:"" , network:"2" , truck:"Tippo"},
      {PDD: '23-02-2020', EDD: '25-02-2020', origin:"Mumbai-2" ,orderId:"40124574" , customer:"Amit Kumar" , vehType:"35 feet" , value:"1,25,400" , pickupDate:"24-12-2019" , pickupTime:"0830H" , packages:"7" ,  tat:"3" , status:"In Transit" , map:"" , network:"8" , truck:"Tippo"}
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
    let dialogRef = this.dialog.open(AddBBContractComponent, {
      data:id,
      height: 'auto',
      width: '600px',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

}
