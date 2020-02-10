import { Component, OnInit } from '@angular/core';
import { MatDialog, PageEvent } from '@angular/material';
import { PackageDetailComponent } from './package-detail/package-detail.component';

@Component({
  selector: 'app-pacagedescription',
  templateUrl: './pacagedescription.component.html',
  styleUrls: ['./pacagedescription.component.scss']
})
export class PacagedescriptionComponent implements OnInit {

  imgPath="../../../../../assets/img/vendor/leaflet/barcode.png";
  tableList : any;
  tableLists: any;
  filterToggle: boolean;
  pageEvent: PageEvent;
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
  public searchText: string;
  public count: boolean = true;
  public page: any;
  showEmpty: boolean = false;
  status = [{id:1 , value:"Shipped"} , {id:2 , value:"In Transit"} , {id:3 , value:"Delivered"}];
  constructor(public dialog:MatDialog) { }
  
  
  
  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
  }
  
 
  
  ngOnInit() {
    this.tableList = [
      {package:"101247" , description:"Description Overview LG GL-I292RPZL 260 Litres 4 Star Double Door Refrigerator presents to you an ultimate blend of power, precision and performance. This refrigerator offers stunning features with enhanced functionality. It constitutes of a Smart Invertor Compressor that performs an energy efficient performance. It offers a Smart Diagnosis System and an Auto Connect Feature makes it perfect for your modern kitchen and a must to buy product. This 260 litre double door refrigerator works on Ice Beam Door Cooling technology. "},
      {package:"454587" , description:"Top load washing machine is designed to deliver efficient performance at an affordable price. Enabled with Fuzzy Logic wash system that measures the wash load and calculates the level of water and soap needed to provide an efficient wash cycle."},
      {package:"632145" , description:"Split AC with inverter compressor: Variable speed compressor which adjusts power depending on heat load. It is most energy efficient and has lowest-noise operation Capacity: 0.8 Ton.  "},
      {package:"785412" , description:"The TREO simplicity of these classic accent chairs will instantly enhance the modernity of your Dining room. Each of these contemporary accent chairs is made from durable matte-finish moulded plastic with an ergonomically-shaped and curved seat. The legs are wooden with a cushioned seat. This item is assembly required. Treo-contemporary design Heavy duty moulded plastic seat |Glossy finish straight wood legs."},
      {package:"363625" , description:"Thread count refers to the number of horizontal and vertical threads per square inch. Generally, the higher the thread count, the stronger the sheet, and the more likely it will wear well or even soften-over time."},
      {package:"102012" , description:"Description Overview LG GL-I292RPZL 260 Litres 4 Star Double Door Refrigerator presents to you an ultimate blend of power, precision and performance. This refrigerator offers stunning features with enhanced functionality. It constitutes of a Smart Invertor Compressor that performs an energy efficient performance. It offers a Smart Diagnosis System and an Auto Connect Feature makes it perfect for your modern kitchen and a must to buy product. This 260 litre double door refrigerator works on Ice Beam Door Cooling technology."},
      {package:"784596" , description:"The Bajaj DC 2016 glacier air cooler and bear the humidity of summer, it has 67 litre tank capacity so that you can enjoy refreshing cool air throughout the day."},
      {package:"896540" , description:"The mega-size Bajaj DC 2016 Glacier waves a wand of cooling over any hot summer. Stay cool and comfortable in heat and humidity with its powerful air delivery"},
    ];
    this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    this.totalSize = 8;
  }

  openDescriptionDialog(packageDetail) {
    let dialoRef = this.dialog.open(PackageDetailComponent,{
      data:packageDetail,
      height:'auto',
      width:'600px',
      autoFocus:false
    });
    dialoRef.afterClosed().subscribe(data=> {})
  }

}
