import { Component, OnInit } from '@angular/core';
import { PageEvent, MatDialog } from '@angular/material';
import { TrackingComponent } from '../fcl/tracking/tracking.component';
import { NetworkComponent } from '../fcl/network/network.component';

@Component({
  selector: 'app-bb-details',
  templateUrl: './bb-details.component.html',
  styleUrls: ['./bb-details.component.scss']
})
export class BbDetailsComponent implements OnInit {

  tableList: any;
  pageEvent: PageEvent;
  tableLists : any;
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
  public searchText: string;
  public page: any;
  showEmpty: boolean = false;
  filterToggle: boolean;
  status = [{id:1 , value:"Shipped"} , {id:2 , value:"In Transit"} , {id:3 , value:"Delivered"}];
  imagePath="../../../../assets/img/vendor/leaflet/page_under_construction.png";

  constructor(public dialog : MatDialog) { }

  ngOnInit() {
    this.tableList = [
      {destination:"Delhi" , package:"5547896310" , vehType:"Transport Vehicle" , value:"1,22,800" , pickupDate:"24-12-2019" , pickupTime:"08:30" , deliverables:"50" ,  tat:"7" , status:"Delivered" , map:"" , network:"" , truck:"Tippo"},
      {destination:"Pune" , package:"4856217498" , vehType:"Transport Vehicle" , value:"12,52,500" , pickupDate:"24-12-2019" , pickupTime:"08:30" , deliverables:"50" ,  tat:"4" , status:"Delivered" , map:"" , network:"" , truck:"Tippo"},
      {destination:"Kolatta" , package:"2123659874" , vehType:"Transport Vehicle" , value:"10,96,500" , pickupDate:"24-12-2019" , pickupTime:"08:30" , deliverables:"50" ,  tat:"1" , status:"In Transit" , map:"" , network:"" , truck:"Tippo"},
      {destination:"Chennai" , package:"1124578963" , vehType:"Transport Vehicle" , value:"5,30,000" , pickupDate:"24-12-2019" , pickupTime:"08:30" , deliverables:"50" ,  tat:"3" , status:"In Transit" , map:"" , network:"" , truck:"Tippo"},
      {destination:"Jaipur" , package:"1203050690" , vehType:"Transport Vehicle" , value:"4,30,300" , pickupDate:"24-12-2019" , pickupTime:"08:30" , deliverables:"50" ,  tat:"6" , status:"In Transit" , map:"" , network:"" , truck:"Tippo"},
      {destination:"Udaipur" , package:"8701206504" , vehType:"Transport Vehicle" , value:"57,000" , pickupDate:"24-12-2019" , pickupTime:"08:30" , deliverables:"50" ,  tat:"2" , status:"In Transit" , map:"" , network:"" , truck:"Tippo"},
      {destination:"Lucnow" , package:"1070805032" , vehType:"Transport Vehicle" , value:"1,95,000" , pickupDate:"24-12-2019" , pickupTime:"08:30" , deliverables:"50" ,  tat:"5" , status:"In Transit" , map:"" , network:"" , truck:"Tippo"}
    ];
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    this.totalSize = 7;
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
