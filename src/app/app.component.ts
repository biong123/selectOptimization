import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';
import { originSource, SourceType } from './mock-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'selector';
  tab1acticeID = 'tab1';
  tab2acticeID = 'tab3';
  tabActiveId ="candidate"
  constructor() { }

  ngOnInit() {
  }
  activeTabChange(id) {
    console.log(id);
  }

    basicDataSource: Array<SourceType> = JSON.parse(JSON.stringify(originSource));
    dataTableOptions = {
      columns: [
          {
              field: 'firstName',
              header: 'First Name',
              fieldType: 'text',
              fixedLeft: '36px'
          },
          {
              field: 'lastName',
              header: 'Last Name',
              fieldType: 'text'
          },
          {
              field: 'gender',
              header: 'gender',
              fieldType: 'text'
          },
          {
              field: 'dob',
              header: 'Date of birth',
              fieldType: 'date'
          },
          {
            field: 'dob',
            header: 'Date of birth',
            fieldType: 'date'
          },
          {
            field: 'dob',
            header: 'Date of birth',
            fieldType: 'date'
          },
          {
            field: 'dob',
            header: 'Date of birth',
            fieldType: 'date'
          },
          {
            field: 'dob',
            header: 'Date of birth',
            fieldType: 'date',
            fixedRight: '0px'
          }
      ]
  };
  

  
  


}
