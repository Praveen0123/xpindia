import { Component, OnInit } from '@angular/core';
import { MatDialog, PageEvent } from '@angular/material';
import { NetworkComponent } from '../../../operations/orders/fcl/network/network.component';
import { TrackingComponent } from '../../../operations/orders/fcl/tracking/tracking.component';

@Component({
  selector: 'app-lcl',
  templateUrl: './lcl.component.html',
  styleUrls: ['./lcl.component.scss']
})
export class LclComponent implements OnInit {
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
  selectedListItem:any;
  public item :any;
 
  dates = [{date:"Fri,10th Jan" , orders:"15"} , {date:"Sat,11th Jan" , orders:"11"} , {date:"Sun,12th Jan" , orders:"18"} , {date:"Mon,13th Jan" , orders:"12"} , {date:"Tue,14th Jan" , orders:"14"} , {date:"Wed,15th Jan" , orders:"19"} , {date:"Thu,16th Jan" , orders:"8"} , {date:"Fri,17th Jan" , orders:"10"} , {date:"Sat,18th Jan" , orders:"18"} , {date:"Sun,19th Jan" , orders:"17"} , {date:"Mon,20th Jan" , orders:"10"} , {date:"Tue,21th Jan" , orders:"17"} , {date:"Wed,22nd Jan" , orders:"16"} , {date:"Thu,23rd Jan" , orders:"10"} , {date:"Fri,24th Jan" , orders:"15"} , {date:"Sat,25th Jan" , orders:"9"} , {date:"Sun,26th Jan" , orders:"5"} , {date:"Mon,27th Jan" , orders:"12"} , {date:"Tue,28th Jan" , orders:"7"} , ];
  status = [{id:1 , value:"Shipped"} , {id:2 , value:"In Transit"} , {id:3 , value:"Delivered"}];
  constructor(public dialog : MatDialog) { }
  
  ngOnInit() {
    this.selectedListItem = this.dates[0];
    this.tableList = [
      {customer:"Option Matrix" , orderby:"Navin Malik" , packages:"55" , origin:"Chennai-1" , destination:"Bangalore-2" , value:"1,25,000" , pickupDate:"20-12-2019" , pickupTime:"0700H" , tat:"1" , status:"Delivered" , map:"" , network:"7" , truck:"Tippo" , pod:"20" , orderID:"20145787",},
      {customer:"Surya Exports and Imports" , orderby:"Surya Teja" , packages:"55" , origin:"Mumbai-2" , destination:"Hyderabad-2" , value:"1,10,000" , pickupDate:"20-12-2019" , pickupTime:"1600H" , tat:"3" , status:"Delivered" , map:"" , network:"5" , truck:"Tippo" , pod:"20" , orderID:"52014547"},
      {customer:"3A Infotech" , orderby:"Rahul" , packages:"55" , origin:"Bangalore-2" , destination:"Mumbai-1" , value:"57,520" , pickupDate:"21-12-2019" , pickupTime:"0600H" , tat:"2" , status:"Delivered" , map:"" , network:'4' , truck:"Tippo" , pod:"20" , orderID:"30214785"},
      {customer:"BHEL Industries limited" , orderby:"Siva Kumar" , packages:"55" , origin:"West Bengal-2" , destination:"Hyderabad-5" , value:"2,25,500" , pickupDate:"21-12-2019" , pickupTime:"0500H" , tat:"4" , status:"In Transit" , map:"" , network:"3" , truck:"Tippo" , pod:"20" , orderID:"30214747"},
      {customer:"Visaka Steel Plant" , orderby:"Kalanithi Maran" , packages:"55" , origin:"Jaipur-3" , destination:"Chennai-5" , value:"4,50,600" , pickupDate:"22-12-2019" , pickupTime:"1630H" , tat:"1" , status:"In Transit" , map:"" , network:"6" , truck:"Tippo" , pod:"20" , orderID:"63214785"},
      {customer:"GMR Constructions" , orderby:"Pooja Maran" , packages:"55" , origin:"Udaipur-4" , destination:"Bangalore-2" , value:"3,50,000" , pickupDate:"23-12-2019" , pickupTime:"1500H" , tat:"6" , status:"In Transit" , map:"" , network:"8" , truck:"Tippo" , pod:"20" , orderID:"63254710"},
      {customer:"L&T Constructions" , orderby:"Jhon-Doe" , packages:"55" , origin:"Lucknow-5" , destination:"Bangalore-4" , value:"2,75,000" , pickupDate:"24-12-2019" , pickupTime:"1700H" , tat:"4" , status:"In Transit" , map:"" , network:"9" , truck:"Tippo" , pod:"20" , orderID:"30214578"},
      {customer:"Vijay Services Pvt Ltd" , orderby:"Vijay Tanala" , packages:"55" , origin:"Kolkata-1" , destination:"Bangalore-1" , value:"74,300" , pickupDate:"24-12-2019" , pickupTime:"1830H" , tat:"2" , status:"In Transit" , map:"" , network:"5" , truck:"Tippo" , pod:"20" , orderID:"30214740"}
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
