import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArrayName } from '@angular/forms';

@Component({
  selector: 'da-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.css']
})
export class PageLayoutComponent implements OnInit {

  formDynamicInput:any[] = [
    {id: 1, fieldName: 'firstName', label: 'First Name', fieldType: 'input', placeholder: 'First Name', validation: ['Required'], value: '3453'},
    {id: 2, fieldName: 'lastName', label: 'Last Name', fieldType: 'input', placeholder: 'Long Last Name That Will Be Truncated', validation: ['Required'], value: ''},
    {id: 3, fieldName: 'company', label: 'Company', fieldType: 'input', placeholder: 'Company', validation: ['Required'], value: ''},
    {id: 4, fieldName: 'address', label: 'Address', fieldType: 'textarea', placeholder: 'Address', validation: ['Required'], value: ''},
    {id: 5, fieldName: 'address2', label: 'Address 2', fieldType: 'textarea',placeholder: 'Address 2', validation: ['Required'], value: ''},
    {id: 6, fieldName: 'city', label: 'City', fieldType: 'input', placeholder: 'City', validation: ['Required'], value: ''},
    {id: 7, fieldName: 'state', label: 'State', fieldType: 'input', placeholder: 'State', validation: ['Required'], value: ''},
    {id: 8, fieldName: 'postalCode', label: 'Postal Code', fieldType: 'input', placeholder: 'Postal Code', validation: ['Required'], value: ''}
  ]
  
  userForm: FormGroup;
  dynamicFormGroup: FormGroup;

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

    const dynamicFormInputs = {};
    this.formDynamicInput.forEach(({fieldName, fieldType, value}) => {
      dynamicFormInputs[fieldName] = new FormControl(value, Validators.required)
    });
    this.dynamicFormGroup = this.formBuilder.group(dynamicFormInputs)
  }

  submit(values){
    console.log(values);
  }

}
