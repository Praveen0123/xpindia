
import { Component, OnInit } from '@angular/core';
import { PageEvent, MatDialog } from '@angular/material';
import { AlertService } from '../../../../shared/services/alert.service';
import {AddLocationComponent} from './add-location/add-location.component';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
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
      {state:"Andhra Pradesh" , country:"India" , status:true , zone:"South-1" , district:"Adilabad" , location:"Madhapur" , pincode:"9" ,gateway:'Adilabad-1',hub:'Adilabad-H1'},
      {state:"Maharashtra" , country:"India" , status:false , zone:"South-2" , district:"Mumbai" , location:"Boriavli" , pincode:"5",gateway:'Mumbai-2',hub:'Mumbai-H2'},
      {state:"Tamilnadu" , country:"India" , status:true , zone:"South-3" , district:"Coimbatore" , location:"Begumpet" , pincode:"10",gateway:'Coimbatore-3',hub:'Coimbatore-H3'},
      {state:"Kerala" , country:"India" , status:false , zone:"South-5" , district:"Thiruvunanthapuram" , location:"Ranjarput" , pincode:"7",gateway:'Thiruvunanthapuram-1',hub:'Thiruvunanthapuram-H1'},
      {state:"Karnataka" , country:"India" , status:true , zone:"South-4" , district:"Bangalore" , location:"Chinnaswamy" , pincode:"4",gateway:'Bangalore-2',hub:'Bangalore-H2'},
      {state:"Telangana" , country:"India" , status:true , zone:"South-6" , district:"Rangareddy" , location:"Hawa Mahal" , pincode:"6",gateway:'Rangareddy-5',hub:'Rangareddy-H3'},
      {state:"Delhi" , country:"India" , status:false , zone:"North-1" , district:"New Delhi" , location:"Disgurbagh" , pincode:"5",gateway:'New Delhi-5',hub:'New Delhi-2'},
      {state:"Assam" , country:"India" , status:true , zone:"East-2" , district:"Dispur" , location:"Amberpet" , pincode:"3",gateway:'Dispur-2',hub:'Dispur-2'},
      {state:"Haryana" , country:"India" , status:false , zone:"North-1" , district:"Chandigarh" , location:"L.B.Nagar" , pincode:"7",gateway:'Chandigarh-3',hub:'Chandigarh-1'},
      {state:"Goa" , country:"India" , status:true , zone:"W-2" , district:"Panaji" , location:"Jublee Hills" , pincode:"9",gateway:'Panaji-1',hub:'Panaji-3'},
    ];
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    this.totalSize = 10;
  }

  deleteAttorney() {
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
