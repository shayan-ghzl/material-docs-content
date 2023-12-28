import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FileValidator, GrlFileInputModule } from 'ng-gorilla/file-input';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "ng-gorilla/file-input";
import * as i4 from "@angular/material/button";
/**
 * @title File Input with upload button outside of it
 */
export class FileInputUploadButtonOutsideExample {
    constructor() {
        this.fileFormControl = new FormControl([], [Validators.required, FileValidator.maxContentSize(1048576)]);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FileInputUploadButtonOutsideExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: FileInputUploadButtonOutsideExample, isStandalone: true, selector: "file-input-upload-button-outside-example", ngImport: i0, template: "<form class=\"example-form\">\r\n\r\n  <mat-form-field class=\"example-file-input\" appearance=\"outline\">\r\n    <mat-label>Documents</mat-label>\r\n    <grl-file-input #fileInput [formControl]=\"fileFormControl\" placeholder=\"Upload you docs here\"></grl-file-input>\r\n    <mat-hint>You can upload just a single image</mat-hint>\r\n    @if (fileFormControl.hasError('maxContentSize')) {\r\n    <mat-error>The file size should not be more than {{1048576 | byteFormat}}</mat-error>\r\n    }\r\n    @if (fileFormControl.hasError('required')) {\r\n    <mat-error>This field is <strong>required</strong></mat-error>\r\n    }\r\n  </mat-form-field>\r\n\r\n  <button class=\"upload-button-outside\" type=\"button\" mat-flat-button color=\"primary\" [grlFileInputButtonFor]=\"fileInput\">Upload</button>\r\n\r\n</form>", styles: [".example-file-input.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {\r\n  padding-right: 16px;\r\n}\r\n\r\n.upload-button-outside.mdc-button {\r\n  display: block;\r\n  margin-top: 32px;\r\n}"], dependencies: [{ kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "directive", type: i2.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i2.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "ngmodule", type: GrlFileInputModule }, { kind: "component", type: i3.GrlFileInput, selector: "grl-file-input", inputs: ["disabled", "tabIndex", "multiple", "accept", "maxContentSize", "value", "errorStateMatcher", "id", "placeholder", "aria-describedby", "role"] }, { kind: "directive", type: i3.GrlFileInputButton, selector: "button[grlFileInputButtonFor]", inputs: ["grlFileInputButtonFor", "grlFileInputAction", "disabled"], exportAs: ["grlFileInputButton", "grlFileInputButtonFor"] }, { kind: "pipe", type: i3.ByteFormatPipe, name: "byteFormat" }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i4.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FileInputUploadButtonOutsideExample, decorators: [{
            type: Component,
            args: [{ selector: 'file-input-upload-button-outside-example', standalone: true, imports: [ReactiveFormsModule, MatFormFieldModule, GrlFileInputModule, MatButtonModule], template: "<form class=\"example-form\">\r\n\r\n  <mat-form-field class=\"example-file-input\" appearance=\"outline\">\r\n    <mat-label>Documents</mat-label>\r\n    <grl-file-input #fileInput [formControl]=\"fileFormControl\" placeholder=\"Upload you docs here\"></grl-file-input>\r\n    <mat-hint>You can upload just a single image</mat-hint>\r\n    @if (fileFormControl.hasError('maxContentSize')) {\r\n    <mat-error>The file size should not be more than {{1048576 | byteFormat}}</mat-error>\r\n    }\r\n    @if (fileFormControl.hasError('required')) {\r\n    <mat-error>This field is <strong>required</strong></mat-error>\r\n    }\r\n  </mat-form-field>\r\n\r\n  <button class=\"upload-button-outside\" type=\"button\" mat-flat-button color=\"primary\" [grlFileInputButtonFor]=\"fileInput\">Upload</button>\r\n\r\n</form>", styles: [".example-file-input.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {\r\n  padding-right: 16px;\r\n}\r\n\r\n.upload-button-outside.mdc-button {\r\n  display: block;\r\n  margin-top: 32px;\r\n}"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1pbnB1dC11cGxvYWQtYnV0dG9uLW91dHNpZGUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9uZy1nb3JpbGxhLWRvY3VtZW50cy9uZy1nb3JpbGxhL2ZpbGUtaW5wdXQvZmlsZS1pbnB1dC11cGxvYWQtYnV0dG9uLW91dHNpZGUvZmlsZS1pbnB1dC11cGxvYWQtYnV0dG9uLW91dHNpZGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9uZy1nb3JpbGxhLWRvY3VtZW50cy9uZy1nb3JpbGxhL2ZpbGUtaW5wdXQvZmlsZS1pbnB1dC11cGxvYWQtYnV0dG9uLW91dHNpZGUvZmlsZS1pbnB1dC11cGxvYWQtYnV0dG9uLW91dHNpZGUtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGFBQWEsRUFBRSxrQkFBa0IsRUFBQyxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7QUFFeEU7O0dBRUc7QUFRSCxNQUFNLE9BQU8sbUNBQW1DO0lBUGhEO1FBUUUsb0JBQWUsR0FBRyxJQUFJLFdBQVcsQ0FDL0IsRUFBRSxFQUNGLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxhQUFhLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQzdELENBQUM7S0FDSDs4R0FMWSxtQ0FBbUM7a0dBQW5DLG1DQUFtQyxvR0NoQmhELGl6QkFnQk8sd1FERkssbUJBQW1CLDhqQkFBRSxrQkFBa0IsK2RBQUUsa0JBQWtCLCtoQkFBRSxlQUFlOzsyRkFFM0UsbUNBQW1DO2tCQVAvQyxTQUFTOytCQUNFLDBDQUEwQyxjQUd4QyxJQUFJLFdBQ1AsQ0FBQyxtQkFBbUIsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxlQUFlLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sLCBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0Rm9ybUZpZWxkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7RmlsZVZhbGlkYXRvciwgR3JsRmlsZUlucHV0TW9kdWxlfSBmcm9tICduZy1nb3JpbGxhL2ZpbGUtaW5wdXQnO1xuXG4vKipcbiAqIEB0aXRsZSBGaWxlIElucHV0IHdpdGggdXBsb2FkIGJ1dHRvbiBvdXRzaWRlIG9mIGl0XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZpbGUtaW5wdXQtdXBsb2FkLWJ1dHRvbi1vdXRzaWRlLWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsnZmlsZS1pbnB1dC11cGxvYWQtYnV0dG9uLW91dHNpZGUtZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICdmaWxlLWlucHV0LXVwbG9hZC1idXR0b24tb3V0c2lkZS1leGFtcGxlLmh0bWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbUmVhY3RpdmVGb3Jtc01vZHVsZSwgTWF0Rm9ybUZpZWxkTW9kdWxlLCBHcmxGaWxlSW5wdXRNb2R1bGUsIE1hdEJ1dHRvbk1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIEZpbGVJbnB1dFVwbG9hZEJ1dHRvbk91dHNpZGVFeGFtcGxlIHtcbiAgZmlsZUZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKFxuICAgIFtdLFxuICAgIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBGaWxlVmFsaWRhdG9yLm1heENvbnRlbnRTaXplKDEwNDg1NzYpXSxcbiAgKTtcbn1cbiIsIjxmb3JtIGNsYXNzPVwiZXhhbXBsZS1mb3JtXCI+XHJcblxyXG4gIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZmlsZS1pbnB1dFwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XHJcbiAgICA8bWF0LWxhYmVsPkRvY3VtZW50czwvbWF0LWxhYmVsPlxyXG4gICAgPGdybC1maWxlLWlucHV0ICNmaWxlSW5wdXQgW2Zvcm1Db250cm9sXT1cImZpbGVGb3JtQ29udHJvbFwiIHBsYWNlaG9sZGVyPVwiVXBsb2FkIHlvdSBkb2NzIGhlcmVcIj48L2dybC1maWxlLWlucHV0PlxyXG4gICAgPG1hdC1oaW50PllvdSBjYW4gdXBsb2FkIGp1c3QgYSBzaW5nbGUgaW1hZ2U8L21hdC1oaW50PlxyXG4gICAgQGlmIChmaWxlRm9ybUNvbnRyb2wuaGFzRXJyb3IoJ21heENvbnRlbnRTaXplJykpIHtcclxuICAgIDxtYXQtZXJyb3I+VGhlIGZpbGUgc2l6ZSBzaG91bGQgbm90IGJlIG1vcmUgdGhhbiB7ezEwNDg1NzYgfCBieXRlRm9ybWF0fX08L21hdC1lcnJvcj5cclxuICAgIH1cclxuICAgIEBpZiAoZmlsZUZvcm1Db250cm9sLmhhc0Vycm9yKCdyZXF1aXJlZCcpKSB7XHJcbiAgICA8bWF0LWVycm9yPlRoaXMgZmllbGQgaXMgPHN0cm9uZz5yZXF1aXJlZDwvc3Ryb25nPjwvbWF0LWVycm9yPlxyXG4gICAgfVxyXG4gIDwvbWF0LWZvcm0tZmllbGQ+XHJcblxyXG4gIDxidXR0b24gY2xhc3M9XCJ1cGxvYWQtYnV0dG9uLW91dHNpZGVcIiB0eXBlPVwiYnV0dG9uXCIgbWF0LWZsYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIFtncmxGaWxlSW5wdXRCdXR0b25Gb3JdPVwiZmlsZUlucHV0XCI+VXBsb2FkPC9idXR0b24+XHJcblxyXG48L2Zvcm0+Il19