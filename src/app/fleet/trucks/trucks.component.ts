import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import {AddTruckDialogComponent} from './add-truck-dialog/add-truck-dialog.component';
import {AlertService} from '../../shared/services/alert.service'

@Component({
  selector: 'app-trucks',
  templateUrl: './trucks.component.html',
  styleUrls: ['./trucks.component.scss']
})
export class TrucksComponent implements OnInit {

  imagePath = '../../../assets/img/vendor/leaflet/page_under_construction.png';
  tableList:any;
  status=['Active','Inactive']
  filterToggle: boolean;
  toggleFilter() {
      this.filterToggle = !this.filterToggle;
    }
 
    public popoverTitle: string = '<b>Confirm Delete</b>';
    public popoverMessage: string = 'Are you sure you want Delete this truck details .?';
    public popoverStatusTitle: string = 'Confirm Status Change';
    public popoverStatusMessage: string = 'Are you sure you want to change status.?';
    public cancelClicked: boolean = false;

    constructor( public dialog:MatDialog, public alertService:AlertService ) { }

    ngOnInit() {
      this.tableList =[
        {truckid:'AR 89723',year:'2014',make:'Ashoke Leyland',model:'Ecomet1214',Registration:'AP 16 KS 1234',Chassis:'78AS4578',Engine:'HJ16985',Size:'12 X 20 X 15', status: true},
        {truckid:'TR 18798',year:'2015',make:'Mahindra & Mahindra',model:'Blaz0x55',Registration:'TS 07 ED 9991',Chassis:'AK56985',Engine:'TG56985',Size:'14 X 21 X 16',status:false},
        {truckid:'AP 45789',year:'2016',make:'Eicher Motors',model:'Eicher pro 5019',Registration:'MH 41 TD 1133 ',Chassis:'TGAS457',Engine:'KJ56985',Size:'10 X 18 X 14',status: true},
        {truckid:'DL 78455',year:'2017',make:'Volvo',model:'volvo FH16',Registration:'DL 06 DD 5335',Chassis:'KL12457i',Engine:'HG569856',Size:'16 X 22 X 18',status: false},
      ] 
    }
    public opentruckidDialog(id){
      let dialogRef =this.dialog.open(AddTruckDialogComponent,{
        data:id,
        height:'auto',
        width:'700px',
        autoFocus:true
      });
      dialogRef.afterClosed().subscribe(data=>{
  
  });
    }

    deletetruck(){
      this.alertService.createAlert('Successfully deleted.', 1);
      }

   

  

}

