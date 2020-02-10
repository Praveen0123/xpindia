import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-by-customer',
  templateUrl: './by-customer.component.html',
  styleUrls: ['./by-customer.component.scss']
})
export class ByCustomerComponent implements OnInit {
  tableList:any;
  filterToggle:boolean;
  customertableList = [
    {orderId:"10120124" , serviceType:"FCL" , customerName:"HP" , bookingBranch:"Hyderabad" , origin:"Hyderabad" , destination:"Pune" , dateofPickup:"26/01/2020" , typeOfVehicle:"20 FT/2500 KGS" , vehicleNumber:"TS09ET5555" , xpcn:"120124574101" , xpts:"120121457842" , status:"Provisional"},
    {orderId:"10120123" , serviceType:"Bespoke" , customerName:"Sun Pharma" , bookingBranch:"Chennai" , origin:"Chennai" , destination:"Pune" , dateofPickup:"30/01/2020" , typeOfVehicle:"18 FT/3500 KGS" , vehicleNumber:"AP09ET5645" , xpcn:"136201201548" , xpts:"145421457842" , status:"Confirmed"},
    {orderId:"10120122" , serviceType:"Express" , customerName:"ONGC" , bookingBranch:"Mumbai" , origin:"Mumabi" , destination:"Pune" , dateofPickup:"22/01/2020" , typeOfVehicle:"25 FT/1800 KGS" , vehicleNumber:"TN09ET4568" , xpcn:"169641458784" , xpts:"120545457842" , status:"Unloadoing"},
    {orderId:"10120121" , serviceType:"Bespoke" , customerName:"DR Reddy’s Labs " , bookingBranch:"Pune" , origin:"Pune" , destination:"Hyderabad" , dateofPickup:"17/01/2020" , typeOfVehicle:"26 FT/1500 KGS" , vehicleNumber:"DL09ET1543" , xpcn:"130124579630" , xpts:"545121457842" , status:"Trans-Ship"},
    {orderId:"10120120" , serviceType:"Bespoke" , customerName:"NTPC" , bookingBranch:"Hyderabad" , origin:"Hyderabad" , destination:"Pune" , dateofPickup:"22/02/2020" , typeOfVehicle:"20 FT/2500 KGS" , vehicleNumber:"UP09ET4728" , xpcn:"196321478521" , xpts:"154851457842" , status:"Unloadoing"},
    {orderId:"10120125" , serviceType:"FCL" , customerName:"IOCL" , bookingBranch:"Chennai" , origin:"Chennai" , destination:"Pune" , dateofPickup:"26/01/2020" , typeOfVehicle:"25 FT/1500 KGS" , vehicleNumber:"TS09ET4582" , xpcn:"196301245789" , xpts:"120121557542" , status:"Destination"},
    {orderId:"10120126" , serviceType:"Express" , customerName:"Ranbaxy Laboratories" , bookingBranch:"Hyderabad" , origin:"Hyderabad" , destination:"Pune" , dateofPickup:"15/02/2020" , typeOfVehicle:"35 FT/2500 KGS" , vehicleNumber:"MH09ET48752" , xpcn:"196310212012" , xpts:"120121575842" , status:"Destination"},
    {orderId:"10120127" , serviceType:"Bespoke" , customerName:"Dell" , bookingBranch:"Pune" , origin:"Pune" , destination:"Hyderabad" , dateofPickup:"17/02/2020" , typeOfVehicle:"10 FT/2500 KGS" , vehicleNumber:"TS09E2454" , xpcn:"163014578032" , xpts:"120121457542" , status:"Transit"},
    {orderId:"10120128" , serviceType:"FCL" , customerName:"Cipla" , bookingBranch:"Hyderabad" , origin:"Hyderabad" , destination:"Pune" , dateofPickup:"26/01/2020" , typeOfVehicle:"10 FT/2500 KGS" , vehicleNumber:"TS10ET5415" , xpcn:"196301012360" , xpts:"157521457842" , status:"Unloadoing"},
    {orderId:"10120129" , serviceType:"FCL" , customerName:"Mankind Pharma" , bookingBranch:"Delhi" , origin:"Delhi" , destination:"Pune" , dateofPickup:"26/02/2020" , typeOfVehicle:"10 FT/1500 KGS" , vehicleNumber:"AP09ET5555" , xpcn:"100121241010" , xpts:"557121457842" , status:"Provisional"}
  ];

  constructor() { }

  ngOnInit() {
    this.tableList = this.customertableList;
  }

}
