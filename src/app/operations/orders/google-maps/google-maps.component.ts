import { Component } from '@angular/core';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
declare var google: any;
//declare var google: any;

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html'
})
export class GoogleMapsComponent {
  public lat: number = 12.9716;
  public lng: number = 77.5946;
  public latnew: number = 41.8781;
  public lngnew: number = -87.6298;
  public latnew2: number = 32.7157;
  public lngnew2: number = -117.1611;
  public latnew3: number = 37.7749;
  public lngnew3: number = -122.4194;
  public latnew4: number = 49.2827;
  public lngnew4: number = -123.1207;
  public zoom: number = 8;
  public settings: Settings;
  //public MapTypeId: 'hybrid';
  constructor(public appSettings:AppSettings) { 
    this.settings = this.appSettings.settings; 
  }

  public zoomControlOptions: any = {
    style: google.maps.ControlPosition.small,
    position: google.maps.ControlPosition.TOP_LEFT,
  };
  /* public zoomControlOptions: any = {
    style: google.maps.ControlPosition.small,
    position: google.maps.ControlPosition.TOP_LEFT
  }; */
}