import * as i0 from '@angular/core';
import { Component } from '@angular/core';
import * as i1 from '@angular/material/list';
import { MatListModule } from '@angular/material/list';
import * as i2 from '@angular/material/divider';
import { MatDividerModule } from '@angular/material/divider';
import * as i3 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import { DatePipe } from '@angular/common';

/**
 * @title Basic list
 */
class ListOverviewExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ListOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: ListOverviewExample, isStandalone: true, selector: "list-overview-example", ngImport: i0, template: "<mat-list role=\"list\">\r\n  <mat-list-item role=\"listitem\">Item 1</mat-list-item>\r\n  <mat-list-item role=\"listitem\">Item 2</mat-list-item>\r\n  <mat-list-item role=\"listitem\">Item 3</mat-list-item>\r\n</mat-list>\r\n", dependencies: [{ kind: "ngmodule", type: MatListModule }, { kind: "component", type: i1.MatList, selector: "mat-list", exportAs: ["matList"] }, { kind: "component", type: i1.MatListItem, selector: "mat-list-item, a[mat-list-item], button[mat-list-item]", inputs: ["activated"], exportAs: ["matListItem"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ListOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'list-overview-example', standalone: true, imports: [MatListModule], template: "<mat-list role=\"list\">\r\n  <mat-list-item role=\"listitem\">Item 1</mat-list-item>\r\n  <mat-list-item role=\"listitem\">Item 2</mat-list-item>\r\n  <mat-list-item role=\"listitem\">Item 3</mat-list-item>\r\n</mat-list>\r\n" }]
        }] });

/**
 * @title List with sections
 */
class ListSectionsExample {
    constructor() {
        this.folders = [
            {
                name: 'Photos',
                updated: new Date('1/1/16'),
            },
            {
                name: 'Recipes',
                updated: new Date('1/17/16'),
            },
            {
                name: 'Work',
                updated: new Date('1/28/16'),
            },
        ];
        this.notes = [
            {
                name: 'Vacation Itinerary',
                updated: new Date('2/20/16'),
            },
            {
                name: 'Kitchen Remodel',
                updated: new Date('1/18/16'),
            },
        ];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ListSectionsExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: ListSectionsExample, isStandalone: true, selector: "list-sections-example", ngImport: i0, template: "<mat-list>\r\n  <div mat-subheader>Folders</div>\r\n  @for (folder of folders; track folder) {\r\n    <mat-list-item>\r\n      <mat-icon matListItemIcon>folder</mat-icon>\r\n      <div matListItemTitle>{{folder.name}}</div>\r\n      <div matListItemLine>{{folder.updated | date}}</div>\r\n    </mat-list-item>\r\n  }\r\n  <mat-divider></mat-divider>\r\n  <div mat-subheader>Notes</div>\r\n  @for (note of notes; track note) {\r\n    <mat-list-item>\r\n      <mat-icon matListItemIcon>note</mat-icon>\r\n      <div matListItemTitle>{{note.name}}</div>\r\n      <div matListItemLine>{{note.updated | date}}</div>\r\n    </mat-list-item>\r\n  }\r\n</mat-list>\r\n", styles: [".mat-mdc-list-item-icon {\r\n  color: rgba(0, 0, 0, 0.54);\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatListModule }, { kind: "component", type: i1.MatList, selector: "mat-list", exportAs: ["matList"] }, { kind: "component", type: i1.MatListItem, selector: "mat-list-item, a[mat-list-item], button[mat-list-item]", inputs: ["activated"], exportAs: ["matListItem"] }, { kind: "directive", type: i1.MatListItemIcon, selector: "[matListItemIcon]" }, { kind: "directive", type: i1.MatListSubheaderCssMatStyler, selector: "[mat-subheader], [matSubheader]" }, { kind: "component", type: i2.MatDivider, selector: "mat-divider", inputs: ["vertical", "inset"] }, { kind: "directive", type: i1.MatListItemLine, selector: "[matListItemLine]" }, { kind: "directive", type: i1.MatListItemTitle, selector: "[matListItemTitle]" }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "ngmodule", type: MatDividerModule }, { kind: "pipe", type: DatePipe, name: "date" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ListSectionsExample, decorators: [{
            type: Component,
            args: [{ selector: 'list-sections-example', standalone: true, imports: [MatListModule, MatIconModule, MatDividerModule, DatePipe], template: "<mat-list>\r\n  <div mat-subheader>Folders</div>\r\n  @for (folder of folders; track folder) {\r\n    <mat-list-item>\r\n      <mat-icon matListItemIcon>folder</mat-icon>\r\n      <div matListItemTitle>{{folder.name}}</div>\r\n      <div matListItemLine>{{folder.updated | date}}</div>\r\n    </mat-list-item>\r\n  }\r\n  <mat-divider></mat-divider>\r\n  <div mat-subheader>Notes</div>\r\n  @for (note of notes; track note) {\r\n    <mat-list-item>\r\n      <mat-icon matListItemIcon>note</mat-icon>\r\n      <div matListItemTitle>{{note.name}}</div>\r\n      <div matListItemLine>{{note.updated | date}}</div>\r\n    </mat-list-item>\r\n  }\r\n</mat-list>\r\n", styles: [".mat-mdc-list-item-icon {\r\n  color: rgba(0, 0, 0, 0.54);\r\n}\r\n"] }]
        }] });

/**
 * @title List with selection
 */
class ListSelectionExample {
    constructor() {
        this.typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ListSelectionExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: ListSelectionExample, isStandalone: true, selector: "list-selection-example", ngImport: i0, template: "<mat-selection-list #shoes>\r\n  @for (shoe of typesOfShoes; track shoe) {\r\n    <mat-list-option>{{shoe}}</mat-list-option>\r\n  }\r\n</mat-selection-list>\r\n\r\n<p>\r\n  Options selected: {{shoes.selectedOptions.selected.length}}\r\n</p>\r\n", dependencies: [{ kind: "ngmodule", type: MatListModule }, { kind: "component", type: i1.MatSelectionList, selector: "mat-selection-list", inputs: ["color", "compareWith", "multiple", "hideSingleSelectionIndicator", "disabled"], outputs: ["selectionChange"], exportAs: ["matSelectionList"] }, { kind: "component", type: i1.MatListOption, selector: "mat-list-option", inputs: ["togglePosition", "checkboxPosition", "color", "value", "selected"], outputs: ["selectedChange"], exportAs: ["matListOption"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ListSelectionExample, decorators: [{
            type: Component,
            args: [{ selector: 'list-selection-example', standalone: true, imports: [MatListModule], template: "<mat-selection-list #shoes>\r\n  @for (shoe of typesOfShoes; track shoe) {\r\n    <mat-list-option>{{shoe}}</mat-list-option>\r\n  }\r\n</mat-selection-list>\r\n\r\n<p>\r\n  Options selected: {{shoes.selectedOptions.selected.length}}\r\n</p>\r\n" }]
        }] });

/**
 * @title List with single selection
 */
class ListSingleSelectionExample {
    constructor() {
        this.typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ListSingleSelectionExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: ListSingleSelectionExample, isStandalone: true, selector: "list-single-selection-example", ngImport: i0, template: "<mat-selection-list #shoes [multiple]=\"false\">\r\n  @for (shoe of typesOfShoes; track shoe) {\r\n    <mat-list-option [value]=\"shoe\">{{shoe}}</mat-list-option>\r\n  }\r\n</mat-selection-list>\r\n\r\n<p>\r\n  Option selected: {{shoes.selectedOptions.hasValue() ? shoes.selectedOptions.selected[0].value : 'None'}}\r\n</p>\r\n", dependencies: [{ kind: "ngmodule", type: MatListModule }, { kind: "component", type: i1.MatSelectionList, selector: "mat-selection-list", inputs: ["color", "compareWith", "multiple", "hideSingleSelectionIndicator", "disabled"], outputs: ["selectionChange"], exportAs: ["matSelectionList"] }, { kind: "component", type: i1.MatListOption, selector: "mat-list-option", inputs: ["togglePosition", "checkboxPosition", "color", "value", "selected"], outputs: ["selectedChange"], exportAs: ["matListOption"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ListSingleSelectionExample, decorators: [{
            type: Component,
            args: [{ selector: 'list-single-selection-example', standalone: true, imports: [MatListModule], template: "<mat-selection-list #shoes [multiple]=\"false\">\r\n  @for (shoe of typesOfShoes; track shoe) {\r\n    <mat-list-option [value]=\"shoe\">{{shoe}}</mat-list-option>\r\n  }\r\n</mat-selection-list>\r\n\r\n<p>\r\n  Option selected: {{shoes.selectedOptions.hasValue() ? shoes.selectedOptions.selected[0].value : 'None'}}\r\n</p>\r\n" }]
        }] });

/**
 * @title Testing with MatListHarness
 */
class ListHarnessExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ListHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: ListHarnessExample, isStandalone: true, selector: "list-harness-example", ngImport: i0, template: "<mat-list>\r\n  <mat-list-item>\r\n    <div matListItemTitle>Item </div>\r\n    <div matListItemLine>1</div>\r\n    <div matListItemIcon>icon</div>\r\n    <div matListItemAvatar>Avatar</div>\r\n  </mat-list-item>\r\n  <div matSubheader>Section 1</div>\r\n  <a mat-list-item>\r\n    <span>Item 2</span>\r\n  </a>\r\n  <button mat-list-item>Item 3</button>\r\n  <div matSubheader>Section 2</div>\r\n</mat-list>\r\n", dependencies: [{ kind: "ngmodule", type: MatListModule }, { kind: "component", type: i1.MatList, selector: "mat-list", exportAs: ["matList"] }, { kind: "component", type: i1.MatListItem, selector: "mat-list-item, a[mat-list-item], button[mat-list-item]", inputs: ["activated"], exportAs: ["matListItem"] }, { kind: "directive", type: i1.MatListItemAvatar, selector: "[matListItemAvatar]" }, { kind: "directive", type: i1.MatListItemIcon, selector: "[matListItemIcon]" }, { kind: "directive", type: i1.MatListSubheaderCssMatStyler, selector: "[mat-subheader], [matSubheader]" }, { kind: "directive", type: i1.MatListItemLine, selector: "[matListItemLine]" }, { kind: "directive", type: i1.MatListItemTitle, selector: "[matListItemTitle]" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ListHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'list-harness-example', standalone: true, imports: [MatListModule], template: "<mat-list>\r\n  <mat-list-item>\r\n    <div matListItemTitle>Item </div>\r\n    <div matListItemLine>1</div>\r\n    <div matListItemIcon>icon</div>\r\n    <div matListItemAvatar>Avatar</div>\r\n  </mat-list-item>\r\n  <div matSubheader>Section 1</div>\r\n  <a mat-list-item>\r\n    <span>Item 2</span>\r\n  </a>\r\n  <button mat-list-item>Item 3</button>\r\n  <div matSubheader>Section 2</div>\r\n</mat-list>\r\n" }]
        }] });

/**
 * @title List variants
 */
class ListVariantsExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ListVariantsExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: ListVariantsExample, isStandalone: true, selector: "list-variants-example", ngImport: i0, template: "<h3>Single line lists</h3>\r\n<mat-list>\r\n  <mat-list-item>\r\n    <span matListItemTitle>This is the title</span>\r\n  </mat-list-item>\r\n  <mat-list-item>Also the title</mat-list-item>\r\n</mat-list>\r\n\r\n<h3>Two line lists</h3>\r\n<mat-list>\r\n  <mat-list-item>\r\n    <span matListItemTitle>Title</span>\r\n    <span matListItemLine>Second line</span>\r\n  </mat-list-item>\r\n  <mat-list-item>\r\n    <span matListItemTitle>Title</span>\r\n    <span>Second line</span>\r\n  </mat-list-item>\r\n  <mat-list-item>\r\n    <span matListItemTitle>Title</span>\r\n    Second line\r\n  </mat-list-item>\r\n</mat-list>\r\n\r\n<h3>Three line lists</h3>\r\n<mat-list>\r\n  <mat-list-item>\r\n    <span matListItemTitle>Title</span>\r\n    <span matListItemLine>Second line</span>\r\n    <span matListItemLine>Third line</span>\r\n  </mat-list-item>\r\n  <mat-list-item>\r\n    <span matListItemTitle>Title</span>\r\n    <span matListItemLine>Second line. This line will truncate.</span>\r\n    <span>Third line</span>\r\n  </mat-list-item>\r\n  <mat-list-item>\r\n    <span matListItemTitle>Title</span>\r\n    <span matListItemLine>Second line. This line will truncate.</span>\r\n    Third line\r\n  </mat-list-item>\r\n</mat-list>\r\n\r\n<h3>Three line list with secondary text wrapping</h3>\r\n<mat-list class=\"example-list-wrapping\">\r\n  <mat-list-item lines=\"3\">\r\n    <span matListItemTitle>Title</span>\r\n    <span\r\n      >Secondary line that will wrap because the list lines is explicitly set to 3 lines. Text\r\n      inside of a `matListItemTitle` or `matListItemLine` will never wrap.\r\n    </span>\r\n  </mat-list-item>\r\n  <mat-list-item lines=\"3\">\r\n    <span matListItemTitle>Title</span>\r\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r\n    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\r\n    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\r\n    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\r\n    non proident, sunt in culpa qui officia deserunt mollit anim id est\r\n  </mat-list-item>\r\n</mat-list>\r\n", styles: [".example-list-wrapping {\r\n  max-width: 500px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatListModule }, { kind: "component", type: i1.MatList, selector: "mat-list", exportAs: ["matList"] }, { kind: "component", type: i1.MatListItem, selector: "mat-list-item, a[mat-list-item], button[mat-list-item]", inputs: ["activated"], exportAs: ["matListItem"] }, { kind: "directive", type: i1.MatListItemLine, selector: "[matListItemLine]" }, { kind: "directive", type: i1.MatListItemTitle, selector: "[matListItemTitle]" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ListVariantsExample, decorators: [{
            type: Component,
            args: [{ selector: 'list-variants-example', standalone: true, imports: [MatListModule], template: "<h3>Single line lists</h3>\r\n<mat-list>\r\n  <mat-list-item>\r\n    <span matListItemTitle>This is the title</span>\r\n  </mat-list-item>\r\n  <mat-list-item>Also the title</mat-list-item>\r\n</mat-list>\r\n\r\n<h3>Two line lists</h3>\r\n<mat-list>\r\n  <mat-list-item>\r\n    <span matListItemTitle>Title</span>\r\n    <span matListItemLine>Second line</span>\r\n  </mat-list-item>\r\n  <mat-list-item>\r\n    <span matListItemTitle>Title</span>\r\n    <span>Second line</span>\r\n  </mat-list-item>\r\n  <mat-list-item>\r\n    <span matListItemTitle>Title</span>\r\n    Second line\r\n  </mat-list-item>\r\n</mat-list>\r\n\r\n<h3>Three line lists</h3>\r\n<mat-list>\r\n  <mat-list-item>\r\n    <span matListItemTitle>Title</span>\r\n    <span matListItemLine>Second line</span>\r\n    <span matListItemLine>Third line</span>\r\n  </mat-list-item>\r\n  <mat-list-item>\r\n    <span matListItemTitle>Title</span>\r\n    <span matListItemLine>Second line. This line will truncate.</span>\r\n    <span>Third line</span>\r\n  </mat-list-item>\r\n  <mat-list-item>\r\n    <span matListItemTitle>Title</span>\r\n    <span matListItemLine>Second line. This line will truncate.</span>\r\n    Third line\r\n  </mat-list-item>\r\n</mat-list>\r\n\r\n<h3>Three line list with secondary text wrapping</h3>\r\n<mat-list class=\"example-list-wrapping\">\r\n  <mat-list-item lines=\"3\">\r\n    <span matListItemTitle>Title</span>\r\n    <span\r\n      >Secondary line that will wrap because the list lines is explicitly set to 3 lines. Text\r\n      inside of a `matListItemTitle` or `matListItemLine` will never wrap.\r\n    </span>\r\n  </mat-list-item>\r\n  <mat-list-item lines=\"3\">\r\n    <span matListItemTitle>Title</span>\r\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r\n    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\r\n    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\r\n    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\r\n    non proident, sunt in culpa qui officia deserunt mollit anim id est\r\n  </mat-list-item>\r\n</mat-list>\r\n", styles: [".example-list-wrapping {\r\n  max-width: 500px;\r\n}\r\n"] }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { ListHarnessExample, ListOverviewExample, ListSectionsExample, ListSelectionExample, ListSingleSelectionExample, ListVariantsExample };
//# sourceMappingURL=list.mjs.map
