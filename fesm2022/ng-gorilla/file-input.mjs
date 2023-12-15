import * as i0 from '@angular/core';
import { Component } from '@angular/core';
import * as i1 from '@angular/forms';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i3 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i2 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';

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
        this.emailFormControl = new FormControl('', [Validators.required, Validators.email]);
        this.matcher = new MyErrorStateMatcher();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FileInputErrorStateMatcherExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: FileInputErrorStateMatcherExample, isStandalone: true, selector: "file-input-error-state-matcher-example", ngImport: i0, template: "<form class=\"example-form\">\r\n  <mat-form-field class=\"example-full-width\">\r\n    <mat-label>Email</mat-label>\r\n    <input type=\"email\" matInput [formControl]=\"emailFormControl\" [errorStateMatcher]=\"matcher\"\r\n           placeholder=\"Ex. pat@example.com\">\r\n    <mat-hint>Errors appear instantly!</mat-hint>\r\n    @if (emailFormControl.hasError('email') && !emailFormControl.hasError('required')) {\r\n      <mat-error>Please enter a valid email address</mat-error>\r\n    }\r\n    @if (emailFormControl.hasError('required')) {\r\n      <mat-error>Email is <strong>required</strong></mat-error>\r\n    }\r\n  </mat-form-field>\r\n</form>\r\n", styles: [".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "directive", type: i2.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i2.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FileInputErrorStateMatcherExample, decorators: [{
            type: Component,
            args: [{ selector: 'file-input-error-state-matcher-example', standalone: true, imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule], template: "<form class=\"example-form\">\r\n  <mat-form-field class=\"example-full-width\">\r\n    <mat-label>Email</mat-label>\r\n    <input type=\"email\" matInput [formControl]=\"emailFormControl\" [errorStateMatcher]=\"matcher\"\r\n           placeholder=\"Ex. pat@example.com\">\r\n    <mat-hint>Errors appear instantly!</mat-hint>\r\n    @if (emailFormControl.hasError('email') && !emailFormControl.hasError('required')) {\r\n      <mat-error>Please enter a valid email address</mat-error>\r\n    }\r\n    @if (emailFormControl.hasError('required')) {\r\n      <mat-error>Email is <strong>required</strong></mat-error>\r\n    }\r\n  </mat-form-field>\r\n</form>\r\n", styles: [".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n"] }]
        }] });

/**
 * @title Basic File Input
 */
class FileInputOverviewExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FileInputOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: FileInputOverviewExample, isStandalone: true, selector: "file-input-overview-example", ngImport: i0, template: "<form class=\"example-form\">\r\n  <mat-form-field class=\"example-full-width\">\r\n    <mat-label>Favorite food</mat-label>\r\n    <input matInput placeholder=\"Ex. Pizza\" value=\"shayan ghazali\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <mat-label>Leave a comment</mat-label>\r\n    <textarea matInput placeholder=\"Ex. It makes me feel...\"></textarea>\r\n  </mat-form-field>\r\n</form>\r\n", styles: [".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FileInputOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'file-input-overview-example', standalone: true, imports: [FormsModule, MatFormFieldModule, MatInputModule], template: "<form class=\"example-form\">\r\n  <mat-form-field class=\"example-full-width\">\r\n    <mat-label>Favorite food</mat-label>\r\n    <input matInput placeholder=\"Ex. Pizza\" value=\"shayan ghazali\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <mat-label>Leave a comment</mat-label>\r\n    <textarea matInput placeholder=\"Ex. It makes me feel...\"></textarea>\r\n  </mat-form-field>\r\n</form>\r\n", styles: [".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n"] }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { FileInputErrorStateMatcherExample, FileInputOverviewExample };
//# sourceMappingURL=file-input.mjs.map
