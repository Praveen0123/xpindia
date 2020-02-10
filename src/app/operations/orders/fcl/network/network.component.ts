import { Component, OnInit } from '@angular/core';
import { PageEvent, MatDialog } from '@angular/material';
import { AddTripComponent } from './add-trip/add-trip.component';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.scss']
})
export class NetworkComponent implements OnInit {

  tableList: any;
  pageEvent: PageEvent;
  tableLists : any;
  types = [{id:1 , value:"First Mile"} , {id:2 , value:"Intra Regional Mile"} , {id:3 , value:"Line Haul"} , {id:4 , value:"Last Mile"}];
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
      {source:"Chennai" , destination:"Coimbatote" , type:"First Mile" , startDate:"20-12-2019, 01:15" , finishDate:"21-12-2019, 16:45" , vendor:"Ram Varma" , vehicleNumber:"TN 09 AU 5963" , package:"55" , vehType:"Transport Vehicle" , value:"1,22,800" , pickupDate:"24-12-2019" , pickupTime:"08:30" , deliverables:"50" ,  tat:"7" , status:"Delivered" , map:"" , network:"" , truck:"Tippo" , driver:"Ali"},
      {source:"Coimbatore" , destination:"Mumbai" , type:"Intra Regional Mile" , startDate:"21-12-2019, 18:20" , finishDate:"23-12-2019, 04:15" , vendor:"Satish" , vehicleNumber:"TN 05 AP 5665" , package:"55" , vehType:"Transport Vehicle" , value:"12,52,500" , pickupDate:"24-12-2019" , pickupTime:"08:30" , deliverables:"50" ,  tat:"4" , status:"Delivered" , map:"" , network:"" , truck:"Tippo" , driver:"Kaushal"},
      {source:"Mumbai" , destination:"West Bengal" , type:"Intra Regional Mile" , startDate:"23-12-2019, 6:00" , finishDate:"23-12-2019, 23:35" , vendor:"Salman" , vehicleNumber:"MH 71 PH 5555" , package:"55" , vehType:"Transport Vehicle" , value:"10,96,500" , pickupDate:"24-12-2019" , pickupTime:"08:30" , deliverables:"50" ,  tat:"1" , status:"In Transit" , map:"" , network:"" , truck:"Tippo" , driver:"Tanish"},
      {source:"West Bengal" , destination:"Ranchi" , type:"Line Haul" , startDate:"24-12-2019, 1:55" , finishDate:"24-12-2019, 17:50" , vendor:"Globex Corporation " , vehicleNumber:"WB 09 UD 1234" , package:"55" , vehType:"Transport Vehicle" , value:"5,30,000" , pickupDate:"24-12-2019" , pickupTime:"08:30" , deliverables:"50" ,  tat:"3" , status:"In Transit" , map:"" , network:"" , truck:"Tippo" , driver:"Venu Madhav"},
      {source:"Ranchi" , destination:"Jaipur" , type:"Intra Regional Mile" , startDate:"24-12-2019, 18:30" , finishDate:"25-12-2019, 05:00" , vendor:"Mohan" , vehicleNumber:"MH 82 MP 1122" , package:"55" , vehType:"Transport Vehicle" , value:"4,30,300" , pickupDate:"24-12-2019" , pickupTime:"08:30" , deliverables:"50" ,  tat:"6" , status:"In Transit" , map:"" , network:"" , truck:"Tippo" , driver:"Vennela Kishore"},
      {source:"Jaipur" , destination:"Jaisalmer" , type:"Intra Regional Mile" , startDate:"25-12-2019, 07:15" , finishDate:"25-12-2019, 23:50" , vendor:"Ramu" , vehicleNumber:"RJ 45 JH 9865" , package:"55" , vehType:"Transport Vehicle" , value:"57,000" , pickupDate:"24-12-2019" , pickupTime:"08:30" , deliverables:"50" ,  tat:"2" , status:"In Transit" , map:"" , network:"" , truck:"Tippo" , driver:"Ram"},
      {source:"Jaisalmer" , destination:"Lucnow" , type:"Last Mile" , startDate:"26-12-2019, 00:15" , finishDate:"NA" , vendor:"Raju" , vehicleNumber:"RJ 058 VH 8055" , package:"55" , vehType:"Transport Vehicle" , value:"1,95,000" , pickupDate:"24-12-2019" , pickupTime:"08:30" , deliverables:"50" ,  tat:"5" , status:"In Transit" , map:"" , network:"" , truck:"Tippo" , driver:"Charan"}
    ];
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    this.totalSize = 7;
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
  }

  public openTripDialog(trip) {
    let dialogRef = this.dialog.open(AddTripComponent,{
      data:trip,
      height:'auto',
      width:'600px',
      autoFocus:false
    });
    dialogRef.afterClosed().subscribe(data => {
      
    })
  }

}
