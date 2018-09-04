import { Component, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { PageLayoutService } from './page-layout.service';

@Component({
  selector: 'da-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageLayoutComponent implements OnChanges {
  @Input() dynamicInputs: any[];
  dynamicFormGroup: FormGroup;

  constructor(private pageLayoutService: PageLayoutService) { }

  buildForm(dynamicInputs) {
    // Step 1: Create form object
    this.dynamicFormGroup = this.pageLayoutService.createFormObject(dynamicInputs)

    // Step 2: Apply validators
    this.pageLayoutService.applyValidators()

    // Step 3: Apply Values
    this.pageLayoutService.applyValues()
  }

  ngOnChanges(model: SimpleChanges) {
    if (model.dynamicInputs.currentValue !== model.dynamicInputs.previousValue) {
      this.buildForm(model.dynamicInputs.currentValue);
    }
  }

  submit(values) {
    console.log(values);
  }

}
