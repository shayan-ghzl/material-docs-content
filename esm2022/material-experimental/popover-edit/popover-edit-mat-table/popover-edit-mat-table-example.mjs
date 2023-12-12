import { Component } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { FormValueContainer, CdkPopoverEditModule } from '@angular/cdk-experimental/popover-edit';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPopoverEditModule } from '@angular/material-experimental/popover-edit';
import { MatTableModule } from '@angular/material/table';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/snack-bar";
import * as i2 from "@angular/material/table";
import * as i3 from "@angular/cdk-experimental/popover-edit";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/material-experimental/popover-edit";
import * as i6 from "@angular/material/form-field";
import * as i7 from "@angular/material/input";
import * as i8 from "@angular/material/button";
import * as i9 from "@angular/material/icon";
import * as i10 from "@angular/material/checkbox";
import * as i11 from "@angular/material/list";
const ELEMENT_DATA = [
    {
        position: 1,
        name: 'Hydrogen',
        type: 'Nonmetal',
        weight: 1.0079,
        symbol: 'H',
        fantasyCounterparts: ['Fire', 'Wind', 'Light'],
    },
    {
        position: 2,
        name: 'Helium',
        type: 'Nonmetal',
        weight: 4.0026,
        symbol: 'He',
        fantasyCounterparts: ['Wind', 'Light'],
    },
    {
        position: 3,
        name: 'Lithium',
        type: 'Metal',
        weight: 6.941,
        symbol: 'Li',
        fantasyCounterparts: [],
    },
    {
        position: 4,
        name: 'Beryllium',
        type: 'Metal',
        weight: 9.0122,
        symbol: 'Be',
        fantasyCounterparts: [],
    },
    {
        position: 5,
        name: 'Boron',
        type: 'Semimetal',
        weight: 10.811,
        symbol: 'B',
        fantasyCounterparts: [],
    },
    {
        position: 6,
        name: 'Carbon',
        type: 'Nonmetal',
        weight: 12.0107,
        symbol: 'C',
        fantasyCounterparts: ['Earth', 'Dark'],
    },
    {
        position: 7,
        name: 'Nitrogen',
        type: 'Nonmetal',
        weight: 14.0067,
        symbol: 'N',
        fantasyCounterparts: ['Wind'],
    },
    {
        position: 8,
        name: 'Oxygen',
        type: 'Nonmetal',
        weight: 15.9994,
        symbol: 'O',
        fantasyCounterparts: ['Fire', 'Water', 'Wind'],
    },
    {
        position: 9,
        name: 'Fluorine',
        type: 'Nonmetal',
        weight: 18.9984,
        symbol: 'F',
        fantasyCounterparts: [],
    },
    {
        position: 10,
        name: 'Neon',
        type: 'Nonmetal',
        weight: 20.1797,
        symbol: 'Ne',
        fantasyCounterparts: ['Light'],
    },
    {
        position: 11,
        name: 'Sodium',
        type: 'Metal',
        weight: 22.9897,
        symbol: 'Na',
        fantasyCounterparts: ['Earth', 'Water'],
    },
    {
        position: 12,
        name: 'Magnesium',
        type: 'Metal',
        weight: 24.305,
        symbol: 'Mg',
        fantasyCounterparts: [],
    },
    {
        position: 13,
        name: 'Aluminum',
        type: 'Metal',
        weight: 26.9815,
        symbol: 'Al',
        fantasyCounterparts: [],
    },
    {
        position: 14,
        name: 'Silicon',
        type: 'Semimetal',
        weight: 28.0855,
        symbol: 'Si',
        fantasyCounterparts: [],
    },
    {
        position: 15,
        name: 'Phosphorus',
        type: 'Nonmetal',
        weight: 30.9738,
        symbol: 'P',
        fantasyCounterparts: [],
    },
    {
        position: 16,
        name: 'Sulfur',
        type: 'Nonmetal',
        weight: 32.065,
        symbol: 'S',
        fantasyCounterparts: [],
    },
    {
        position: 17,
        name: 'Chlorine',
        type: 'Nonmetal',
        weight: 35.453,
        symbol: 'Cl',
        fantasyCounterparts: [],
    },
    {
        position: 18,
        name: 'Argon',
        type: 'Nonmetal',
        weight: 39.948,
        symbol: 'Ar',
        fantasyCounterparts: [],
    },
    {
        position: 19,
        name: 'Potassium',
        type: 'Metal',
        weight: 39.0983,
        symbol: 'K',
        fantasyCounterparts: [],
    },
    {
        position: 20,
        name: 'Calcium',
        type: 'Metal',
        weight: 40.078,
        symbol: 'Ca',
        fantasyCounterparts: [],
    },
];
const TYPES = ['Metal', 'Semimetal', 'Nonmetal'];
const FANTASY_ELEMENTS = [
    'Earth',
    'Water',
    'Wind',
    'Fire',
    'Light',
    'Dark',
];
/**
 * @title Material Popover Edit on a Material data-table
 */
export class PopoverEditMatTableExample {
    constructor(_snackBar) {
        this._snackBar = _snackBar;
        this.displayedColumns = [
            'position',
            'name',
            'type',
            'weight',
            'symbol',
            'fantasyCounterpart',
        ];
        this.dataSource = new ExampleDataSource();
        this.nameEditEnabled = true;
        this.TYPES = TYPES;
        this.FANTASY_ELEMENTS = FANTASY_ELEMENTS;
        this.nameValues = new FormValueContainer();
        this.weightValues = new FormValueContainer();
        this.typeValues = new FormValueContainer();
        this.fantasyValues = new FormValueContainer();
    }
    onSubmitName(element, f) {
        if (!f.valid) {
            return;
        }
        element.name = f.value.name;
    }
    onSubmitWeight(element, f) {
        if (!f.valid) {
            return;
        }
        element.weight = f.value.weight;
    }
    onSubmitType(element, f) {
        if (!f.valid) {
            return;
        }
        element.type = f.value.type[0];
    }
    onSubmitFantasyCounterparts(element, f) {
        if (!f.valid) {
            return;
        }
        element.fantasyCounterparts = f.value.fantasyCounterparts;
    }
    goodJob(element) {
        this._snackBar.open(`Way to go, ${element.name}!`, undefined, { duration: 2000 });
    }
    badJob(element) {
        this._snackBar.open(`You have failed me for the last time, #${element.position}.`, undefined, {
            duration: 2000,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: PopoverEditMatTableExample, deps: [{ token: i1.MatSnackBar }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: PopoverEditMatTableExample, isStandalone: true, selector: "popover-edit-mat-table-example", ngImport: i0, template: "<table class=\"example-table\" mat-table editable [dataSource]=\"dataSource\">\r\n  <!--\r\n    This edit lens is specified outside of the cell and must explicitly declare\r\n    its context. It could be reused in multiple cells.\r\n  -->\r\n  <ng-template #weightEdit let-element>\r\n    <div>\r\n      <form #f=\"ngForm\"\r\n          matEditLens\r\n          (ngSubmit)=\"onSubmitWeight(element, f)\"\r\n          [(matEditLensPreservedFormValue)]=\"weightValues.for(element).value\">\r\n        <div mat-edit-content>\r\n          <mat-form-field>\r\n            <input matInput type=\"number\" [ngModel]=\"element.weight\" name=\"weight\" required>\r\n          </mat-form-field>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"position\">\r\n    <th mat-header-cell *matHeaderCellDef> No. </th>\r\n    <td mat-cell *matCellDef=\"let element\">\r\n      {{element.position}}\r\n\r\n      <!-- Row hover content in a non-edit cell. -->\r\n      <span *matRowHoverContent>\r\n        <button mat-icon-button (click)=\"goodJob(element)\">\r\n          <mat-icon>thumb_up</mat-icon>\r\n        </button>\r\n        <button mat-icon-button (click)=\"badJob(element)\">\r\n          <mat-icon>thumb_down</mat-icon>\r\n        </button>\r\n      </span>\r\n    </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"name\">\r\n    <th mat-header-cell *matHeaderCellDef>\r\n      Name\r\n      <mat-checkbox\r\n          [(ngModel)]=\"nameEditEnabled\">Edit enabled</mat-checkbox>\r\n    </th>\r\n    <td mat-cell *matCellDef=\"let element\"\r\n        [matPopoverEdit]=\"nameEdit\"\r\n        [matPopoverEditDisabled]=\"!nameEditEnabled\">\r\n      {{element.name}}\r\n\r\n      <!-- This edit is defined in the cell and can implicitly access element -->\r\n      <ng-template #nameEdit>\r\n        <div>\r\n          <form #f=\"ngForm\"\r\n              matEditLens\r\n              (ngSubmit)=\"onSubmitName(element, f)\"\r\n              [(matEditLensPreservedFormValue)]=\"nameValues.for(element).value\">\r\n            <h2 mat-edit-title>Name</h2>\r\n            <div mat-edit-content>\r\n              <mat-form-field>\r\n                <input matInput [ngModel]=\"element.name\" name=\"name\" required>\r\n              </mat-form-field>\r\n            </div>\r\n            <div mat-edit-actions>\r\n              <button mat-button type=\"submit\">Confirm</button>\r\n              <button mat-button matEditRevert>Revert</button>\r\n              <button mat-button matEditClose>Close</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </ng-template>\r\n\r\n      @if (nameEditEnabled) {\r\n        <span *matRowHoverContent>\r\n          <button mat-icon-button matEditOpen><mat-icon>edit</mat-icon></button>\r\n        </span>\r\n      }\r\n    </td>\r\n  </ng-container>\r\n\r\n  <!-- Type Column -->\r\n  <ng-container matColumnDef=\"type\">\r\n    <th mat-header-cell *matHeaderCellDef> Type </th>\r\n    <td mat-cell *matCellDef=\"let element\"\r\n        [matPopoverEdit]=\"typeEdit\">\r\n      {{element.type}}\r\n\r\n      <!-- This edit is defined in the cell and can implicitly access element -->\r\n      <ng-template #typeEdit>\r\n        <div>\r\n          <form #f=\"ngForm\"\r\n              matEditLens\r\n              matEditClose\r\n              (ngSubmit)=\"onSubmitType(element, f)\"\r\n              [(matEditLensPreservedFormValue)]=\"typeValues.for(element).value\">\r\n            <div mat-edit-fill>\r\n              <mat-selection-list [multiple]=\"false\"\r\n                  name=\"type\"\r\n                  [ngModel]=\"[element.type]\"\r\n                  (selectionChange)=\"f.ngSubmit.emit()\"\r\n                  aria-label=\"Element type\">\r\n                @for (type of TYPES; track type) {\r\n                  <mat-list-option [value]=\"type\">{{type}}</mat-list-option>\r\n                }\r\n              </mat-selection-list>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </ng-template>\r\n\r\n      <span *matRowHoverContent>\r\n        <button mat-icon-button matEditOpen><mat-icon>arrow_drop_down</mat-icon></button>\r\n      </span>\r\n    </td>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container matColumnDef=\"weight\">\r\n    <th mat-header-cell *matHeaderCellDef> Weight </th>\r\n    <td mat-cell *matCellDef=\"let element\"\r\n        [matPopoverEdit]=\"weightEdit\" [matPopoverEditContext]=\"element\">\r\n      {{element.weight}}\r\n\r\n      <span *matRowHoverContent>\r\n        <button mat-icon-button matEditOpen><mat-icon>edit</mat-icon></button>\r\n      </span>\r\n    </td>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container matColumnDef=\"symbol\">\r\n    <th mat-header-cell *matHeaderCellDef> Symbol </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\r\n  <!-- Fantasy Counterparts Column -->\r\n  <ng-container matColumnDef=\"fantasyCounterpart\">\r\n    <th mat-header-cell *matHeaderCellDef> Fantasy Counterparts </th>\r\n    <td mat-cell *matCellDef=\"let element\"\r\n        [matPopoverEdit]=\"fantasyCounterpartEdit\">\r\n      {{element.fantasyCounterparts.join(', ')}}\r\n\r\n      <!-- This edit is defined in the cell and can implicitly access element -->\r\n      <ng-template #fantasyCounterpartEdit>\r\n        <div>\r\n          <form #f=\"ngForm\"\r\n              matEditLens\r\n              (ngSubmit)=\"onSubmitFantasyCounterparts(element, f)\"\r\n              [(matEditLensPreservedFormValue)]=\"fantasyValues.for(element).value\">\r\n            <div mat-edit-fill>\r\n              <mat-selection-list [ngModel]=\"element.fantasyCounterparts\"\r\n                  name=\"fantasyCounterparts\"\r\n                  aria-label=\"Fantasy Element Counterparts\">\r\n                @for (fantasyElement of FANTASY_ELEMENTS; track fantasyElement) {\r\n                  <mat-list-option\r\n                    [value]=\"fantasyElement\"\r\n                    checkboxPosition=\"before\">{{fantasyElement}}</mat-list-option>\r\n                }\r\n              </mat-selection-list>\r\n            </div>\r\n            <div mat-edit-actions>\r\n              <button mat-button type=\"submit\">Confirm</button>\r\n              <button mat-button matEditRevert>Revert</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </ng-template>\r\n\r\n      <span *matRowHoverContent>\r\n        <button mat-icon-button matEditOpen><mat-icon>arrow_drop_down</mat-icon></button>\r\n      </span>\r\n    </td>\r\n  </ng-container>\r\n</table>\r\n", styles: [".example-table {\r\n  width: 100%;\r\n}\r\n\r\n.example-table th {\r\n  text-align: left;\r\n}\r\n\r\n.example-table td,\r\n.example-table th {\r\n  width: 16%;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i2.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i2.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i2.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i2.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i2.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i2.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i2.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i2.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i2.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i2.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "ngmodule", type: CdkPopoverEditModule }, { kind: "directive", type: i3.CdkEditable, selector: "table[editable], cdk-table[editable], mat-table[editable]" }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i4.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i4.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i4.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i4.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i4.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatPopoverEditModule }, { kind: "directive", type: i5.MatPopoverEdit, selector: "[matPopoverEdit]:not([matPopoverEditTabOut])", inputs: ["matPopoverEdit", "matPopoverEditContext", "matPopoverEditColspan", "matPopoverEditDisabled"] }, { kind: "directive", type: i5.MatRowHoverContent, selector: "[matRowHoverContent]" }, { kind: "directive", type: i5.MatEditLens, selector: "form[matEditLens]", inputs: ["matEditLensClickOutBehavior", "matEditLensPreservedFormValue", "matEditLensIgnoreSubmitUnlessValid"], outputs: ["matEditLensPreservedFormValueChange"] }, { kind: "directive", type: i5.MatEditRevert, selector: "button[matEditRevert]" }, { kind: "directive", type: i5.MatEditClose, selector: "[matEditClose]" }, { kind: "directive", type: i5.MatEditOpen, selector: "[matEditOpen]" }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i6.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i7.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i8.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "component", type: i8.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i9.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i10.MatCheckbox, selector: "mat-checkbox", inputs: ["aria-label", "aria-labelledby", "aria-describedby", "id", "required", "labelPosition", "name", "value", "disableRipple", "tabIndex", "color", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { kind: "ngmodule", type: MatListModule }, { kind: "component", type: i11.MatSelectionList, selector: "mat-selection-list", inputs: ["color", "compareWith", "multiple", "hideSingleSelectionIndicator", "disabled"], outputs: ["selectionChange"], exportAs: ["matSelectionList"] }, { kind: "component", type: i11.MatListOption, selector: "mat-list-option", inputs: ["togglePosition", "checkboxPosition", "color", "value", "selected"], outputs: ["selectedChange"], exportAs: ["matListOption"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: PopoverEditMatTableExample, decorators: [{
            type: Component,
            args: [{ selector: 'popover-edit-mat-table-example', standalone: true, imports: [
                        MatTableModule,
                        CdkPopoverEditModule,
                        FormsModule,
                        MatPopoverEditModule,
                        MatFormFieldModule,
                        MatInputModule,
                        MatButtonModule,
                        MatIconModule,
                        MatCheckboxModule,
                        MatListModule,
                    ], template: "<table class=\"example-table\" mat-table editable [dataSource]=\"dataSource\">\r\n  <!--\r\n    This edit lens is specified outside of the cell and must explicitly declare\r\n    its context. It could be reused in multiple cells.\r\n  -->\r\n  <ng-template #weightEdit let-element>\r\n    <div>\r\n      <form #f=\"ngForm\"\r\n          matEditLens\r\n          (ngSubmit)=\"onSubmitWeight(element, f)\"\r\n          [(matEditLensPreservedFormValue)]=\"weightValues.for(element).value\">\r\n        <div mat-edit-content>\r\n          <mat-form-field>\r\n            <input matInput type=\"number\" [ngModel]=\"element.weight\" name=\"weight\" required>\r\n          </mat-form-field>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"position\">\r\n    <th mat-header-cell *matHeaderCellDef> No. </th>\r\n    <td mat-cell *matCellDef=\"let element\">\r\n      {{element.position}}\r\n\r\n      <!-- Row hover content in a non-edit cell. -->\r\n      <span *matRowHoverContent>\r\n        <button mat-icon-button (click)=\"goodJob(element)\">\r\n          <mat-icon>thumb_up</mat-icon>\r\n        </button>\r\n        <button mat-icon-button (click)=\"badJob(element)\">\r\n          <mat-icon>thumb_down</mat-icon>\r\n        </button>\r\n      </span>\r\n    </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"name\">\r\n    <th mat-header-cell *matHeaderCellDef>\r\n      Name\r\n      <mat-checkbox\r\n          [(ngModel)]=\"nameEditEnabled\">Edit enabled</mat-checkbox>\r\n    </th>\r\n    <td mat-cell *matCellDef=\"let element\"\r\n        [matPopoverEdit]=\"nameEdit\"\r\n        [matPopoverEditDisabled]=\"!nameEditEnabled\">\r\n      {{element.name}}\r\n\r\n      <!-- This edit is defined in the cell and can implicitly access element -->\r\n      <ng-template #nameEdit>\r\n        <div>\r\n          <form #f=\"ngForm\"\r\n              matEditLens\r\n              (ngSubmit)=\"onSubmitName(element, f)\"\r\n              [(matEditLensPreservedFormValue)]=\"nameValues.for(element).value\">\r\n            <h2 mat-edit-title>Name</h2>\r\n            <div mat-edit-content>\r\n              <mat-form-field>\r\n                <input matInput [ngModel]=\"element.name\" name=\"name\" required>\r\n              </mat-form-field>\r\n            </div>\r\n            <div mat-edit-actions>\r\n              <button mat-button type=\"submit\">Confirm</button>\r\n              <button mat-button matEditRevert>Revert</button>\r\n              <button mat-button matEditClose>Close</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </ng-template>\r\n\r\n      @if (nameEditEnabled) {\r\n        <span *matRowHoverContent>\r\n          <button mat-icon-button matEditOpen><mat-icon>edit</mat-icon></button>\r\n        </span>\r\n      }\r\n    </td>\r\n  </ng-container>\r\n\r\n  <!-- Type Column -->\r\n  <ng-container matColumnDef=\"type\">\r\n    <th mat-header-cell *matHeaderCellDef> Type </th>\r\n    <td mat-cell *matCellDef=\"let element\"\r\n        [matPopoverEdit]=\"typeEdit\">\r\n      {{element.type}}\r\n\r\n      <!-- This edit is defined in the cell and can implicitly access element -->\r\n      <ng-template #typeEdit>\r\n        <div>\r\n          <form #f=\"ngForm\"\r\n              matEditLens\r\n              matEditClose\r\n              (ngSubmit)=\"onSubmitType(element, f)\"\r\n              [(matEditLensPreservedFormValue)]=\"typeValues.for(element).value\">\r\n            <div mat-edit-fill>\r\n              <mat-selection-list [multiple]=\"false\"\r\n                  name=\"type\"\r\n                  [ngModel]=\"[element.type]\"\r\n                  (selectionChange)=\"f.ngSubmit.emit()\"\r\n                  aria-label=\"Element type\">\r\n                @for (type of TYPES; track type) {\r\n                  <mat-list-option [value]=\"type\">{{type}}</mat-list-option>\r\n                }\r\n              </mat-selection-list>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </ng-template>\r\n\r\n      <span *matRowHoverContent>\r\n        <button mat-icon-button matEditOpen><mat-icon>arrow_drop_down</mat-icon></button>\r\n      </span>\r\n    </td>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container matColumnDef=\"weight\">\r\n    <th mat-header-cell *matHeaderCellDef> Weight </th>\r\n    <td mat-cell *matCellDef=\"let element\"\r\n        [matPopoverEdit]=\"weightEdit\" [matPopoverEditContext]=\"element\">\r\n      {{element.weight}}\r\n\r\n      <span *matRowHoverContent>\r\n        <button mat-icon-button matEditOpen><mat-icon>edit</mat-icon></button>\r\n      </span>\r\n    </td>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container matColumnDef=\"symbol\">\r\n    <th mat-header-cell *matHeaderCellDef> Symbol </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\r\n  <!-- Fantasy Counterparts Column -->\r\n  <ng-container matColumnDef=\"fantasyCounterpart\">\r\n    <th mat-header-cell *matHeaderCellDef> Fantasy Counterparts </th>\r\n    <td mat-cell *matCellDef=\"let element\"\r\n        [matPopoverEdit]=\"fantasyCounterpartEdit\">\r\n      {{element.fantasyCounterparts.join(', ')}}\r\n\r\n      <!-- This edit is defined in the cell and can implicitly access element -->\r\n      <ng-template #fantasyCounterpartEdit>\r\n        <div>\r\n          <form #f=\"ngForm\"\r\n              matEditLens\r\n              (ngSubmit)=\"onSubmitFantasyCounterparts(element, f)\"\r\n              [(matEditLensPreservedFormValue)]=\"fantasyValues.for(element).value\">\r\n            <div mat-edit-fill>\r\n              <mat-selection-list [ngModel]=\"element.fantasyCounterparts\"\r\n                  name=\"fantasyCounterparts\"\r\n                  aria-label=\"Fantasy Element Counterparts\">\r\n                @for (fantasyElement of FANTASY_ELEMENTS; track fantasyElement) {\r\n                  <mat-list-option\r\n                    [value]=\"fantasyElement\"\r\n                    checkboxPosition=\"before\">{{fantasyElement}}</mat-list-option>\r\n                }\r\n              </mat-selection-list>\r\n            </div>\r\n            <div mat-edit-actions>\r\n              <button mat-button type=\"submit\">Confirm</button>\r\n              <button mat-button matEditRevert>Revert</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </ng-template>\r\n\r\n      <span *matRowHoverContent>\r\n        <button mat-icon-button matEditOpen><mat-icon>arrow_drop_down</mat-icon></button>\r\n      </span>\r\n    </td>\r\n  </ng-container>\r\n</table>\r\n", styles: [".example-table {\r\n  width: 100%;\r\n}\r\n\r\n.example-table th {\r\n  text-align: left;\r\n}\r\n\r\n.example-table td,\r\n.example-table th {\r\n  width: 16%;\r\n}\r\n"] }]
        }], ctorParameters: () => [{ type: i1.MatSnackBar }] });
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ExampleDataSource extends DataSource {
    constructor() {
        super(...arguments);
        /** Stream of data that is provided to the table. */
        this.data = new BehaviorSubject(ELEMENT_DATA);
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect() {
        return this.data;
    }
    disconnect() { }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci1lZGl0LW1hdC10YWJsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwtZXhwZXJpbWVudGFsL3BvcG92ZXItZWRpdC9wb3BvdmVyLWVkaXQtbWF0LXRhYmxlL3BvcG92ZXItZWRpdC1tYXQtdGFibGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9wb3BvdmVyLWVkaXQvcG9wb3Zlci1lZGl0LW1hdC10YWJsZS9wb3BvdmVyLWVkaXQtbWF0LXRhYmxlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUNwRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUUsb0JBQW9CLEVBQUMsTUFBTSx3Q0FBd0MsQ0FBQztBQUNoRyxPQUFPLEVBQVMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQ3hELE9BQU8sRUFBQyxlQUFlLEVBQWEsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxrQkFBa0Is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LDBCQUEwQjtrR0FBMUIsMEJBQTBCLDBGQzlOdkMseXVOQWlMQSxrT0RpQ0ksY0FBYyxnaENBQ2Qsb0JBQW9CLGtKQUNwQixXQUFXLHM2Q0FDWCxvQkFBb0Isd3hCQUNwQixrQkFBa0IseU9BQ2xCLGNBQWMsMFdBQ2QsZUFBZSx3VUFDZixhQUFhLG1MQUNiLGlCQUFpQiw4V0FDakIsYUFBYTs7MkZBR0osMEJBQTBCO2tCQWxCdEMsU0FBUzsrQkFDRSxnQ0FBZ0MsY0FHOUIsSUFBSSxXQUNQO3dCQUNQLGNBQWM7d0JBQ2Qsb0JBQW9CO3dCQUNwQixXQUFXO3dCQUNYLG9CQUFvQjt3QkFDcEIsa0JBQWtCO3dCQUNsQixjQUFjO3dCQUNkLGVBQWU7d0JBQ2YsYUFBYTt3QkFDYixpQkFBaUI7d0JBQ2pCLGFBQWE7cUJBQ2Q7O0FBb0VIOzs7Ozs7R0FNRztBQUNILE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxVQUEyQjtJQUFsRTs7UUFDRSxvREFBb0Q7UUFDcEQsU0FBSSxHQUFHLElBQUksZUFBZSxDQUFvQixZQUFZLENBQUMsQ0FBQztJQVE5RCxDQUFDO0lBTkMsaUdBQWlHO0lBQ2pHLE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUVELFVBQVUsS0FBSSxDQUFDO0NBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0RhdGFTb3VyY2V9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XHJcbmltcG9ydCB7Rm9ybVZhbHVlQ29udGFpbmVyLCBDZGtQb3BvdmVyRWRpdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrLWV4cGVyaW1lbnRhbC9wb3BvdmVyLWVkaXQnO1xyXG5pbXBvcnQge05nRm9ybSwgRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtNYXRTbmFja0Jhcn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcclxuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGV9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQge01hdExpc3RNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xpc3QnO1xyXG5pbXBvcnQge01hdENoZWNrYm94TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XHJcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XHJcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xyXG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XHJcbmltcG9ydCB7TWF0Rm9ybUZpZWxkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcclxuaW1wb3J0IHtNYXRQb3BvdmVyRWRpdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwtZXhwZXJpbWVudGFsL3BvcG92ZXItZWRpdCc7XHJcbmltcG9ydCB7TWF0VGFibGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcclxuXHJcbmV4cG9ydCB0eXBlIEVsZW1lbnRUeXBlID0gJ01ldGFsJyB8ICdTZW1pbWV0YWwnIHwgJ05vbm1ldGFsJztcclxuXHJcbmV4cG9ydCB0eXBlIEZhbnRhc3lFbGVtZW50ID0gJ0VhcnRoJyB8ICdXYXRlcicgfCAnV2luZCcgfCAnRmlyZScgfCAnTGlnaHQnIHwgJ0RhcmsnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQZXJpb2RpY0VsZW1lbnQge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICB0eXBlOiBFbGVtZW50VHlwZTtcclxuICBwb3NpdGlvbjogbnVtYmVyO1xyXG4gIHdlaWdodDogbnVtYmVyO1xyXG4gIHN5bWJvbDogc3RyaW5nO1xyXG4gIGZhbnRhc3lDb3VudGVycGFydHM6IEZhbnRhc3lFbGVtZW50W107XHJcbn1cclxuXHJcbmNvbnN0IEVMRU1FTlRfREFUQTogUGVyaW9kaWNFbGVtZW50W10gPSBbXHJcbiAge1xyXG4gICAgcG9zaXRpb246IDEsXHJcbiAgICBuYW1lOiAnSHlkcm9nZW4nLFxyXG4gICAgdHlwZTogJ05vbm1ldGFsJyxcclxuICAgIHdlaWdodDogMS4wMDc5LFxyXG4gICAgc3ltYm9sOiAnSCcsXHJcbiAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbJ0ZpcmUnLCAnV2luZCcsICdMaWdodCddLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcG9zaXRpb246IDIsXHJcbiAgICBuYW1lOiAnSGVsaXVtJyxcclxuICAgIHR5cGU6ICdOb25tZXRhbCcsXHJcbiAgICB3ZWlnaHQ6IDQuMDAyNixcclxuICAgIHN5bWJvbDogJ0hlJyxcclxuICAgIGZhbnRhc3lDb3VudGVycGFydHM6IFsnV2luZCcsICdMaWdodCddLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcG9zaXRpb246IDMsXHJcbiAgICBuYW1lOiAnTGl0aGl1bScsXHJcbiAgICB0eXBlOiAnTWV0YWwnLFxyXG4gICAgd2VpZ2h0OiA2Ljk0MSxcclxuICAgIHN5bWJvbDogJ0xpJyxcclxuICAgIGZhbnRhc3lDb3VudGVycGFydHM6IFtdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcG9zaXRpb246IDQsXHJcbiAgICBuYW1lOiAnQmVyeWxsaXVtJyxcclxuICAgIHR5cGU6ICdNZXRhbCcsXHJcbiAgICB3ZWlnaHQ6IDkuMDEyMixcclxuICAgIHN5bWJvbDogJ0JlJyxcclxuICAgIGZhbnRhc3lDb3VudGVycGFydHM6IFtdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcG9zaXRpb246IDUsXHJcbiAgICBuYW1lOiAnQm9yb24nLFxyXG4gICAgdHlwZTogJ1NlbWltZXRhbCcsXHJcbiAgICB3ZWlnaHQ6IDEwLjgxMSxcclxuICAgIHN5bWJvbDogJ0InLFxyXG4gICAgZmFudGFzeUNvdW50ZXJwYXJ0czogW10sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwb3NpdGlvbjogNixcclxuICAgIG5hbWU6ICdDYXJib24nLFxyXG4gICAgdHlwZTogJ05vbm1ldGFsJyxcclxuICAgIHdlaWdodDogMTIuMDEwNyxcclxuICAgIHN5bWJvbDogJ0MnLFxyXG4gICAgZmFudGFzeUNvdW50ZXJwYXJ0czogWydFYXJ0aCcsICdEYXJrJ10sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwb3NpdGlvbjogNyxcclxuICAgIG5hbWU6ICdOaXRyb2dlbicsXHJcbiAgICB0eXBlOiAnTm9ubWV0YWwnLFxyXG4gICAgd2VpZ2h0OiAxNC4wMDY3LFxyXG4gICAgc3ltYm9sOiAnTicsXHJcbiAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbJ1dpbmQnXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHBvc2l0aW9uOiA4LFxyXG4gICAgbmFtZTogJ094eWdlbicsXHJcbiAgICB0eXBlOiAnTm9ubWV0YWwnLFxyXG4gICAgd2VpZ2h0OiAxNS45OTk0LFxyXG4gICAgc3ltYm9sOiAnTycsXHJcbiAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbJ0ZpcmUnLCAnV2F0ZXInLCAnV2luZCddLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcG9zaXRpb246IDksXHJcbiAgICBuYW1lOiAnRmx1b3JpbmUnLFxyXG4gICAgdHlwZTogJ05vbm1ldGFsJyxcclxuICAgIHdlaWdodDogMTguOTk4NCxcclxuICAgIHN5bWJvbDogJ0YnLFxyXG4gICAgZmFudGFzeUNvdW50ZXJwYXJ0czogW10sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwb3NpdGlvbjogMTAsXHJcbiAgICBuYW1lOiAnTmVvbicsXHJcbiAgICB0eXBlOiAnTm9ubWV0YWwnLFxyXG4gICAgd2VpZ2h0OiAyMC4xNzk3LFxyXG4gICAgc3ltYm9sOiAnTmUnLFxyXG4gICAgZmFudGFzeUNvdW50ZXJwYXJ0czogWydMaWdodCddLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcG9zaXRpb246IDExLFxyXG4gICAgbmFtZTogJ1NvZGl1bScsXHJcbiAgICB0eXBlOiAnTWV0YWwnLFxyXG4gICAgd2VpZ2h0OiAyMi45ODk3LFxyXG4gICAgc3ltYm9sOiAnTmEnLFxyXG4gICAgZmFudGFzeUNvdW50ZXJwYXJ0czogWydFYXJ0aCcsICdXYXRlciddLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcG9zaXRpb246IDEyLFxyXG4gICAgbmFtZTogJ01hZ25lc2l1bScsXHJcbiAgICB0eXBlOiAnTWV0YWwnLFxyXG4gICAgd2VpZ2h0OiAyNC4zMDUsXHJcbiAgICBzeW1ib2w6ICdNZycsXHJcbiAgICBmYW50YXN5Q291bnRlcnBhcnRzOiBbXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHBvc2l0aW9uOiAxMyxcclxuICAgIG5hbWU6ICdBbHVtaW51bScsXHJcbiAgICB0eXBlOiAnTWV0YWwnLFxyXG4gICAgd2VpZ2h0OiAyNi45ODE1LFxyXG4gICAgc3ltYm9sOiAnQWwnLFxyXG4gICAgZmFudGFzeUNvdW50ZXJwYXJ0czogW10sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwb3NpdGlvbjogMTQsXHJcbiAgICBuYW1lOiAnU2lsaWNvbicsXHJcbiAgICB0eXBlOiAnU2VtaW1ldGFsJyxcclxuICAgIHdlaWdodDogMjguMDg1NSxcclxuICAgIHN5bWJvbDogJ1NpJyxcclxuICAgIGZhbnRhc3lDb3VudGVycGFydHM6IFtdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcG9zaXRpb246IDE1LFxyXG4gICAgbmFtZTogJ1Bob3NwaG9ydXMnLFxyXG4gICAgdHlwZTogJ05vbm1ldGFsJyxcclxuICAgIHdlaWdodDogMzAuOTczOCxcclxuICAgIHN5bWJvbDogJ1AnLFxyXG4gICAgZmFudGFzeUNvdW50ZXJwYXJ0czogW10sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwb3NpdGlvbjogMTYsXHJcbiAgICBuYW1lOiAnU3VsZnVyJyxcclxuICAgIHR5cGU6ICdOb25tZXRhbCcsXHJcbiAgICB3ZWlnaHQ6IDMyLjA2NSxcclxuICAgIHN5bWJvbDogJ1MnLFxyXG4gICAgZmFudGFzeUNvdW50ZXJwYXJ0czogW10sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwb3NpdGlvbjogMTcsXHJcbiAgICBuYW1lOiAnQ2hsb3JpbmUnLFxyXG4gICAgdHlwZTogJ05vbm1ldGFsJyxcclxuICAgIHdlaWdodDogMzUuNDUzLFxyXG4gICAgc3ltYm9sOiAnQ2wnLFxyXG4gICAgZmFudGFzeUNvdW50ZXJwYXJ0czogW10sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwb3NpdGlvbjogMTgsXHJcbiAgICBuYW1lOiAnQXJnb24nLFxyXG4gICAgdHlwZTogJ05vbm1ldGFsJyxcclxuICAgIHdlaWdodDogMzkuOTQ4LFxyXG4gICAgc3ltYm9sOiAnQXInLFxyXG4gICAgZmFudGFzeUNvdW50ZXJwYXJ0czogW10sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwb3NpdGlvbjogMTksXHJcbiAgICBuYW1lOiAnUG90YXNzaXVtJyxcclxuICAgIHR5cGU6ICdNZXRhbCcsXHJcbiAgICB3ZWlnaHQ6IDM5LjA5ODMsXHJcbiAgICBzeW1ib2w6ICdLJyxcclxuICAgIGZhbnRhc3lDb3VudGVycGFydHM6IFtdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcG9zaXRpb246IDIwLFxyXG4gICAgbmFtZTogJ0NhbGNpdW0nLFxyXG4gICAgdHlwZTogJ01ldGFsJyxcclxuICAgIHdlaWdodDogNDAuMDc4LFxyXG4gICAgc3ltYm9sOiAnQ2EnLFxyXG4gICAgZmFudGFzeUNvdW50ZXJwYXJ0czogW10sXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IFRZUEVTOiByZWFkb25seSBFbGVtZW50VHlwZVtdID0gWydNZXRhbCcsICdTZW1pbWV0YWwnLCAnTm9ubWV0YWwnXTtcclxuY29uc3QgRkFOVEFTWV9FTEVNRU5UUzogcmVhZG9ubHkgRmFudGFzeUVsZW1lbnRbXSA9IFtcclxuICAnRWFydGgnLFxyXG4gICdXYXRlcicsXHJcbiAgJ1dpbmQnLFxyXG4gICdGaXJlJyxcclxuICAnTGlnaHQnLFxyXG4gICdEYXJrJyxcclxuXTtcclxuXHJcbi8qKlxyXG4gKiBAdGl0bGUgTWF0ZXJpYWwgUG9wb3ZlciBFZGl0IG9uIGEgTWF0ZXJpYWwgZGF0YS10YWJsZVxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwb3BvdmVyLWVkaXQtbWF0LXRhYmxlLWV4YW1wbGUnLFxyXG4gIHN0eWxlVXJsczogWydwb3BvdmVyLWVkaXQtbWF0LXRhYmxlLWV4YW1wbGUuY3NzJ10sXHJcbiAgdGVtcGxhdGVVcmw6ICdwb3BvdmVyLWVkaXQtbWF0LXRhYmxlLWV4YW1wbGUuaHRtbCcsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBNYXRUYWJsZU1vZHVsZSxcclxuICAgIENka1BvcG92ZXJFZGl0TW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBNYXRQb3BvdmVyRWRpdE1vZHVsZSxcclxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuICAgIE1hdElucHV0TW9kdWxlLFxyXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxyXG4gICAgTWF0SWNvbk1vZHVsZSxcclxuICAgIE1hdENoZWNrYm94TW9kdWxlLFxyXG4gICAgTWF0TGlzdE1vZHVsZSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9wb3ZlckVkaXRNYXRUYWJsZUV4YW1wbGUge1xyXG4gIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdID0gW1xyXG4gICAgJ3Bvc2l0aW9uJyxcclxuICAgICduYW1lJyxcclxuICAgICd0eXBlJyxcclxuICAgICd3ZWlnaHQnLFxyXG4gICAgJ3N5bWJvbCcsXHJcbiAgICAnZmFudGFzeUNvdW50ZXJwYXJ0JyxcclxuICBdO1xyXG4gIGRhdGFTb3VyY2UgPSBuZXcgRXhhbXBsZURhdGFTb3VyY2UoKTtcclxuXHJcbiAgbmFtZUVkaXRFbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgcmVhZG9ubHkgVFlQRVMgPSBUWVBFUztcclxuICByZWFkb25seSBGQU5UQVNZX0VMRU1FTlRTID0gRkFOVEFTWV9FTEVNRU5UUztcclxuXHJcbiAgcmVhZG9ubHkgbmFtZVZhbHVlcyA9IG5ldyBGb3JtVmFsdWVDb250YWluZXI8UGVyaW9kaWNFbGVtZW50LCBhbnk+KCk7XHJcbiAgcmVhZG9ubHkgd2VpZ2h0VmFsdWVzID0gbmV3IEZvcm1WYWx1ZUNvbnRhaW5lcjxQZXJpb2RpY0VsZW1lbnQsIGFueT4oKTtcclxuICByZWFkb25seSB0eXBlVmFsdWVzID0gbmV3IEZvcm1WYWx1ZUNvbnRhaW5lcjxQZXJpb2RpY0VsZW1lbnQsIGFueT4oKTtcclxuICByZWFkb25seSBmYW50YXN5VmFsdWVzID0gbmV3IEZvcm1WYWx1ZUNvbnRhaW5lcjxQZXJpb2RpY0VsZW1lbnQsIGFueT4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBfc25hY2tCYXI6IE1hdFNuYWNrQmFyKSB7fVxyXG5cclxuICBvblN1Ym1pdE5hbWUoZWxlbWVudDogUGVyaW9kaWNFbGVtZW50LCBmOiBOZ0Zvcm0pIHtcclxuICAgIGlmICghZi52YWxpZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudC5uYW1lID0gZi52YWx1ZS5uYW1lO1xyXG4gIH1cclxuXHJcbiAgb25TdWJtaXRXZWlnaHQoZWxlbWVudDogUGVyaW9kaWNFbGVtZW50LCBmOiBOZ0Zvcm0pIHtcclxuICAgIGlmICghZi52YWxpZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudC53ZWlnaHQgPSBmLnZhbHVlLndlaWdodDtcclxuICB9XHJcblxyXG4gIG9uU3VibWl0VHlwZShlbGVtZW50OiBQZXJpb2RpY0VsZW1lbnQsIGY6IE5nRm9ybSkge1xyXG4gICAgaWYgKCFmLnZhbGlkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBlbGVtZW50LnR5cGUgPSBmLnZhbHVlLnR5cGVbMF07XHJcbiAgfVxyXG5cclxuICBvblN1Ym1pdEZhbnRhc3lDb3VudGVycGFydHMoZWxlbWVudDogUGVyaW9kaWNFbGVtZW50LCBmOiBOZ0Zvcm0pIHtcclxuICAgIGlmICghZi52YWxpZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudC5mYW50YXN5Q291bnRlcnBhcnRzID0gZi52YWx1ZS5mYW50YXN5Q291bnRlcnBhcnRzO1xyXG4gIH1cclxuXHJcbiAgZ29vZEpvYihlbGVtZW50OiBQZXJpb2RpY0VsZW1lbnQpIHtcclxuICAgIHRoaXMuX3NuYWNrQmFyLm9wZW4oYFdheSB0byBnbywgJHtlbGVtZW50Lm5hbWV9IWAsIHVuZGVmaW5lZCwge2R1cmF0aW9uOiAyMDAwfSk7XHJcbiAgfVxyXG5cclxuICBiYWRKb2IoZWxlbWVudDogUGVyaW9kaWNFbGVtZW50KSB7XHJcbiAgICB0aGlzLl9zbmFja0Jhci5vcGVuKGBZb3UgaGF2ZSBmYWlsZWQgbWUgZm9yIHRoZSBsYXN0IHRpbWUsICMke2VsZW1lbnQucG9zaXRpb259LmAsIHVuZGVmaW5lZCwge1xyXG4gICAgICBkdXJhdGlvbjogMjAwMCxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIERhdGEgc291cmNlIHRvIHByb3ZpZGUgd2hhdCBkYXRhIHNob3VsZCBiZSByZW5kZXJlZCBpbiB0aGUgdGFibGUuIE5vdGUgdGhhdCB0aGUgZGF0YSBzb3VyY2VcclxuICogY2FuIHJldHJpZXZlIGl0cyBkYXRhIGluIGFueSB3YXkuIEluIHRoaXMgY2FzZSwgdGhlIGRhdGEgc291cmNlIGlzIHByb3ZpZGVkIGEgcmVmZXJlbmNlXHJcbiAqIHRvIGEgY29tbW9uIGRhdGEgYmFzZSwgRXhhbXBsZURhdGFiYXNlLiBJdCBpcyBub3QgdGhlIGRhdGEgc291cmNlJ3MgcmVzcG9uc2liaWxpdHkgdG8gbWFuYWdlXHJcbiAqIHRoZSB1bmRlcmx5aW5nIGRhdGEuIEluc3RlYWQsIGl0IG9ubHkgbmVlZHMgdG8gdGFrZSB0aGUgZGF0YSBhbmQgc2VuZCB0aGUgdGFibGUgZXhhY3RseSB3aGF0XHJcbiAqIHNob3VsZCBiZSByZW5kZXJlZC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBFeGFtcGxlRGF0YVNvdXJjZSBleHRlbmRzIERhdGFTb3VyY2U8UGVyaW9kaWNFbGVtZW50PiB7XHJcbiAgLyoqIFN0cmVhbSBvZiBkYXRhIHRoYXQgaXMgcHJvdmlkZWQgdG8gdGhlIHRhYmxlLiAqL1xyXG4gIGRhdGEgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFBlcmlvZGljRWxlbWVudFtdPihFTEVNRU5UX0RBVEEpO1xyXG5cclxuICAvKiogQ29ubmVjdCBmdW5jdGlvbiBjYWxsZWQgYnkgdGhlIHRhYmxlIHRvIHJldHJpZXZlIG9uZSBzdHJlYW0gY29udGFpbmluZyB0aGUgZGF0YSB0byByZW5kZXIuICovXHJcbiAgY29ubmVjdCgpOiBPYnNlcnZhYmxlPFBlcmlvZGljRWxlbWVudFtdPiB7XHJcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xyXG4gIH1cclxuXHJcbiAgZGlzY29ubmVjdCgpIHt9XHJcbn1cclxuIiwiPHRhYmxlIGNsYXNzPVwiZXhhbXBsZS10YWJsZVwiIG1hdC10YWJsZSBlZGl0YWJsZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCI+XHJcbiAgPCEtLVxyXG4gICAgVGhpcyBlZGl0IGxlbnMgaXMgc3BlY2lmaWVkIG91dHNpZGUgb2YgdGhlIGNlbGwgYW5kIG11c3QgZXhwbGljaXRseSBkZWNsYXJlXHJcbiAgICBpdHMgY29udGV4dC4gSXQgY291bGQgYmUgcmV1c2VkIGluIG11bHRpcGxlIGNlbGxzLlxyXG4gIC0tPlxyXG4gIDxuZy10ZW1wbGF0ZSAjd2VpZ2h0RWRpdCBsZXQtZWxlbWVudD5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxmb3JtICNmPVwibmdGb3JtXCJcclxuICAgICAgICAgIG1hdEVkaXRMZW5zXHJcbiAgICAgICAgICAobmdTdWJtaXQpPVwib25TdWJtaXRXZWlnaHQoZWxlbWVudCwgZilcIlxyXG4gICAgICAgICAgWyhtYXRFZGl0TGVuc1ByZXNlcnZlZEZvcm1WYWx1ZSldPVwid2VpZ2h0VmFsdWVzLmZvcihlbGVtZW50KS52YWx1ZVwiPlxyXG4gICAgICAgIDxkaXYgbWF0LWVkaXQtY29udGVudD5cclxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBbbmdNb2RlbF09XCJlbGVtZW50LndlaWdodFwiIG5hbWU9XCJ3ZWlnaHRcIiByZXF1aXJlZD5cclxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gIDwvbmctdGVtcGxhdGU+XHJcblxyXG4gIDwhLS0gUG9zaXRpb24gQ29sdW1uIC0tPlxyXG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwicG9zaXRpb25cIj5cclxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IE5vLiA8L3RoPlxyXG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj5cclxuICAgICAge3tlbGVtZW50LnBvc2l0aW9ufX1cclxuXHJcbiAgICAgIDwhLS0gUm93IGhvdmVyIGNvbnRlbnQgaW4gYSBub24tZWRpdCBjZWxsLiAtLT5cclxuICAgICAgPHNwYW4gKm1hdFJvd0hvdmVyQ29udGVudD5cclxuICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwiZ29vZEpvYihlbGVtZW50KVwiPlxyXG4gICAgICAgICAgPG1hdC1pY29uPnRodW1iX3VwPC9tYXQtaWNvbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwiYmFkSm9iKGVsZW1lbnQpXCI+XHJcbiAgICAgICAgICA8bWF0LWljb24+dGh1bWJfZG93bjwvbWF0LWljb24+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvdGQ+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gIDwhLS0gTmFtZSBDb2x1bW4gLS0+XHJcbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJuYW1lXCI+XHJcbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPlxyXG4gICAgICBOYW1lXHJcbiAgICAgIDxtYXQtY2hlY2tib3hcclxuICAgICAgICAgIFsobmdNb2RlbCldPVwibmFtZUVkaXRFbmFibGVkXCI+RWRpdCBlbmFibGVkPC9tYXQtY2hlY2tib3g+XHJcbiAgICA8L3RoPlxyXG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIlxyXG4gICAgICAgIFttYXRQb3BvdmVyRWRpdF09XCJuYW1lRWRpdFwiXHJcbiAgICAgICAgW21hdFBvcG92ZXJFZGl0RGlzYWJsZWRdPVwiIW5hbWVFZGl0RW5hYmxlZFwiPlxyXG4gICAgICB7e2VsZW1lbnQubmFtZX19XHJcblxyXG4gICAgICA8IS0tIFRoaXMgZWRpdCBpcyBkZWZpbmVkIGluIHRoZSBjZWxsIGFuZCBjYW4gaW1wbGljaXRseSBhY2Nlc3MgZWxlbWVudCAtLT5cclxuICAgICAgPG5nLXRlbXBsYXRlICNuYW1lRWRpdD5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGZvcm0gI2Y9XCJuZ0Zvcm1cIlxyXG4gICAgICAgICAgICAgIG1hdEVkaXRMZW5zXHJcbiAgICAgICAgICAgICAgKG5nU3VibWl0KT1cIm9uU3VibWl0TmFtZShlbGVtZW50LCBmKVwiXHJcbiAgICAgICAgICAgICAgWyhtYXRFZGl0TGVuc1ByZXNlcnZlZEZvcm1WYWx1ZSldPVwibmFtZVZhbHVlcy5mb3IoZWxlbWVudCkudmFsdWVcIj5cclxuICAgICAgICAgICAgPGgyIG1hdC1lZGl0LXRpdGxlPk5hbWU8L2gyPlxyXG4gICAgICAgICAgICA8ZGl2IG1hdC1lZGl0LWNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IFtuZ01vZGVsXT1cImVsZW1lbnQubmFtZVwiIG5hbWU9XCJuYW1lXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgbWF0LWVkaXQtYWN0aW9ucz5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gdHlwZT1cInN1Ym1pdFwiPkNvbmZpcm08L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0RWRpdFJldmVydD5SZXZlcnQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0RWRpdENsb3NlPkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25nLXRlbXBsYXRlPlxyXG5cclxuICAgICAgQGlmIChuYW1lRWRpdEVuYWJsZWQpIHtcclxuICAgICAgICA8c3BhbiAqbWF0Um93SG92ZXJDb250ZW50PlxyXG4gICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gbWF0RWRpdE9wZW4+PG1hdC1pY29uPmVkaXQ8L21hdC1pY29uPjwvYnV0dG9uPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgfVxyXG4gICAgPC90ZD5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgPCEtLSBUeXBlIENvbHVtbiAtLT5cclxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cInR5cGVcIj5cclxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IFR5cGUgPC90aD5cclxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCJcclxuICAgICAgICBbbWF0UG9wb3ZlckVkaXRdPVwidHlwZUVkaXRcIj5cclxuICAgICAge3tlbGVtZW50LnR5cGV9fVxyXG5cclxuICAgICAgPCEtLSBUaGlzIGVkaXQgaXMgZGVmaW5lZCBpbiB0aGUgY2VsbCBhbmQgY2FuIGltcGxpY2l0bHkgYWNjZXNzIGVsZW1lbnQgLS0+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSAjdHlwZUVkaXQ+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxmb3JtICNmPVwibmdGb3JtXCJcclxuICAgICAgICAgICAgICBtYXRFZGl0TGVuc1xyXG4gICAgICAgICAgICAgIG1hdEVkaXRDbG9zZVxyXG4gICAgICAgICAgICAgIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdFR5cGUoZWxlbWVudCwgZilcIlxyXG4gICAgICAgICAgICAgIFsobWF0RWRpdExlbnNQcmVzZXJ2ZWRGb3JtVmFsdWUpXT1cInR5cGVWYWx1ZXMuZm9yKGVsZW1lbnQpLnZhbHVlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgbWF0LWVkaXQtZmlsbD5cclxuICAgICAgICAgICAgICA8bWF0LXNlbGVjdGlvbi1saXN0IFttdWx0aXBsZV09XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0eXBlXCJcclxuICAgICAgICAgICAgICAgICAgW25nTW9kZWxdPVwiW2VsZW1lbnQudHlwZV1cIlxyXG4gICAgICAgICAgICAgICAgICAoc2VsZWN0aW9uQ2hhbmdlKT1cImYubmdTdWJtaXQuZW1pdCgpXCJcclxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkVsZW1lbnQgdHlwZVwiPlxyXG4gICAgICAgICAgICAgICAgQGZvciAodHlwZSBvZiBUWVBFUzsgdHJhY2sgdHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICA8bWF0LWxpc3Qtb3B0aW9uIFt2YWx1ZV09XCJ0eXBlXCI+e3t0eXBlfX08L21hdC1saXN0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L21hdC1zZWxlY3Rpb24tbGlzdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmctdGVtcGxhdGU+XHJcblxyXG4gICAgICA8c3BhbiAqbWF0Um93SG92ZXJDb250ZW50PlxyXG4gICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIG1hdEVkaXRPcGVuPjxtYXQtaWNvbj5hcnJvd19kcm9wX2Rvd248L21hdC1pY29uPjwvYnV0dG9uPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L3RkPlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG5cclxuICA8IS0tIFdlaWdodCBDb2x1bW4gLS0+XHJcbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJ3ZWlnaHRcIj5cclxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IFdlaWdodCA8L3RoPlxyXG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIlxyXG4gICAgICAgIFttYXRQb3BvdmVyRWRpdF09XCJ3ZWlnaHRFZGl0XCIgW21hdFBvcG92ZXJFZGl0Q29udGV4dF09XCJlbGVtZW50XCI+XHJcbiAgICAgIHt7ZWxlbWVudC53ZWlnaHR9fVxyXG5cclxuICAgICAgPHNwYW4gKm1hdFJvd0hvdmVyQ29udGVudD5cclxuICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBtYXRFZGl0T3Blbj48bWF0LWljb24+ZWRpdDwvbWF0LWljb24+PC9idXR0b24+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvdGQ+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gIDwhLS0gU3ltYm9sIENvbHVtbiAtLT5cclxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cInN5bWJvbFwiPlxyXG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gU3ltYm9sIDwvdGg+XHJcbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQuc3ltYm9sfX0gPC90ZD5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgPHRyIG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zXCI+PC90cj5cclxuICA8dHIgbWF0LXJvdyAqbWF0Um93RGVmPVwibGV0IHJvdzsgY29sdW1uczogZGlzcGxheWVkQ29sdW1ucztcIj48L3RyPlxyXG5cclxuICA8IS0tIEZhbnRhc3kgQ291bnRlcnBhcnRzIENvbHVtbiAtLT5cclxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cImZhbnRhc3lDb3VudGVycGFydFwiPlxyXG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gRmFudGFzeSBDb3VudGVycGFydHMgPC90aD5cclxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCJcclxuICAgICAgICBbbWF0UG9wb3ZlckVkaXRdPVwiZmFudGFzeUNvdW50ZXJwYXJ0RWRpdFwiPlxyXG4gICAgICB7e2VsZW1lbnQuZmFudGFzeUNvdW50ZXJwYXJ0cy5qb2luKCcsICcpfX1cclxuXHJcbiAgICAgIDwhLS0gVGhpcyBlZGl0IGlzIGRlZmluZWQgaW4gdGhlIGNlbGwgYW5kIGNhbiBpbXBsaWNpdGx5IGFjY2VzcyBlbGVtZW50IC0tPlxyXG4gICAgICA8bmctdGVtcGxhdGUgI2ZhbnRhc3lDb3VudGVycGFydEVkaXQ+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxmb3JtICNmPVwibmdGb3JtXCJcclxuICAgICAgICAgICAgICBtYXRFZGl0TGVuc1xyXG4gICAgICAgICAgICAgIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdEZhbnRhc3lDb3VudGVycGFydHMoZWxlbWVudCwgZilcIlxyXG4gICAgICAgICAgICAgIFsobWF0RWRpdExlbnNQcmVzZXJ2ZWRGb3JtVmFsdWUpXT1cImZhbnRhc3lWYWx1ZXMuZm9yKGVsZW1lbnQpLnZhbHVlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgbWF0LWVkaXQtZmlsbD5cclxuICAgICAgICAgICAgICA8bWF0LXNlbGVjdGlvbi1saXN0IFtuZ01vZGVsXT1cImVsZW1lbnQuZmFudGFzeUNvdW50ZXJwYXJ0c1wiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJmYW50YXN5Q291bnRlcnBhcnRzXCJcclxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkZhbnRhc3kgRWxlbWVudCBDb3VudGVycGFydHNcIj5cclxuICAgICAgICAgICAgICAgIEBmb3IgKGZhbnRhc3lFbGVtZW50IG9mIEZBTlRBU1lfRUxFTUVOVFM7IHRyYWNrIGZhbnRhc3lFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgIDxtYXQtbGlzdC1vcHRpb25cclxuICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwiZmFudGFzeUVsZW1lbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrYm94UG9zaXRpb249XCJiZWZvcmVcIj57e2ZhbnRhc3lFbGVtZW50fX08L21hdC1saXN0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L21hdC1zZWxlY3Rpb24tbGlzdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgbWF0LWVkaXQtYWN0aW9ucz5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gdHlwZT1cInN1Ym1pdFwiPkNvbmZpcm08L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0RWRpdFJldmVydD5SZXZlcnQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmctdGVtcGxhdGU+XHJcblxyXG4gICAgICA8c3BhbiAqbWF0Um93SG92ZXJDb250ZW50PlxyXG4gICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIG1hdEVkaXRPcGVuPjxtYXQtaWNvbj5hcnJvd19kcm9wX2Rvd248L21hdC1pY29uPjwvYnV0dG9uPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L3RkPlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG48L3RhYmxlPlxyXG4iXX0=