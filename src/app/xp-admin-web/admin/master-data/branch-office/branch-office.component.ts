import { Component, OnInit } from '@angular/core';
import { PageEvent, MatDialog } from '@angular/material';
import { AlertService } from '../../../../shared/services/alert.service';


@Component({
  selector: 'app-branch-office',
  templateUrl: './branch-office.component.html',
  styleUrls: ['./branch-office.component.scss']
})
export class BranchOfficeComponent implements OnInit {

  tableList:any;
  tableLists: any;
  status = [{id:1 , value:"Active"} , {id:2 , value:"Inactive"}];
  countries=[{id:1 , value:"India"} , {id:2 , value:"China"}]
  filterToggle: boolean;
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

  constructor(public dialog:MatDialog,public alertService:AlertService) { }

  ngOnInit() {
    this.tableList = [
      {branchOffice:'Gachibowli',state:"Andhra Pradesh" , country:"India" , status:true , zone:"South-1" , district:"Adilabad" , location:"2" , pincode:"9" ,gateway:'Adilabad-1',hub:'Adilabad-H1'},
      {branchOffice:'Borivali',state:"Maharashtra" , country:"India" , status:false , zone:"South-2" , district:"Mumbai" , location:"5" , pincode:"5",gateway:'Mumbai-2',hub:'Mumbai-H2'},
      {branchOffice:'Begumpet',state:"Tamilnadu" , country:"India" , status:true , zone:"South-3" , district:"Coimbatore" , location:"6" , pincode:"10",gateway:'Coimbatore-3',hub:'Coimbatore-H3'},
      {branchOffice:'Ranjarput',state:"Kerala" , country:"India" , status:false , zone:"South-5" , district:"Thiruvunanthapuram" , location:"7" , pincode:"7",gateway:'Thiruvunanthapuram-1',hub:'Thiruvunanthapuram-H1'},
      {branchOffice:'Chinnaswamy',state:"Karnataka" , country:"India" , status:true , zone:"South-4" , district:"Bangalore" , location:"1" , pincode:"4",gateway:'Bangalore-2',hub:'Bangalore-H2'},
      {branchOffice:'Hawa Mahal',state:"Telangana" , country:"India" , status:true , zone:"South-6" , district:"Rangareddy" , location:"2" , pincode:"6",gateway:'Rangareddy-5',hub:'Rangareddy-H3'},
      {branchOffice:'Disgurbagh',state:"Delhi" , country:"India" , status:false , zone:"North-1" , district:"New Delhi" , location:"3" , pincode:"5",gateway:'New Delhi-5',hub:'New Delhi-2'},
      {branchOffice:'Amberpet',state:"Assam" , country:"India" , status:true , zone:"East-2" , district:"Dispur" , location:"4" , pincode:"3",gateway:'Dispur-2',hub:'Dispur-2'},
      {branchOffice:'L.B.Nagar',state:"Haryana" , country:"India" , status:false , zone:"North-1" , district:"Chandigarh" , location:"4" , pincode:"7",gateway:'Chandigarh-3',hub:'Chandigarh-1'},
      {branchOffice:'Jublee Hills',state:"Goa" , country:"India" , status:true , zone:"W-2" , district:"Panaji" , location:"2" , pincode:"9",gateway:'Panaji-1',hub:'Panaji-3'},
    ];
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    this.totalSize = 10;
  }

  deleteBranchOffice() {
    this.alertService.createAlert("Branch Office deleted successfully",1);
  }

  // public openBranchOfficeDialog(location) {
  //   let dialogRef = this.dialog.open(AddLocationComponent,{
  //     data:location,
  //     height:'auto',
  //     width:'600px',
  //     autoFocus:false
  //   });
  //   dialogRef.afterClosed().subscribe(data => {

  //   });
  // }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
  }


}





