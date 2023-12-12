import * as i0 from '@angular/core';
import { Component } from '@angular/core';
import * as i1 from '@angular/material/button-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import * as i2 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i2$1 from '@angular/forms';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 * @title Button toggle appearance
 */
class ButtonToggleAppearanceExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ButtonToggleAppearanceExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: ButtonToggleAppearanceExample, isStandalone: true, selector: "button-toggle-appearance-example", ngImport: i0, template: "<p>\r\n  Default appearance:\r\n  <mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\">\r\n    <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\r\n    <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\r\n    <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\r\n  </mat-button-toggle-group>\r\n</p>\r\n\r\n<p>\r\n  Legacy appearance:\r\n  <mat-button-toggle-group appearance=\"legacy\" name=\"fontStyle\" aria-label=\"Font Style\">\r\n    <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\r\n    <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\r\n    <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\r\n  </mat-button-toggle-group>\r\n</p>\r\n", styles: ["mat-button-toggle-group {\r\n  margin-left: 12px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatButtonToggleModule }, { kind: "directive", type: i1.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { kind: "component", type: i1.MatButtonToggle, selector: "mat-button-toggle", inputs: ["aria-label", "aria-labelledby", "id", "name", "value", "tabIndex", "disableRipple", "appearance", "checked", "disabled"], outputs: ["change"], exportAs: ["matButtonToggle"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ButtonToggleAppearanceExample, decorators: [{
            type: Component,
            args: [{ selector: 'button-toggle-appearance-example', standalone: true, imports: [MatButtonToggleModule], template: "<p>\r\n  Default appearance:\r\n  <mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\">\r\n    <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\r\n    <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\r\n    <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\r\n  </mat-button-toggle-group>\r\n</p>\r\n\r\n<p>\r\n  Legacy appearance:\r\n  <mat-button-toggle-group appearance=\"legacy\" name=\"fontStyle\" aria-label=\"Font Style\">\r\n    <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\r\n    <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\r\n    <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\r\n  </mat-button-toggle-group>\r\n</p>\r\n", styles: ["mat-button-toggle-group {\r\n  margin-left: 12px;\r\n}\r\n"] }]
        }] });

/**
 * @title Exclusive selection
 */
class ButtonToggleExclusiveExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ButtonToggleExclusiveExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: ButtonToggleExclusiveExample, isStandalone: true, selector: "button-toggle-exclusive-example", ngImport: i0, template: "<mat-button-toggle-group #group=\"matButtonToggleGroup\">\r\n  <mat-button-toggle value=\"left\" aria-label=\"Text align left\">\r\n    <mat-icon>format_align_left</mat-icon>\r\n  </mat-button-toggle>\r\n  <mat-button-toggle value=\"center\" aria-label=\"Text align center\">\r\n    <mat-icon>format_align_center</mat-icon>\r\n  </mat-button-toggle>\r\n  <mat-button-toggle value=\"right\" aria-label=\"Text align right\">\r\n    <mat-icon>format_align_right</mat-icon>\r\n  </mat-button-toggle>\r\n  <mat-button-toggle value=\"justify\" disabled aria-label=\"Text align justify\">\r\n    <mat-icon>format_align_justify</mat-icon>\r\n  </mat-button-toggle>\r\n</mat-button-toggle-group>\r\n<div class=\"example-selected-value\">Selected value: {{group.value}}</div>\r\n", styles: [".example-selected-value {\r\n  margin: 15px 0;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatButtonToggleModule }, { kind: "directive", type: i1.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { kind: "component", type: i1.MatButtonToggle, selector: "mat-button-toggle", inputs: ["aria-label", "aria-labelledby", "id", "name", "value", "tabIndex", "disableRipple", "appearance", "checked", "disabled"], outputs: ["change"], exportAs: ["matButtonToggle"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ButtonToggleExclusiveExample, decorators: [{
            type: Component,
            args: [{ selector: 'button-toggle-exclusive-example', standalone: true, imports: [MatButtonToggleModule, MatIconModule], template: "<mat-button-toggle-group #group=\"matButtonToggleGroup\">\r\n  <mat-button-toggle value=\"left\" aria-label=\"Text align left\">\r\n    <mat-icon>format_align_left</mat-icon>\r\n  </mat-button-toggle>\r\n  <mat-button-toggle value=\"center\" aria-label=\"Text align center\">\r\n    <mat-icon>format_align_center</mat-icon>\r\n  </mat-button-toggle>\r\n  <mat-button-toggle value=\"right\" aria-label=\"Text align right\">\r\n    <mat-icon>format_align_right</mat-icon>\r\n  </mat-button-toggle>\r\n  <mat-button-toggle value=\"justify\" disabled aria-label=\"Text align justify\">\r\n    <mat-icon>format_align_justify</mat-icon>\r\n  </mat-button-toggle>\r\n</mat-button-toggle-group>\r\n<div class=\"example-selected-value\">Selected value: {{group.value}}</div>\r\n", styles: [".example-selected-value {\r\n  margin: 15px 0;\r\n}\r\n"] }]
        }] });

/**
 * @title Basic button-toggles
 */
class ButtonToggleOverviewExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ButtonToggleOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: ButtonToggleOverviewExample, isStandalone: true, selector: "button-toggle-overview-example", ngImport: i0, template: "<mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\">\r\n  <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\r\n  <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\r\n  <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\r\n</mat-button-toggle-group>\r\n", dependencies: [{ kind: "ngmodule", type: MatButtonToggleModule }, { kind: "directive", type: i1.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { kind: "component", type: i1.MatButtonToggle, selector: "mat-button-toggle", inputs: ["aria-label", "aria-labelledby", "id", "name", "value", "tabIndex", "disableRipple", "appearance", "checked", "disabled"], outputs: ["change"], exportAs: ["matButtonToggle"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ButtonToggleOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'button-toggle-overview-example', standalone: true, imports: [MatButtonToggleModule], template: "<mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\">\r\n  <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\r\n  <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\r\n  <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\r\n</mat-button-toggle-group>\r\n" }]
        }] });

/**
 * @title Testing with MatButtonToggleHarness
 */
class ButtonToggleHarnessExample {
    constructor() {
        this.disabled = false;
        this.appearance = 'standard';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ButtonToggleHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: ButtonToggleHarnessExample, isStandalone: true, selector: "button-toggle-harness-example", ngImport: i0, template: "<mat-button-toggle-group [disabled]=\"disabled\" [appearance]=\"appearance\">\r\n  <mat-button-toggle value=\"1\">One</mat-button-toggle>\r\n  <mat-button-toggle value=\"2\">Two</mat-button-toggle>\r\n</mat-button-toggle-group>\r\n", dependencies: [{ kind: "ngmodule", type: MatButtonToggleModule }, { kind: "directive", type: i1.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { kind: "component", type: i1.MatButtonToggle, selector: "mat-button-toggle", inputs: ["aria-label", "aria-labelledby", "id", "name", "value", "tabIndex", "disableRipple", "appearance", "checked", "disabled"], outputs: ["change"], exportAs: ["matButtonToggle"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ButtonToggleHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'button-toggle-harness-example', standalone: true, imports: [MatButtonToggleModule], template: "<mat-button-toggle-group [disabled]=\"disabled\" [appearance]=\"appearance\">\r\n  <mat-button-toggle value=\"1\">One</mat-button-toggle>\r\n  <mat-button-toggle value=\"2\">Two</mat-button-toggle>\r\n</mat-button-toggle-group>\r\n" }]
        }] });

/**
 * @title Button-toggles with forms
 */
class ButtonToggleFormsExample {
    constructor() {
        this.fontStyleControl = new FormControl('');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ButtonToggleFormsExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: ButtonToggleFormsExample, isStandalone: true, selector: "button-toggle-forms-example", ngImport: i0, template: "<section>\r\n  <h4>Button Toggle inside of a Template-driven form</h4>\r\n  <mat-button-toggle-group [(ngModel)]=\"fontStyle\" aria-label=\"Font Style\">\r\n    <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\r\n    <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\r\n    <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\r\n  </mat-button-toggle-group>\r\n  <p>Chosen value is {{fontStyle}}</p>\r\n</section>\r\n\r\n<section>\r\n  <h4>Button Toggle inside of a Reactive form</h4>\r\n  <mat-button-toggle-group [formControl]=\"fontStyleControl\" aria-label=\"Font Style\">\r\n    <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\r\n    <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\r\n    <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\r\n  </mat-button-toggle-group>\r\n  <p>Chosen value is {{fontStyleControl.value}}</p>\r\n</section>\r\n\r\n", dependencies: [{ kind: "ngmodule", type: MatButtonToggleModule }, { kind: "directive", type: i1.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { kind: "component", type: i1.MatButtonToggle, selector: "mat-button-toggle", inputs: ["aria-label", "aria-labelledby", "id", "name", "value", "tabIndex", "disableRipple", "appearance", "checked", "disabled"], outputs: ["change"], exportAs: ["matButtonToggle"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2$1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i2$1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ButtonToggleFormsExample, decorators: [{
            type: Component,
            args: [{ selector: 'button-toggle-forms-example', standalone: true, imports: [MatButtonToggleModule, FormsModule, ReactiveFormsModule], template: "<section>\r\n  <h4>Button Toggle inside of a Template-driven form</h4>\r\n  <mat-button-toggle-group [(ngModel)]=\"fontStyle\" aria-label=\"Font Style\">\r\n    <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\r\n    <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\r\n    <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\r\n  </mat-button-toggle-group>\r\n  <p>Chosen value is {{fontStyle}}</p>\r\n</section>\r\n\r\n<section>\r\n  <h4>Button Toggle inside of a Reactive form</h4>\r\n  <mat-button-toggle-group [formControl]=\"fontStyleControl\" aria-label=\"Font Style\">\r\n    <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\r\n    <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\r\n    <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\r\n  </mat-button-toggle-group>\r\n  <p>Chosen value is {{fontStyleControl.value}}</p>\r\n</section>\r\n\r\n" }]
        }] });

/**
 * @title Button toggle selection mode
 */
class ButtonToggleModeExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ButtonToggleModeExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: ButtonToggleModeExample, isStandalone: true, selector: "button-toggle-mode-example", ngImport: i0, template: "<h3>Single selection</h3>\r\n<mat-button-toggle-group name=\"favoriteColor\" aria-label=\"Favorite Color\">\r\n  <mat-button-toggle value=\"red\">Red</mat-button-toggle>\r\n  <mat-button-toggle value=\"green\">Green</mat-button-toggle>\r\n  <mat-button-toggle value=\"blue\">Blue</mat-button-toggle>\r\n</mat-button-toggle-group>\r\n\r\n<h3>Multiple selection</h3>\r\n<mat-button-toggle-group name=\"ingredients\" aria-label=\"Ingredients\" multiple>\r\n  <mat-button-toggle value=\"flour\">Flour</mat-button-toggle>\r\n  <mat-button-toggle value=\"eggs\">Eggs</mat-button-toggle>\r\n  <mat-button-toggle value=\"sugar\">Sugar</mat-button-toggle>\r\n</mat-button-toggle-group>\r\n", dependencies: [{ kind: "ngmodule", type: MatButtonToggleModule }, { kind: "directive", type: i1.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { kind: "component", type: i1.MatButtonToggle, selector: "mat-button-toggle", inputs: ["aria-label", "aria-labelledby", "id", "name", "value", "tabIndex", "disableRipple", "appearance", "checked", "disabled"], outputs: ["change"], exportAs: ["matButtonToggle"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ButtonToggleModeExample, decorators: [{
            type: Component,
            args: [{ selector: 'button-toggle-mode-example', standalone: true, imports: [MatButtonToggleModule], template: "<h3>Single selection</h3>\r\n<mat-button-toggle-group name=\"favoriteColor\" aria-label=\"Favorite Color\">\r\n  <mat-button-toggle value=\"red\">Red</mat-button-toggle>\r\n  <mat-button-toggle value=\"green\">Green</mat-button-toggle>\r\n  <mat-button-toggle value=\"blue\">Blue</mat-button-toggle>\r\n</mat-button-toggle-group>\r\n\r\n<h3>Multiple selection</h3>\r\n<mat-button-toggle-group name=\"ingredients\" aria-label=\"Ingredients\" multiple>\r\n  <mat-button-toggle value=\"flour\">Flour</mat-button-toggle>\r\n  <mat-button-toggle value=\"eggs\">Eggs</mat-button-toggle>\r\n  <mat-button-toggle value=\"sugar\">Sugar</mat-button-toggle>\r\n</mat-button-toggle-group>\r\n" }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonToggleAppearanceExample, ButtonToggleExclusiveExample, ButtonToggleFormsExample, ButtonToggleHarnessExample, ButtonToggleModeExample, ButtonToggleOverviewExample };
//# sourceMappingURL=button-toggle.mjs.map
