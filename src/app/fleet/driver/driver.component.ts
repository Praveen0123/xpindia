import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import {AddDriverDialogComponent} from './add-driver-dialog/add-driver-dialog.component';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent implements OnInit {

  imagePath = '../../../assets/img/vendor/leaflet/page_under_construction.png';
  tableList:any;
  status=['Active','Inactive']
  filterToggle: boolean;
  toggleFilter() {
      this.filterToggle = !this.filterToggle;
    }
 
    public popoverTitle: string = '<b>Confirm Delete</b>';
    public popoverMessage: string = 'Are you sure you want Delete this .?';
    public popoverStatusTitle: string = 'Confirm Status Change';
    public popoverStatusMessage: string = 'Are you sure you want to change status.?';
    public cancelClicked: boolean = false;

    constructor( public dialog:MatDialog) { }

    ngOnInit() {
      this.tableList =[
        {driver:'Suresh',phone:'9889654215',dlNumber:'AK1377IB',dlClass:'LMV',Address:'192/k Hinjawadi',city:'Pune',state:'Maharashtra',statusof:'Pending', status: true},
        {driver:'om',phone:'9512146598',dlNumber:'PD366AD',dlClass:'HMV',Address:'1/k, G-Block Marathahalli',city:'Bengaluru',state:'Karnataka',statusof:'Pickup',status:false},
        {driver:'Anand',phone:'9856421778',dlNumber:'AP564UJ',dlClass:'HGMV',Address:'305/j-block silverline apartment',city:'Lucknow',state:'Uttar Pradesh',statusof:'Proceed',status: true},
        {driver:'Mohan',phone:'7012456987',dlNumber:'PP787LK',dlClass:'HPMV/HTV',Address:'12/c Beas River Valley.',city:'Manali',state:'Himachal Pradesh',statusof:'Delivered',status: false},
      ] 
    }
    public openDriverDialog(id){
      let dialogRef =this.dialog.open(AddDriverDialogComponent,{
        data:id,
        height:'auto',
        width:'700px',
        autoFocus:true
      });
      dialogRef.afterClosed().subscribe(data=>{
  
  });
    }
}



