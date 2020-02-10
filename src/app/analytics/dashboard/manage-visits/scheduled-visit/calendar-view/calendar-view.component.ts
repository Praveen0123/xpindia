import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent } from 'angular-calendar';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
import { MatDialog } from '@angular/material';
import { MatSnackBar } from '@angular/material';
// import { ScheduleDialogComponent } from './schedule-dialog/schedule-dialog.component';
import { AppSettings } from '../../../../../app.settings';
import { Settings } from '../../../../../app.settings.model';
import { Subject } from 'rxjs/Subject';
import { blockTransition } from '../../../../../theme/utils/app-animation';
import { AddScheduledVisitComponent } from '../add-scheduled-visit/add-scheduled-visit.component';
import { CalendarComponent } from 'ng-fullcalendar';
// import { Options } from 'fullcalendar';
import { ModalDirective } from 'ngx-bootstrap';
import { EventService } from './event.service';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.scss']
})
export class CalendarViewComponent implements OnInit {

  dropdownList: { item_id: number; item_text: string; }[];
  view: string = 'month';
  viewDate: Date = new Date();
  activeDayIsOpen: boolean = true;
  actions: CalendarEventAction[] = [{
    label: '<i class="material-icons icon-sm white">edit</i>',
    onClick: ({ event }: { event: CalendarEvent }): void => {
      // this.openMeetingDialog(event);
    }
  }, {
    label: '<i class="material-icons icon-sm white">close</i>',
    onClick: ({ event }: { event: CalendarEvent }): void => {
      // this.events = this.events.filter(iEvent => iEvent !== event);
      this.snackBar.open('Event deleted successfully!', null, {
        duration: 1500
      });
    }
  }];
  selectedItems: { item_id: number; item_text: string; }[];
  dropdownSettings: { singleSelection: boolean; idField: string; textField: string; selectAllText: string; unSelectAllText: string; itemsShowLimit: number; allowSearchFilter: boolean; };

  // view: string = 'month';
  // viewDate: Date = new Date();
  // activeDayIsOpen: boolean = true;
  // actions: CalendarEventAction[] = [{
  //     label: '<i class="material-icons icon-sm white">edit</i>',
  //     onClick: ({event}: {event: CalendarEvent}): void => {
  //         this.openScheduleDialog(event);
  //     }
  // }, {
  //     label: '<i class="material-icons icon-sm white">close</i>',
  //     onClick: ({event}: {event: CalendarEvent}): void => {
  //         this.events = this.events.filter(iEvent => iEvent !== event);
  //         this.snackBar.open('Event deleted successfully!', null, {
  //             duration: 1500
  //         });
  //     }
  // }];
  // events: CalendarEvent[] = [{
  //   start: subDays(startOfDay(new Date()), 1),
  //   end: addDays(new Date(), 1),
  //   title: 'Fabrice Vanegas have an appointment scheduled with Dr.Domenic Vinci at 4:30P.M',
  //   color: colors.red,
  //   actions: this.actions
  // }, {
  //   start: startOfDay(new Date()),
  //   title: 'Otto Rieder have an appointment scheduled with Dr.Brad Kewalramani at 5:00P.M',
  //   color: colors.yellow,
  //   actions: this.actions
  // }, {
  //   start: subDays(endOfMonth(new Date()), 3),
  //   end: addDays(endOfMonth(new Date()), 3),
  //   title: 'Dr.Brad Kewalramani is scheduled to do a surgery at 2:30P.M',
  //   color: colors.blue
  // }, {
  //   start: addHours(startOfDay(new Date()), 2),
  //   end: new Date(),
  //   title: 'Joe Deu-Ngoc have an appointment with Dr.Brad Kewalramani at 6:00P.M',
  //   color: colors.yellow,
  //   actions: this.actions,
  //   resizable: {
  //     beforeStart: true,
  //     afterEnd: true
  //   },
  //   draggable: true
  // }];
  // refresh: Subject<any> = new Subject();


  public settings: Settings;
  eventType: any;
  events:any;
  calendarOptions: any;
  displayEvent: any;
  eventDate: Date;
  calendarPlugins=[ dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin ];
  eventName;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;

  @ViewChild('dayEventModal') private dayEventModal: ModalDirective
  constructor(public appSettings:AppSettings,public eventService:EventService, 
              public dialog: MatDialog, 
              public snackBar: MatSnackBar){
      this.settings = this.appSettings.settings; 
  }

  ngOnInit() {
    this.multidropdown();
    //this.service.headerTitle = "Leave Management";
    this.eventService.getEvents().subscribe(data => {
      
      let duration = '00:10:00';
      this.calendarOptions = {
        plugins:[ resourceTimeGridPlugin, dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin ],
        editable: true,
        // defaultView: 'timeGridWeek',
        slotDuration:duration,
        eventLimit: false,
        selectable: true,
        schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'resourceTimeGridDay dayGridMonth timeGridWeek timeGridDay listWeek'
        },
        resources: [
          {id:1, title:"Dr.Sohail"},{id:2, title:"Dr.Abid"},{id:3, title:"Dr.Salman"}
        ],
        events: data
      };
    
    });
  }


  multidropdown() {

    this.dropdownList = [
      { item_id: 0, item_text: 'All Associates' },
      { item_id: 1, item_text: 'Navin' },
      { item_id: 2, item_text: 'RK' },
      { item_id: 3, item_text: 'Pranab' },
      { item_id: 4, item_text: 'Vaibhav' },
      { item_id: 5, item_text: 'Anji' },
      { item_id: 6, item_text: 'Bharath' },
      { item_id: 7, item_text: 'Amit' },
      { item_id: 8, item_text: 'Vamsi' },
      { item_id: 9, item_text: 'Prashanth' },
      { item_id: 10, item_text: 'Srinu' },
      { item_id: 11, item_text: 'Mani' },
      { item_id: 12, item_text: 'Naveen C' },
      { item_id: 13, item_text: 'Naveen R' },
      { item_id: 14, item_text: 'Siva' },
      { item_id: 15, item_text: 'Praveen S' }
  ];
    this.selectedItems = [
      { item_id: 0, item_text: 'All Associates' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 1,
      allowSearchFilter: true,
    };
  }

  clickButton(model: any) {
    this.displayEvent = model;
  }
  eventClick(model: any) {
  
    this.eventType = 'Edit';
    this.dayEventModal.show();

    
    this.eventName = model.event.title;
    
    this.eventDate = model.event.start._d;
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title,
        allDay: model.event.allDay
        // other params
      },
      duration: {}
    }
    this.displayEvent = model;
  }

  updateEvent(model: any) {
  
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title
        // other params
      },
      duration: {
        _data: model.duration._data
      }
    }
    this.displayEvent = model;
  }


  fnDayEvent(e, z) {
   
    this.eventName = "";
    if (z == 1) {
    
      this.eventType = 'Add';
      this.dayEventModal.show();
      this.eventDate = e['detail']['date']['_d'];
    }
    else {
      this.dayEventModal.hide();
    }
  }
  // dayClicked({date, events}: {date: Date, events: CalendarEvent[]}): void {    
  //   if (isSameMonth(date, this.viewDate)) {
  //     if ((isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) || events.length === 0) {
  //       this.activeDayIsOpen = false;
  //     } else {
  //       this.activeDayIsOpen = true;
  //       this.viewDate = date;
  //     }
  //   }
  // }

  openMeetingDialog(event) {
 
    let dialogRef = this.dialog.open(AddScheduledVisitComponent, {
      data: event,
      height: 'auto',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(data => {

    });
  }

  // openScheduleDialog(event){
  //   let dialogRef = this.dialog.open(ScheduleDialogComponent, {
  //     data: event,
  //     height: 'auto',
  //     width: '600px'
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if(result){
  //       if(!result.isEdit){
  //         result.color = colors.blue;
  //         result.actions = this.actions;
  //         this.events.push(result);
  //         this.refresh.next();
  //       }else{
  //         //implement edit here
  //       }
  //     }
  //   });
  // }

}
