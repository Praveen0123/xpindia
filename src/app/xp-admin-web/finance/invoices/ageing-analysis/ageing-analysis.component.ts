import { Component, OnInit } from '@angular/core';
import { PageEvent, MatDialog } from '@angular/material';

@Component({
  selector: 'app-ageing-analysis',
  templateUrl: './ageing-analysis.component.html',
  styleUrls: ['./ageing-analysis.component.scss']
})
export class AgeingAnalysisComponent implements OnInit {

  tableList:any;
  tableLists:any;
  tableLists3:any;
  showEmpty: boolean = false;
  filterToggle:boolean;
  constructor(public dialog:MatDialog,) { }

  ngOnInit() {
    this.tableList = [
      {paymentDate:"06-01-2020" , vendorName:"Tech Transport" , paidAmount:"1000,"  , phoneNumber:"8801000007",email:'Mahadev@gmail.com',totalAmount:"10000" ,dueAmount:'8000',transactionRef:'451287',Status:'Pending'},
      {paymentDate:"16-01-2020" , vendorName:"Apple Transport" , paidAmount:"9000,"  , phoneNumber:"8809865412",email:'Karthik12@gmail.com',totalAmount:"3000" ,dueAmount:'0',transactionRef:'658287',Status:'Completed'},
      // {paymentDate:"26-01-2020" , vendorName:"Globex Corporation " , paidAmount:"2000"  , phoneNumber:"8801000007",email:'155004',transactionRef:'751478',Status:'Failed'},
      // {paymentDate:"06-02-2020" , vendorName:"Vehement Capital Partners" , paidAmount:"3000"  , phoneNumber:"8801000007ue",email:'110104',transactionRef:'145878',Status:'Pending'},
      // {paymentDate:"08-02-2020" , vendorName:"Massive Dynamic" , paidAmount:"4000"  , phoneNumber:"8801000007ue",email:'17884',transactionRef:'878984',Status:'Completed'},
      // {paymentDate:"16-02-2020" , vendorName:"Manjit" , paidAmount:"6000"  , phoneNumber:"8801000007",email:'184904',transactionRef:'965874',Status:'Pending'},
      // {paymentDate:"15-02-2020" , vendorName:"Navjot singh" , paidAmount:"1000"  , phoneNumber:"8801000007ue",email:'149004',transactionRef:'321624',Status:'Pending'},
      // {paymentDate:"16-03-2020" , vendorName:"Hardeep Kaur" , paidAmount:"1050"  , phoneNumber:"8801000007",email:'125404',transactionRef:'654218',Status:'Failed'},
      // {paymentDate:"26-03-2020" , vendorName:"Sahib" , paidAmount:"9000"  , phoneNumber:"8801000007ue",email:'178704',transactionRef:'965236',Status:'Completed'},
      // {paymentDate:"06-03-2020" , vendorName:"Diljit" , paidAmount:"9000", phoneNumber:"8801000007",email:'178454',transactionRef:'387512',Status:'Failed'},
     ];
     this.tableLists=[
      {paymentDate:"05-01-2020" , vendorName:"SRS Transport" , paidAmount:"1000,"  , phoneNumber:"8801000007",email:'Mahadev@gmail.com',totalAmount:"5000" ,dueAmount:'3000',transactionRef:'451287',Status:'Pending'},
      {paymentDate:"01-01-2020" , vendorName:"ITC Transport" , paidAmount:"9000,"  , phoneNumber:"8809865412",email:'Karthik12@gmail.com',totalAmount:"8000" ,dueAmount:'8000',transactionRef:'658287',Status:'Completed'},
     ];
     this.tableLists3=[
      {Current:"4000" ,days1:'3000',days2:'0', days3:'0',days4:'0',morethan28:'0',vendorName:"Navatha Transport" , paidAmount:"1000,"  , phoneNumber:"8801000007",email:'Mahadev@gmail.com',totalAmount:"7000" ,dueAmount:'8000',transactionRef:'451287',Status:'Pending'},
      {Current:"4000" ,days1:"8000", days2:'0',days3:'0',days4:'0',morethan28:'0',vendorName:"AMB Transport" , paidAmount:"9000,"  , phoneNumber:"8809865412",email:'Karthik12@gmail.com',totalAmount:"12000" ,dueAmount:'0',transactionRef:'658287',Status:'Completed'},
     ];
  }



 

}








