import { Component, OnInit } from '@angular/core';
import { PageEvent, MatDialog } from '@angular/material';
import { AlertService } from '../../../shared/services/alert.service';
import { AddTestimonalComponent } from './add-testimonal/add-testimonal.component';

@Component({
  selector: 'app-customer-share-testimonals',
  templateUrl: './customer-share-testimonals.component.html',
  styleUrls: ['./customer-share-testimonals.component.scss']
})
export class CustomerShareTestimonalsComponent implements OnInit {

  tableList:any;
  tableLists: any;
  status = [{id:1 , value:"Active"} , {id:2 , value:"Inactive"}];
  customers = [{id:1 , value:"David"} , {id:1 , value:"Rahul"} , {id:1 , value:"Ramu"} , {id:1 , value:"Mahesh"} , {id:1 , value:"Saaho"}]
  filterToggle: boolean;
  pageEvent: PageEvent;
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
  public searchText: string;
  public page: any;
  showEmpty: boolean = false;
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this vehicle capacity?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status?';
  public cancelClicked: boolean = false;

  constructor(public dialog:MatDialog,public alertService:AlertService) { }

  ngOnInit() {
    this.tableList = [
     {customer:"David Warner" , testimonial:"Thank you so much for a job well done" , time:"20-12-2019, 01:15"},
     {customer:"Mike Tyson" , testimonial:"You guys are the best! Keep up the great work!" , time:"21-12-2019, 18:20"},
     {customer:"Joe Root" , testimonial:"I just wanted to let you know that it's been great working with you" , time:"23-12-2019, 6:00"},
     {customer:"Marshal" , testimonial:"You've been so helpful" , time:"24-12-2019, 1:55"},
     {customer:"Tim Oaine" , testimonial:"You made it so simple" , time:"24-12-2019, 18:30"},
     {customer:"Bonny Maggs" , testimonial:"You guys are the best! Keep up the great work!" , time:"25-12-2019, 05:00"},
    ];
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    this.totalSize = 6;
  }

  openCountryDialog(item) {
    let dialogRef = this.dialog.open(AddTestimonalComponent , {
      data:item,
      height:'auto',
      width:'600px',
      autoFocus:false
    });
    dialogRef.afterClosed().subscribe(data => {

    });
  } 

  deleteGateway() {
    this.alertService.createAlert("Country deleted successfully",1);
  }

 
  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
  }

}
