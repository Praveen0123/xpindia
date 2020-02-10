import { Component, OnInit } from '@angular/core';
import { MatDialog ,PageEvent} from '@angular/material';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss']
})
export class TripsComponent implements OnInit {
  tableList:any;
  pageEvent: PageEvent;
  tableLists : any;
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
  public searchText: string;
  public page: any;
  selectedListItem:any;
  public item :any;
  dates = [{date:"Fri,10th Jan" , orders:"15"} , {date:"Sat,11th Jan" , orders:"11"} , {date:"Sun,12th Jan" , orders:"18"} , {date:"Mon,13th Jan" , orders:"12"} , {date:"Tue,14th Jan" , orders:"14"} , {date:"Wed,15th Jan" , orders:"19"} , {date:"Thu,16th Jan" , orders:"8"} , {date:"Fri,17th Jan" , orders:"10"} , {date:"Sat,18th Jan" , orders:"18"} , {date:"Sun,19th Jan" , orders:"17"} , {date:"Mon,20th Jan" , orders:"10"} , {date:"Tue,21th Jan" , orders:"17"} , {date:"Wed,22nd Jan" , orders:"16"} , {date:"Thu,23rd Jan" , orders:"10"} , {date:"Fri,24th Jan" , orders:"15"} , {date:"Sat,25th Jan" , orders:"9"} , {date:"Sun,26th Jan" , orders:"5"} , {date:"Mon,27th Jan" , orders:"12"} , {date:"Tue,28th Jan" , orders:"7"} , ];
  
  
  // status=['Active','Inactive']
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
    this.selectedListItem = this.dates[0];
   
    this.tableList =[
      {vehicleRegistrationNo:'DL 07 AG 3354',district:'Delhi',orign:'Delhi-1',dlnumber:'AK1377IB',startdate:'12/25/2019',finishdate:'1/25/2020',destination:'Ludhiana-2',statusof:'Pending', status: true,type:'FCL',packages:'25',pickuplocation:'Hauz Khas', payload:"40"  ,cbm:'20 ', vehicletype:'50 feet',tat:"7",expectedtime:"0800H", std:'1300H',station:'Kolhapur',eta:'0800H',vendors:'Rahul',driver:'Suresh',ETA:'0100H',package:'11',ATA:'0700H',ATD:'01300H',statuss:"Delivered" ,},
      {vehicleRegistrationNo:'PB 12 DS 2565',district:'Pune',orign:'Pune-2',dlnumber:'PD366AD',startdate:'12/26/2019',finishdate:'1/27/2019',destination:'Varanasi-1',statusof:'Pickup',status:false,type:'LCL',packages:'10',pickuplocation:'Hauz Khas', payload:"20"  ,cbm:'25 ', vehicletype:'30 feet',tat:"8",expectedtime:"1800H", std:'1200H',station:'Mumbai',eta:'0900H',vendors:'Manish',driver:'Anand',ETA:'01300H',package:'25',ATA:'01300H',ATD:'1800H',statuss:"In Transit"},
      {vehicleRegistrationNo:'KA 45 HG 4578',district:'Hubli',orign:'Hubli-5',dlnumber:'AP564UJ',startdate:'12/28/2019',finishdate:'2/2/2019',destination:'Mumbai-5',statusof:'Proceed',status: true,type:'BB',packages:'20',pickuplocation:'Hauz Khas', payload:"25"  ,cbm:'30 ', vehicletype:'15 feet',tat:"4",expectedtime:"0900H", std:'1700H',station:'Sinnar',eta:'0930H',vendors:'Vikas',driver:'Mohan',ETA:'1800H',package:'15',ATA:'01300H',ATD:'1200H',statuss:"Delivered"},
      {vehicleRegistrationNo:'MH 45 GF 4578',district:'Mumbai',orign:'Mumbai-3',dlnumber:'PP787LK',startdate:'12/30/2019',finishdate:'2/5/2019',destination:'Jaipur-2',statusof:'Delivered',status: false,type:'FCl',packages:'10',pickuplocation:'Hauz Khas', payload:"22"  ,cbm:'35', vehicletype:'10 feet',tat:"6",expectedtime:"0500H", std:'1800H',station:'Faridabad',eta:'0730H',vendors:'Nayan',driver:'Kamal',ETA:'1400H',package:'16',ATA:'1800H',ATD:'0800H',statuss:"In Transit"},
    
    ] 
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    this.totalSize = 8;
    
   
  }
  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
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
scrollKanban(side) {
  if(side == 'right')
  document.getElementById('container').scrollLeft += 250;
  if(side == 'left')
  document.getElementById('container').scrollLeft -= 250;
}

listNewClick(event, newValue) {
  console.log(newValue)
  this.selectedListItem = newValue;
  // this.item = newValue.name;
}

 

}
