import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArrayName } from '@angular/forms';

@Component({
  selector: 'da-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageLayoutComponent implements OnChanges {
  @Input() dynamicInputs: any[];
  dynamicFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  //TODO: Think about async validators, how can I apply them?
  applyValidators() {

  }

  applyValues () {

  }

  createFormObject () {
    const dynamicFormInputs = {};
    (this.dynamicInputs || []).forEach(({ fieldName, value }) => {
      dynamicFormInputs[fieldName] = new FormControl(value, Validators.required)
    });
    this.dynamicFormGroup = this.formBuilder.group(dynamicFormInputs)
  }

  buildForm() {
    // Step 1: Create form object
    this.createFormObject()

    // Step 2: Apply validators
    this.applyValidators()

    // Step 3: Apply Values
    this.applyValues()
  }

  ngOnChanges(model: SimpleChanges) {
    if (model.dynamicInputs.currentValue !== model.dynamicInputs.previousValue) {
      this.buildForm();
    }
  }

  submit(values) {
    console.log(values);
  }

}
