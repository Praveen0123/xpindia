import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  public getEvents(): Observable<any> {
    const dateObj = new Date();
    const yearMonth = dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
    let data: any = [
   
    {
        id:919,
        title: 'Initial Visit-Kane Williamson',
        start: '2019-08-26T14:50:00',
        end: '2019-08-26T15:00:00',
        color:'#ffff80',
        allDay : false,
        eventTextColor:'black',
        resourceId:1

    },
    {
        id:949,
        title: 'Initial Visit-Ben Fokes ',
        start: '2019-08-27T09:40:00',
        end: '2019-08-27T09:50:00',
        color:'#80ffaa',
        allDay : false,
        eventTextColor:'black',
        resourceId:2
    },
    {
        id:945,
        title: 'Initial Visit-Martin Guptill',
        start: '2019-08-28T06:20:00',
        end: '2019-08-28T06:40:00',
        color:'#ffcc99',
        allDay : false,
        eventTextColor:'black',
        resourceId:1
    },
    {
        id:949,
        title: 'Initial Visit-Stokes ',
        start: '2019-08-27T09:40:00',
        end: '2019-08-27T09:55:00',
        color:'#ffff99',
        allDay : false,
        eventTextColor:'black',
        resourceId:3
    },
    {
        id:919,
        title: 'Initial Visit-Pointing',
        start: '2019-08-27T10:20:00',
        end: '2019-08-27T10:30:00',
        color:'#80ff80',
        allDay : false,
        eventTextColor:'black',
        resourceId:2
    },
    {
        id:949,
        title: 'Initial Visit-Pollard ',
        start: '2019-08-29T09:30:00',
        end: '2019-08-29T09:45:00',
        color:'#b3ffb3',
        allDay : false,
        eventTextColor:'black',
        resourceId:3
    },
    {
        id:919,
        title: 'Initial Visit-Malinga',
        start: '2019-08-27T08:20:00',
        end: '2019-08-27T08:30:00',
        color:'#80ffaa',
        allDay : false,
        eventTextColor:'black',
        resourceId:2
    },
    {
        id:949,
        title: 'Initial Visit-Maxwell ',
        start: '2019-08-27T14:40:00',
        end: '2019-08-27T14:55:00',
        color:'#ffcc99',
        allDay : false,
        eventTextColor:'black',
        resourceId:1
    },
    {
        id:919,
        title: 'Initial Visit-Khawaja',
        start: '2019-08-27T15:50:00',
        end: '2019-08-27T16:00:00',
        color:'#ffff80',
        allDay : false,
        eventTextColor:'black',
        resourceId:1
    },
    {
        id:949,
        title: 'Initial Visit-Navin ',
        start: '2019-08-30T15:40:00',
        end: '2019-08-30T15:55:00',
        color:'#80ffaa',
        allDay : false,
        eventTextColor:'black',
        resourceId:3
    },
    {
        id:919,
        title: 'Initial Visit-Emily',
        start: '2019-08-31T16:20:00',
        end: '2019-08-31T16:30:00',
        color:'#b3ffb3',
        allDay : false,
        eventTextColor:'black',
        resourceId:2
    },
    {
        id:949,
        title: 'Initial Visit-Bruce ',
        start: '2019-08-30T16:40:00',
        end: '2019-08-30T17:50:00',
        color:'#ffff80',
        allDay : false,
        eventTextColor:'black',
        resourceId:3
    },
    {
        id:919,
        title: 'Initial Visit-Shyam',
        start: '2019-08-26T15:20:00',
        end: '2019-08-26T15:30:00',
        color:'#80ffaa',
        allDay : false,
        eventTextColor:'black',
        resourceId:1
    },
    {
        id:949,
        title: 'Initial Visit-Flying ',
        start: '2019-08-30T09:00:00',
        end: '2019-08-30T09:15:00',
        color:'#ffff99',
        allDay : false,
        eventTextColor:'black',
        resourceId:2
    },
    {
        id:919,
        title: 'Initial Visit-Sohail',
        start: '2019-08-29T16:20:00',
        end: '2019-08-29T6:35:00',
        color:'#80ff80',
        allDay : false,
        eventTextColor:'black',
        resourceId:2
    },
    {
        id:949,
        title: 'Initial Visit-Abid ',
        start: '2019-08-31T15:45:00',
        end: '2019-08-31T16:00:00',
        color:'#ffcc99',
        allDay : false,
        eventTextColor:'black',
        resourceId:2
    },
    {
        id:919,
        title: 'Initial Visit-Kane Williamson',
        start: '2019-08-26T14:20:00',
        end: '2019-08-26T14:30:00',
        color:'#ffff80',
        allDay : false,
        eventTextColor:'black',
        resourceId:3
    },
    {
        id:949,
        title: 'Initial Visit-Ben Fokes ',
        start: '2019-08-29T15:40:00',
        end: '2019-08-29T15:50:00',
        color:'#b3ffb3',
        allDay : false,
        eventTextColor:'black',
        resourceId:3
    },
    {
        id:919,
        title: 'Initial Visit-John',
        start: '2019-08-27T10:40:00',
        end: '2019-08-27T10:50:00',
        color:'#80ffaa',
        allDay : false,
        eventTextColor:'black',
        resourceId:1
    },
    {
        id:949,
        title: 'Initial Visit-Cena ',
        start: '2019-08-31T09:40:00',
        end: '2019-08-31T10:00:00',
        color:'#ffff99',
        allDay : false,
        eventTextColor:'black',
        resourceId:1
    },
    {
        id:919,
        title: 'Initial Visit-Punk',
        start: '2019-08-26T14:15:00',
        end: '2019-08-26T14:30:00',
        color:'#80ff80',
        allDay : false,
        eventTextColor:'black',
        resourceId:2
    },
    {
        id:949,
        title: 'Initial Visit-Alberto ',
        start: '2019-08-30T09:40:00',
        end: '2019-08-30T10:00:00',
        color:'#80ffaa',
        allDay : false,
        eventTextColor:'black',
        resourceId:3
    },
    {
        id:919,
        title: 'Initial Visit-Kane Williamson',
        start: '2019-08-28T10:45:00',
        end: '2019-08-28T11:00:00',
        color:'#ffff80',
        allDay : false,
        eventTextColor:'black',
        resourceId:1
    },
    {
        id:949,
        title: 'Initial Visit-Ben Fokes ',
        start: '2019-08-30T09:40:00',
        end: '2019-08-30T09:50:00',
        color:'#ffff99',
        allDay : false,
        eventTextColor:'black',
        resourceId:2
    },
    {
        id:919,
        title: 'Initial Visit-Kane Williamson',
        start: '2019-08-27T10:20:00',
        end: '2019-08-27T10:30:00',
        color:'#ffcc99',
        allDay : false,
        eventTextColor:'black',
        resourceId:3
    },
    {
        id:949,
        title: 'Initial Visit-Ben Fokes ',
        start: '2019-08-29T09:40:00',
        end: '2019-08-29T09:50:00',
        color:'#b3ffb3',
        allDay : false,
        eventTextColor:'black',
        resourceId:2
    },
    {
        id:919,
        title: 'Initial Visit-Kane Williamson',
        start: '2019-08-31T11:30:00',
        end: '2019-08-31T11:45:00',
        color:'#ffff80',
        allDay : false,
        eventTextColor:'black',
        resourceId:2
    },
    {
        id:949,
        title: 'Initial Visit-Ben Fokes ',
        start: '2019-08-26T09:40:00',
        end: '2019-08-26T09:50:00',
        color:'#80ffaa',
        allDay : false,
        eventTextColor:'black',
        resourceId:1
    },
    {
        id:919,
        title: 'Initial Visit-Bayley',
        start: '2019-08-29T16:20:00',
        end: '2019-08-29T16:30:00',
        color:'#80ff80',
        allDay : false,
        eventTextColor:'black',
        resourceId:1
    },
    {
        id:949,
        title: 'Initial Visit-Banks ',
        start: '2019-08-27T09:40:00',
        end: '2019-08-27T10:00:00',
        color:'#ffff99',
        allDay : false,
        eventTextColor:'black',
        resourceId:3
    },
    {
        id:919,
        title: 'Initial Visit-Sasha',
        start: '2019-08-30T14:20:00',
        end: '2019-08-30T14:35:00',
        color:'#80ff80',
        allDay : false,
        eventTextColor:'black',
        resourceId:3
    },
    {
        id:949,
        title: 'Initial Visit-Shawn ',
        start: '2019-08-31T09:40:00',
        end: '2019-08-31T10:00:00',
        color:'#ffff80',
        allDay : false,
        eventTextColor:'black',
        resourceId:2
    },
    {
        id:919,
        title: 'Initial Visit-Kane Williamson',
        start: '2019-08-27T15:20:00',
        end: '2019-08-27T15:30:00',
        color:'#80ffaa',
        allDay : false,
        eventTextColor:'black',
        resourceId:3
    },
    {
        id:949,
        title: 'Initial Visit-Foley ',
        start: '2019-08-29T10:20:00',
        end: '2019-08-29T10:30:00',
        color:'#b3ffb3',
        allDay : false,
        eventTextColor:'black',
        resourceId:1
    },
    {
        id:919,
        title: 'Initial Visit-Seward',
        start: '2019-08-26T16:20:00',
        end: '2019-08-26T16:30:00',
        color:'#ffcc99',
        allDay : false,
        eventTextColor:'black',
        resourceId:1
    },
    {
        id:949,
        title: 'Initial Visit-Soles ',
        start: '2019-08-28T14:15:00',
        end: '2019-08-28T14:30:00',
        color:'#ffff80',
        allDay : false,
        eventTextColor:'black',
        resourceId:2
    },
    {
        id:919,
        title: 'Initial Visit-Chris',
        start: '2019-08-30T14:20:00',
        end: '2019-08-30T14:40:00',
        color:'#80ffaa',
        allDay : false,
        eventTextColor:'black',
        resourceId:3
    },
    {
        id:949,
        title: 'Initial Visit-Siva ',
        start: '2019-08-31T15:40:00',
        end: '2019-08-31T15:50:00',
        color:'#ffcc99',
        allDay : false,
        eventTextColor:'black',
        resourceId:2
    },
    {
        id:919,
        title: 'Initial Visit-Kane Williamson',
        start: '2019-08-27T16:20:00',
        end: '2019-08-27T16:40:00',
        color:'#ffff80',
        allDay : false,
        eventTextColor:'black',
        resourceId:2
    },
    {
        id:949,
        title: 'Initial Visit-Neeraja ',
        start: '2019-08-29T09:30:00',
        end: '2019-08-29T09:45:00',
        color:'#b3ffb3',
        allDay : false,
        eventTextColor:'black',
        resourceId:1
    },
    {
        id:919,
        title: 'Initial Visit-Pranab',
        start: '2019-08-30T16:20:00',
        end: '2019-08-30T16:30:00',
        color:'#80ffaa',
        allDay : false,
        eventTextColor:'black',
        resourceId:1
    },
    {
        id:949,
        title: 'Initial Visit-Ben Fokes ',
        start: '2019-08-27T16:10:00',
        end: '2019-08-27T16:20:00',
        color:'#ffff80',
        allDay : false,
        eventTextColor:'black',
        resourceId:3
    },
    {
        id:919,
        title: 'Initial Visit-Navin',
        start: '2019-08-29T16:20:00',
        end: '2019-08-29T16:35:00',
        color:'#80ffaa',
        allDay : false,
        eventTextColor:'black',
        resourceId:3
    },
    {
        id:949,
        title: 'Initial Visit-Neeraja ',
        start: '2019-08-27T15:45:00',
        end: '2019-08-27T15:50:00',
        color:'#ffcc99',
        allDay : false,
        eventTextColor:'black',
        resourceId:3
    },
    {
        id:919,
        title: 'Initial Visit-Kane Williamson',
        start: '2019-08-30T12:20:00',
        end: '2019-08-30T12:30:00',
        color:'#99ffcc',
        allDay : false,
        eventTextColor:'black',
        resourceId:2
    },
    {
        id:949,
        title: 'Initial Visit-Suresh ',
        start: '2019-08-31T09:40:00',
        end: '2019-08-31T10:00:00',
        color:'#ffb3b3',
        allDay : false,
        eventTextColor:'black',
        resourceId:2
    },
    {
        id:919,
        title: 'Initial Visit-Kane Williamson',
        start: '2019-08-31T10:20:00',
        end: '2019-08-31T10:30:00',
        color:'#b3d9ff',
        allDay : false,
        eventTextColor:'black',
        resourceId:1
    },
    {
        id:949,
        title: 'Initial Visit-Kumar ',
        start: '2019-08-27T09:35:00',
        end: '2019-08-27T09:50:00',
        color:'#ffb3b3',
        allDay : false,
        eventTextColor:'black',
        resourceId:1
    },
    {
        id:919,
        title: 'Initial Visit-Siva',
        start: '2019-08-29T09:20:00',
        end: '2019-08-29T09:30:00',
        color:'#ffff80',
        allDay : false,
        eventTextColor:'black',
        resourceId:3
    },
    {
        id:949,
        title: 'Initial Visit-Sai ',
        start: '2019-08-30T09:40:00',
        end: '2019-08-30T09:50:00',
        color:'#99b3ff',
        allDay : false,
        eventTextColor:'black',
        resourceId:3
    },
    {
        id:919,
        title: 'Initial Visit-Prasanth',
        start: '2019-08-26T08:20:00',
        end: '2019-08-26T08:40:00',
        color:'#b3ffb3',
        allDay : false,
        eventTextColor:'black',
        eventBackgroundColor:'black',
        resourceId:3
    },
    {
        id:949,
        title: 'Initial Visit-Vijay ',
        start: '2019-08-30T15:45:00',
        end: '2019-08-30T16:00:00',
        color:'#ffccff',
        allDay : false,
        eventTextColor:'black',
        resourceId:3
    },
    {
        id:919,
        title: 'Initial Visit-Pranab',
        start: '2019-08-27T14:20:00',
        end: '2019-08-27T14:30:00',
        color:'#ffaa80',
        allDay : false,
        eventTextColor:'black',
        resourceId:1
    },
    {
        id:949,
        title: 'Initial Visit-Ben Fokes ',
        start: '2019-08-31T15:40:00',
        end: '2019-08-31T16:00:00',
        color:'#b3ffff',
        allDay : false,
        eventTextColor:'black',
        resourceId:2
    },
    {
        id:919,
        title: 'Initial Visit-Kane Williamson',
        start: '2019-08-29T16:00:00',
        end: '2019-08-29T16:15:00',
        color:'#bfff80',
        allDay : false,
        eventTextColor:'black',
        resourceId:3
    },
    {
        id:949,
        title: 'Initial Visit-Naveen ',
        start: '2019-08-30T09:00:00',
        end: '2019-08-30T09:15:00',
        color:'#ffd480',
        allDay : false,
        eventTextColor:'black',
        resourceId:1
    },
    {
        id:919,
        title: 'Initial Visit-Kane Williamson',
        start: '2019-08-31T16:20:00',
        end: '2019-08-31T16:30:00',
        color:'#ff99ff',
        allDay : false,
        eventTextColor:'black',
        resourceId:3
    },
    {
        id:949,
        title: 'Initial Visit-Sachin ',
        start: '2019-08-30T15:40:00',
        end: '2019-08-30T16:00:00',
        color:'#80ffff',
        allDay : false,
        eventTextColor:'black',
        resourceId:2
    },
    {
        id:919,
        title: 'Initial Visit-Kane Williamson',
        start: '2019-08-26T15:55:00',
        end: '2019-08-26T16:05:00',
        color:'#ffff33',
        allDay : false,
        eventTextColor:'black',
        resourceId:3
    },
    {
        id:949,
        title: 'Initial Visit-Vamsi ',
        start: '2019-08-29T15:40:00',
        end: '2019-08-29T15:50:00',
        color:'#66ff99',
        allDay : false,
        eventTextColor:'black',
        resourceId:1
    },
   
    ];
   
    return of(data);
}
}
