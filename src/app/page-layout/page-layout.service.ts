import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '../../../node_modules/@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PageLayoutService {

  constructor(private formBuilder: FormBuilder) { }

  //TODO: Think about async validators, how can I apply them?
  applyValidators() {

  }

  applyValues() {

  }

  createFormObject(dynamicInputs) {
    const dynamicFormInputs = {};
    (dynamicInputs || []).forEach(({ fieldName, value }) => {
      // TODO: clear off validators part to separate function.
      dynamicFormInputs[fieldName] = new FormControl(value, Validators.required)
    });
    return this.formBuilder.group(dynamicFormInputs)
  }
}
