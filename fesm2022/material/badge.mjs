import * as i0 from '@angular/core';
import { Component } from '@angular/core';
import * as i3 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i2 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i1 from '@angular/material/badge';
import { MatBadgeModule } from '@angular/material/badge';

/**
 * @title Badge overview
 */
class BadgeOverviewExample {
    constructor() {
        this.hidden = false;
    }
    toggleBadgeVisibility() {
        this.hidden = !this.hidden;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: BadgeOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: BadgeOverviewExample, isStandalone: true, selector: "badge-overview-example", ngImport: i0, template: "<!-- #docregion mat-badge-overlap -->\r\n  <div matBadge=\"4\" matBadgeOverlap=\"false\" class=\"demo-section\">Text with a badge</div>\r\n<!-- #enddocregion mat-badge-overlap -->\r\n\r\n<!-- #docregion mat-badge-size -->\r\n  <div matBadge=\"1\" matBadgeSize=\"large\" class=\"demo-section\">Text with large badge</div>\r\n<!-- #enddocregion mat-badge-size -->\r\n\r\n<div class=\"demo-section\">\r\n  Button with a badge on the left\r\n<!-- #docregion mat-badge-position -->\r\n  <button mat-raised-button color=\"primary\"\r\n      matBadge=\"8\" matBadgePosition=\"before\" matBadgeColor=\"accent\">\r\n    Action\r\n  </button>\r\n<!-- #enddocregion mat-badge-position -->\r\n</div>\r\n\r\n<div class=\"demo-section\">\r\n    Button toggles badge visibility\r\n<!-- #docregion mat-badge-hide -->\r\n    <button mat-raised-button matBadge=\"7\" [matBadgeHidden]=\"hidden\" (click)=\"toggleBadgeVisibility()\">\r\n        Hide\r\n    </button>\r\n<!-- #enddocregion mat-badge-hide -->\r\n  </div>\r\n\r\n<div class=\"demo-section\">\r\n  Icon with a badge\r\n<!-- #docregion mat-badge-color -->\r\n  <mat-icon matBadge=\"15\" matBadgeColor=\"warn\">home</mat-icon>\r\n<!-- #enddocregion mat-badge-color -->\r\n    <!-- Include text description of the icon's meaning for screen-readers -->\r\n    <span class=\"cdk-visually-hidden\">\r\n      Example with a home icon with overlaid badge showing the number 15\r\n    </span>\r\n</div>\r\n", styles: [":host {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n}\r\n\r\n.demo-section + .demo-section {\r\n  margin-top: 16px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatBadgeModule }, { kind: "directive", type: i1.MatBadge, selector: "[matBadge]", inputs: ["matBadgeColor", "matBadgeOverlap", "matBadgeDisabled", "matBadgePosition", "matBadge", "matBadgeDescription", "matBadgeSize", "matBadgeHidden"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: BadgeOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'badge-overview-example', standalone: true, imports: [MatBadgeModule, MatButtonModule, MatIconModule], template: "<!-- #docregion mat-badge-overlap -->\r\n  <div matBadge=\"4\" matBadgeOverlap=\"false\" class=\"demo-section\">Text with a badge</div>\r\n<!-- #enddocregion mat-badge-overlap -->\r\n\r\n<!-- #docregion mat-badge-size -->\r\n  <div matBadge=\"1\" matBadgeSize=\"large\" class=\"demo-section\">Text with large badge</div>\r\n<!-- #enddocregion mat-badge-size -->\r\n\r\n<div class=\"demo-section\">\r\n  Button with a badge on the left\r\n<!-- #docregion mat-badge-position -->\r\n  <button mat-raised-button color=\"primary\"\r\n      matBadge=\"8\" matBadgePosition=\"before\" matBadgeColor=\"accent\">\r\n    Action\r\n  </button>\r\n<!-- #enddocregion mat-badge-position -->\r\n</div>\r\n\r\n<div class=\"demo-section\">\r\n    Button toggles badge visibility\r\n<!-- #docregion mat-badge-hide -->\r\n    <button mat-raised-button matBadge=\"7\" [matBadgeHidden]=\"hidden\" (click)=\"toggleBadgeVisibility()\">\r\n        Hide\r\n    </button>\r\n<!-- #enddocregion mat-badge-hide -->\r\n  </div>\r\n\r\n<div class=\"demo-section\">\r\n  Icon with a badge\r\n<!-- #docregion mat-badge-color -->\r\n  <mat-icon matBadge=\"15\" matBadgeColor=\"warn\">home</mat-icon>\r\n<!-- #enddocregion mat-badge-color -->\r\n    <!-- Include text description of the icon's meaning for screen-readers -->\r\n    <span class=\"cdk-visually-hidden\">\r\n      Example with a home icon with overlaid badge showing the number 15\r\n    </span>\r\n</div>\r\n", styles: [":host {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n}\r\n\r\n.demo-section + .demo-section {\r\n  margin-top: 16px;\r\n}\r\n"] }]
        }] });

/**
 * @title Testing with MatBadgeHarness
 */
class BadgeHarnessExample {
    constructor() {
        this.simpleContent = 'S';
        this.overlap = true;
        this.disabled = true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: BadgeHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: BadgeHarnessExample, isStandalone: true, selector: "badge-harness-example", ngImport: i0, template: "<button mat-button id=\"simple\" [matBadge]=\"simpleContent\">Simple</button>\r\n<button mat-button\r\n    id=\"overlapping\"\r\n    matBadge=\"O\"\r\n    [matBadgeOverlap]=\"overlap\">Overlapping</button>\r\n<button\r\n    mat-button\r\n    id=\"disabled\"\r\n    matBadge=\"D\"\r\n    [matBadgeDisabled]=\"disabled\">Disabled</button>\r\n", dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatBadgeModule }, { kind: "directive", type: i1.MatBadge, selector: "[matBadge]", inputs: ["matBadgeColor", "matBadgeOverlap", "matBadgeDisabled", "matBadgePosition", "matBadge", "matBadgeDescription", "matBadgeSize", "matBadgeHidden"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: BadgeHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'badge-harness-example', standalone: true, imports: [MatButtonModule, MatBadgeModule], template: "<button mat-button id=\"simple\" [matBadge]=\"simpleContent\">Simple</button>\r\n<button mat-button\r\n    id=\"overlapping\"\r\n    matBadge=\"O\"\r\n    [matBadgeOverlap]=\"overlap\">Overlapping</button>\r\n<button\r\n    mat-button\r\n    id=\"disabled\"\r\n    matBadge=\"D\"\r\n    [matBadgeDisabled]=\"disabled\">Disabled</button>\r\n" }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BadgeHarnessExample, BadgeOverviewExample };
//# sourceMappingURL=badge.mjs.map
