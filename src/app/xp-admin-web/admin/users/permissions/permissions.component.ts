import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AlertService } from 'src/app/shared/services/alert.service';


@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.scss']
})
export class PermissionsComponent implements OnInit {
  tableList: any;
  tableLists:any;
  id: any;
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
  permissioncheck = true;
  constructor(private location: Location, private route: ActivatedRoute, private alertService: AlertService) { }

  // ngOnInit() {
  //   let UserId = this.route.snapshot.paramMap.get('id');
  //   this.id = decodeURIComponent(decodeURIComponent(UserId))
  //   console.log("id", this.id);
  //   this.getPermissions();
  // }
  ngOnInit() {
    this.tableList = [
      {ScreenName:"Analytics"},
      {ScreenName:"Orders"},
      {ScreenName:"Customers"},
      {ScreenName:"FFV"},
      {ScreenName:"Operations"},
      {ScreenName:"Finance"},
      {ScreenName:"Master Data"},
      {ScreenName:"Roles & Users"},
      {ScreenName:"KPI"},
      {ScreenName:"Contracts"},
      {ScreenName:"Lane & Rates"},
      {ScreenName:"Network Schedule"},
      {ScreenName:"Vehicle types"},
      {ScreenName:"Testimonials"},
      {ScreenName:"Offers"},
      {ScreenName:"Settings"},
  
    ];
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    this.totalSize = 10;
  }
  getPermissions() {
    let body = {
      "UserId": this.id
    }
    // this.usersService.getuserpermissions(body).subscribe(
    //   data => {
    //     console.log(data);
    //     this.tableList = data['Permissions'];
    //     for (let i = 0; i < this.tableList.length; i++) {
    //       this.tableList[i].UserId = this.id
    //     }
    //   }
    // )
  }

  change(index, name, value) {
    this.tableList[index][name] = value;
  }

  saveUserPermissions() {
    let body = {
      "Permissions": this.tableList
    }
    console.log("body", body);
    // this.usersService.saveuserpermissions(body).subscribe(
    //   data => {
    //     console.log(data)
        
    //     if (data['Success'] == true) {
    //       this.alertService.createAlert(data['Message'], 1);
    //       this.getPermissions();
    //     } else {
    //       this.alertService.createAlert(data['Message'], 0);
    //     }
    //   }
    // )
  }

  goBack() {
    this.location.back();
  }

}
