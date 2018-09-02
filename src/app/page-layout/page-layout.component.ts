import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'da-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.css']
})
export class PageLayoutComponent implements OnInit {

  formDynamicInput:any[] = [
    {id: 1, fieldName: 'firstName', label: 'First Name', fieldType: 'input', validation: ['Required']},
    {id: 2, fieldName: 'lastName', label: 'Last Name', fieldType: 'input', validation: ['Required']},
    {id: 3, fieldName: 'company', label: 'Company', fieldType: 'input', validation: ['Required']},
    {id: 4, fieldName: 'address', label: 'Address', fieldType: 'textarea', validation: ['Required']},
    {id: 5, fieldName: 'address2', label: 'Address 2', fieldType: 'textarea', validation: ['Required']},
    {id: 6, fieldName: 'city', label: 'City', fieldType: 'input', validation: ['Required']},
    {id: 7, fieldName: 'state', label: 'State', fieldType: 'input', validation: ['Required']},
    {id: 8, fieldName: 'postalCode', label: 'Postal Code', fieldType: 'input', validation: ['Required']}
  ]
  
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      company: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      address2: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      postCode: new FormControl('', Validators.required)
    })
  }

  submit(values){
    console.log(values);
  }

}
