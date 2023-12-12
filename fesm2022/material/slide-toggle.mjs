import * as i0 from '@angular/core';
import { Component } from '@angular/core';
import * as i2$1 from '@angular/material/slide-toggle';
import { MatSlideToggleModule, _MatSlideToggleRequiredValidatorModule } from '@angular/material/slide-toggle';
import * as i4 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i1$1 from '@angular/forms';
import { FormsModule, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import * as i2 from '@angular/material/radio';
import { MatRadioModule } from '@angular/material/radio';
import * as i1 from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';
import * as i3 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';

/**
 * @title Configurable slide-toggle
 */
class SlideToggleConfigurableExample {
    constructor() {
        this.color = 'accent';
        this.checked = false;
        this.disabled = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SlideToggleConfigurableExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: SlideToggleConfigurableExample, isStandalone: true, selector: "slide-toggle-configurable-example", ngImport: i0, template: "<mat-card>\r\n  <mat-card-content>\r\n    <h2 class=\"example-h2\">Slider configuration</h2>\r\n\r\n    <section class=\"example-section\">\r\n      <label class=\"example-margin\">Color:</label>\r\n      <mat-radio-group [(ngModel)]=\"color\">\r\n        <mat-radio-button class=\"example-margin\" value=\"primary\">\r\n          Primary\r\n        </mat-radio-button>\r\n        <mat-radio-button class=\"example-margin\" value=\"accent\">\r\n          Accent\r\n        </mat-radio-button>\r\n        <mat-radio-button class=\"example-margin\" value=\"warn\">\r\n          Warn\r\n        </mat-radio-button>\r\n      </mat-radio-group>\r\n    </section>\r\n\r\n    <section class=\"example-section\">\r\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked</mat-checkbox>\r\n    </section>\r\n\r\n    <section class=\"example-section\">\r\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\r\n    </section>\r\n  </mat-card-content>\r\n</mat-card>\r\n\r\n<mat-card class=\"result\">\r\n  <mat-card-content>\r\n    <h2 class=\"example-h2\">Result</h2>\r\n\r\n    <section class=\"example-section\">\r\n      <mat-slide-toggle\r\n          class=\"example-margin\"\r\n          [color]=\"color\"\r\n          [checked]=\"checked\"\r\n          [disabled]=\"disabled\">\r\n        Slide me!\r\n      </mat-slide-toggle>\r\n    </section>\r\n  </mat-card-content>\r\n</mat-card>\r\n", styles: [".example-h2 {\r\n  margin: 10px;\r\n}\r\n\r\n.example-section {\r\n  display: flex;\r\n  align-content: center;\r\n  align-items: center;\r\n  height: 60px;\r\n}\r\n\r\n.example-margin {\r\n  margin: 10px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatCardModule }, { kind: "component", type: i1.MatCard, selector: "mat-card", inputs: ["appearance"], exportAs: ["matCard"] }, { kind: "directive", type: i1.MatCardContent, selector: "mat-card-content" }, { kind: "ngmodule", type: MatRadioModule }, { kind: "directive", type: i2.MatRadioGroup, selector: "mat-radio-group", inputs: ["color", "name", "labelPosition", "value", "selected", "disabled", "required"], outputs: ["change"], exportAs: ["matRadioGroup"] }, { kind: "component", type: i2.MatRadioButton, selector: "mat-radio-button", inputs: ["id", "name", "aria-label", "aria-labelledby", "aria-describedby", "disableRipple", "tabIndex", "checked", "value", "labelPosition", "disabled", "required", "color"], outputs: ["change"], exportAs: ["matRadioButton"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i4.MatCheckbox, selector: "mat-checkbox", inputs: ["aria-label", "aria-labelledby", "aria-describedby", "id", "required", "labelPosition", "name", "value", "disableRipple", "tabIndex", "color", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { kind: "ngmodule", type: MatSlideToggleModule }, { kind: "component", type: i2$1.MatSlideToggle, selector: "mat-slide-toggle", inputs: ["disabled", "disableRipple", "color", "tabIndex", "name", "id", "labelPosition", "aria-label", "aria-labelledby", "aria-describedby", "required", "checked", "hideIcon"], outputs: ["change", "toggleChange"], exportAs: ["matSlideToggle"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SlideToggleConfigurableExample, decorators: [{
            type: Component,
            args: [{ selector: 'slide-toggle-configurable-example', standalone: true, imports: [MatCardModule, MatRadioModule, FormsModule, MatCheckboxModule, MatSlideToggleModule], template: "<mat-card>\r\n  <mat-card-content>\r\n    <h2 class=\"example-h2\">Slider configuration</h2>\r\n\r\n    <section class=\"example-section\">\r\n      <label class=\"example-margin\">Color:</label>\r\n      <mat-radio-group [(ngModel)]=\"color\">\r\n        <mat-radio-button class=\"example-margin\" value=\"primary\">\r\n          Primary\r\n        </mat-radio-button>\r\n        <mat-radio-button class=\"example-margin\" value=\"accent\">\r\n          Accent\r\n        </mat-radio-button>\r\n        <mat-radio-button class=\"example-margin\" value=\"warn\">\r\n          Warn\r\n        </mat-radio-button>\r\n      </mat-radio-group>\r\n    </section>\r\n\r\n    <section class=\"example-section\">\r\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked</mat-checkbox>\r\n    </section>\r\n\r\n    <section class=\"example-section\">\r\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\r\n    </section>\r\n  </mat-card-content>\r\n</mat-card>\r\n\r\n<mat-card class=\"result\">\r\n  <mat-card-content>\r\n    <h2 class=\"example-h2\">Result</h2>\r\n\r\n    <section class=\"example-section\">\r\n      <mat-slide-toggle\r\n          class=\"example-margin\"\r\n          [color]=\"color\"\r\n          [checked]=\"checked\"\r\n          [disabled]=\"disabled\">\r\n        Slide me!\r\n      </mat-slide-toggle>\r\n    </section>\r\n  </mat-card-content>\r\n</mat-card>\r\n", styles: [".example-h2 {\r\n  margin: 10px;\r\n}\r\n\r\n.example-section {\r\n  display: flex;\r\n  align-content: center;\r\n  align-items: center;\r\n  height: 60px;\r\n}\r\n\r\n.example-margin {\r\n  margin: 10px;\r\n}\r\n"] }]
        }] });

/**
 * @title Slide-toggle with forms
 */
class SlideToggleFormsExample {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isChecked = true;
        this.formGroup = this._formBuilder.group({
            enableWifi: '',
            acceptTerms: ['', Validators.requiredTrue],
        });
    }
    alertFormValues(formGroup) {
        alert(JSON.stringify(formGroup.value, null, 2));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SlideToggleFormsExample, deps: [{ token: i1$1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: SlideToggleFormsExample, isStandalone: true, selector: "slide-toggle-forms-example", ngImport: i0, template: "<p>Slide Toggle using a simple NgModel.</p>\r\n\r\n<mat-slide-toggle [(ngModel)]=\"isChecked\">Slide Toggle Checked: {{isChecked}}</mat-slide-toggle>\r\n\r\n<p>Slide Toggle inside of a Template-driven form</p>\r\n\r\n<form class=\"example-form\" #form=\"ngForm\" (ngSubmit)=\"alertFormValues(form.form)\">\r\n\r\n  <mat-slide-toggle ngModel name=\"enableWifi\">Enable Wifi</mat-slide-toggle>\r\n  <mat-slide-toggle ngModel name=\"acceptTerms\" required>Accept Terms of Service</mat-slide-toggle>\r\n\r\n  <button mat-raised-button type=\"submit\">Save Settings</button>\r\n</form>\r\n\r\n<p>Slide Toggle inside of a Reactive form</p>\r\n\r\n<form class=\"example-form\" [formGroup]=\"formGroup\" (ngSubmit)=\"alertFormValues(formGroup)\" ngNativeValidate>\r\n\r\n  <mat-slide-toggle formControlName=\"enableWifi\">Enable Wifi</mat-slide-toggle>\r\n  <mat-slide-toggle formControlName=\"acceptTerms\">Accept Terms of Service</mat-slide-toggle>\r\n\r\n  <p>Form Group Status: {{formGroup.status}}</p>\r\n\r\n  <button mat-raised-button type=\"submit\">Save Settings</button>\r\n</form>\r\n", styles: [".example-form mat-slide-toggle {\r\n  margin: 8px 0;\r\n  display: block;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatSlideToggleModule }, { kind: "directive", type: i2$1.MatSlideToggleRequiredValidator, selector: "mat-slide-toggle[required][formControlName],             mat-slide-toggle[required][formControl], mat-slide-toggle[required][ngModel]" }, { kind: "component", type: i2$1.MatSlideToggle, selector: "mat-slide-toggle", inputs: ["disabled", "disableRipple", "color", "tabIndex", "name", "id", "labelPosition", "aria-label", "aria-labelledby", "aria-describedby", "required", "checked", "hideIcon"], outputs: ["change", "toggleChange"], exportAs: ["matSlideToggle"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i1$1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i1$1.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: _MatSlideToggleRequiredValidatorModule }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i3.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1$1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SlideToggleFormsExample, decorators: [{
            type: Component,
            args: [{ selector: 'slide-toggle-forms-example', standalone: true, imports: [
                        MatSlideToggleModule,
                        FormsModule,
                        _MatSlideToggleRequiredValidatorModule,
                        MatButtonModule,
                        ReactiveFormsModule,
                    ], template: "<p>Slide Toggle using a simple NgModel.</p>\r\n\r\n<mat-slide-toggle [(ngModel)]=\"isChecked\">Slide Toggle Checked: {{isChecked}}</mat-slide-toggle>\r\n\r\n<p>Slide Toggle inside of a Template-driven form</p>\r\n\r\n<form class=\"example-form\" #form=\"ngForm\" (ngSubmit)=\"alertFormValues(form.form)\">\r\n\r\n  <mat-slide-toggle ngModel name=\"enableWifi\">Enable Wifi</mat-slide-toggle>\r\n  <mat-slide-toggle ngModel name=\"acceptTerms\" required>Accept Terms of Service</mat-slide-toggle>\r\n\r\n  <button mat-raised-button type=\"submit\">Save Settings</button>\r\n</form>\r\n\r\n<p>Slide Toggle inside of a Reactive form</p>\r\n\r\n<form class=\"example-form\" [formGroup]=\"formGroup\" (ngSubmit)=\"alertFormValues(formGroup)\" ngNativeValidate>\r\n\r\n  <mat-slide-toggle formControlName=\"enableWifi\">Enable Wifi</mat-slide-toggle>\r\n  <mat-slide-toggle formControlName=\"acceptTerms\">Accept Terms of Service</mat-slide-toggle>\r\n\r\n  <p>Form Group Status: {{formGroup.status}}</p>\r\n\r\n  <button mat-raised-button type=\"submit\">Save Settings</button>\r\n</form>\r\n", styles: [".example-form mat-slide-toggle {\r\n  margin: 8px 0;\r\n  display: block;\r\n}\r\n"] }]
        }], ctorParameters: () => [{ type: i1$1.FormBuilder }] });

/**
 * @title Basic slide-toggles
 */
class SlideToggleOverviewExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SlideToggleOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: SlideToggleOverviewExample, isStandalone: true, selector: "slide-toggle-overview-example", ngImport: i0, template: "<mat-slide-toggle>Slide me!</mat-slide-toggle>\r\n", dependencies: [{ kind: "ngmodule", type: MatSlideToggleModule }, { kind: "component", type: i2$1.MatSlideToggle, selector: "mat-slide-toggle", inputs: ["disabled", "disableRipple", "color", "tabIndex", "name", "id", "labelPosition", "aria-label", "aria-labelledby", "aria-describedby", "required", "checked", "hideIcon"], outputs: ["change", "toggleChange"], exportAs: ["matSlideToggle"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SlideToggleOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'slide-toggle-overview-example', standalone: true, imports: [MatSlideToggleModule], template: "<mat-slide-toggle>Slide me!</mat-slide-toggle>\r\n" }]
        }] });

/**
 * @title Testing with MatSlideToggleHarness
 */
class SlideToggleHarnessExample {
    constructor() {
        this.disabled = true;
        this.ctrl = new FormControl(true);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SlideToggleHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: SlideToggleHarnessExample, isStandalone: true, selector: "slide-toggle-harness-example", ngImport: i0, template: "<mat-slide-toggle\r\n    [formControl]=\"ctrl\"\r\n    name=\"first-name\">\r\n  First\r\n</mat-slide-toggle>\r\n<mat-slide-toggle [disabled]=\"disabled\">\r\n  Second\r\n</mat-slide-toggle>\r\n", dependencies: [{ kind: "ngmodule", type: MatSlideToggleModule }, { kind: "component", type: i2$1.MatSlideToggle, selector: "mat-slide-toggle", inputs: ["disabled", "disableRipple", "color", "tabIndex", "name", "id", "labelPosition", "aria-label", "aria-labelledby", "aria-describedby", "required", "checked", "hideIcon"], outputs: ["change", "toggleChange"], exportAs: ["matSlideToggle"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1$1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SlideToggleHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'slide-toggle-harness-example', standalone: true, imports: [MatSlideToggleModule, FormsModule, ReactiveFormsModule], template: "<mat-slide-toggle\r\n    [formControl]=\"ctrl\"\r\n    name=\"first-name\">\r\n  First\r\n</mat-slide-toggle>\r\n<mat-slide-toggle [disabled]=\"disabled\">\r\n  Second\r\n</mat-slide-toggle>\r\n" }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { SlideToggleConfigurableExample, SlideToggleFormsExample, SlideToggleHarnessExample, SlideToggleOverviewExample };
//# sourceMappingURL=slide-toggle.mjs.map
