import { Component, OnInit } from '@angular/core';
import { PageEvent, MatDialog } from '@angular/material';
import { TrackingComponent } from '../fcl/tracking/tracking.component';
import { NetworkComponent } from '../fcl/network/network.component';

@Component({
  selector: 'app-bb',
  templateUrl: './bb.component.html',
  styleUrls: ['./bb.component.scss']
})
export class BbComponent implements OnInit {

  tableList: any;
  pageEvent: PageEvent;
  tableLists : any;
  public pageSize = 5;
  public currentPage = 0;
  filterToggle:boolean;
  public totalSize = 0;
  public searchText: string;
  public page: any;
  showEmpty: boolean = false;
  imagePath="../../../../assets/img/vendor/leaflet/page_under_construction.png";

  constructor(public dialog : MatDialog) { }

  ngOnInit() {
    this.tableList = [
      {orderId:"10214548" , customer:"Navin Malik" , vehType:"50 feet" , value:"1,25,800" , pickupDate:"20-12-2019" , pickupTime:"01:45" , packages:"7" ,  tat:"2" , status:"Delivered" , map:"" , network:"" , truck:"Tippo"},
      {orderId:"20246578" , customer:"Surya teja" , vehType:"30 feet" , value:"75,800" , pickupDate:"20-12-2019" , pickupTime:"02:10" , packages:"10" ,  tat:"7" , status:"Delivered" , map:"" , network:"" , truck:"Tippo"},
      {orderId:"74530019" , customer:"Vijay Tanala" , vehType:"25 feet" , value:"4,56,000" , pickupDate:"21-12-2019" , pickupTime:"00:50" , packages:"8" ,  tat:"1" , status:"Delivered" , map:"" , network:"" , truck:"Tippo"},
      {orderId:"30124785" , customer:"Siva Kumar" , vehType:"20 feet" , value:"9,45,800" , pickupDate:"22-12-2019" , pickupTime:"10:30" , packages:"6" ,  tat:"3" , status:"In Transit" , map:"" , network:"" , truck:"Tippo"},
      {orderId:"85457512" , customer:"Radha Krishna" , vehType:"15 feet" , value:"12,52,000" , pickupDate:"23-12-2019" , pickupTime:"15:40" , packages:"9" ,  tat:"4" , status:"In Transit" , map:"" , network:"" , truck:"Tippo"},
      {orderId:"30120145" , customer:"Suresh" , vehType:"10 feet" , value:"8,82,000" , pickupDate:"24-12-2019" , pickupTime:"08:00" , packages:"5" ,  tat:"1" , status:"In Transit" , map:"" , network:"" , truck:"Tippo"},
      {orderId:"60124789" , customer:"Sachin" , vehType:"12 feet" , value:"15,45,200" , pickupDate:"24-12-2019" , pickupTime:"07:15" , packages:"3" ,  tat:"6" , status:"In Transit" , map:"" , network:"" , truck:"Tippo"},
      {orderId:"98645784" , customer:"Naveen" , vehType:"17 feet" , value:"11,45,750" , pickupDate:"24-12-2019" , pickupTime:"18:00" , packages:"2" ,  tat:"5" , status:"In Transit" , map:"" , network:"" , truck:"Tippo"},
      {orderId:"50124200" , customer:"Sree Bharath" , vehType:"30 feet" , value:"2,20,100" , pickupDate:"24-12-2019" , pickupTime:"09:30" , packages:"1" ,  tat:"4" , status:"In Transit" , map:"" , network:"" , truck:"Tippo"},
      {orderId:"40124574" , customer:"Amit Kumar" , vehType:"35 feet" , value:"1,25,400" , pickupDate:"24-12-2019" , pickupTime:"19:40" , packages:"7" ,  tat:"3" , status:"In Transit" , map:"" , network:"" , truck:"Tippo"}
    ];
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    this.totalSize = 10;
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

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
  }

}
