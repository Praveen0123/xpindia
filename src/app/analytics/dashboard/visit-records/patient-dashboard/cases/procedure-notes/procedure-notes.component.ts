import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { TreeService } from '../tree.service';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../../../../app.settings';
import { Settings } from '../../../../../../app.settings.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-procedure-notes',
  templateUrl: './procedure-notes.component.html',
  styleUrls: ['./procedure-notes.component.scss']
})
export class ProcedureNotesComponent implements OnInit {

 
  treeElement: any;
  selectedFile: any = [];
  files = [];
  public settings: Settings;
 
  constructor(public treeService: TreeService,public appSettings: AppSettings,public dialog: MatDialog,public router:Router) {
    this.settings = this.appSettings.settings;
   }

  ngOnInit() {
    var data = this.treeService.getTreeJSON();
    this.files = data['data'];
    this.selectedFile = this.files[0]['children'][0];
    
  }

  private expandRecursive(node: TreeNode, isExpand: boolean) {
    node.expanded = isExpand;
    if (node.children) {
      node.children.forEach(childNode => {
        this.expandRecursive(childNode, isExpand);
      });
    }
  }

  nodeSelect(event) {
    if(event.node.label == "Recommendations") {
      this.treeElement = event.node.label;
    }
    else {
      this.treeElement = null;
    }
  }

  saveForm() {
    
  }

}
