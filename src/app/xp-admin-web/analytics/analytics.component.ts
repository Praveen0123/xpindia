import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';
import { Router } from '@angular/router';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { PageEvent } from '@angular/material';


@Component({
    selector: 'app-analytics',
    templateUrl: './analytics.component.html',
    styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
    capacity: { 'Name': string; 'Total1': string; 'Utilization1': string; 'Total2': string; 'Utilization2': string; }[];
    Exception: any;
    trips: { 'OnTime1': string; 'Delayed1': string; 'OnTime2': string; 'Delayed2': string; }[];
    finance: { 'Total1': string; 'Overdue1': string; 'Total2': string; 'Overdue2': string; }[];
    LoadFactor: { 'Name': string; 'FCL': string; 'Express': string; 'Bespoke': string; }[];
    Sales: { 'FCL': string; 'Express': string; 'Bespoke': string; 'Total': string; }[];

    constructor(public appSettings: AppSettings, public router: Router) {
        this.settings = this.appSettings.settings;
    }

    filterToggle: boolean;
    pageEvent: PageEvent;
    public pageSize = 5;
    public currentPage = 0;
    public totalSize = 0;
    public searchText: string;
    public page: any;
    public settings: Settings;

    webchart = new Chart({
        chart: {
            type: 'column'
        },
        colors: ['#ff8000 ', '#87ceeb', '#007F00'],
        title: {
            text: 'Offline Vs Online'
        },
        subtitle: {
            text: ''
        },
        accessibility: {
            announceNewData: {
                enabled: true
            }
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Leads'
            }

        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                pointWidth: 40,
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.1f}'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        },

        series: [
            {
                name: 'Campaign',
                colorByPoint: true,
                data: [
                    {
                        name: 'Offline',
                        y: 35,
                        drilldown: 'Offline'
                    },
                    {
                        name: 'Online',
                        y: 37,
                        drilldown: 'Online'
                    },
                ]
            }
        ],
        drilldown: {
            series: [
                {
                    name: 'Offline ',
                    id: 'Offline ',
                    data: [
                        [
                            'v65.0',
                            5
                        ],
                        [
                            'v64.0',
                            1.3
                        ],
                        [
                            'v63.0',
                            53.02
                        ],
                        [
                            'v62.0',
                            1.4
                        ],
                        [
                            'v61.0',
                            0.88
                        ],
                        [
                            'v60.0',
                            0.56
                        ],
                        [
                            'v59.0',
                            0.45
                        ],
                        [
                            'v58.0',
                            0.49
                        ],
                        [
                            'v57.0',
                            0.32
                        ],
                        [
                            'v56.0',
                            0.29
                        ],
                        [
                            'v55.0',
                            0.79
                        ],
                        [
                            'v54.0',
                            0.18
                        ],
                        [
                            'v51.0',
                            0.13
                        ],
                        [
                            'v49.0',
                            2.16
                        ],
                        [
                            'v48.0',
                            0.13
                        ],
                        [
                            'v47.0',
                            0.11
                        ],
                        [
                            'v43.0',
                            0.17
                        ],
                        [
                            'v29.0',
                            0.26
                        ]
                    ]

                },
                {
                    name: 'Online ',
                    id: 'Online ',
                    data: [
                        [
                            'v58.0',
                            1.02
                        ],
                        [
                            'v57.0',
                            7.36
                        ],
                        [
                            'v56.0',
                            0.35
                        ],
                        [
                            'v55.0',
                            0.11
                        ],
                        [
                            'v54.0',
                            0.1
                        ],
                        [
                            'v52.0',
                            0.95
                        ],
                        [
                            'v51.0',
                            0.15
                        ],
                        [
                            'v50.0',
                            0.1
                        ],
                        [
                            'v48.0',
                            0.31
                        ],
                        [
                            'v47.0',
                            0.12
                        ]
                    ]
                },
            ]
        }
    });

    public onSelect(event) {
        // this.router.navigate(['/instanttransport/orders/fcl/customer/allcustomers' , event.series.data]);
        console.log(event);
        // console.log(custom);
    }

    ngOnInit() {
        this.capacity = [
            { 'Name': 'Trucks', 'Total1': '4', 'Utilization1': '45', 'Total2': '6', 'Utilization2': '69', },
            { 'Name': 'Tonnage', 'Total1': '2', 'Utilization1': '34', 'Total2': '23', 'Utilization2': '56', },
            { 'Name': 'CBM', 'Total1': '8', 'Utilization1': '87', 'Total2': '31', 'Utilization2': '87', }
        ];

        this.Exception = [
            { 'Name': 'Trips', 'Tickets': '10', 'Resovled': '3', 'Unresovled': '7' },
            { 'Name': 'Finance', 'Tickets': '15', 'Resovled': '9', 'Unresovled': '13' }
        ];

        this.trips = [
            { 'OnTime1': '2', 'Delayed1': '1', 'OnTime2': '6', 'Delayed2': '2', }
        ];

        this.finance = [
            { 'Total1': '4', 'Overdue1': '1', 'Total2': '325', 'Overdue2': '121', }
        ];

        this.LoadFactor = [
            { 'Name': 'Shipments', 'FCL': '10', 'Express': '3', 'Bespoke': '7' },
            { 'Name': 'Tonnage', 'FCL': '12', 'Express': '9', 'Bespoke': '16' }
        ];

        this.Sales = [
            { 'FCL': '23', 'Express': '44', 'Bespoke': '12', 'Total': '24' }
        ];

    }

    public handlePage(e: any) {
        this.currentPage = e.pageIndex;
        this.pageSize = e.pageSize;
        // this.tableLists = this.tableList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    }


}
