import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageEvent, MatDialog } from '@angular/material';
import { Location } from '@angular/common';
import { XpcnDocumentsDialogComponent } from '../orders-main-screen/xpcn-documents-dialog/xpcn-documents-dialog.component';

@Component({
  selector: 'app-orders-internal-screen',
  templateUrl: './orders-internal-screen.component.html',
  styleUrls: ['./orders-internal-screen.component.scss']
})
export class OrdersInternalScreenComponent implements OnInit {
  
  constructor(public dialog:MatDialog,public route:ActivatedRoute,private location:Location) { }
  name:any;
  filterToggle: boolean;
  tableList:any;
  customertableList = [
    {orderId:"10120124" , serviceType:"FCL" , customerName:"HP" , bookingBranch:"Hyderabad" , origin:"Hyderabad" , destination:"Pune" , dateofPickup:"26/01/2020" , typeOfVehicle:"20 FT/2500 KGS" , vehicleNumber:"TS09ET5555" , xpcn:"1" , xpts:"120121457842" , status:"Provisional"},
    {orderId:"10120123" , serviceType:"Bespoke" , customerName:"Sun Pharma" , bookingBranch:"Chennai" , origin:"Chennai" , destination:"Pune" , dateofPickup:"30/01/2020" , typeOfVehicle:"18 FT/3500 KGS" , vehicleNumber:"AP09ET5645" , xpcn:"1" , xpts:"145421457842" , status:"Confirmed"},
    {orderId:"10120122" , serviceType:"Express" , customerName:"ONGC" , bookingBranch:"Mumbai" , origin:"Mumabi" , destination:"Pune" , dateofPickup:"22/01/2020" , typeOfVehicle:"25 FT/1800 KGS" , vehicleNumber:"TN09ET4568" , xpcn:"1" , xpts:"120545457842" , status:"Unloadoing"},
    {orderId:"10120121" , serviceType:"Bespoke" , customerName:"DR Reddy’s Labs " , bookingBranch:"Pune" , origin:"Pune" , destination:"Hyderabad" , dateofPickup:"17/01/2020" , typeOfVehicle:"26 FT/1500 KGS" , vehicleNumber:"DL09ET1543" , xpcn:"1" , xpts:"545121457842" , status:"Trans-Ship"},
    {orderId:"10120120" , serviceType:"Bespoke" , customerName:"NTPC" , bookingBranch:"Hyderabad" , origin:"Hyderabad" , destination:"Pune" , dateofPickup:"22/02/2020" , typeOfVehicle:"20 FT/2500 KGS" , vehicleNumber:"UP09ET4728" , xpcn:"1" , xpts:"154851457842" , status:"Unloadoing"},
    {orderId:"10120125" , serviceType:"FCL" , customerName:"IOCL" , bookingBranch:"Chennai" , origin:"Chennai" , destination:"Pune" , dateofPickup:"26/01/2020" , typeOfVehicle:"25 FT/1500 KGS" , vehicleNumber:"TS09ET4582" , xpcn:"1" , xpts:"120121557542" , status:"Destination"},
    {orderId:"10120126" , serviceType:"Express" , customerName:"Ranbaxy Laboratories" , bookingBranch:"Hyderabad" , origin:"Hyderabad" , destination:"Pune" , dateofPickup:"15/02/2020" , typeOfVehicle:"35 FT/2500 KGS" , vehicleNumber:"MH09ET48752" , xpcn:"1" , xpts:"120121575842" , status:"Destination"},
    {orderId:"10120127" , serviceType:"Bespoke" , customerName:"Dell" , bookingBranch:"Pune" , origin:"Pune" , destination:"Hyderabad" , dateofPickup:"17/02/2020" , typeOfVehicle:"10 FT/2500 KGS" , vehicleNumber:"TS09E2454" , xpcn:"1" , xpts:"120121457542" , status:"Transit"},
    {orderId:"10120128" , serviceType:"FCL" , customerName:"Cipla" , bookingBranch:"Hyderabad" , origin:"Hyderabad" , destination:"Pune" , dateofPickup:"26/01/2020" , typeOfVehicle:"10 FT/2500 KGS" , vehicleNumber:"TS10ET5415" , xpcn:"1" , xpts:"157521457842" , status:"Unloadoing"},
    {orderId:"10120129" , serviceType:"FCL" , customerName:"Mankind Pharma" , bookingBranch:"Delhi" , origin:"Delhi" , destination:"Pune" , dateofPickup:"26/02/2020" , typeOfVehicle:"10 FT/1500 KGS" , vehicleNumber:"AP09ET5555" , xpcn:"1" , xpts:"557121457842" , status:"Provisional"}
  ];
  zonetableList = [
    {orderId:"45720124" , serviceType:"Bespoke" , customerName:"HP" , bookingBranch:"Karnool" , origin:"Karnool" , destination:"Pune" , dateofPickup:"22/01/2020" , typeOfVehicle:"25 FT/2500 KGS" , vehicleNumber:"AP09ET5255" , xpcn:"1" , xpts:"120121457842" , status:"Confirmed"},
    {orderId:"56720123" , serviceType:"Express" , customerName:"Sun Pharma" , bookingBranch:"Delhi" , origin:"Delhi" , destination:"Chennai" , dateofPickup:"24/01/2020" , typeOfVehicle:"20 FT/3500 KGS" , vehicleNumber:"TS09ET5945" , xpcn:"1" , xpts:"145421457842" , status:"Provisional"},
    {orderId:"67220122" , serviceType:"FCL" , customerName:"ONGC" , bookingBranch:"Karnataka" , origin:"Karnataka" , destination:"Mumabi" , dateofPickup:"26/01/2020" , typeOfVehicle:"32 FT/1200 KGS" , vehicleNumber:"AP09ET6568" , xpcn:"1" , xpts:"120545457842" , status:"Trans-Ship"},
    {orderId:"78920121" , serviceType:"Bespoke" , customerName:" DR Reddy’s Labs " , bookingBranch:"Viajayawada" , origin:"Viajayawada" , destination:"Pune" , dateofPickup:"19/01/2020" , typeOfVehicle:"40 FT/1500 KGS" , vehicleNumber:"MH09ET1743" , xpcn:"1" , xpts:"545121457842" , status:"Unloadoing"},
    {orderId:"85220120" , serviceType:"Bespoke" , customerName:"NTPC" , bookingBranch:"Banglore" , origin:"Banglore" , destination:"Hyderabad" , dateofPickup:"22/02/2020" , typeOfVehicle:"20 FT/1500 KGS" , vehicleNumber:"UP09ET3728" , xpcn:"1" , xpts:"154851457842" , status:"Destination"},
    {orderId:"85320125" , serviceType:"Express" , customerName:"IOCL" , bookingBranch:"Chennai" , origin:"Chennai" , destination:"Delhi" , dateofPickup:"29/01/2020" , typeOfVehicle:"25 FT/1600 KGS" , vehicleNumber:"DL09ET4562" , xpcn:"1" , xpts:"120121557542" , status:"Unloadoing"},
    {orderId:"85420126" , serviceType:"Express" , customerName:"Ranbaxy Laboratories" , bookingBranch:"Guntur" , origin:"Guntur" , destination:"Hyderabad" , dateofPickup:"30/02/2020" , typeOfVehicle:"35 FT/2400 KGS" , vehicleNumber:"MH09ET48252" , xpcn:"1" , xpts:"120121575842" , status:"Destination"},
    {orderId:"85620127" , serviceType:"FCL" , customerName:"Dell" , bookingBranch:"Gujarath" , origin:"Gujarath" , destination:"Hyderabad" , dateofPickup:"18/02/2020" , typeOfVehicle:"15 FT/2300 KGS" , vehicleNumber:"TS09E2434" , xpcn:"1" , xpts:"120121457542" , status:"Transit"},
    {orderId:"85720128" , serviceType:"FCL" , customerName:"Cipla" , bookingBranch:"Hyderabad" , origin:"Hyderabad" , destination:"Pune" , dateofPickup:"26/01/2020" , typeOfVehicle:"15 FT/2200 KGS" , vehicleNumber:"AP10ET5405" , xpcn:"1" , xpts:"157521457842" , status:"Unloadoing"},
    {orderId:"85820129" , serviceType:"Bespoke" , customerName:"Mankind Pharma" , bookingBranch:"Delhi" , origin:"Delhi" , destination:"Pune" , dateofPickup:"27/02/2020" , typeOfVehicle:"20 FT/1700 KGS" , vehicleNumber:"TS09ET5655" , xpcn:"1" , xpts:"557121457842" , status:"Confirmed"}
  ];
  statustableList = [
    {orderId:"21120124" , serviceType:"FCL" , customerName:"HP" , bookingBranch:"Pune" , origin:"Pune" , destination:"Hyderabad" , dateofPickup:"21/01/2020" , typeOfVehicle:"20 FT/2500 KGS" , vehicleNumber:"TS09ET5655" , xpcn:"1" , xpts:"120121457842" , status:"Confirmed"},
    {orderId:"21220123" , serviceType:"FCL" , customerName:"Sun Pharma" , bookingBranch:"Hyderabad" , origin:"Hyderabad" , destination:"Pune" , dateofPickup:"22/01/2020" , typeOfVehicle:"18 FT/3500 KGS" , vehicleNumber:"AP09ET3645" , xpcn:"1" , xpts:"145421457842" , status:"Provisional"},
    {orderId:"21320122" , serviceType:"Bespoke" , customerName:"ONGC" , bookingBranch:"Mumbai" , origin:"Mumabi" , destination:"Pune" , dateofPickup:"23/01/2020" , typeOfVehicle:"25 FT/1800 KGS" , vehicleNumber:"UP09ET5568" , xpcn:"1" , xpts:"120545457842" , status:"Destination"},
    {orderId:"21420121" , serviceType:"Bespoke" , customerName:"DR Reddy’s Labs " , bookingBranch:"Pune" , origin:"Pune" , destination:"Hyderabad" , dateofPickup:"24/01/2020" , typeOfVehicle:"26 FT/1500 KGS" , vehicleNumber:"AP09FT1543" , xpcn:"1" , xpts:"545121457842" , status:"Trans-Ship"},
    {orderId:"21520120" , serviceType:"Express" , customerName:"NTPC" , bookingBranch:"Delhi" , origin:"Delhi" , destination:"Vijayawada" , dateofPickup:"25/02/2020" , typeOfVehicle:"20 FT/2500 KGS" , vehicleNumber:"UP09GT4728" , xpcn:"1" , xpts:"154851457842" , status:"Unloadoing"},
    {orderId:"21620125" , serviceType:"FCL" , customerName:"IOCL " , bookingBranch:"Chennai" , origin:"Chennai" , destination:"Karnool" , dateofPickup:"26/01/2020" , typeOfVehicle:"25 FT/1500 KGS" , vehicleNumber:"DL09BA4582" , xpcn:"1" , xpts:"120121557542" , status:"Destination"},
    {orderId:"21720126" , serviceType:"Express" , customerName:"Ranbaxy Laboratories" , bookingBranch:"Hyderabad" , origin:"Hyderabad" , destination:"Pune" , dateofPickup:"27/02/2020" , typeOfVehicle:"35 FT/2500 KGS" , vehicleNumber:"MH09RU48752" , xpcn:"1" , xpts:"120121575842" , status:"Unloadoing"},
    {orderId:"21820127" , serviceType:"Bespoke" , customerName:"Dell" , bookingBranch:"Pune" , origin:"Pune" , destination:"Hyderabad" , dateofPickup:"28/02/2020" , typeOfVehicle:"10 FT/2500 KGS" , vehicleNumber:"DL09E2454" , xpcn:"1" , xpts:"120121457542" , status:"Transit"},
    {orderId:"21920128" , serviceType:"Bespoke" , customerName:"Cipla" , bookingBranch:"Hyderabad" , origin:"Hyderabad" , destination:"Pune" , dateofPickup:"24/01/2020" , typeOfVehicle:"10 FT/2500 KGS" , vehicleNumber:"AP10ET5415" , xpcn:"1" , xpts:"157521457842" , status:"Unloadoing"},
    {orderId:"22020129" , serviceType:"Express" , customerName:"Mankind Pharma" , bookingBranch:"Vijayawada" , origin:"Vijayawada" , destination:"Pune" , dateofPickup:"22/02/2020" , typeOfVehicle:"10 FT/1500 KGS" , vehicleNumber:"TS09ET5555" , xpcn:"1" , xpts:"557121457842" , status:"Confirmed"}
    ]
  status = [{id:1 , value:"Provisional"} , {id:2 , value:"Confirmed"} , {id:3 , value:"Unloadoing"} , {id:4 , value:"Trans-Ship"} , {id:5 , value:"Destination"} , {id:6 , value:"Transit"}]
  
  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name');
    console.log(this.name);
    if(this.name == "customer") {
      this.tableList = this.customertableList;
    }
    if(this.name == "zone") {
      this.tableList = this.zonetableList;
    }
    if(this.name == "status") {
      this.tableList = this.statustableList;
    }
  }
  
  goBack() {
    this.location.back();
  }
  
  public openCustomerDialog(customer) {
    let dialogRef = this.dialog.open(XpcnDocumentsDialogComponent, {
      data:customer,
      height: 'auto',
      width: '600px',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
  
}
