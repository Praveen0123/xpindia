import { Component, OnInit } from '@angular/core';
import { MatDialog, PageEvent } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddKpiComponent } from './add-kpi/add-kpi.component';

@Component({
  selector: 'app-kpi',
  templateUrl: './kpi.component.html',
  styleUrls: ['./kpi.component.scss']
})
export class KpiComponent implements OnInit {

  tableList:any;
  tableLists: any;
  status = [{id:1 , value:"Active"} , {id:2 , value:"Inactive"}];
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
      {kpi:"Conversion ratio",group:"Sales",module:"Sales",type:"Interval",target:"6",minlimit:"2",maxlimit:"4",status:true},
      {kpi:"Capacity utilization",group:"Operations",module:"Hub",type:"Higher is better",target:"7",minlimit:"-",maxlimit:"-",status:true},
      {kpi:"Confirmation ratio",group:"Orders",module:"Gateway",type:"Higher is better",target:"9",minlimit:"-",maxlimit:"-",status:true},
      {kpi:"Ontime recevable",group:"Customers",module:"Finance",type:"Lower is better",target:"5",minlimit:"-",maxlimit:"-",status:true},
      {kpi:"First time right",group:"Operations",module:"Operations",type:"Higher is better",target:"8",minlimit:"-",maxlimit:"-",status:true},

      
    ];
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    this.totalSize = 10;
  }

  deleteGateway() {
    this.alertService.createAlert("Location deleted successfully",1);
  }

  public openKPIDialog(KPI) {
    let dialogRef = this.dialog.open(AddKpiComponent, {
      data:KPI,
      height: 'auto',
      width: '600px',
      autoFocus: false
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
