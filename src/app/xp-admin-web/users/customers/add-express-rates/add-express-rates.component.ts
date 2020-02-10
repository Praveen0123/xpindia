
import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shared/services/alert.service';
import { PageEvent, MatDialog } from '@angular/material';
import {AddModelExpressRatesComponent} from './add-model-express-rates/add-model-express-rates.component';

@Component({
  selector: 'app-add-express-rates',
  templateUrl: './add-express-rates.component.html',
  styleUrls: ['./add-express-rates.component.scss']
})
export class AddExpressRatesComponent implements OnInit {
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
      {lane:'HYD-DEL',ratesperkg:'15',country:'India',state:'Telangana',address2:'100 Feet Rd, Ayyappa Society, Madhapur',location:"Uptown Cyberabad Building, B block, 4th floor " , city:"Hyderabad" , pincode:"500081" , latitude:"17.4486" , longitude:"78.3908" , status:1 , radius:"200 meters"},
      {lane:'RAJ-JAI',ratesperkg:'25',country:'India',state:'Maharashtra',address2:'9 Koregaon Road',location:"Godrej Millenium Condominium" , city:"Pune" , pincode:"411001" , latitude:"18.536207" , longitude:"	73.893974" , status:1 , radius:"150 meters"},
      {lane:'ANC-DEN',ratesperkg:'20',country:'India',state:'Uttar Pradesh',address2:'Sector 135',location:"Noida-Greater Noida Expy" , city:"Noida" , pincode:"201304" , latitude:"28.5160" , longitude:"77.3969" , status:0 , radius:"300 meters"},
      {lane:'BNG-DEN',ratesperkg:'22',country:'India',state:'Maharashtra',address2:'Hiranandani Gardens, Powai',location:"Kensington Rear Exit Road " , city:"Mumbai" , pincode:"400076" , latitude:"19.1197" , longitude:"72.9052" , status:1 , radius:"350 meters"},
      {lane:'HP-UP',ratesperkg:'24',country:'India',state:'Tamil Nadu',address2:'Ambattur',location:"Industrial Estate" , city:"Chennai" , pincode:"600058" , latitude:"13.0892" , longitude:"80.1613" , status:1 , radius:"150 meters"},

      
     
    ];
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    this.totalSize = 10;
  }


  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
  }
  
  public openFCLRatesDialog(customer) {
    let dialogRef = this.dialog.open(AddModelExpressRatesComponent, {
      data:customer,
      height: 'auto',
      width: '600px',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

}




