import { Component } from '@angular/core';

@Component({
  selector: 'da-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dynamicInputs:any[] = [
    {id: 1, fieldName: 'firstName', label: 'First Name', fieldType: 'input', placeholder: 'First Name', validation: ['Required'], value: '3453'},
    {id: 2, fieldName: 'lastName', label: 'Last Name', fieldType: 'input', placeholder: 'Long Last Name That Will Be Truncated', validation: ['Required'], value: ''},
    {id: 3, fieldName: 'company', label: 'Company', fieldType: 'input', placeholder: 'Company', validation: ['Required'], value: ''},
    {id: 4, fieldName: 'address', label: 'Address', fieldType: 'textarea', placeholder: 'Address', validation: ['Required'], value: ''},
    {id: 5, fieldName: 'address2', label: 'Address 2', fieldType: 'textarea',placeholder: 'Address 2', validation: ['Required'], value: ''},
    {id: 6, fieldName: 'city', label: 'City', fieldType: 'input', placeholder: 'City', validation: ['Required'], value: ''},
    {id: 7, fieldName: 'state', label: 'State', fieldType: 'input', placeholder: 'State', validation: ['Required'], value: ''},
    {id: 8, fieldName: 'postalCode', label: 'Postal Code', fieldType: 'input', placeholder: 'Postal Code', validation: ['Required'], value: ''}
  ]
}
