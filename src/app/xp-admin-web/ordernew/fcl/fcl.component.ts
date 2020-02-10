import { Component, OnInit } from '@angular/core';
// import { single} from '../pie.data';
import { customerPie,secondpieinorder} from '../main-customer-pie.data';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import {AddxpcnmodalComponent} from './addxpcnmodal/addxpcnmodal.component'

import { PageEvent, MatDialog } from '@angular/material';
import {AddManageGridComponent} from './add-manage-grid/add-manage-grid.component'

@Component({
  selector: 'app-fcl',
  templateUrl: './fcl.component.html',
  styleUrls: ['./fcl.component.scss']
})
export class FclComponent implements OnInit {

  Status = [{id:1 , value:"Provisional"} , {id:2 , value:"Confirmed"}, {id:2 , value:"Unloadoing"},{id:3 , value:'Trans-Ship'},{id:4 , value:'Destination'}];
  public secondpieinorder:any[];
  public customerPie: any[];
  public multi: any[];
  // public showLegend = true;
  public showLegend = false;
  public gradient = true;
  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  }; 
  public colorScheme2 = {
    domain: ['#FF7E00', '#008000', '#378D3B', '#0096A6', '#F47B00', '#606060']
  }; 
  public showLabels = true;
  public explodeSlices = false;
  public doughnut = false;
  public settings: Settings;

  constructor(public dialog:MatDialog,public appSettings:AppSettings) {
    this.settings = this.appSettings.settings; 
    Object.assign(this, {customerPie,secondpieinorder}); 
  }
  
  public onSelect(event) {
    console.log(event);
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
  filterToggle2:boolean;
  CustomDate:boolean =false;
  customertableList = [
    {newxpcn:'2',driverNumber:'9875426584',driverName:'Suresh',etp:'1400H',ffv:'Shopkart',departureTime:'1500H',placementTime:'600H',zone:'North-1',bookingid:'BA/MA/2020/01/06',orderId:"10120124" , serviceType:"FCL" , customerName:"HP" , bookingBranch:"Hyderabad" , origin:"Hyderabad" , destination:"Pune" , dateofPickup:"26/01/2020" , typeOfVehicle:"20 FT/2500 KGS" , vehicleNumber:"TS09ET5555" , xpcn:"120124574101" , xpts:"120121457842" , status:"Provisional"},
    {newxpcn:'4',driverNumber:'8875426584',driverName:'Ramesh',etp:'1200H',ffv:'A10networks',departureTime:'1600H',placementTime:'800H',zone:'South-2',bookingid:'BA/MA/2020/03/06',orderId:"10120123" , serviceType:"Bespoke" , customerName:"Sun Pharma" , bookingBranch:"Chennai" , origin:"Chennai" , destination:"Pune" , dateofPickup:"30/01/2020" , typeOfVehicle:"18 FT/3500 KGS" , vehicleNumber:"AP09ET5645" , xpcn:"136201201548" , xpts:"145421457842" , status:"Confirmed"},
    {newxpcn:'1',driverNumber:'9775426584',driverName:'Kamal',etp:'400H',ffv:'A1webserver',departureTime:'500H',placementTime:'1600H',zone:'East-1',bookingid:'BA/MA/2020/05/06',orderId:"10120122" , serviceType:"Express" , customerName:"ONGC" , bookingBranch:"Mumbai" , origin:"Mumabi" , destination:"Pune" , dateofPickup:"22/01/2020" , typeOfVehicle:"25 FT/1800 KGS" , vehicleNumber:"TN09ET4568" , xpcn:"169641458784" , xpts:"120545457842" , status:"Unloadoing"},
    {newxpcn:'2',driverNumber:'9575426584',driverName:'Kuldeep',etp:'1500H',ffv:'A3malnet',departureTime:'1600H',placementTime:'1100H',zone:'West-1',bookingid:'BA/MA/2020/07/06',orderId:"10120121" , serviceType:"Bespoke" , customerName:"DR Reddy’s Labs " , bookingBranch:"Pune" , origin:"Pune" , destination:"Hyderabad" , dateofPickup:"17/01/2020" , typeOfVehicle:"26 FT/1500 KGS" , vehicleNumber:"DL09ET1543" , xpcn:"130124579630" , xpts:"545121457842" , status:"Trans-Ship"},
    {newxpcn:'3',driverNumber:'9175426584',driverName:'Rajbeer',etp:'1600H',ffv:'A-shop',departureTime:'1200H',placementTime:'700H',zone:'North-1',bookingid:'BA/MA/2020/09/06',orderId:"10120120" , serviceType:"Bespoke" , customerName:"NTPC" , bookingBranch:"Hyderabad" , origin:"Hyderabad" , destination:"Pune" , dateofPickup:"22/02/2020" , typeOfVehicle:"20 FT/2500 KGS" , vehicleNumber:"UP09ET4728" , xpcn:"196321478521" , xpts:"154851457842" , status:"Unloadoing"},
    {newxpcn:'4',driverNumber:'9275426584',driverName:'Sukhi',etp:'400H',ffv:'Abledesign',departureTime:'800H',placementTime:'500H',zone:'North-2',bookingid:'BA/MA/2020/01/06',orderId:"10120125" , serviceType:"FCL" , customerName:"IOCL" , bookingBranch:"Chennai" , origin:"Chennai" , destination:"Pune" , dateofPickup:"26/01/2020" , typeOfVehicle:"25 FT/1500 KGS" , vehicleNumber:"TS09ET4582" , xpcn:"196301245789" , xpts:"120121557542" , status:"Destination"},
    {newxpcn:'5',driverNumber:'9595426584',driverName:'Ramu',etp:'500H',ffv:'Abisource',departureTime:'1900H',placementTime:'1700H',zone:'South-1',bookingid:'BA/MA/2020/02/06',orderId:"10120126" , serviceType:"Express" , customerName:"Ranbaxy Laboratories" , bookingBranch:"Hyderabad" , origin:"Hyderabad" , destination:"Pune" , dateofPickup:"15/02/2020" , typeOfVehicle:"35 FT/2500 KGS" , vehicleNumber:"MH09ET48752" , xpcn:"196310212012" , xpts:"120121575842" , status:"Destination"},
    {newxpcn:'6',driverNumber:'9455426584',driverName:'Raju',etp:'1500H',ffv:'K2sxs',departureTime:'2000H',placementTime:'1800H',zone:'West-1',bookingid:'BA/MA/2020/05/06',orderId:"10120127" , serviceType:"Bespoke" , customerName:"Dell" , bookingBranch:"Pune" , origin:"Pune" , destination:"Hyderabad" , dateofPickup:"17/02/2020" , typeOfVehicle:"10 FT/2500 KGS" , vehicleNumber:"TS09E2454" , xpcn:"163014578032" , xpts:"120121457542" , status:"Transit"},
    {newxpcn:'7',driverNumber:'9985426584',driverName:'Diljit',etp:'1600H',ffv:'Kaffeine',departureTime:'2100H',placementTime:'1500H',zone:'South-1',bookingid:'BA/MA/2020/04/06',orderId:"10120128" , serviceType:"FCL" , customerName:"Cipla" , bookingBranch:"Hyderabad" , origin:"Hyderabad" , destination:"Pune" , dateofPickup:"26/01/2020" , typeOfVehicle:"10 FT/2500 KGS" , vehicleNumber:"TS10ET5415" , xpcn:"196301012360" , xpts:"157521457842" , status:"Unloadoing"},
    {newxpcn:'2',driverNumber:'9235426584',driverName:'Manpreet',etp:'1400H',ffv:'K-iwi',departureTime:'1500H',placementTime:'1300H',zone:'North-1',bookingid:'BA/MA/2020/01/06',orderId:"10120129" , serviceType:"FCL" , customerName:"Mankind Pharma" , bookingBranch:"Delhi" , origin:"Delhi" , destination:"Pune" , dateofPickup:"26/02/2020" , typeOfVehicle:"10 FT/1500 KGS" , vehicleNumber:"AP09ET5555" , xpcn:"100121241010" , xpts:"557121457842" , status:"Provisional"}
  ];
 

  ngOnInit() {
    this.tableList = this.customertableList;
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    this.totalSize = 10;
  }
  public openxpcnModal(id) {
    let dialogRef = this.dialog.open(AddxpcnmodalComponent, {
      data:id,
      height: 'auto',
      width: '600px',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
  public openManageGridModal(id) {
    let dialogRef = this.dialog.open(AddManageGridComponent, {
      data:id,
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
  customDateFilter(){
    this.CustomDate = !this.CustomDate
  }

}
