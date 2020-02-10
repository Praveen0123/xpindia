import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { Chat } from './customer-messages.model';
import { CustomerMessagesService } from './customer-messages.service';

@Component({
  selector: 'app-customer-messages',
  templateUrl: './customer-messages.component.html',
  styleUrls: ['./customer-messages.component.scss'],
  providers:[CustomerMessagesService]
})
export class CustomerMessagesComponent implements OnInit {

  @ViewChild('sidenav') sidenav: any;
  public settings: Settings;
  public userImage = 'assets/img/users/user.jpg';
  public chats: Array<Chat>;
  public talks: Array<Chat>;
  public sidenavOpen:boolean = true;
  public currentChat:Chat;
  public newMessage:string;

  constructor(public appSettings:AppSettings, private chatService:CustomerMessagesService) { 
    this.settings = this.appSettings.settings; 
  }

  ngOnInit() {
    this.chats = this.chatService.getChats(); 
    this.talks = this.chatService.getTalk();
    if(window.innerWidth <= 768){
      this.sidenavOpen = false;
    }    
  } 

  @HostListener('window:resize')
  public onWindowResize():void {
    (window.innerWidth <= 768) ? this.sidenavOpen = false : this.sidenavOpen = true;
  }

  public getChat(obj){
    if(this.talks){
       this.talks.length = 2;
    }
    this.talks = this.chatService.getTalk();
    this.talks.push(obj);
    this.currentChat = obj;      
    this.talks.forEach(talk => {
      if(!talk.my){
        talk.image = obj.image;
      }
    });
    if(window.innerWidth <= 768){
      this.sidenav.close();
    }     
  }

  public sendMessage($event) {       
    if (($event.which === 1 || $event.which === 13) && this.newMessage.trim() != '') {
      if(this.talks){ 
        this.talks.push(
            new Chat(
              'assets/img/users/user.jpg', 
              'Emilio Verdines', 
              'online', 
              this.newMessage,
              new Date(), 
              true)
        )
        this.newMessage = '';
        let chatContainer = document.querySelector('.chat-content');
        if(chatContainer){
          setTimeout(() => {
            var nodes = chatContainer.querySelectorAll('.mat-list-item');
            let newChatTextHeight = nodes[nodes.length- 1];
            chatContainer.scrollTop = chatContainer.scrollHeight + newChatTextHeight.clientHeight;
          }); 
        }
      }
    }
  }

  public ngOnDestroy(){
    if(this.talks)
      this.talks.length = 2;
  }


}
