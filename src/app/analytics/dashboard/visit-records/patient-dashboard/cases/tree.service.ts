import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TreeService {

  constructor(private http: HttpClient) {

    this.treeData = {
      "data": [{
        "label": "Case-1",
        "data": "Documents Folder",
        "expandedIcon": "fa fa-building-o green",
        "collapsedIcon": "fa fa-building-o green",
        "selectable": true,
        "expanded": true,
        "children": [
          {
          "label": "Visit-1",
          "data": "Documents Folder",
          "expandedIcon": "fa fa-briefcase gold",
          "collapsedIcon": "fa fa-briefcase gold",
          "selectable": true,
          "expanded": false,
          
        },
        {
          "label": "Visit-2",
          "data": "Documents Folder",
          "expandedIcon": "fa fa-briefcase gold",
          "collapsedIcon": "fa fa-briefcase gold",
          "selectable": true,
          "expanded": false,
          
        },
        {
          "label": "Visit-3",
          "data": "Documents Folder",
          "expandedIcon": "fa fa-briefcase gold",
          "collapsedIcon": "fa fa-briefcase gold",
          "selectable": true,
          "expanded": false,
          
        },
        {
          "label": "Visit-4",
          "data": "Documents Folder",
          "expandedIcon": "fa fa-briefcase gold",
          "collapsedIcon": "fa fa-briefcase gold",
          "selectable": true,
          "expanded": false,
          
        },
        {
          "label": "Recommendations",
          "data": "Documents Folder",
          "expandedIcon": "fa fa-newspaper-o pink",
          "collapsedIcon": "fa fa-newspaper-o pink",
          "selectable": true,
          "expanded": false,
          
        }
        ]
      },
      {
        "label": "Case-2",
        "data": "Documents Folder",
        "expandedIcon": "fa fa-building-o green",
        "collapsedIcon": "fa fa-building-o green",
        "selectable": true,
        "expanded": false,
        "children": [
          {
            "label": "Visit-1",
            "data": "Documents Folder",
            "expandedIcon": "fa fa-briefcase gold",
            "collapsedIcon": "fa fa-briefcase gold",
            "selectable": true,
            "expanded": true,
            
          },
          {
            "label": "Visit-2",
            "data": "Documents Folder",
            "expandedIcon": "fa fa-briefcase gold",
            "collapsedIcon": "fa fa-briefcase gold",
            "selectable": true,
            
          },
          {
            "label": "Visit-3",
            "data": "Documents Folder",
            "expandedIcon": "fa fa-briefcase gold",
            "collapsedIcon": "fa fa-briefcase gold",
            "selectable": true,
            
          },
          {
            "label": "Visit-4",
            "data": "Documents Folder",
            "expandedIcon": "fa fa-briefcase gold",
            "collapsedIcon": "fa fa-briefcase gold",
            "selectable": true,
          },
          {
            "label": "Recommendations",
            "data": "Documents Folder",
            "expandedIcon": "fa fa-newspaper-o pink",
            "collapsedIcon": "fa fa-newspaper-o pink",
            "selectable": true
          }
        ]
      }
      ]
    }
  }
  treeData: any;

  public getTreeJSON() {
    return this.treeData;
  }


}
