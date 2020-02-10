import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shared/services/alert.service';
import { MatDialog, PageEvent } from '@angular/material';
import {AddMOdelDestinationComponent} from './add-model-destination/add-model-destination.component';
@Component({
  selector: 'app-add-destination',
  templateUrl: './add-destination.component.html',
  styleUrls: ['./add-destination.component.scss']
})
export class AddDestinationComponent implements OnInit {
  tableList:any;
  tableLists: any;
  status = [{id:1 , value:"Active"} , {id:2 , value:"Inactive"}];
  filterToggle: boolean;
  // pageEvent: PageEvent;
  // public pageSize = 5;
  // public currentPage = 0;
  // public totalSize = 0;
  // public searchText: string;
  // public page: any;
  pageEvent: PageEvent;
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
  public searchText: string;
  public page: any;
  showEmpty: boolean = false;
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this customer?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status?';
  public cancelClicked: boolean = false;

  constructor(public dialog:MatDialog,public alertService:AlertService) { }

  ngOnInit() {
    this.tableList = [
      {destinationName:'Ambattur',state:'Tamil Nadu',location:"Industrial Estate, Ambattur" , city:"Chennai" , pincode:"600058" , latitude:"13.0892" , longitude:"80.1613" , status:1 , radius:"150 miles"},
      {destinationName:'Sector 135',state:'Uttar Pradesh',location:"Noida-Greater Noida Expy, Sector 135" , city:"Noida" , pincode:"201304" , latitude:"28.5160" , longitude:"77.3969" , status:0 , radius:"300 miles"},
      {destinationName:'Madhapur',state:'Telangana',location:"Uptown Cyberabad Building, B block, 4th floor, 100 Feet Rd, Ayyappa Society, Madhapur" , city:"Hyderabad" , pincode:"500081" , latitude:"17.4486" , longitude:"78.3908" , status:1 , radius:"20 meters"},
      {destinationName:'Powai',state:'Maharashtra',location:"Kensington Rear Exit Road, Hiranandani Gardens, Powai" , city:"Mumbai" , pincode:"400076" , latitude:"19.1197" , longitude:"72.9052° E" , status:1 , radius:"35 meters"},
      {destinationName:'Koregaon',state:'Maharashtra',location:"Godrej Millenium Condominium, 9 Koregaon Road" , city:"Pune" , pincode:"411001" , latitude:"18.536207" , longitude:"	73.893974" , status:1 , radius:"15 meters"},
    ];
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    this.totalSize = 10;
  }


  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
  }

  public openOriginDialog(customer) {
    let dialogRef = this.dialog.open(AddMOdelDestinationComponent, {
      data:customer,
      height: 'auto',
      width: '600px',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

}
