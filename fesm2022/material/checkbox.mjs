import * as i0 from '@angular/core';
import { Component } from '@angular/core';
import * as i4 from '@angular/material/radio';
import { MatRadioModule } from '@angular/material/radio';
import * as i1$2 from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i1$1 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i1 from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';
import { JsonPipe } from '@angular/common';

/**
 * @title Configurable checkbox
 */
class CheckboxConfigurableExample {
    constructor() {
        this.checked = false;
        this.indeterminate = false;
        this.labelPosition = 'after';
        this.disabled = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CheckboxConfigurableExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: CheckboxConfigurableExample, isStandalone: true, selector: "checkbox-configurable-example", ngImport: i0, template: "<mat-card>\r\n  <mat-card-content>\r\n    <h2 class=\"example-h2\">Checkbox configuration</h2>\r\n\r\n    <section class=\"example-section\">\r\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked</mat-checkbox>\r\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"indeterminate\">Indeterminate</mat-checkbox>\r\n    </section>\r\n\r\n    <section class=\"example-section\">\r\n      <label class=\"example-margin\">Align:</label>\r\n      <mat-radio-group [(ngModel)]=\"labelPosition\">\r\n        <mat-radio-button class=\"example-margin\" value=\"after\">After</mat-radio-button>\r\n        <mat-radio-button class=\"example-margin\" value=\"before\">Before</mat-radio-button>\r\n      </mat-radio-group>\r\n    </section>\r\n\r\n    <section class=\"example-section\">\r\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\r\n    </section>\r\n  </mat-card-content>\r\n</mat-card>\r\n\r\n<mat-card class=\"result\">\r\n  <mat-card-content>\r\n    <h2 class=\"example-h2\">Result</h2>\r\n\r\n    <section class=\"example-section\">\r\n      <mat-checkbox\r\n          class=\"example-margin\"\r\n          [(ngModel)]=\"checked\"\r\n          [(indeterminate)]=\"indeterminate\"\r\n          [labelPosition]=\"labelPosition\"\r\n          [disabled]=\"disabled\">\r\n        I'm a checkbox\r\n      </mat-checkbox>\r\n    </section>\r\n  </mat-card-content>\r\n</mat-card>\r\n", styles: [".example-h2 {\r\n  margin: 10px;\r\n}\r\n\r\n.example-section {\r\n  display: flex;\r\n  align-content: center;\r\n  align-items: center;\r\n  height: 60px;\r\n}\r\n\r\n.example-margin {\r\n  margin: 0 10px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatCardModule }, { kind: "component", type: i1.MatCard, selector: "mat-card", inputs: ["appearance"], exportAs: ["matCard"] }, { kind: "directive", type: i1.MatCardContent, selector: "mat-card-content" }, { kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i1$1.MatCheckbox, selector: "mat-checkbox", inputs: ["aria-label", "aria-labelledby", "aria-describedby", "id", "required", "labelPosition", "name", "value", "disableRipple", "tabIndex", "color", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1$2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: MatRadioModule }, { kind: "directive", type: i4.MatRadioGroup, selector: "mat-radio-group", inputs: ["color", "name", "labelPosition", "value", "selected", "disabled", "required"], outputs: ["change"], exportAs: ["matRadioGroup"] }, { kind: "component", type: i4.MatRadioButton, selector: "mat-radio-button", inputs: ["id", "name", "aria-label", "aria-labelledby", "aria-describedby", "disableRipple", "tabIndex", "checked", "value", "labelPosition", "disabled", "required", "color"], outputs: ["change"], exportAs: ["matRadioButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CheckboxConfigurableExample, decorators: [{
            type: Component,
            args: [{ selector: 'checkbox-configurable-example', standalone: true, imports: [MatCardModule, MatCheckboxModule, FormsModule, MatRadioModule], template: "<mat-card>\r\n  <mat-card-content>\r\n    <h2 class=\"example-h2\">Checkbox configuration</h2>\r\n\r\n    <section class=\"example-section\">\r\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked</mat-checkbox>\r\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"indeterminate\">Indeterminate</mat-checkbox>\r\n    </section>\r\n\r\n    <section class=\"example-section\">\r\n      <label class=\"example-margin\">Align:</label>\r\n      <mat-radio-group [(ngModel)]=\"labelPosition\">\r\n        <mat-radio-button class=\"example-margin\" value=\"after\">After</mat-radio-button>\r\n        <mat-radio-button class=\"example-margin\" value=\"before\">Before</mat-radio-button>\r\n      </mat-radio-group>\r\n    </section>\r\n\r\n    <section class=\"example-section\">\r\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\r\n    </section>\r\n  </mat-card-content>\r\n</mat-card>\r\n\r\n<mat-card class=\"result\">\r\n  <mat-card-content>\r\n    <h2 class=\"example-h2\">Result</h2>\r\n\r\n    <section class=\"example-section\">\r\n      <mat-checkbox\r\n          class=\"example-margin\"\r\n          [(ngModel)]=\"checked\"\r\n          [(indeterminate)]=\"indeterminate\"\r\n          [labelPosition]=\"labelPosition\"\r\n          [disabled]=\"disabled\">\r\n        I'm a checkbox\r\n      </mat-checkbox>\r\n    </section>\r\n  </mat-card-content>\r\n</mat-card>\r\n", styles: [".example-h2 {\r\n  margin: 10px;\r\n}\r\n\r\n.example-section {\r\n  display: flex;\r\n  align-content: center;\r\n  align-items: center;\r\n  height: 60px;\r\n}\r\n\r\n.example-margin {\r\n  margin: 0 10px;\r\n}\r\n"] }]
        }] });

/**
 * @title Testing with MatCheckboxHarness
 */
class CheckboxHarnessExample {
    constructor() {
        this.disabled = true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CheckboxHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: CheckboxHarnessExample, isStandalone: true, selector: "checkbox-harness-example", ngImport: i0, template: "<mat-checkbox\r\n    required\r\n    [checked]=\"true\"\r\n    name=\"first-name\"\r\n    value=\"first-value\"\r\n    aria-label=\"First checkbox\">\r\n  First\r\n</mat-checkbox>\r\n<mat-checkbox indeterminate=\"true\" [disabled]=\"disabled\" aria-label=\"Second checkbox\">\r\n  Second\r\n</mat-checkbox>\r\n", dependencies: [{ kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i1$1.MatCheckbox, selector: "mat-checkbox", inputs: ["aria-label", "aria-labelledby", "aria-describedby", "id", "required", "labelPosition", "name", "value", "disableRipple", "tabIndex", "color", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CheckboxHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'checkbox-harness-example', standalone: true, imports: [MatCheckboxModule], template: "<mat-checkbox\r\n    required\r\n    [checked]=\"true\"\r\n    name=\"first-name\"\r\n    value=\"first-value\"\r\n    aria-label=\"First checkbox\">\r\n  First\r\n</mat-checkbox>\r\n<mat-checkbox indeterminate=\"true\" [disabled]=\"disabled\" aria-label=\"Second checkbox\">\r\n  Second\r\n</mat-checkbox>\r\n" }]
        }] });

/**
 * @title Basic checkboxes
 */
class CheckboxOverviewExample {
    constructor() {
        this.task = {
            name: 'Indeterminate',
            completed: false,
            color: 'primary',
            subtasks: [
                { name: 'Primary', completed: false, color: 'primary' },
                { name: 'Accent', completed: false, color: 'accent' },
                { name: 'Warn', completed: false, color: 'warn' },
            ],
        };
        this.allComplete = false;
    }
    updateAllComplete() {
        this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
    }
    someComplete() {
        if (this.task.subtasks == null) {
            return false;
        }
        return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
    }
    setAll(completed) {
        this.allComplete = completed;
        if (this.task.subtasks == null) {
            return;
        }
        this.task.subtasks.forEach(t => (t.completed = completed));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CheckboxOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: CheckboxOverviewExample, isStandalone: true, selector: "checkbox-overview-example", ngImport: i0, template: "<section class=\"example-section\">\r\n  <mat-checkbox class=\"example-margin\">Check me!</mat-checkbox>\r\n  <mat-checkbox class=\"example-margin\" [disabled]=\"true\">Disabled</mat-checkbox>\r\n</section>\r\n\r\n<section class=\"example-section\">\r\n  <span class=\"example-list-section\">\r\n    <mat-checkbox class=\"example-margin\"\r\n                  [checked]=\"allComplete\"\r\n                  [color]=\"task.color\"\r\n                  [indeterminate]=\"someComplete()\"\r\n                  (change)=\"setAll($event.checked)\">\r\n      {{task.name}}\r\n    </mat-checkbox>\r\n  </span>\r\n  <span class=\"example-list-section\">\r\n    <ul>\r\n      @for (subtask of task.subtasks; track subtask) {\r\n        <li>\r\n          <mat-checkbox [(ngModel)]=\"subtask.completed\"\r\n                        [color]=\"subtask.color\"\r\n                        (ngModelChange)=\"updateAllComplete()\">\r\n            {{subtask.name}}\r\n          </mat-checkbox>\r\n        </li>\r\n      }\r\n    </ul>\r\n  </span>\r\n</section>\r\n", styles: [".example-section {\r\n  margin: 12px 0;\r\n}\r\n\r\n.example-margin {\r\n  margin: 0 12px;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n  margin-top: 4px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i1$1.MatCheckbox, selector: "mat-checkbox", inputs: ["aria-label", "aria-labelledby", "aria-describedby", "id", "required", "labelPosition", "name", "value", "disableRipple", "tabIndex", "color", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1$2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CheckboxOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'checkbox-overview-example', standalone: true, imports: [MatCheckboxModule, FormsModule], template: "<section class=\"example-section\">\r\n  <mat-checkbox class=\"example-margin\">Check me!</mat-checkbox>\r\n  <mat-checkbox class=\"example-margin\" [disabled]=\"true\">Disabled</mat-checkbox>\r\n</section>\r\n\r\n<section class=\"example-section\">\r\n  <span class=\"example-list-section\">\r\n    <mat-checkbox class=\"example-margin\"\r\n                  [checked]=\"allComplete\"\r\n                  [color]=\"task.color\"\r\n                  [indeterminate]=\"someComplete()\"\r\n                  (change)=\"setAll($event.checked)\">\r\n      {{task.name}}\r\n    </mat-checkbox>\r\n  </span>\r\n  <span class=\"example-list-section\">\r\n    <ul>\r\n      @for (subtask of task.subtasks; track subtask) {\r\n        <li>\r\n          <mat-checkbox [(ngModel)]=\"subtask.completed\"\r\n                        [color]=\"subtask.color\"\r\n                        (ngModelChange)=\"updateAllComplete()\">\r\n            {{subtask.name}}\r\n          </mat-checkbox>\r\n        </li>\r\n      }\r\n    </ul>\r\n  </span>\r\n</section>\r\n", styles: [".example-section {\r\n  margin: 12px 0;\r\n}\r\n\r\n.example-margin {\r\n  margin: 0 12px;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n  margin-top: 4px;\r\n}\r\n"] }]
        }] });

/** @title Checkboxes with reactive forms */
class CheckboxReactiveFormsExample {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.toppings = this._formBuilder.group({
            pepperoni: false,
            extracheese: false,
            mushroom: false,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CheckboxReactiveFormsExample, deps: [{ token: i1$2.FormBuilder }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: CheckboxReactiveFormsExample, isStandalone: true, selector: "checkbox-reactive-forms-example", ngImport: i0, template: "<section class=\"example-section\" [formGroup]=\"toppings\">\r\n  <h4>Select your toppings:</h4>\r\n  <p><mat-checkbox formControlName=\"pepperoni\">Pepperoni</mat-checkbox></p>\r\n  <p><mat-checkbox formControlName=\"extracheese\">Extra Cheese</mat-checkbox></p>\r\n  <p><mat-checkbox formControlName=\"mushroom\">Mushroom</mat-checkbox></p>\r\n</section>\r\n\r\n<section class=\"example-section\" [formGroup]=\"toppings\">\r\n  <h4>You chose:</h4>\r\n  {{toppings.value | json}}\r\n</section>\r\n", styles: [".example-section {\r\n  margin: 12px 0;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1$2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1$2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1$2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i1$1.MatCheckbox, selector: "mat-checkbox", inputs: ["aria-label", "aria-labelledby", "aria-describedby", "id", "required", "labelPosition", "name", "value", "disableRipple", "tabIndex", "color", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { kind: "pipe", type: JsonPipe, name: "json" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CheckboxReactiveFormsExample, decorators: [{
            type: Component,
            args: [{ selector: 'checkbox-reactive-forms-example', standalone: true, imports: [FormsModule, ReactiveFormsModule, MatCheckboxModule, JsonPipe], template: "<section class=\"example-section\" [formGroup]=\"toppings\">\r\n  <h4>Select your toppings:</h4>\r\n  <p><mat-checkbox formControlName=\"pepperoni\">Pepperoni</mat-checkbox></p>\r\n  <p><mat-checkbox formControlName=\"extracheese\">Extra Cheese</mat-checkbox></p>\r\n  <p><mat-checkbox formControlName=\"mushroom\">Mushroom</mat-checkbox></p>\r\n</section>\r\n\r\n<section class=\"example-section\" [formGroup]=\"toppings\">\r\n  <h4>You chose:</h4>\r\n  {{toppings.value | json}}\r\n</section>\r\n", styles: [".example-section {\r\n  margin: 12px 0;\r\n}\r\n"] }]
        }], ctorParameters: () => [{ type: i1$2.FormBuilder }] });

/**
 * Generated bundle index. Do not edit.
 */

export { CheckboxConfigurableExample, CheckboxHarnessExample, CheckboxOverviewExample, CheckboxReactiveFormsExample };
//# sourceMappingURL=checkbox.mjs.map
