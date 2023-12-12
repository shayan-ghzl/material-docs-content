import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, ElementRef, Inject, Input, Optional, Self, ViewChild, forwardRef, } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgControl, Validators, FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { MAT_FORM_FIELD, MatFormField, MatFormFieldControl, MatFormFieldModule, } from '@angular/material/form-field';
import { Subject } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/icon";
import * as i4 from "@angular/cdk/a11y";
/** @title Form field with custom telephone number input control. */
export class FormFieldCustomControlExample {
    constructor() {
        this.form = new FormGroup({
            tel: new FormControl(new MyTel('', '', '')),
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FormFieldCustomControlExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: FormFieldCustomControlExample, isStandalone: true, selector: "form-field-custom-control-example", ngImport: i0, template: "<div [formGroup]=\"form\">\r\n  <mat-form-field>\r\n    <mat-label>Phone number</mat-label>\r\n    <example-tel-input formControlName=\"tel\" required></example-tel-input>\r\n    <mat-icon matSuffix>phone</mat-icon>\r\n    <mat-hint>Include area code</mat-hint>\r\n  </mat-form-field>\r\n</div>\r\n", dependencies: [{ kind: "ngmodule", type: i0.forwardRef(() => FormsModule) }, { kind: "directive", type: i0.forwardRef(() => i1.NgControlStatus), selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i0.forwardRef(() => i1.NgControlStatusGroup), selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i0.forwardRef(() => i1.RequiredValidator), selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "ngmodule", type: i0.forwardRef(() => ReactiveFormsModule) }, { kind: "directive", type: i0.forwardRef(() => i1.FormGroupDirective), selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i0.forwardRef(() => i1.FormControlName), selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: i0.forwardRef(() => MatFormFieldModule) }, { kind: "component", type: i0.forwardRef(() => i2.MatFormField), selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i0.forwardRef(() => i2.MatLabel), selector: "mat-label" }, { kind: "directive", type: i0.forwardRef(() => i2.MatHint), selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i0.forwardRef(() => i2.MatSuffix), selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "component", type: i0.forwardRef(() => MyTelInput), selector: "example-tel-input", inputs: ["aria-describedby", "placeholder", "required", "disabled", "value"] }, { kind: "ngmodule", type: i0.forwardRef(() => MatIconModule) }, { kind: "component", type: i0.forwardRef(() => i3.MatIcon), selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
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
export class MyTel {
    constructor(area, exchange, subscriber) {
        this.area = area;
        this.exchange = exchange;
        this.subscriber = subscriber;
    }
}
/** Custom `MatFormFieldControl` for telephone number input. */
export class MyTelInput {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: MyTelInput, deps: [{ token: i1.FormBuilder }, { token: i4.FocusMonitor }, { token: i0.ElementRef }, { token: MAT_FORM_FIELD, optional: true }, { token: i1.NgControl, optional: true, self: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: MyTelInput, isStandalone: true, selector: "example-tel-input", inputs: { userAriaDescribedBy: ["aria-describedby", "userAriaDescribedBy"], placeholder: "placeholder", required: "required", disabled: "disabled", value: "value" }, host: { properties: { "class.example-floating": "shouldLabelFloat", "id": "id" } }, providers: [{ provide: MatFormFieldControl, useExisting: MyTelInput }], viewQueries: [{ propertyName: "areaInput", first: true, predicate: ["area"], descendants: true }, { propertyName: "exchangeInput", first: true, predicate: ["exchange"], descendants: true }, { propertyName: "subscriberInput", first: true, predicate: ["subscriber"], descendants: true }], ngImport: i0, template: "<div role=\"group\" class=\"example-tel-input-container\"\r\n     [formGroup]=\"parts\"\r\n     [attr.aria-labelledby]=\"_formField.getLabelId()\"\r\n     (focusin)=\"onFocusIn($event)\"\r\n     (focusout)=\"onFocusOut($event)\">\r\n  <input class=\"example-tel-input-element\"\r\n         formControlName=\"area\" size=\"3\"\r\n         maxLength=\"3\"\r\n         aria-label=\"Area code\"\r\n         (input)=\"_handleInput(parts.controls.area, exchange)\"\r\n         #area>\r\n  <span class=\"example-tel-input-spacer\">&ndash;</span>\r\n  <input class=\"example-tel-input-element\"\r\n         formControlName=\"exchange\"\r\n         maxLength=\"3\"\r\n         size=\"3\"\r\n         aria-label=\"Exchange code\"\r\n         (input)=\"_handleInput(parts.controls.exchange, subscriber)\"\r\n         (keyup.backspace)=\"autoFocusPrev(parts.controls.exchange, area)\"\r\n         #exchange>\r\n  <span class=\"example-tel-input-spacer\">&ndash;</span>\r\n  <input class=\"example-tel-input-element\"\r\n         formControlName=\"subscriber\"\r\n         maxLength=\"4\"\r\n         size=\"4\"\r\n         aria-label=\"Subscriber number\"\r\n         (input)=\"_handleInput(parts.controls.subscriber)\"\r\n         (keyup.backspace)=\"autoFocusPrev(parts.controls.subscriber, exchange)\"\r\n         #subscriber>\r\n</div>\r\n", styles: [".example-tel-input-container {\r\n  display: flex;\r\n}\r\n\r\n.example-tel-input-element {\r\n  border: none;\r\n  background: none;\r\n  padding: 0;\r\n  outline: none;\r\n  font: inherit;\r\n  text-align: center;\r\n  color: currentcolor;\r\n}\r\n\r\n.example-tel-input-spacer {\r\n  opacity: 0;\r\n  transition: opacity 200ms;\r\n}\r\n\r\n:host.example-floating .example-tel-input-spacer {\r\n  opacity: 1;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: MyTelInput, decorators: [{
            type: Component,
            args: [{ selector: 'example-tel-input', providers: [{ provide: MatFormFieldControl, useExisting: MyTelInput }], host: {
                        '[class.example-floating]': 'shouldLabelFloat',
                        '[id]': 'id',
                    }, standalone: true, imports: [FormsModule, ReactiveFormsModule], template: "<div role=\"group\" class=\"example-tel-input-container\"\r\n     [formGroup]=\"parts\"\r\n     [attr.aria-labelledby]=\"_formField.getLabelId()\"\r\n     (focusin)=\"onFocusIn($event)\"\r\n     (focusout)=\"onFocusOut($event)\">\r\n  <input class=\"example-tel-input-element\"\r\n         formControlName=\"area\" size=\"3\"\r\n         maxLength=\"3\"\r\n         aria-label=\"Area code\"\r\n         (input)=\"_handleInput(parts.controls.area, exchange)\"\r\n         #area>\r\n  <span class=\"example-tel-input-spacer\">&ndash;</span>\r\n  <input class=\"example-tel-input-element\"\r\n         formControlName=\"exchange\"\r\n         maxLength=\"3\"\r\n         size=\"3\"\r\n         aria-label=\"Exchange code\"\r\n         (input)=\"_handleInput(parts.controls.exchange, subscriber)\"\r\n         (keyup.backspace)=\"autoFocusPrev(parts.controls.exchange, area)\"\r\n         #exchange>\r\n  <span class=\"example-tel-input-spacer\">&ndash;</span>\r\n  <input class=\"example-tel-input-element\"\r\n         formControlName=\"subscriber\"\r\n         maxLength=\"4\"\r\n         size=\"4\"\r\n         aria-label=\"Subscriber number\"\r\n         (input)=\"_handleInput(parts.controls.subscriber)\"\r\n         (keyup.backspace)=\"autoFocusPrev(parts.controls.subscriber, exchange)\"\r\n         #subscriber>\r\n</div>\r\n", styles: [".example-tel-input-container {\r\n  display: flex;\r\n}\r\n\r\n.example-tel-input-element {\r\n  border: none;\r\n  background: none;\r\n  padding: 0;\r\n  outline: none;\r\n  font: inherit;\r\n  text-align: center;\r\n  color: currentcolor;\r\n}\r\n\r\n.example-tel-input-spacer {\r\n  opacity: 0;\r\n  transition: opacity 200ms;\r\n}\r\n\r\n:host.example-floating .example-tel-input-spacer {\r\n  opacity: 1;\r\n}\r\n"] }]
        }], ctorParameters: () => [{ type: i1.FormBuilder }, { type: i4.FocusMonitor }, { type: i0.ElementRef }, { type: i2.MatFormField, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [MAT_FORM_FIELD]
                }] }, { type: i1.NgControl, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZm9ybS1maWVsZC9mb3JtLWZpZWxkLWN1c3RvbS1jb250cm9sL2Zvcm0tZmllbGQtY3VzdG9tLWNvbnRyb2wtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC9mb3JtLWZpZWxkLWN1c3RvbS1jb250cm9sLWV4YW1wbGUuaHRtbCIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC9leGFtcGxlLXRlbC1pbnB1dC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBZSxxQkFBcUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQzFFLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFDTixLQUFLLEVBRUwsUUFBUSxFQUNSLElBQUksRUFDSixTQUFTLEVBQ1QsVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFHTCxXQUFXLEVBQ1gsV0FBVyxFQUNYLFNBQVMsRUFDVCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFdBQVcsRUFDWCxtQkFBbUIsR0FDcEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQ0wsY0FBYyxFQUNkLFlBQVksRUFDWixtQkFBbUIsRUFDbkIsa0JBQWtCLEdBQ25CLE1BQU0sOEJBQThCLENBQUM7QUFDdEMsT0FBTyxF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LGtqQkFBRSxtQkFBbUI7OzJGQUUvQixVQUFVO2tCQVp0QixTQUFTOytCQUNFLG1CQUFtQixhQUdsQixDQUFDLEVBQUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsWUFBWSxFQUFDLENBQUMsUUFDOUQ7d0JBQ0osMEJBQTBCLEVBQUUsa0JBQWtCO3dCQUM5QyxNQUFNLEVBQUUsSUFBSTtxQkFDYixjQUNXLElBQUksV0FDUCxDQUFDLFdBQVcsRUFBRSxtQkFBbUIsQ0FBQzs7MEJBMEZ4QyxRQUFROzswQkFBSSxNQUFNOzJCQUFDLGNBQWM7OzBCQUNqQyxRQUFROzswQkFBSSxJQUFJO3lDQXZGQSxTQUFTO3NCQUEzQixTQUFTO3VCQUFDLE1BQU07Z0JBQ00sYUFBYTtzQkFBbkMsU0FBUzt1QkFBQyxVQUFVO2dCQUNJLGVBQWU7c0JBQXZDLFNBQVM7dUJBQUMsWUFBWTtnQkEyQkksbUJBQW1CO3NCQUE3QyxLQUFLO3VCQUFDLGtCQUFrQjtnQkFHckIsV0FBVztzQkFEZCxLQUFLO2dCQVdGLFFBQVE7c0JBRFgsS0FBSztnQkFXRixRQUFRO3NCQURYLEtBQUs7Z0JBWUYsS0FBSztzQkFEUixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGb2N1c01vbml0b3J9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcclxuaW1wb3J0IHtCb29sZWFuSW5wdXQsIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcclxuaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbmplY3QsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9wdGlvbmFsLFxyXG4gIFNlbGYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIGZvcndhcmRSZWYsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgQWJzdHJhY3RDb250cm9sLFxyXG4gIENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxyXG4gIEZvcm1CdWlsZGVyLFxyXG4gIEZvcm1Db250cm9sLFxyXG4gIEZvcm1Hcm91cCxcclxuICBOZ0NvbnRyb2wsXHJcbiAgVmFsaWRhdG9ycyxcclxuICBGb3Jtc01vZHVsZSxcclxuICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtcclxuICBNQVRfRk9STV9GSUVMRCxcclxuICBNYXRGb3JtRmllbGQsXHJcbiAgTWF0Rm9ybUZpZWxkQ29udHJvbCxcclxuICBNYXRGb3JtRmllbGRNb2R1bGUsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XHJcbmltcG9ydCB7U3ViamVjdH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XHJcblxyXG4vKiogQHRpdGxlIEZvcm0gZmllbGQgd2l0aCBjdXN0b20gdGVsZXBob25lIG51bWJlciBpbnB1dCBjb250cm9sLiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Zvcm0tZmllbGQtY3VzdG9tLWNvbnRyb2wtZXhhbXBsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICdmb3JtLWZpZWxkLWN1c3RvbS1jb250cm9sLWV4YW1wbGUuaHRtbCcsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXHJcbiAgICBmb3J3YXJkUmVmKCgpID0+IE15VGVsSW5wdXQpLFxyXG4gICAgTWF0SWNvbk1vZHVsZSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybUZpZWxkQ3VzdG9tQ29udHJvbEV4YW1wbGUge1xyXG4gIGZvcm06IEZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xyXG4gICAgdGVsOiBuZXcgRm9ybUNvbnRyb2wobmV3IE15VGVsKCcnLCAnJywgJycpKSxcclxuICB9KTtcclxufVxyXG5cclxuLyoqIERhdGEgc3RydWN0dXJlIGZvciBob2xkaW5nIHRlbGVwaG9uZSBudW1iZXIuICovXHJcbmV4cG9ydCBjbGFzcyBNeVRlbCB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIGFyZWE6IHN0cmluZywgcHVibGljIGV4Y2hhbmdlOiBzdHJpbmcsIHB1YmxpYyBzdWJzY3JpYmVyOiBzdHJpbmcpIHt9XHJcbn1cclxuXHJcbi8qKiBDdXN0b20gYE1hdEZvcm1GaWVsZENvbnRyb2xgIGZvciB0ZWxlcGhvbmUgbnVtYmVyIGlucHV0LiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2V4YW1wbGUtdGVsLWlucHV0JyxcclxuICB0ZW1wbGF0ZVVybDogJ2V4YW1wbGUtdGVsLWlucHV0LWV4YW1wbGUuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ2V4YW1wbGUtdGVsLWlucHV0LWV4YW1wbGUuY3NzJ10sXHJcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IE1hdEZvcm1GaWVsZENvbnRyb2wsIHVzZUV4aXN0aW5nOiBNeVRlbElucHV0fV0sXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5leGFtcGxlLWZsb2F0aW5nXSc6ICdzaG91bGRMYWJlbEZsb2F0JyxcclxuICAgICdbaWRdJzogJ2lkJyxcclxuICB9LFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW0Zvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE15VGVsSW5wdXQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTWF0Rm9ybUZpZWxkQ29udHJvbDxNeVRlbD4sIE9uRGVzdHJveSB7XHJcbiAgc3RhdGljIG5leHRJZCA9IDA7XHJcbiAgQFZpZXdDaGlsZCgnYXJlYScpIGFyZWFJbnB1dDogSFRNTElucHV0RWxlbWVudDtcclxuICBAVmlld0NoaWxkKCdleGNoYW5nZScpIGV4Y2hhbmdlSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgQFZpZXdDaGlsZCgnc3Vic2NyaWJlcicpIHN1YnNjcmliZXJJbnB1dDogSFRNTElucHV0RWxlbWVudDtcclxuXHJcbiAgcGFydHM6IEZvcm1Hcm91cDx7XHJcbiAgICBhcmVhOiBGb3JtQ29udHJvbDxzdHJpbmcgfCBudWxsPjtcclxuICAgIGV4Y2hhbmdlOiBGb3JtQ29udHJvbDxzdHJpbmcgfCBudWxsPjtcclxuICAgIHN1YnNjcmliZXI6IEZvcm1Db250cm9sPHN0cmluZyB8IG51bGw+O1xyXG4gIH0+O1xyXG4gIHN0YXRlQ2hhbmdlcyA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgZm9jdXNlZCA9IGZhbHNlO1xyXG4gIHRvdWNoZWQgPSBmYWxzZTtcclxuICBjb250cm9sVHlwZSA9ICdleGFtcGxlLXRlbC1pbnB1dCc7XHJcbiAgaWQgPSBgZXhhbXBsZS10ZWwtaW5wdXQtJHtNeVRlbElucHV0Lm5leHRJZCsrfWA7XHJcbiAgb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcclxuICBvblRvdWNoZWQgPSAoKSA9PiB7fTtcclxuXHJcbiAgZ2V0IGVtcHR5KCkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICB2YWx1ZToge2FyZWEsIGV4Y2hhbmdlLCBzdWJzY3JpYmVyfSxcclxuICAgIH0gPSB0aGlzLnBhcnRzO1xyXG5cclxuICAgIHJldHVybiAhYXJlYSAmJiAhZXhjaGFuZ2UgJiYgIXN1YnNjcmliZXI7XHJcbiAgfVxyXG5cclxuICBnZXQgc2hvdWxkTGFiZWxGbG9hdCgpIHtcclxuICAgIHJldHVybiB0aGlzLmZvY3VzZWQgfHwgIXRoaXMuZW1wdHk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ2FyaWEtZGVzY3JpYmVkYnknKSB1c2VyQXJpYURlc2NyaWJlZEJ5OiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHBsYWNlaG9sZGVyKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXI7XHJcbiAgfVxyXG4gIHNldCBwbGFjZWhvbGRlcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9wbGFjZWhvbGRlciA9IHZhbHVlO1xyXG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xyXG4gIH1cclxuICBwcml2YXRlIF9wbGFjZWhvbGRlcjogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGdldCByZXF1aXJlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9yZXF1aXJlZDtcclxuICB9XHJcbiAgc2V0IHJlcXVpcmVkKHZhbHVlOiBCb29sZWFuSW5wdXQpIHtcclxuICAgIHRoaXMuX3JlcXVpcmVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcclxuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfcmVxdWlyZWQgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XHJcbiAgfVxyXG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogQm9vbGVhbklucHV0KSB7XHJcbiAgICB0aGlzLl9kaXNhYmxlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XHJcbiAgICB0aGlzLl9kaXNhYmxlZCA/IHRoaXMucGFydHMuZGlzYWJsZSgpIDogdGhpcy5wYXJ0cy5lbmFibGUoKTtcclxuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgdmFsdWUoKTogTXlUZWwgfCBudWxsIHtcclxuICAgIGlmICh0aGlzLnBhcnRzLnZhbGlkKSB7XHJcbiAgICAgIGNvbnN0IHtcclxuICAgICAgICB2YWx1ZToge2FyZWEsIGV4Y2hhbmdlLCBzdWJzY3JpYmVyfSxcclxuICAgICAgfSA9IHRoaXMucGFydHM7XHJcbiAgICAgIHJldHVybiBuZXcgTXlUZWwoYXJlYSEsIGV4Y2hhbmdlISwgc3Vic2NyaWJlciEpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG4gIHNldCB2YWx1ZSh0ZWw6IE15VGVsIHwgbnVsbCkge1xyXG4gICAgY29uc3Qge2FyZWEsIGV4Y2hhbmdlLCBzdWJzY3JpYmVyfSA9IHRlbCB8fCBuZXcgTXlUZWwoJycsICcnLCAnJyk7XHJcbiAgICB0aGlzLnBhcnRzLnNldFZhbHVlKHthcmVhLCBleGNoYW5nZSwgc3Vic2NyaWJlcn0pO1xyXG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGVycm9yU3RhdGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5wYXJ0cy5pbnZhbGlkICYmIHRoaXMudG91Y2hlZDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxyXG4gICAgcHJpdmF0ZSBfZm9jdXNNb25pdG9yOiBGb2N1c01vbml0b3IsXHJcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcclxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTUFUX0ZPUk1fRklFTEQpIHB1YmxpYyBfZm9ybUZpZWxkOiBNYXRGb3JtRmllbGQsXHJcbiAgICBAT3B0aW9uYWwoKSBAU2VsZigpIHB1YmxpYyBuZ0NvbnRyb2w6IE5nQ29udHJvbCxcclxuICApIHtcclxuICAgIGlmICh0aGlzLm5nQ29udHJvbCAhPSBudWxsKSB7XHJcbiAgICAgIHRoaXMubmdDb250cm9sLnZhbHVlQWNjZXNzb3IgPSB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucGFydHMgPSBmb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgIGFyZWE6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDMpLCBWYWxpZGF0b3JzLm1heExlbmd0aCgzKV1dLFxyXG4gICAgICBleGNoYW5nZTogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoMyksIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDMpXV0sXHJcbiAgICAgIHN1YnNjcmliZXI6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDQpLCBWYWxpZGF0b3JzLm1heExlbmd0aCg0KV1dLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLmNvbXBsZXRlKCk7XHJcbiAgICB0aGlzLl9mb2N1c01vbml0b3Iuc3RvcE1vbml0b3JpbmcodGhpcy5fZWxlbWVudFJlZik7XHJcbiAgfVxyXG5cclxuICBvbkZvY3VzSW4oZXZlbnQ6IEZvY3VzRXZlbnQpIHtcclxuICAgIGlmICghdGhpcy5mb2N1c2VkKSB7XHJcbiAgICAgIHRoaXMuZm9jdXNlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uRm9jdXNPdXQoZXZlbnQ6IEZvY3VzRXZlbnQpIHtcclxuICAgIGlmICghdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnJlbGF0ZWRUYXJnZXQgYXMgRWxlbWVudCkpIHtcclxuICAgICAgdGhpcy50b3VjaGVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMub25Ub3VjaGVkKCk7XHJcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGF1dG9Gb2N1c05leHQoY29udHJvbDogQWJzdHJhY3RDb250cm9sLCBuZXh0RWxlbWVudD86IEhUTUxJbnB1dEVsZW1lbnQpOiB2b2lkIHtcclxuICAgIGlmICghY29udHJvbC5lcnJvcnMgJiYgbmV4dEVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5fZm9jdXNNb25pdG9yLmZvY3VzVmlhKG5leHRFbGVtZW50LCAncHJvZ3JhbScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXV0b0ZvY3VzUHJldihjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsIHByZXZFbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50KTogdm9pZCB7XHJcbiAgICBpZiAoY29udHJvbC52YWx1ZS5sZW5ndGggPCAxKSB7XHJcbiAgICAgIHRoaXMuX2ZvY3VzTW9uaXRvci5mb2N1c1ZpYShwcmV2RWxlbWVudCwgJ3Byb2dyYW0nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldERlc2NyaWJlZEJ5SWRzKGlkczogc3RyaW5nW10pIHtcclxuICAgIGNvbnN0IGNvbnRyb2xFbGVtZW50ID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICcuZXhhbXBsZS10ZWwtaW5wdXQtY29udGFpbmVyJyxcclxuICAgICkhO1xyXG4gICAgY29udHJvbEVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgaWRzLmpvaW4oJyAnKSk7XHJcbiAgfVxyXG5cclxuICBvbkNvbnRhaW5lckNsaWNrKCkge1xyXG4gICAgaWYgKHRoaXMucGFydHMuY29udHJvbHMuc3Vic2NyaWJlci52YWxpZCkge1xyXG4gICAgICB0aGlzLl9mb2N1c01vbml0b3IuZm9jdXNWaWEodGhpcy5zdWJzY3JpYmVySW5wdXQsICdwcm9ncmFtJyk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMucGFydHMuY29udHJvbHMuZXhjaGFuZ2UudmFsaWQpIHtcclxuICAgICAgdGhpcy5fZm9jdXNNb25pdG9yLmZvY3VzVmlhKHRoaXMuc3Vic2NyaWJlcklucHV0LCAncHJvZ3JhbScpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnBhcnRzLmNvbnRyb2xzLmFyZWEudmFsaWQpIHtcclxuICAgICAgdGhpcy5fZm9jdXNNb25pdG9yLmZvY3VzVmlhKHRoaXMuZXhjaGFuZ2VJbnB1dCwgJ3Byb2dyYW0nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2ZvY3VzTW9uaXRvci5mb2N1c1ZpYSh0aGlzLmFyZWFJbnB1dCwgJ3Byb2dyYW0nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodGVsOiBNeVRlbCB8IG51bGwpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWUgPSB0ZWw7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgX2hhbmRsZUlucHV0KGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCwgbmV4dEVsZW1lbnQ/OiBIVE1MSW5wdXRFbGVtZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmF1dG9Gb2N1c05leHQoY29udHJvbCwgbmV4dEVsZW1lbnQpO1xyXG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1cIj5cclxuICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICA8bWF0LWxhYmVsPlBob25lIG51bWJlcjwvbWF0LWxhYmVsPlxyXG4gICAgPGV4YW1wbGUtdGVsLWlucHV0IGZvcm1Db250cm9sTmFtZT1cInRlbFwiIHJlcXVpcmVkPjwvZXhhbXBsZS10ZWwtaW5wdXQ+XHJcbiAgICA8bWF0LWljb24gbWF0U3VmZml4PnBob25lPC9tYXQtaWNvbj5cclxuICAgIDxtYXQtaGludD5JbmNsdWRlIGFyZWEgY29kZTwvbWF0LWhpbnQ+XHJcbiAgPC9tYXQtZm9ybS1maWVsZD5cclxuPC9kaXY+XHJcbiIsIjxkaXYgcm9sZT1cImdyb3VwXCIgY2xhc3M9XCJleGFtcGxlLXRlbC1pbnB1dC1jb250YWluZXJcIlxyXG4gICAgIFtmb3JtR3JvdXBdPVwicGFydHNcIlxyXG4gICAgIFthdHRyLmFyaWEtbGFiZWxsZWRieV09XCJfZm9ybUZpZWxkLmdldExhYmVsSWQoKVwiXHJcbiAgICAgKGZvY3VzaW4pPVwib25Gb2N1c0luKCRldmVudClcIlxyXG4gICAgIChmb2N1c291dCk9XCJvbkZvY3VzT3V0KCRldmVudClcIj5cclxuICA8aW5wdXQgY2xhc3M9XCJleGFtcGxlLXRlbC1pbnB1dC1lbGVtZW50XCJcclxuICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiYXJlYVwiIHNpemU9XCIzXCJcclxuICAgICAgICAgbWF4TGVuZ3RoPVwiM1wiXHJcbiAgICAgICAgIGFyaWEtbGFiZWw9XCJBcmVhIGNvZGVcIlxyXG4gICAgICAgICAoaW5wdXQpPVwiX2hhbmRsZUlucHV0KHBhcnRzLmNvbnRyb2xzLmFyZWEsIGV4Y2hhbmdlKVwiXHJcbiAgICAgICAgICNhcmVhPlxyXG4gIDxzcGFuIGNsYXNzPVwiZXhhbXBsZS10ZWwtaW5wdXQtc3BhY2VyXCI+Jm5kYXNoOzwvc3Bhbj5cclxuICA8aW5wdXQgY2xhc3M9XCJleGFtcGxlLXRlbC1pbnB1dC1lbGVtZW50XCJcclxuICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiZXhjaGFuZ2VcIlxyXG4gICAgICAgICBtYXhMZW5ndGg9XCIzXCJcclxuICAgICAgICAgc2l6ZT1cIjNcIlxyXG4gICAgICAgICBhcmlhLWxhYmVsPVwiRXhjaGFuZ2UgY29kZVwiXHJcbiAgICAgICAgIChpbnB1dCk9XCJfaGFuZGxlSW5wdXQocGFydHMuY29udHJvbHMuZXhjaGFuZ2UsIHN1YnNjcmliZXIpXCJcclxuICAgICAgICAgKGtleXVwLmJhY2tzcGFjZSk9XCJhdXRvRm9jdXNQcmV2KHBhcnRzLmNvbnRyb2xzLmV4Y2hhbmdlLCBhcmVhKVwiXHJcbiAgICAgICAgICNleGNoYW5nZT5cclxuICA8c3BhbiBjbGFzcz1cImV4YW1wbGUtdGVsLWlucHV0LXNwYWNlclwiPiZuZGFzaDs8L3NwYW4+XHJcbiAgPGlucHV0IGNsYXNzPVwiZXhhbXBsZS10ZWwtaW5wdXQtZWxlbWVudFwiXHJcbiAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInN1YnNjcmliZXJcIlxyXG4gICAgICAgICBtYXhMZW5ndGg9XCI0XCJcclxuICAgICAgICAgc2l6ZT1cIjRcIlxyXG4gICAgICAgICBhcmlhLWxhYmVsPVwiU3Vic2NyaWJlciBudW1iZXJcIlxyXG4gICAgICAgICAoaW5wdXQpPVwiX2hhbmRsZUlucHV0KHBhcnRzLmNvbnRyb2xzLnN1YnNjcmliZXIpXCJcclxuICAgICAgICAgKGtleXVwLmJhY2tzcGFjZSk9XCJhdXRvRm9jdXNQcmV2KHBhcnRzLmNvbnRyb2xzLnN1YnNjcmliZXIsIGV4Y2hhbmdlKVwiXHJcbiAgICAgICAgICNzdWJzY3JpYmVyPlxyXG48L2Rpdj5cclxuIl19