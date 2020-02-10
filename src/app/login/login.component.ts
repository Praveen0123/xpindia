import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { emailValidator } from '../theme/utils/app-validators';
import { AppSettings } from '../app.settings';
import { Settings } from '../app.settings.model';
import { AlertService } from '../shared/services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls:['./login.component.css'],
  providers:[AlertService]
})
export class LoginComponent {
public TypeString:string="password";
public isPassword:boolean=true;

  public form:FormGroup;
  public settings: Settings;
  constructor(public appSettings:AppSettings, public fb: FormBuilder, public router:Router,public alertService:AlertService){
    this.settings = this.appSettings.settings; 
    this.form = this.fb.group({
      'email': [null, Validators.compose([Validators.required])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])] 
    });
  }

  public onSubmit(values:Object):void {
    if (this.form.valid) {
      if (values['email'] == 'admin@xpindia.com' && values['password'] == 'Password1!1') {
        this.router.navigate(['/instanttransport']);
        this.alertService.createAlert("Login Success",1);
        localStorage.setItem("loginUser",values['email']);
      }
      else if(values['email'] == 'vendor@vendor.com' && values['password'] == 'Password1!1') {
        this.router.navigate(['/instanttransport/fleetDashboard']);
        this.alertService.createAlert("Login Success",1);
        localStorage.setItem("loginUser",values['email']);

      }
      else if(values['email'] == 'customer@xpindia.com' && values['password'] == 'Password1!1') {
        this.router.navigate(['/instanttransport/customerdashboard']);
        this.alertService.createAlert("Login Success",1);
        localStorage.setItem("loginUser",values['email']);

      }
      else {
        this.alertService.createAlert("Invalid Credentials",0);
      }
    }
  }

  public ChangetextType(isPassword){
if(isPassword){
  this.TypeString="password"
}else{
  this.TypeString="text"
}
  }

  // ngAfterViewInit(){
  //   this.settings.loadingSpinner = false; 
  // }

  ngAfterViewInit(){
    setInterval(() => {
      this.settings.loadingSpinner = false; 
    },500)
  }
}