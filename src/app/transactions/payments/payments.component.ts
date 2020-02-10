import { Component, OnInit } from '@angular/core';
import { PageEvent, MatDialog } from '@angular/material';
import { AlertService } from '../../shared/services/alert.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

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
  public popoverMessage: string = 'Are you sure you want to delete this customer?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status?';
  public cancelClicked: boolean = false;

  constructor(public dialog:MatDialog,public alertService:AlertService) { }

  ngOnInit() {
    this.tableList = [
      {vendorName:"David Malhotra" , email:"david@xpindia.com" , phone:"9698785478" , transactionId:"20124147" , vehicleType:"30 feet" , vehicleNumber:"AP29 AA 9636" , origin:"Hyderabad" , destination:"Delhi" , billDate:"22/12/2019" , amount:"12,52,000" , selectedStatus:1 , service:"FCL" , mop:"-" , prn:"-"},
      {vendorName:"Rahul Batra" , email:"rahul@xpindia.com" , phone:"7854525259" , transactionId:"47478569" , vehicleType:"9 feet" , vehicleNumber:"AP25 HT 9636" , origin:"Chennai" , destination:"Bangalore" , billDate:"24/12/2019" , amount:"2,00,000" , selectedStatus:2 , service:"LCL" , mop:"Cheque" , prn:"10214578"},
      {vendorName:"Ramesh Lal" , email:"ramesh@xpindia.com" , phone:"8956471203" , transactionId:"36254758" , vehicleType:"12 feet" , vehicleNumber:"UP29 AY 9636" , origin:"Mumbai" , destination:"Pune" , billDate:"24/12/2019" , amount:"1,58,000" , selectedStatus:2 , service:"LCL" , mop:"Debit" , prn:"52657897"},
      {vendorName:"Bikash Das" , email:"aman@xpindia.com" , phone:"9969658741" , transactionId:"63654784" , vehicleType:"11 feet" , vehicleNumber:"RJ29 PT 9636" , origin:"Hyderabad" , destination:"Mumbai" , billDate:"25/12/2019" , amount:"8,00,000" , selectedStatus:2 , service:"FCL" , mop:"Cheque" , prn:"30201457"},
      {vendorName:"Bhagat Chaudhary" , email:"bhagat@xpindia.com" , phone:"6987412630" , transactionId:"12147858" , vehicleType:"25 feet" , vehicleNumber:"PJ29 MM 9636" , origin:"Delhi" , destination:"Pune" , billDate:"26/12/2019" , amount:"7,00,000" , selectedStatus:1 , service:"BB" , mop:"-" , prn:"-"},
      {vendorName:"Rajan Suwal" , email:"rajan@xpindia.com" , phone:"9060504789" , transactionId:"52524789" , vehicleType:"10 feet" , vehicleNumber:"JK29 RJ 9636" , origin:"Rajkot" , destination:"Jaipur" , billDate:"27/12/2019" , amount:"4,50,000" , selectedStatus:2 , service:"FCL" , mop:"Debit" , prn:"55896369"},
      {vendorName:"Jasveer Singh" , email:"arpit@xpindia.com" , phone:"6954102365" , transactionId:"63698789" , vehicleType:"20 feet" , vehicleNumber:"GJ29 HY 9636" , origin:"Pune" , destination:"Mumbai" , billDate:"27/12/2019" , amount:"2,12,000" , selectedStatus:2 , service:"BB" , mop:"Net banking" , prn:"12145787"},
      {vendorName:"Navin Malik" , email:"navin@xpindia.com" , phone:"7575898956" , transactionId:"12012569" , vehicleType:"22 feet" , vehicleNumber:"KL29 KL 9636" , origin:"Jaipur" , destination:"Lucknow" , billDate:"28/12/2019" , amount:"58,000" , selectedStatus:1 , service:"BB" , mop:"-" , prn:"-"},
      {vendorName:"Varun Dhawan" , email:"varun@xpindia.com" , phone:"9562147852" , transactionId:"63254789" , vehicleType:"30 feet" , vehicleNumber:"TN29 SD 9636" , origin:"Udaipur" , destination:"Hyderabad" , billDate:"29/12/2019" , amount:"9,00,000" , selectedStatus:2 , service:"FCL" , mop:"Net banking" , prn:"25258798"},
      {vendorName:"Pranab Ray" , email:"pranab@xpindia.com" , phone:"8858478521" , transactionId:"12012458" , vehicleType:"21 feet" , vehicleNumber:"MH29 FR 9636" , origin:"Lucknow" , destination:"Delhi" , billDate:"30/12/2019" , amount:"1,25,000" , selectedStatus:1 , service:"LCL" , mop:"-" , prn:"-"},
      {vendorName:"Nikhil Kumar" , email:"nikhil@xpindia.com" , phone:"6365478547" , transactionId:"20369969" , vehicleType:"30 feet" , vehicleNumber:"MP29 WQ 9636" , origin:"Panaji" , destination:"Mumbai" , billDate:"01/01/2020" , amount:"5,75,000" , selectedStatus:2 , service:"FCL" , mop:"Cheque" , prn:"54548977"},
    ];
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    this.totalSize = 10    
  }

  deleteCustomer() {
    this.alertService.createAlert("Customer deleted successfully",1)
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
  }


}
