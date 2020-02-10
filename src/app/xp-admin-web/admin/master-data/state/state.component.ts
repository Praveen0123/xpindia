import { Component, OnInit } from '@angular/core';
import { PageEvent, MatDialog } from '@angular/material';
import { AlertService } from '../../../../shared/services/alert.service';
import {AddStateComponent} from './add-state/add-state.component'
@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {
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
      {state:"Andhra Pradesh" , country:"India" , status:true , zone:"South-1" , district:'9' , location:"50" , pincode:"2670" ,gateway:'7',hub:'Visakhapatnam-H1'},
      {state:"Maharashtra" , country:"India" , status:false , zone:"South-2" , district:"8" , location:"60" , pincode:"2575",gateway:'14',hub:'Mumbai-H1'},
      {state:"Tamilnadu" , country:"India" , status:true , zone:"South-3" , district:"7" , location:"65" , pincode:"2650",gateway:'10',hub:'Coimbatore-H1'},
      {state:"Kerala" , country:"India" , status:false , zone:"South-5" , district:"9" , location:"72" , pincode:"2640",gateway:'8',hub:'Visakhapatnam-H1'},
      {state:"Karnataka" , country:"India" , status:true , zone:"South-4" , district:"5" , location:"50" , pincode:"2647",gateway:'12',hub:'Thiruvunanthapuram-H1'},
      {state:"Telangana" , country:"India" , status:true , zone:"South-6" , district:"7" , location:"60" , pincode:"2545",gateway:'15',hub:'Bangalore-H1'},
      {state:"Delhi" , country:"India" , status:false , zone:"North-1" , district:"4" , location:"68" , pincode:"2365",gateway:'5',hub:'New Delhi-H1'},
      {state:"Assam" , country:"India" , status:true , zone:"East-2" , district:"7" , location:"70" , pincode:"2545",gateway:'8',hub:'Dispur-H1'},
      {state:"Haryana" , country:"India" , status:false , zone:"North-1" , district:"9" , location:"65" , pincode:"2548",gateway:'9',hub:'Chandigarh-H1'},
      {state:"Goa" , country:"India" , status:true , zone:"W-2" , district:"3" , location:"55" , pincode:"2650",gateway:'7',hub:'Panaji-H3'},
    ];
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    this.totalSize = 10;
  }

  deleteAttorney() {
    this.alertService.createAlert("State deleted successfully",1);
  }

  public openLocationDialog(location) {
    let dialogRef = this.dialog.open(AddStateComponent,{
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