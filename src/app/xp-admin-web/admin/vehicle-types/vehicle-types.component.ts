import { Component, OnInit } from '@angular/core';
import { PageEvent, MatDialog } from '@angular/material';
import { AlertService } from '../../../shared/services/alert.service';
import { AddVehicleTypeComponent} from './add-vehicle-type/add-vehicle-type.component';

@Component({
  selector: 'app-vehicle-types',
  templateUrl: './vehicle-types.component.html',
  styleUrls: ['./vehicle-types.component.scss']
})
export class VehicleTypesComponent implements OnInit {

  tableList:any;
  tableLists: any;
  status = [{id:1 , value:"20-40"} , {id:2 , value:"40-50"}, {id:2 , value:"25-35"}];
  filterToggle: boolean;
  pageEvent: PageEvent;
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
  public searchText: string;
  public page: any;
  showEmpty: boolean = false;
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this vehicle type?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status?';
  public cancelClicked: boolean = false;

  constructor(public dialog:MatDialog,public alertService:AlertService) { }

  ngOnInit() {
    this.tableList = [
    {noOfAxels:"Single" , vehicleNumber:"AP29 AA 9636" , vehicleType:"30FT / 7000KGS" , capacity:"25" , status:true , cbm:"20" , width:"7ft" , height:"7ft 6in"},
    {noOfAxels:"Single" , vehicleNumber:"AP25 HT 9636" , vehicleType:"9FT / 1200KGS" , capacity:"10"  , status:true , cbm:"40" , width:"8ft" , height:"8ft 6in"},
    {noOfAxels:"Multi"  , vehicleNumber:"UP29 AY 9636" , vehicleType:"12FT / 2000KGS" , capacity:"15" , status:true , cbm:"25" , width:"8ft" , height:"8ft 6in"},
    {noOfAxels:"Single" , vehicleNumber:"RJ29 PT 9636" , vehicleType:"11FT / 1800KGS" , capacity:"30" , status:true , cbm:"30" , width:"8ft" , height:"8ft 6in"},
    {noOfAxels:"Multi" , vehicleNumber:"PJ29 MM 9636" , vehicleType:"25FT / 6000KGS" , capacity:"50" , status:true , cbm:"15" , width:"7ft" , height:"7ft 6in"},
    {noOfAxels:"Single" , vehicleNumber:"JK29 RJ 9636" , vehicleType:"10FT / 1400KGS" , capacity:"22" , status:true , cbm:"20" , width:"8ft" , height:"8ft 6in"},
    {noOfAxels:"Single" , vehicleNumber:"GJ29 HY 9636" , vehicleType:"20FT / 4500KGS" , capacity:"13" , status:true , cbm:"40" , width:"8ft" , height:"8ft 6in"},
    {noOfAxels:"Single" , vehicleNumber:"KL29 KL 9636" , vehicleType:"22FT / 5000KGS" , capacity:"11" , status:true , cbm:"30" , width:"8ft" , height:"8ft 6in"},
    {noOfAxels:"Single" , vehicleNumber:"TN29 SD 9636" , vehicleType:"30FT / 7000KGS" , capacity:"08" , status:true , cbm:"20" , width:"7ft" , height:"7ft 6in"},
    {noOfAxels:"Single" , vehicleNumber:"MH29 FR 9636" , vehicleType:"21FT / 4800KGS" , capacity:"18" , status:true , cbm:"25" , width:"8ft" , height:"8ft 6in"}
    ];
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    this.totalSize = 10;
  }

  deleteGateway() {
    this.alertService.createAlert("Vehicle type deleted successfully",1);
  }

  public openGatewayDialog(gateway) {
    let dialogRef = this.dialog.open(AddVehicleTypeComponent,{
      data:gateway,
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




