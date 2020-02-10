import { Injectable } from '@angular/core'
import { Mail } from './mailbox.model';

let Mails = [
    new Mail(
        1, 
        'kane', 
        'assets/img/app/envato.jpg',
        'kane123@yopmail.com', 
        'Claim Amount',
        '10:10 AM',
        '<p>Hi Kane, Your patient named Williamson had underwent surgery at Sapphire MD on Aug-27-2019 at 10:30 AM. Here is the claimed amount of USD 10,000 for the surgery. Please pay the claim amount. Thanks</p>', 
        false,
        [],
        true,
        false,
        false,
        false,
        false,
        false 
    ),
    new Mail(
        2,
        'Martin',
        'assets/img/profile/bruno.jpg',
        'marting@gmail.com',
        'Claim Amount',
        '15:10 PM',
        '<p>Hi Martin, Your patient named Pollard had made an initial visit at Core Health on Aug-27-2019 at 12:30 AM. Here is the claimed amount of USD 1000 for the visit. Please pay the claim amount. Thanks</p>',
        true,
        [],
        true,
        false,
        true,
        false,
        false,
        false 
    ),
    new Mail(
        3,
        'Pollard',
        'assets/img/app/google-platform.png',
        'kpollard14@gmail.com',
        'Claim Amount',
        '11:30 AM',
        '<p>Hi Pollard, Your patient named Sachin had made a follow up visit at Prime Orthopedics on Sep-27-2019 at 12:30 AM. Here is the claimed amount of USD 1500 for the visit. Please pay the claim amount. Thanks</p>',
        false,
        [],
        false,
        false,
        false,
        false,
        false,
        false
    ),
    new Mail(
        4,
        'Sachin',
        'assets/img/app/vs.jpg',
        'sachintdr@outlook.com',
        'Claim Confirmation',
        '13:10 PM',
        '<p>Hi Sachin, We got the claim amount of USD 1500 on behalf of your patient named Kohli. Thanks</p>',
        false,
        [],
        true,
        false,
        false,
        false,
        false,
        false
    ),
    new Mail(
        5,
        'Draft',
        '',
        '',
        'no subject',
        '4:46 PM',
        '',
        false,
        [],
        false,
        false,
        false,
        true,
        false,
        false
    ),
    new Mail(
        6,
        'Draft',
        '',
        '',
        'no subject',
        'Jan 7',
        '',
        false,
        [],
        false,
        false,
        false,
        true,
        false,
        false
    ),
    new Mail(
        7,
        'Sai',
        'assets/img/app/mailchimp.jpg',
        'sair1379@gmail.com',
        'Claim Confirmation',
        '11:30 AM',
        '<p>Hi Sai, Your patient named Navin had made a follow up visit at Prime Orthopedics on Oct-27-2019 at 12:30 AM. Here is the claimed amount of USD 2500 for the visit. Please pay the claim amount. Thanks</p>',
        false,
        [],
        false,
        false,
        false,
        false,
        false,
        false
    ),
    new Mail(
        8,
        'Vamsi',
        'assets/img/app/bluehost.jpg',
        'vamsi@yopmail.com',
        'Claim Amount',
        '20.12.2018',
        '<p>Hi Vamsi, We got the claim amount of USD 1500 on behalf of your patient named Sai for the visit made on Sep-15-2019. Thanks</p>',
        false,
        [],
        false,
        false,
        true,
        false,
        false,
        false
    ),
    new Mail(
        9,
        'Kohli',
        'assets/img/users/user.jpg',
        'vkohli@yopmail.com',
        'Claim Confirmation',
        '20.12.2018',
        '<p>Hi Kohli, Your patient named Sohail had made an initial visit at Prime Orthopedics on Sep-17-2019 at 12:30 AM. Here is the claimed amount of USD 2500 for the visit. Please pay the claim amount. Thanks</p>',
        false,
        [],
        false,
        false,
        false,
        false,
        false,
        false
    )
    // new Mail(
    //     10,
    //     'Andy Dufresne',
    //     '',
    //     'andy.dufresne@gmail.com',
    //     'The Shawshank Redemption',
    //     '18.11.2016',
    //     '<p>From Wikipedia, the free encyclopedia</p>' +
    //     '<p>The Shawshank Redemption is a 1994 American drama film written and directed by Frank Darabont. and starring Tim Robbins and Morgan Freeman. Adapted from the Stephen King novella Rita Hayworth and Shawshank Redemption, the film tells the story of Andy Dufresne, '+
    //     'a banker who is sentenced to life in Shawshank State Penitentiary for the murder of his wife and her lover, despite his claims of innocence. During his time at the prison, he befriends a fellow inmate, Ellis Boyd "Red" Redding, '+
    //     'and finds himself protected by the guards after the warden begins using him in his money-laundering operation.</p>',
    //     false,
    //     [],
    //     false,
    //     true,
    //     false,
    //     false,
    //     false,
    //     false
    // ),
    // new Mail(
    //     11,
    //     'The Envato Team',
    //     '',
    //     'donotreply@envato.com',
    //     'Author Driven Pricing on ThemeForest, CodeCanyon and 3DOcean',
    //     '05.09.2016',
    //     '<h5>Hey Envato Community Members!</h5>' + 
    //     '<p>As many of you know, over the past 12 months we have been rolling out Author Driven Pricing (ADP) across a range of different categories on Envato Market. So far this has included GraphicRiver and a handful of categories within ThemeForest.</p>' +
    //     '<p>In a few weeks, we\'ll be moving on to the next stage of our Author Driven Pricing project. This will involve introducing ADP to three new areas of Envato Market. These areas are:</p>' +
    //     '<ul><li>All remaining ThemeForest categories (including WordPress). </li><li>All categories on CodeCanyon.</li><li>All categories on 3DOcean</li></ul>' +
    //     '<p>We strongly recommend reading the full announcement on our forums where you will find:</p>' +
    //     '<ul><li>More details about the change.</li><li>How ADP has impacted pricing on previous categories.</li><li>Technical details regarding how to set prices.</li> <li>Why we’ve made the change. </li></ul>' +
    //     '<p>You will also be able to ask any questions you might have.</p>' +
    //     '<p>We will send you another email to let you know when this feature goes live.</p>' +
    //     '<p>All the best,</p>'+
    //     '<p>The Envato Team</p>',
    //     false,
    //     [],
    //     false,
    //     false,
    //     false,
    //     false,
    //     false,
    //     false
    // ),
    // new Mail(
    //     12,
    //     'Jonathan Cantu',
    //     '',
    //     'JCantu@billingsleyco.com',
    //     'Ability to Customize',
    //     '02.09.2016',
    //     '<p>Hi,</p><p>Upon purchases, will I have the ability to modify color palette, font, etc. beyond your own design?</p><p>Thanks</p>',
    //     false,
    //     [],
    //     false,
    //     false,
    //     false,
    //     false,
    //     false,
    //     false
    // ),
    // new Mail(
    //     13,
    //     'Jennifer Adam',
    //     '',
    //     'jenniferadam2009@gmail.com',
    //     'Guest Post Request - 2016 !!!',
    //     '09.05.2016',
    //     '<p><b>Hello,</b></p>'+
    //     '<p>I\'m Jennifer, constant follower of your blog posts and I\'ve liked most of the blog posts written here. I could realize you\'ve already published some great guest posts from different authors with distinct styles '+
    //     'and I\'d be privileged if I were provided with an opportunity to delight your blog followers with some informative blog posts.</p>' +
    //     '<p>I\'m a content expert and I\'ve contributed some sensible and informative articles to surplus niche-specific blogs. I realize the value of content and its part in helping out numerous people out there in the space. </p>',
    //     false,
    //     [],
    //     false,
    //     false,
    //     false,
    //     false,
    //     false,
    //     false
    // )
];
  
@Injectable()
export class MailboxService {

    public getAllMails() {
        return Mails.filter(mail => mail.sent == false && mail.draft == false && mail.trash == false);
    }
    
    public getStarredMails() {
        return Mails.filter(mail => mail.starred == true);
    }

    public getSentMails() {
        return Mails.filter(mail => mail.sent == true);
    }

    public getDraftMails() {
        return Mails.filter(mail => mail.draft == true);
    }

    public getTrashMails() {
        return Mails.filter(mail => mail.trash == true);
    }

    public getMail(id: number | string) {
        return Mails.find(mail => mail.id === +id);
    }
}