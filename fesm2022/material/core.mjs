import * as i0 from '@angular/core';
import { Component } from '@angular/core';
import * as i1 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i5 from '@angular/material/core';
import { MatRippleModule } from '@angular/material/core';
import * as i4 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i3 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i2 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i1$1 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';

/**
 * @title Elevation CSS classes
 */
class ElevationOverviewExample {
    constructor() {
        this.isActive = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ElevationOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: ElevationOverviewExample, isStandalone: true, selector: "elevation-overview-example", ngImport: i0, template: "<div class=\"example-container\"\r\n    [class.mat-elevation-z2]=\"!isActive\"\r\n    [class.mat-elevation-z8]=\"isActive\">\r\n  Example\r\n</div>\r\n\r\n<button mat-button (click)=\"isActive = !isActive\">Toggle Elevation</button>\r\n", styles: [".example-container {\r\n  padding: 16px;\r\n  margin-bottom: 16px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ElevationOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'elevation-overview-example', standalone: true, imports: [MatButtonModule], template: "<div class=\"example-container\"\r\n    [class.mat-elevation-z2]=\"!isActive\"\r\n    [class.mat-elevation-z8]=\"isActive\">\r\n  Example\r\n</div>\r\n\r\n<button mat-button (click)=\"isActive = !isActive\">Toggle Elevation</button>\r\n", styles: [".example-container {\r\n  padding: 16px;\r\n  margin-bottom: 16px;\r\n}\r\n"] }]
        }] });

/**
 * @title MatRipple basic usage
 */
class RippleOverviewExample {
    constructor() {
        this.centered = false;
        this.disabled = false;
        this.unbounded = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: RippleOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: RippleOverviewExample, isStandalone: true, selector: "ripple-overview-example", ngImport: i0, template: "<mat-checkbox [(ngModel)]=\"centered\" class=\"example-ripple-checkbox\">Centered</mat-checkbox>\r\n<mat-checkbox [(ngModel)]=\"disabled\" class=\"example-ripple-checkbox\">Disabled</mat-checkbox>\r\n<mat-checkbox [(ngModel)]=\"unbounded\" class=\"example-ripple-checkbox\">Unbounded</mat-checkbox>\r\n\r\n<mat-form-field class=\"example-ripple-form-field\">\r\n  <mat-label>Radius</mat-label>\r\n  <input matInput [(ngModel)]=\"radius\" type=\"number\">\r\n</mat-form-field>\r\n<mat-form-field class=\"example-ripple-form-field\">\r\n  <mat-label>Color</mat-label>\r\n  <input matInput [(ngModel)]=\"color\" type=\"text\">\r\n</mat-form-field>\r\n\r\n\r\n<div class=\"example-ripple-container mat-elevation-z4\"\r\n     matRipple\r\n     [matRippleCentered]=\"centered\"\r\n     [matRippleDisabled]=\"disabled\"\r\n     [matRippleUnbounded]=\"unbounded\"\r\n     [matRippleRadius]=\"radius\"\r\n     [matRippleColor]=\"color\">\r\n  Click me\r\n</div>\r\n", styles: [".example-ripple-container {\r\n  cursor: pointer;\r\n  text-align: center;\r\n\r\n  width: 300px;\r\n  height: 300px;\r\n  line-height: 300px;\r\n\r\n  user-select: none;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n\r\n  -webkit-user-drag: none;\r\n  -webkit-tap-highlight-color: transparent;\r\n}\r\n\r\n/** Styles to make the demo look better. */\r\n.example-ripple-checkbox {\r\n  margin: 6px 12px 6px 0;\r\n}\r\n\r\n.example-ripple-form-field {\r\n  margin: 0 12px 0 0;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i1$1.MatCheckbox, selector: "mat-checkbox", inputs: ["aria-label", "aria-labelledby", "aria-describedby", "id", "required", "labelPosition", "name", "value", "disableRipple", "tabIndex", "color", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i3.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i3.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatRippleModule }, { kind: "directive", type: i5.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleRadius", "matRippleAnimation", "matRippleDisabled", "matRippleTrigger"], exportAs: ["matRipple"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: RippleOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'ripple-overview-example', standalone: true, imports: [MatCheckboxModule, FormsModule, MatFormFieldModule, MatInputModule, MatRippleModule], template: "<mat-checkbox [(ngModel)]=\"centered\" class=\"example-ripple-checkbox\">Centered</mat-checkbox>\r\n<mat-checkbox [(ngModel)]=\"disabled\" class=\"example-ripple-checkbox\">Disabled</mat-checkbox>\r\n<mat-checkbox [(ngModel)]=\"unbounded\" class=\"example-ripple-checkbox\">Unbounded</mat-checkbox>\r\n\r\n<mat-form-field class=\"example-ripple-form-field\">\r\n  <mat-label>Radius</mat-label>\r\n  <input matInput [(ngModel)]=\"radius\" type=\"number\">\r\n</mat-form-field>\r\n<mat-form-field class=\"example-ripple-form-field\">\r\n  <mat-label>Color</mat-label>\r\n  <input matInput [(ngModel)]=\"color\" type=\"text\">\r\n</mat-form-field>\r\n\r\n\r\n<div class=\"example-ripple-container mat-elevation-z4\"\r\n     matRipple\r\n     [matRippleCentered]=\"centered\"\r\n     [matRippleDisabled]=\"disabled\"\r\n     [matRippleUnbounded]=\"unbounded\"\r\n     [matRippleRadius]=\"radius\"\r\n     [matRippleColor]=\"color\">\r\n  Click me\r\n</div>\r\n", styles: [".example-ripple-container {\r\n  cursor: pointer;\r\n  text-align: center;\r\n\r\n  width: 300px;\r\n  height: 300px;\r\n  line-height: 300px;\r\n\r\n  user-select: none;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n\r\n  -webkit-user-drag: none;\r\n  -webkit-tap-highlight-color: transparent;\r\n}\r\n\r\n/** Styles to make the demo look better. */\r\n.example-ripple-checkbox {\r\n  margin: 6px 12px 6px 0;\r\n}\r\n\r\n.example-ripple-form-field {\r\n  margin: 0 12px 0 0;\r\n}\r\n"] }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { ElevationOverviewExample, RippleOverviewExample };
//# sourceMappingURL=core.mjs.map
