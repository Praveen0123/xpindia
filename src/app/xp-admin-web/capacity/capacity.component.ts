import { Component, OnInit } from '@angular/core';
import { PageEvent, MatDialog } from '@angular/material';
import { AlertService } from '../../shared/services/alert.service';

@Component({
  selector: 'app-capacity',
  templateUrl: './capacity.component.html',
  styleUrls: ['./capacity.component.scss']
})
export class CapacityComponent implements OnInit {
  tableList2:any
  tableList:any;
  tableLists: any;
  Status = [{id:1 , value:"Booked"} , {id:2 , value:"Available"}];
  countries=[{id:1 , value:"India"} , {id:2 , value:"China"}];
  origins = [{id:1 , value:"Pune"} , {id:2 , value:"Delhi"} , {id:3 , value:"Lucknow"} , {id:4 , value:"Bhopal"} , {id:5 , value:"Hyderabad"} , ]
  Destination = [{id:1 , value:"Delhi-1"} , {id:2 , value:"Pune-1"} , {id:3 , value:"Mumbai-1"} , {id:4 , value:"Hyderabad-1"} , {id:5 , value:"Hyderabad-2"} , ]
  FFV = [{id:1 , value:"Cargo Shipments-1"} , {id:2 , value:"Exports and Imports-1"} , {id:3 , value:"	DHL logistics companies-1"} , {id:4 , value:"Allcargo Logistics Ltd-1"}  , ]
  filterToggle: boolean;
  filterToggle1:boolean;
  pageEvent: PageEvent;
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
  public searchText: string;
  public page: any;
  CustomDate:boolean =false;
  showEmpty: boolean = false;
  toggleFilter() {
    this.filterToggle = !this.filterToggle;
  }
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this location?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status?';
  public cancelClicked: boolean = false;

  constructor(public dialog:MatDialog,public alertService:AlertService) { }

  ngOnInit() {
    this.tableList2 = [
      {departures:'37',origins:'7',destinations:'7',ffv:'8',customer:'9',lanes:'5',booked:'22',available:'9'},
    ]
    this.tableList = [
     {lanes:'5',booked:'15',available:'8',originZone:'Hyderabad',driverNumber:'9875426584',driverName:'Suresh',vehicleNumber:'TS09ET5555',customerName:'DHL logistics companies',sno:'1',destinationZone:"Delhi-1" , destinationCity:"Delhi" , serviceType:"FCL" , vehicleType:"25 FT/2500 KGS" , ffv:"Cargo Shipments" , status:"Booked" , utilization:"100%" , customerAllocated:"ITC"},
     {lanes:'6',booked:'12',available:'11',originZone:'Ambala',driverNumber:'8875426584',driverName:'Ramesh',vehicleNumber:'AP09ET5645',customerName:'Agarwal Packers and Movers Ltd',sno:'2',destinationZone:"Pune-1" , destinationCity:"Pune" , serviceType:"Express" , vehicleType:"20 FT/2000 KGS" , ffv:"Exports and Imports" , status:"Available" , utilization:"70%" , customerAllocated:"Amazon"},
     {lanes:'10',booked:'9',available:'14',originZone:'Chandigarh',driverNumber:'9775426584',driverName:'Kamal',vehicleNumber:'TN09ET4568',customerName:'Blue Dart Express Ltd',sno:'3',destinationZone:"Mumbai-1" , destinationCity:"Mumbai" , serviceType:"FCL" , vehicleType:"18 FT/1800 KGS" , ffv:"DHL logistics companies" , status:"Booked" , utilization:"100%" , customerAllocated:"Flipkart"},
     {lanes:'12',booked:'16',available:'7',originZone:'Delhi',driverNumber:'9575426584',driverName:'Kuldeep',vehicleNumber:'DL09ET1543',customerName:'Allcargo Logistics Ltd',sno:'4',destinationZone:"Hyderabad-1" , destinationCity:"Hyderabad" , serviceType:"Bespoke" , vehicleType:"25 FT/1900KGS" , ffv:"Agarwal Packers and Movers Ltd" , status:"Available" , utilization:"90%" , customerAllocated:"Ebay"},
     {lanes:'14',booked:'19',available:'4',originZone:'Bengaluru',driverNumber:'9175426584',driverName:'Rajbeer',vehicleNumber:'UP09ET4728',customerName:'Transport Corporation of India Ltd',sno:'5',destinationZone:"Hyderabad-2" , destinationCity:"Hyderabad" , serviceType:"FCL" , vehicleType:"15 FT/2000 KGS" , ffv:"Allcargo Logistics Ltd" , status:"Available" , utilization:"100%" , customerAllocated:"Compact Computers"},
     {lanes:'8',booked:'14',available:'9',originZone:'Bhopal',driverNumber:'9275426584',driverName:'Sukhi',vehicleNumber:'TS09ET4582',customerName:'Trans India Limited',sno:'6',destinationZone:"Mumbai-2" , destinationCity:"Mumbai" , serviceType:"FCL" , vehicleType:"20 FT/2000 KGS" , ffv:"Om Logistics LTD" , status:"Booked" , utilization:"100%" , customerAllocated:"Microsoft"},
     {lanes:'9',booked:'9',available:'14',originZone:'Shimla',driverNumber:'9595426584',driverName:'Ramu',vehicleNumber:'MH09ET48752',customerName:'Om Logistics LTD',sno:'7',destinationZone:"Delhi-2" , destinationCity:"Delhi" , serviceType:"Bespoke" , vehicleType:"20 FT/2000 KGS" , ffv:"Transport Corporation of India Ltd" , status:"Available" , utilization:"80%" , customerAllocated:"Myntra"},
     {lanes:'11',booked:'8',available:'15',originZone:'Lucknow',driverNumber:'9455426584',driverName:'Raju',vehicleNumber:'TS09E2454',customerName:'Container Corporation of India Ltd',sno:'8',destinationZone:"Hyderabad-3" , destinationCity:"Hyderabad" , serviceType:"FCL" , vehicleType:"18 FT/1800 KGS" , ffv:"Blue Dart Express Ltd" , status:"Booked" , utilization:"100%" , customerAllocated:"Wish"},
     {lanes:'15',booked:'18',available:'5',originZone:'Kanpur',driverNumber:'9985426584',driverName:'Diljit',vehicleNumber:'TS10ET5415',customerName:'Associated Road Carriers Limited',sno:'9',destinationZone:"Bangalore-1" , destinationCity:"Bangalore" , serviceType:"Bespoke" , vehicleType:"20 FT/2000 KGS" , ffv:"Associated Road Carriers Limited" , status:"Booked" , utilization:"80%" , customerAllocated:"Racing Compacts"},
     {lanes:'18',booked:'15',available:'8',originZone:'Patna',driverNumber:'9235426584',driverName:'Manpreet',vehicleNumber:'AP09ET5555',customerName:'Agarwal Packers and Movers Ltd',sno:'10',destinationZone:"Delhi-3" , destinationCity:"Delhi" , serviceType:"FCL" , vehicleType:"20 FT/2000 KGS" , ffv:"Trans India Limited" , status:"Available" , utilization:"100%" , customerAllocated:"Option Matrix"},
    ];
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    this.totalSize = 10;
  }

  deleteGateway() {
    this.alertService.createAlert("Location deleted successfully",1);
  }



  // public openLocationDialog(location) {
  //   let dialogRef = this.dialog.open(AddCountryComponent,{
  //     data:location,
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
  customDateFilter(){
    this.CustomDate = !this.CustomDate
  }
  

}
