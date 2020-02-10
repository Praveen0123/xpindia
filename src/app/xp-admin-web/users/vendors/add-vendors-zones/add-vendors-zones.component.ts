import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-vendors-zones',
  templateUrl: './add-vendors-zones.component.html',
  styleUrls: ['./add-vendors-zones.component.scss']
})
export class AddVendorsZonesComponent implements OnInit {
  checkbox:boolean=true;
  checkboxfalse:boolean=false;
 
  constructor() { }

  ngOnInit() {
  }

}
