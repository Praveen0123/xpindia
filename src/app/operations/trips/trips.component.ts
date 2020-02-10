import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss']
})
export class TripsComponent implements OnInit {
  tableList:any;
  status=['Active','Inactive']
  filterToggle: boolean;
  toggleFilter() {
      this.filterToggle = !this.filterToggle;
    }
 
    public popoverTitle: string = '<b>Confirm Decline</b>';
    public popoverMessage: string = 'Are you sure you want to decline this.?';
    public popoverStatusTitle: string = 'Confirm Status Change';
    public popoverStatusMessage: string = 'Are you sure you want to change status.?';
    public cancelClicked: boolean = false;

 

  constructor( public dialog:MatDialog) { }

  ngOnInit() {
    this.tableList =[
      {vehicleRegistrationNo:'DL 07 AG 3354',lane:'DEL - LUH',orign:'Delhi',dlnumber:'AK1377IB',startdate:'12/25/2019',finishdate:'1/25/2020',destination:'Ludhiana',statusof:'Pending', status: true,type:'FCL',packages:'25',pickuplocation:'Hauz Khas', payload:"40 Tons"  ,cbm:'20 Tons', tat:"7",pickuptime:"9:30 AM",vendors:'Rahul',driver:'Suresh'},
      {vehicleRegistrationNo:'PB 12 DS 2565',lane:'LUH - VNS',orign:'Ludhiana',dlnumber:'PD366AD',startdate:'12/26/2019',finishdate:'1/27/2019',destination:'Varanasi',statusof:'Pickup',status:false,type:'LCL',packages:'10',pickuplocation:'Hauz Khas', payload:"20 Tons"  ,cbm:'25 Tons', tat:"8",pickuptime:"10:45 Am",vendors:'Manish',driver:'Anand'},
      {vehicleRegistrationNo:'KA 45 HG 4578',lane:'HBX - BOM',orign:'Hubli',dlnumber:'AP564UJ',startdate:'12/28/2019',finishdate:'2/2/2019',destination:'Mumbai',statusof:'Proceed',status: true,type:'BB',packages:'20',pickuplocation:'Hauz Khas', payload:"25 Tons"  ,cbm:'30 Tons', tat:"4",pickuptime:"8:00 PM",vendors:'Vikas',driver:'Mohan'},
      {vehicleRegistrationNo:'MH 45 GF 4578',lane:'BOM - JAI',orign:'Mumbai',dlnumber:'PP787LK',startdate:'12/30/2019',finishdate:'2/5/2019',destination:'Jaipur',statusof:'Delivered',status: false,type:'FCl',packages:'10',pickuplocation:'Hauz Khas', payload:"22 Tons"  ,cbm:'35 Tons', tat:"6",pickuptime:"4:00 PM",vendors:'Nayan',driver:'Kamal'},
    ] 
  }

//   public openacceptDialog(id){
//     let dialogRef =this.dialog.open(AcceptDialogComponent,{
//       data:id,
//       height:'auto',
//       width:'700px',
//       autoFocus:true
//     });
// dialogRef.afterClosed().subscribe(data=>{

// });
//   }

}