import { Component, OnInit } from '@angular/core';
import { PageEvent, MatDialog } from '@angular/material';
import { AlertService } from '../../../../shared/services/alert.service';
import {AddRegionComponent} from './add-region/add-region.component';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {
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
      {region:'North',state:"2" , country:"India" , status:true , zone:"4" , district:'9' , location:"75" , pincode:"9" ,gateway:'12',hub:'4'},
      {region:'North-East',state:"4" , country:"India" , status:false , zone:"3" , district:"8" , location:"80" , pincode:"5",gateway:'14',hub:'5'},
      {region:'South',state:"3" , country:"India" , status:true , zone:"3" , district:"7" , location:"65" , pincode:"10",gateway:'10',hub:'3'},
      {region:'West',state:"2" , country:"India" , status:false , zone:"5" , district:"9" , location:"72" , pincode:"7",gateway:'8',hub:'2'},
      {region:'East',state:"5" , country:"India" , status:true , zone:"4" , district:"5" , location:"50" , pincode:"4",gateway:'12',hub:'3'},
      {region:'Central',state:"9" , country:"India" , status:true , zone:"3" , district:"7" , location:"60" , pincode:"6",gateway:'15',hub:'6'},
      // {region:'North',state:"7" , country:"India" , status:false , zone:"North-1" , district:"4" , location:"68" , pincode:"5",gateway:'5',hub:'2'},
      // {region:'North',state:"6" , country:"India" , status:true , zone:"East-2" , district:"7" , location:"70" , pincode:"3",gateway:'8',hub:'4'},
      // {region:'North',state:"7" , country:"India" , status:false , zone:"North-1" , district:"9" , location:"65" , pincode:"7",gateway:'9',hub:'5'},
      // {region:'North',state:"5" , country:"India" , status:true , zone:"W-2" , district:"3" , location:"55" , pincode:"9",gateway:'7',hub:'Panaji-3'},
    ];
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    this.totalSize = 10;
  }

  deleteAttorney() {
    this.alertService.createAlert("Zones deleted successfully",1);
  }

  public openLocationDialog(location) {
    let dialogRef = this.dialog.open(AddRegionComponent,{
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
