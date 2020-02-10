import { Component, OnInit } from '@angular/core';
import { PageEvent, MatDialog } from '@angular/material';
import {AddPaymentComponent} from './add-payment/add-payment.component';
import {AddVendorPaymentComponent} from './add-vendor-payment/add-vendor-payment.component';
import { AlertService } from '../../../shared/services/alert.service';

@Component({
  selector: 'app-payables',
  templateUrl: './payables.component.html',
  styleUrls: ['./payables.component.scss']
})
export class PayablesComponent implements OnInit {
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

  constructor(public dialog:MatDialog,) { }

  ngOnInit() {
    this.tableList = [
      {paymentDate:"06-01-2020" ,dueDate:'06-02-2020', vendorName:"Serene Technologies Pvt Ltd" ,paidAmount:'2000', totalAmount:"10000"  ,dueAmount:'8000',payments:"1", paymentMode:"Cash",invoiceNumber:'120004',transactionRef:'451287',Status:'Pending'},
     {paymentDate:"16-01-2020" ,dueDate:'16-02-2020', vendorName:"ABC Logistics" ,paidAmount:'3000', totalAmount:"3000"  ,dueAmount:'0',payments:"2", paymentMode:"Cheque",invoiceNumber:'130004',transactionRef:'658287',Status:'Completed'},
     {paymentDate:"26-01-2020" ,dueDate:'26-02-2020', vendorName:"Globex Corporation " ,paidAmount:'1000', totalAmount:"2000"  ,dueAmount:'1000',payments:"3", paymentMode:"Cash",invoiceNumber:'155004',transactionRef:'751478',Status:'Failed'},
     {paymentDate:"06-02-2020" ,dueDate:'06-03-2020', vendorName:"Vehement Capital Partners" ,paidAmount:'2000', totalAmount:"3000"  ,dueAmount:'1000',payments:"4", paymentMode:"Cheque",invoiceNumber:'110104',transactionRef:'145878',Status:'Pending'},
     {paymentDate:"08-02-2020" ,dueDate:'08-03-2020', vendorName:"Massive Dynamic" ,paidAmount:'2000', totalAmount:"2000"  ,dueAmount:'0',payments:"1", paymentMode:"Cheque",invoiceNumber:'178840',transactionRef:'878984',Status:'Completed'},
     {paymentDate:"16-02-2020" ,dueDate:'16-03-2020', vendorName:"Manjit" ,paidAmount:'4000', totalAmount:"6000"  ,dueAmount:'2000',payments:"6", paymentMode:"Cash",invoiceNumber:'184904',transactionRef:'965874',Status:'Pending'},
     {paymentDate:"15-02-2020" ,dueDate:'15-03-2020', vendorName:"Navjot singh" ,paidAmount:'500', totalAmount:"1000"  ,dueAmount:'500',payments:"3", paymentMode:"Cheque",invoiceNumber:'149004',transactionRef:'321624',Status:'Pending'},
     {paymentDate:"16-03-2020" ,dueDate:'16-04-2020', vendorName:"Hardeep Kaur" ,paidAmount:'900', totalAmount:"1050"  ,dueAmount:'150',payments:"2", paymentMode:"Cash",invoiceNumber:'125404',transactionRef:'654218',Status:'Failed'},
     {paymentDate:"26-03-2020" ,dueDate:'26-04-2020', vendorName:"Sahib" ,paidAmount:'2000', totalAmount:"2000"  ,dueAmount:'0',payments:"0", paymentMode:"Cheque",invoiceNumber:'178704',transactionRef:'965236',Status:'Completed'},
     {paymentDate:"06-03-2020" ,dueDate:'06-04-2020', vendorName:"Diljit" ,paidAmount:'7000', totalAmount:"9000",dueAmount:'2000',payments:"4", paymentMode:"Cash",invoiceNumber:'178454',transactionRef:'387512',Status:'Failed'},
    ];
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    this.totalSize = 10;
  }

  // deleteGateway() {
  //   this.alertService.createAlert("Gateway deleted successfully",1);
  // }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
  }
  public openpaymentModal(id) {
    let dialogRef = this.dialog.open(AddPaymentComponent, {
      data:id,
      height: 'auto',
      width: '600px',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  public openpaymentDialog(id) {
    let dialogRef = this.dialog.open(AddVendorPaymentComponent, {
      data:id,
      height: 'auto',
      width: '600px',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  

}
