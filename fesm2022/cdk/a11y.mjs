import * as i1 from '@angular/cdk/a11y';
import { A11yModule } from '@angular/cdk/a11y';
import * as i0 from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import * as i3 from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import * as i2 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i4 from '@angular/material/core';

/** @title Monitoring focus with FocusMonitor */
class FocusMonitorDirectivesExample {
    constructor(_ngZone, _cdr) {
        this._ngZone = _ngZone;
        this._cdr = _cdr;
        this.elementOrigin = this.formatOrigin(null);
        this.subtreeOrigin = this.formatOrigin(null);
    }
    formatOrigin(origin) {
        return origin ? origin + ' focused' : 'blurred';
    }
    // Workaround for the fact that (cdkFocusChange) emits outside NgZone.
    markForCheck() {
        this._ngZone.run(() => this._cdr.markForCheck());
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FocusMonitorDirectivesExample, deps: [{ token: i0.NgZone }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: FocusMonitorDirectivesExample, isStandalone: true, selector: "focus-monitor-directives-example", ngImport: i0, template: "<div class=\"example-focus-monitor\">\r\n  <button cdkMonitorSubtreeFocus\r\n          (cdkFocusChange)=\"elementOrigin = formatOrigin($event); markForCheck()\">\r\n    Focus Monitored Element ({{elementOrigin}})\r\n  </button>\r\n</div>\r\n\r\n<div class=\"example-focus-monitor\">\r\n  <div cdkMonitorSubtreeFocus\r\n       (cdkFocusChange)=\"subtreeOrigin = formatOrigin($event); markForCheck()\">\r\n    <p>Focus Monitored Subtree ({{subtreeOrigin}})</p>\r\n    <button>Child Button 1</button>\r\n    <button>Child Button 2</button>\r\n  </div>\r\n</div>\r\n", styles: [".example-focus-monitor {\r\n  padding: 20px;\r\n}\r\n\r\n.example-focus-monitor .cdk-mouse-focused {\r\n  background: rgba(255, 0, 0, 0.5);\r\n}\r\n\r\n.example-focus-monitor .cdk-keyboard-focused {\r\n  background: rgba(0, 255, 0, 0.5);\r\n}\r\n\r\n.example-focus-monitor .cdk-touch-focused {\r\n  background: rgba(0, 0, 255, 0.5);\r\n}\r\n\r\n.example-focus-monitor .cdk-program-focused {\r\n  background: rgba(255, 0, 255, 0.5);\r\n}\r\n\r\nbutton {\r\n  margin-right: 12px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: A11yModule }, { kind: "directive", type: i1.CdkMonitorFocus, selector: "[cdkMonitorElementFocus], [cdkMonitorSubtreeFocus]", outputs: ["cdkFocusChange"], exportAs: ["cdkMonitorFocus"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FocusMonitorDirectivesExample, decorators: [{
            type: Component,
            args: [{ selector: 'focus-monitor-directives-example', standalone: true, imports: [A11yModule], template: "<div class=\"example-focus-monitor\">\r\n  <button cdkMonitorSubtreeFocus\r\n          (cdkFocusChange)=\"elementOrigin = formatOrigin($event); markForCheck()\">\r\n    Focus Monitored Element ({{elementOrigin}})\r\n  </button>\r\n</div>\r\n\r\n<div class=\"example-focus-monitor\">\r\n  <div cdkMonitorSubtreeFocus\r\n       (cdkFocusChange)=\"subtreeOrigin = formatOrigin($event); markForCheck()\">\r\n    <p>Focus Monitored Subtree ({{subtreeOrigin}})</p>\r\n    <button>Child Button 1</button>\r\n    <button>Child Button 2</button>\r\n  </div>\r\n</div>\r\n", styles: [".example-focus-monitor {\r\n  padding: 20px;\r\n}\r\n\r\n.example-focus-monitor .cdk-mouse-focused {\r\n  background: rgba(255, 0, 0, 0.5);\r\n}\r\n\r\n.example-focus-monitor .cdk-keyboard-focused {\r\n  background: rgba(0, 255, 0, 0.5);\r\n}\r\n\r\n.example-focus-monitor .cdk-touch-focused {\r\n  background: rgba(0, 0, 255, 0.5);\r\n}\r\n\r\n.example-focus-monitor .cdk-program-focused {\r\n  background: rgba(255, 0, 255, 0.5);\r\n}\r\n\r\nbutton {\r\n  margin-right: 12px;\r\n}\r\n"] }]
        }], ctorParameters: () => [{ type: i0.NgZone }, { type: i0.ChangeDetectorRef }] });

/** @title Focusing with a specific FocusOrigin */
class FocusMonitorFocusViaExample {
    constructor(focusMonitor, _cdr, _ngZone) {
        this.focusMonitor = focusMonitor;
        this._cdr = _cdr;
        this._ngZone = _ngZone;
        this.origin = this.formatOrigin(null);
    }
    ngAfterViewInit() {
        this.focusMonitor.monitor(this.monitoredEl).subscribe(origin => this._ngZone.run(() => {
            this.origin = this.formatOrigin(origin);
            this._cdr.markForCheck();
        }));
    }
    ngOnDestroy() {
        this.focusMonitor.stopMonitoring(this.monitoredEl);
    }
    formatOrigin(origin) {
        return origin ? origin + ' focused' : 'blurred';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FocusMonitorFocusViaExample, deps: [{ token: i1.FocusMonitor }, { token: i0.ChangeDetectorRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: FocusMonitorFocusViaExample, isStandalone: true, selector: "focus-monitor-focus-via-example", viewQueries: [{ propertyName: "monitoredEl", first: true, predicate: ["monitored"], descendants: true }], ngImport: i0, template: "<div class=\"example-focus-monitor\">\r\n  <button #monitored>1. Focus Monitored Element ({{origin}})</button>\r\n  <button #unmonitored>2. Not Monitored</button>\r\n</div>\r\n\r\n<mat-form-field>\r\n  <mat-label>Simulated focus origin</mat-label>\r\n  <mat-select #simulatedOrigin value=\"mouse\">\r\n    <mat-option value=\"mouse\">Mouse</mat-option>\r\n    <mat-option value=\"keyboard\">Keyboard</mat-option>\r\n    <mat-option value=\"touch\">Touch</mat-option>\r\n    <mat-option value=\"program\">Programmatic</mat-option>\r\n  </mat-select>\r\n</mat-form-field>\r\n\r\n<button (click)=\"focusMonitor.focusVia(monitored, simulatedOrigin.value)\">\r\n  Focus button #1\r\n</button>\r\n<button (click)=\"focusMonitor.focusVia(unmonitored, simulatedOrigin.value)\">\r\n  Focus button #2\r\n</button>\r\n", styles: [".example-focus-monitor {\r\n  padding: 20px;\r\n}\r\n\r\n.example-focus-monitor .cdk-mouse-focused {\r\n  background: rgba(255, 0, 0, 0.5);\r\n}\r\n\r\n.example-focus-monitor .cdk-keyboard-focused {\r\n  background: rgba(0, 255, 0, 0.5);\r\n}\r\n\r\n.example-focus-monitor .cdk-touch-focused {\r\n  background: rgba(0, 0, 255, 0.5);\r\n}\r\n\r\n.example-focus-monitor .cdk-program-focused {\r\n  background: rgba(255, 0, 255, 0.5);\r\n}\r\n\r\n.example-focus-monitor button:focus {\r\n  box-shadow: 0 0 30px cyan;\r\n}\r\n\r\nmat-form-field,\r\nbutton {\r\n  margin-right: 12px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i3.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i4.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FocusMonitorFocusViaExample, decorators: [{
            type: Component,
            args: [{ selector: 'focus-monitor-focus-via-example', standalone: true, imports: [MatFormFieldModule, MatSelectModule], template: "<div class=\"example-focus-monitor\">\r\n  <button #monitored>1. Focus Monitored Element ({{origin}})</button>\r\n  <button #unmonitored>2. Not Monitored</button>\r\n</div>\r\n\r\n<mat-form-field>\r\n  <mat-label>Simulated focus origin</mat-label>\r\n  <mat-select #simulatedOrigin value=\"mouse\">\r\n    <mat-option value=\"mouse\">Mouse</mat-option>\r\n    <mat-option value=\"keyboard\">Keyboard</mat-option>\r\n    <mat-option value=\"touch\">Touch</mat-option>\r\n    <mat-option value=\"program\">Programmatic</mat-option>\r\n  </mat-select>\r\n</mat-form-field>\r\n\r\n<button (click)=\"focusMonitor.focusVia(monitored, simulatedOrigin.value)\">\r\n  Focus button #1\r\n</button>\r\n<button (click)=\"focusMonitor.focusVia(unmonitored, simulatedOrigin.value)\">\r\n  Focus button #2\r\n</button>\r\n", styles: [".example-focus-monitor {\r\n  padding: 20px;\r\n}\r\n\r\n.example-focus-monitor .cdk-mouse-focused {\r\n  background: rgba(255, 0, 0, 0.5);\r\n}\r\n\r\n.example-focus-monitor .cdk-keyboard-focused {\r\n  background: rgba(0, 255, 0, 0.5);\r\n}\r\n\r\n.example-focus-monitor .cdk-touch-focused {\r\n  background: rgba(0, 0, 255, 0.5);\r\n}\r\n\r\n.example-focus-monitor .cdk-program-focused {\r\n  background: rgba(255, 0, 255, 0.5);\r\n}\r\n\r\n.example-focus-monitor button:focus {\r\n  box-shadow: 0 0 30px cyan;\r\n}\r\n\r\nmat-form-field,\r\nbutton {\r\n  margin-right: 12px;\r\n}\r\n"] }]
        }], ctorParameters: () => [{ type: i1.FocusMonitor }, { type: i0.ChangeDetectorRef }, { type: i0.NgZone }], propDecorators: { monitoredEl: [{
                type: ViewChild,
                args: ['monitored']
            }] } });

/** @title Monitoring focus with FocusMonitor */
class FocusMonitorOverviewExample {
    constructor(_focusMonitor, _cdr, _ngZone) {
        this._focusMonitor = _focusMonitor;
        this._cdr = _cdr;
        this._ngZone = _ngZone;
        this.elementOrigin = this.formatOrigin(null);
        this.subtreeOrigin = this.formatOrigin(null);
    }
    ngAfterViewInit() {
        this._focusMonitor.monitor(this.element).subscribe(origin => this._ngZone.run(() => {
            this.elementOrigin = this.formatOrigin(origin);
            this._cdr.markForCheck();
        }));
        this._focusMonitor.monitor(this.subtree, true).subscribe(origin => this._ngZone.run(() => {
            this.subtreeOrigin = this.formatOrigin(origin);
            this._cdr.markForCheck();
        }));
    }
    ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this.element);
        this._focusMonitor.stopMonitoring(this.subtree);
    }
    formatOrigin(origin) {
        return origin ? origin + ' focused' : 'blurred';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FocusMonitorOverviewExample, deps: [{ token: i1.FocusMonitor }, { token: i0.ChangeDetectorRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: FocusMonitorOverviewExample, isStandalone: true, selector: "focus-monitor-overview-example", viewQueries: [{ propertyName: "element", first: true, predicate: ["element"], descendants: true }, { propertyName: "subtree", first: true, predicate: ["subtree"], descendants: true }], ngImport: i0, template: "<div class=\"example-focus-monitor\">\r\n  <button #element>Focus Monitored Element ({{elementOrigin}})</button>\r\n</div>\r\n\r\n<div class=\"example-focus-monitor\">\r\n  <div #subtree>\r\n    <p>Focus Monitored Subtree ({{subtreeOrigin}})</p>\r\n    <button>Child Button 1</button>\r\n    <button>Child Button 2</button>\r\n  </div>\r\n</div>\r\n", styles: [".example-focus-monitor {\r\n  padding: 20px;\r\n}\r\n\r\n.example-focus-monitor .cdk-mouse-focused {\r\n  background: rgba(255, 0, 0, 0.5);\r\n}\r\n\r\n.example-focus-monitor .cdk-keyboard-focused {\r\n  background: rgba(0, 255, 0, 0.5);\r\n}\r\n\r\n.example-focus-monitor .cdk-touch-focused {\r\n  background: rgba(0, 0, 255, 0.5);\r\n}\r\n\r\n.example-focus-monitor .cdk-program-focused {\r\n  background: rgba(255, 0, 255, 0.5);\r\n}\r\n\r\nbutton {\r\n  margin-right: 12px;\r\n}\r\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FocusMonitorOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'focus-monitor-overview-example', standalone: true, template: "<div class=\"example-focus-monitor\">\r\n  <button #element>Focus Monitored Element ({{elementOrigin}})</button>\r\n</div>\r\n\r\n<div class=\"example-focus-monitor\">\r\n  <div #subtree>\r\n    <p>Focus Monitored Subtree ({{subtreeOrigin}})</p>\r\n    <button>Child Button 1</button>\r\n    <button>Child Button 2</button>\r\n  </div>\r\n</div>\r\n", styles: [".example-focus-monitor {\r\n  padding: 20px;\r\n}\r\n\r\n.example-focus-monitor .cdk-mouse-focused {\r\n  background: rgba(255, 0, 0, 0.5);\r\n}\r\n\r\n.example-focus-monitor .cdk-keyboard-focused {\r\n  background: rgba(0, 255, 0, 0.5);\r\n}\r\n\r\n.example-focus-monitor .cdk-touch-focused {\r\n  background: rgba(0, 0, 255, 0.5);\r\n}\r\n\r\n.example-focus-monitor .cdk-program-focused {\r\n  background: rgba(255, 0, 255, 0.5);\r\n}\r\n\r\nbutton {\r\n  margin-right: 12px;\r\n}\r\n"] }]
        }], ctorParameters: () => [{ type: i1.FocusMonitor }, { type: i0.ChangeDetectorRef }, { type: i0.NgZone }], propDecorators: { element: [{
                type: ViewChild,
                args: ['element']
            }], subtree: [{
                type: ViewChild,
                args: ['subtree']
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { FocusMonitorDirectivesExample, FocusMonitorFocusViaExample, FocusMonitorOverviewExample };
//# sourceMappingURL=a11y.mjs.map
