import { Component, OnInit } from '@angular/core';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.scss']
})
export class CustomerDashboardComponent implements OnInit {

  public settings: Settings;
  public filterToggle : boolean;
  constructor(public appSettings:AppSettings){
    this.settings = this.appSettings.settings; 
    
  }

  months = [{id:1 , value:"January"} , {id:2 , value:"February"} , {id:3 , value:"March"} , {id:4 , value:"April"} , {id:5 , value:"May"} , {id:6 , value:"June"} , {id:7 , value:"July"} , {id:8 , value:"August"} , {id:9 , value:"September"} , {id:10 , value:"October"} , {id:11 , value:"November"} , {id:12 , value:"December"}];
  years = [{id:1 , value:"2015"} , {id:2 , value:"2016"} , {id:3 , value:"2017"} , {id:4 , value:"2018"} , {id:5 , value:"2019"} , {id:6 , value:"2020"}]
  
  toggleFilter() {
    this.filterToggle = !this.filterToggle;
  }
  
  ngOnInit() { 
    this.filterToggle = false;
  }
  
  // myform: FormGroup;
  projectOptions = ["Port Area Initiative", "Basement Flooding", "Dome Scanning", "Culvert Topographic", "Bridge Topographic","Town House Foundation"];
  projectOptionSelected: any;
  onprojectptionsSelected(event) {
    
  }
  siteOptions = ["MISS201905123", "MISS202684235", "MISS202612598", "MISS202758926"];
  siteOptionSelected: any;
  onsiteOptionsSelected(event) {
    
  }
  regionOptions = ["Cordillera", "Prairies", "North", "Canadian Shield", "St. Lawrence River","Atlantic","Great Lakes"];
  regionOptionSelected: any;
  onregionOptionsSelected(event) {
    
  }
  cityOptions = ["Vancouver", "Ottawa", "Regina", "Toronto", "Charlottetown", "Edmonton ", "Fredericton "];
  cityOptionSelected: any;
  oncityOptionsSelected(event) {
    
  }
  roleOptions = ['Project Manager', 'Production Team', 'Project Admin', 'Administration', 'Field Staff', 'CAD Staff', 'Finance'];
  roleOptionSelected: any;
  
  onroleOptionsSelected(event) {
    
  }
  staffOptions = ["Dwayne", "Dave", "Emily", "Joe", "Kate", "Scott", "Ryan", "Chris", "Justin", "Ken", "Dan", "Tony", "Stephanie", "Laurie"];
  staffOptionSelected: any;
  
  onstaffOptionsSelected(event) {
    
  }
  projectstageOptions = ["Initiated", "Completed", "InProcess", "Pending"];
  projectstageOptionSelected: any;
  
  onprojectstageOptionsSelected(event) {
    
  }
  billingstatusOptions = ["Paid", "Overdue", "Pending"];
  billingstatusOptionSelected: any;
  
  onbillingstatusOptionsSelected(event) {
    
  }
  archivalstatusOptions = ["Date"];
  archivalstatusOptionSelected: any;
  
  onarchivalstatusOptionsSelected(event) {
    
  }

}
