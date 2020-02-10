import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shared/services/alert.service';
import { PageEvent, MatDialog } from '@angular/material';

@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.scss']
})
export class ShipmentComponent implements OnInit {

  tableList: any;
  tableLists: any;
  status = [{ id: 1, value: "Active" }, { id: 2, value: "Inactive" }];
  filterToggle: boolean;
  // pageEvent: PageEvent;
  // public pageSize = 5;
  // public currentPage = 0;
  // public totalSize = 0;
  // public searchText: string;
  // public page: any;
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

  constructor(public dialog: MatDialog, public alertService: AlertService) { }

  ngOnInit() {
    this.tableList = [
      { lane: 'HYD-DEL', ratesperkg: '15', VolumeConversion: '120', Fov: '0.12', FuelCharge: '2', GNCCharge: '20', HandlingCharges: '100', OthersCharges: '500' },
      { lane: 'PUNE-JAI', ratesperkg: '17', VolumeConversion: '145', Fov: '0.34', FuelCharge: '8', GNCCharge: '80', HandlingCharges: '250', OthersCharges: '700' },
      { lane: 'MP-UP', ratesperkg: '25', VolumeConversion: '170', Fov: '1.23', FuelCharge: '10', GNCCharge: '45', HandlingCharges: '200', OthersCharges: '120' },
      { lane: 'HP-DEL', ratesperkg: '19', VolumeConversion: '156', Fov: '1.89', FuelCharge: '5', GNCCharge: '70', HandlingCharges: '300', OthersCharges: '300' },
      { lane: 'HP-UP', ratesperkg: '16', VolumeConversion: '123', Fov: '0.56', FuelCharge: '15', GNCCharge: '90', HandlingCharges: '150', OthersCharges: '450' },
    ];
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    this.totalSize = 10;
  }


  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
  }
}













