import { Component, OnInit } from '@angular/core';
import { PageEvent, MatDialog } from '@angular/material';
import { AlertService } from '../../../shared/services/alert.service';

@Component({
  selector: 'app-customer-offers',
  templateUrl: './customer-offers.component.html',
  styleUrls: ['./customer-offers.component.scss']
})
export class CustomerOffersComponent implements OnInit {
  tableList:any;
  tableLists: any;
  status = [{id:1 , value:"Active"} , {id:2 , value:"Inactive"}];
  countries=[{id:1 , value:"India"} , {id:2 , value:"China"}];
  services = [{id:1 , value:"FCL"} , {id:2 , value:"LCL"} , {id:3 , value:"BB"}];
  filterToggle: boolean;
  pageEvent: PageEvent;
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
  public searchText: string;
  public page: any;
  showEmpty: boolean = false;
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this offer?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status?';
  public cancelClicked: boolean = false;

  constructor(public dialog:MatDialog,public alertService:AlertService) { }

  ngOnInit() {
    this.tableList = [
     {origin:"Hyderabad" , destination:"Mumbai" , offerType:"Diwali Offer" , validFrom:"15-10-2019" , validThru:"30-10-2019" , serviceType:"FCL" , vehicleType:"30 feet" , image:"" , status:false},
     {origin:"Bangalore" , destination:"Pune" , offerType:"Christmas Offer" , validFrom:"20-12-2019" , validThru:"31-12-2019" , serviceType:"FCL" , vehicleType:"25 feet" , image:"" , status:true},
     {origin:"Delhi" , destination:"Chennai" , offerType:"New Year Offer" , validFrom:"29-12-2019" , validThru:"10-01-2020" , serviceType:"FCL" , vehicleType:"40 feet" , image:"" , status:true},
    ];
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    this.totalSize = 3;
  }

  deleteGateway() {
    this.alertService.createAlert("Offer deleted successfully",1);
  }

  // public openOfferDialog(offer) {
  //   let dialogRef = this.dialog.open(AddOfferComponent,{
  //     data:offer,
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
