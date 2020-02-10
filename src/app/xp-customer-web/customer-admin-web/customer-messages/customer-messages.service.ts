import { Injectable } from '@angular/core'
import { Chat } from './customer-messages.model';

let date = new Date(),
    day = date.getDate(),
    month = date.getMonth(),
    year = date.getFullYear(),
    hour = date.getHours(),
    minute = date.getMinutes();

// let chats = [
//     new Chat(
//         'assets/img/profile/ashley.jpg',
//         'Ashley Ahlberg', 
//         'Online',
//         'Hi, I\'m looking for admin template with angular material 2 design.  What do you think about Gradus Admin Template?',
//         new Date(year, month, day-2, hour, minute),
//         false
//     ),
//     new Chat(
//         'assets/img/profile/bruno.jpg',
//         'Bruno Vespa',
//         'Do not disturb',
//         'Hi, I\'m looking for admin template with angular material 2 design.  What do you think about Gradus Admin Template?',
//         new Date(year, month, day-2, hour, minute),
//         false
//     ),
//     new Chat(
//         'assets/img/profile/julia.jpg',
//         'Julia Aniston',
//         'Away',
//         'Hi, I\'m looking for admin template with angular material 2 design.  What do you think about Gradus Admin Template?',
//         new Date(year, month, day-2, hour, minute),
//         false
//     ),
//     new Chat(
//         'assets/img/profile/adam.jpg',
//         'Adam Sandler',
//         'Online',
//         'Hi, I\'m looking for admin template with angular material 2 design.  What do you think about Gradus Admin Template?',
//         new Date(year, month, day-2, hour, minute),
//         false
//     ),
//     new Chat(
//         'assets/img/profile/tereza.jpg',
//         'Tereza Stiles',
//         'Offline',
//         'Hi, I\'m looking for admin template with angular material 2 design.  What do you think about Gradus Admin Template?',
//         new Date(year, month, day-2, hour, minute),
//         false
//     ),  
//     new Chat(
//         'assets/img/profile/michael.jpg',
//         'Michael Blair',
//         'Online',
//         'Hi, I\'m looking for admin template with angular material 2 design.  What do you think about Gradus Admin Template?',
//         new Date(year, month, day-2, hour, minute),
//         false
//     )
// ]

let chats = [
    new Chat(
        'assets/img/profile/ashley.jpg',
        'Ashley Ahlberg', 
        'Online',
        'Great, then I\'ll definitely buy this theme. Thanks!',
        new Date(year, month, day-2, hour, minute),
        false
    ),
    new Chat(
        'assets/img/profile/bruno.jpg',
        'Bruno Vespa',
        'Do not disturb',
        'Great, then I\'ll definitely buy this theme. Thanks!',
        new Date(year, month, day-2, hour, minute),
        false
    ),
    new Chat(
        'assets/img/profile/julia.jpg',
        'Julia Aniston',
        'Away',
        'Great, then I\'ll definitely buy this theme. Thanks!',
        new Date(year, month, day-2, hour, minute),
        false
    ),
    new Chat(
        'assets/img/profile/adam.jpg',
        'Adam Sandler',
        'Online',
        'Great, then I\'ll definitely buy this theme. Thanks!',
        new Date(year, month, day-2, hour, minute),
        false
    ),
    new Chat(
        'assets/img/profile/tereza.jpg',
        'Tereza Stiles',
        'Offline',
        'Great, then I\'ll definitely buy this theme. Thanks!',
        new Date(year, month, day-2, hour, minute),
        false
    ),  
    new Chat(
        'assets/img/profile/michael.jpg',
        'Michael Blair',
        'Online',
        'Great, then I\'ll definitely buy this theme. Thanks!',
        new Date(year, month, day-2, hour, minute),
        false
    )
]

let talks = [
    
    // new Chat(
    //     'assets/img/users/user.jpg',
    //     'Ashley Ahlberg',
    //     'Online',
    //     'Hi, Gradus is a fully compatible with angular material 2, responsive, organized folder structure, clean & customizable code, easy to use and much more...',
    //     new Date(year, month, day-2, hour, minute+2),
    //     true
    // ),
    new Chat(
        'assets/img/profile/ashley.jpg',
        'Emilio Verdines', 
        'Online',
        'Hi, I\'m looking for a trip form Delhi to Ahmedabad. Is there any service available?',
        new Date(year, month, day-2, hour, minute+3),
        true
    ),
    new Chat(
        'assets/img/profile/ashley.jpg',
        'Emilio Verdines', 
        'Online',
        'Hi, Yes. We do have a service to deliver the shipment. What is the payload and TAT for your shipment?',
        new Date(year, month, day-2, hour, minute+3),
        false
    ),
    new Chat(
        'assets/img/profile/ashley.jpg',
        'Emilio Verdines', 
        'Online',
        'Payload is about 250 Tons and TAT is expected to be 3 days',
        new Date(year, month, day-2, hour, minute+3),
        true
    ),
    new Chat(
        'assets/img/profile/ashley.jpg',
        'Emilio Verdines', 
        'Online',
        'Okay. We can assign you FCL trip for your shipment',
        new Date(year, month, day-2, hour, minute+3),
        false
    ),
]

@Injectable()
export class CustomerMessagesService {

    public getChats():Array<Chat> {
        return chats;
    }

    public getTalk():Array<Chat> {
        return talks;
    }

}

