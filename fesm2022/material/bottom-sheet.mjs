import * as i0 from '@angular/core';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import * as i1 from '@angular/material/bottom-sheet';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import * as i3 from '@angular/material/list';
import { MatListModule } from '@angular/material/list';
import * as i2 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';

/**
 * @title Bottom Sheet Overview
 */
class BottomSheetOverviewExample {
    constructor(_bottomSheet) {
        this._bottomSheet = _bottomSheet;
    }
    openBottomSheet() {
        this._bottomSheet.open(BottomSheetOverviewExampleSheet);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: BottomSheetOverviewExample, deps: [{ token: i1.MatBottomSheet }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: BottomSheetOverviewExample, isStandalone: true, selector: "bottom-sheet-overview-example", ngImport: i0, template: "<p>You have received a file called \"cat-picture.jpeg\".</p>\r\n\r\n<button mat-raised-button (click)=\"openBottomSheet()\">Open file</button>\r\n", dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatBottomSheetModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: BottomSheetOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'bottom-sheet-overview-example', standalone: true, imports: [MatButtonModule, MatBottomSheetModule], template: "<p>You have received a file called \"cat-picture.jpeg\".</p>\r\n\r\n<button mat-raised-button (click)=\"openBottomSheet()\">Open file</button>\r\n" }]
        }], ctorParameters: () => [{ type: i1.MatBottomSheet }] });
class BottomSheetOverviewExampleSheet {
    constructor(_bottomSheetRef) {
        this._bottomSheetRef = _bottomSheetRef;
    }
    openLink(event) {
        this._bottomSheetRef.dismiss();
        event.preventDefault();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: BottomSheetOverviewExampleSheet, deps: [{ token: i1.MatBottomSheetRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: BottomSheetOverviewExampleSheet, isStandalone: true, selector: "bottom-sheet-overview-example-sheet", ngImport: i0, template: "<mat-nav-list>\r\n  <a href=\"https://keep.google.com/\" mat-list-item (click)=\"openLink($event)\">\r\n    <span matListItemTitle>Google Keep</span>\r\n    <span matLine>Add to a note</span>\r\n  </a>\r\n\r\n  <a href=\"https://docs.google.com/\" mat-list-item (click)=\"openLink($event)\">\r\n    <span matListItemTitle>Google Docs</span>\r\n    <span matLine>Embed in a document</span>\r\n  </a>\r\n\r\n  <a href=\"https://plus.google.com/\" mat-list-item (click)=\"openLink($event)\">\r\n    <span matListItemTitle>Google Plus</span>\r\n    <span matLine>Share with your friends</span>\r\n  </a>\r\n\r\n  <a href=\"https://hangouts.google.com/\" mat-list-item (click)=\"openLink($event)\">\r\n    <span matListItemTitle>Google Hangouts</span>\r\n    <span matLine>Show to your coworkers</span>\r\n  </a>\r\n</mat-nav-list>\r\n", dependencies: [{ kind: "ngmodule", type: MatListModule }, { kind: "component", type: i3.MatNavList, selector: "mat-nav-list", exportAs: ["matNavList"] }, { kind: "component", type: i3.MatListItem, selector: "mat-list-item, a[mat-list-item], button[mat-list-item]", inputs: ["activated"], exportAs: ["matListItem"] }, { kind: "directive", type: i3.MatListItemTitle, selector: "[matListItemTitle]" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: BottomSheetOverviewExampleSheet, decorators: [{
            type: Component,
            args: [{ selector: 'bottom-sheet-overview-example-sheet', standalone: true, imports: [MatListModule], template: "<mat-nav-list>\r\n  <a href=\"https://keep.google.com/\" mat-list-item (click)=\"openLink($event)\">\r\n    <span matListItemTitle>Google Keep</span>\r\n    <span matLine>Add to a note</span>\r\n  </a>\r\n\r\n  <a href=\"https://docs.google.com/\" mat-list-item (click)=\"openLink($event)\">\r\n    <span matListItemTitle>Google Docs</span>\r\n    <span matLine>Embed in a document</span>\r\n  </a>\r\n\r\n  <a href=\"https://plus.google.com/\" mat-list-item (click)=\"openLink($event)\">\r\n    <span matListItemTitle>Google Plus</span>\r\n    <span matLine>Share with your friends</span>\r\n  </a>\r\n\r\n  <a href=\"https://hangouts.google.com/\" mat-list-item (click)=\"openLink($event)\">\r\n    <span matListItemTitle>Google Hangouts</span>\r\n    <span matLine>Show to your coworkers</span>\r\n  </a>\r\n</mat-nav-list>\r\n" }]
        }], ctorParameters: () => [{ type: i1.MatBottomSheetRef }] });

/**
 * @title Testing with MatBottomSheetHarness
 */
class BottomSheetHarnessExample {
    constructor(bottomSheet) {
        this.bottomSheet = bottomSheet;
    }
    open(config) {
        return this.bottomSheet.open(this.template, config);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: BottomSheetHarnessExample, deps: [{ token: i1.MatBottomSheet }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: BottomSheetHarnessExample, isStandalone: true, selector: "bottom-sheet-harness-example", viewQueries: [{ propertyName: "template", first: true, predicate: TemplateRef, descendants: true }], ngImport: i0, template: "<ng-template>\r\n  Hello from the bottom sheet!\r\n</ng-template>\r\n", dependencies: [{ kind: "ngmodule", type: MatBottomSheetModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: BottomSheetHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'bottom-sheet-harness-example', standalone: true, imports: [MatBottomSheetModule], template: "<ng-template>\r\n  Hello from the bottom sheet!\r\n</ng-template>\r\n" }]
        }], ctorParameters: () => [{ type: i1.MatBottomSheet }], propDecorators: { template: [{
                type: ViewChild,
                args: [TemplateRef]
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { BottomSheetHarnessExample, BottomSheetOverviewExample, BottomSheetOverviewExampleSheet };
//# sourceMappingURL=bottom-sheet.mjs.map
