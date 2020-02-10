import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormControl } from '@angular/forms';
import { AddDriverInDashboardComponent } from './add-driver-in-dashboard/add-driver-in-dashboard.component';

@Component({
  selector: 'app-drivers-in-dashboard',
  templateUrl: './drivers-in-dashboard.component.html',
  styleUrls: ['./drivers-in-dashboard.component.scss']
})
export class DriversInDashboardComponent implements OnInit {

  drivers: any[] = [];
  tableLists:any;
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
  filterToggle = false;
  statu = new FormControl();
  dlClass = new FormControl();
  constructor(public dialog: MatDialog) { }
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this lead.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change this lead status.?';
  public cancelClicked: boolean = false;
  
  status = [{'status_id':'1','status_name':'Active'},
  {'status_id':'2','status_name':'Inactive'}
]
class = [{'class_id':'1','class_name':'Class C'},{'class_id':'2','class_name':'Class D'},{'class_id':'3','class_name':'Class A'},
{'class_id':'4','class_name':'Class B'}]

  ngOnInit() {
    this.drivers = [
      { docs:'5',country:'India',state:'Telangana',city: 'Hyderabad', address1: '8461 Edgefield Ave. Menasha, WI 54952', last:'PEREZ',name: 'JACKSON',phone: '(541) 754-3010', email: 'jackson@gmail.com', dlnumber: 'AK120111062821', type: 'Class C', status: 1 },
      { docs:'6',country:'India',state:'Delhi',city: 'delhi', address1: '9277 Henry Smith Ave.Stouffville, ON L4A 5Y2',last:'THOMAS', name: 'PEREZ', phone: '(856) 774-3010', email: 'perez@gmail.com', dlnumber: 'SL1120110062821', type: 'Class D', status: 1 },
      { docs:'4',country:'India',state:'Karnataka',city: 'Bangalore', address1: '208 Carpenter Rd.Springfield Gardens, NY 11413',last:'PEREZ', name: 'WHITE', phone: '(847) 523-3010', email: 'white@gmail.com', dlnumber: 'AK1320110462821', type: 'Class A', status: 1 },
      { docs:'6',country:'India',state:'Rajasthan',city: 'Jaipur', address1: '8575 Laurel LaneBelleville, ON K8R 1R0', last:'CARTER',name: 'THOMAS', phone: '(241) 754-8547', email: 'thomas@gmail.com', dlnumber: 'GLH1420130062821', type: 'Class E', status: 1 },
      { docs:'6',country:'India',state:'Rajasthan',city: 'Udaipur', address1: '8027 Meadowbrook RoadWinfield, BC V4V 8R7', last:'JACKSON',name: 'CARTER', phone: '(985) 457-1245', email: 'carter@gmail.com', dlnumber: 'UK1420114062821', type: 'Class E', status: 0 },
      { docs:'5',country:'India',state:'Gujarat',city: 'Rajkot', address1: '9018 High StreetAmsterdam, NY 12010', name: 'GOMEZ', last:'CARTER',phone: '(658) 698-7852', email: 'gomex@gmail.com', dlnumber: 'LO1120110022821', type: 'CDL', status: 1 }
    ];
    this.totalSize = 6;
    this.tableLists = this.drivers.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
  }

  openDriverDialog(status) {
    let dialogRef = this.dialog.open(AddDriverInDashboardComponent, {
      data: status,
      height: 'auto',
      width: '600px',
      autoFocus: false,
      panelClass: 'my-dialog'
    });

    dialogRef.afterClosed().subscribe(prospects => {

    });
  }
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
  selectAll(ev, type) {
    if (ev._selected) {
        if (type == 'status') {
            let temp = [];
            for (let i = 0; i < this.status.length; i++) {
                temp.push(this.status[i]['status_id']);
            }
            this.statu.setValue(temp);
        }
        if (type == 'class') {
            let temp = [];
            for (let i = 0; i < this.class.length; i++) {
                temp.push(this.class[i]['class_id']);
            }
            this.dlClass.setValue(temp);
        }
        ev._selected = true;
    }
    if (ev._selected == false) {
        if (type == 'status')
            this.statu.setValue([]);
        if (type == 'class')
            this.dlClass.setValue([]);
    }
}
   selectOne(ev, type) {
    if (type == 'status') {
        ((this.status.length <= this.statu.value.length) && !ev._selected) ? ev.select() : ev.deselect();
    }
    if (type == 'class') {
        ((this.class.length <= this.dlClass.value.length) && !ev._selected) ? ev.select() : ev.deselect();
    }
}

clearFilters() {
  this.statu.setValue([]);
 this.dlClass.setValue([]);
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.tableLists = this.drivers.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
  }

}
