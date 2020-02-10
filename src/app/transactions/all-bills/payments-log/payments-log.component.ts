import { Component, OnInit } from '@angular/core';
import { PageEvent, MatDialog } from '@angular/material';
import { AlertService } from '../../../shared/services/alert.service';
@Component({
  selector: 'app-payments-log',
  templateUrl: './payments-log.component.html',
  styleUrls: ['./payments-log.component.scss']
})
export class PaymentsLogComponent implements OnInit {

  tableList:any;
  tableLists: any;
  status = [{id:1 , value:"Active"} , {id:2 , value:"Inactive"}];
  countries=[{id:1 , value:"India"} , {id:2 , value:"China"}];
  zones=[{id:1 , value:"Central"} , {id:2 , value:"North"}];
  filterToggle: boolean;
  pageEvent: PageEvent;
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
  public searchText: string;
  public page: any;
  showEmpty: boolean = false;
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this gateway?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status?';
  public cancelClicked: boolean = false;

  constructor(public dialog:MatDialog,public alertService:AlertService) { }

  ngOnInit() {
    this.tableList = [
     {paymentDate:"06-01-2020" ,bookingref:'BA/MA/2020/01/06', vendorName:"Serene Technologies Pvt Ltd" , paidAmount:"1000,"  , paymentMode:"Cash",invoiceNumber:'120004',transactionRef:'451287',Status:'Pending'},
     {paymentDate:"16-01-2020" ,bookingref:'BA/MA/2020/03/06', vendorName:"ABC Logistics" , paidAmount:"9000,"  , paymentMode:"Cheque",invoiceNumber:'130004',transactionRef:'658287',Status:'Completed'},
     {paymentDate:"26-01-2020" ,bookingref:'BA/MA/2020/04/06', vendorName:"Globex Corporation " , paidAmount:"2000"  , paymentMode:"Cash",invoiceNumber:'155004',transactionRef:'751478',Status:'Failed'},
     {paymentDate:"06-02-2020" ,bookingref:'BA/MA/2020/06/06', vendorName:"Vehement Capital Partners" , paidAmount:"3000"  , paymentMode:"Cheque",invoiceNumber:'110104',transactionRef:'145878',Status:'Pending'},
     {paymentDate:"08-02-2020" ,bookingref:'BA/MA/2020/07/06', vendorName:"Massive Dynamic" , paidAmount:"4000"  , paymentMode:"Cheque",invoiceNumber:'17884',transactionRef:'878984',Status:'Completed'},
   
    ];
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    this.totalSize = 10;
  }

  deleteGateway() {
    this.alertService.createAlert("Gateway deleted successfully",1);
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
  }
  
 

}
