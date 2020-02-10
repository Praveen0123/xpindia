import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AcceptDialogComponent} from './accept-dialog/accept-dialog.component';
import {LoadDialogComponent} from './load-dialog/load-dialog.component';

@Component({
  selector: 'app-loads',
  templateUrl: './loads.component.html',
  styleUrls: ['./loads.component.scss']
})
export class LoadsComponent implements OnInit {

  imagePath="../../assets/img/vendor/leaflet/page_under_construction.png";
  
  tableList:any;
 status=['Active','Inactive']
 filterToggle: boolean;
 toggleFilter() {
     this.filterToggle = !this.filterToggle;
   }

   public popoverTitle: string = '<b>Confirm Decline</b>';
   public popoverMessage: string = 'Are you sure you want to decline this load.?';
   public popoverStatusTitle: string = 'Confirm Status Change';
   public popoverStatusMessage: string = 'Are you sure you want to change status.?';
   public cancelClicked: boolean = false;
  //  public popoverleadTitle:string ='<b>Confirm Convert</b>'
  //  public popoverleadMessage:string='Are you sure you want to convert this lead to prospect ?'

  constructor( public dialog:MatDialog) { }

  ngOnInit() {
    this.tableList =[
      {vehicle:'DL 07 AG 3354',lane:'DEL - LUH',orign:'DEL',mt:'18.2 tonnes',startdate:'12/25/2019',finishdate:'1/25/2020',destination:'LUH',statusof:'Pending', status: true},
      {vehicle:'PB 12 DS 2565',lane:'LUH - VNS',orign:'LUH',mt:'16.2 tonnes',startdate:'12/26/2019',finishdate:'1/27/2019',destination:'VNS',statusof:'Pickup',status:false},
      {vehicle:'KA 45 HG 4578',lane:'HBX - BOM',orign:'HBX',mt:'14.2 tonnes',startdate:'12/28/2019',finishdate:'2/2/2019',destination:'BOM',statusof:'Proceed',status: true},
      {vehicle:'MH 45 GF 4578',lane:'BOM - JAI',orign:'BOM',mt:'12.2 tonnes',startdate:'12/30/2019',finishdate:'2/5/2019',destination:'JAI',statusof:'Delivered',status: false},
    ] 
  }

  public openacceptDialog(id){
    let dialogRef =this.dialog.open(AcceptDialogComponent,{
      data:id,
      height:'auto',
      width:'700px',
      autoFocus:true
    });
dialogRef.afterClosed().subscribe(data=>{

});
  }

  public openloadDialog(id){
    let dialogRef =this.dialog.open(LoadDialogComponent,{
      data:id,
      height:'auto',
      width:'700px',
      autoFocus:true
    });
    dialogRef.afterClosed().subscribe(data=>{

});
  }
}







