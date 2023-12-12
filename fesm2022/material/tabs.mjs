import * as i0 from '@angular/core';
import { Component } from '@angular/core';
import * as i1 from '@angular/material/tabs';
import { MatTabsModule } from '@angular/material/tabs';
import { Observable } from 'rxjs';
import { AsyncPipe, DatePipe } from '@angular/common';
import * as i2 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i3 from '@angular/forms';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i5 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i4 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i2$1 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i1$1 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i1$2 from '@angular/material/button-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

/**
 * @title Tab group with aligned labels
 */
class TabGroupAlignExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TabGroupAlignExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: TabGroupAlignExample, isStandalone: true, selector: "tab-group-align-example", ngImport: i0, template: "<!-- #docregion align-start -->\r\n<mat-tab-group mat-stretch-tabs=\"false\" mat-align-tabs=\"start\">\r\n<!-- #enddocregion align-start -->\r\n  <mat-tab label=\"First\">Content 1</mat-tab>\r\n  <mat-tab label=\"Second\">Content 2</mat-tab>\r\n  <mat-tab label=\"Third\">Content 3</mat-tab>\r\n</mat-tab-group>\r\n\r\n<mat-tab-group mat-stretch-tabs=\"false\" mat-align-tabs=\"center\">\r\n  <mat-tab label=\"First\">Content 1</mat-tab>\r\n  <mat-tab label=\"Second\">Content 2</mat-tab>\r\n  <mat-tab label=\"Third\">Content 3</mat-tab>\r\n</mat-tab-group>\r\n\r\n<mat-tab-group mat-stretch-tabs=\"false\" mat-align-tabs=\"end\">\r\n  <mat-tab label=\"First\">Content 1</mat-tab>\r\n  <mat-tab label=\"Second\">Content 2</mat-tab>\r\n  <mat-tab label=\"Third\">Content 3</mat-tab>\r\n</mat-tab-group>\r\n", styles: [".mat-tab-group {\r\n  margin-bottom: 48px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatTabsModule }, { kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled", "label", "aria-label", "aria-labelledby", "labelClass", "bodyClass"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "fitInkBarToContent", "mat-stretch-tabs", "dynamicHeight", "selectedIndex", "headerPosition", "animationDuration", "contentTabIndex", "disablePagination", "disableRipple", "preserveContent", "backgroundColor"], outputs: ["selectedIndexChange", "focusChange", "animationDone", "selectedTabChange"], exportAs: ["matTabGroup"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TabGroupAlignExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-align-example', standalone: true, imports: [MatTabsModule], template: "<!-- #docregion align-start -->\r\n<mat-tab-group mat-stretch-tabs=\"false\" mat-align-tabs=\"start\">\r\n<!-- #enddocregion align-start -->\r\n  <mat-tab label=\"First\">Content 1</mat-tab>\r\n  <mat-tab label=\"Second\">Content 2</mat-tab>\r\n  <mat-tab label=\"Third\">Content 3</mat-tab>\r\n</mat-tab-group>\r\n\r\n<mat-tab-group mat-stretch-tabs=\"false\" mat-align-tabs=\"center\">\r\n  <mat-tab label=\"First\">Content 1</mat-tab>\r\n  <mat-tab label=\"Second\">Content 2</mat-tab>\r\n  <mat-tab label=\"Third\">Content 3</mat-tab>\r\n</mat-tab-group>\r\n\r\n<mat-tab-group mat-stretch-tabs=\"false\" mat-align-tabs=\"end\">\r\n  <mat-tab label=\"First\">Content 1</mat-tab>\r\n  <mat-tab label=\"Second\">Content 2</mat-tab>\r\n  <mat-tab label=\"Third\">Content 3</mat-tab>\r\n</mat-tab-group>\r\n", styles: [".mat-tab-group {\r\n  margin-bottom: 48px;\r\n}\r\n"] }]
        }] });

/**
 * @title Tab group animations
 */
class TabGroupAnimationsExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TabGroupAnimationsExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: TabGroupAnimationsExample, isStandalone: true, selector: "tab-group-animations-example", ngImport: i0, template: "<h3>No animation</h3>\r\n\r\n<mat-tab-group animationDuration=\"0ms\">\r\n  <mat-tab label=\"First\">Content 1</mat-tab>\r\n  <mat-tab label=\"Second\">Content 2</mat-tab>\r\n  <mat-tab label=\"Third\">Content 3</mat-tab>\r\n</mat-tab-group>\r\n\r\n<h3>Very slow animation</h3>\r\n<!-- #docregion slow-animation-duration -->\r\n<mat-tab-group animationDuration=\"2000ms\">\r\n<!-- #enddocregion slow-animation-duration -->\r\n  <mat-tab label=\"First\">Content 1</mat-tab>\r\n  <mat-tab label=\"Second\">Content 2</mat-tab>\r\n  <mat-tab label=\"Third\">Content 3</mat-tab>\r\n</mat-tab-group>\r\n", styles: [".mat-tab-group {\r\n  margin-bottom: 48px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatTabsModule }, { kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled", "label", "aria-label", "aria-labelledby", "labelClass", "bodyClass"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "fitInkBarToContent", "mat-stretch-tabs", "dynamicHeight", "selectedIndex", "headerPosition", "animationDuration", "contentTabIndex", "disablePagination", "disableRipple", "preserveContent", "backgroundColor"], outputs: ["selectedIndexChange", "focusChange", "animationDone", "selectedTabChange"], exportAs: ["matTabGroup"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TabGroupAnimationsExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-animations-example', standalone: true, imports: [MatTabsModule], template: "<h3>No animation</h3>\r\n\r\n<mat-tab-group animationDuration=\"0ms\">\r\n  <mat-tab label=\"First\">Content 1</mat-tab>\r\n  <mat-tab label=\"Second\">Content 2</mat-tab>\r\n  <mat-tab label=\"Third\">Content 3</mat-tab>\r\n</mat-tab-group>\r\n\r\n<h3>Very slow animation</h3>\r\n<!-- #docregion slow-animation-duration -->\r\n<mat-tab-group animationDuration=\"2000ms\">\r\n<!-- #enddocregion slow-animation-duration -->\r\n  <mat-tab label=\"First\">Content 1</mat-tab>\r\n  <mat-tab label=\"Second\">Content 2</mat-tab>\r\n  <mat-tab label=\"Third\">Content 3</mat-tab>\r\n</mat-tab-group>\r\n", styles: [".mat-tab-group {\r\n  margin-bottom: 48px;\r\n}\r\n"] }]
        }] });

/**
 * @title Tab group with asynchronously loading tab contents
 */
class TabGroupAsyncExample {
    constructor() {
        this.asyncTabs = new Observable((observer) => {
            setTimeout(() => {
                observer.next([
                    { label: 'First', content: 'Content 1' },
                    { label: 'Second', content: 'Content 2' },
                    { label: 'Third', content: 'Content 3' },
                ]);
            }, 1000);
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TabGroupAsyncExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: TabGroupAsyncExample, isStandalone: true, selector: "tab-group-async-example", ngImport: i0, template: "@if ((asyncTabs | async) === null) {\r\n  Loading tabs...\r\n}\r\n\r\n<mat-tab-group>\r\n  @for (tab of asyncTabs | async; track tab) {\r\n    <mat-tab>\r\n      <ng-template mat-tab-label>{{tab.label}}</ng-template>\r\n      {{tab.content}}\r\n    </mat-tab>\r\n  }\r\n</mat-tab-group>\r\n", dependencies: [{ kind: "ngmodule", type: MatTabsModule }, { kind: "directive", type: i1.MatTabLabel, selector: "[mat-tab-label], [matTabLabel]" }, { kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled", "label", "aria-label", "aria-labelledby", "labelClass", "bodyClass"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "fitInkBarToContent", "mat-stretch-tabs", "dynamicHeight", "selectedIndex", "headerPosition", "animationDuration", "contentTabIndex", "disablePagination", "disableRipple", "preserveContent", "backgroundColor"], outputs: ["selectedIndexChange", "focusChange", "animationDone", "selectedTabChange"], exportAs: ["matTabGroup"] }, { kind: "pipe", type: AsyncPipe, name: "async" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TabGroupAsyncExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-async-example', standalone: true, imports: [MatTabsModule, AsyncPipe], template: "@if ((asyncTabs | async) === null) {\r\n  Loading tabs...\r\n}\r\n\r\n<mat-tab-group>\r\n  @for (tab of asyncTabs | async; track tab) {\r\n    <mat-tab>\r\n      <ng-template mat-tab-label>{{tab.label}}</ng-template>\r\n      {{tab.content}}\r\n    </mat-tab>\r\n  }\r\n</mat-tab-group>\r\n" }]
        }], ctorParameters: () => [] });

/**
 * @title Basic use of the tab group
 */
class TabGroupBasicExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TabGroupBasicExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: TabGroupBasicExample, isStandalone: true, selector: "tab-group-basic-example", ngImport: i0, template: "<mat-tab-group>\r\n  <mat-tab label=\"First\"> Content 1 </mat-tab>\r\n  <mat-tab label=\"Second\"> Content 2 </mat-tab>\r\n  <mat-tab label=\"Third\"> Content 3 </mat-tab>\r\n</mat-tab-group>\r\n", dependencies: [{ kind: "ngmodule", type: MatTabsModule }, { kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled", "label", "aria-label", "aria-labelledby", "labelClass", "bodyClass"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "fitInkBarToContent", "mat-stretch-tabs", "dynamicHeight", "selectedIndex", "headerPosition", "animationDuration", "contentTabIndex", "disablePagination", "disableRipple", "preserveContent", "backgroundColor"], outputs: ["selectedIndexChange", "focusChange", "animationDone", "selectedTabChange"], exportAs: ["matTabGroup"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TabGroupBasicExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-basic-example', standalone: true, imports: [MatTabsModule], template: "<mat-tab-group>\r\n  <mat-tab label=\"First\"> Content 1 </mat-tab>\r\n  <mat-tab label=\"Second\"> Content 2 </mat-tab>\r\n  <mat-tab label=\"Third\"> Content 3 </mat-tab>\r\n</mat-tab-group>\r\n" }]
        }] });

/**
 * @title Using tabs with a custom label template
 */
class TabGroupCustomLabelExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TabGroupCustomLabelExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: TabGroupCustomLabelExample, isStandalone: true, selector: "tab-group-custom-label-example", ngImport: i0, template: "<mat-tab-group>\r\n  <mat-tab>\r\n<!-- #docregion label-directive -->\r\n    <ng-template mat-tab-label>\r\n      <mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>\r\n      First\r\n    </ng-template>\r\n<!-- #enddocregion label-directive -->\r\n    Content 1\r\n  </mat-tab>\r\n\r\n  <mat-tab>\r\n    <ng-template mat-tab-label>\r\n      <mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>\r\n      Second\r\n    </ng-template>\r\n    Content 2\r\n  </mat-tab>\r\n\r\n  <mat-tab>\r\n    <ng-template mat-tab-label>\r\n      <mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>\r\n      Third\r\n    </ng-template>\r\n\r\n    Content 3\r\n  </mat-tab>\r\n</mat-tab-group>\r\n", styles: [".example-tab-icon {\r\n  margin-right: 8px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatTabsModule }, { kind: "directive", type: i1.MatTabLabel, selector: "[mat-tab-label], [matTabLabel]" }, { kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled", "label", "aria-label", "aria-labelledby", "labelClass", "bodyClass"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "fitInkBarToContent", "mat-stretch-tabs", "dynamicHeight", "selectedIndex", "headerPosition", "animationDuration", "contentTabIndex", "disablePagination", "disableRipple", "preserveContent", "backgroundColor"], outputs: ["selectedIndexChange", "focusChange", "animationDone", "selectedTabChange"], exportAs: ["matTabGroup"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TabGroupCustomLabelExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-custom-label-example', standalone: true, imports: [MatTabsModule, MatIconModule], template: "<mat-tab-group>\r\n  <mat-tab>\r\n<!-- #docregion label-directive -->\r\n    <ng-template mat-tab-label>\r\n      <mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>\r\n      First\r\n    </ng-template>\r\n<!-- #enddocregion label-directive -->\r\n    Content 1\r\n  </mat-tab>\r\n\r\n  <mat-tab>\r\n    <ng-template mat-tab-label>\r\n      <mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>\r\n      Second\r\n    </ng-template>\r\n    Content 2\r\n  </mat-tab>\r\n\r\n  <mat-tab>\r\n    <ng-template mat-tab-label>\r\n      <mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>\r\n      Third\r\n    </ng-template>\r\n\r\n    Content 3\r\n  </mat-tab>\r\n</mat-tab-group>\r\n", styles: [".example-tab-icon {\r\n  margin-right: 8px;\r\n}\r\n"] }]
        }] });

/**
 * @title Tab group with dynamic height based on tab contents
 */
class TabGroupDynamicHeightExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TabGroupDynamicHeightExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: TabGroupDynamicHeightExample, isStandalone: true, selector: "tab-group-dynamic-height-example", ngImport: i0, template: "<!-- #docregion dynamic-height -->\r\n<mat-tab-group dynamicHeight>\r\n<!-- #enddocregion dynamic-height -->\r\n  <mat-tab label=\"Short tab\">\r\n    <div class=\"example-small-box mat-elevation-z4\">\r\n      Small content\r\n    </div>\r\n  </mat-tab>\r\n  <mat-tab label=\"Long tab\">\r\n    <div class=\"example-large-box mat-elevation-z4\">\r\n      Large content\r\n    </div>\r\n  </mat-tab>\r\n</mat-tab-group>\r\n", styles: [".example-small-box, .example-large-box {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: 16px;\r\n  padding: 16px;\r\n  border-radius: 8px;\r\n}\r\n\r\n.example-small-box {\r\n  height: 100px;\r\n  width: 100px;\r\n}\r\n\r\n.example-large-box {\r\n  height: 300px;\r\n  width: 300px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatTabsModule }, { kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled", "label", "aria-label", "aria-labelledby", "labelClass", "bodyClass"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "fitInkBarToContent", "mat-stretch-tabs", "dynamicHeight", "selectedIndex", "headerPosition", "animationDuration", "contentTabIndex", "disablePagination", "disableRipple", "preserveContent", "backgroundColor"], outputs: ["selectedIndexChange", "focusChange", "animationDone", "selectedTabChange"], exportAs: ["matTabGroup"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TabGroupDynamicHeightExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-dynamic-height-example', standalone: true, imports: [MatTabsModule], template: "<!-- #docregion dynamic-height -->\r\n<mat-tab-group dynamicHeight>\r\n<!-- #enddocregion dynamic-height -->\r\n  <mat-tab label=\"Short tab\">\r\n    <div class=\"example-small-box mat-elevation-z4\">\r\n      Small content\r\n    </div>\r\n  </mat-tab>\r\n  <mat-tab label=\"Long tab\">\r\n    <div class=\"example-large-box mat-elevation-z4\">\r\n      Large content\r\n    </div>\r\n  </mat-tab>\r\n</mat-tab-group>\r\n", styles: [".example-small-box, .example-large-box {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: 16px;\r\n  padding: 16px;\r\n  border-radius: 8px;\r\n}\r\n\r\n.example-small-box {\r\n  height: 100px;\r\n  width: 100px;\r\n}\r\n\r\n.example-large-box {\r\n  height: 300px;\r\n  width: 300px;\r\n}\r\n"] }]
        }] });

/**
 * @title Testing with MatTabGroupHarness
 */
class TabGroupHarnessExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TabGroupHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: TabGroupHarnessExample, isStandalone: true, selector: "tab-group-harness-example", ngImport: i0, template: "<mat-tab-group>\r\n  <mat-tab label=\"Profile\" aria-label=\"Profile tab\">\r\n    <span class=\"test-tab-content\">Your personal information</span>\r\n  </mat-tab>\r\n  <mat-tab label=\"Settings\" aria-label=\"Settings tab\">\r\n    <span class=\"test-tab-content\">Privacy settings</span>\r\n  </mat-tab>\r\n  <mat-tab label=\"FAQ\" aria-label=\"FAQ tab\">\r\n    <span class=\"test-tab-content\">How to update profile picture</span>\r\n  </mat-tab>\r\n</mat-tab-group>\r\n", dependencies: [{ kind: "ngmodule", type: MatTabsModule }, { kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled", "label", "aria-label", "aria-labelledby", "labelClass", "bodyClass"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "fitInkBarToContent", "mat-stretch-tabs", "dynamicHeight", "selectedIndex", "headerPosition", "animationDuration", "contentTabIndex", "disablePagination", "disableRipple", "preserveContent", "backgroundColor"], outputs: ["selectedIndexChange", "focusChange", "animationDone", "selectedTabChange"], exportAs: ["matTabGroup"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TabGroupHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-harness-example', standalone: true, imports: [MatTabsModule], template: "<mat-tab-group>\r\n  <mat-tab label=\"Profile\" aria-label=\"Profile tab\">\r\n    <span class=\"test-tab-content\">Your personal information</span>\r\n  </mat-tab>\r\n  <mat-tab label=\"Settings\" aria-label=\"Settings tab\">\r\n    <span class=\"test-tab-content\">Privacy settings</span>\r\n  </mat-tab>\r\n  <mat-tab label=\"FAQ\" aria-label=\"FAQ tab\">\r\n    <span class=\"test-tab-content\">How to update profile picture</span>\r\n  </mat-tab>\r\n</mat-tab-group>\r\n" }]
        }] });

/**
 * @title Tab group with dynamically changing tabs
 */
class TabGroupDynamicExample {
    constructor() {
        this.tabs = ['First', 'Second', 'Third'];
        this.selected = new FormControl(0);
    }
    addTab(selectAfterAdding) {
        this.tabs.push('New');
        if (selectAfterAdding) {
            this.selected.setValue(this.tabs.length - 1);
        }
    }
    removeTab(index) {
        this.tabs.splice(index, 1);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TabGroupDynamicExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: TabGroupDynamicExample, isStandalone: true, selector: "tab-group-dynamic-example", ngImport: i0, template: "<mat-form-field>\r\n  <mat-label>Selected tab index</mat-label>\r\n  <input matInput type=\"number\" [formControl]=\"selected\">\r\n</mat-form-field>\r\n\r\n<div>\r\n  <button mat-raised-button\r\n          class=\"example-add-tab-button\"\r\n          (click)=\"addTab(selectAfterAdding.checked)\">\r\n    Add new tab\r\n  </button>\r\n  <mat-checkbox #selectAfterAdding> Select tab after adding </mat-checkbox>\r\n</div>\r\n\r\n<mat-tab-group [selectedIndex]=\"selected.value\"\r\n               (selectedIndexChange)=\"selected.setValue($event)\">\r\n  @for (tab of tabs; track tab; let index = $index) {\r\n    <mat-tab [label]=\"tab\">\r\n      Contents for {{tab}} tab\r\n\r\n      <button mat-raised-button\r\n              class=\"example-delete-tab-button\"\r\n              [disabled]=\"tabs.length === 1\"\r\n              (click)=\"removeTab(index)\">\r\n        Delete Tab\r\n      </button>\r\n    </mat-tab>\r\n  }\r\n</mat-tab-group>\r\n", styles: [".example-input-label,\r\n.example-add-tab-button,\r\n.example-delete-tab-button {\r\n  margin: 8px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1$1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1$1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2$1.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i3.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i4.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i5.MatCheckbox, selector: "mat-checkbox", inputs: ["aria-label", "aria-labelledby", "aria-describedby", "id", "required", "labelPosition", "name", "value", "disableRipple", "tabIndex", "color", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { kind: "ngmodule", type: MatTabsModule }, { kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled", "label", "aria-label", "aria-labelledby", "labelClass", "bodyClass"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "fitInkBarToContent", "mat-stretch-tabs", "dynamicHeight", "selectedIndex", "headerPosition", "animationDuration", "contentTabIndex", "disablePagination", "disableRipple", "preserveContent", "backgroundColor"], outputs: ["selectedIndexChange", "focusChange", "animationDone", "selectedTabChange"], exportAs: ["matTabGroup"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TabGroupDynamicExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-dynamic-example', standalone: true, imports: [
                        MatFormFieldModule,
                        MatInputModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatButtonModule,
                        MatCheckboxModule,
                        MatTabsModule,
                    ], template: "<mat-form-field>\r\n  <mat-label>Selected tab index</mat-label>\r\n  <input matInput type=\"number\" [formControl]=\"selected\">\r\n</mat-form-field>\r\n\r\n<div>\r\n  <button mat-raised-button\r\n          class=\"example-add-tab-button\"\r\n          (click)=\"addTab(selectAfterAdding.checked)\">\r\n    Add new tab\r\n  </button>\r\n  <mat-checkbox #selectAfterAdding> Select tab after adding </mat-checkbox>\r\n</div>\r\n\r\n<mat-tab-group [selectedIndex]=\"selected.value\"\r\n               (selectedIndexChange)=\"selected.setValue($event)\">\r\n  @for (tab of tabs; track tab; let index = $index) {\r\n    <mat-tab [label]=\"tab\">\r\n      Contents for {{tab}} tab\r\n\r\n      <button mat-raised-button\r\n              class=\"example-delete-tab-button\"\r\n              [disabled]=\"tabs.length === 1\"\r\n              (click)=\"removeTab(index)\">\r\n        Delete Tab\r\n      </button>\r\n    </mat-tab>\r\n  }\r\n</mat-tab-group>\r\n", styles: [".example-input-label,\r\n.example-add-tab-button,\r\n.example-delete-tab-button {\r\n  margin: 8px;\r\n}\r\n"] }]
        }] });

/**
 * @title Tab group with the headers on the bottom
 */
class TabGroupHeaderBelowExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TabGroupHeaderBelowExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: TabGroupHeaderBelowExample, isStandalone: true, selector: "tab-group-header-below-example", ngImport: i0, template: "<mat-tab-group headerPosition=\"below\">\r\n  <mat-tab label=\"First\"> Content 1 </mat-tab>\r\n  <mat-tab label=\"Second\"> Content 2 </mat-tab>\r\n  <mat-tab label=\"Third\"> Content 3 </mat-tab>\r\n</mat-tab-group>\r\n", dependencies: [{ kind: "ngmodule", type: MatTabsModule }, { kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled", "label", "aria-label", "aria-labelledby", "labelClass", "bodyClass"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "fitInkBarToContent", "mat-stretch-tabs", "dynamicHeight", "selectedIndex", "headerPosition", "animationDuration", "contentTabIndex", "disablePagination", "disableRipple", "preserveContent", "backgroundColor"], outputs: ["selectedIndexChange", "focusChange", "animationDone", "selectedTabChange"], exportAs: ["matTabGroup"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TabGroupHeaderBelowExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-header-below-example', standalone: true, imports: [MatTabsModule], template: "<mat-tab-group headerPosition=\"below\">\r\n  <mat-tab label=\"First\"> Content 1 </mat-tab>\r\n  <mat-tab label=\"Second\"> Content 2 </mat-tab>\r\n  <mat-tab label=\"Third\"> Content 3 </mat-tab>\r\n</mat-tab-group>\r\n" }]
        }] });

/**
 * @title Tab group where the tab content is loaded lazily (when activated)
 */
class TabGroupLazyLoadedExample {
    constructor() {
        this.tabLoadTimes = [];
    }
    getTimeLoaded(index) {
        if (!this.tabLoadTimes[index]) {
            this.tabLoadTimes[index] = new Date();
        }
        return this.tabLoadTimes[index];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TabGroupLazyLoadedExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: TabGroupLazyLoadedExample, isStandalone: true, selector: "tab-group-lazy-loaded-example", ngImport: i0, template: "<mat-tab-group>\r\n<!-- #docregion mat-tab-content -->\r\n  <mat-tab label=\"First\">\r\n    <ng-template matTabContent>\r\n      Content 1 - Loaded: {{getTimeLoaded(1) | date:'medium'}}\r\n    </ng-template>\r\n  </mat-tab>\r\n<!-- #enddocregion mat-tab-content -->\r\n  <mat-tab label=\"Second\">\r\n    <ng-template matTabContent>\r\n      Content 2 - Loaded: {{getTimeLoaded(2) | date:'medium'}}\r\n    </ng-template>\r\n  </mat-tab>\r\n  <mat-tab label=\"Third\">\r\n    <ng-template matTabContent>\r\n      Content 3 - Loaded: {{getTimeLoaded(3) | date:'medium'}}\r\n    </ng-template>\r\n  </mat-tab>\r\n</mat-tab-group>\r\n", dependencies: [{ kind: "ngmodule", type: MatTabsModule }, { kind: "directive", type: i1.MatTabContent, selector: "[matTabContent]" }, { kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled", "label", "aria-label", "aria-labelledby", "labelClass", "bodyClass"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "fitInkBarToContent", "mat-stretch-tabs", "dynamicHeight", "selectedIndex", "headerPosition", "animationDuration", "contentTabIndex", "disablePagination", "disableRipple", "preserveContent", "backgroundColor"], outputs: ["selectedIndexChange", "focusChange", "animationDone", "selectedTabChange"], exportAs: ["matTabGroup"] }, { kind: "pipe", type: DatePipe, name: "date" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TabGroupLazyLoadedExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-lazy-loaded-example', standalone: true, imports: [MatTabsModule, DatePipe], template: "<mat-tab-group>\r\n<!-- #docregion mat-tab-content -->\r\n  <mat-tab label=\"First\">\r\n    <ng-template matTabContent>\r\n      Content 1 - Loaded: {{getTimeLoaded(1) | date:'medium'}}\r\n    </ng-template>\r\n  </mat-tab>\r\n<!-- #enddocregion mat-tab-content -->\r\n  <mat-tab label=\"Second\">\r\n    <ng-template matTabContent>\r\n      Content 2 - Loaded: {{getTimeLoaded(2) | date:'medium'}}\r\n    </ng-template>\r\n  </mat-tab>\r\n  <mat-tab label=\"Third\">\r\n    <ng-template matTabContent>\r\n      Content 3 - Loaded: {{getTimeLoaded(3) | date:'medium'}}\r\n    </ng-template>\r\n  </mat-tab>\r\n</mat-tab-group>\r\n" }]
        }] });

/**
 * @title Tab group that keeps its content inside the DOM when it's off-screen.
 */
class TabGroupPreserveContentExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TabGroupPreserveContentExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: TabGroupPreserveContentExample, isStandalone: true, selector: "tab-group-preserve-content-example", ngImport: i0, template: "<p>Start the video in the first tab and navigate to the second one to see how it keeps playing.</p>\r\n\r\n<mat-tab-group preserveContent>\r\n  <mat-tab label=\"First\">\r\n    <iframe\r\n      width=\"560\"\r\n      height=\"315\"\r\n      src=\"https://www.youtube.com/embed/B-lipaiZII8\"\r\n      style=\"border: 0\"\r\n      allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\r\n      allowfullscreen></iframe>\r\n  </mat-tab>\r\n  <mat-tab label=\"Second\">Note how the video from the previous tab is still playing.</mat-tab>\r\n</mat-tab-group>\r\n", dependencies: [{ kind: "ngmodule", type: MatTabsModule }, { kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled", "label", "aria-label", "aria-labelledby", "labelClass", "bodyClass"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "fitInkBarToContent", "mat-stretch-tabs", "dynamicHeight", "selectedIndex", "headerPosition", "animationDuration", "contentTabIndex", "disablePagination", "disableRipple", "preserveContent", "backgroundColor"], outputs: ["selectedIndexChange", "focusChange", "animationDone", "selectedTabChange"], exportAs: ["matTabGroup"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TabGroupPreserveContentExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-preserve-content-example', standalone: true, imports: [MatTabsModule], template: "<p>Start the video in the first tab and navigate to the second one to see how it keeps playing.</p>\r\n\r\n<mat-tab-group preserveContent>\r\n  <mat-tab label=\"First\">\r\n    <iframe\r\n      width=\"560\"\r\n      height=\"315\"\r\n      src=\"https://www.youtube.com/embed/B-lipaiZII8\"\r\n      style=\"border: 0\"\r\n      allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\r\n      allowfullscreen></iframe>\r\n  </mat-tab>\r\n  <mat-tab label=\"Second\">Note how the video from the previous tab is still playing.</mat-tab>\r\n</mat-tab-group>\r\n" }]
        }] });

/**
 * @title Tab group with stretched labels
 */
class TabGroupStretchedExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TabGroupStretchedExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: TabGroupStretchedExample, isStandalone: true, selector: "tab-group-stretched-example", ngImport: i0, template: "<mat-tab-group mat-stretch-tabs class=\"example-stretched-tabs mat-elevation-z4\">\r\n  <mat-tab label=\"First\"> Content 1 </mat-tab>\r\n  <mat-tab label=\"Second\"> Content 2 </mat-tab>\r\n  <mat-tab label=\"Third\"> Content 3 </mat-tab>\r\n</mat-tab-group>\r\n", styles: [".example-stretched-tabs {\r\n  max-width: 800px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatTabsModule }, { kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled", "label", "aria-label", "aria-labelledby", "labelClass", "bodyClass"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "fitInkBarToContent", "mat-stretch-tabs", "dynamicHeight", "selectedIndex", "headerPosition", "animationDuration", "contentTabIndex", "disablePagination", "disableRipple", "preserveContent", "backgroundColor"], outputs: ["selectedIndexChange", "focusChange", "animationDone", "selectedTabChange"], exportAs: ["matTabGroup"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TabGroupStretchedExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-stretched-example', standalone: true, imports: [MatTabsModule], template: "<mat-tab-group mat-stretch-tabs class=\"example-stretched-tabs mat-elevation-z4\">\r\n  <mat-tab label=\"First\"> Content 1 </mat-tab>\r\n  <mat-tab label=\"Second\"> Content 2 </mat-tab>\r\n  <mat-tab label=\"Third\"> Content 3 </mat-tab>\r\n</mat-tab-group>\r\n", styles: [".example-stretched-tabs {\r\n  max-width: 800px;\r\n}\r\n"] }]
        }] });

/**
 * @title Customizing the theme options on the tab group
 */
class TabGroupThemeExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TabGroupThemeExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: TabGroupThemeExample, isStandalone: true, selector: "tab-group-theme-example", ngImport: i0, template: "<div>\r\n  <mat-button-toggle-group #colorToggle=\"matButtonToggleGroup\"\r\n                           value=\"primary\"\r\n                           aria-label=\"Change color\">\r\n    <mat-button-toggle value=\"primary\">Primary</mat-button-toggle>\r\n    <mat-button-toggle value=\"accent\">Accent</mat-button-toggle>\r\n    <mat-button-toggle value=\"warn\">Warn</mat-button-toggle>\r\n  </mat-button-toggle-group>\r\n  <span class=\"example-button-toggle-label\">Color</span>\r\n</div>\r\n\r\n<div>\r\n  <mat-button-toggle-group #backgroundColorToggle=\"matButtonToggleGroup\"\r\n                           value=\"primary\"\r\n                           aria-label=\"Change color\">\r\n    <mat-button-toggle value=\"primary\">Primary</mat-button-toggle>\r\n    <mat-button-toggle value=\"accent\">Accent</mat-button-toggle>\r\n    <mat-button-toggle value=\"warn\">Warn</mat-button-toggle>\r\n  </mat-button-toggle-group>\r\n  <span class=\"example-button-toggle-label\">Background Color</span>\r\n</div>\r\n\r\n<mat-tab-group [color]=\"colorToggle.value\" [backgroundColor]=\"backgroundColorToggle.value\">\r\n  <mat-tab label=\"First\">Content 1</mat-tab>\r\n  <mat-tab label=\"Second\">Content 2</mat-tab>\r\n  <mat-tab label=\"Third\">Content 3</mat-tab>\r\n</mat-tab-group>\r\n", styles: [".example-button-toggle-label {\r\n  display: inline-block;\r\n  margin: 16px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatButtonToggleModule }, { kind: "directive", type: i1$2.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { kind: "component", type: i1$2.MatButtonToggle, selector: "mat-button-toggle", inputs: ["aria-label", "aria-labelledby", "id", "name", "value", "tabIndex", "disableRipple", "appearance", "checked", "disabled"], outputs: ["change"], exportAs: ["matButtonToggle"] }, { kind: "ngmodule", type: MatTabsModule }, { kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled", "label", "aria-label", "aria-labelledby", "labelClass", "bodyClass"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "fitInkBarToContent", "mat-stretch-tabs", "dynamicHeight", "selectedIndex", "headerPosition", "animationDuration", "contentTabIndex", "disablePagination", "disableRipple", "preserveContent", "backgroundColor"], outputs: ["selectedIndexChange", "focusChange", "animationDone", "selectedTabChange"], exportAs: ["matTabGroup"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TabGroupThemeExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-theme-example', standalone: true, imports: [MatButtonToggleModule, MatTabsModule], template: "<div>\r\n  <mat-button-toggle-group #colorToggle=\"matButtonToggleGroup\"\r\n                           value=\"primary\"\r\n                           aria-label=\"Change color\">\r\n    <mat-button-toggle value=\"primary\">Primary</mat-button-toggle>\r\n    <mat-button-toggle value=\"accent\">Accent</mat-button-toggle>\r\n    <mat-button-toggle value=\"warn\">Warn</mat-button-toggle>\r\n  </mat-button-toggle-group>\r\n  <span class=\"example-button-toggle-label\">Color</span>\r\n</div>\r\n\r\n<div>\r\n  <mat-button-toggle-group #backgroundColorToggle=\"matButtonToggleGroup\"\r\n                           value=\"primary\"\r\n                           aria-label=\"Change color\">\r\n    <mat-button-toggle value=\"primary\">Primary</mat-button-toggle>\r\n    <mat-button-toggle value=\"accent\">Accent</mat-button-toggle>\r\n    <mat-button-toggle value=\"warn\">Warn</mat-button-toggle>\r\n  </mat-button-toggle-group>\r\n  <span class=\"example-button-toggle-label\">Background Color</span>\r\n</div>\r\n\r\n<mat-tab-group [color]=\"colorToggle.value\" [backgroundColor]=\"backgroundColorToggle.value\">\r\n  <mat-tab label=\"First\">Content 1</mat-tab>\r\n  <mat-tab label=\"Second\">Content 2</mat-tab>\r\n  <mat-tab label=\"Third\">Content 3</mat-tab>\r\n</mat-tab-group>\r\n", styles: [".example-button-toggle-label {\r\n  display: inline-block;\r\n  margin: 16px;\r\n}\r\n"] }]
        }] });

/**
 * @title Basic use of the tab nav bar
 */
class TabNavBarBasicExample {
    constructor() {
        this.links = ['First', 'Second', 'Third'];
        this.activeLink = this.links[0];
        this.background = undefined;
    }
    toggleBackground() {
        this.background = this.background ? undefined : 'primary';
    }
    addLink() {
        this.links.push(`Link ${this.links.length + 1}`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TabNavBarBasicExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: TabNavBarBasicExample, isStandalone: true, selector: "tab-nav-bar-basic-example", ngImport: i0, template: "<!-- #docregion mat-tab-nav -->\r\n<nav mat-tab-nav-bar [backgroundColor]=\"background\" [tabPanel]=\"tabPanel\">\r\n  @for (link of links; track link) {\r\n    <a mat-tab-link\r\n      (click)=\"activeLink = link\"\r\n      [active]=\"activeLink == link\"> {{link}} </a>\r\n  }\r\n  <a mat-tab-link disabled>Disabled Link</a>\r\n</nav>\r\n<mat-tab-nav-panel #tabPanel></mat-tab-nav-panel>\r\n<!-- #enddocregion mat-tab-nav -->\r\n\r\n<button mat-raised-button class=\"example-action-button\" (click)=\"toggleBackground()\">\r\n  Toggle background\r\n</button>\r\n<button mat-raised-button class=\"example-action-button\" (click)=\"addLink()\">\r\n  Add link\r\n</button>\r\n", styles: [".example-action-button {\r\n  margin-top: 8px;\r\n  margin-right: 8px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatTabsModule }, { kind: "component", type: i1.MatTabNav, selector: "[mat-tab-nav-bar]", inputs: ["fitInkBarToContent", "mat-stretch-tabs", "animationDuration", "backgroundColor", "disableRipple", "color", "tabPanel"], exportAs: ["matTabNavBar", "matTabNav"] }, { kind: "component", type: i1.MatTabNavPanel, selector: "mat-tab-nav-panel", inputs: ["id"], exportAs: ["matTabNavPanel"] }, { kind: "component", type: i1.MatTabLink, selector: "[mat-tab-link], [matTabLink]", inputs: ["active", "id", "disabled", "disableRipple", "tabIndex"], exportAs: ["matTabLink"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i4.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TabNavBarBasicExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-nav-bar-basic-example', standalone: true, imports: [MatTabsModule, MatButtonModule], template: "<!-- #docregion mat-tab-nav -->\r\n<nav mat-tab-nav-bar [backgroundColor]=\"background\" [tabPanel]=\"tabPanel\">\r\n  @for (link of links; track link) {\r\n    <a mat-tab-link\r\n      (click)=\"activeLink = link\"\r\n      [active]=\"activeLink == link\"> {{link}} </a>\r\n  }\r\n  <a mat-tab-link disabled>Disabled Link</a>\r\n</nav>\r\n<mat-tab-nav-panel #tabPanel></mat-tab-nav-panel>\r\n<!-- #enddocregion mat-tab-nav -->\r\n\r\n<button mat-raised-button class=\"example-action-button\" (click)=\"toggleBackground()\">\r\n  Toggle background\r\n</button>\r\n<button mat-raised-button class=\"example-action-button\" (click)=\"addLink()\">\r\n  Add link\r\n</button>\r\n", styles: [".example-action-button {\r\n  margin-top: 8px;\r\n  margin-right: 8px;\r\n}\r\n"] }]
        }] });

/**
 * @title Tab group with paginated tabs
 */
class TabGroupPaginatedExample {
    constructor() {
        this.lotsOfTabs = new Array(30).fill(0).map((_, index) => `Tab ${index}`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TabGroupPaginatedExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: TabGroupPaginatedExample, isStandalone: true, selector: "tab-group-paginated-example", ngImport: i0, template: "<mat-tab-group>\r\n  @for (tab of lotsOfTabs; track tab) {\r\n    <mat-tab [label]=\"tab\">Content</mat-tab>\r\n  }\r\n</mat-tab-group>\r\n", dependencies: [{ kind: "ngmodule", type: MatTabsModule }, { kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled", "label", "aria-label", "aria-labelledby", "labelClass", "bodyClass"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "fitInkBarToContent", "mat-stretch-tabs", "dynamicHeight", "selectedIndex", "headerPosition", "animationDuration", "contentTabIndex", "disablePagination", "disableRipple", "preserveContent", "backgroundColor"], outputs: ["selectedIndexChange", "focusChange", "animationDone", "selectedTabChange"], exportAs: ["matTabGroup"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TabGroupPaginatedExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-paginated-example', standalone: true, imports: [MatTabsModule], template: "<mat-tab-group>\r\n  @for (tab of lotsOfTabs; track tab) {\r\n    <mat-tab [label]=\"tab\">Content</mat-tab>\r\n  }\r\n</mat-tab-group>\r\n" }]
        }] });

/**
 * @title Tab group with inverted tabs
 */
class TabGroupInvertedExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TabGroupInvertedExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: TabGroupInvertedExample, isStandalone: true, selector: "tab-group-inverted-example", ngImport: i0, template: "<mat-tab-group headerPosition=\"below\">\r\n  <mat-tab label=\"First\">Content 1</mat-tab>\r\n  <mat-tab label=\"Second\">Content 2</mat-tab>\r\n  <mat-tab label=\"Third\">Content 3</mat-tab>\r\n</mat-tab-group>", dependencies: [{ kind: "ngmodule", type: MatTabsModule }, { kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled", "label", "aria-label", "aria-labelledby", "labelClass", "bodyClass"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "fitInkBarToContent", "mat-stretch-tabs", "dynamicHeight", "selectedIndex", "headerPosition", "animationDuration", "contentTabIndex", "disablePagination", "disableRipple", "preserveContent", "backgroundColor"], outputs: ["selectedIndexChange", "focusChange", "animationDone", "selectedTabChange"], exportAs: ["matTabGroup"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TabGroupInvertedExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-inverted-example', standalone: true, imports: [MatTabsModule], template: "<mat-tab-group headerPosition=\"below\">\r\n  <mat-tab label=\"First\">Content 1</mat-tab>\r\n  <mat-tab label=\"Second\">Content 2</mat-tab>\r\n  <mat-tab label=\"Third\">Content 3</mat-tab>\r\n</mat-tab-group>" }]
        }] });

/**
 * @title Tab group with ink bar fit to content
 */
class TabGroupInkBarExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TabGroupInkBarExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: TabGroupInkBarExample, isStandalone: true, selector: "tab-group-ink-bar-example", ngImport: i0, template: "<mat-tab-group fitInkBarToContent>\r\n  <mat-tab label=\"First\">Content 1</mat-tab>\r\n  <mat-tab label=\"Second\">Content 2</mat-tab>\r\n  <mat-tab label=\"Third\">Content 3</mat-tab>\r\n  <mat-tab label=\"Fourth\" disabled>Content 4</mat-tab>\r\n</mat-tab-group>\r\n", dependencies: [{ kind: "ngmodule", type: MatTabsModule }, { kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled", "label", "aria-label", "aria-labelledby", "labelClass", "bodyClass"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "fitInkBarToContent", "mat-stretch-tabs", "dynamicHeight", "selectedIndex", "headerPosition", "animationDuration", "contentTabIndex", "disablePagination", "disableRipple", "preserveContent", "backgroundColor"], outputs: ["selectedIndexChange", "focusChange", "animationDone", "selectedTabChange"], exportAs: ["matTabGroup"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TabGroupInkBarExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-ink-bar-example', standalone: true, imports: [MatTabsModule], template: "<mat-tab-group fitInkBarToContent>\r\n  <mat-tab label=\"First\">Content 1</mat-tab>\r\n  <mat-tab label=\"Second\">Content 2</mat-tab>\r\n  <mat-tab label=\"Third\">Content 3</mat-tab>\r\n  <mat-tab label=\"Fourth\" disabled>Content 4</mat-tab>\r\n</mat-tab-group>\r\n" }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { TabGroupAlignExample, TabGroupAnimationsExample, TabGroupAsyncExample, TabGroupBasicExample, TabGroupCustomLabelExample, TabGroupDynamicExample, TabGroupDynamicHeightExample, TabGroupHarnessExample, TabGroupHeaderBelowExample, TabGroupInkBarExample, TabGroupInvertedExample, TabGroupLazyLoadedExample, TabGroupPaginatedExample, TabGroupPreserveContentExample, TabGroupStretchedExample, TabGroupThemeExample, TabNavBarBasicExample };
//# sourceMappingURL=tabs.mjs.map
