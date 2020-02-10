import { Component, OnInit } from '@angular/core';
// import { single} from '../pie.data';
import { customerPie,secondpieinorder} from '../orders/fcl/by-customer/main-customer-pie.data';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';

@Component({
  selector: 'app-ordernew',
  templateUrl: './ordernew.component.html',
  styleUrls: ['./ordernew.component.scss']
})
export class OrdernewComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
