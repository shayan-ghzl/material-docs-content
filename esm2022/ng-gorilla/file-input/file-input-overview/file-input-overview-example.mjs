import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { GrlFileInputModule } from 'ng-gorilla/file-input';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "ng-gorilla/file-input";
import * as i4 from "@angular/material/button";
/**
 * @title Basic File Input
 */
export class FileInputOverviewExample {
    constructor() {
        this.fileFormControl = new FormControl([], [Validators.required]);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FileInputOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: FileInputOverviewExample, isStandalone: true, selector: "file-input-overview-example", ngImport: i0, template: "<form class=\"example-form\">\r\n\r\n  <mat-form-field class=\"example-file-input\" appearance=\"outline\">\r\n    <mat-label>Documents</mat-label>\r\n    <grl-file-input #fileInput [multiple]=\"true\" [maxContentSize]=\"1048576\" [formControl]=\"fileFormControl\" placeholder=\"Upload you docs here\"></grl-file-input>\r\n    <button type=\"button\" matSuffix mat-flat-button color=\"primary\" [grlFileInputButtonFor]=\"fileInput\">Upload</button>\r\n    <mat-hint>You can upload multiple images</mat-hint>\r\n    @if (fileFormControl.hasError('maxContentSize')) {\r\n    <mat-error>The file size should not be more than {{1048576 | byteFormat}}</mat-error>\r\n    }\r\n    @if (fileFormControl.hasError('required')) {\r\n    <mat-error>This field is <strong>required</strong></mat-error>\r\n    }\r\n  </mat-form-field>\r\n\r\n</form>", styles: [".example-file-input.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {\r\n  padding-right: 16px;\r\n}"], dependencies: [{ kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "directive", type: i2.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i2.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i2.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: GrlFileInputModule }, { kind: "component", type: i3.GrlFileInput, selector: "grl-file-input", inputs: ["disabled", "tabIndex", "multiple", "accept", "maxContentSize", "value", "errorStateMatcher", "id", "placeholder", "aria-describedby", "role"] }, { kind: "directive", type: i3.GrlFileInputButton, selector: "button[grlFileInputButtonFor]", inputs: ["grlFileInputButtonFor", "grlFileInputAction", "disabled"], exportAs: ["grlFileInputButton", "grlFileInputButtonFor"] }, { kind: "directive", type: i3.MaxContentSizeValidator, selector: "[maxContentSize][formControlName],[maxContentSize][formControl],[maxContentSize][ngModel]", inputs: ["maxContentSize"] }, { kind: "pipe", type: i3.ByteFormatPipe, name: "byteFormat" }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i4.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FileInputOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'file-input-overview-example', standalone: true, imports: [ReactiveFormsModule, MatFormFieldModule, GrlFileInputModule, MatButtonModule], encapsulation: ViewEncapsulation.None, template: "<form class=\"example-form\">\r\n\r\n  <mat-form-field class=\"example-file-input\" appearance=\"outline\">\r\n    <mat-label>Documents</mat-label>\r\n    <grl-file-input #fileInput [multiple]=\"true\" [maxContentSize]=\"1048576\" [formControl]=\"fileFormControl\" placeholder=\"Upload you docs here\"></grl-file-input>\r\n    <button type=\"button\" matSuffix mat-flat-button color=\"primary\" [grlFileInputButtonFor]=\"fileInput\">Upload</button>\r\n    <mat-hint>You can upload multiple images</mat-hint>\r\n    @if (fileFormControl.hasError('maxContentSize')) {\r\n    <mat-error>The file size should not be more than {{1048576 | byteFormat}}</mat-error>\r\n    }\r\n    @if (fileFormControl.hasError('required')) {\r\n    <mat-error>This field is <strong>required</strong></mat-error>\r\n    }\r\n  </mat-form-field>\r\n\r\n</form>", styles: [".example-file-input.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {\r\n  padding-right: 16px;\r\n}"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1pbnB1dC1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL25nLWdvcmlsbGEtZG9jdW1lbnRzL25nLWdvcmlsbGEvZmlsZS1pbnB1dC9maWxlLWlucHV0LW92ZXJ2aWV3L2ZpbGUtaW5wdXQtb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9uZy1nb3JpbGxhLWRvY3VtZW50cy9uZy1nb3JpbGxhL2ZpbGUtaW5wdXQvZmlsZS1pbnB1dC1vdmVydmlldy9maWxlLWlucHV0LW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sRUFBQyxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsVUFBVSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7QUFFekQ7O0dBRUc7QUFTSCxNQUFNLE9BQU8sd0JBQXdCO0lBUnJDO1FBU0Usb0JBQWUsR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztLQUM5RDs4R0FGWSx3QkFBd0I7a0dBQXhCLHdCQUF3Qix1RkNqQnJDLHMwQkFlTyw0S0RESyxtQkFBbUIsOGpCQUFFLGtCQUFrQixnbUJBQUUsa0JBQWtCLDJ0QkFBRSxlQUFlOzsyRkFHM0Usd0JBQXdCO2tCQVJwQyxTQUFTOytCQUNFLDZCQUE2QixjQUczQixJQUFJLFdBQ1AsQ0FBQyxtQkFBbUIsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxlQUFlLENBQUMsaUJBQ3hFLGlCQUFpQixDQUFDLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbCwgUmVhY3RpdmVGb3Jtc01vZHVsZSwgVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge01hdEZvcm1GaWVsZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQge0dybEZpbGVJbnB1dE1vZHVsZX0gZnJvbSAnbmctZ29yaWxsYS9maWxlLWlucHV0JztcblxuLyoqXG4gKiBAdGl0bGUgQmFzaWMgRmlsZSBJbnB1dFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaWxlLWlucHV0LW92ZXJ2aWV3LWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsnZmlsZS1pbnB1dC1vdmVydmlldy1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ2ZpbGUtaW5wdXQtb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1JlYWN0aXZlRm9ybXNNb2R1bGUsIE1hdEZvcm1GaWVsZE1vZHVsZSwgR3JsRmlsZUlucHV0TW9kdWxlLCBNYXRCdXR0b25Nb2R1bGVdLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBGaWxlSW5wdXRPdmVydmlld0V4YW1wbGUge1xuICBmaWxlRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woW10sIFtWYWxpZGF0b3JzLnJlcXVpcmVkXSk7XG59XG4iLCI8Zm9ybSBjbGFzcz1cImV4YW1wbGUtZm9ybVwiPlxyXG5cclxuICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZpbGUtaW5wdXRcIiBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxyXG4gICAgPG1hdC1sYWJlbD5Eb2N1bWVudHM8L21hdC1sYWJlbD5cclxuICAgIDxncmwtZmlsZS1pbnB1dCAjZmlsZUlucHV0IFttdWx0aXBsZV09XCJ0cnVlXCIgW21heENvbnRlbnRTaXplXT1cIjEwNDg1NzZcIiBbZm9ybUNvbnRyb2xdPVwiZmlsZUZvcm1Db250cm9sXCIgcGxhY2Vob2xkZXI9XCJVcGxvYWQgeW91IGRvY3MgaGVyZVwiPjwvZ3JsLWZpbGUtaW5wdXQ+XHJcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBtYXRTdWZmaXggbWF0LWZsYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIFtncmxGaWxlSW5wdXRCdXR0b25Gb3JdPVwiZmlsZUlucHV0XCI+VXBsb2FkPC9idXR0b24+XHJcbiAgICA8bWF0LWhpbnQ+WW91IGNhbiB1cGxvYWQgbXVsdGlwbGUgaW1hZ2VzPC9tYXQtaGludD5cclxuICAgIEBpZiAoZmlsZUZvcm1Db250cm9sLmhhc0Vycm9yKCdtYXhDb250ZW50U2l6ZScpKSB7XHJcbiAgICA8bWF0LWVycm9yPlRoZSBmaWxlIHNpemUgc2hvdWxkIG5vdCBiZSBtb3JlIHRoYW4ge3sxMDQ4NTc2IHwgYnl0ZUZvcm1hdH19PC9tYXQtZXJyb3I+XHJcbiAgICB9XHJcbiAgICBAaWYgKGZpbGVGb3JtQ29udHJvbC5oYXNFcnJvcigncmVxdWlyZWQnKSkge1xyXG4gICAgPG1hdC1lcnJvcj5UaGlzIGZpZWxkIGlzIDxzdHJvbmc+cmVxdWlyZWQ8L3N0cm9uZz48L21hdC1lcnJvcj5cclxuICAgIH1cclxuICA8L21hdC1mb3JtLWZpZWxkPlxyXG5cclxuPC9mb3JtPiJdfQ==