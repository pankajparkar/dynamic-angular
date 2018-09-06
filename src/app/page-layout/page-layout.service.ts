import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '../../../node_modules/@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PageLayoutService {

  constructor(private formBuilder: FormBuilder) { }

  //TODO: Think about async validators, how can I apply them?
  applyValidators(form: FormGroup, fields) {
    fields.forEach(field => {
      const formField = form.get(field.fieldName);
      const validators = []
      //Apply Required validator
      if (~field.validators.indexOf('Required')) {
        validators.push(Validators.required);
      }
      //TODO: Apply Readonly validator
      if (~field.validators.indexOf('Readonly')) {
        validators.push(Validators.required);
      }
      //TODO: Apply Disabled validator
      if (~field.validators.indexOf('Disabled')) {
        validators.push(Validators.required);
      }
      //Apply Minlength validator
      if (~field.validators.indexOf('MinLength')) {
        validators.push(Validators.minLength(10));
      }
      //Apply Maxlength validator
      if (~field.validators.indexOf('MaxLength')) {
        validators.push(Validators.maxLength(10));
      }
      //Apply Pattern validator
      if (~field.validators.indexOf('Pattern')) {
        validators.push(Validators.pattern(/^[A-Za-z]$/));
      }
      //Apply Min validator
      if (~field.validators.indexOf('Min')) {
        validators.push(Validators.min(10));
      }
      //Apply Max validator
      if (~field.validators.indexOf('Max')) {
        validators.push(Validators.max(100));
      }
      //TODO: Apply Async validator
      //Apply dependendant field validator
      //Apply etc.. add more here
      formField.setValidators(validators)
    });
  }

  formValueMapper(dynamicInputs, formValues) {
    const mapFields = dynamicInputs.map(field => {
      const fieldName = field.fieldName
      if(formValues.hasOwnProperty(fieldName)) {
        field.value = formValues[fieldName]
      }
      return field;
    });
    return mapFields;
  }

  applyValues(dynamicInputs) {
    console.log(dynamicInputs)
  }

  createFormObject(dynamicInputs) {
    const dynamicFormInputs = {};
    (dynamicInputs || []).forEach(({ fieldName, value }) => {
      dynamicFormInputs[fieldName] = new FormControl(value)
    });
    return this.formBuilder.group(dynamicFormInputs)
  }
}
