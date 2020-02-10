import { Component, OnInit } from '@angular/core';
import { PageEvent, MatDialog } from '@angular/material';
import { AlertService } from '../../../shared/services/alert.service';
import { AddLaneComponent} from './add-lane/add-lane.component';
import {AddRatesComponent} from './add-lane/add-rates/add-rates.component';


@Component({
  selector: 'app-lanes',
  templateUrl: './lanes.component.html',
  styleUrls: ['./lanes.component.scss']
})
export class LanesComponent implements OnInit {

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
  public popoverMessage: string = 'Are you sure you want to delete this lane?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status?';
  public cancelClicked: boolean = false;

  constructor(public dialog:MatDialog,public alertService:AlertService) { }

  ngOnInit() {
    this.tableList = [
      {laneName:"HYD-DEL" , destination:"Delhi" , originDistrict:"Hyderabad" , destinationDistrict:"Feroz Kotla" ,country:"India", fclpayload:"25" , FCLCBM:"20" , rates:"20" , status:true},
      {laneName:"ANC-DEN" , destination:"Denver" , originDistrict:"Alaska" , destinationDistrict:"	Colorado" ,country:"USA", fclpayload:"32" ,  FCLCBM:"82"  , rates:"15"},
      {laneName:"AMP-COL" , destination:"Colombo" , originDistrict:"Ampara" , destinationDistrict:"Colombo" , country:"Sri Lanka", fclpayload:"47" , FCLCBM:"90"  , rates:"35" , status:true},
      {laneName:"AAC-BAM" , destination:"Aachen" , originDistrict:"Bamberg" , destinationDistrict:"Aachen" ,country:"Germany", fclpayload:"15" , FCLCBM:"65"  , rates:"15" , status:true},
      {laneName:"DAU-CAL" , destination:"Calgary" , originDistrict:"Manitoba" , destinationDistrict:"Alberta" ,country:"Canada", fclpayload:"6" , FCLCBM:"47"  , rates:"10"},
      {laneName:"RAJ-JAI" , destination:"Hyderabad" , originDistrict:"Howbli" , destinationDistrict:"Begumpet" , baseLineCapacity:"3" , tat:"6 Days" , CBM:"90"  , capacity:"10" , status:true},
      {laneName:"UDAI-JAI" , destination:"Bangalore" , originDistrict:"Nadve" , destinationDistrict:"Electron City" , baseLineCapacity:"2" , tat:"7 Days" , CBM:"60"  , capacity:"7"},
      {laneName:"BHU-HYD" , destination:"Hyderabad" , origoriginDistrictinHub:"Bahirmuk" , destinationDistrict:"Ameerpet" , baseLineCapacity:"1" , tat:"4 Days" , CBM:"42"  , capacity:"20"},
      {laneName:"SRI-COIM" , destination:"Pune" , originDistrict:"Nimda" , destinationDistrict:"Park Lane" , baseLineCapacity:"1" , tat:"55 Days" , capacity:"3" , CBM:"75"  , status:true},
      {laneName:"CHE-RAI" , destination:"Mumbai" , originDistrict:"Lake view" , destinationDistrict:"Maidailand" , baseLineCapacity:"5" , tat:"2 Days" , CBM:"81"  , capacity:"8"},
    ];
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    this.totalSize = 10;
  }

  deleteGateway() {
    this.alertService.createAlert("Lane deleted successfully",1);
  }

  public openLaneDialog(lane) {
    let dialogRef = this.dialog.open(AddLaneComponent,{
      data:lane,
      height:'auto',
      width:'700px',
      autoFocus:false
    });
    dialogRef.afterClosed().subscribe(data => {

    });
  }
  public openratesModal(lane) {
    let dialogRef = this.dialog.open(AddRatesComponent,{
      data:lane,
      height:'auto',
      width:'700px',
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



