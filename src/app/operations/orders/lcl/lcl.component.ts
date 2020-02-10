import { Component, OnInit } from '@angular/core';
import { MatDialog, PageEvent } from '@angular/material';
import { NetworkComponent } from '../fcl/network/network.component';
import { TrackingComponent } from '../fcl/tracking/tracking.component';

@Component({
  selector: 'app-lcl',
  templateUrl: './lcl.component.html',
  styleUrls: ['./lcl.component.scss']
})
export class LclComponent implements OnInit {
  
  imagePath="../../../../assets/img/vendor/leaflet/page_under_construction.png";
  tableList:any;
  pageEvent: PageEvent;
  tableLists : any;
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
  public searchText: string;
  public page: any;
  showEmpty: boolean = false;
  filterToggle:boolean;
  status = [{id:1 , value:"Shipped"} , {id:2 , value:"In Transit"} , {id:3 , value:"Delivered"}];
  constructor(public dialog : MatDialog) { }
  
  ngOnInit() {
    this.tableList = [
      {customer:"Option Matrix" , orderId:"Navin Malik" , packages:"55" , origin:"Chennai" , destination:"Bangalore" , value:"1,25,000" , pickupDate:"20-12-2019" , pickupTime:"08:30" , tat:"1" , status:"Delivered" , map:"" , network:"" , truck:"Tippo" , pod:"20" , orderID:"20145787"},
      {customer:"Surya Exports and Imports" , orderId:"Surya Teja" , packages:"55" , origin:"Mumbai" , destination:"Hyderabad" , value:"1,10,000" , pickupDate:"20-12-2019" , pickupTime:"04:30" , tat:"3" , status:"Delivered" , map:"" , network:"" , truck:"Tippo" , pod:"20" , orderID:"52014547"},
      {customer:"3A Infotech" , orderId:"Rahul" , packages:"55" , origin:"Bangalore" , destination:"Mumbai" , value:"57,520" , pickupDate:"21-12-2019" , pickupTime:"02:15" , tat:"2" , status:"Delivered" , map:"" , network:"" , truck:"Tippo" , pod:"20" , orderID:"30214785"},
      {customer:"BHEL Industries limited" , orderId:"Siva Kumar" , packages:"55" , origin:"West Bengal" , destination:"Hyderabad" , value:"2,25,500" , pickupDate:"21-12-2019" , pickupTime:"07:20" , tat:"4" , status:"In Transit" , map:"" , network:"" , truck:"Tippo" , pod:"20" , orderID:"30214747"},
      {customer:"Visaka Steel Plant" , orderId:"Kalanithi Maran" , packages:"55" , origin:"Jaipur" , destination:"Chennai" , value:"4,50,600" , pickupDate:"22-12-2019" , pickupTime:"17:45" , tat:"1" , status:"In Transit" , map:"" , network:"" , truck:"Tippo" , pod:"20" , orderID:"63214785"},
      {customer:"GMR Constructions" , orderId:"Pooja Maran" , packages:"55" , origin:"Udaipur" , destination:"Bangalore" , value:"3,50,000" , pickupDate:"23-12-2019" , pickupTime:"23:00" , tat:"6" , status:"In Transit" , map:"" , network:"" , truck:"Tippo" , pod:"20" , orderID:"63254710"},
      {customer:"L&T Constructions" , orderId:"Jhon-Doe" , packages:"55" , origin:"Lucknow" , destination:"Bangalore" , value:"2,75,000" , pickupDate:"24-12-2019" , pickupTime:"23:45" , tat:"4" , status:"In Transit" , map:"" , network:"" , truck:"Tippo" , pod:"20" , orderID:"30214578"},
      {customer:"Vijay Services Pvt Ltd" , orderId:"Vijay Tanala" , packages:"55" , origin:"Kolkatta" , destination:"Bangalore" , value:"74,300" , pickupDate:"24-12-2019" , pickupTime:"06:50" , tat:"2" , status:"In Transit" , map:"" , network:"" , truck:"Tippo" , pod:"20" , orderID:"30214740"}
    ];
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    this.totalSize = 8;
  }
  
  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
  }

  public openNetworkDialog(network) {
    let dialogRef = this.dialog.open(NetworkComponent , {
      data: network,
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
      
    });
  }
  
  public openTrackingDialog(trackingDetails) {
    let dialogRef = this.dialog.open(TrackingComponent, {
      data:trackingDetails,
      height: 'auto',
      width: '600px',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
}
