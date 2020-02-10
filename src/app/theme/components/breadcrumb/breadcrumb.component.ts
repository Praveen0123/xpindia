import { Component } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, UrlSegment, NavigationEnd } from "@angular/router";
import { Title } from '@angular/platform-browser';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {
    
    public pageTitle: string;
    public moduleTitle: string;
    public subTitle: string = "test";
    public description: {};
    public breadcrumbs: {
        name: string;
        url: string
    }[] = [];
    
    public settings: Settings;
    constructor(public appSettings: AppSettings,
        public router: Router,
        public activatedRoute: ActivatedRoute,
        public title: Title) {
            this.settings = this.appSettings.settings;
            this.description = {
                'Fleet Dashboard':'Statistical data of the complete business can be represented here',
                "Dashboard": "An overview representation of the customer admin login is represented here.",
                'Shipments':'hi',
                "Analytics":'Analytical representation  of the application shown here',
                "Analytic": {
                    "Customers":"sadasd",
                    "Fleet Vendors":"sadsad"
                },
                "Manage Users" : {
                    "Customers":"sadasd",
                    "Fleet Vendors":"sadsad"
                },
                "Users":"Customer users can be managed in this screen",
                "Roles":'Roles are managed in this screen',
                "Permissions" : "This page is used to manage role permissions",
                "Admin" : {
                    "Profile":"This screen is used to manage profile",
                    "Preference":"This screen is used to manage preference" 
                },
                // "FCL" : {
                //     "FCL Orders":"Customers orders and demographic details of full container load can be captured from this screen"
                // },
                // "FCL":'FCL rates managed here',
                "Shipment Rates":'All the shipment rates can be managed here.',
                "FCL Rates":'All the FCL rates can be managed here',
                "Express Rates":'All the Express Rates can be managed here',
                "FCL Capacity":'Page under construction',
                'Contracts':'All the contractual information can be tracked here',
                "Network Schedule":'All Network Schedules can be viewed and managed here',       
                "FCL Orders":"Customers orders and demographic details of full container load can be captured from this screen",
                "FCL orders":"All the FCL contracts and rate cards can be managed here",
                "Express orders":"All the Express contracts and rate cards can be managed here",
                "Bespoke orders":"All the Bespoke contracts and rate cards can be managed here",
                // "Network Schedule":'All Network Schedules can be viewed and managed here',                
                // "FCL Orders":"Customers orders and demographic details of full container load can be captured from this screen",
                "FCL Contracts":"All the FCL contracts and rate cards can be managed here",
                "LCL Contracts":"All the LCL contracts and rate cards can be managed here",
                "BB Contracts":"All the BB contracts and rate cards can be managed here",
                "Messages":"Messages to and from admin are be tracked in this screen",
                "Associates":'Associates are managed here',
                "Transactions":{
                    "Invoice":"dgfdfg",
                    "Payments":"dfgdfg"
                },
                
                "Invoices":{
                    "Ageing Analysis":"Vendor details can be managed here.",
                    "Receivables":"Payables to be paid by customer are tracked in this screen",
                    
                    "Payments Log":"Payments made by vendors are tracked in this screen"
                },
                "Bills":{
                    "Ageing Analysis":"Customer details can be managed here.",
                    
                    "Payments Log":"Payments made by customer are tracked in this screen",
                    "Bills":"Bills to be paid to vendors are tracked in this screen",
                },
                "Receivables":{
                    "Invoices":"Receivables to be received by customer are tracked in this screen",
                    "Ageing Analysis":"All the overdue receviables and upcoming receviables are tracked here.",
                    
                    "Payments Log":"Payments made by customer are tracked in this screen",
                    // "Payables":"Payables to be paid to vendors are tracked in this screen",
                },
                // "Payables":"Payables to be paid to vendors are tracked in this screen",
                "Account Payables":"Payments made by customer are tracked in this screen",
                "Ageing Analysis":"All the overdue payables and upcoming payables are tracked here.",
                
                "Payables":{
                    // "Receivables":"Receivables to be received by customer are tracked in this screen",
                    "Ageing Analysis":"All the overdue payables and upcoming payables are tracked here.",
                    
                    "Account Payables":"Payments made by customer are tracked in this screen",
                    "Bills":"Bills to be paid to vendors are tracked in this screen",
                },
                "Overview":"Overview information about the management dashboard can be represented here",
                'BD':'Page under construction',
                "Service Levels":'All the Service Levels can be represented here',
                "Customers":"The customers and there contract  can be managed here.",
                "Management":"The statistical information about the management dashboard can be represented here",
                "Operations":"All the operational statistis can be represented here",
                "Finance":"All the transactional statistics  can be represented here",
                "Hub":"All the Hubs related statistics can be represented here ",
                "Gateway":"All the  Gatway related  statistics can be represented here",
                "Zones" : "All the  Zones related  statistics can be represented here",
                "Origins(David Malhotra)":"The customer origins are listed here",
                "Destinations(David Malhotra)":"The customer destinations are listed here",
                "Contract":"All the contractual information can be tracked here",
                "Serviceable Zones":'List of Serviceable Zones appears here',
                "Scheduling":"All schedules can be managed here",
                "Vendors":"Vendors related demographics can be managed from this screen",
                // "FCL":{
                //     "Customer":"sadd",
                //     "Zone":"asdasd",
                //     "Status":"sadasd"
                // },
                "Customer":{
                    "All Customer":"The customer orders can be viewed in this screen",
                    "Order Details for Customer Shopkart":"This page gives the detailed report of orders for a particular customer"
                },
                // "Express":{
                //     "Customer":"sadd",
                //     "Zone":"asdasd",
                //     "Status":"sadasd"
                // },
                // "Bespoke":{
                //     "Customer":"sadd",
                //     "Zone":"asdasd",
                //     "Status":"sadasd"
                // },
                // "FCL":"dsd",
                "LCL":{
                    "Bookings":"This screen is used to track all the bookings",
                    "In-Transit":"This screen is used to track all the orders that are in transit",
                    "Delivery":"This screen is used to track all the orders that are delivered"
                },
                "Staff":"Staff related demographics can be managed from this screen",
                "Vehicle Types":"This is the list of vehicle types in terms of payload and CBM.  Typically, the length and height of the container is specified.  The width is 8 feet is most cases",
                "Profile":"This screen is used to manage profile",
                "Origins":'Origin and location addresses can be managed here from this screen.',
                "Destinations":'Destination and location addresses can be managed here from this screen.',
                "Preference":"This screen is used to manage preference",
                // "Orders":{
                //     "FCL Orders":"Customers orders and demographic details of full container load can be captured from this screen",
                //     "LCL Orders":"Customers orders and demographic details of less than container load can be captured from this screen",
                //     "BB Orders":"Customers orders and demographic details of break bulk container load can be captured from this screen",
                //     "LCL Details for Reference Number 10214548":" Customer bookings and demographic details of less than container load can be captured from this screen",
                //     "BB Details for Order ID 10214548":"Customer deliverables and demographic details of breakbulk container load can be captured from this screen",
                //     "Maps":"This page is used to locate the orders from different locations",
                //     "Tracking":"This page is used to track order",
                //     "Network":"This page is used to view detailed tracking status of the order",
                //     "Package Details for Order ID 101247":"Customer packages and demographic details of full container load can be managed from this screen"
                // },
                "Packages":'Customer packages and demographic details of full container load can be managed from this screen',
                "Tracking":"This page is used to track order",
                "Capacity":"Trip details are captured and scheduled from this screen",
                'FFV':'FFV details are captured and managed in this screen',
                
                // "Trips":{
                //     "FCL":"This screen is used to manage FCL",
                //     "LCL":"This screen is used to manage LCL",
                //     "BB":"This screen is used to manage BB",
                //     "LCL Details":"This screen is used to view the details of individual lcl",
                //     "BB Details":"This screen is used to view the details of individual bb",
                //     "Maps":"This page is used to locate the orders from different locations",
                //     "Tracking":"This page is used to show the detailed tracking report of FCL orders",
                //     "Loads":"This page is used to view detailed tracking status of the order"
                // },
                "Orders":"All the active orders can be tracked here",
                "Rates":'hi',
                "FCL":'This screen is used to manage FCL',
                'Express':'All the offers of Express shown here',
                'Bespoke':'This page is used to manage the Bespoke',
                "Delivery":'Delivery is manage here',
                "Booking":'Booking nis managed here',
                // 'Finance':'Finace is managed here',
                
                // 'FCL':'All the offers of FCL shown here',
                "Report Case":'Report Case are managed here',
                "Maps":"This page is used to locate the orders from different locations",
                "Trips":'Trips are managed  from here',
                "Lanes":'Lane is managed here',
                'BB':'All the offers of BB shown here',
                "Vendor Trips":"Vendor trips can be managed here",
                "Loads":"Vendor loads details can be managed  from this screen",
                "Vendor Payments":"Payments can bemanaged here",
                "Driver":"This Driver information can be managed from this screen.",
                "Zone":'This screen shows the zone.',
                "Trucks Information":"The Vehicle information can be managed from this screen",
                "Dashboards": "This is a summary dashboard of the entire system.vxcvxcvxvxvxc",
                "Alerts": "The alerts as reminders for the Marketing and Sales process can be viewed from here",
                'Manage Orders':'This page is used to manage all the patient orders',
                "Hubs":"Regional hubs demographics and details are captured in this screen",
                "Schedule":"sdfsdf",
                "Preferences":"This screen is used to manage preferences",
                "TAT Master":" Turn around time-related demographics can be managed from this screen",
                "Barcodes":"sdfds",
                "Offers":"Offer details are captured and scheduled from this screen",
                "Settings":"System level settings can be managed from this screen",
                "Testimonials":"Testimonals by customers can be viewed in this screen",
                "Route Master":"This page is used to manage routes",
                // 'Schedule':'This page is used to schedule appointments for patients',
                'Role Permissions':'This page is used to manage permissions of each role',
                // "Permissions":"This page is used to manage permissions of each customer",
                // 'Patient Dashboard':'The detailed report of each patient is recorded here',
                "Rates Dashboard":{
                    "FCL Rates":"FCL rates can be manages in this screen",
                    "Daily Rates":"Daily rates can be manages in this screen",
                    "Monthly Rates":"Monthly rates can be manages in this screen",
                    "Drivers":"This section contains a listing of active and inactive drivers",
                    "Gateways":"The list of gateways some of which are tagged as zonal hubs is managed here",
                    "Lanes":"The list of active lanes for the customer appears here",
                    "Zones":"The list of active zones for the customer appears here",
                    "Vehicles":"This section contains a database of your active and inactive vehicles and trailers",
                },
                "Customer Dashboard":{
                    "Origins":"The list of customer origins  are managed here",
                    "Destinations":"The list of  customer destinations are managed here",
                    "Lanes":"All the serviceable lanes for customer appears here",
                    "FCL Rates":"All the FCL Rates for a customer can be managed here",
                    "Express Rates":"All the Express Rates for a customer can be managed here",
                    "Contracts":"All the customer contracts can be manged here"
                },
                "Gateways(Shopkart)":'All the active users Gateway are shown here.',
                'Master Data':{
                    'Countries' : 'The list of serviceable countries is managed here',
                    'Zones' : 'The list of serviceable zones is managed here',
                    'States' : 'The list of serviceable states by country is managed here',
                    'Districts' : 'Clinical Categories are configured and can be managed from this screen',
                    'Locations' : 'The list of serviceable locations (TALUKS) by district is managed here',
                    'Post Codes' : 'The list of serviceable PIN codes by district is managed here',
                    // 'Districts' : 'The list of serviceable districts in a zone are managed here',
                    'Gateways' : 'All the  Gatway related  statistics can be represented here',
                    'Hubs' : 'All the Hubs related statistics can be represented here',
                    "Branch Office":'Branch office is managed here',
                    "Maps":"This page is used to locate the orders from different locations",
                    "Regions":'Regions are managed here',
                },
                "Lanes & Rates":{
                    "Lanes & Rates":"All the Lanes & Rates statistics can be represented here",
                    "Lane Master":"All the Lane statistics can be represented here",
                    "Route Master":"All the Route statistics can be represented herer",
                    "FCL Capacity":"All the FCL Capacity statistics can be represented here",
                    "FFV Freight Master":"All the FFV Freight statistics can be represented here",
                    "Customer Rate Master":"All the Customer Rate statistics can be represented here",
                    "LCL Rate Master":"All the LCL Rate statistics can be represented here",
                }
            };
            this.router.events.subscribe(event => {
                if (event instanceof NavigationEnd) {
                    this.breadcrumbs = [];
                    this.parseRoute(this.router.routerState.snapshot.root);
                    this.pageTitle = "";
                    this.breadcrumbs.forEach(breadcrumb => {
                        this.pageTitle += ' | ' + breadcrumb.name;
                    })
                    this.pageTitle ? null : this.pageTitle = " | Dashboard";
                    
                    var temp = this.pageTitle.split(' | ');
                    if (temp.length > 4) {
                        this.subTitle = temp.pop();
                        this.moduleTitle = temp[temp.length - 1];
                    } else if (temp.length > 3) {
                        this.subTitle = temp.pop();
                        this.moduleTitle = temp[temp.length - 1];
                    } else {
                        this.moduleTitle = temp.pop();
                    }
                    
                    if (this.subTitle === 'Permissions') {
                        this.moduleTitle = "Permissions";
                        this.subTitle = "test";
                    }
                    this.title.setTitle(this.settings.name + this.pageTitle);
                }
            })
        }
        
        private parseRoute(node: ActivatedRouteSnapshot) {
            if (node.data['breadcrumb']) {
                if (node.url.length) {
                    let urlSegments: UrlSegment[] = [];
                    node.pathFromRoot.forEach(routerState => {
                        urlSegments = urlSegments.concat(routerState.url);
                    });
                    let url = urlSegments.map(urlSegment => {
                        return urlSegment.path;
                    }).join('/');
                    this.breadcrumbs.push({
                        name: node.data['breadcrumb'],
                        url: '/' + url
                    })
                }
            }
            if (node.firstChild) {
                this.parseRoute(node.firstChild);
            }
        }
        
        public closeSubMenus() {
            let menu = document.querySelector(".sidenav-menu-outer");
            if (menu) {
                for (let i = 0; i < menu.children[0].children.length; i++) {
                    let child = menu.children[0].children[i];
                    if (child) {
                        if (child.children[0].classList.contains('expanded')) {
                            child.children[0].classList.remove('expanded');
                            child.children[1].classList.remove('show');
                        }
                    }
                }
            }
        }
    }
    
    
    