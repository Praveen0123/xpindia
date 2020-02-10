import { Component, OnInit } from '@angular/core';
import { PageEvent, MatDialog } from '@angular/material';
import { AlertService } from '../../../../shared/services/alert.service';
import {AddGatewayComponent} from './add-gateway/add-gateway.component'

@Component({
  selector: 'app-gateways',
  templateUrl: './gateways.component.html',
  styleUrls: ['./gateways.component.scss']
})
export class GatewaysComponent implements OnInit {

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
      {state:"Andhra Pradesh" , country:"India" , status:true , zone:"South-1" , district:'Visakhapatnam' , location:"9" , pincode:"679" ,gateway:'Visakhapatnam-1',hub:'Visakhapatnam-H1'},
      {state:"Maharashtra" , country:"India" , status:false , zone:"South-2" , district:"Mumbai" , location:"10" , pincode:"655",gateway:'Mumbai-2',hub:'Mumbai-H1'},
      {state:"Tamilnadu" , country:"India" , status:true , zone:"South-3" , district:"Coimbatore" , location:"6" , pincode:"510",gateway:'Coimbatore-1',hub:'Coimbatore-H1'},
      {state:"Kerala" , country:"India" , status:false , zone:"South-5" , district:"Thiruvunanthapuram" , location:"7" , pincode:"617",gateway:'Thiruvunanthapuram-4',hub:'Thiruvunanthapuram-H1'},
      {state:"Karnataka" , country:"India" , status:true , zone:"South-4" , district:"Bangalore" , location:"15" , pincode:"654",gateway:'Bangalore-4',hub:'Bangalore-H1'},
      {state:"Telangana" , country:"India" , status:true , zone:"South-6" , district:"Rangareddy" , location:"22" , pincode:"556",gateway:'Rangareddy-2',hub:'Rangareddy-H1'},
      {state:"Delhi" , country:"India" , status:false , zone:"North-1" , district:"New Delhi" , location:"16" , pincode:"455",gateway:'New Delhi-5',hub:'New Delhi-H1'},
      {state:"Assam" , country:"India" , status:true , zone:"East-2" , district:"Dispur" , location:"9" , pincode:"124",gateway:'Dispur-2',hub:'Dispur-H1'},
      {state:"Haryana" , country:"India" , status:false , zone:"North-1" , district:"Chandigarh" , location:"9" , pincode:"617",gateway:'Chandigarh-2',hub:'Chandigarh-H1'},
      {state:"Goa" , country:"India" , status:true , zone:"W-2" , district:"Panaji" , location:"8" , pincode:"9",gateway:'Panaji-4',hub:'Panaji-H1'},
    ];
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    this.totalSize = 10;
  }

  deleteGateway() {
    this.alertService.createAlert("Gateway deleted successfully",1);
  }

  public openLocationDialog(location) {
    let dialogRef = this.dialog.open(AddGatewayComponent,{
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
