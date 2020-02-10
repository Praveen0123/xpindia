import { Component, OnInit } from '@angular/core';
import { PageEvent, MatDialog } from '@angular/material';
import { NetworkComponent } from '../../../operations/orders/fcl/network/network.component';
import { TrackingComponent } from '../../../operations/orders/fcl/tracking/tracking.component';

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
  selectedListItem:any;
  public item :any;

  dates = [{date:"Fri,10th Jan" , orders:"15"} , {date:"Sat,11th Jan" , orders:"11"} , {date:"Sun,12th Jan" , orders:"18"} , {date:"Mon,13th Jan" , orders:"12"} , {date:"Tue,14th Jan" , orders:"14"} , {date:"Wed,15th Jan" , orders:"19"} , {date:"Thu,16th Jan" , orders:"8"} , {date:"Fri,17th Jan" , orders:"10"} , {date:"Sat,18th Jan" , orders:"18"} , {date:"Sun,19th Jan" , orders:"17"} , {date:"Mon,20th Jan" , orders:"10"} , {date:"Tue,21th Jan" , orders:"17"} , {date:"Wed,22nd Jan" , orders:"16"} , {date:"Thu,23rd Jan" , orders:"10"} , {date:"Fri,24th Jan" , orders:"15"} , {date:"Sat,25th Jan" , orders:"9"} , {date:"Sun,26th Jan" , orders:"5"} , {date:"Mon,27th Jan" , orders:"12"} , {date:"Tue,28th Jan" , orders:"7"} , ];

  constructor(public dialog : MatDialog) { }

  ngOnInit() {
    this.selectedListItem = this.dates[0];
    this.tableList = [
      {origin:"Mumbai-2" ,orderId:"10214548" , customer:"Navin Malik" , vehType:"50 feet" , value:"1,25,800" , pickupDate:"20-12-2019" , pickupTime:"	0800H" , packages:"7" ,  tat:"2" , status:"Delivered" , map:"" , network:"7" , truck:"Tippo"},
      {origin:"Mumbai-2" ,orderId:"20246578" , customer:"Surya teja" , vehType:"30 feet" , value:"75,800" , pickupDate:"20-12-2019" , pickupTime:"	0630H" , packages:"10" ,  tat:"7" , status:"Delivered" , map:"" , network:"3" , truck:"Tippo"},
      {origin:"Mumbai-2" ,orderId:"74530019" , customer:"Vijay Tanala" , vehType:"25 feet" , value:"4,56,000" , pickupDate:"21-12-2019" , pickupTime:"	0730H" , packages:"8" ,  tat:"1" , status:"Delivered" , map:"" , network:"4" , truck:"Tippo"},
      {origin:"Mumbai-2",orderId:"30124785" , customer:"Siva Kumar" , vehType:"20 feet" , value:"9,45,800" , pickupDate:"22-12-2019" , pickupTime:"	0500H" , packages:"6" ,  tat:"3" , status:"In Transit" , map:"" , network:"5" , truck:"Tippo"},
      {origin:"Mumbai-2" ,orderId:"85457512" , customer:"Radha Krishna" , vehType:"15 feet" , value:"12,52,000" , pickupDate:"23-12-2019" , pickupTime:"0930H" , packages:"9" ,  tat:"4" , status:"In Transit" , map:"" , network:"6" , truck:"Tippo"},
      {origin:"Mumbai-2" ,orderId:"30120145" , customer:"Suresh" , vehType:"10 feet" , value:"8,82,000" , pickupDate:"24-12-2019" , pickupTime:"0900H" , packages:"5" ,  tat:"1" , status:"In Transit" , map:"" , network:"7" , truck:"Tippo"},
      {origin:"Mumbai-2" ,orderId:"60124789" , customer:"Sachin" , vehType:"12 feet" , value:"15,45,200" , pickupDate:"24-12-2019" , pickupTime:"0730H" , packages:"3" ,  tat:"6" , status:"In Transit" , map:"" , network:"4" , truck:"Tippo"},
      {origin:"Mumbai-2" ,orderId:"98645784" , customer:"Naveen" , vehType:"17 feet" , value:"11,45,750" , pickupDate:"24-12-2019" , pickupTime:"1330H" , packages:"2" ,  tat:"5" , status:"In Transit" , map:"" , network:"3" , truck:"Tippo"},
      {origin:"Mumbai-2" ,orderId:"50124200" , customer:"Sree Bharath" , vehType:"30 feet" , value:"2,20,100" , pickupDate:"24-12-2019" , pickupTime:"1600H" , packages:"1" ,  tat:"4" , status:"In Transit" , map:"" , network:"2" , truck:"Tippo"},
      {origin:"Mumbai-2" ,orderId:"40124574" , customer:"Amit Kumar" , vehType:"35 feet" , value:"1,25,400" , pickupDate:"24-12-2019" , pickupTime:"0830H" , packages:"7" ,  tat:"3" , status:"In Transit" , map:"" , network:"8" , truck:"Tippo"}
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
  scrollKanban(side) {
    if(side == 'right')
    document.getElementById('container').scrollLeft += 250;
    if(side == 'left')
    document.getElementById('container').scrollLeft -= 250;
  }
  
  listNewClick(event, newValue) {
    console.log(newValue)
    this.selectedListItem = newValue;
    // this.item = newValue.name;
  }



}
