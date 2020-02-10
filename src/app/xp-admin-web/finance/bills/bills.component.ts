import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss']
})
export class BillsComponent implements OnInit {
  filterToggle: boolean;
  tableLists: any;
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
  public searchText: string;


  public single: any[];
  public multi: any[];
  public Double: any[];
  public ageingAnalysis: any[];
  public paymentStatus: any[];

  public showLegend = true;
  public gradient = true;
  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  };
  public showLabels = true;
  public explodeSlices = false;
  public doughnut = false;

  constructor() {
    const single = [
      {
        name: 'Serene Technologies (10000)',
        value: 10000
      },
      {
        name: 'ABC Logistics (3000)',
        value: 3000,
      },
      {
        name: 'Globex Corporation (2000)',
        value: 2000
      },
      {
        name: 'Vehement Capital Partners (3000)',
        value: 3000
      },
      {
        name: 'Rajbir (2000)',
        value: 2000
      },

    ];
    Object.assign(this, { single });
    const Double = [
      {
        name: 'Serene Technologies (8000)',
        value: 8000
      },
      {
        name: 'ABC Logistics (1300)',
        value: 1300
      },
      {
        name: 'Globex Corporation (1000)',
        value: 1000
      },
      {
        name: 'Vehement Capital Partners (1000)',
        value: 1000
      },
      {
        name: 'Rajbir (900)',
        value: 900
      },

    ];
    Object.assign(this, { Double });
    const ageingAnalysis = [
      {
        name: 'Vendor (32)',
        value: 32
      },
      {
        name: 'Current (54)',
        value: 54
      },
      {
        name: '1 - 7 Days (65)',
        value: 65
      },
      {
        name: '8 - 14 Days (76)',
        value: 76
      },
      {
        name: '15 - 21 Days (23)',
        value: 23
      },
      {
        name: '22 - 28 Days (60)',
        value: 60
      },
      {
        name: 'More Than 28 Days (45)',
        value: 45
      }

    ];
    Object.assign(this, { ageingAnalysis });

    const paymentStatus = [
      {
        name: 'Received (3000)',
        value: 3000
      },
      {
        name: 'Overdue (500)',
        value: 500
      },
      {
        name: 'Upcoming (1000)',
        value: 1000
      },
      {
        name: 'Exceptions (4000)',
        value: 4000
      }

    ];
    Object.assign(this, { paymentStatus });
  }
  ngOnInit() {
    this.tableLists = [
      { FFVName: 'DHL Logistics', FFVRates: '5', Contracts: '2', Trips: '10', Invoices: '8', CreditTerms: '15', BankingDetials: '', TDS: '', ITCCalculation: '', PaidAmount: '80,250', Outstanding: '10,000', DueAmount: '60,000', Manage: '' },
      { FFVName: 'ABC Logistics', FFVRates: '9', Contracts: '2', Trips: '14', Invoices: '14', CreditTerms: '20', BankingDetials: '', TDS: '', ITCCalculation: '', PaidAmount: '20,000', Outstanding: '45,000', DueAmount: '75,000', Manage: '' },
      { FFVName: 'Cargo', FFVRates: '4', Contracts: '2', Trips: '12', Invoices: '1', CreditTerms: '15', BankingDetials: '', TDS: '', ITCCalculation: '', PaidAmount: '50,000', Outstanding: '53,000', DueAmount: '45,000', Manage: '' },
      { FFVName: 'Gati', FFVRates: '7', Contracts: '2', Trips: '17', Invoices: '5', CreditTerms: '30', BankingDetials: '', TDS: '', ITCCalculation: '', PaidAmount: '56,000', Outstanding: '64,000', DueAmount: '31,000', Manage: '' },
      { FFVName: 'Express', FFVRates: '3', Contracts: '2', Trips: '20', Invoices: '9', CreditTerms: '20', BankingDetials: '', TDS: '', ITCCalculation: '', PaidAmount: '70,000', Outstanding: '12,000', DueAmount: '9,000', Manage: '' },
      { FFVName: 'DTDC', FFVRates: '2', Contracts: '2', Trips: '16', Invoices: '7', CreditTerms: '45 ', BankingDetials: '', TDS: '', ITCCalculation: '', PaidAmount: '30,000', Outstanding: '9,000', DueAmount: '2,000', Manage: '' }
    ];
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    // this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
  }

}
