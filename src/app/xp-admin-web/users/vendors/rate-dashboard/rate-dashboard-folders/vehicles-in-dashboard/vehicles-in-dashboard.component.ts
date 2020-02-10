import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DocumentsOfVehicleComponent } from './documents-of-vehicle/documents-of-vehicle.component';
import { AddVehicleInDashboardComponent } from './add-vehicle-in-dashboard/add-vehicle-in-dashboard.component';
// import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';

@Component({
  selector: 'app-vehicles-in-dashboard',
  templateUrl: './vehicles-in-dashboard.component.html',
  styleUrls: ['./vehicles-in-dashboard.component.scss']
})
export class VehiclesInDashboardComponent implements OnInit {

  assets: any[] = [];
  public pageSize = 5;
  tableLists:any;
  public currentPage = 0;
  public totalSize = 0;
  filterToggle = false;
  constructor(public dialog: MatDialog) { }
  
  ngOnInit() {
    this.assets = [
      { truckid: 'TR987982323', status: 1 ,units:'Kgs',fleetLevel: 'Fleet 1', vehicle_type: 'Box Trucks', year: '2019', make: 'BMW Group', model: 'Iveco PowerStar 420 E5', vin: 'WBABE7345SS3FF', gross_vehicle_weight: '8500', no_of_vehicles: 10 , cbm:"20" , payload:"40" },
      { truckid: 'TR187982323', status: 0 ,units:'Kgs',fleetLevel: 'Fleet 2', vehicle_type: 'Refrigerator Trucks', year: '2018', make: 'Daimler AG', model: 'MAZ-5440 ', vin: 'TMB324324SDFSD32434', gross_vehicle_weight: '7500', no_of_vehicles: 2  , cbm:"25" , payload:"50" },
      { truckid: 'TR567982323', status: 1 ,units:'Lbs',fleetLevel: 'Fleet 3', vehicle_type: 'Dump Trucks', year: '2018', make: 'Fiat Chrysler Automobiles', model: 'KrAZ 6322', vin: 'IGD67756GFGDG', gross_vehicle_weight: '1400', no_of_vehicles: 4  , cbm:"28" , payload:"30" },
      { truckid: 'TR98482323', status: 0 ,units:'Kgs',fleetLevel: 'Fleet 1', vehicle_type: 'Tank Trucks', year: '2017', make: 'Ford Motor Company', model: 'Kenworth C509', vin: 'FHTT435SAGHH435435', gross_vehicle_weight: '6000', no_of_vehicles: 2  , cbm:"32" , payload:"15" },
      { truckid: 'TR987147323', status: 1 ,units:'Lbs',fleetLevel: 'Fleet 2', vehicle_type: 'Trailer', year: '2017', make: 'General Motors Company', model: 'Ford F-150', vin: 'IJK45432F34535', gross_vehicle_weight: '30000', no_of_vehicles: 4  , cbm:"30" , payload:"55" },
      { truckid: 'TR987982254', status: 1 ,units:'Kgs',fleetLevel: 'Fleet 1', vehicle_type: 'Semi-Trailer Trucks', year: '2019', make: 'Hyundai Motor Company', model: 'GMC Canyon', vin: 'OLK234FFGGGWSS', gross_vehicle_weight: '12000', no_of_vehicles: 1  , cbm:"19" , payload:"60" }
    ];
    this.totalSize = this.assets.length;
    this.tableLists = this.assets.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
  }

  openAssetDialog(status) {
    let dialogRef = this.dialog.open(AddVehicleInDashboardComponent, {
      data: status,
      height: 'auto',
      width: '600px',
      autoFocus: false,
      panelClass: 'my-dialog'
    });

    dialogRef.afterClosed().subscribe(prospects => {

    });
  }

  openDocsDialog(status) {
    let dialogRef = this.dialog.open(DocumentsOfVehicleComponent, {
      data: status,
      height: 'auto',
      width: '600px',
      autoFocus: false,
      panelClass: 'my-dialog'
    });

    dialogRef.afterClosed().subscribe(prospects => {

    });
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.tableLists = this.assets.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
  }

  // uploadDialog() {
  //   let dialogRef = this.dialog.open(UploadDocsDialogComponent, {
  //     data: null,
  //     height: '500px',
  //     width: '600px',
  //     autoFocus: false,
  //     panelClass: 'my-dialog'
  //   });

  //   dialogRef.afterClosed().subscribe(prospects => {

  //   });
  // }
  // openDeleteDialog() {
  //   let dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
  //     data: null,
  //     height: 'auto',
  //     width: 'auto',
  //     autoFocus: false
  //   });

  //   dialogRef.afterClosed().subscribe(prospects => {

  //   });
  // }

}
