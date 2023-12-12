import * as i0 from '@angular/core';
import { Component, ViewEncapsulation } from '@angular/core';
import * as i4 from '@angular/forms';
import { FormControl, FormsModule, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import * as i2 from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import * as i1 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i3 from '@angular/material/core';
import * as i5 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i1$1 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';

/** @title Select with custom trigger text */
class SelectCustomTriggerExample {
    constructor() {
        this.toppings = new FormControl('');
        this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SelectCustomTriggerExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: SelectCustomTriggerExample, isStandalone: true, selector: "select-custom-trigger-example", ngImport: i0, template: "<mat-form-field>\r\n  <mat-label>Toppings</mat-label>\r\n  <mat-select [formControl]=\"toppings\" multiple>\r\n    <mat-select-trigger>\r\n      {{toppings.value?.[0] || ''}}\r\n      @if ((toppings.value?.length || 0) > 1) {\r\n        <span class=\"example-additional-selection\">\r\n          (+{{(toppings.value?.length || 0) - 1}} {{toppings.value?.length === 2 ? 'other' : 'others'}})\r\n        </span>\r\n      }\r\n    </mat-select-trigger>\r\n    @for (topping of toppingList; track topping) {\r\n  <mat-option [value]=\"topping\">{{topping}}</mat-option>\r\n}\r\n  </mat-select>\r\n</mat-form-field>\r\n", styles: [".example-additional-selection {\r\n  opacity: 0.75;\r\n  font-size: 0.75em;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i2.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "directive", type: i2.MatSelectTrigger, selector: "mat-select-trigger" }, { kind: "component", type: i3.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SelectCustomTriggerExample, decorators: [{
            type: Component,
            args: [{ selector: 'select-custom-trigger-example', standalone: true, imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule], template: "<mat-form-field>\r\n  <mat-label>Toppings</mat-label>\r\n  <mat-select [formControl]=\"toppings\" multiple>\r\n    <mat-select-trigger>\r\n      {{toppings.value?.[0] || ''}}\r\n      @if ((toppings.value?.length || 0) > 1) {\r\n        <span class=\"example-additional-selection\">\r\n          (+{{(toppings.value?.length || 0) - 1}} {{toppings.value?.length === 2 ? 'other' : 'others'}})\r\n        </span>\r\n      }\r\n    </mat-select-trigger>\r\n    @for (topping of toppingList; track topping) {\r\n  <mat-option [value]=\"topping\">{{topping}}</mat-option>\r\n}\r\n  </mat-select>\r\n</mat-form-field>\r\n", styles: [".example-additional-selection {\r\n  opacity: 0.75;\r\n  font-size: 0.75em;\r\n}\r\n"] }]
        }] });

/** @title Disabled select */
class SelectDisabledExample {
    constructor() {
        this.disableSelect = new FormControl(false);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SelectDisabledExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: SelectDisabledExample, isStandalone: true, selector: "select-disabled-example", ngImport: i0, template: "<p>\r\n  <mat-checkbox [formControl]=\"disableSelect\">Disable select</mat-checkbox>\r\n</p>\r\n\r\n<h4>mat-select</h4>\r\n<mat-form-field>\r\n  <mat-label>Choose an option</mat-label>\r\n  <mat-select [disabled]=\"disableSelect.value\">\r\n    <mat-option value=\"option1\">Option 1</mat-option>\r\n    <mat-option value=\"option2\" disabled>Option 2 (disabled)</mat-option>\r\n    <mat-option value=\"option3\">Option 3</mat-option>\r\n  </mat-select>\r\n</mat-form-field>\r\n\r\n<h4>native html select</h4>\r\n<mat-form-field>\r\n  <mat-label>Choose an option</mat-label>\r\n  <select matNativeControl [disabled]=\"disableSelect.value\">\r\n    <option value=\"\" selected></option>\r\n    <option value=\"volvo\">Volvo</option>\r\n    <option value=\"saab\" disabled>Saab</option>\r\n    <option value=\"mercedes\">Mercedes</option>\r\n    <option value=\"audi\">Audi</option>\r\n  </select>\r\n</mat-form-field>\r\n\r\n", dependencies: [{ kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i1$1.MatCheckbox, selector: "mat-checkbox", inputs: ["aria-label", "aria-labelledby", "aria-describedby", "id", "required", "labelPosition", "name", "value", "disableRipple", "tabIndex", "color", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i4.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i4.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i2.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i3.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SelectDisabledExample, decorators: [{
            type: Component,
            args: [{ selector: 'select-disabled-example', standalone: true, imports: [
                        MatCheckboxModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatFormFieldModule,
                        MatSelectModule,
                        MatInputModule,
                    ], template: "<p>\r\n  <mat-checkbox [formControl]=\"disableSelect\">Disable select</mat-checkbox>\r\n</p>\r\n\r\n<h4>mat-select</h4>\r\n<mat-form-field>\r\n  <mat-label>Choose an option</mat-label>\r\n  <mat-select [disabled]=\"disableSelect.value\">\r\n    <mat-option value=\"option1\">Option 1</mat-option>\r\n    <mat-option value=\"option2\" disabled>Option 2 (disabled)</mat-option>\r\n    <mat-option value=\"option3\">Option 3</mat-option>\r\n  </mat-select>\r\n</mat-form-field>\r\n\r\n<h4>native html select</h4>\r\n<mat-form-field>\r\n  <mat-label>Choose an option</mat-label>\r\n  <select matNativeControl [disabled]=\"disableSelect.value\">\r\n    <option value=\"\" selected></option>\r\n    <option value=\"volvo\">Volvo</option>\r\n    <option value=\"saab\" disabled>Saab</option>\r\n    <option value=\"mercedes\">Mercedes</option>\r\n    <option value=\"audi\">Audi</option>\r\n  </select>\r\n</mat-form-field>\r\n\r\n" }]
        }] });

/** Error when invalid control is dirty, touched, or submitted. */
class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
/** @title Select with a custom ErrorStateMatcher */
class SelectErrorStateMatcherExample {
    constructor() {
        this.selected = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);
        this.selectFormControl = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);
        this.nativeSelectFormControl = new FormControl('valid', [
            Validators.required,
            Validators.pattern('valid'),
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SelectErrorStateMatcherExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: SelectErrorStateMatcherExample, isStandalone: true, selector: "select-error-state-matcher-example", ngImport: i0, template: "<h4>mat-select</h4>\r\n<mat-form-field>\r\n  <mat-label>Choose one</mat-label>\r\n  <mat-select [formControl]=\"selected\" [errorStateMatcher]=\"matcher\">\r\n    <mat-option>Clear</mat-option>\r\n    <mat-option value=\"valid\">Valid option</mat-option>\r\n    <mat-option value=\"invalid\">Invalid option</mat-option>\r\n  </mat-select>\r\n  <mat-hint>Errors appear instantly!</mat-hint>\r\n  @if (selected.hasError('required')) {\r\n    <mat-error>You must make a selection</mat-error>\r\n  }\r\n  @if (selected.hasError('pattern') && !selected.hasError('required')) {\r\n    <mat-error>Your selection is invalid</mat-error>\r\n  }\r\n</mat-form-field>\r\n\r\n<h4>native html select</h4>\r\n<mat-form-field class=\"demo-full-width\">\r\n  <mat-label>Choose one</mat-label>\r\n  <select matNativeControl [formControl]=\"nativeSelectFormControl\" [errorStateMatcher]=\"matcher\">\r\n    <option value=\"\"></option>\r\n    <option value=\"valid\" selected>Valid option</option>\r\n    <option value=\"invalid\">Invalid option</option>\r\n  </select>\r\n  @if (nativeSelectFormControl.hasError('required')) {\r\n    <mat-error>You must make a selection</mat-error>\r\n  }\r\n  @if (nativeSelectFormControl.hasError('pattern') && !nativeSelectFormControl.hasError('required')) {\r\n    <mat-error>Your selection is invalid</mat-error>\r\n  }\r\n</mat-form-field>\r\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i1.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i2.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i3.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i4.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i4.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i4.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SelectErrorStateMatcherExample, decorators: [{
            type: Component,
            args: [{ selector: 'select-error-state-matcher-example', standalone: true, imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatInputModule], template: "<h4>mat-select</h4>\r\n<mat-form-field>\r\n  <mat-label>Choose one</mat-label>\r\n  <mat-select [formControl]=\"selected\" [errorStateMatcher]=\"matcher\">\r\n    <mat-option>Clear</mat-option>\r\n    <mat-option value=\"valid\">Valid option</mat-option>\r\n    <mat-option value=\"invalid\">Invalid option</mat-option>\r\n  </mat-select>\r\n  <mat-hint>Errors appear instantly!</mat-hint>\r\n  @if (selected.hasError('required')) {\r\n    <mat-error>You must make a selection</mat-error>\r\n  }\r\n  @if (selected.hasError('pattern') && !selected.hasError('required')) {\r\n    <mat-error>Your selection is invalid</mat-error>\r\n  }\r\n</mat-form-field>\r\n\r\n<h4>native html select</h4>\r\n<mat-form-field class=\"demo-full-width\">\r\n  <mat-label>Choose one</mat-label>\r\n  <select matNativeControl [formControl]=\"nativeSelectFormControl\" [errorStateMatcher]=\"matcher\">\r\n    <option value=\"\"></option>\r\n    <option value=\"valid\" selected>Valid option</option>\r\n    <option value=\"invalid\">Invalid option</option>\r\n  </select>\r\n  @if (nativeSelectFormControl.hasError('required')) {\r\n    <mat-error>You must make a selection</mat-error>\r\n  }\r\n  @if (nativeSelectFormControl.hasError('pattern') && !nativeSelectFormControl.hasError('required')) {\r\n    <mat-error>Your selection is invalid</mat-error>\r\n  }\r\n</mat-form-field>\r\n" }]
        }] });

/**
 * @title Select in a form
 */
class SelectFormExample {
    constructor() {
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' },
        ];
        this.cars = [
            { value: 'volvo', viewValue: 'Volvo' },
            { value: 'saab', viewValue: 'Saab' },
            { value: 'mercedes', viewValue: 'Mercedes' },
        ];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SelectFormExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: SelectFormExample, isStandalone: true, selector: "select-form-example", ngImport: i0, template: "<form>\r\n  <h4>mat-select</h4>\r\n  <mat-form-field>\r\n    <mat-label>Favorite food</mat-label>\r\n    <mat-select [(ngModel)]=\"selectedValue\" name=\"food\">\r\n      @for (food of foods; track food) {\r\n        <mat-option [value]=\"food.value\">{{food.viewValue}}</mat-option>\r\n      }\r\n    </mat-select>\r\n  </mat-form-field>\r\n  <p> Selected food: {{selectedValue}} </p>\r\n  <h4>native html select</h4>\r\n  <mat-form-field>\r\n    <mat-label>Favorite car</mat-label>\r\n    <select matNativeControl [(ngModel)]=\"selectedCar\" name=\"car\">\r\n      <option value=\"\" selected></option>\r\n      @for (car of cars; track car) {\r\n        <option [value]=\"car.value\">{{car.viewValue}}</option>\r\n      }\r\n    </select>\r\n  </mat-form-field>\r\n  <p> Selected car: {{selectedCar}} </p>\r\n</form>\r\n", dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i4.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i4.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i4.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i4.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i4.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i2.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i3.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SelectFormExample, decorators: [{
            type: Component,
            args: [{ selector: 'select-form-example', standalone: true, imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule], template: "<form>\r\n  <h4>mat-select</h4>\r\n  <mat-form-field>\r\n    <mat-label>Favorite food</mat-label>\r\n    <mat-select [(ngModel)]=\"selectedValue\" name=\"food\">\r\n      @for (food of foods; track food) {\r\n        <mat-option [value]=\"food.value\">{{food.viewValue}}</mat-option>\r\n      }\r\n    </mat-select>\r\n  </mat-form-field>\r\n  <p> Selected food: {{selectedValue}} </p>\r\n  <h4>native html select</h4>\r\n  <mat-form-field>\r\n    <mat-label>Favorite car</mat-label>\r\n    <select matNativeControl [(ngModel)]=\"selectedCar\" name=\"car\">\r\n      <option value=\"\" selected></option>\r\n      @for (car of cars; track car) {\r\n        <option [value]=\"car.value\">{{car.viewValue}}</option>\r\n      }\r\n    </select>\r\n  </mat-form-field>\r\n  <p> Selected car: {{selectedCar}} </p>\r\n</form>\r\n" }]
        }] });

/** @title Select with form field features */
class SelectHintErrorExample {
    constructor() {
        this.animalControl = new FormControl(null, Validators.required);
        this.selectFormControl = new FormControl('', Validators.required);
        this.animals = [
            { name: 'Dog', sound: 'Woof!' },
            { name: 'Cat', sound: 'Meow!' },
            { name: 'Cow', sound: 'Moo!' },
            { name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!' },
        ];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SelectHintErrorExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: SelectHintErrorExample, isStandalone: true, selector: "select-hint-error-example", ngImport: i0, template: "<h4>mat select</h4>\r\n<mat-form-field>\r\n  <mat-label>Favorite animal</mat-label>\r\n  <mat-select [formControl]=\"animalControl\" required>\r\n    <mat-option>--</mat-option>\r\n    @for (animal of animals; track animal) {\r\n      <mat-option [value]=\"animal\">{{animal.name}}</mat-option>\r\n    }\r\n  </mat-select>\r\n  @if (animalControl.hasError('required')) {\r\n    <mat-error>Please choose an animal</mat-error>\r\n  }\r\n  <mat-hint>{{animalControl.value?.sound}}</mat-hint>\r\n</mat-form-field>\r\n\r\n<h4>native html select</h4>\r\n<mat-form-field>\r\n  <mat-label>Select your car (required)</mat-label>\r\n  <select matNativeControl required [formControl]=\"selectFormControl\">\r\n    <option label=\"--select something --\"></option>\r\n    <option value=\"saab\">Saab</option>\r\n    <option value=\"mercedes\">Mercedes</option>\r\n    <option value=\"audi\">Audi</option>\r\n  </select>\r\n  @if (selectFormControl.hasError('required')) {\r\n    <mat-error>This field is required</mat-error>\r\n  }\r\n  <mat-hint>You can pick up your favorite car here</mat-hint>\r\n</mat-form-field>\r\n\r\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i1.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i2.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i3.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i4.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i4.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i4.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i4.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SelectHintErrorExample, decorators: [{
            type: Component,
            args: [{ selector: 'select-hint-error-example', standalone: true, imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatInputModule], template: "<h4>mat select</h4>\r\n<mat-form-field>\r\n  <mat-label>Favorite animal</mat-label>\r\n  <mat-select [formControl]=\"animalControl\" required>\r\n    <mat-option>--</mat-option>\r\n    @for (animal of animals; track animal) {\r\n      <mat-option [value]=\"animal\">{{animal.name}}</mat-option>\r\n    }\r\n  </mat-select>\r\n  @if (animalControl.hasError('required')) {\r\n    <mat-error>Please choose an animal</mat-error>\r\n  }\r\n  <mat-hint>{{animalControl.value?.sound}}</mat-hint>\r\n</mat-form-field>\r\n\r\n<h4>native html select</h4>\r\n<mat-form-field>\r\n  <mat-label>Select your car (required)</mat-label>\r\n  <select matNativeControl required [formControl]=\"selectFormControl\">\r\n    <option label=\"--select something --\"></option>\r\n    <option value=\"saab\">Saab</option>\r\n    <option value=\"mercedes\">Mercedes</option>\r\n    <option value=\"audi\">Audi</option>\r\n  </select>\r\n  @if (selectFormControl.hasError('required')) {\r\n    <mat-error>This field is required</mat-error>\r\n  }\r\n  <mat-hint>You can pick up your favorite car here</mat-hint>\r\n</mat-form-field>\r\n\r\n" }]
        }] });

/** @title Select with multiple selection */
class SelectMultipleExample {
    constructor() {
        this.toppings = new FormControl('');
        this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SelectMultipleExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: SelectMultipleExample, isStandalone: true, selector: "select-multiple-example", ngImport: i0, template: "<mat-form-field>\r\n  <mat-label>Toppings</mat-label>\r\n  <mat-select [formControl]=\"toppings\" multiple>\r\n    @for (topping of toppingList; track topping) {\r\n      <mat-option [value]=\"topping\">{{topping}}</mat-option>\r\n    }\r\n  </mat-select>\r\n</mat-form-field>\r\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i2.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i3.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SelectMultipleExample, decorators: [{
            type: Component,
            args: [{ selector: 'select-multiple-example', standalone: true, imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule], template: "<mat-form-field>\r\n  <mat-label>Toppings</mat-label>\r\n  <mat-select [formControl]=\"toppings\" multiple>\r\n    @for (topping of toppingList; track topping) {\r\n      <mat-option [value]=\"topping\">{{topping}}</mat-option>\r\n    }\r\n  </mat-select>\r\n</mat-form-field>\r\n" }]
        }] });

/** @title Select with no option ripple */
class SelectNoRippleExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SelectNoRippleExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: SelectNoRippleExample, isStandalone: true, selector: "select-no-ripple-example", ngImport: i0, template: "<mat-form-field>\r\n  <mat-label>Select an option</mat-label>\r\n  <mat-select disableRipple>\r\n    <mat-option value=\"1\">Option 1</mat-option>\r\n    <mat-option value=\"2\">Option 2</mat-option>\r\n    <mat-option value=\"3\">Option 3</mat-option>\r\n  </mat-select>\r\n</mat-form-field>\r\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i2.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i3.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SelectNoRippleExample, decorators: [{
            type: Component,
            args: [{ selector: 'select-no-ripple-example', standalone: true, imports: [MatFormFieldModule, MatSelectModule], template: "<mat-form-field>\r\n  <mat-label>Select an option</mat-label>\r\n  <mat-select disableRipple>\r\n    <mat-option value=\"1\">Option 1</mat-option>\r\n    <mat-option value=\"2\">Option 2</mat-option>\r\n    <mat-option value=\"3\">Option 3</mat-option>\r\n  </mat-select>\r\n</mat-form-field>\r\n" }]
        }] });

/** @title Select with option groups */
class SelectOptgroupExample {
    constructor() {
        this.pokemonControl = new FormControl('');
        this.pokemonGroups = [
            {
                name: 'Grass',
                pokemon: [
                    { value: 'bulbasaur-0', viewValue: 'Bulbasaur' },
                    { value: 'oddish-1', viewValue: 'Oddish' },
                    { value: 'bellsprout-2', viewValue: 'Bellsprout' },
                ],
            },
            {
                name: 'Water',
                pokemon: [
                    { value: 'squirtle-3', viewValue: 'Squirtle' },
                    { value: 'psyduck-4', viewValue: 'Psyduck' },
                    { value: 'horsea-5', viewValue: 'Horsea' },
                ],
            },
            {
                name: 'Fire',
                disabled: true,
                pokemon: [
                    { value: 'charmander-6', viewValue: 'Charmander' },
                    { value: 'vulpix-7', viewValue: 'Vulpix' },
                    { value: 'flareon-8', viewValue: 'Flareon' },
                ],
            },
            {
                name: 'Psychic',
                pokemon: [
                    { value: 'mew-9', viewValue: 'Mew' },
                    { value: 'mewtwo-10', viewValue: 'Mewtwo' },
                ],
            },
        ];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SelectOptgroupExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: SelectOptgroupExample, isStandalone: true, selector: "select-optgroup-example", ngImport: i0, template: "<h4>mat-select</h4>\r\n<mat-form-field>\r\n  <mat-label>Pokemon</mat-label>\r\n  <mat-select [formControl]=\"pokemonControl\">\r\n    <mat-option>-- None --</mat-option>\r\n    @for (group of pokemonGroups; track group) {\r\n      <mat-optgroup [label]=\"group.name\"\r\n                    [disabled]=\"group.disabled\">\r\n        @for (pokemon of group.pokemon; track pokemon) {\r\n          <mat-option [value]=\"pokemon.value\">{{pokemon.viewValue}}</mat-option>\r\n        }\r\n      </mat-optgroup>\r\n    }\r\n  </mat-select>\r\n</mat-form-field>\r\n\r\n<h4>native html select</h4>\r\n<mat-form-field>\r\n  <mat-label>Cars</mat-label>\r\n  <select matNativeControl>\r\n    <optgroup label=\"Swedish Cars\">\r\n      <option value=\"volvo\">volvo</option>\r\n      <option value=\"saab\">Saab</option>\r\n    </optgroup>\r\n    <optgroup label=\"German Cars\">\r\n      <option value=\"mercedes\">Mercedes</option>\r\n      <option value=\"audi\">Audi</option>\r\n    </optgroup>\r\n  </select>\r\n</mat-form-field>\r\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i2.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i3.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "component", type: i3.MatOptgroup, selector: "mat-optgroup", inputs: ["label", "disabled"], exportAs: ["matOptgroup"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i4.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i4.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SelectOptgroupExample, decorators: [{
            type: Component,
            args: [{ selector: 'select-optgroup-example', standalone: true, imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatInputModule], template: "<h4>mat-select</h4>\r\n<mat-form-field>\r\n  <mat-label>Pokemon</mat-label>\r\n  <mat-select [formControl]=\"pokemonControl\">\r\n    <mat-option>-- None --</mat-option>\r\n    @for (group of pokemonGroups; track group) {\r\n      <mat-optgroup [label]=\"group.name\"\r\n                    [disabled]=\"group.disabled\">\r\n        @for (pokemon of group.pokemon; track pokemon) {\r\n          <mat-option [value]=\"pokemon.value\">{{pokemon.viewValue}}</mat-option>\r\n        }\r\n      </mat-optgroup>\r\n    }\r\n  </mat-select>\r\n</mat-form-field>\r\n\r\n<h4>native html select</h4>\r\n<mat-form-field>\r\n  <mat-label>Cars</mat-label>\r\n  <select matNativeControl>\r\n    <optgroup label=\"Swedish Cars\">\r\n      <option value=\"volvo\">volvo</option>\r\n      <option value=\"saab\">Saab</option>\r\n    </optgroup>\r\n    <optgroup label=\"German Cars\">\r\n      <option value=\"mercedes\">Mercedes</option>\r\n      <option value=\"audi\">Audi</option>\r\n    </optgroup>\r\n  </select>\r\n</mat-form-field>\r\n" }]
        }] });

/**
 * @title Basic select
 */
class SelectOverviewExample {
    constructor() {
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' },
        ];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SelectOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: SelectOverviewExample, isStandalone: true, selector: "select-overview-example", ngImport: i0, template: "<h4>Basic mat-select</h4>\r\n<mat-form-field>\r\n  <mat-label>Favorite food</mat-label>\r\n  <mat-select>\r\n    @for (food of foods; track food) {\r\n      <mat-option [value]=\"food.value\">{{food.viewValue}}</mat-option>\r\n    }\r\n  </mat-select>\r\n</mat-form-field>\r\n\r\n<h4>Basic native select</h4>\r\n<mat-form-field>\r\n  <mat-label>Cars</mat-label>\r\n  <select matNativeControl required>\r\n    <option value=\"volvo\">Volvo</option>\r\n    <option value=\"saab\">Saab</option>\r\n    <option value=\"mercedes\">Mercedes</option>\r\n    <option value=\"audi\">Audi</option>\r\n  </select>\r\n</mat-form-field>\r\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i2.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i3.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i4.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i4.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SelectOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'select-overview-example', standalone: true, imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule], template: "<h4>Basic mat-select</h4>\r\n<mat-form-field>\r\n  <mat-label>Favorite food</mat-label>\r\n  <mat-select>\r\n    @for (food of foods; track food) {\r\n      <mat-option [value]=\"food.value\">{{food.viewValue}}</mat-option>\r\n    }\r\n  </mat-select>\r\n</mat-form-field>\r\n\r\n<h4>Basic native select</h4>\r\n<mat-form-field>\r\n  <mat-label>Cars</mat-label>\r\n  <select matNativeControl required>\r\n    <option value=\"volvo\">Volvo</option>\r\n    <option value=\"saab\">Saab</option>\r\n    <option value=\"mercedes\">Mercedes</option>\r\n    <option value=\"audi\">Audi</option>\r\n  </select>\r\n</mat-form-field>\r\n" }]
        }] });

/**
 * @title Select with custom panel styling
 */
class SelectPanelClassExample {
    constructor() {
        this.panelColor = new FormControl('red');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SelectPanelClassExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: SelectPanelClassExample, isStandalone: true, selector: "select-panel-class-example", ngImport: i0, template: "<mat-form-field>\r\n  <mat-label>Panel color</mat-label>\r\n  <mat-select [formControl]=\"panelColor\"\r\n              panelClass=\"example-panel-{{panelColor.value}}\">\r\n    <mat-option value=\"red\">Red</mat-option>\r\n    <mat-option value=\"green\">Green</mat-option>\r\n    <mat-option value=\"blue\">Blue</mat-option>\r\n  </mat-select>\r\n</mat-form-field>\r\n", styles: [".example-panel-red.mat-mdc-select-panel {\r\n  background: rgba(255, 0, 0, 0.5);\r\n}\r\n\r\n.example-panel-green.mat-mdc-select-panel {\r\n  background: rgba(0, 255, 0, 0.5);\r\n}\r\n\r\n.example-panel-blue.mat-mdc-select-panel {\r\n  background: rgba(0, 0, 255, 0.5);\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i2.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i3.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SelectPanelClassExample, decorators: [{
            type: Component,
            args: [{ selector: 'select-panel-class-example', encapsulation: ViewEncapsulation.None, standalone: true, imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule], template: "<mat-form-field>\r\n  <mat-label>Panel color</mat-label>\r\n  <mat-select [formControl]=\"panelColor\"\r\n              panelClass=\"example-panel-{{panelColor.value}}\">\r\n    <mat-option value=\"red\">Red</mat-option>\r\n    <mat-option value=\"green\">Green</mat-option>\r\n    <mat-option value=\"blue\">Blue</mat-option>\r\n  </mat-select>\r\n</mat-form-field>\r\n", styles: [".example-panel-red.mat-mdc-select-panel {\r\n  background: rgba(255, 0, 0, 0.5);\r\n}\r\n\r\n.example-panel-green.mat-mdc-select-panel {\r\n  background: rgba(0, 255, 0, 0.5);\r\n}\r\n\r\n.example-panel-blue.mat-mdc-select-panel {\r\n  background: rgba(0, 0, 255, 0.5);\r\n}\r\n"] }]
        }] });

/** @title Select with reset option */
class SelectResetExample {
    constructor() {
        this.states = [
            'Alabama',
            'Alaska',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'Florida',
            'Georgia',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Carolina',
            'North Dakota',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Pennsylvania',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming',
        ];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SelectResetExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: SelectResetExample, isStandalone: true, selector: "select-reset-example", ngImport: i0, template: "<h4>mat-select</h4>\r\n<mat-form-field>\r\n  <mat-label>State</mat-label>\r\n  <mat-select>\r\n    <mat-option>None</mat-option>\r\n    @for (state of states; track state) {\r\n      <mat-option [value]=\"state\">{{state}}</mat-option>\r\n    }\r\n  </mat-select>\r\n</mat-form-field>\r\n\r\n<h4>native html select</h4>\r\n<mat-form-field>\r\n  <mat-label>Select your car</mat-label>\r\n  <select matNativeControl id=\"mySelectId\">\r\n    <option value=\"\" disabled selected></option>\r\n    <option value=\"volvo\">Volvo</option>\r\n    <option value=\"saab\">Saab</option>\r\n    <option value=\"mercedes\">Mercedes</option>\r\n    <option value=\"audi\">Audi</option>\r\n  </select>\r\n</mat-form-field>\r\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i2.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i3.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i4.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i4.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SelectResetExample, decorators: [{
            type: Component,
            args: [{ selector: 'select-reset-example', standalone: true, imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule], template: "<h4>mat-select</h4>\r\n<mat-form-field>\r\n  <mat-label>State</mat-label>\r\n  <mat-select>\r\n    <mat-option>None</mat-option>\r\n    @for (state of states; track state) {\r\n      <mat-option [value]=\"state\">{{state}}</mat-option>\r\n    }\r\n  </mat-select>\r\n</mat-form-field>\r\n\r\n<h4>native html select</h4>\r\n<mat-form-field>\r\n  <mat-label>Select your car</mat-label>\r\n  <select matNativeControl id=\"mySelectId\">\r\n    <option value=\"\" disabled selected></option>\r\n    <option value=\"volvo\">Volvo</option>\r\n    <option value=\"saab\">Saab</option>\r\n    <option value=\"mercedes\">Mercedes</option>\r\n    <option value=\"audi\">Audi</option>\r\n  </select>\r\n</mat-form-field>\r\n" }]
        }] });

/** @title Select with 2-way value binding */
class SelectValueBindingExample {
    constructor() {
        this.selected = 'option2';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SelectValueBindingExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: SelectValueBindingExample, isStandalone: true, selector: "select-value-binding-example", ngImport: i0, template: "<mat-form-field>\r\n  <mat-label>Select an option</mat-label>\r\n  <mat-select [(value)]=\"selected\">\r\n    <mat-option>None</mat-option>\r\n    <mat-option value=\"option1\">Option 1</mat-option>\r\n    <mat-option value=\"option2\">Option 2</mat-option>\r\n    <mat-option value=\"option3\">Option 3</mat-option>\r\n  </mat-select>\r\n</mat-form-field>\r\n\r\n<p>You selected: {{selected}}</p>\r\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i2.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i3.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SelectValueBindingExample, decorators: [{
            type: Component,
            args: [{ selector: 'select-value-binding-example', standalone: true, imports: [MatFormFieldModule, MatSelectModule], template: "<mat-form-field>\r\n  <mat-label>Select an option</mat-label>\r\n  <mat-select [(value)]=\"selected\">\r\n    <mat-option>None</mat-option>\r\n    <mat-option value=\"option1\">Option 1</mat-option>\r\n    <mat-option value=\"option2\">Option 2</mat-option>\r\n    <mat-option value=\"option3\">Option 3</mat-option>\r\n  </mat-select>\r\n</mat-form-field>\r\n\r\n<p>You selected: {{selected}}</p>\r\n" }]
        }] });

/**
 * @title Select in a reactive form
 */
class SelectReactiveFormExample {
    constructor() {
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' },
        ];
        this.cars = [
            { value: 'volvo', viewValue: 'Volvo' },
            { value: 'saab', viewValue: 'Saab' },
            { value: 'mercedes', viewValue: 'Mercedes' },
        ];
        this.foodControl = new FormControl(this.foods[2].value);
        this.carControl = new FormControl(this.cars[1].value);
        this.form = new FormGroup({
            food: this.foodControl,
            car: this.carControl,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SelectReactiveFormExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: SelectReactiveFormExample, isStandalone: true, selector: "select-reactive-form-example", ngImport: i0, template: "<form [formGroup]=\"form\">\r\n  <h4>mat-select</h4>\r\n  <mat-form-field>\r\n    <mat-label>Favorite Food</mat-label>\r\n    <mat-select [formControl]=\"foodControl\" name=\"food\">\r\n      <mat-option>None</mat-option>\r\n      @for (food of foods; track food) {\r\n        <mat-option [value]=\"food.value\">{{food.viewValue}}</mat-option>\r\n      }\r\n    </mat-select>\r\n  </mat-form-field>\r\n  <p>Selected: {{foodControl.value}}</p>\r\n  <h4>Native select</h4>\r\n  <mat-form-field>\r\n    <mat-label>Favorite Car</mat-label>\r\n    <select matNativeControl [formControl]=\"carControl\" name=\"car\">\r\n      <option value=\"\">None</option>\r\n      @for (car of cars; track car) {\r\n        <option [value]=\"car.value\">{{car.viewValue}}</option>\r\n      }\r\n    </select>\r\n  </mat-form-field>\r\n  <p>Selected: {{carControl.value}}</p>\r\n</form>\r\n", dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i4.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i4.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i4.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: i4.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i2.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i3.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SelectReactiveFormExample, decorators: [{
            type: Component,
            args: [{ selector: 'select-reactive-form-example', standalone: true, imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatSelectModule, MatInputModule], template: "<form [formGroup]=\"form\">\r\n  <h4>mat-select</h4>\r\n  <mat-form-field>\r\n    <mat-label>Favorite Food</mat-label>\r\n    <mat-select [formControl]=\"foodControl\" name=\"food\">\r\n      <mat-option>None</mat-option>\r\n      @for (food of foods; track food) {\r\n        <mat-option [value]=\"food.value\">{{food.viewValue}}</mat-option>\r\n      }\r\n    </mat-select>\r\n  </mat-form-field>\r\n  <p>Selected: {{foodControl.value}}</p>\r\n  <h4>Native select</h4>\r\n  <mat-form-field>\r\n    <mat-label>Favorite Car</mat-label>\r\n    <select matNativeControl [formControl]=\"carControl\" name=\"car\">\r\n      <option value=\"\">None</option>\r\n      @for (car of cars; track car) {\r\n        <option [value]=\"car.value\">{{car.viewValue}}</option>\r\n      }\r\n    </select>\r\n  </mat-form-field>\r\n  <p>Selected: {{carControl.value}}</p>\r\n</form>\r\n" }]
        }] });

/**
 * @title Basic select with initial value and no form
 */
class SelectInitialValueExample {
    constructor() {
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' },
        ];
        this.cars = [
            { value: 'ford', viewValue: 'Ford' },
            { value: 'chevrolet', viewValue: 'Chevrolet' },
            { value: 'dodge', viewValue: 'Dodge' },
        ];
        this.selectedFood = this.foods[2].value;
        this.selectedCar = this.cars[0].value;
    }
    selectCar(event) {
        this.selectedCar = event.target.value;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SelectInitialValueExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: SelectInitialValueExample, isStandalone: true, selector: "select-initial-value-example", ngImport: i0, template: "<h4>Basic mat-select with initial value</h4>\r\n<mat-form-field>\r\n  <mat-label>Favorite Food</mat-label>\r\n  <mat-select [(value)]=\"selectedFood\">\r\n    <mat-option></mat-option>\r\n    @for (option of foods; track option) {\r\n      <mat-option [value]=\"option.value\">{{ option.viewValue }}</mat-option>\r\n    }\r\n  </mat-select>\r\n</mat-form-field>\r\n<p>You selected: {{selectedFood}}</p>\r\n\r\n<h4>Basic native select with initial value</h4>\r\n<mat-form-field>\r\n  <mat-label>Favorite Car</mat-label>\r\n  <select matNativeControl (change)=\"selectCar($event)\">\r\n    <option value=\"\"></option>\r\n    @for (option of cars; track option) {\r\n      <option [value]=\"option.value\"\r\n            [selected]=\"selectedCar === option.value\">{{ option.viewValue }}</option>\r\n    }\r\n  </select>\r\n</mat-form-field>\r\n<p>You selected: {{selectedCar}}</p>\r\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i2.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i3.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i4.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i4.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SelectInitialValueExample, decorators: [{
            type: Component,
            args: [{ selector: 'select-initial-value-example', standalone: true, imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule], template: "<h4>Basic mat-select with initial value</h4>\r\n<mat-form-field>\r\n  <mat-label>Favorite Food</mat-label>\r\n  <mat-select [(value)]=\"selectedFood\">\r\n    <mat-option></mat-option>\r\n    @for (option of foods; track option) {\r\n      <mat-option [value]=\"option.value\">{{ option.viewValue }}</mat-option>\r\n    }\r\n  </mat-select>\r\n</mat-form-field>\r\n<p>You selected: {{selectedFood}}</p>\r\n\r\n<h4>Basic native select with initial value</h4>\r\n<mat-form-field>\r\n  <mat-label>Favorite Car</mat-label>\r\n  <select matNativeControl (change)=\"selectCar($event)\">\r\n    <option value=\"\"></option>\r\n    @for (option of cars; track option) {\r\n      <option [value]=\"option.value\"\r\n            [selected]=\"selectedCar === option.value\">{{ option.viewValue }}</option>\r\n    }\r\n  </select>\r\n</mat-form-field>\r\n<p>You selected: {{selectedCar}}</p>\r\n" }]
        }] });

/**
 * @title Testing with MatSelectHarness
 */
class SelectHarnessExample {
    constructor() {
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' },
        ];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SelectHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: SelectHarnessExample, isStandalone: true, selector: "select-harness-example", ngImport: i0, template: "<mat-form-field>\r\n  <mat-label>Favorite food</mat-label>\r\n  <mat-select>\r\n    @for (food of foods; track food) {\r\n      <mat-option [value]=\"food.value\">{{food.viewValue}}</mat-option>\r\n    }\r\n  </mat-select>\r\n</mat-form-field>\r\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i2.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i3.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SelectHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'select-harness-example', standalone: true, imports: [MatFormFieldModule, MatSelectModule], template: "<mat-form-field>\r\n  <mat-label>Favorite food</mat-label>\r\n  <mat-select>\r\n    @for (food of foods; track food) {\r\n      <mat-option [value]=\"food.value\">{{food.viewValue}}</mat-option>\r\n    }\r\n  </mat-select>\r\n</mat-form-field>\r\n" }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { SelectCustomTriggerExample, SelectDisabledExample, SelectErrorStateMatcherExample, SelectFormExample, SelectHarnessExample, SelectHintErrorExample, SelectInitialValueExample, SelectMultipleExample, SelectNoRippleExample, SelectOptgroupExample, SelectOverviewExample, SelectPanelClassExample, SelectReactiveFormExample, SelectResetExample, SelectValueBindingExample };
//# sourceMappingURL=select.mjs.map
