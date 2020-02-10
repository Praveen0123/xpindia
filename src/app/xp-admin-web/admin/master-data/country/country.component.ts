import { Component, OnInit } from '@angular/core';
import { PageEvent, MatDialog } from '@angular/material';
import { AlertService } from '../../../../shared/services/alert.service';
import { AddCountryComponent} from './add-country/add-country.component';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
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
  public popoverMessage: string = 'Are you sure you want to delete this ?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status?';
  public cancelClicked: boolean = false;

  constructor(public dialog:MatDialog,public alertService:AlertService) { }

  ngOnInit() {
    this.tableList = [
      {state:"Andhra Pradesh" , country:"India" , status:true , zone:"3" , district:'17' , location:"175" , pincode:"3500" ,gateway:'12',hub:'4'},
      {state:"California" , country:"USA" , status:false , zone:"2" , district:"18" , location:"180" , pincode:"355",gateway:'14',hub:'5'},
      {state:"Maharashtra" , country:"India" , status:true , zone:"3" , district:"15" , location:"165" , pincode:"300",gateway:'10',hub:'3'},
      {state:"Tamilnadu" , country:"India" , status:false , zone:"5" , district:"9" , location:"172" , pincode:"320",gateway:'8',hub:'2'},
      {state:"Texas" , country:"USA" , status:true , zone:"4" , district:"15" , location:"150" , pincode:"354",gateway:'12',hub:'3'},
      {state:"Kerala" , country:"India" , status:true , zone:"6" , district:"17" , location:"160" , pincode:"420",gateway:'15',hub:'6'},
      {state:"Telangana" , country:"India" , status:false , zone:"1" , district:"14" , location:"168" , pincode:"320",gateway:'5',hub:'2'},
      {state:"Delhi" , country:"India" , status:true , zone:"2" , district:"17" , location:"170" , pincode:"310",gateway:'8',hub:'4'},
      {state:"Assam" , country:"India" , status:false , zone:"1" , district:"9" , location:"165" , pincode:"320",gateway:'9',hub:'5'},
      {state:"Goa" , country:"India" , status:true , zone:"" ,district:"13" , location:"155" , pincode:"350",gateway:'7',hub:'Panaji-3'},
    ];
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    this.totalSize = 10;
  }

  deleteAttorney() {
    this.alertService.createAlert("Country deleted successfully",1);
  }



  public openLocationDialog(location) {
    let dialogRef = this.dialog.open(AddCountryComponent,{
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
