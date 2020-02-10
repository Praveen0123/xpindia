import { Component, OnInit } from '@angular/core';
import { PageEvent, MatDialog } from '@angular/material';
import { AlertService } from '../../../shared/services/alert.service';
import {AddCustomerDestinationComponent} from './add-customer-destination/add-customer-destination.component'
// import { AddLocationComponent } from './add-location/add-location.component';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements OnInit {

  tableList:any;
  tableLists: any;
  status = [{id:1 , value:"Active"} , {id:2 , value:"Inactive"}];
  countries=[{id:1 , value:"India"} , {id:2 , value:"China"}]
  filterToggle: boolean;
  pageEvent: PageEvent;
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
  public searchText: string;
  public page: any;
  showEmpty: boolean = false;
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this location?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status?';
  public cancelClicked: boolean = false;

  constructor(public dialog:MatDialog,public alertService:AlertService) { }

  ngOnInit() {
    this.tableList = [
      {radius:'20',longitude:'78.391487',latitude:'17.448294',state:"Andhra Pradesh" , country:"India" , status:true , zone:"South 1" , district:"Adilabad" , location:"Madhapur" , pincode:"500062" , address:"Plot no 101, Near YSR statue"},
      {radius:'50',longitude:'72.877745',latitude:'19.076844',state:"Maharashtra" , country:"India" , status:false , zone:"North 1" , district:"Mumbai" , location:"Ameerpet" , pincode:"500081" , address:"Plot no 52, Near KCR statue"},
      {radius:'20',longitude:'78.656987',latitude:'11.127165',state:"Tamilnadu" , country:"India" , status:true , zone:"East 1" , district:"Coimbatore" , location:"Begumpet" , pincode:"500057" , address:"Plot no 1, Near NTR statue"},
      {radius:'55',longitude:'76.936654',latitude:'8.5241',state:"Kerala" , country:"India" , status:false , zone:"West 1" , district:"Thiruvunanthapuram" , location:"Ranjarput" , pincode:"600124" , address:"Plot no 12, Near KBR park"},
      {radius:'25',longitude:'75.713965',latitude:'15.317369',state:"Karnataka" , country:"India" , status:true , zone:"West 2" , district:"Bangalore" , location:"Chinnaswamy" , pincode:"100036" , address:"Plot no 005, Near Madhapur"},
      {radius:'35',longitude:'77.866545',latitude:'17.3891',state:"Telangana" , country:"India" , status:true , zone:"North East 1" , district:"Rangareddy" , location:"Hawa Mahal" , pincode:"420255" , address:"Plot no 5, Near Neerus"},
      {radius:'30',longitude:'77.102545',latitude:'28.704125',state:"Delhi" , country:"India" , status:false , zone:"North East 2" , district:"New Delhi" , location:"Disgurbagh" , pincode:"502147" , address:"Plot no 5525, Inorbit mall road"},
      {radius:'40',longitude:'92.937654',latitude:'26.200621',state:"Assam" , country:"India" , status:true , zone:"South 1" , district:"Dispur" , location:"Amberpet" , pincode:"963214" , address:"Plot no 3303, Opposite Forum mall"},
      {radius:'45',longitude:'76.085645',latitude:'29.058845',state:"Haryana" , country:"India" , status:false , zone:"South 2" , district:"Chandigarh" , location:"L.B.Nagar" , pincode:"875478" , address:"Plot no 7, Community hall road"},
      {radius:'30',longitude:'74.124540',latitude:'15.299834',state:"Goa" , country:"India" , status:true , zone:"South 3" , district:"Panaji" , location:"Jublee Hills" , pincode:"202014" , address:"Plot no 558, Sikindar farm"},
    ];
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    this.totalSize = 10;
  }

  deleteDestination() {
    this.alertService.createAlert("Destination deleted successfully",1);
  }

  public openDestinationDialog(location) {
    let dialogRef = this.dialog.open(AddCustomerDestinationComponent,{
      data:location,
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
