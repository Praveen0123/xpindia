import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shared/services/alert.service';
import { PageEvent, MatDialog } from '@angular/material';
import { AddOriginCustomerDashboardComponent } from './add-origin-customer-dashboard/add-origin-customer-dashboard.component';

@Component({
  selector: 'app-origins',
  templateUrl: './origins.component.html',
  styleUrls: ['./origins.component.scss']
})
export class OriginsComponent implements OnInit {

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
  public popoverMessage: string = 'Are you sure you want to delete this ?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status?';
  public cancelClicked: boolean = false;

  constructor(public dialog:MatDialog,public alertService:AlertService) { }

  ngOnInit() {
    this.tableList = [
      {originName:'Madhapur',country:'India',state:'Telangana',address2:'',location:"Uptown Cyberabad Building, B block, 4th floor 100 Feet Rd, Ayyappa Society, Madhapur" , city:"Hyderabad" , pincode:"500081" , latitude:"17.4486" , longitude:"78.3908" , status:1 , radius:"20 meters"},
      {originName:'Koregaon',country:'India',state:'Maharashtra',address2:'',location:"Godrej Millenium Condominium, 9 Koregaon Road" , city:"Pune" , pincode:"411001" , latitude:"18.536207" , longitude:"	73.893974" , status:1 , radius:"15 meters"},
      {originName:'Sector 135',country:'India',state:'Uttar Pradesh',address2:'',location:"Noida-Greater Noida Expy, Sector 135" , city:"Noida" , pincode:"201304" , latitude:"28.5160" , longitude:"77.3969" , status:0 , radius:"30 meters"},
      {originName:'Powai',country:'India',state:'Maharashtra',address2:'',location:"Kensington Rear Exit Road,Hiranandani Gardens, Powai " , city:"Mumbai" , pincode:"400076" , latitude:"19.1197" , longitude:"72.9052" , status:1 , radius:"35 meters"},
      {originName:'Ambattur',country:'India',state:'Tamil Nadu',address2:'',location:"Industrial Estate,Ambattur " , city:"Chennai" , pincode:"600058" , latitude:"13.0892" , longitude:"80.1613" , status:1 , radius:"15 meters"},

      
     
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
    let dialogRef = this.dialog.open(AddOriginCustomerDashboardComponent, {
      data:customer,
      height: 'auto',
      width: '600px',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }


}
