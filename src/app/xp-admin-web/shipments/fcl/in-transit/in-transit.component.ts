import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, PageEvent } from '@angular/material';

@Component({
  selector: 'app-in-transit',
  templateUrl: './in-transit.component.html',
  styleUrls: ['./in-transit.component.scss']
})
export class InTransitComponent implements OnInit {

  selected = 1;
  selectedListItem:any;
  public item :any;
  // dates = [{date:"Fri,10th Jan" , orders:"15"} , {date:"Sat,11th Jan" , orders:"11"} , {date:"Sun,12th Jan" , orders:"18"} , {date:"Mon,13th Jan" , orders:"12"} , {date:"Tue,14th Jan" , orders:"14"} , {date:"Wed,15th Jan" , orders:"19"} , {date:"Thu,16th Jan" , orders:"8"} , {date:"Fri,17th Jan" , orders:"10"} , {date:"Sat,18th Jan" , orders:"18"} , {date:"Sun,19th Jan" , orders:"17"} , {date:"Mon,20th Jan" , orders:"10"} , {date:"Tue,21th Jan" , orders:"17"} , {date:"Wed,22nd Jan" , orders:"16"} , {date:"Thu,23rd Jan" , orders:"10"} , {date:"Fri,24th Jan" , orders:"15"} , {date:"Sat,25th Jan" , orders:"9"} , {date:"Sun,26th Jan" , orders:"5"} , {date:"Mon,27th Jan" , orders:"12"} , {date:"Tue,28th Jan" , orders:"7"} , ];
  zones = [{id:1 , value:"North-1"} , {id:2 , value:"south-2"} , {id:3 , value:"North3"} , {id:4 , value:"West-1"} , {id:5 , value:"East-2"} , {id:6 , value:"East1"} , {id:7 , value:"West-2"} , {id:8 , value:"Soth-1"} , {id:9 , value:"South2"} , {id:10 , value:"North-3"}];
  gateways = [{id:1 , value:"Jumalia"} , {id:2 , value:"Ajumisim"} , {id:3 , value:"Sherlingampally"} , {id:4 , value:"Raddisson"} , {id:5 , value:"Bahrsel"}]
  responsiveOptions;
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
  
  constructor(public dialog:MatDialog,) { 
   
  }

  // scrollKanban(side) {
  //   if(side == 'right')
  //   document.getElementById('container').scrollLeft += 250;
  //   if(side == 'left')
  //   document.getElementById('container').scrollLeft -= 250;
  // }
  
  // listNewClick(event, newValue) {
  //   console.log(newValue)
  //   this.selectedListItem = newValue;
  //   this.item = newValue.name;
  // }
  
  // public openTrackingDialog(trackingDetails) {
  //   let dialogRef = this.dialog.open(TrackingComponent, {
  //     data:trackingDetails,
  //     height: 'auto',
  //     width: '600px',
  //     autoFocus: false
  //   });
  //   dialogRef.afterClosed().subscribe(data => {
  //   });
  // }
  
  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
  }
  
  // public openNetworkDialog(network) {
  //   let dialogRef = this.dialog.open(NetworkComponent , {
  //     data: network,
  //     height: 'auto',
  //     width: '600px'
  //   });
  //   dialogRef.afterClosed().subscribe(data => {
  
  //   });
  // }
  
  ngOnInit() {
    // this.selectedListItem = this.dates[0];
    // this.item = ; 
    this.tableList = [
      {orderId:"101247" , customer:"" , vehicleType:"50 feet" , origin:"Coimbatore" , destination:"Delhi" , value:"6,00,000" , pickupDate:"20-12-2019" , pickupTime:"13:30" , tat:"7" , status:"Delivered" , map:"" , network:"7" , truck:"" , orderBy:"Navin Malik" , invoice:"" , proofOfDelivery:"" , containes:"Pharmacy" , packages:25},
      {orderId:"520147" , customer:"" , vehicleType:"30 feet" , origin:"Chennai" , destination:"Bangalore" , value:"1,54,500" , pickupDate:"15-12-2019" , pickupTime:"09:15" , tat:"6" , status:"Delivered" , map:"" , network:"5" , truck:"" , orderBy:"Sohail" , invoice:"" , proofOfDelivery:"" , containes:"Wiring" , packages:10},
      {orderId:"521471" , customer:"" , vehicleType:"20 feet" , origin:"Delhi" , destination:"Bangalore" , value:"6,00,000" , pickupDate:"20-12-2019" , pickupTime:"13:30" , tat:"5" , status:"Delivered" , map:"" , network:"4" , truck:"" , orderBy:"Navin Malik" , invoice:"" , proofOfDelivery:"" , containes:"Pharmacy" , packages:25},
      {orderId:"251478" , customer:"" , vehicleType:"30 feet" , origin:"Hyderabad" , destination:"Mumbai" , value:"1,54,500" , pickupDate:"15-12-2019" , pickupTime:"09:15" , tat:"3" , status:"In Transit" , map:"" , network:"3" , truck:"" , orderBy:"Sohail" , invoice:"" , proofOfDelivery:"" , containes:"Wiring" , packages:10},
      {orderId:"963547" , customer:"" , vehicleType:"20 feet" , origin:"Pune" , destination:"Lucknow" , value:"6,00,000" , pickupDate:"20-12-2019" , pickupTime:"13:30" , tat:"8" , status:"In Transit" , map:"" , network:"2" , truck:"" , orderBy:"Navin Malik" , invoice:"" , proofOfDelivery:"" , containes:"Pharmacy" , packages:25},
      {orderId:"021478" , customer:"" , vehicleType:"80 feet" , origin:"Jaipur" , destination:"Udaipur" , value:"1,54,500" , pickupDate:"15-12-2019" , pickupTime:"09:15" , tat:"1" , status:"In Transit" , map:"" , network:"8" , truck:"" , orderBy:"Sohail" , invoice:"" , proofOfDelivery:"" , containes:"Wiring" , packages:10}
    ];
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    this.totalSize = 6;
  }
  

}
