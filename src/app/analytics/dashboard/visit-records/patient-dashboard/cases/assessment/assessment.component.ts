import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent implements OnInit {

  constructor() { }
  tableList:any;

  myControl = new FormControl();
  options: string[] = ['S00.00XA : Unspecified superficial injury of scalp, initial encounter', 'H35.00 : Unspecified background retinopathy', 'S03.42XS : Sprain of jaw, left side, sequela'];
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.tableList = [
      {icd:"S00.00XA" , description:"Unspecified superficial injury of scalp, initial encounter"},
      {icd:"H35.00" , description:"Unspecified background retinopathy"},
      {icd:"S03.42XS" , description:"Sprain of jaw, left side, sequela"},
    ]
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  saveForm() {
    
  }

}
