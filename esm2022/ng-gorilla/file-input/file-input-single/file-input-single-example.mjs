import { Component, ViewEncapsulation } from '@angular/core';
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
 * @title File Input with just a single file upload capability
 */
export class FileInputSingleExample {
    constructor() {
        this.fileFormControl = new FormControl([], [Validators.required, FileValidator.maxContentSize(1048576)]);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FileInputSingleExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: FileInputSingleExample, isStandalone: true, selector: "file-input-single-example", ngImport: i0, template: "<form class=\"example-form\">\r\n\r\n  <mat-form-field class=\"example-file-input\" appearance=\"outline\">\r\n    <mat-label>Documents</mat-label>\r\n    <grl-file-input #fileInput [formControl]=\"fileFormControl\" placeholder=\"Upload you docs here\"></grl-file-input>\r\n    <button type=\"button\" matSuffix mat-flat-button color=\"primary\" [grlFileInputButtonFor]=\"fileInput\">Upload</button>\r\n    <mat-hint>You can upload just a single image</mat-hint>\r\n    @if (fileFormControl.hasError('maxContentSize')) {\r\n    <mat-error>The file size should not be more than {{1048576 | byteFormat}}</mat-error>\r\n    }\r\n    @if (fileFormControl.hasError('required')) {\r\n    <mat-error>This field is <strong>required</strong></mat-error>\r\n    }\r\n  </mat-form-field>\r\n\r\n</form>", styles: [".example-file-input.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {\r\n  padding-right: 16px;\r\n}"], dependencies: [{ kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "directive", type: i2.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i2.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i2.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: GrlFileInputModule }, { kind: "component", type: i3.GrlFileInput, selector: "grl-file-input", inputs: ["disabled", "tabIndex", "multiple", "accept", "maxContentSize", "value", "errorStateMatcher", "id", "placeholder", "aria-describedby", "role"] }, { kind: "directive", type: i3.GrlFileInputButton, selector: "button[grlFileInputButtonFor]", inputs: ["grlFileInputButtonFor", "grlFileInputAction", "disabled"], exportAs: ["grlFileInputButton", "grlFileInputButtonFor"] }, { kind: "pipe", type: i3.ByteFormatPipe, name: "byteFormat" }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i4.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FileInputSingleExample, decorators: [{
            type: Component,
            args: [{ selector: 'file-input-single-example', standalone: true, imports: [ReactiveFormsModule, MatFormFieldModule, GrlFileInputModule, MatButtonModule], encapsulation: ViewEncapsulation.None, template: "<form class=\"example-form\">\r\n\r\n  <mat-form-field class=\"example-file-input\" appearance=\"outline\">\r\n    <mat-label>Documents</mat-label>\r\n    <grl-file-input #fileInput [formControl]=\"fileFormControl\" placeholder=\"Upload you docs here\"></grl-file-input>\r\n    <button type=\"button\" matSuffix mat-flat-button color=\"primary\" [grlFileInputButtonFor]=\"fileInput\">Upload</button>\r\n    <mat-hint>You can upload just a single image</mat-hint>\r\n    @if (fileFormControl.hasError('maxContentSize')) {\r\n    <mat-error>The file size should not be more than {{1048576 | byteFormat}}</mat-error>\r\n    }\r\n    @if (fileFormControl.hasError('required')) {\r\n    <mat-error>This field is <strong>required</strong></mat-error>\r\n    }\r\n  </mat-form-field>\r\n\r\n</form>", styles: [".example-file-input.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {\r\n  padding-right: 16px;\r\n}"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1pbnB1dC1zaW5nbGUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9uZy1nb3JpbGxhLWRvY3VtZW50cy9uZy1nb3JpbGxhL2ZpbGUtaW5wdXQvZmlsZS1pbnB1dC1zaW5nbGUvZmlsZS1pbnB1dC1zaW5nbGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9uZy1nb3JpbGxhLWRvY3VtZW50cy9uZy1nb3JpbGxhL2ZpbGUtaW5wdXQvZmlsZS1pbnB1dC1zaW5nbGUvZmlsZS1pbnB1dC1zaW5nbGUtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUFDLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGFBQWEsRUFBRSxrQkFBa0IsRUFBQyxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7QUFFeEU7O0dBRUc7QUFTSCxNQUFNLE9BQU8sc0JBQXNCO0lBUm5DO1FBU0Usb0JBQWUsR0FBRyxJQUFJLFdBQVcsQ0FDL0IsRUFBRSxFQUNGLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxhQUFhLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQzdELENBQUM7S0FDSDs4R0FMWSxzQkFBc0I7a0dBQXRCLHNCQUFzQixxRkNqQm5DLHl4QkFlTyw0S0RESyxtQkFBbUIsOGpCQUFFLGtCQUFrQixnbUJBQUUsa0JBQWtCLCtoQkFBRSxlQUFlOzsyRkFHM0Usc0JBQXNCO2tCQVJsQyxTQUFTOytCQUNFLDJCQUEyQixjQUd6QixJQUFJLFdBQ1AsQ0FBQyxtQkFBbUIsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxlQUFlLENBQUMsaUJBQ3hFLGlCQUFpQixDQUFDLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbCwgUmVhY3RpdmVGb3Jtc01vZHVsZSwgVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge01hdEZvcm1GaWVsZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQge0ZpbGVWYWxpZGF0b3IsIEdybEZpbGVJbnB1dE1vZHVsZX0gZnJvbSAnbmctZ29yaWxsYS9maWxlLWlucHV0JztcblxuLyoqXG4gKiBAdGl0bGUgRmlsZSBJbnB1dCB3aXRoIGp1c3QgYSBzaW5nbGUgZmlsZSB1cGxvYWQgY2FwYWJpbGl0eVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaWxlLWlucHV0LXNpbmdsZS1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ2ZpbGUtaW5wdXQtc2luZ2xlLWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnZmlsZS1pbnB1dC1zaW5nbGUtZXhhbXBsZS5odG1sJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1JlYWN0aXZlRm9ybXNNb2R1bGUsIE1hdEZvcm1GaWVsZE1vZHVsZSwgR3JsRmlsZUlucHV0TW9kdWxlLCBNYXRCdXR0b25Nb2R1bGVdLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBGaWxlSW5wdXRTaW5nbGVFeGFtcGxlIHtcbiAgZmlsZUZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKFxuICAgIFtdLFxuICAgIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBGaWxlVmFsaWRhdG9yLm1heENvbnRlbnRTaXplKDEwNDg1NzYpXSxcbiAgKTtcbn1cbiIsIjxmb3JtIGNsYXNzPVwiZXhhbXBsZS1mb3JtXCI+XHJcblxyXG4gIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZmlsZS1pbnB1dFwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XHJcbiAgICA8bWF0LWxhYmVsPkRvY3VtZW50czwvbWF0LWxhYmVsPlxyXG4gICAgPGdybC1maWxlLWlucHV0ICNmaWxlSW5wdXQgW2Zvcm1Db250cm9sXT1cImZpbGVGb3JtQ29udHJvbFwiIHBsYWNlaG9sZGVyPVwiVXBsb2FkIHlvdSBkb2NzIGhlcmVcIj48L2dybC1maWxlLWlucHV0PlxyXG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgbWF0U3VmZml4IG1hdC1mbGF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBbZ3JsRmlsZUlucHV0QnV0dG9uRm9yXT1cImZpbGVJbnB1dFwiPlVwbG9hZDwvYnV0dG9uPlxyXG4gICAgPG1hdC1oaW50PllvdSBjYW4gdXBsb2FkIGp1c3QgYSBzaW5nbGUgaW1hZ2U8L21hdC1oaW50PlxyXG4gICAgQGlmIChmaWxlRm9ybUNvbnRyb2wuaGFzRXJyb3IoJ21heENvbnRlbnRTaXplJykpIHtcclxuICAgIDxtYXQtZXJyb3I+VGhlIGZpbGUgc2l6ZSBzaG91bGQgbm90IGJlIG1vcmUgdGhhbiB7ezEwNDg1NzYgfCBieXRlRm9ybWF0fX08L21hdC1lcnJvcj5cclxuICAgIH1cclxuICAgIEBpZiAoZmlsZUZvcm1Db250cm9sLmhhc0Vycm9yKCdyZXF1aXJlZCcpKSB7XHJcbiAgICA8bWF0LWVycm9yPlRoaXMgZmllbGQgaXMgPHN0cm9uZz5yZXF1aXJlZDwvc3Ryb25nPjwvbWF0LWVycm9yPlxyXG4gICAgfVxyXG4gIDwvbWF0LWZvcm0tZmllbGQ+XHJcblxyXG48L2Zvcm0+Il19