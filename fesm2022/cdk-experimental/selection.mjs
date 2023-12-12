import * as i2 from '@angular/cdk-experimental/selection';
import { CdkSelectionModule } from '@angular/cdk-experimental/selection';
import * as i0 from '@angular/core';
import { Component } from '@angular/core';
import * as i1 from '@angular/cdk/table';
import { CdkTableModule } from '@angular/cdk/table';
import { AsyncPipe } from '@angular/common';
import * as i2$1 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';

/**
 * @title CDK Selection Column on a CDK table.
 */
class CdkSelectionColumnExample {
    constructor() {
        this.displayedColumns = ['select', 'position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA;
        this.selected = [];
    }
    selectionChanged(event) {
        this.selected = event.after.map(select => select.value.name);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkSelectionColumnExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: CdkSelectionColumnExample, isStandalone: true, selector: "cdk-selection-column-example", ngImport: i0, template: "Selected: {{selected}}\r\n<table class=\"example-table\" cdk-table [dataSource]=\"dataSource\" cdkSelection [cdkSelectionMultiple]=\"true\" (cdkSelectionChange)=\"selectionChanged($event)\">\r\n    <cdk-selection-column cdkSelectionColumnName=\"select\"></cdk-selection-column>\r\n    <!-- Position Column -->\r\n    <ng-container cdkColumnDef=\"position\">\r\n      <th cdk-header-cell *cdkHeaderCellDef> No. </th>\r\n      <td cdk-cell *cdkCellDef=\"let element\"> {{element.position}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container cdkColumnDef=\"name\">\r\n      <th cdk-header-cell *cdkHeaderCellDef> Name </th>\r\n      <td cdk-cell *cdkCellDef=\"let element\"> {{element.name}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Weight Column -->\r\n    <ng-container cdkColumnDef=\"weight\">\r\n      <th cdk-header-cell *cdkHeaderCellDef> Weight </th>\r\n      <td cdk-cell *cdkCellDef=\"let element\"> {{element.weight}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Symbol Column -->\r\n    <ng-container cdkColumnDef=\"symbol\">\r\n      <th cdk-header-cell *cdkHeaderCellDef> Symbol </th>\r\n      <td cdk-cell *cdkCellDef=\"let element\"> {{element.symbol}} </td>\r\n    </ng-container>\r\n\r\n    <tr cdk-header-row *cdkHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\" cdkRowSelection [cdkRowSelectionValue]=\"row\"></tr>\r\n</table>\r\n", styles: [".example-table {\r\n  border-collapse: collapse;\r\n}\r\n\r\ntr.cdk-selected {\r\n  background-color: yellow;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: CdkTableModule }, { kind: "component", type: i1.CdkTable, selector: "cdk-table, table[cdk-table]", inputs: ["trackBy", "dataSource", "multiTemplateDataRows", "fixedLayout"], outputs: ["contentChanged"], exportAs: ["cdkTable"] }, { kind: "directive", type: i1.CdkRowDef, selector: "[cdkRowDef]", inputs: ["cdkRowDefColumns", "cdkRowDefWhen"] }, { kind: "directive", type: i1.CdkCellDef, selector: "[cdkCellDef]" }, { kind: "directive", type: i1.CdkHeaderCellDef, selector: "[cdkHeaderCellDef]" }, { kind: "directive", type: i1.CdkColumnDef, selector: "[cdkColumnDef]", inputs: ["sticky", "cdkColumnDef", "stickyEnd"] }, { kind: "directive", type: i1.CdkCell, selector: "cdk-cell, td[cdk-cell]" }, { kind: "component", type: i1.CdkRow, selector: "cdk-row, tr[cdk-row]" }, { kind: "directive", type: i1.CdkHeaderCell, selector: "cdk-header-cell, th[cdk-header-cell]" }, { kind: "component", type: i1.CdkHeaderRow, selector: "cdk-header-row, tr[cdk-header-row]" }, { kind: "directive", type: i1.CdkHeaderRowDef, selector: "[cdkHeaderRowDef]", inputs: ["cdkHeaderRowDef", "cdkHeaderRowDefSticky"] }, { kind: "ngmodule", type: CdkSelectionModule }, { kind: "directive", type: i2.CdkSelection, selector: "[cdkSelection]", inputs: ["dataSource", "trackBy", "cdkSelectionMultiple"], outputs: ["cdkSelectionChange"], exportAs: ["cdkSelection"] }, { kind: "component", type: i2.CdkSelectionColumn, selector: "cdk-selection-column", inputs: ["cdkSelectionColumnName"] }, { kind: "directive", type: i2.CdkRowSelection, selector: "[cdkRowSelection]", inputs: ["cdkRowSelectionValue", "cdkRowSelectionIndex"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkSelectionColumnExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-selection-column-example', standalone: true, imports: [CdkTableModule, CdkSelectionModule], template: "Selected: {{selected}}\r\n<table class=\"example-table\" cdk-table [dataSource]=\"dataSource\" cdkSelection [cdkSelectionMultiple]=\"true\" (cdkSelectionChange)=\"selectionChanged($event)\">\r\n    <cdk-selection-column cdkSelectionColumnName=\"select\"></cdk-selection-column>\r\n    <!-- Position Column -->\r\n    <ng-container cdkColumnDef=\"position\">\r\n      <th cdk-header-cell *cdkHeaderCellDef> No. </th>\r\n      <td cdk-cell *cdkCellDef=\"let element\"> {{element.position}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container cdkColumnDef=\"name\">\r\n      <th cdk-header-cell *cdkHeaderCellDef> Name </th>\r\n      <td cdk-cell *cdkCellDef=\"let element\"> {{element.name}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Weight Column -->\r\n    <ng-container cdkColumnDef=\"weight\">\r\n      <th cdk-header-cell *cdkHeaderCellDef> Weight </th>\r\n      <td cdk-cell *cdkCellDef=\"let element\"> {{element.weight}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Symbol Column -->\r\n    <ng-container cdkColumnDef=\"symbol\">\r\n      <th cdk-header-cell *cdkHeaderCellDef> Symbol </th>\r\n      <td cdk-cell *cdkCellDef=\"let element\"> {{element.symbol}} </td>\r\n    </ng-container>\r\n\r\n    <tr cdk-header-row *cdkHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\" cdkRowSelection [cdkRowSelectionValue]=\"row\"></tr>\r\n</table>\r\n", styles: [".example-table {\r\n  border-collapse: collapse;\r\n}\r\n\r\ntr.cdk-selected {\r\n  background-color: yellow;\r\n}\r\n"] }]
        }] });
const ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];

/**
 * @title CDK Selection on a simple list.
 */
class CdkSelectionListExample {
    constructor() {
        this.data = ELEMENT_NAMES;
        this.selected1 = [];
        this.selected2 = [];
        this.selected3 = [];
        this.selected4 = [];
    }
    getCurrentSelected(event) {
        return event.after.map(select => select.value);
    }
    trackByFn(index) {
        return index;
    }
    changeElementName() {
        this.data = ELEMENT_SYMBOLS;
    }
    reset() {
        this.data = ELEMENT_NAMES;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkSelectionListExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: CdkSelectionListExample, isStandalone: true, selector: "cdk-selection-list-example", ngImport: i0, template: "<h3><code>native input</code></h3>\r\nSelected: {{selected1}}\r\n<ul cdkSelection [dataSource]=\"data\" [cdkSelectionMultiple]=\"true\" (cdkSelectionChange)=\"selected1 = getCurrentSelected($event)\">\r\n  <input type=\"checkbox\" cdkSelectAll #allToggler=\"cdkSelectAll\"\r\n      [checked]=\"allToggler.checked | async\"\r\n      [indeterminate]=\"allToggler.indeterminate | async\"\r\n      (click)=\"allToggler.toggle($event)\">\r\n  @for (item of data; track item) {\r\n    <li>\r\n      <input type=\"checkbox\" cdkSelectionToggle #toggler=\"cdkSelectionToggle\" [cdkSelectionToggleValue]=\"item\"\r\n        [checked]=\"toggler.checked | async\" (click)=\"toggler.toggle()\">\r\n      {{item}}\r\n    </li>\r\n  }\r\n</ul>\r\n\r\n<h3><code>mat-checkbox</code></h3>\r\nSelected: {{selected2}}\r\n<ul cdkSelection [dataSource]=\"data\" [cdkSelectionMultiple]=\"true\" (cdkSelectionChange)=\"selected2 = getCurrentSelected($event)\">\r\n  <mat-checkbox cdkSelectAll #toggle1=\"cdkSelectAll\" [indeterminate]=\"toggle1.indeterminate | async\"></mat-checkbox>\r\n  @for (item of data; track item) {\r\n    <li>\r\n      <mat-checkbox cdkSelectionToggle [cdkSelectionToggleValue]=\"item\"></mat-checkbox>\r\n      {{item}}\r\n    </li>\r\n  }\r\n</ul>\r\n\r\n<h3><code>Single select with mat-checkbox</code></h3>\r\nSelected: {{selected3}}\r\n<ul cdkSelection [dataSource]=\"data\" [cdkSelectionMultiple]=\"false\" (cdkSelectionChange)=\"selected3 = getCurrentSelected($event)\">\r\n  @for (item of data; track item) {\r\n    <li>\r\n      <mat-checkbox cdkSelectionToggle [cdkSelectionToggleValue]=\"item\"></mat-checkbox>\r\n      {{item}}\r\n    </li>\r\n  }\r\n</ul>\r\n\r\n<h3><code>with trackBy</code></h3>\r\nSelected: {{selected4}}\r\n<ul cdkSelection [dataSource]=\"data\" [cdkSelectionMultiple]=\"true\" [trackBy]=\"trackByFn\" (cdkSelectionChange)=\"selected4 = getCurrentSelected($event)\">\r\n  <mat-checkbox cdkSelectAll #toggle2=\"cdkSelectAll\" [indeterminate]=\"toggle2.indeterminate | async\"></mat-checkbox>\r\n  @for (item of data; track trackByFn($index)) {\r\n    <li>\r\n      <mat-checkbox cdkSelectionToggle [cdkSelectionToggleValue]=\"item\" [cdkSelectionToggleIndex]=\"$index\"></mat-checkbox>\r\n      {{item}}\r\n    </li>\r\n  }\r\n</ul>\r\n\r\n<button (click)=\"changeElementName()\">Change element names and the already selected stays</button>\r\n<button (click)=\"reset()\">reset</button>\r\n", dependencies: [{ kind: "ngmodule", type: CdkSelectionModule }, { kind: "directive", type: i2.CdkSelection, selector: "[cdkSelection]", inputs: ["dataSource", "trackBy", "cdkSelectionMultiple"], outputs: ["cdkSelectionChange"], exportAs: ["cdkSelection"] }, { kind: "directive", type: i2.CdkSelectionToggle, selector: "[cdkSelectionToggle]", inputs: ["cdkSelectionToggleValue", "cdkSelectionToggleIndex"], exportAs: ["cdkSelectionToggle"] }, { kind: "directive", type: i2.CdkSelectAll, selector: "[cdkSelectAll]", exportAs: ["cdkSelectAll"] }, { kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i2$1.MatCheckbox, selector: "mat-checkbox", inputs: ["aria-label", "aria-labelledby", "aria-describedby", "id", "required", "labelPosition", "name", "value", "disableRipple", "tabIndex", "color", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { kind: "pipe", type: AsyncPipe, name: "async" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkSelectionListExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-selection-list-example', standalone: true, imports: [CdkSelectionModule, MatCheckboxModule, AsyncPipe], template: "<h3><code>native input</code></h3>\r\nSelected: {{selected1}}\r\n<ul cdkSelection [dataSource]=\"data\" [cdkSelectionMultiple]=\"true\" (cdkSelectionChange)=\"selected1 = getCurrentSelected($event)\">\r\n  <input type=\"checkbox\" cdkSelectAll #allToggler=\"cdkSelectAll\"\r\n      [checked]=\"allToggler.checked | async\"\r\n      [indeterminate]=\"allToggler.indeterminate | async\"\r\n      (click)=\"allToggler.toggle($event)\">\r\n  @for (item of data; track item) {\r\n    <li>\r\n      <input type=\"checkbox\" cdkSelectionToggle #toggler=\"cdkSelectionToggle\" [cdkSelectionToggleValue]=\"item\"\r\n        [checked]=\"toggler.checked | async\" (click)=\"toggler.toggle()\">\r\n      {{item}}\r\n    </li>\r\n  }\r\n</ul>\r\n\r\n<h3><code>mat-checkbox</code></h3>\r\nSelected: {{selected2}}\r\n<ul cdkSelection [dataSource]=\"data\" [cdkSelectionMultiple]=\"true\" (cdkSelectionChange)=\"selected2 = getCurrentSelected($event)\">\r\n  <mat-checkbox cdkSelectAll #toggle1=\"cdkSelectAll\" [indeterminate]=\"toggle1.indeterminate | async\"></mat-checkbox>\r\n  @for (item of data; track item) {\r\n    <li>\r\n      <mat-checkbox cdkSelectionToggle [cdkSelectionToggleValue]=\"item\"></mat-checkbox>\r\n      {{item}}\r\n    </li>\r\n  }\r\n</ul>\r\n\r\n<h3><code>Single select with mat-checkbox</code></h3>\r\nSelected: {{selected3}}\r\n<ul cdkSelection [dataSource]=\"data\" [cdkSelectionMultiple]=\"false\" (cdkSelectionChange)=\"selected3 = getCurrentSelected($event)\">\r\n  @for (item of data; track item) {\r\n    <li>\r\n      <mat-checkbox cdkSelectionToggle [cdkSelectionToggleValue]=\"item\"></mat-checkbox>\r\n      {{item}}\r\n    </li>\r\n  }\r\n</ul>\r\n\r\n<h3><code>with trackBy</code></h3>\r\nSelected: {{selected4}}\r\n<ul cdkSelection [dataSource]=\"data\" [cdkSelectionMultiple]=\"true\" [trackBy]=\"trackByFn\" (cdkSelectionChange)=\"selected4 = getCurrentSelected($event)\">\r\n  <mat-checkbox cdkSelectAll #toggle2=\"cdkSelectAll\" [indeterminate]=\"toggle2.indeterminate | async\"></mat-checkbox>\r\n  @for (item of data; track trackByFn($index)) {\r\n    <li>\r\n      <mat-checkbox cdkSelectionToggle [cdkSelectionToggleValue]=\"item\" [cdkSelectionToggleIndex]=\"$index\"></mat-checkbox>\r\n      {{item}}\r\n    </li>\r\n  }\r\n</ul>\r\n\r\n<button (click)=\"changeElementName()\">Change element names and the already selected stays</button>\r\n<button (click)=\"reset()\">reset</button>\r\n" }]
        }] });
const ELEMENT_NAMES = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium',
    'Boron',
    'Carbon',
    'Nitrogen',
    'Oxygen',
    'Fluorine',
    'Neon',
    'Sodium',
    'Magnesium',
    'Aluminum',
    'Silicon',
    'Phosphorus',
    'Sulfur',
    'Chlorine',
    'Argon',
    'Potassium',
    'Calcium',
];
const ELEMENT_SYMBOLS = [
    'H',
    'He',
    'Li',
    'Be',
    'B',
    'C',
    'N',
    'O',
    'F',
    'Ne',
    'Na',
    'Mg',
    'Al',
    'Si',
    'P',
    'S',
    'Cl',
    'Ar',
    'K',
    'Ca',
];

/**
 * Generated bundle index. Do not edit.
 */

export { CdkSelectionColumnExample, CdkSelectionListExample };
//# sourceMappingURL=selection.mjs.map
