import * as i0 from '@angular/core';
import { Component, forwardRef, Optional, Inject, Self, ViewChild, Input } from '@angular/core';
import * as i3 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i2 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i1 from '@angular/material/form-field';
import { MatFormFieldModule, MAT_FORM_FIELD, MatFormFieldControl } from '@angular/material/form-field';
import * as i4 from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import * as i1$1 from '@angular/forms';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import * as i3$1 from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import * as i4$1 from '@angular/material/core';
import * as i3$2 from '@angular/material/radio';
import { MatRadioModule } from '@angular/material/radio';
import * as i2$1 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i3$3 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';

/** @title Form field appearance variants */
class FormFieldAppearanceExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FormFieldAppearanceExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: FormFieldAppearanceExample, isStandalone: true, selector: "form-field-appearance-example", ngImport: i0, template: "<p>\r\n  <mat-form-field appearance=\"fill\">\r\n    <mat-label>Fill form field</mat-label>\r\n    <input matInput placeholder=\"Placeholder\">\r\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\r\n    <mat-hint>Hint</mat-hint>\r\n  </mat-form-field>\r\n</p>\r\n<p>\r\n  <mat-form-field appearance=\"outline\">\r\n    <mat-label>Outline form field</mat-label>\r\n    <input matInput placeholder=\"Placeholder\">\r\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\r\n    <mat-hint>Hint</mat-hint>\r\n  </mat-form-field>\r\n</p>\r\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i1.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FormFieldAppearanceExample, decorators: [{
            type: Component,
            args: [{ selector: 'form-field-appearance-example', standalone: true, imports: [MatFormFieldModule, MatInputModule, MatIconModule], template: "<p>\r\n  <mat-form-field appearance=\"fill\">\r\n    <mat-label>Fill form field</mat-label>\r\n    <input matInput placeholder=\"Placeholder\">\r\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\r\n    <mat-hint>Hint</mat-hint>\r\n  </mat-form-field>\r\n</p>\r\n<p>\r\n  <mat-form-field appearance=\"outline\">\r\n    <mat-label>Outline form field</mat-label>\r\n    <input matInput placeholder=\"Placeholder\">\r\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\r\n    <mat-hint>Hint</mat-hint>\r\n  </mat-form-field>\r\n</p>\r\n" }]
        }] });

/** @title Form field with custom telephone number input control. */
class FormFieldCustomControlExample {
    constructor() {
        this.form = new FormGroup({
            tel: new FormControl(new MyTel('', '', '')),
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FormFieldCustomControlExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: FormFieldCustomControlExample, isStandalone: true, selector: "form-field-custom-control-example", ngImport: i0, template: "<div [formGroup]=\"form\">\r\n  <mat-form-field>\r\n    <mat-label>Phone number</mat-label>\r\n    <example-tel-input formControlName=\"tel\" required></example-tel-input>\r\n    <mat-icon matSuffix>phone</mat-icon>\r\n    <mat-hint>Include area code</mat-hint>\r\n  </mat-form-field>\r\n</div>\r\n", dependencies: [{ kind: "ngmodule", type: i0.forwardRef(() => FormsModule) }, { kind: "directive", type: i0.forwardRef(() => i1$1.NgControlStatus), selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i0.forwardRef(() => i1$1.NgControlStatusGroup), selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i0.forwardRef(() => i1$1.RequiredValidator), selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "ngmodule", type: i0.forwardRef(() => ReactiveFormsModule) }, { kind: "directive", type: i0.forwardRef(() => i1$1.FormGroupDirective), selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i0.forwardRef(() => i1$1.FormControlName), selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: i0.forwardRef(() => MatFormFieldModule) }, { kind: "component", type: i0.forwardRef(() => i1.MatFormField), selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i0.forwardRef(() => i1.MatLabel), selector: "mat-label" }, { kind: "directive", type: i0.forwardRef(() => i1.MatHint), selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i0.forwardRef(() => i1.MatSuffix), selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "component", type: i0.forwardRef(() => MyTelInput), selector: "example-tel-input", inputs: ["aria-describedby", "placeholder", "required", "disabled", "value"] }, { kind: "ngmodule", type: i0.forwardRef(() => MatIconModule) }, { kind: "component", type: i0.forwardRef(() => i3.MatIcon), selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FormFieldCustomControlExample, decorators: [{
            type: Component,
            args: [{ selector: 'form-field-custom-control-example', standalone: true, imports: [
                        FormsModule,
                        ReactiveFormsModule,
                        MatFormFieldModule,
                        forwardRef(() => MyTelInput),
                        MatIconModule,
                    ], template: "<div [formGroup]=\"form\">\r\n  <mat-form-field>\r\n    <mat-label>Phone number</mat-label>\r\n    <example-tel-input formControlName=\"tel\" required></example-tel-input>\r\n    <mat-icon matSuffix>phone</mat-icon>\r\n    <mat-hint>Include area code</mat-hint>\r\n  </mat-form-field>\r\n</div>\r\n" }]
        }] });
/** Data structure for holding telephone number. */
class MyTel {
    constructor(area, exchange, subscriber) {
        this.area = area;
        this.exchange = exchange;
        this.subscriber = subscriber;
    }
}
/** Custom `MatFormFieldControl` for telephone number input. */
class MyTelInput {
    static { this.nextId = 0; }
    get empty() {
        const { value: { area, exchange, subscriber }, } = this.parts;
        return !area && !exchange && !subscriber;
    }
    get shouldLabelFloat() {
        return this.focused || !this.empty;
    }
    get placeholder() {
        return this._placeholder;
    }
    set placeholder(value) {
        this._placeholder = value;
        this.stateChanges.next();
    }
    get required() {
        return this._required;
    }
    set required(value) {
        this._required = coerceBooleanProperty(value);
        this.stateChanges.next();
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
        this._disabled ? this.parts.disable() : this.parts.enable();
        this.stateChanges.next();
    }
    get value() {
        if (this.parts.valid) {
            const { value: { area, exchange, subscriber }, } = this.parts;
            return new MyTel(area, exchange, subscriber);
        }
        return null;
    }
    set value(tel) {
        const { area, exchange, subscriber } = tel || new MyTel('', '', '');
        this.parts.setValue({ area, exchange, subscriber });
        this.stateChanges.next();
    }
    get errorState() {
        return this.parts.invalid && this.touched;
    }
    constructor(formBuilder, _focusMonitor, _elementRef, _formField, ngControl) {
        this._focusMonitor = _focusMonitor;
        this._elementRef = _elementRef;
        this._formField = _formField;
        this.ngControl = ngControl;
        this.stateChanges = new Subject();
        this.focused = false;
        this.touched = false;
        this.controlType = 'example-tel-input';
        this.id = `example-tel-input-${MyTelInput.nextId++}`;
        this.onChange = (_) => { };
        this.onTouched = () => { };
        this._required = false;
        this._disabled = false;
        if (this.ngControl != null) {
            this.ngControl.valueAccessor = this;
        }
        this.parts = formBuilder.group({
            area: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
            exchange: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
            subscriber: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
        });
    }
    ngOnDestroy() {
        this.stateChanges.complete();
        this._focusMonitor.stopMonitoring(this._elementRef);
    }
    onFocusIn(event) {
        if (!this.focused) {
            this.focused = true;
            this.stateChanges.next();
        }
    }
    onFocusOut(event) {
        if (!this._elementRef.nativeElement.contains(event.relatedTarget)) {
            this.touched = true;
            this.focused = false;
            this.onTouched();
            this.stateChanges.next();
        }
    }
    autoFocusNext(control, nextElement) {
        if (!control.errors && nextElement) {
            this._focusMonitor.focusVia(nextElement, 'program');
        }
    }
    autoFocusPrev(control, prevElement) {
        if (control.value.length < 1) {
            this._focusMonitor.focusVia(prevElement, 'program');
        }
    }
    setDescribedByIds(ids) {
        const controlElement = this._elementRef.nativeElement.querySelector('.example-tel-input-container');
        controlElement.setAttribute('aria-describedby', ids.join(' '));
    }
    onContainerClick() {
        if (this.parts.controls.subscriber.valid) {
            this._focusMonitor.focusVia(this.subscriberInput, 'program');
        }
        else if (this.parts.controls.exchange.valid) {
            this._focusMonitor.focusVia(this.subscriberInput, 'program');
        }
        else if (this.parts.controls.area.valid) {
            this._focusMonitor.focusVia(this.exchangeInput, 'program');
        }
        else {
            this._focusMonitor.focusVia(this.areaInput, 'program');
        }
    }
    writeValue(tel) {
        this.value = tel;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    _handleInput(control, nextElement) {
        this.autoFocusNext(control, nextElement);
        this.onChange(this.value);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: MyTelInput, deps: [{ token: i1$1.FormBuilder }, { token: i4.FocusMonitor }, { token: i0.ElementRef }, { token: MAT_FORM_FIELD, optional: true }, { token: i1$1.NgControl, optional: true, self: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: MyTelInput, isStandalone: true, selector: "example-tel-input", inputs: { userAriaDescribedBy: ["aria-describedby", "userAriaDescribedBy"], placeholder: "placeholder", required: "required", disabled: "disabled", value: "value" }, host: { properties: { "class.example-floating": "shouldLabelFloat", "id": "id" } }, providers: [{ provide: MatFormFieldControl, useExisting: MyTelInput }], viewQueries: [{ propertyName: "areaInput", first: true, predicate: ["area"], descendants: true }, { propertyName: "exchangeInput", first: true, predicate: ["exchange"], descendants: true }, { propertyName: "subscriberInput", first: true, predicate: ["subscriber"], descendants: true }], ngImport: i0, template: "<div role=\"group\" class=\"example-tel-input-container\"\r\n     [formGroup]=\"parts\"\r\n     [attr.aria-labelledby]=\"_formField.getLabelId()\"\r\n     (focusin)=\"onFocusIn($event)\"\r\n     (focusout)=\"onFocusOut($event)\">\r\n  <input class=\"example-tel-input-element\"\r\n         formControlName=\"area\" size=\"3\"\r\n         maxLength=\"3\"\r\n         aria-label=\"Area code\"\r\n         (input)=\"_handleInput(parts.controls.area, exchange)\"\r\n         #area>\r\n  <span class=\"example-tel-input-spacer\">&ndash;</span>\r\n  <input class=\"example-tel-input-element\"\r\n         formControlName=\"exchange\"\r\n         maxLength=\"3\"\r\n         size=\"3\"\r\n         aria-label=\"Exchange code\"\r\n         (input)=\"_handleInput(parts.controls.exchange, subscriber)\"\r\n         (keyup.backspace)=\"autoFocusPrev(parts.controls.exchange, area)\"\r\n         #exchange>\r\n  <span class=\"example-tel-input-spacer\">&ndash;</span>\r\n  <input class=\"example-tel-input-element\"\r\n         formControlName=\"subscriber\"\r\n         maxLength=\"4\"\r\n         size=\"4\"\r\n         aria-label=\"Subscriber number\"\r\n         (input)=\"_handleInput(parts.controls.subscriber)\"\r\n         (keyup.backspace)=\"autoFocusPrev(parts.controls.subscriber, exchange)\"\r\n         #subscriber>\r\n</div>\r\n", styles: [".example-tel-input-container {\r\n  display: flex;\r\n}\r\n\r\n.example-tel-input-element {\r\n  border: none;\r\n  background: none;\r\n  padding: 0;\r\n  outline: none;\r\n  font: inherit;\r\n  text-align: center;\r\n  color: currentcolor;\r\n}\r\n\r\n.example-tel-input-spacer {\r\n  opacity: 0;\r\n  transition: opacity 200ms;\r\n}\r\n\r\n:host.example-floating .example-tel-input-spacer {\r\n  opacity: 1;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1$1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: MyTelInput, decorators: [{
            type: Component,
            args: [{ selector: 'example-tel-input', providers: [{ provide: MatFormFieldControl, useExisting: MyTelInput }], host: {
                        '[class.example-floating]': 'shouldLabelFloat',
                        '[id]': 'id',
                    }, standalone: true, imports: [FormsModule, ReactiveFormsModule], template: "<div role=\"group\" class=\"example-tel-input-container\"\r\n     [formGroup]=\"parts\"\r\n     [attr.aria-labelledby]=\"_formField.getLabelId()\"\r\n     (focusin)=\"onFocusIn($event)\"\r\n     (focusout)=\"onFocusOut($event)\">\r\n  <input class=\"example-tel-input-element\"\r\n         formControlName=\"area\" size=\"3\"\r\n         maxLength=\"3\"\r\n         aria-label=\"Area code\"\r\n         (input)=\"_handleInput(parts.controls.area, exchange)\"\r\n         #area>\r\n  <span class=\"example-tel-input-spacer\">&ndash;</span>\r\n  <input class=\"example-tel-input-element\"\r\n         formControlName=\"exchange\"\r\n         maxLength=\"3\"\r\n         size=\"3\"\r\n         aria-label=\"Exchange code\"\r\n         (input)=\"_handleInput(parts.controls.exchange, subscriber)\"\r\n         (keyup.backspace)=\"autoFocusPrev(parts.controls.exchange, area)\"\r\n         #exchange>\r\n  <span class=\"example-tel-input-spacer\">&ndash;</span>\r\n  <input class=\"example-tel-input-element\"\r\n         formControlName=\"subscriber\"\r\n         maxLength=\"4\"\r\n         size=\"4\"\r\n         aria-label=\"Subscriber number\"\r\n         (input)=\"_handleInput(parts.controls.subscriber)\"\r\n         (keyup.backspace)=\"autoFocusPrev(parts.controls.subscriber, exchange)\"\r\n         #subscriber>\r\n</div>\r\n", styles: [".example-tel-input-container {\r\n  display: flex;\r\n}\r\n\r\n.example-tel-input-element {\r\n  border: none;\r\n  background: none;\r\n  padding: 0;\r\n  outline: none;\r\n  font: inherit;\r\n  text-align: center;\r\n  color: currentcolor;\r\n}\r\n\r\n.example-tel-input-spacer {\r\n  opacity: 0;\r\n  transition: opacity 200ms;\r\n}\r\n\r\n:host.example-floating .example-tel-input-spacer {\r\n  opacity: 1;\r\n}\r\n"] }]
        }], ctorParameters: () => [{ type: i1$1.FormBuilder }, { type: i4.FocusMonitor }, { type: i0.ElementRef }, { type: i1.MatFormField, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [MAT_FORM_FIELD]
                }] }, { type: i1$1.NgControl, decorators: [{
                    type: Optional
                }, {
                    type: Self
                }] }], propDecorators: { areaInput: [{
                type: ViewChild,
                args: ['area']
            }], exchangeInput: [{
                type: ViewChild,
                args: ['exchange']
            }], subscriberInput: [{
                type: ViewChild,
                args: ['subscriber']
            }], userAriaDescribedBy: [{
                type: Input,
                args: ['aria-describedby']
            }], placeholder: [{
                type: Input
            }], required: [{
                type: Input
            }], disabled: [{
                type: Input
            }], value: [{
                type: Input
            }] } });

/** @title Form field with error messages */
class FormFieldErrorExample {
    constructor() {
        this.email = new FormControl('', [Validators.required, Validators.email]);
    }
    getErrorMessage() {
        if (this.email.hasError('required')) {
            return 'You must enter a value';
        }
        return this.email.hasError('email') ? 'Not a valid email' : '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FormFieldErrorExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: FormFieldErrorExample, isStandalone: true, selector: "form-field-error-example", ngImport: i0, template: "<div class=\"example-container\">\r\n  <mat-form-field>\r\n    <mat-label>Enter your email</mat-label>\r\n    <input matInput placeholder=\"pat@example.com\" [formControl]=\"email\" required>\r\n    @if (email.invalid) {\r\n      <mat-error>{{getErrorMessage()}}</mat-error>\r\n    }\r\n  </mat-form-field>\r\n</div>\r\n", styles: [".example-container mat-form-field + mat-form-field {\r\n  margin-left: 8px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1$1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FormFieldErrorExample, decorators: [{
            type: Component,
            args: [{ selector: 'form-field-error-example', standalone: true, imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule], template: "<div class=\"example-container\">\r\n  <mat-form-field>\r\n    <mat-label>Enter your email</mat-label>\r\n    <input matInput placeholder=\"pat@example.com\" [formControl]=\"email\" required>\r\n    @if (email.invalid) {\r\n      <mat-error>{{getErrorMessage()}}</mat-error>\r\n    }\r\n  </mat-form-field>\r\n</div>\r\n", styles: [".example-container mat-form-field + mat-form-field {\r\n  margin-left: 8px;\r\n}\r\n"] }]
        }] });

/** @title Form field with hints */
class FormFieldHintExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FormFieldHintExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: FormFieldHintExample, isStandalone: true, selector: "form-field-hint-example", ngImport: i0, template: "<div class=\"example-container\">\r\n  <mat-form-field hintLabel=\"Max 10 characters\">\r\n    <mat-label>Enter some input</mat-label>\r\n    <input matInput #input maxlength=\"10\" placeholder=\"Ex. Nougat\">\r\n    <mat-hint align=\"end\">{{input.value.length}}/10</mat-hint>\r\n  </mat-form-field>\r\n\r\n  <mat-form-field>\r\n    <mat-label>Select me</mat-label>\r\n    <mat-select>\r\n      <mat-option value=\"option\">Option</mat-option>\r\n    </mat-select>\r\n    <mat-hint align=\"end\">Here's the dropdown arrow ^</mat-hint>\r\n  </mat-form-field>\r\n</div>\r\n", styles: [".example-container mat-form-field + mat-form-field {\r\n  margin-left: 8px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i3$1.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i4$1.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FormFieldHintExample, decorators: [{
            type: Component,
            args: [{ selector: 'form-field-hint-example', standalone: true, imports: [MatFormFieldModule, MatInputModule, MatSelectModule], template: "<div class=\"example-container\">\r\n  <mat-form-field hintLabel=\"Max 10 characters\">\r\n    <mat-label>Enter some input</mat-label>\r\n    <input matInput #input maxlength=\"10\" placeholder=\"Ex. Nougat\">\r\n    <mat-hint align=\"end\">{{input.value.length}}/10</mat-hint>\r\n  </mat-form-field>\r\n\r\n  <mat-form-field>\r\n    <mat-label>Select me</mat-label>\r\n    <mat-select>\r\n      <mat-option value=\"option\">Option</mat-option>\r\n    </mat-select>\r\n    <mat-hint align=\"end\">Here's the dropdown arrow ^</mat-hint>\r\n  </mat-form-field>\r\n</div>\r\n", styles: [".example-container mat-form-field + mat-form-field {\r\n  margin-left: 8px;\r\n}\r\n"] }]
        }] });

/** @title Form field with label */
class FormFieldLabelExample {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.hideRequiredControl = new FormControl(false);
        this.floatLabelControl = new FormControl('auto');
        this.options = this._formBuilder.group({
            hideRequired: this.hideRequiredControl,
            floatLabel: this.floatLabelControl,
        });
    }
    getFloatLabelValue() {
        return this.floatLabelControl.value || 'auto';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FormFieldLabelExample, deps: [{ token: i1$1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: FormFieldLabelExample, isStandalone: true, selector: "form-field-label-example", ngImport: i0, template: "<div class=\"example-container\">\r\n  <form [formGroup]=\"options\">\r\n    <mat-checkbox [formControl]=\"hideRequiredControl\">Hide required marker</mat-checkbox>\r\n    <div>\r\n      <label>Float label: </label>\r\n      <mat-radio-group [formControl]=\"floatLabelControl\">\r\n        <mat-radio-button value=\"auto\">Auto</mat-radio-button>\r\n        <mat-radio-button value=\"always\">Always</mat-radio-button>\r\n      </mat-radio-group>\r\n    </div>\r\n\r\n    <div class=\"example-form-fields\">\r\n      <mat-form-field\r\n          [hideRequiredMarker]=\"hideRequiredControl.value\"\r\n          [floatLabel]=\"getFloatLabelValue()\">\r\n        <input matInput placeholder=\"Simple placeholder\" required>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field [floatLabel]=\"getFloatLabelValue()\">\r\n        <mat-label>Both a label and a placeholder</mat-label>\r\n        <input matInput placeholder=\"Simple placeholder\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field\r\n          [hideRequiredMarker]=\"hideRequiredControl.value\"\r\n          [floatLabel]=\"getFloatLabelValue()\">\r\n        <mat-select required>\r\n          <mat-option>-- None --</mat-option>\r\n          <mat-option value=\"option\">Option</mat-option>\r\n        </mat-select>\r\n        <mat-label><mat-icon>favorite</mat-icon> <strong> Fancy</strong> <em> label</em></mat-label>\r\n      </mat-form-field>\r\n    </div>\r\n  </form>\r\n</div>\r\n", styles: [".example-container mat-form-field + mat-form-field {\r\n  margin-left: 8px;\r\n}\r\n\r\n.example-container mat-form-field {\r\n  width: 220px;\r\n}\r\n\r\n.example-container form {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.example-container form > * {\r\n  margin: 12px 0;\r\n}\r\n\r\n.example-container .mat-radio-button {\r\n  margin: 0 12px;\r\n}\r\n\r\n.example-form-fields {\r\n  display: flex;\r\n  align-items: flex-start;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1$1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: i1$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i2$1.MatCheckbox, selector: "mat-checkbox", inputs: ["aria-label", "aria-labelledby", "aria-describedby", "id", "required", "labelPosition", "name", "value", "disableRipple", "tabIndex", "color", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { kind: "ngmodule", type: MatRadioModule }, { kind: "directive", type: i3$2.MatRadioGroup, selector: "mat-radio-group", inputs: ["color", "name", "labelPosition", "value", "selected", "disabled", "required"], outputs: ["change"], exportAs: ["matRadioGroup"] }, { kind: "component", type: i3$2.MatRadioButton, selector: "mat-radio-button", inputs: ["id", "name", "aria-label", "aria-labelledby", "aria-describedby", "disableRipple", "tabIndex", "checked", "value", "labelPosition", "disabled", "required", "color"], outputs: ["change"], exportAs: ["matRadioButton"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i3$1.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i4$1.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FormFieldLabelExample, decorators: [{
            type: Component,
            args: [{ selector: 'form-field-label-example', standalone: true, imports: [
                        FormsModule,
                        ReactiveFormsModule,
                        MatCheckboxModule,
                        MatRadioModule,
                        MatFormFieldModule,
                        MatInputModule,
                        MatSelectModule,
                        MatIconModule,
                    ], template: "<div class=\"example-container\">\r\n  <form [formGroup]=\"options\">\r\n    <mat-checkbox [formControl]=\"hideRequiredControl\">Hide required marker</mat-checkbox>\r\n    <div>\r\n      <label>Float label: </label>\r\n      <mat-radio-group [formControl]=\"floatLabelControl\">\r\n        <mat-radio-button value=\"auto\">Auto</mat-radio-button>\r\n        <mat-radio-button value=\"always\">Always</mat-radio-button>\r\n      </mat-radio-group>\r\n    </div>\r\n\r\n    <div class=\"example-form-fields\">\r\n      <mat-form-field\r\n          [hideRequiredMarker]=\"hideRequiredControl.value\"\r\n          [floatLabel]=\"getFloatLabelValue()\">\r\n        <input matInput placeholder=\"Simple placeholder\" required>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field [floatLabel]=\"getFloatLabelValue()\">\r\n        <mat-label>Both a label and a placeholder</mat-label>\r\n        <input matInput placeholder=\"Simple placeholder\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field\r\n          [hideRequiredMarker]=\"hideRequiredControl.value\"\r\n          [floatLabel]=\"getFloatLabelValue()\">\r\n        <mat-select required>\r\n          <mat-option>-- None --</mat-option>\r\n          <mat-option value=\"option\">Option</mat-option>\r\n        </mat-select>\r\n        <mat-label><mat-icon>favorite</mat-icon> <strong> Fancy</strong> <em> label</em></mat-label>\r\n      </mat-form-field>\r\n    </div>\r\n  </form>\r\n</div>\r\n", styles: [".example-container mat-form-field + mat-form-field {\r\n  margin-left: 8px;\r\n}\r\n\r\n.example-container mat-form-field {\r\n  width: 220px;\r\n}\r\n\r\n.example-container form {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.example-container form > * {\r\n  margin: 12px 0;\r\n}\r\n\r\n.example-container .mat-radio-button {\r\n  margin: 0 12px;\r\n}\r\n\r\n.example-form-fields {\r\n  display: flex;\r\n  align-items: flex-start;\r\n}\r\n"] }]
        }], ctorParameters: () => [{ type: i1$1.FormBuilder }] });

/** @title Simple form field */
class FormFieldOverviewExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FormFieldOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: FormFieldOverviewExample, isStandalone: true, selector: "form-field-overview-example", ngImport: i0, template: "<mat-form-field>\r\n  <mat-label>Input</mat-label>\r\n  <input matInput>\r\n</mat-form-field>\r\n<mat-form-field>\r\n  <mat-label>Select</mat-label>\r\n  <mat-select>\r\n    <mat-option value=\"one\">First option</mat-option>\r\n    <mat-option value=\"two\">Second option</mat-option>\r\n  </mat-select>\r\n</mat-form-field>\r\n<mat-form-field>\r\n  <mat-label>Textarea</mat-label>\r\n  <textarea matInput></textarea>\r\n</mat-form-field>\r\n", styles: [":host {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i3$1.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i4$1.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FormFieldOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'form-field-overview-example', standalone: true, imports: [MatFormFieldModule, MatInputModule, MatSelectModule], template: "<mat-form-field>\r\n  <mat-label>Input</mat-label>\r\n  <input matInput>\r\n</mat-form-field>\r\n<mat-form-field>\r\n  <mat-label>Select</mat-label>\r\n  <mat-select>\r\n    <mat-option value=\"one\">First option</mat-option>\r\n    <mat-option value=\"two\">Second option</mat-option>\r\n  </mat-select>\r\n</mat-form-field>\r\n<mat-form-field>\r\n  <mat-label>Textarea</mat-label>\r\n  <textarea matInput></textarea>\r\n</mat-form-field>\r\n", styles: [":host {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n}\r\n"] }]
        }] });

/** @title Form field with prefix & suffix */
class FormFieldPrefixSuffixExample {
    constructor() {
        this.hide = true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FormFieldPrefixSuffixExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: FormFieldPrefixSuffixExample, isStandalone: true, selector: "form-field-prefix-suffix-example", ngImport: i0, template: "<div class=\"example-container\">\r\n  <mat-form-field>\r\n    <mat-label>Enter your password</mat-label>\r\n    <input matInput [type]=\"hide ? 'password' : 'text'\">\r\n    <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\r\n      <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n    </button>\r\n  </mat-form-field>\r\n\r\n  <mat-form-field floatLabel=\"always\">\r\n    <mat-label>Amount</mat-label>\r\n    <input matInput type=\"number\" class=\"example-right-align\" placeholder=\"0\">\r\n    <span matTextPrefix>$&nbsp;</span>\r\n    <span matTextSuffix>.00</span>\r\n  </mat-form-field>\r\n</div>\r\n", styles: [".example-container mat-form-field + mat-form-field {\r\n  margin-left: 8px;\r\n}\r\n\r\n.example-right-align {\r\n  text-align: right;\r\n}\r\n\r\ninput.example-right-align::-webkit-outer-spin-button,\r\ninput.example-right-align::-webkit-inner-spin-button {\r\n  display: none;\r\n}\r\n\r\ninput.example-right-align {\r\n  -moz-appearance: textfield;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatPrefix, selector: "[matPrefix], [matIconPrefix], [matTextPrefix]", inputs: ["matTextPrefix"] }, { kind: "directive", type: i1.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i3$3.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FormFieldPrefixSuffixExample, decorators: [{
            type: Component,
            args: [{ selector: 'form-field-prefix-suffix-example', standalone: true, imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule], template: "<div class=\"example-container\">\r\n  <mat-form-field>\r\n    <mat-label>Enter your password</mat-label>\r\n    <input matInput [type]=\"hide ? 'password' : 'text'\">\r\n    <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\r\n      <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n    </button>\r\n  </mat-form-field>\r\n\r\n  <mat-form-field floatLabel=\"always\">\r\n    <mat-label>Amount</mat-label>\r\n    <input matInput type=\"number\" class=\"example-right-align\" placeholder=\"0\">\r\n    <span matTextPrefix>$&nbsp;</span>\r\n    <span matTextSuffix>.00</span>\r\n  </mat-form-field>\r\n</div>\r\n", styles: [".example-container mat-form-field + mat-form-field {\r\n  margin-left: 8px;\r\n}\r\n\r\n.example-right-align {\r\n  text-align: right;\r\n}\r\n\r\ninput.example-right-align::-webkit-outer-spin-button,\r\ninput.example-right-align::-webkit-inner-spin-button {\r\n  display: none;\r\n}\r\n\r\ninput.example-right-align {\r\n  -moz-appearance: textfield;\r\n}\r\n"] }]
        }] });

/** @title Form field theming */
class FormFieldThemingExample {
    constructor() {
        this.colorControl = new FormControl('primary');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FormFieldThemingExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: FormFieldThemingExample, isStandalone: true, selector: "form-field-theming-example", ngImport: i0, template: "<mat-form-field [color]=\"colorControl.value!\">\r\n  <mat-label>Color</mat-label>\r\n  <mat-select [formControl]=\"colorControl\">\r\n    <mat-option value=\"primary\">Primary</mat-option>\r\n    <mat-option value=\"accent\">Accent</mat-option>\r\n    <mat-option value=\"warn\">Warn</mat-option>\r\n  </mat-select>\r\n</mat-form-field>\r\n", styles: [".example-container mat-form-field + mat-form-field {\r\n  margin-left: 8px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i3$1.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i4$1.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1$1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FormFieldThemingExample, decorators: [{
            type: Component,
            args: [{ selector: 'form-field-theming-example', standalone: true, imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule], template: "<mat-form-field [color]=\"colorControl.value!\">\r\n  <mat-label>Color</mat-label>\r\n  <mat-select [formControl]=\"colorControl\">\r\n    <mat-option value=\"primary\">Primary</mat-option>\r\n    <mat-option value=\"accent\">Accent</mat-option>\r\n    <mat-option value=\"warn\">Warn</mat-option>\r\n  </mat-select>\r\n</mat-form-field>\r\n", styles: [".example-container mat-form-field + mat-form-field {\r\n  margin-left: 8px;\r\n}\r\n"] }]
        }] });

/**
 * @title Testing with MatFormFieldHarness
 */
class FormFieldHarnessExample {
    constructor() {
        this.requiredControl = new FormControl('Initial value', [Validators.required]);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FormFieldHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: FormFieldHarnessExample, isStandalone: true, selector: "form-field-harness-example", ngImport: i0, template: "<mat-form-field id=\"with-errors\">\r\n  <span class=\"custom-control\">Custom control harness</span>\r\n  <input matInput [formControl]=\"requiredControl\">\r\n\r\n  <mat-error>Error</mat-error>\r\n  <mat-hint align=\"start\">Hint</mat-hint>\r\n</mat-form-field>\r\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i1.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1$1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FormFieldHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'form-field-harness-example', standalone: true, imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule], template: "<mat-form-field id=\"with-errors\">\r\n  <span class=\"custom-control\">Custom control harness</span>\r\n  <input matInput [formControl]=\"requiredControl\">\r\n\r\n  <mat-error>Error</mat-error>\r\n  <mat-hint align=\"start\">Hint</mat-hint>\r\n</mat-form-field>\r\n" }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { FormFieldAppearanceExample, FormFieldCustomControlExample, FormFieldErrorExample, FormFieldHarnessExample, FormFieldHintExample, FormFieldLabelExample, FormFieldOverviewExample, FormFieldPrefixSuffixExample, FormFieldThemingExample, MyTelInput };
//# sourceMappingURL=form-field.mjs.map
