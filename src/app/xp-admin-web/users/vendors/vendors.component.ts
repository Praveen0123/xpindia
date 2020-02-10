import { Component, OnInit } from '@angular/core';
import { PageEvent, MatDialog } from '@angular/material';
import { AlertService } from '../../../shared/services/alert.service';
import { AddVendorComponent} from './add-vendor/add-vendor.component';
import { VehicleDetailsComponent} from './vehicle-details/vehicle-details.component';
// import {AddZoneComponent} from './add-zone/add-zone.component';
import {AddFCLRatesComponent} from './add-fclrates/add-fclrates.component';
// import {AddLocalRatesComponent} from './add-local-rates/add-local-rates.component';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss']
})
export class VendorsComponent implements OnInit {
  tableList:any;
  tableLists: any;
  status = [{id:1 , value:"Active"} , {id:2 , value:"Inactive"}];
  filterToggle: boolean;
  pageEvent: PageEvent;
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
  public searchText: string;
  public page: any;
  showEmpty: boolean = false;
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this vendor ?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status ?';
  public cancelClicked: boolean = false;

  constructor(public dialog:MatDialog,public alertService:AlertService) { }

  ngOnInit() {
    this.tableList = [
      {vendorName:"Shopkart" , name:"David Malhotra" , email:"david@..." , phone:"9698785478" , permissions:"0/120" , is_verified:0 , status:1 , address:"Plot no 101, Near YSR statue" , country:"India" , state:"Telangana" , city:"Hyderabad" , postalCode:"500081" , numberofvehicles:4,drivers:2,zone:'2/19',gateway:'60',lanes:'10',monthly:'4'},
      {vendorName:"A10networks" , name:"Rahul Batra" , email:"rahul@..." , phone:"7854525259" , permissions:"120/120" , is_verified:1 , status:1 , address:"Plot no 52, Near KCR statue" , country:"India" , state:"Maharashtra" , city:"Mumbai" , postalCode:"230532" , numberofvehicles:7,drivers:10,zone:'1/19',gateway:'70',lanes:'9',monthly:'5'},
      {vendorName:"A1webserver" , name:"Ramesh Lal" , email:"ramesh@..." , phone:"8956471203" , permissions:"120/120" , is_verified:1 , status:1 , address:"Plot no 1, Near NTR statue" , country:"United States" , state:"New York" , city:"Yonkers" , postalCode:"10001" , numberofvehicles:5,drivers:7,zone:'4/19',gateway:'85',lanes:'8',monthly:'6'},
      {vendorName:"A3malnet" , name:"Bikash Das" , email:"aman@..." , phone:"9969658741" , permissions:"0/120" , is_verified:0 , status:1 , address:"Plot no 12, Near KBR park" , country:"India" , state:"Punjab" , city:"Chandigarh" , postalCode:"160003" , numberofvehicles:15,drivers:8,zone:'3/19',gateway:'75',lanes:'6',monthly:'5'},
      {vendorName:"A-shop" , name:"Bhagat Chaudhary" , email:"bhagat@..." , phone:"6987412630" , permissions:"120/120" , is_verified:1 , status:1 , address:"Plot no 005, Near Madhapur" , country:"United States" , state:"California" , city:"Los Angeles" , postalCode:"90001" , numberofvehicles:20,drivers:12,zone:'2/19',gateway:'88',lanes:'8',monthly:'3'},
      {vendorName:"Abledesign" , name:"Rajan Suwal" , email:"rajan@..." , phone:"9060504789" , permissions:"120/120" , is_verified:1 , status:1 , address:"Plot no 5, Near Neerus" , country:"India" , state:"Rajasthan" , city:"Jaipur" , postalCode:"302005" , numberofvehicles:5,drivers:7,zone:'1/19',gateway:'78',lanes:'5',monthly:'2'},
      {vendorName:"Abisource" , name:"Jasveer Singh" , email:"arpit@..." , phone:"6954102365" , permissions:"0/120" , is_verified:0 , status:1 , address:"Plot no 5525, Inorbit mall road" , country:"Germany" , state:"Bavaria" , city:"Munich" , postalCode:"80337" , numberofvehicles:8,drivers:4,zone:'2/19',gateway:'87',lanes:'7',monthly:'4'},
      {vendorName:"K-iwi" , name:"Navin Malik" , email:"navin@..." , phone:"7575898956" , permissions:"0/120" , is_verified:0 , status:1 , address:"Plot no 3303, Opposite Forum mall" , country:"United States" , state:"New Jersey" , city:"Jersey City" , postalCode:"07101" , numberofvehicles:9,drivers:3,zone:'3/19',gateway:'98',lanes:'6',monthly:'7'},
      {vendorName:"K2sxs" , name:"Varun Dhawan" , email:"varun@..." , phone:"9562147852" , permissions:"120/120" , is_verified:1 , status:1 , address:"Plot no 7, Community hall road" , country:"India" , state:"Tamil Nadu" , city:"Chennai" , postalCode:"600001" , numberofvehicles:10,drivers:11,zone:'1/19',gateway:'83',lanes:'13',monthly:'8'},
      {vendorName:"Kaffeine" , name:"Pranab Ray" , email:"pranab@..." , phone:"8858478521" , permissions:"0/120" , is_verified:0 , status:1 , address:"Plot no 558, Sikindar farm" , country:"France" , state:"Paris" , city:"Marseille" , postalCode:"75000" , numberofvehicles:12,drivers:6,zone:'3/19',gateway:'66',lanes:'8',monthly:'4'},
      {vendorName:"Pacific Software" , name:"Nikhil Kumar" , email:"nikhil@..." , phone:"6365478547" , permissions:"120/120" , is_verified:1 , status:1 , address:"Plot no 114, Madailand" , country:"India" , state:"Kerala" , city:"Thiruvananthapuram" , postalCode:"605038" , numberofvehicles:18,drivers:5,zone:'2/19',gateway:'59',lanes:'11',monthly:'3'},
    ];
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    this.totalSize = 10    
  }

  public openVendorDialog(customer) {
    let dialogRef = this.dialog.open(AddVendorComponent, {
      data:customer,
      height: 'auto',
      width: '600px',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
  // public openZoneModal(customer) {
  //   let dialogRef = this.dialog.open(AddZoneComponent, {
  //     data:customer,
  //     height: 'auto',
  //     width: '600px',
  //     autoFocus: false
  //   });
  //   dialogRef.afterClosed().subscribe(data => {
  //   });
  // }
  public openfclrates(customer) {
    let dialogRef = this.dialog.open(AddFCLRatesComponent, {
      data:customer,
      height: 'auto',
      width: '600px',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
  // public openlocalratesModal(customer) {
  //   let dialogRef = this.dialog.open(AddLocalRatesComponent, {
  //     data:customer,
  //     height: 'auto',
  //     width: '600px',
  //     autoFocus: false
  //   });
  //   dialogRef.afterClosed().subscribe(data => {
  //   });
  // }

  deleteVendor() {
    this.alertService.createAlert("Vendor deleted successfully",1)
  }

  openVehiclesModal(vehicleDetails) {
    let dialogRef = this.dialog.open(VehicleDetailsComponent,{
      data:vehicleDetails,
      height:'auto',
      width:'600px',
      autoFocus:false
    });
    dialogRef.afterClosed().subscribe(data => {

    });
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
  }



}






