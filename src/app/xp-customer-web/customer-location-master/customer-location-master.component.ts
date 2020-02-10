import { Component, OnInit } from '@angular/core';
import { PageEvent, MatDialog } from '@angular/material';
import { AlertService } from '../../shared/services/alert.service';
import { AddLocationComponent } from './add-location/add-location.component';

@Component({
  selector: 'app-customer-location-master',
  templateUrl: './customer-location-master.component.html',
  styleUrls: ['./customer-location-master.component.scss']
})
export class CustomerLocationMasterComponent implements OnInit {

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
      {state:"Andhra Pradesh" , country:"India" , status:true , zone:"Central" , district:"Adilabad" , location:"Madhapur" , pincode:"500062" , address:"Plot no 101, Near YSR statue"},
      {state:"Maharashtra" , country:"India" , status:false , zone:"North 1" , district:"Mumbai" , location:"Ameerpet" , pincode:"500081" , address:"Plot no 52, Near KCR statue"},
      {state:"Tamilnadu" , country:"India" , status:true , zone:"East 1" , district:"Coimbatore" , location:"Begumpet" , pincode:"500057" , address:"Plot no 1, Near NTR statue"},
      {state:"Kerala" , country:"India" , status:false , zone:"West 1" , district:"Thiruvunanthapuram" , location:"Ranjarput" , pincode:"600124" , address:"Plot no 12, Near KBR park"},
      {state:"Karnataka" , country:"India" , status:true , zone:"West 2" , district:"Bangalore" , location:"Chinnaswamy" , pincode:"100036" , address:"Plot no 005, Near Madhapur"},
      {state:"Telangana" , country:"India" , status:true , zone:"North East 1" , district:"Rangareddy" , location:"Hawa Mahal" , pincode:"420255" , address:"Plot no 5, Near Neerus"},
      {state:"Delhi" , country:"India" , status:false , zone:"North East 2" , district:"New Delhi" , location:"Disgurbagh" , pincode:"502147" , address:"Plot no 5525, Inorbit mall road"},
      {state:"Assam" , country:"India" , status:true , zone:"South 1" , district:"Dispur" , location:"Amberpet" , pincode:"963214" , address:"Plot no 3303, Opposite Forum mall"},
      {state:"Haryana" , country:"India" , status:false , zone:"South 2" , district:"Chandigarh" , location:"L.B.Nagar" , pincode:"875478" , address:"Plot no 7, Community hall road"},
      {state:"Goa" , country:"India" , status:true , zone:"South 3" , district:"Panaji" , location:"Jublee Hills" , pincode:"202014" , address:"Plot no 558, Sikindar farm"},
    ];
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    this.totalSize = 10;
  }

  deleteGateway() {
    this.alertService.createAlert("Location deleted successfully",1);
  }

  public openLocationDialog(location) {
    let dialogRef = this.dialog.open(AddLocationComponent,{
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
