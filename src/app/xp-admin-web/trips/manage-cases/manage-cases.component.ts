import { Component, OnInit } from '@angular/core';
import { PageEvent, MatDialog } from '@angular/material';
import { AlertService } from '../../../shared/services/alert.service';
import {AddReportCasesComponent} from './add-report-cases/add-report-cases.component'


@Component({
  selector: 'app-manage-cases',
  templateUrl: './manage-cases.component.html',
  styleUrls: ['./manage-cases.component.scss']
})
export class ManageCasesComponent implements OnInit {

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
    {revisedETA:'02/010/2020 ',expectedTime:'02/06/2020 600H',time:'02/04/2020 600H',exceptions:'ACCIDENT',vehicleNo:'TS09ET5555',consignmentNo:'1234567891098765',bookingid:'BA/MA/2020/01/06',caseid:'12354',noOfAxels:"Single" , vehicleNumber:"AP29 AA 9636" , vehicleType:"30FT / 7000KGS" , capacity:"25" , status:true , cbm:"20" , width:"7ft" , height:"7ft 6in"},
    {revisedETA:'02/15/2020 ',expectedTime:'02/08/2020 900H',time:'02/06/2020 800H',exceptions:'BREAK DOWN',vehicleNo:'AP09ET5645',consignmentNo:'5434567891098765',bookingid:'BA/MA/2020/03/06',caseid:'21354',noOfAxels:"Single" , vehicleNumber:"AP25 HT 9636" , vehicleType:"9FT / 1200KGS" , capacity:"10"  , status:true , cbm:"40" , width:"8ft" , height:"8ft 6in"},
    {revisedETA:'02/18/2020 ',expectedTime:'02/14/2020 600H',time:'02/08/2020 1600H',exceptions:'WEATHER',vehicleNo:'TN09ET4568',consignmentNo:'7734567891098765',bookingid:'BA/MA/2020/05/06',caseid:'13554',noOfAxels:"Multi"  , vehicleNumber:"UP29 AY 9636" , vehicleType:"12FT / 2000KGS" , capacity:"15" , status:true , cbm:"25" , width:"8ft" , height:"8ft 6in"},
    {revisedETA:'02/19/2020 ',expectedTime:'02/15/2020 500H',time:'02/09/2020 1100H',exceptions:'DRIVER HEALTH',vehicleNo:'DL09ET1543',consignmentNo:'4834567891098765',bookingid:'BA/MA/2020/09/06',caseid:'82354',noOfAxels:"Single" , vehicleNumber:"RJ29 PT 9636" , vehicleType:"11FT / 1800KGS" , capacity:"30" , status:true , cbm:"30" , width:"8ft" , height:"8ft 6in"},
    {revisedETA:'02/25/2020 ',expectedTime:'02/18/2020 1600H',time:'02/10/2020 700H',exceptions:'JAM',vehicleNo:'UP09ET4728',consignmentNo:'2334567891098765',bookingid:'BA/MA/2020/15/06',caseid:'22354',noOfAxels:"Multi" , vehicleNumber:"PJ29 MM 9636" , vehicleType:"25FT / 6000KGS" , capacity:"50" , status:true , cbm:"15" , width:"7ft" , height:"7ft 6in"},
    {revisedETA:'02/27/2020 ',expectedTime:'02/19/2020 1700H',time:'02/14/2020 500H',exceptions:'ACCIDENT',vehicleNo:'TS09ET4582',consignmentNo:'9234567891098765',bookingid:'BA/MA/2020/03/06',caseid:'72354',noOfAxels:"Single" , vehicleNumber:"JK29 RJ 9636" , vehicleType:"10FT / 1400KGS" , capacity:"22" , status:true , cbm:"20" , width:"8ft" , height:"8ft 6in"},
    {revisedETA:'02/28/2020 ',expectedTime:'02/25/2020 1400H',time:'02/16/2020 1700H',exceptions:'BREAK DOWN',vehicleNo:'MH09ET48752',consignmentNo:'9894567891098765',bookingid:'BA/MA/2020/06/06',caseid:'62354',noOfAxels:"Single" , vehicleNumber:"GJ29 HY 9636" , vehicleType:"20FT / 4500KGS" , capacity:"13" , status:true , cbm:"40" , width:"8ft" , height:"8ft 6in"},
    {revisedETA:'02/29/2020 ',expectedTime:'02/26/2020 1200H',time:'02/18/2020 1800H',exceptions:'WEATHER',vehicleNo:'TS09E2454',consignmentNo:'5654567891098765',bookingid:'BA/MA/2020/07/06',caseid:'18854',noOfAxels:"Single" , vehicleNumber:"KL29 KL 9636" , vehicleType:"22FT / 5000KGS" , capacity:"11" , status:true , cbm:"30" , width:"8ft" , height:"8ft 6in"},
    {revisedETA:'02/26/2020 ',expectedTime:'02/25/2020 600H',time:'02/20/2020 1500H',exceptions:'JAM',vehicleNo:'TS10ET5415',consignmentNo:'3264567891098765',bookingid:'BA/MA/2020/09/06',caseid:'12954',noOfAxels:"Single" , vehicleNumber:"TN29 SD 9636" , vehicleType:"30FT / 7000KGS" , capacity:"08" , status:true , cbm:"20" , width:"7ft" , height:"7ft 6in"},
    {revisedETA:'02/29/2020 ',expectedTime:'02/28/2020 1500H',time:'02/22/2020 1300H',exceptions:'WEATHER',vehicleNo:'AP09ET5555',consignmentNo:'8974567891098765',bookingid:'BA/MA/2020/11/06',caseid:'65354',noOfAxels:"Single" , vehicleNumber:"MH29 FR 9636" , vehicleType:"21FT / 4800KGS" , capacity:"18" , status:true , cbm:"25" , width:"8ft" , height:"8ft 6in"}
    ];
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    this.totalSize = 10;
  }

  deleteGateway() {
    this.alertService.createAlert("Vehicle type deleted successfully",1);
  }

  public openReportDialog(gateway) {
    let dialogRef = this.dialog.open(AddReportCasesComponent,{
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








