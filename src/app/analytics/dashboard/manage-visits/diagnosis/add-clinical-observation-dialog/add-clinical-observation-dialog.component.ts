import { Component, OnInit , Inject, ChangeDetectorRef} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SpeechRecognizerService } from '../shared/services/speech-recognizer.service';
import { TreeNode } from 'primeng/api';
import { SpeechNotification } from '../shared/model/speech-notification';
import { SpeechError } from '../shared/model/speech-error';
import { ActionContext } from '../shared/model/strategy/action-content';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../../../app.settings';
import { Settings } from '../../../../../app.settings.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-clinical-observation-dialog',
  templateUrl: './add-clinical-observation-dialog.component.html',
  styleUrls: ['./add-clinical-observation-dialog.component.scss']
})
export class AddClinicalObservationDialogComponent implements OnInit {

  finalTranscript = '';
  taskId: any;
  globalTaskId: number;
  selectedFile: any = [];
  files = [];
  status:boolean;
  groups:any;
  newGroups:any;
  selectedItem:any;
  selectedListItem:any;
  public settings: Settings;
  recognizing = false;
  notification: string;
  languages: string[] =  ['en-US', 'es-ES'];
  currentLanguage: string;
  actionContext: ActionContext = new ActionContext();

  constructor(public dialogRef: MatDialogRef<AddClinicalObservationDialogComponent>,@Inject(MAT_DIALOG_DATA) public observation: any,private changeDetector: ChangeDetectorRef,public appSettings: AppSettings,private router : Router,
    public dialog: MatDialog,
              private speechRecognizer: SpeechRecognizerService) { 
                this.settings = this.appSettings.settings;
              }

  ngOnInit() {
    this.currentLanguage = this.languages[0];
    this.speechRecognizer.initialize(this.currentLanguage);
    this.initRecognition();
    this.notification = null;
    this.newGroups = [
      {name:"Prognosis"},
      {name:"Clinical Impression"},
      {name:"Radiological Examination"},
      {name:"Pertinent Clinical Findings"},
      {name:"Recommended Treatment"},
    ];
    this.selectedListItem = this.newGroups[0] 
  }

listNewClick(event, newValue) {

  this.selectedListItem = newValue;
  // don't forget to update the model here
  // ... do other stuff here ...
}
 
clickEvent(){
  this.status = !this.status;       
}

  startButton(event) {
    if (this.recognizing) {
      this.speechRecognizer.stop();
      return;
    }

    this.speechRecognizer.start(event.timeStamp);
  }

  onSelectLanguage(language: string) {
    this.currentLanguage = language;
    this.speechRecognizer.setLanguage(this.currentLanguage);
  }

  private initRecognition() {
    this.speechRecognizer.onStart()
      .subscribe(data => {
        this.recognizing = true;
        this.notification = 'I\'m listening...';
        this.detectChanges();
      });

    this.speechRecognizer.onEnd()
      .subscribe(data => {
        this.recognizing = false;
        this.detectChanges();
        this.notification = null;
      });

    this.speechRecognizer.onResult()
      .subscribe((data: SpeechNotification) => {
        const message = data.content.trim();
        if (data.info === 'final_transcript' && message.length > 0) {
          this.finalTranscript = `${this.finalTranscript}\n${message}`;
          this.actionContext.processMessage(message, this.currentLanguage);
          this.detectChanges();
          this.actionContext.runAction(message, this.currentLanguage);
        }
      });

    this.speechRecognizer.onError()
      .subscribe(data => {
        switch (data.error) {
          case SpeechError.BLOCKED:
          case SpeechError.NOT_ALLOWED:
            this.notification = `Cannot run the demo.
            Your browser is not authorized to access your microphone. Verify that your browser has access to your microphone and try again.
            `;
            break;
          case SpeechError.NO_SPEECH:
            this.notification = `No speech has been detected. Please try again.`;
            break;
          case SpeechError.NO_MICROPHONE:
            this.notification = `Microphone is not available. Plese verify the connection of your microphone and try again.`;
            break;
          default:
            this.notification = null;
            break;
        }
        this.recognizing = false;
        this.detectChanges();
      });
  }

  detectChanges() {
    this.changeDetector.detectChanges();
  }

  close() {
    this.dialogRef.close();
  }
  saveObservation() {
    this.dialogRef.close(); 
  }

}
