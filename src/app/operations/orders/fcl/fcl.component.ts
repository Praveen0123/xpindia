import { Component, OnInit } from '@angular/core';
import { MatDialog, PageEvent } from '@angular/material';
import { TrackingComponent } from './tracking/tracking.component';
import { NetworkComponent } from './network/network.component';

@Component({
  selector: 'app-fcl',
  templateUrl: './fcl.component.html',
  styleUrls: ['./fcl.component.scss']
})
export class FclComponent implements OnInit {
  
  imagePath="../../../../assets/img/vendor/leaflet/page_under_construction.png";
  tableList : any;
  tableLists: any;
  filterToggle: boolean;
  pageEvent: PageEvent;
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
  public searchText: string;
  public page: any;
  showEmpty: boolean = false;
  status = [{id:1 , value:"Shipped"} , {id:2 , value:"In Transit"} , {id:3 , value:"Delivered"}];
  constructor(public dialog:MatDialog) { }
  
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
  
  public openNetworkDialog(network) {
    let dialogRef = this.dialog.open(NetworkComponent , {
      data: network,
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
      
    });
  }
  
  ngOnInit() {
    this.tableList = [
      {orderId:"101247" , customer:"" , vehicleType:"50 feet" , origin:"Coimbatore" , destination:"Delhi" , value:"6,00,000" , pickupDate:"20-12-2019" , pickupTime:"13:30" , tat:"7" , status:"Delivered" , map:"" , network:"" , truck:"" , orderBy:"Navin Malik" , invoice:"" , proofOfDelivery:"" , containes:"Pharmacy" , packages:25},
      {orderId:"520147" , customer:"" , vehicleType:"30 feet" , origin:"Chennai" , destination:"Bangalore" , value:"1,54,500" , pickupDate:"15-12-2019" , pickupTime:"09:15" , tat:"6" , status:"Delivered" , map:"" , network:"" , truck:"" , orderBy:"Sohail" , invoice:"" , proofOfDelivery:"" , containes:"Wiring" , packages:10},
      {orderId:"521471" , customer:"" , vehicleType:"20 feet" , origin:"Delhi" , destination:"Bangalore" , value:"6,00,000" , pickupDate:"20-12-2019" , pickupTime:"13:30" , tat:"5" , status:"Delivered" , map:"" , network:"" , truck:"" , orderBy:"Navin Malik" , invoice:"" , proofOfDelivery:"" , containes:"Pharmacy" , packages:25},
      {orderId:"251478" , customer:"" , vehicleType:"30 feet" , origin:"Hyderabad" , destination:"Mumbai" , value:"1,54,500" , pickupDate:"15-12-2019" , pickupTime:"09:15" , tat:"3" , status:"In Transit" , map:"" , network:"" , truck:"" , orderBy:"Sohail" , invoice:"" , proofOfDelivery:"" , containes:"Wiring" , packages:10},
      {orderId:"963547" , customer:"" , vehicleType:"20 feet" , origin:"Pune" , destination:"Lucknow" , value:"6,00,000" , pickupDate:"20-12-2019" , pickupTime:"13:30" , tat:"8" , status:"In Transit" , map:"" , network:"" , truck:"" , orderBy:"Navin Malik" , invoice:"" , proofOfDelivery:"" , containes:"Pharmacy" , packages:25},
      {orderId:"021478" , customer:"" , vehicleType:"80 feet" , origin:"Jaipur" , destination:"Udaipur" , value:"1,54,500" , pickupDate:"15-12-2019" , pickupTime:"09:15" , tat:"1" , status:"In Transit" , map:"" , network:"" , truck:"" , orderBy:"Sohail" , invoice:"" , proofOfDelivery:"" , containes:"Wiring" , packages:10}
    ];
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    this.totalSize = 6;
  }
  
}