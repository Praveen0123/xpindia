
import { Component, OnInit } from '@angular/core';
import { PageEvent, MatDialog } from '@angular/material';
import { AlertService } from '../../../shared/services/alert.service';


@Component({
  selector: 'app-associates',
  templateUrl: './associates.component.html',
  styleUrls: ['./associates.component.scss']
})
export class AssociatesComponent implements OnInit {

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
      {associateName:'XPO Logistics Inc.',BA:'Yes',DA:'No',FFV:'Sindhu Cargo Transport',state:"Andhra Pradesh" , country:"India" , status:true , zone:"South-1" , district:"Visakhapatnam" , location:"Madhapur" , pincode:"500062" ,gateway:'Visakhapatnam-1',hub:'Visakhapatnam-H1'},
      {associateName:'UPS Supply Chain Solutions',BA:'Yes',DA:'Yes',FFV:'A. P. Travels',state:"Maharashtra" , country:"India" , status:false , zone:"South-2" , district:"Mumbai" , location:"Ameerpet" , pincode:"500081",gateway:'Mumbai-2',hub:'Mumbai-H2'},
      {associateName:'DHL Supply Chain',BA:'No',DA:'No',FFV:'R K Transport ',state:"Tamilnadu" , country:"India" , status:true , zone:"South-3" , district:"Coimbatore" , location:"Begumpet" , pincode:"500057",gateway:'Coimbatore-3',hub:'Coimbatore-H3'},
      {associateName:'J.B. Hunt Transport Services',BA:'No',DA:'Yes',FFV:'BITUMEN SUPPLIERS ',state:"Kerala" , country:"India" , status:false , zone:"South-5" , district:"Thiruvunanthapuram" , location:"Ranjarput" , pincode:"600124",gateway:'Thiruvunanthapuram-1',hub:'Thiruvunanthapuram-H1'},
      {associateName:'C.H. Robinson Worldwide',BA:'Yes',DA:'No',FFV:'SS Roadway Transport',state:"Karnataka" , country:"India" , status:true , zone:"South-4" , district:"Bangalore" , location:"Chinnaswamy" , pincode:"100036",gateway:'Bangalore-2',hub:'Bangalore-H2'},
      {associateName:'Ryder Supply Chain Solutions',BA:'No',DA:'Yes',FFV:'JMJ Fleet Services',state:"Telangana" , country:"India" , status:true , zone:"South-6" , district:"Rangareddy" , location:"Hawa Mahal" , pincode:"420255",gateway:'Rangareddy-5',hub:'Rangareddy-H3'},
      {associateName:'Penske Logistics',BA:'Yes',DA:'Yes',FFV:'Vennela',state:"Delhi" , country:"India" , status:false , zone:"North-1" , district:"New Delhi" , location:"Disgurbagh" , pincode:"502147",gateway:'New Delhi-5',hub:'New Delhi-2'},
      {associateName:'Lineage Logistics',BA:'No',DA:'No',FFV:'SRS Transport',state:"Assam" , country:"India" , status:true , zone:"East-2" , district:"Dispur" , location:"Amberpet" , pincode:"963214",gateway:'Dispur-2',hub:'Dispur-2'},
      {associateName:'FedEx Logistics',BA:'Yes',DA:'Yes',FFV:'Jpj Transport',state:"Haryana" , country:"India" , status:false , zone:"North-1" , district:"Chandigarh" , location:"L.B.Nagar" , pincode:"875478",gateway:'Chandigarh-3',hub:'Chandigarh-1'},
      {associateName:'Ceva Logistics',BA:'No',DA:'No',FFV:'Abha transport',state:"Goa" , country:"India" , status:true , zone:"W-2" , district:"Panaji" , location:"Jublee Hills" , pincode:"202014",gateway:'Panaji-1',hub:'Panaji-3'},
    ];
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    this.totalSize = 10;
  }

  deleteAssociates() {
    this.alertService.createAlert("Associates deleted successfully",1);
  }

  // public openassociatesDialog(location) {
  //   let dialogRef = this.dialog.open(AddpinCodesComponent,{
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




