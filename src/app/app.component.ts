import { Component, OnInit } from '@angular/core';
import { IDynamicFormField } from './models/dynamic-form-field'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'da-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  dynamicInputs: IDynamicFormField[] = [];
  constructor (private http: HttpClient) {
  }

  getFields () {
    this.http.get('/api/data.json').subscribe(
      (fields: IDynamicFormField[]) => this.dynamicInputs = fields
    )
  }

  ngOnInit () {
    this.getFields();
  }
}
