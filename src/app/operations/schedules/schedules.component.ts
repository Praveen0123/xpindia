import { Component, OnInit } from '@angular/core';
import { AddTripComponent } from '../orders/fcl/network/add-trip/add-trip.component';
import { PageEvent, MatDialog } from '@angular/material';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss']
})
export class SchedulesComponent implements OnInit {

  tableList: any;
  pageEvent: PageEvent;
  tableLists : any;
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
  public searchText: string;
  types = [{id:1 , value:"First Mile"} , {id:2 , value:"Intra Regional Mile"} , {id:3 , value:"Line Haul"} , {id:4 , value:"Last Mile"}];
  public page: any;
  showEmpty: boolean = false;
  filterToggle: boolean;
  status = [{id:1 , value:"Shipped"} , {id:2 , value:"In Transit"} , {id:3 , value:"Delivered"}];
  imagePath="../../../../assets/img/vendor/leaflet/page_under_construction.png";

  constructor(public dialog : MatDialog) { }

  ngOnInit() {
    this.tableList = [
      {sno:'1',ex:"Pune" , to:"Hyderabad" ,size:'20',payload:'9',assets:'2' ,transithours:'12', std:'0100H', eta:'1300H',station:'Kolhapur', type:"First Mile" , startDate:"20-12-2019, 01:15" , finishDate:"21-12-2019, 16:45" , vendor:"Ram Varma" , vehicleNumber:"TN 09 AU 5963" , package:"55" , vehType:"Transport Vehicle" , value:"1,22,800" , pickupDate:"24-12-2019" , pickupTime:"0700H" ,stdTime:"0730H" , deliverables:"50" ,  tat:"7" , status:"Delivered" , map:"" , network:"" , truck:"Tippo" , driver:"Globex Corporation "},
      {sno:'2',ex:"Coimbatore" , to:"Mumbai" ,size:'24',payload:'6',assets:'4',transithours:'7',std:'01300H',eta:'0830H', station:'Mumbai',type:"Intra Regional Mile" , startDate:"21-12-2019, 18:20" , finishDate:"23-12-2019, 04:15" , vendor:"Satish" , vehicleNumber:"TN 05 AP 5665" , package:"55" , vehType:"Transport Vehicle" , value:"12,52,500" , pickupDate:"24-12-2019" , pickupTime:"1600H" ,stdTime:"1630H" , deliverables:"50" ,  tat:"4" , status:"Delivered" , map:"" , network:"" , truck:"Tippo" , driver:"Vehement Capital Partners"},
      {sno:'3',ex:"Mumbai" , to:"West Bengal" , size:'22',payload:'20',assets:'6',transithours:'45',std:'0200H',eta:'1800H',station:'Sinnar',type:"Intra Regional Mile" , startDate:"23-12-2019, 6:00" , finishDate:"23-12-2019, 23:35" , vendor:"Salman" , vehicleNumber:"MH 71 PH 5555" , package:"55" , vehType:"Transport Vehicle" , value:"10,96,500" , pickupDate:"24-12-2019" , pickupTime:"0800H" ,stdTime:"0830H" , deliverables:"50" ,  tat:"1" , status:"In Transit" , map:"" , network:"" , truck:"Tippo" , driver:"Ram Babu"},
      {sno:'4',ex:"West Bengal" , to:"Ranchi" ,size:'17.5',payload:'2.4',assets:'3',transithours:'7',std:'0300H',eta:'2000H',station:'Solapur', type:"Line Haul" , startDate:"24-12-2019, 1:55" , finishDate:"24-12-2019, 17:50" , vendor:"Globex Corporation " , vehicleNumber:"WB 09 UD 1234" , package:"55" , vehType:"Transport Vehicle" , value:"5,30,000" , pickupDate:"24-12-2019" , pickupTime:"0900H" ,stdTime:"0930H" , deliverables:"50" ,  tat:"3" , status:"In Transit" , map:"" , network:"" , truck:"Tippo" , driver:"Rao Ramesh"},
      {sno:'5',ex:"Ranchi" , to:"Jaipur" ,size:'48',payload:'9',assets:'1', transithours:'16',std:'0400H',eta:'0700H',station:'Faridabad',type:"Intra Regional Mile" , startDate:"24-12-2019, 18:30" , finishDate:"25-12-2019, 05:00" , vendor:"Mohan" , vehicleNumber:"MH 82 MP 1122" , package:"55" , vehType:"Transport Vehicle" , value:"4,30,300" , pickupDate:"24-12-2019" , pickupTime:"1300H" ,stdTime:"1330H" , deliverables:"50" ,  tat:"6" , status:"In Transit" , map:"" , network:"" , truck:"Tippo" , driver:"Kota Srinivas RAo"},
     
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


