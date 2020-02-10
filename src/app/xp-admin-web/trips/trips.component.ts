import { Component, OnInit } from '@angular/core';
// import { single} from '../pie.data';

import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';


import { PageEvent, MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss']
})
export class TripsComponent implements OnInit {

 

  constructor(public dialog:MatDialog,public appSettings:AppSettings,public alertService:AlertService) {

   
  }
  

  pageEvent: PageEvent;
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
  public searchText: string;
  public page: any;
  showEmpty: boolean = false;
  tableList:any;
  tableLists: any;
  filterToggle:boolean;
  customertableList = [
    {timelog:'500H',remainingHours:'1100H',currenthours:'1100H',package:'5',weight:'20',tat:'2200H',cn:'1025652345',driverNumber:'9875426584',driverName:'Suresh',eta:'1400H',ffv:'Shopkart',departureTime:'1500H',pta:'02/04/2020 600H',zone:'North-1',bookingid:'BA/MA/2020/01/06',orderId:"10120124" , serviceType:"FCL" , customerName:"HP" , currentLocation:"Hyderabad" , origin:"Hyderabad" , destination:"Pune" , dateofPickup:"26/01/2020" , typeOfVehicle:"20 FT/2500 KGS" , vehicleNumber:"TS09ET5555" , xpcn:"120124574101" , xpts:"120121457842" , status:"Provisional"},
    {timelog:'200H',remainingHours:'1200H',currenthours:'800H',package:'6',weight:'25',tat:'2000H',cn:'8456215478',driverNumber:'8875426584',driverName:'Ramesh',eta:'1200H',ffv:'A10networks',departureTime:'1600H',pta:'02/06/2020 800H',zone:'South-2',bookingid:'BA/MA/2020/03/06',orderId:"10120123" , serviceType:"Bespoke" , customerName:"Sun Pharma" , currentLocation:"Chennai" , origin:"Chennai" , destination:"Pune" , dateofPickup:"30/01/2020" , typeOfVehicle:"18 FT/3500 KGS" , vehicleNumber:"AP09ET5645" , xpcn:"136201201548" , xpts:"145421457842" , status:"Confirmed"},
    {timelog:'400H',remainingHours:'1400H',currenthours:'400H',package:'4',weight:'30',tat:'1800H',cn:'1254788965',driverNumber:'9775426584',driverName:'Kamal',eta:'400H',ffv:'A1webserver',departureTime:'500H',pta:'02/08/2020 1600H',zone:'East-1',bookingid:'BA/MA/2020/05/06',orderId:"10120122" , serviceType:"Express" , customerName:"ONGC" , currentLocation:"Mumbai" , origin:"Mumabi" , destination:"Pune" , dateofPickup:"22/01/2020" , typeOfVehicle:"25 FT/1800 KGS" , vehicleNumber:"TN09ET4568" , xpcn:"169641458784" , xpts:"120545457842" , status:"Unloadoing"},
    {timelog:'600H',remainingHours:'800H',currenthours:'600H',package:'3',weight:'35',tat:'1200H',cn:'4512698745',driverNumber:'9575426584',driverName:'Kuldeep',eta:'1500H',ffv:'A3malnet',departureTime:'1600H',pta:'02/09/2020 1100H',zone:'West-1',bookingid:'BA/MA/2020/07/06',orderId:"10120121" , serviceType:"Bespoke" , customerName:"DR Reddy’s Labs " , currentLocation:"Pune" , origin:"Pune" , destination:"Hyderabad" , dateofPickup:"17/01/2020" , typeOfVehicle:"26 FT/1500 KGS" , vehicleNumber:"DL09ET1543" , xpcn:"130124579630" , xpts:"545121457842" , status:"Trans-Ship"},
    {timelog:'200H',remainingHours:'900H',currenthours:'500H',package:'6',weight:'32',tat:'1400H',cn:'54569874512',driverNumber:'9175426584',driverName:'Rajbeer',eta:'1600H',ffv:'A-shop',departureTime:'1200H',pta:'02/10/2020 700H',zone:'North-1',bookingid:'BA/MA/2020/09/06',orderId:"10120120" , serviceType:"Bespoke" , customerName:"NTPC" , currentLocation:"Hyderabad" , origin:"Hyderabad" , destination:"Pune" , dateofPickup:"22/02/2020" , typeOfVehicle:"20 FT/2500 KGS" , vehicleNumber:"UP09ET4728" , xpcn:"196321478521" , xpts:"154851457842" , status:"Unloadoing"},
    {timelog:'300H',remainingHours:'1200H',currenthours:'400H',package:'4',weight:'28',tat:'1600H',cn:'9878451236',driverNumber:'9275426584',driverName:'Sukhi',eta:'400H',ffv:'Abledesign',departureTime:'800H',pta:'02/14/2020 500H',zone:'North-2',bookingid:'BA/MA/2020/01/06',orderId:"10120125" , serviceType:"FCL" , customerName:"IOCL" , currentLocation:"Chennai" , origin:"Chennai" , destination:"Pune" , dateofPickup:"26/01/2020" , typeOfVehicle:"25 FT/1500 KGS" , vehicleNumber:"TS09ET4582" , xpcn:"196301245789" , xpts:"120121557542" , status:"Destination"},
    {timelog:'800H',remainingHours:'900H',currenthours:'1300H',package:'5',weight:'24',tat:'2200H',cn:'8978456542',driverNumber:'9595426584',driverName:'Ramu',eta:'500H',ffv:'Abisource',departureTime:'1900H',pta:'02/16/2020 1700H',zone:'South-1',bookingid:'BA/MA/2020/02/06',orderId:"10120126" , serviceType:"Express" , customerName:"Ranbaxy Laboratories" , currentLocation:"Hyderabad" , origin:"Hyderabad" , destination:"Pune" , dateofPickup:"15/02/2020" , typeOfVehicle:"35 FT/2500 KGS" , vehicleNumber:"MH09ET48752" , xpcn:"196310212012" , xpts:"120121575842" , status:"Destination"},
    {timelog:'600H',remainingHours:'700H',currenthours:'1100H',package:'6',weight:'25',tat:'1800H',cn:'8974512369',driverNumber:'9455426584',driverName:'Raju',eta:'1500H',ffv:'K2sxs',departureTime:'2000H',pta:'02/18/2020 1800H',zone:'West-1',bookingid:'BA/MA/2020/05/06',orderId:"10120127" , serviceType:"Bespoke" , customerName:"Dell" , currentLocation:"Pune" , origin:"Pune" , destination:"Hyderabad" , dateofPickup:"17/02/2020" , typeOfVehicle:"10 FT/2500 KGS" , vehicleNumber:"TS09E2454" , xpcn:"163014578032" , xpts:"120121457542" , status:"Transit"},
    {timelog:'400H',remainingHours:'500H',currenthours:'900H',package:'2',weight:'30',tat:'1400H',cn:'7845123265',driverNumber:'9985426584',driverName:'Diljit',eta:'1600H',ffv:'Kaffeine',departureTime:'2100H',pta:'02/20/2020 1500H',zone:'South-1',bookingid:'BA/MA/2020/04/06',orderId:"10120128" , serviceType:"FCL" , customerName:"Cipla" , currentLocation:"Hyderabad" , origin:"Hyderabad" , destination:"Pune" , dateofPickup:"26/01/2020" , typeOfVehicle:"10 FT/2500 KGS" , vehicleNumber:"TS10ET5415" , xpcn:"196301012360" , xpts:"157521457842" , status:"Unloadoing"},
    {timelog:'500H',remainingHours:'600H',currenthours:'600H',package:'3',weight:'35',tat:'1200H',cn:'9874563214',driverNumber:'9235426584',driverName:'Manpreet',eta:'1400H',ffv:'K-iwi',departureTime:'1500H',pta:'02/22/2020 1300H',zone:'North-1',bookingid:'BA/MA/2020/01/06',orderId:"10120129" , serviceType:"FCL" , customerName:"Mankind Pharma" , currentLocation:"Delhi" , origin:"Delhi" , destination:"Pune" , dateofPickup:"26/02/2020" , typeOfVehicle:"10 FT/1500 KGS" , vehicleNumber:"AP09ET5555" , xpcn:"100121241010" , xpts:"557121457842" , status:"Provisional"}
  ];
 

  ngOnInit() {
    this.tableList = this.customertableList;
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    this.totalSize = 10;
  }
  // public openxpcnModal(id) {
  //   let dialogRef = this.dialog.open(AddxpcnmodalComponent, {
  //     data:id,
  //     height: 'auto',
  //     width: '600px',
  //     autoFocus: false
  //   });
  //   dialogRef.afterClosed().subscribe(data => {
  //   });
  // }
  // public openManageGridModal(id) {
  //   let dialogRef = this.dialog.open(AddReportCasesComponent, {
  //     data:id,
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
 

}



