import * as i0 from '@angular/core';
import { Pipe, Directive, Input, forwardRef, numberAttribute, Component, ViewEncapsulation, ChangeDetectionStrategy, Optional, Self, ViewChild, HostBinding, NgModule } from '@angular/core';
import * as i1$1 from '@angular/forms';
import { NG_VALIDATORS, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import * as i4$1 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i2 from '@angular/material/form-field';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import * as i3 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i4 from '@angular/material/chips';
import { MatChipsModule } from '@angular/material/chips';
import * as i1 from '@angular/material/core';
import { mixinTabIndex, mixinDisabled, mixinErrorState } from '@angular/material/core';
import * as i5 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import { Subject } from 'rxjs';

class ByteFormatPipe {
    transform(value, decimals) {
        if (value > 0) {
            return this.formatBytes(value, decimals);
        }
        return value;
    }
    formatBytes(bytes, decimals) {
        if (bytes === 0) {
            return '0 Byte';
        }
        const k = 1024;
        const dm = decimals || 2;
        const sizes = ['Byte', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: ByteFormatPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "17.0.8", ngImport: i0, type: ByteFormatPipe, isStandalone: true, name: "byteFormat" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: ByteFormatPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'byteFormat',
                    standalone: true
                }]
        }] });

class GrlFileInputButton {
    constructor() {
        this.grlFileInputAction = 'open';
        this._disabled = false;
    }
    get disabled() {
        return this._disabled || (this.grlFileInput && this.grlFileInput.disabled);
    }
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
    }
    _click() {
        if (this.disabled) {
            return;
        }
        if (this.grlFileInputAction === 'open') {
            this.grlFileInput.open();
        }
        else if (this.grlFileInputAction === 'clear') {
            this.grlFileInput.clear();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: GrlFileInputButton, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.8", type: GrlFileInputButton, isStandalone: true, selector: "button[grlFileInputButtonFor]", inputs: { grlFileInput: ["grlFileInputButtonFor", "grlFileInput"], grlFileInputAction: "grlFileInputAction", disabled: "disabled" }, host: { listeners: { "click": "_click()" }, properties: { "attr.disabled": "disabled || null" } }, exportAs: ["grlFileInputButton", "grlFileInputButtonFor"], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: GrlFileInputButton, decorators: [{
            type: Directive,
            args: [{
                    selector: 'button[grlFileInputButtonFor]',
                    exportAs: 'grlFileInputButton, grlFileInputButtonFor',
                    host: {
                        '(click)': '_click()',
                        '[attr.disabled]': 'disabled || null',
                    },
                    standalone: true,
                }]
        }], propDecorators: { grlFileInput: [{
                type: Input,
                args: ['grlFileInputButtonFor']
            }], grlFileInputAction: [{
                type: Input
            }], disabled: [{
                type: Input
            }] } });

class FileValidator {
    static maxContentSize(bytes) {
        return maxContentSizeValidator(bytes);
    }
}
const MAX_CONTENT_SIZE_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => MaxContentSizeValidator),
    multi: true
};
class MaxContentSizeValidator {
    constructor() {
        this._validator = nullValidator;
        this.inputName = 'maxContentSize';
        this.normalizeInput = (input) => toInteger(input);
        this.createValidator = (maxContentSize) => maxContentSizeValidator(maxContentSize);
    }
    ngOnChanges(changes) {
        if (this.inputName in changes) {
            const input = this.normalizeInput(changes[this.inputName].currentValue);
            this._enabled = this.enabled(input);
            this._validator = this._enabled ? this.createValidator(input) : nullValidator;
            if (this._onChange) {
                this._onChange();
            }
        }
    }
    validate(control) {
        return this._validator(control);
    }
    registerOnValidatorChange(fn) {
        this._onChange = fn;
    }
    /**
     * @description
     * Determines whether this validator should be active or not based on an input.
     * Base class implementation checks whether an input is defined (if the value is different from
     * `null` and `undefined`). Validator classes that extend this base class can override this
     * function with the logic specific to a particular validator directive.
     */
    enabled(input) {
        return input != null /* both `null` and `undefined` */;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: MaxContentSizeValidator, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.8", type: MaxContentSizeValidator, isStandalone: true, selector: "[maxContentSize][formControlName],[maxContentSize][formControl],[maxContentSize][ngModel]", inputs: { maxContentSize: "maxContentSize" }, host: { properties: { "attr.maxContentSize": "_enabled ? maxContentSize : null" } }, providers: [MAX_CONTENT_SIZE_VALIDATOR], usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: MaxContentSizeValidator, decorators: [{
            type: Directive,
            args: [{
                    selector: '[maxContentSize][formControlName],[maxContentSize][formControl],[maxContentSize][ngModel]',
                    providers: [MAX_CONTENT_SIZE_VALIDATOR],
                    host: { '[attr.maxContentSize]': '_enabled ? maxContentSize : null' },
                    standalone: true
                }]
        }], propDecorators: { maxContentSize: [{
                type: Input
            }] } });
/**
 * Method that updates string to integer if not already a number
 *
 * @param value The value to convert to integer.
 * @returns value of parameter converted to number or integer.
 */
function toInteger(value) {
    return typeof value === 'number' ? value : parseInt(value, 10);
}
/**
* Validator that requires the content size of the control's value to be greater than
* to the provided maximum content size. See `FileValidator.maxContentSize` for additional information.
*/
function maxContentSizeValidator(bytes) {
    return (control) => {
        const size = control && control.value ? control.value.map(f => f.file.size).reduce((acc, i) => acc + i, 0) : 0;
        const condition = bytes > size;
        return condition ? null : { maxContentSize: { actualSize: size, maxSize: bytes } };
    };
}
/**
 * Function that has `ValidatorFn` shape, but performs no operation.
 */
function nullValidator(control) {
    return null;
}

class FileInput {
    constructor(file) {
        this.file = file;
        this.name = file.name;
    }
}
let nextUniqueId = 0;
// Boilerplate for applying mixins to GrlFileInput.
/** @docs-private */
const MixinErrorStateBase = mixinTabIndex(mixinDisabled(mixinErrorState(class {
    constructor(_elementRef, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, 
    /**
     * Form control bound to the component.
     * Implemented as part of `MatFormFieldControl`.
     * @docs-private
     */
    ngControl) {
        this._elementRef = _elementRef;
        this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
        this._parentForm = _parentForm;
        this._parentFormGroup = _parentFormGroup;
        this.ngControl = ngControl;
        /**
         * Emits whenever the component state changes and should cause the parent
         * form-field to update. Implemented as part of `MatFormFieldControl`.
         * @docs-private
         */
        this.stateChanges = new Subject();
    }
})));
class GrlFileInput extends MixinErrorStateBase {
    remove(file) {
        if (!this.disabled) {
            const index = this.value.indexOf(file);
            if (index >= 0) {
                this.value.splice(index, 1);
                this.input.nativeElement.value = '';
                this._onChange(this.value);
                this.stateChanges.next();
            }
        }
    }
    onUpload(event) {
        const fileList = event.target.files;
        if (!this.disabled && fileList) {
            this.value = [];
            for (let i = 0; i < fileList.length; i++) {
                if (typeof fileList[i].name != 'undefined' && (!this.maxContentSize || fileList[i].size < this.maxContentSize) && (this.accept.includes('image/*') || this.accept.includes(fileList[i].type) && !(this.value.map(x => x.name).includes(fileList[i].name)))) {
                    this.value.push(new FileInput(fileList[i]));
                }
            }
            this._onChange(this.value);
            this.stateChanges.next();
        }
    }
    open() {
        this.input.nativeElement.click();
    }
    clear() {
        this.value = [];
        this.input.nativeElement.value = '';
        this._onChange(this.value);
        this.stateChanges.next();
    }
    ngOnChanges(changes) {
        if (changes['disabled'] || changes['userAriaDescribedBy']) {
            this.stateChanges.next();
        }
    }
    ngDoCheck() {
        const ngControl = this.ngControl;
        if (ngControl) {
            if (this._previousControl !== ngControl.control) {
                if (this._previousControl !== undefined && ngControl.disabled !== null && ngControl.disabled !== this.disabled) {
                    this.disabled = ngControl.disabled;
                }
                this._previousControl = ngControl.control;
            }
            this.updateErrorState();
        }
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
        this.stateChanges.next();
    }
    get focused() {
        return this._focused;
    }
    set focused(v) {
        this._focused = v;
        this.stateChanges.next();
    }
    get empty() {
        return this.value.length ? false : true;
    }
    get shouldLabelFloat() {
        return this.focused || !this.empty;
    }
    get required() {
        return this._required ?? this.ngControl?.control?.hasValidator(Validators.required) ?? false;
    }
    set required(value) {
        this._required = coerceBooleanProperty(value);
        this.stateChanges.next();
    }
    get autofilled() {
        return this._autofilled;
    }
    set autofilled(v) {
        this._autofilled = v;
        this.stateChanges.next();
    }
    setDescribedByIds(ids) {
        this._ariaDescribedby = ids.length ? ids.join(' ') : null;
    }
    onContainerClick(event) {
        if (!this.disabled) {
            this._elementRef.nativeElement.focus();
        }
    }
    _focus() {
        if (!this.disabled) {
            this.focused = true;
        }
    }
    _blur() {
        this.focused = false;
        this._onTouched();
    }
    get role() {
        if (this._role) {
            return this._role;
        }
        return this.empty ? null : this._defaultRole;
    }
    set role(value) {
        this._role = value;
    }
    constructor(_elementRef, _changeDetectorRef, defaultErrorStateMatcher, parentForm, parentFormGroup, ngControl) {
        super(_elementRef, defaultErrorStateMatcher, parentForm, parentFormGroup, ngControl);
        this._changeDetectorRef = _changeDetectorRef;
        this.multiple = null;
        this.accept = ['image/*'];
        this.value = [];
        this._id = `inline-uploader-${nextUniqueId++}`;
        this._focused = false;
        this.controlType = 'mat-select';
        this._autofilled = false;
        this._ariaDescribedby = null;
        this._role = null;
        this._defaultRole = 'presentation';
        /**
         * Function when touched. Set as part of ControlValueAccessor implementation.
         * @docs-private
        */
        this._onTouched = () => { };
        /**
         * Function when changed. Set as part of ControlValueAccessor implementation.
         * @docs-private
        */
        this._onChange = () => { };
        if (this.ngControl != null) {
            this.ngControl.valueAccessor = this;
        }
    }
    /**
     * Implemented as part of ControlValueAccessor.
     * @docs-private
    */
    writeValue(value) {
        if (value) {
            this.value = value;
            this._changeDetectorRef.markForCheck();
            this.stateChanges.next();
        }
    }
    /**
     * Implemented as part of ControlValueAccessor.
     * @docs-private
    */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /**
     * Implemented as part of ControlValueAccessor.
     * @docs-private
    */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    /**
     * Implemented as part of ControlValueAccessor.
     * @docs-private
    */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this._changeDetectorRef.markForCheck();
        this.stateChanges.next();
    }
    ngOnDestroy() {
        this.stateChanges.complete();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: GrlFileInput, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: i1.ErrorStateMatcher }, { token: i1$1.NgForm, optional: true }, { token: i1$1.FormGroupDirective, optional: true }, { token: i1$1.NgControl, optional: true, self: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "17.0.8", type: GrlFileInput, isStandalone: true, selector: "grl-file-input", inputs: { disabled: "disabled", tabIndex: "tabIndex", multiple: "multiple", accept: "accept", maxContentSize: ["maxContentSize", "maxContentSize", numberAttribute], value: "value", errorStateMatcher: "errorStateMatcher", id: "id", placeholder: "placeholder", userAriaDescribedBy: ["aria-describedby", "userAriaDescribedBy"], role: "role" }, host: { listeners: { "focus": "_focus()", "blur": "_blur()" }, properties: { "class.inline-upliader-disabled": "disabled", "class.inline-upliader-invalid": "errorState", "class.inline-upliader-required": "required", "class.inline-upliader-empty": "empty", "class.inline-upliader-multiple": "multiple", "attr.role": "role", "attr.aria-disabled": "disabled.toString()", "attr.aria-required": "required.toString()", "attr.aria-invalid": "errorState", "attr.tabindex": "tabIndex", "attr.id": "id", "attr.aria-describedby": "this._ariaDescribedby" } }, providers: [
            { provide: MatFormFieldControl, useExisting: GrlFileInput }
        ], viewQueries: [{ propertyName: "input", first: true, predicate: ["fileInput"], descendants: true }], usesInheritance: true, usesOnChanges: true, ngImport: i0, template: `
    <mat-chip-set>
      <mat-chip *ngFor="let file of value" (removed)="remove(file)">
          {{file.name}}
          <button matChipRemove>
              <mat-icon>cancel</mat-icon>
          </button>
      </mat-chip>
    </mat-chip-set>
    <div class="mat-mdc-file-input-value">
        <span class="mat-mdc-file-input-placeholder mat-mdc-file-input-min-line" *ngIf="empty">{{placeholder}}</span>
    </div>
    <input type="file" #fileInput [attr.multiple]="multiple" [attr.accept]="accept" (change)="onUpload($event)" />
  `, isInline: true, styles: ["grl-file-input{--grl-file-input-placeholder-text-color: rgba(0, 0, 0, .6);display:block;min-height:40px;outline:none;-webkit-user-select:none;user-select:none}grl-file-input input[type=file]{position:absolute;inset:0;z-index:-10;width:0;height:0;opacity:0;display:none}.mat-mdc-file-input-value{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-mdc-file-input-min-line:empty:before{content:\" \";white-space:pre;width:1px;display:inline-block;visibility:hidden}.mat-mdc-file-input-placeholder{transition:color .4s .1333333333333s cubic-bezier(.25,.8,.25,1);color:var(--grl-file-input-placeholder-text-color)}._mat-animation-noopable .mat-mdc-file-input-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-mdc-file-input-placeholder{color:#0000;-webkit-text-fill-color:rgba(0,0,0,0);transition:none;display:block}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: MatChipsModule }, { kind: "component", type: i4.MatChip, selector: "mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]", inputs: ["color", "disabled", "disableRipple", "tabIndex", "role", "id", "aria-label", "aria-description", "value", "removable", "highlighted"], outputs: ["removed", "destroyed"], exportAs: ["matChip"] }, { kind: "directive", type: i4.MatChipRemove, selector: "[matChipRemove]" }, { kind: "component", type: i4.MatChipSet, selector: "mat-chip-set", inputs: ["disabled", "role"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i5.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: GrlFileInput, decorators: [{
            type: Component,
            args: [{ selector: 'grl-file-input', template: `
    <mat-chip-set>
      <mat-chip *ngFor="let file of value" (removed)="remove(file)">
          {{file.name}}
          <button matChipRemove>
              <mat-icon>cancel</mat-icon>
          </button>
      </mat-chip>
    </mat-chip-set>
    <div class="mat-mdc-file-input-value">
        <span class="mat-mdc-file-input-placeholder mat-mdc-file-input-min-line" *ngIf="empty">{{placeholder}}</span>
    </div>
    <input type="file" #fileInput [attr.multiple]="multiple" [attr.accept]="accept" (change)="onUpload($event)" />
  `, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, imports: [
                        CommonModule,
                        MatChipsModule,
                        MatIconModule,
                    ], providers: [
                        { provide: MatFormFieldControl, useExisting: GrlFileInput }
                    ], inputs: ['disabled', 'tabIndex'], host: {
                        '[class.inline-upliader-disabled]': 'disabled',
                        '[class.inline-upliader-invalid]': 'errorState',
                        '[class.inline-upliader-required]': 'required',
                        '[class.inline-upliader-empty]': 'empty',
                        '[class.inline-upliader-multiple]': 'multiple',
                        '[attr.role]': 'role',
                        '(focus)': '_focus()',
                        '(blur)': '_blur()',
                        '[attr.aria-disabled]': 'disabled.toString()',
                        '[attr.aria-required]': 'required.toString()',
                        '[attr.aria-invalid]': 'errorState',
                        '[attr.tabindex]': 'tabIndex',
                        '[attr.id]': 'id'
                    }, styles: ["grl-file-input{--grl-file-input-placeholder-text-color: rgba(0, 0, 0, .6);display:block;min-height:40px;outline:none;-webkit-user-select:none;user-select:none}grl-file-input input[type=file]{position:absolute;inset:0;z-index:-10;width:0;height:0;opacity:0;display:none}.mat-mdc-file-input-value{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-mdc-file-input-min-line:empty:before{content:\" \";white-space:pre;width:1px;display:inline-block;visibility:hidden}.mat-mdc-file-input-placeholder{transition:color .4s .1333333333333s cubic-bezier(.25,.8,.25,1);color:var(--grl-file-input-placeholder-text-color)}._mat-animation-noopable .mat-mdc-file-input-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-mdc-file-input-placeholder{color:#0000;-webkit-text-fill-color:rgba(0,0,0,0);transition:none;display:block}\n"] }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i1.ErrorStateMatcher }, { type: i1$1.NgForm, decorators: [{
                    type: Optional
                }] }, { type: i1$1.FormGroupDirective, decorators: [{
                    type: Optional
                }] }, { type: i1$1.NgControl, decorators: [{
                    type: Optional
                }, {
                    type: Self
                }] }], propDecorators: { input: [{
                type: ViewChild,
                args: ['fileInput']
            }], multiple: [{
                type: Input
            }], accept: [{
                type: Input
            }], maxContentSize: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], value: [{
                type: Input
            }], errorStateMatcher: [{
                type: Input
            }], id: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], userAriaDescribedBy: [{
                type: Input,
                args: ['aria-describedby']
            }], _ariaDescribedby: [{
                type: HostBinding,
                args: ['attr.aria-describedby']
            }], role: [{
                type: Input
            }] } });
class GrlFileInputModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: GrlFileInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.0.8", ngImport: i0, type: GrlFileInputModule, imports: [GrlFileInput, GrlFileInputButton, MaxContentSizeValidator, ByteFormatPipe], exports: [GrlFileInput, GrlFileInputButton, MaxContentSizeValidator, ByteFormatPipe] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: GrlFileInputModule, imports: [GrlFileInput] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: GrlFileInputModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [GrlFileInput, GrlFileInputButton, MaxContentSizeValidator, ByteFormatPipe],
                    exports: [GrlFileInput, GrlFileInputButton, MaxContentSizeValidator, ByteFormatPipe],
                }]
        }] });

/**
 * @title File Input with a clear button
 */
class FileInputClearButtonExample {
    constructor() {
        this.fileFormControl = new FormControl([], [Validators.required, FileValidator.maxContentSize(1048576)]);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FileInputClearButtonExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: FileInputClearButtonExample, isStandalone: true, selector: "file-input-clear-button-example", ngImport: i0, template: "<form class=\"example-form\">\r\n\r\n  <mat-form-field class=\"example-file-input\" appearance=\"outline\">\r\n    <mat-label>Documents</mat-label>\r\n    <grl-file-input #fileInput [multiple]=\"true\" [formControl]=\"fileFormControl\" placeholder=\"Upload you docs here\"></grl-file-input>\r\n    <button type=\"button\" matSuffix mat-flat-button color=\"primary\" [grlFileInputButtonFor]=\"fileInput\" [grlFileInputAction]=\"'clear'\">Clear</button>\r\n    <mat-hint>You can upload just a single image</mat-hint>\r\n    @if (fileFormControl.hasError('maxContentSize')) {\r\n    <mat-error>The file size should not be more than {{1048576 | byteFormat}}</mat-error>\r\n    }\r\n    @if (fileFormControl.hasError('required')) {\r\n    <mat-error>This field is <strong>required</strong></mat-error>\r\n    }\r\n  </mat-form-field>\r\n\r\n  <button class=\"upload-button-outside\" type=\"button\" mat-flat-button color=\"primary\" [grlFileInputButtonFor]=\"fileInput\">Upload</button>\r\n\r\n</form>", styles: [".example-file-input.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {\r\n  padding-right: 16px;\r\n}\r\n\r\n.upload-button-outside.mdc-button {\r\n  display: block;\r\n  margin-top: 32px;\r\n}"], dependencies: [{ kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1$1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "directive", type: i2.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i2.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i2.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: GrlFileInputModule }, { kind: "component", type: GrlFileInput, selector: "grl-file-input", inputs: ["disabled", "tabIndex", "multiple", "accept", "maxContentSize", "value", "errorStateMatcher", "id", "placeholder", "aria-describedby", "role"] }, { kind: "directive", type: GrlFileInputButton, selector: "button[grlFileInputButtonFor]", inputs: ["grlFileInputButtonFor", "grlFileInputAction", "disabled"], exportAs: ["grlFileInputButton", "grlFileInputButtonFor"] }, { kind: "pipe", type: ByteFormatPipe, name: "byteFormat" }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i4$1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FileInputClearButtonExample, decorators: [{
            type: Component,
            args: [{ selector: 'file-input-clear-button-example', standalone: true, imports: [ReactiveFormsModule, MatFormFieldModule, GrlFileInputModule, MatButtonModule], encapsulation: ViewEncapsulation.None, template: "<form class=\"example-form\">\r\n\r\n  <mat-form-field class=\"example-file-input\" appearance=\"outline\">\r\n    <mat-label>Documents</mat-label>\r\n    <grl-file-input #fileInput [multiple]=\"true\" [formControl]=\"fileFormControl\" placeholder=\"Upload you docs here\"></grl-file-input>\r\n    <button type=\"button\" matSuffix mat-flat-button color=\"primary\" [grlFileInputButtonFor]=\"fileInput\" [grlFileInputAction]=\"'clear'\">Clear</button>\r\n    <mat-hint>You can upload just a single image</mat-hint>\r\n    @if (fileFormControl.hasError('maxContentSize')) {\r\n    <mat-error>The file size should not be more than {{1048576 | byteFormat}}</mat-error>\r\n    }\r\n    @if (fileFormControl.hasError('required')) {\r\n    <mat-error>This field is <strong>required</strong></mat-error>\r\n    }\r\n  </mat-form-field>\r\n\r\n  <button class=\"upload-button-outside\" type=\"button\" mat-flat-button color=\"primary\" [grlFileInputButtonFor]=\"fileInput\">Upload</button>\r\n\r\n</form>", styles: [".example-file-input.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {\r\n  padding-right: 16px;\r\n}\r\n\r\n.upload-button-outside.mdc-button {\r\n  display: block;\r\n  margin-top: 32px;\r\n}"] }]
        }] });

/**
 * @title File Input with a directive validator
 */
class FileInputDirectiveValidatorExample {
    constructor() {
        this.fileFormControl = new FormControl([], [Validators.required]);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FileInputDirectiveValidatorExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: FileInputDirectiveValidatorExample, isStandalone: true, selector: "file-input-directive-validator-example", ngImport: i0, template: "<form class=\"example-form\">\r\n\r\n  <mat-form-field class=\"example-file-input\" appearance=\"outline\">\r\n    <mat-label>Documents</mat-label>\r\n    <grl-file-input #fileInput [multiple]=\"true\" [maxContentSize]=\"1048576\" [formControl]=\"fileFormControl\" placeholder=\"Upload you docs here\"></grl-file-input>\r\n    <button type=\"button\" matSuffix mat-flat-button color=\"primary\" [grlFileInputButtonFor]=\"fileInput\">Upload</button>\r\n    <mat-hint>You can upload multiple images</mat-hint>\r\n    @if (fileFormControl.hasError('maxContentSize')) {\r\n    <mat-error>The file size should not be more than {{1048576 | byteFormat}}</mat-error>\r\n    }\r\n    @if (fileFormControl.hasError('required')) {\r\n    <mat-error>This field is <strong>required</strong></mat-error>\r\n    }\r\n  </mat-form-field>\r\n\r\n</form>", styles: [".example-file-input.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {\r\n  padding-right: 16px;\r\n}"], dependencies: [{ kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1$1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "directive", type: i2.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i2.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i2.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: GrlFileInputModule }, { kind: "component", type: GrlFileInput, selector: "grl-file-input", inputs: ["disabled", "tabIndex", "multiple", "accept", "maxContentSize", "value", "errorStateMatcher", "id", "placeholder", "aria-describedby", "role"] }, { kind: "directive", type: GrlFileInputButton, selector: "button[grlFileInputButtonFor]", inputs: ["grlFileInputButtonFor", "grlFileInputAction", "disabled"], exportAs: ["grlFileInputButton", "grlFileInputButtonFor"] }, { kind: "directive", type: MaxContentSizeValidator, selector: "[maxContentSize][formControlName],[maxContentSize][formControl],[maxContentSize][ngModel]", inputs: ["maxContentSize"] }, { kind: "pipe", type: ByteFormatPipe, name: "byteFormat" }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i4$1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FileInputDirectiveValidatorExample, decorators: [{
            type: Component,
            args: [{ selector: 'file-input-directive-validator-example', standalone: true, imports: [ReactiveFormsModule, MatFormFieldModule, GrlFileInputModule, MatButtonModule], encapsulation: ViewEncapsulation.None, template: "<form class=\"example-form\">\r\n\r\n  <mat-form-field class=\"example-file-input\" appearance=\"outline\">\r\n    <mat-label>Documents</mat-label>\r\n    <grl-file-input #fileInput [multiple]=\"true\" [maxContentSize]=\"1048576\" [formControl]=\"fileFormControl\" placeholder=\"Upload you docs here\"></grl-file-input>\r\n    <button type=\"button\" matSuffix mat-flat-button color=\"primary\" [grlFileInputButtonFor]=\"fileInput\">Upload</button>\r\n    <mat-hint>You can upload multiple images</mat-hint>\r\n    @if (fileFormControl.hasError('maxContentSize')) {\r\n    <mat-error>The file size should not be more than {{1048576 | byteFormat}}</mat-error>\r\n    }\r\n    @if (fileFormControl.hasError('required')) {\r\n    <mat-error>This field is <strong>required</strong></mat-error>\r\n    }\r\n  </mat-form-field>\r\n\r\n</form>", styles: [".example-file-input.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {\r\n  padding-right: 16px;\r\n}"] }]
        }] });

/** Error when invalid control is dirty, touched, or submitted. */
class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
/** @title File Input with a custom ErrorStateMatcher */
class FileInputErrorStateMatcherExample {
    constructor() {
        this.fileFormControl = new FormControl([], [Validators.required, FileValidator.maxContentSize(1048576)]);
        this.matcher = new MyErrorStateMatcher();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FileInputErrorStateMatcherExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: FileInputErrorStateMatcherExample, isStandalone: true, selector: "file-input-error-state-matcher-example", ngImport: i0, template: "<form class=\"example-form\">\r\n\r\n  <mat-form-field class=\"example-file-input\" appearance=\"outline\">\r\n    <mat-label>Documents</mat-label>\r\n    <grl-file-input #fileInput [multiple]=\"true\" [formControl]=\"fileFormControl\" [errorStateMatcher]=\"matcher\"></grl-file-input>\r\n    <button matSuffix type=\"button\" mat-flat-button color=\"primary\" [grlFileInputButtonFor]=\"fileInput\">Upload</button>\r\n    <mat-hint>You can upload just a single image</mat-hint>\r\n    @if (fileFormControl.hasError('maxContentSize')) {\r\n    <mat-error>The file size should not be more than {{1048576 | byteFormat}}</mat-error>\r\n    }\r\n    @if (fileFormControl.hasError('required')) {\r\n    <mat-error>This field is <strong>required</strong></mat-error>\r\n    }\r\n  </mat-form-field>\r\n\r\n</form>", styles: [".example-file-input.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {\r\n  padding-right: 16px;\r\n}"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "directive", type: i2.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i2.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i2.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1$1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: GrlFileInputModule }, { kind: "component", type: GrlFileInput, selector: "grl-file-input", inputs: ["disabled", "tabIndex", "multiple", "accept", "maxContentSize", "value", "errorStateMatcher", "id", "placeholder", "aria-describedby", "role"] }, { kind: "directive", type: GrlFileInputButton, selector: "button[grlFileInputButtonFor]", inputs: ["grlFileInputButtonFor", "grlFileInputAction", "disabled"], exportAs: ["grlFileInputButton", "grlFileInputButtonFor"] }, { kind: "pipe", type: ByteFormatPipe, name: "byteFormat" }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i4$1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FileInputErrorStateMatcherExample, decorators: [{
            type: Component,
            args: [{ selector: 'file-input-error-state-matcher-example', standalone: true, imports: [MatFormFieldModule, ReactiveFormsModule, GrlFileInputModule, MatButtonModule], encapsulation: ViewEncapsulation.None, template: "<form class=\"example-form\">\r\n\r\n  <mat-form-field class=\"example-file-input\" appearance=\"outline\">\r\n    <mat-label>Documents</mat-label>\r\n    <grl-file-input #fileInput [multiple]=\"true\" [formControl]=\"fileFormControl\" [errorStateMatcher]=\"matcher\"></grl-file-input>\r\n    <button matSuffix type=\"button\" mat-flat-button color=\"primary\" [grlFileInputButtonFor]=\"fileInput\">Upload</button>\r\n    <mat-hint>You can upload just a single image</mat-hint>\r\n    @if (fileFormControl.hasError('maxContentSize')) {\r\n    <mat-error>The file size should not be more than {{1048576 | byteFormat}}</mat-error>\r\n    }\r\n    @if (fileFormControl.hasError('required')) {\r\n    <mat-error>This field is <strong>required</strong></mat-error>\r\n    }\r\n  </mat-form-field>\r\n\r\n</form>", styles: [".example-file-input.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {\r\n  padding-right: 16px;\r\n}"] }]
        }] });

/**
 * @title Basic File Input
 */
class FileInputOverviewExample {
    constructor() {
        this.fileFormControl = new FormControl([], [Validators.required]);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FileInputOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: FileInputOverviewExample, isStandalone: true, selector: "file-input-overview-example", ngImport: i0, template: "<form class=\"example-form\">\r\n\r\n  <mat-form-field class=\"example-file-input\" appearance=\"outline\">\r\n    <mat-label>Documents</mat-label>\r\n    <grl-file-input #fileInput [multiple]=\"true\" [maxContentSize]=\"1048576\" [formControl]=\"fileFormControl\" placeholder=\"Upload you docs here\"></grl-file-input>\r\n    <button type=\"button\" matSuffix mat-flat-button color=\"primary\" [grlFileInputButtonFor]=\"fileInput\">Upload</button>\r\n    <mat-hint>You can upload multiple images</mat-hint>\r\n    @if (fileFormControl.hasError('maxContentSize')) {\r\n    <mat-error>The file size should not be more than {{1048576 | byteFormat}}</mat-error>\r\n    }\r\n    @if (fileFormControl.hasError('required')) {\r\n    <mat-error>This field is <strong>required</strong></mat-error>\r\n    }\r\n  </mat-form-field>\r\n\r\n</form>", styles: [".example-file-input.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {\r\n  padding-right: 16px;\r\n}"], dependencies: [{ kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1$1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "directive", type: i2.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i2.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i2.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: GrlFileInputModule }, { kind: "component", type: GrlFileInput, selector: "grl-file-input", inputs: ["disabled", "tabIndex", "multiple", "accept", "maxContentSize", "value", "errorStateMatcher", "id", "placeholder", "aria-describedby", "role"] }, { kind: "directive", type: GrlFileInputButton, selector: "button[grlFileInputButtonFor]", inputs: ["grlFileInputButtonFor", "grlFileInputAction", "disabled"], exportAs: ["grlFileInputButton", "grlFileInputButtonFor"] }, { kind: "directive", type: MaxContentSizeValidator, selector: "[maxContentSize][formControlName],[maxContentSize][formControl],[maxContentSize][ngModel]", inputs: ["maxContentSize"] }, { kind: "pipe", type: ByteFormatPipe, name: "byteFormat" }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i4$1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FileInputOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'file-input-overview-example', standalone: true, imports: [ReactiveFormsModule, MatFormFieldModule, GrlFileInputModule, MatButtonModule], encapsulation: ViewEncapsulation.None, template: "<form class=\"example-form\">\r\n\r\n  <mat-form-field class=\"example-file-input\" appearance=\"outline\">\r\n    <mat-label>Documents</mat-label>\r\n    <grl-file-input #fileInput [multiple]=\"true\" [maxContentSize]=\"1048576\" [formControl]=\"fileFormControl\" placeholder=\"Upload you docs here\"></grl-file-input>\r\n    <button type=\"button\" matSuffix mat-flat-button color=\"primary\" [grlFileInputButtonFor]=\"fileInput\">Upload</button>\r\n    <mat-hint>You can upload multiple images</mat-hint>\r\n    @if (fileFormControl.hasError('maxContentSize')) {\r\n    <mat-error>The file size should not be more than {{1048576 | byteFormat}}</mat-error>\r\n    }\r\n    @if (fileFormControl.hasError('required')) {\r\n    <mat-error>This field is <strong>required</strong></mat-error>\r\n    }\r\n  </mat-form-field>\r\n\r\n</form>", styles: [".example-file-input.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {\r\n  padding-right: 16px;\r\n}"] }]
        }] });

/**
 * @title File Input with just a single file upload capability
 */
class FileInputSingleExample {
    constructor() {
        this.fileFormControl = new FormControl([], [Validators.required, FileValidator.maxContentSize(1048576)]);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FileInputSingleExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: FileInputSingleExample, isStandalone: true, selector: "file-input-single-example", ngImport: i0, template: "<form class=\"example-form\">\r\n\r\n  <mat-form-field class=\"example-file-input\" appearance=\"outline\">\r\n    <mat-label>Documents</mat-label>\r\n    <grl-file-input #fileInput [formControl]=\"fileFormControl\" placeholder=\"Upload you docs here\"></grl-file-input>\r\n    <button type=\"button\" matSuffix mat-flat-button color=\"primary\" [grlFileInputButtonFor]=\"fileInput\">Upload</button>\r\n    <mat-hint>You can upload just a single image</mat-hint>\r\n    @if (fileFormControl.hasError('maxContentSize')) {\r\n    <mat-error>The file size should not be more than {{1048576 | byteFormat}}</mat-error>\r\n    }\r\n    @if (fileFormControl.hasError('required')) {\r\n    <mat-error>This field is <strong>required</strong></mat-error>\r\n    }\r\n  </mat-form-field>\r\n\r\n</form>", styles: [".example-file-input.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {\r\n  padding-right: 16px;\r\n}"], dependencies: [{ kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1$1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "directive", type: i2.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i2.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i2.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: GrlFileInputModule }, { kind: "component", type: GrlFileInput, selector: "grl-file-input", inputs: ["disabled", "tabIndex", "multiple", "accept", "maxContentSize", "value", "errorStateMatcher", "id", "placeholder", "aria-describedby", "role"] }, { kind: "directive", type: GrlFileInputButton, selector: "button[grlFileInputButtonFor]", inputs: ["grlFileInputButtonFor", "grlFileInputAction", "disabled"], exportAs: ["grlFileInputButton", "grlFileInputButtonFor"] }, { kind: "pipe", type: ByteFormatPipe, name: "byteFormat" }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i4$1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FileInputSingleExample, decorators: [{
            type: Component,
            args: [{ selector: 'file-input-single-example', standalone: true, imports: [ReactiveFormsModule, MatFormFieldModule, GrlFileInputModule, MatButtonModule], encapsulation: ViewEncapsulation.None, template: "<form class=\"example-form\">\r\n\r\n  <mat-form-field class=\"example-file-input\" appearance=\"outline\">\r\n    <mat-label>Documents</mat-label>\r\n    <grl-file-input #fileInput [formControl]=\"fileFormControl\" placeholder=\"Upload you docs here\"></grl-file-input>\r\n    <button type=\"button\" matSuffix mat-flat-button color=\"primary\" [grlFileInputButtonFor]=\"fileInput\">Upload</button>\r\n    <mat-hint>You can upload just a single image</mat-hint>\r\n    @if (fileFormControl.hasError('maxContentSize')) {\r\n    <mat-error>The file size should not be more than {{1048576 | byteFormat}}</mat-error>\r\n    }\r\n    @if (fileFormControl.hasError('required')) {\r\n    <mat-error>This field is <strong>required</strong></mat-error>\r\n    }\r\n  </mat-form-field>\r\n\r\n</form>", styles: [".example-file-input.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {\r\n  padding-right: 16px;\r\n}"] }]
        }] });

/**
 * @title File Input with upload button outside of it
 */
class FileInputUploadButtonOutsideExample {
    constructor() {
        this.fileFormControl = new FormControl([], [Validators.required, FileValidator.maxContentSize(1048576)]);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FileInputUploadButtonOutsideExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: FileInputUploadButtonOutsideExample, isStandalone: true, selector: "file-input-upload-button-outside-example", ngImport: i0, template: "<form class=\"example-form\">\r\n\r\n  <mat-form-field class=\"example-file-input\" appearance=\"outline\">\r\n    <mat-label>Documents</mat-label>\r\n    <grl-file-input #fileInput [formControl]=\"fileFormControl\" placeholder=\"Upload you docs here\"></grl-file-input>\r\n    <mat-hint>You can upload just a single image</mat-hint>\r\n    @if (fileFormControl.hasError('maxContentSize')) {\r\n    <mat-error>The file size should not be more than {{1048576 | byteFormat}}</mat-error>\r\n    }\r\n    @if (fileFormControl.hasError('required')) {\r\n    <mat-error>This field is <strong>required</strong></mat-error>\r\n    }\r\n  </mat-form-field>\r\n\r\n  <button class=\"upload-button-outside\" type=\"button\" mat-flat-button color=\"primary\" [grlFileInputButtonFor]=\"fileInput\">Upload</button>\r\n\r\n</form>", styles: [".example-file-input.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {\r\n  padding-right: 16px;\r\n}\r\n\r\n.upload-button-outside.mdc-button {\r\n  display: block;\r\n  margin-top: 32px;\r\n}"], dependencies: [{ kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1$1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "directive", type: i2.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i2.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "ngmodule", type: GrlFileInputModule }, { kind: "component", type: GrlFileInput, selector: "grl-file-input", inputs: ["disabled", "tabIndex", "multiple", "accept", "maxContentSize", "value", "errorStateMatcher", "id", "placeholder", "aria-describedby", "role"] }, { kind: "directive", type: GrlFileInputButton, selector: "button[grlFileInputButtonFor]", inputs: ["grlFileInputButtonFor", "grlFileInputAction", "disabled"], exportAs: ["grlFileInputButton", "grlFileInputButtonFor"] }, { kind: "pipe", type: ByteFormatPipe, name: "byteFormat" }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i4$1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FileInputUploadButtonOutsideExample, decorators: [{
            type: Component,
            args: [{ selector: 'file-input-upload-button-outside-example', standalone: true, imports: [ReactiveFormsModule, MatFormFieldModule, GrlFileInputModule, MatButtonModule], template: "<form class=\"example-form\">\r\n\r\n  <mat-form-field class=\"example-file-input\" appearance=\"outline\">\r\n    <mat-label>Documents</mat-label>\r\n    <grl-file-input #fileInput [formControl]=\"fileFormControl\" placeholder=\"Upload you docs here\"></grl-file-input>\r\n    <mat-hint>You can upload just a single image</mat-hint>\r\n    @if (fileFormControl.hasError('maxContentSize')) {\r\n    <mat-error>The file size should not be more than {{1048576 | byteFormat}}</mat-error>\r\n    }\r\n    @if (fileFormControl.hasError('required')) {\r\n    <mat-error>This field is <strong>required</strong></mat-error>\r\n    }\r\n  </mat-form-field>\r\n\r\n  <button class=\"upload-button-outside\" type=\"button\" mat-flat-button color=\"primary\" [grlFileInputButtonFor]=\"fileInput\">Upload</button>\r\n\r\n</form>", styles: [".example-file-input.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {\r\n  padding-right: 16px;\r\n}\r\n\r\n.upload-button-outside.mdc-button {\r\n  display: block;\r\n  margin-top: 32px;\r\n}"] }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { FileInputClearButtonExample, FileInputDirectiveValidatorExample, FileInputErrorStateMatcherExample, FileInputOverviewExample, FileInputSingleExample, FileInputUploadButtonOutsideExample };
//# sourceMappingURL=file-input.mjs.map
