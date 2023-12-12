import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import * as i2$1 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i8 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i7 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i6 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i5 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i3 from '@angular/material-experimental/popover-edit';
import { MatPopoverEditModule } from '@angular/material-experimental/popover-edit';
import * as i2 from '@angular/cdk-experimental/popover-edit';
import { CdkPopoverEditModule, FormValueContainer } from '@angular/cdk-experimental/popover-edit';
import * as i1 from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import * as i1$1 from '@angular/material/snack-bar';
import * as i11 from '@angular/material/list';
import { MatListModule } from '@angular/material/list';
import * as i10 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';

const PERSON_DATA = [
    { id: 1, firstName: 'Terra', middleName: 'Maduin', lastName: 'Branford' },
    { id: 2, firstName: 'Locke', middleName: '', lastName: 'Cole' },
    { id: 3, firstName: 'Celes', middleName: 'Gestahl', lastName: 'Chere' },
    { id: 4, firstName: 'Edgar', middleName: 'Roni', lastName: 'Figaro' },
    { id: 5, firstName: 'Sabin', middleName: 'Rene', lastName: 'Figaro' },
    { id: 6, firstName: 'Clyde', middleName: '"Shadow"', lastName: 'Arrowny' },
    { id: 7, firstName: 'Setzer', middleName: '', lastName: 'Gabbiani' },
    { id: 8, firstName: 'Cid', middleName: 'Del Norte', lastName: 'Marquez' },
    { id: 9, firstName: 'Mog', middleName: '', lastName: 'McMoogle' },
];
/**
 * @title Material Popover Edit spanning multiple columns on a Material data-table
 */
class PopoverEditCellSpanMatTableExample {
    constructor() {
        this.displayedColumns = ['id', 'firstName', 'middleName', 'lastName'];
        this.dataSource = new ExampleDataSource$3();
        this.preservedValues = new WeakMap();
    }
    onSubmit(person, f) {
        if (!f.valid) {
            return;
        }
        person.firstName = f.value['firstName'];
        person.middleName = f.value['middleName'];
        person.lastName = f.value['lastName'];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: PopoverEditCellSpanMatTableExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: PopoverEditCellSpanMatTableExample, isStandalone: true, selector: "popover-edit-cell-span-mat-table-example", ngImport: i0, template: "<table class=\"example-table\" mat-table editable [dataSource]=\"dataSource\">\r\n  <ng-template #nameEdit let-ctx>\r\n    <div>\r\n      <form #f=\"ngForm\"\r\n          matEditLens\r\n          (ngSubmit)=\"onSubmit(ctx.person, f)\"\r\n          [matEditLensPreservedFormValue]=\"preservedValues.get(ctx.person)\"\r\n          (matEditLensPreservedFormValueChange)=\"preservedValues.set(ctx.person, $event)\">\r\n        <div mat-edit-content class=\"example-input-container\">\r\n          <mat-form-field>\r\n            <input matInput [ngModel]=\"ctx.person.firstName\" name=\"firstName\" required\r\n                [attr.cdkFocusInitial]=\"ctx.focus === 'firstName' || null\">\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input matInput [ngModel]=\"ctx.person.middleName\" name=\"middleName\"\r\n                [attr.cdkFocusInitial]=\"ctx.focus === 'middleName' || null\">\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input matInput [ngModel]=\"ctx.person.lastName\" name=\"lastName\" required\r\n                [attr.cdkFocusInitial]=\"ctx.focus === 'lastName' || null\">\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div mat-edit-actions>\r\n          <button mat-button type=\"submit\">Confirm</button>\r\n          <button mat-button cdkEditRevert>Revert</button>\r\n          <button mat-button cdkEditClose>Close</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"id\">\r\n    <th mat-header-cell *matHeaderCellDef> No. </th>\r\n    <td mat-cell *matCellDef=\"let person\"> {{person.id}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"firstName\">\r\n    <th mat-header-cell *matHeaderCellDef> First Name </th>\r\n    <td mat-cell *matCellDef=\"let person\"\r\n        [matPopoverEdit]=\"nameEdit\"\r\n        [matPopoverEditContext]=\"{person: person, focus: 'firstName'}\"\r\n        [matPopoverEditColspan]=\"{after: 2}\">\r\n      {{person.firstName}}\r\n\r\n      <span *matRowHoverContent>\r\n        <button mat-icon-button matEditOpen><mat-icon>edit</mat-icon></button>\r\n      </span>\r\n    </td>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container matColumnDef=\"middleName\">\r\n    <th mat-header-cell *matHeaderCellDef> Middle Name </th>\r\n    <td mat-cell *matCellDef=\"let person\"\r\n        [matPopoverEdit]=\"nameEdit\"\r\n        [matPopoverEditContext]=\"{person: person, focus: 'middleName'}\"\r\n        [matPopoverEditColspan]=\"{before:1 , after: 1}\">\r\n      {{person.middleName}}\r\n\r\n      <span *matRowHoverContent>\r\n        <button mat-icon-button matEditOpen><mat-icon>edit</mat-icon></button>\r\n      </span>\r\n    </td>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container matColumnDef=\"lastName\">\r\n    <th mat-header-cell *matHeaderCellDef> Last Name </th>\r\n    <td mat-cell *matCellDef=\"let person\"\r\n        [matPopoverEdit]=\"nameEdit\"\r\n        [matPopoverEditContext]=\"{person: person, focus: 'lastName'}\"\r\n        [matPopoverEditColspan]=\"{before: 2}\">\r\n      {{person.lastName}}\r\n\r\n      <span *matRowHoverContent>\r\n        <button mat-icon-button matEditOpen><mat-icon>edit</mat-icon></button>\r\n      </span>\r\n    </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n", styles: [".example-table {\r\n  width: 100%;\r\n}\r\n\r\n.example-table th {\r\n  text-align: left;\r\n}\r\n\r\n.example-table td,\r\n.example-table th {\r\n  min-width: 300px;\r\n  width: 25%;\r\n}\r\n\r\n.example-input-container {\r\n  display: flex;\r\n  justify-content: stretch;\r\n}\r\n\r\n.example-input-container mat-form-field {\r\n  flex: 1;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i1.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i1.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i1.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "ngmodule", type: CdkPopoverEditModule }, { kind: "directive", type: i2.CdkEditRevert, selector: "button[cdkEditRevert]", inputs: ["type"] }, { kind: "directive", type: i2.CdkEditClose, selector: "[cdkEditClose]" }, { kind: "directive", type: i2.CdkEditable, selector: "table[editable], cdk-table[editable], mat-table[editable]" }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i2$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i2$1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i2$1.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatPopoverEditModule }, { kind: "directive", type: i3.MatPopoverEdit, selector: "[matPopoverEdit]:not([matPopoverEditTabOut])", inputs: ["matPopoverEdit", "matPopoverEditContext", "matPopoverEditColspan", "matPopoverEditDisabled"] }, { kind: "directive", type: i3.MatRowHoverContent, selector: "[matRowHoverContent]" }, { kind: "directive", type: i3.MatEditLens, selector: "form[matEditLens]", inputs: ["matEditLensClickOutBehavior", "matEditLensPreservedFormValue", "matEditLensIgnoreSubmitUnlessValid"], outputs: ["matEditLensPreservedFormValueChange"] }, { kind: "directive", type: i3.MatEditOpen, selector: "[matEditOpen]" }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i5.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i6.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i7.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "component", type: i7.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i8.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: PopoverEditCellSpanMatTableExample, decorators: [{
            type: Component,
            args: [{ selector: 'popover-edit-cell-span-mat-table-example', standalone: true, imports: [
                        MatTableModule,
                        CdkPopoverEditModule,
                        FormsModule,
                        MatPopoverEditModule,
                        MatFormFieldModule,
                        MatInputModule,
                        MatButtonModule,
                        MatIconModule,
                    ], template: "<table class=\"example-table\" mat-table editable [dataSource]=\"dataSource\">\r\n  <ng-template #nameEdit let-ctx>\r\n    <div>\r\n      <form #f=\"ngForm\"\r\n          matEditLens\r\n          (ngSubmit)=\"onSubmit(ctx.person, f)\"\r\n          [matEditLensPreservedFormValue]=\"preservedValues.get(ctx.person)\"\r\n          (matEditLensPreservedFormValueChange)=\"preservedValues.set(ctx.person, $event)\">\r\n        <div mat-edit-content class=\"example-input-container\">\r\n          <mat-form-field>\r\n            <input matInput [ngModel]=\"ctx.person.firstName\" name=\"firstName\" required\r\n                [attr.cdkFocusInitial]=\"ctx.focus === 'firstName' || null\">\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input matInput [ngModel]=\"ctx.person.middleName\" name=\"middleName\"\r\n                [attr.cdkFocusInitial]=\"ctx.focus === 'middleName' || null\">\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input matInput [ngModel]=\"ctx.person.lastName\" name=\"lastName\" required\r\n                [attr.cdkFocusInitial]=\"ctx.focus === 'lastName' || null\">\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div mat-edit-actions>\r\n          <button mat-button type=\"submit\">Confirm</button>\r\n          <button mat-button cdkEditRevert>Revert</button>\r\n          <button mat-button cdkEditClose>Close</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"id\">\r\n    <th mat-header-cell *matHeaderCellDef> No. </th>\r\n    <td mat-cell *matCellDef=\"let person\"> {{person.id}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"firstName\">\r\n    <th mat-header-cell *matHeaderCellDef> First Name </th>\r\n    <td mat-cell *matCellDef=\"let person\"\r\n        [matPopoverEdit]=\"nameEdit\"\r\n        [matPopoverEditContext]=\"{person: person, focus: 'firstName'}\"\r\n        [matPopoverEditColspan]=\"{after: 2}\">\r\n      {{person.firstName}}\r\n\r\n      <span *matRowHoverContent>\r\n        <button mat-icon-button matEditOpen><mat-icon>edit</mat-icon></button>\r\n      </span>\r\n    </td>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container matColumnDef=\"middleName\">\r\n    <th mat-header-cell *matHeaderCellDef> Middle Name </th>\r\n    <td mat-cell *matCellDef=\"let person\"\r\n        [matPopoverEdit]=\"nameEdit\"\r\n        [matPopoverEditContext]=\"{person: person, focus: 'middleName'}\"\r\n        [matPopoverEditColspan]=\"{before:1 , after: 1}\">\r\n      {{person.middleName}}\r\n\r\n      <span *matRowHoverContent>\r\n        <button mat-icon-button matEditOpen><mat-icon>edit</mat-icon></button>\r\n      </span>\r\n    </td>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container matColumnDef=\"lastName\">\r\n    <th mat-header-cell *matHeaderCellDef> Last Name </th>\r\n    <td mat-cell *matCellDef=\"let person\"\r\n        [matPopoverEdit]=\"nameEdit\"\r\n        [matPopoverEditContext]=\"{person: person, focus: 'lastName'}\"\r\n        [matPopoverEditColspan]=\"{before: 2}\">\r\n      {{person.lastName}}\r\n\r\n      <span *matRowHoverContent>\r\n        <button mat-icon-button matEditOpen><mat-icon>edit</mat-icon></button>\r\n      </span>\r\n    </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n", styles: [".example-table {\r\n  width: 100%;\r\n}\r\n\r\n.example-table th {\r\n  text-align: left;\r\n}\r\n\r\n.example-table td,\r\n.example-table th {\r\n  min-width: 300px;\r\n  width: 25%;\r\n}\r\n\r\n.example-input-container {\r\n  display: flex;\r\n  justify-content: stretch;\r\n}\r\n\r\n.example-input-container mat-form-field {\r\n  flex: 1;\r\n}\r\n"] }]
        }] });
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
class ExampleDataSource$3 extends DataSource {
    constructor() {
        super(...arguments);
        /** Stream of data that is provided to the table. */
        this.data = new BehaviorSubject(PERSON_DATA);
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect() {
        return this.data;
    }
    disconnect() { }
}

const ELEMENT_DATA$2 = [
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
 * @title Material Popover Edit on a flex Material data-table
 */
class PopoverEditMatTableFlexExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new ExampleDataSource$2();
        this.preservedNameValues = new WeakMap();
        this.preservedWeightValues = new WeakMap();
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: PopoverEditMatTableFlexExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: PopoverEditMatTableFlexExample, isStandalone: true, selector: "popover-edit-mat-table-flex-example", ngImport: i0, template: "<mat-table class=\"example-table\" editable [dataSource]=\"dataSource\">\r\n  <!--\r\n    This edit lens is specified outside of the cell and must explicitly declare\r\n    its context. It could be reused in multiple cells.\r\n  -->\r\n  <ng-template #weightEdit let-element>\r\n    <div>\r\n      <form #f=\"ngForm\"\r\n          matEditLens\r\n          (ngSubmit)=\"onSubmitWeight(element, f)\"\r\n          [matEditLensPreservedFormValue]=\"preservedWeightValues.get(element)\"\r\n          (matEditLensPreservedFormValueChange)=\"preservedWeightValues.set(element, $event)\">\r\n        <div mat-edit-content>\r\n          <mat-form-field>\r\n            <input matInput type=\"number\" [ngModel]=\"element.weight\" name=\"weight\" required>\r\n          </mat-form-field>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"position\">\r\n    <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"name\">\r\n    <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\"\r\n        [matPopoverEdit]=\"nameEdit\">\r\n      {{element.name}}\r\n\r\n      <!-- This edit is defined in the cell and can implicitly access element -->\r\n      <ng-template #nameEdit>\r\n        <div>\r\n          <form #f=\"ngForm\"\r\n              matEditLens\r\n              (ngSubmit)=\"onSubmitName(element, f)\"\r\n              [matEditLensPreservedFormValue]=\"preservedNameValues.get(element)\"\r\n              (matEditLensPreservedFormValueChange)=\"preservedNameValues.set(element, $event)\">\r\n            <h2 mat-edit-title>Name</h2>\r\n            <div mat-edit-content>\r\n              <mat-form-field>\r\n                <input matInput [ngModel]=\"element.name\" name=\"name\" required>\r\n              </mat-form-field>\r\n            </div>\r\n            <div mat-edit-actions>\r\n              <button mat-button type=\"submit\">Confirm</button>\r\n              <button mat-button matEditRevert>Revert</button>\r\n              <button mat-button matEditClose>Close</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </ng-template>\r\n\r\n      <span *matRowHoverContent>\r\n        <button mat-icon-button matEditOpen><mat-icon>edit</mat-icon></button>\r\n      </span>\r\n    </mat-cell>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container matColumnDef=\"weight\">\r\n    <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\"\r\n        [matPopoverEdit]=\"weightEdit\" [matPopoverEditContext]=\"element\">\r\n      {{element.weight}}\r\n\r\n      <span *matRowHoverContent>\r\n        <button mat-icon-button matEditOpen><mat-icon>edit</mat-icon></button>\r\n      </span>\r\n      </mat-cell>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container matColumnDef=\"symbol\">\r\n    <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\r\n  </ng-container>\r\n\r\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n</mat-table>\r\n", styles: [".example-table {\r\n  width: 100%;\r\n}\r\n\r\n/*.example-table th {\r\n  text-align: left;\r\n}\r\n\r\n.example-table td,\r\n.example-table th {\r\n  width: 25%;\r\n}*/\r\n"], dependencies: [{ kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i1.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i1.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i1.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i2$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2$1.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i2$1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i2$1.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatPopoverEditModule }, { kind: "directive", type: i3.MatPopoverEdit, selector: "[matPopoverEdit]:not([matPopoverEditTabOut])", inputs: ["matPopoverEdit", "matPopoverEditContext", "matPopoverEditColspan", "matPopoverEditDisabled"] }, { kind: "directive", type: i3.MatRowHoverContent, selector: "[matRowHoverContent]" }, { kind: "directive", type: i3.MatEditLens, selector: "form[matEditLens]", inputs: ["matEditLensClickOutBehavior", "matEditLensPreservedFormValue", "matEditLensIgnoreSubmitUnlessValid"], outputs: ["matEditLensPreservedFormValueChange"] }, { kind: "directive", type: i3.MatEditRevert, selector: "button[matEditRevert]" }, { kind: "directive", type: i3.MatEditClose, selector: "[matEditClose]" }, { kind: "directive", type: i3.MatEditOpen, selector: "[matEditOpen]" }, { kind: "directive", type: i2.CdkEditable, selector: "table[editable], cdk-table[editable], mat-table[editable]" }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i5.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i6.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i7.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "component", type: i7.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i8.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: PopoverEditMatTableFlexExample, decorators: [{
            type: Component,
            args: [{ selector: 'popover-edit-mat-table-flex-example', standalone: true, imports: [
                        MatTableModule,
                        FormsModule,
                        MatPopoverEditModule,
                        MatFormFieldModule,
                        MatInputModule,
                        MatButtonModule,
                        MatIconModule,
                    ], template: "<mat-table class=\"example-table\" editable [dataSource]=\"dataSource\">\r\n  <!--\r\n    This edit lens is specified outside of the cell and must explicitly declare\r\n    its context. It could be reused in multiple cells.\r\n  -->\r\n  <ng-template #weightEdit let-element>\r\n    <div>\r\n      <form #f=\"ngForm\"\r\n          matEditLens\r\n          (ngSubmit)=\"onSubmitWeight(element, f)\"\r\n          [matEditLensPreservedFormValue]=\"preservedWeightValues.get(element)\"\r\n          (matEditLensPreservedFormValueChange)=\"preservedWeightValues.set(element, $event)\">\r\n        <div mat-edit-content>\r\n          <mat-form-field>\r\n            <input matInput type=\"number\" [ngModel]=\"element.weight\" name=\"weight\" required>\r\n          </mat-form-field>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"position\">\r\n    <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"name\">\r\n    <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\"\r\n        [matPopoverEdit]=\"nameEdit\">\r\n      {{element.name}}\r\n\r\n      <!-- This edit is defined in the cell and can implicitly access element -->\r\n      <ng-template #nameEdit>\r\n        <div>\r\n          <form #f=\"ngForm\"\r\n              matEditLens\r\n              (ngSubmit)=\"onSubmitName(element, f)\"\r\n              [matEditLensPreservedFormValue]=\"preservedNameValues.get(element)\"\r\n              (matEditLensPreservedFormValueChange)=\"preservedNameValues.set(element, $event)\">\r\n            <h2 mat-edit-title>Name</h2>\r\n            <div mat-edit-content>\r\n              <mat-form-field>\r\n                <input matInput [ngModel]=\"element.name\" name=\"name\" required>\r\n              </mat-form-field>\r\n            </div>\r\n            <div mat-edit-actions>\r\n              <button mat-button type=\"submit\">Confirm</button>\r\n              <button mat-button matEditRevert>Revert</button>\r\n              <button mat-button matEditClose>Close</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </ng-template>\r\n\r\n      <span *matRowHoverContent>\r\n        <button mat-icon-button matEditOpen><mat-icon>edit</mat-icon></button>\r\n      </span>\r\n    </mat-cell>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container matColumnDef=\"weight\">\r\n    <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\"\r\n        [matPopoverEdit]=\"weightEdit\" [matPopoverEditContext]=\"element\">\r\n      {{element.weight}}\r\n\r\n      <span *matRowHoverContent>\r\n        <button mat-icon-button matEditOpen><mat-icon>edit</mat-icon></button>\r\n      </span>\r\n      </mat-cell>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container matColumnDef=\"symbol\">\r\n    <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\r\n  </ng-container>\r\n\r\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n</mat-table>\r\n", styles: [".example-table {\r\n  width: 100%;\r\n}\r\n\r\n/*.example-table th {\r\n  text-align: left;\r\n}\r\n\r\n.example-table td,\r\n.example-table th {\r\n  width: 25%;\r\n}*/\r\n"] }]
        }] });
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
class ExampleDataSource$2 extends DataSource {
    constructor() {
        super(...arguments);
        /** Stream of data that is provided to the table. */
        this.data = new BehaviorSubject(ELEMENT_DATA$2);
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect() {
        return this.data;
    }
    disconnect() { }
}

const ELEMENT_DATA$1 = [
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
class PopoverEditMatTableExample {
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
        this.dataSource = new ExampleDataSource$1();
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: PopoverEditMatTableExample, deps: [{ token: i1$1.MatSnackBar }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: PopoverEditMatTableExample, isStandalone: true, selector: "popover-edit-mat-table-example", ngImport: i0, template: "<table class=\"example-table\" mat-table editable [dataSource]=\"dataSource\">\r\n  <!--\r\n    This edit lens is specified outside of the cell and must explicitly declare\r\n    its context. It could be reused in multiple cells.\r\n  -->\r\n  <ng-template #weightEdit let-element>\r\n    <div>\r\n      <form #f=\"ngForm\"\r\n          matEditLens\r\n          (ngSubmit)=\"onSubmitWeight(element, f)\"\r\n          [(matEditLensPreservedFormValue)]=\"weightValues.for(element).value\">\r\n        <div mat-edit-content>\r\n          <mat-form-field>\r\n            <input matInput type=\"number\" [ngModel]=\"element.weight\" name=\"weight\" required>\r\n          </mat-form-field>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"position\">\r\n    <th mat-header-cell *matHeaderCellDef> No. </th>\r\n    <td mat-cell *matCellDef=\"let element\">\r\n      {{element.position}}\r\n\r\n      <!-- Row hover content in a non-edit cell. -->\r\n      <span *matRowHoverContent>\r\n        <button mat-icon-button (click)=\"goodJob(element)\">\r\n          <mat-icon>thumb_up</mat-icon>\r\n        </button>\r\n        <button mat-icon-button (click)=\"badJob(element)\">\r\n          <mat-icon>thumb_down</mat-icon>\r\n        </button>\r\n      </span>\r\n    </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"name\">\r\n    <th mat-header-cell *matHeaderCellDef>\r\n      Name\r\n      <mat-checkbox\r\n          [(ngModel)]=\"nameEditEnabled\">Edit enabled</mat-checkbox>\r\n    </th>\r\n    <td mat-cell *matCellDef=\"let element\"\r\n        [matPopoverEdit]=\"nameEdit\"\r\n        [matPopoverEditDisabled]=\"!nameEditEnabled\">\r\n      {{element.name}}\r\n\r\n      <!-- This edit is defined in the cell and can implicitly access element -->\r\n      <ng-template #nameEdit>\r\n        <div>\r\n          <form #f=\"ngForm\"\r\n              matEditLens\r\n              (ngSubmit)=\"onSubmitName(element, f)\"\r\n              [(matEditLensPreservedFormValue)]=\"nameValues.for(element).value\">\r\n            <h2 mat-edit-title>Name</h2>\r\n            <div mat-edit-content>\r\n              <mat-form-field>\r\n                <input matInput [ngModel]=\"element.name\" name=\"name\" required>\r\n              </mat-form-field>\r\n            </div>\r\n            <div mat-edit-actions>\r\n              <button mat-button type=\"submit\">Confirm</button>\r\n              <button mat-button matEditRevert>Revert</button>\r\n              <button mat-button matEditClose>Close</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </ng-template>\r\n\r\n      @if (nameEditEnabled) {\r\n        <span *matRowHoverContent>\r\n          <button mat-icon-button matEditOpen><mat-icon>edit</mat-icon></button>\r\n        </span>\r\n      }\r\n    </td>\r\n  </ng-container>\r\n\r\n  <!-- Type Column -->\r\n  <ng-container matColumnDef=\"type\">\r\n    <th mat-header-cell *matHeaderCellDef> Type </th>\r\n    <td mat-cell *matCellDef=\"let element\"\r\n        [matPopoverEdit]=\"typeEdit\">\r\n      {{element.type}}\r\n\r\n      <!-- This edit is defined in the cell and can implicitly access element -->\r\n      <ng-template #typeEdit>\r\n        <div>\r\n          <form #f=\"ngForm\"\r\n              matEditLens\r\n              matEditClose\r\n              (ngSubmit)=\"onSubmitType(element, f)\"\r\n              [(matEditLensPreservedFormValue)]=\"typeValues.for(element).value\">\r\n            <div mat-edit-fill>\r\n              <mat-selection-list [multiple]=\"false\"\r\n                  name=\"type\"\r\n                  [ngModel]=\"[element.type]\"\r\n                  (selectionChange)=\"f.ngSubmit.emit()\"\r\n                  aria-label=\"Element type\">\r\n                @for (type of TYPES; track type) {\r\n                  <mat-list-option [value]=\"type\">{{type}}</mat-list-option>\r\n                }\r\n              </mat-selection-list>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </ng-template>\r\n\r\n      <span *matRowHoverContent>\r\n        <button mat-icon-button matEditOpen><mat-icon>arrow_drop_down</mat-icon></button>\r\n      </span>\r\n    </td>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container matColumnDef=\"weight\">\r\n    <th mat-header-cell *matHeaderCellDef> Weight </th>\r\n    <td mat-cell *matCellDef=\"let element\"\r\n        [matPopoverEdit]=\"weightEdit\" [matPopoverEditContext]=\"element\">\r\n      {{element.weight}}\r\n\r\n      <span *matRowHoverContent>\r\n        <button mat-icon-button matEditOpen><mat-icon>edit</mat-icon></button>\r\n      </span>\r\n    </td>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container matColumnDef=\"symbol\">\r\n    <th mat-header-cell *matHeaderCellDef> Symbol </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\r\n  <!-- Fantasy Counterparts Column -->\r\n  <ng-container matColumnDef=\"fantasyCounterpart\">\r\n    <th mat-header-cell *matHeaderCellDef> Fantasy Counterparts </th>\r\n    <td mat-cell *matCellDef=\"let element\"\r\n        [matPopoverEdit]=\"fantasyCounterpartEdit\">\r\n      {{element.fantasyCounterparts.join(', ')}}\r\n\r\n      <!-- This edit is defined in the cell and can implicitly access element -->\r\n      <ng-template #fantasyCounterpartEdit>\r\n        <div>\r\n          <form #f=\"ngForm\"\r\n              matEditLens\r\n              (ngSubmit)=\"onSubmitFantasyCounterparts(element, f)\"\r\n              [(matEditLensPreservedFormValue)]=\"fantasyValues.for(element).value\">\r\n            <div mat-edit-fill>\r\n              <mat-selection-list [ngModel]=\"element.fantasyCounterparts\"\r\n                  name=\"fantasyCounterparts\"\r\n                  aria-label=\"Fantasy Element Counterparts\">\r\n                @for (fantasyElement of FANTASY_ELEMENTS; track fantasyElement) {\r\n                  <mat-list-option\r\n                    [value]=\"fantasyElement\"\r\n                    checkboxPosition=\"before\">{{fantasyElement}}</mat-list-option>\r\n                }\r\n              </mat-selection-list>\r\n            </div>\r\n            <div mat-edit-actions>\r\n              <button mat-button type=\"submit\">Confirm</button>\r\n              <button mat-button matEditRevert>Revert</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </ng-template>\r\n\r\n      <span *matRowHoverContent>\r\n        <button mat-icon-button matEditOpen><mat-icon>arrow_drop_down</mat-icon></button>\r\n      </span>\r\n    </td>\r\n  </ng-container>\r\n</table>\r\n", styles: [".example-table {\r\n  width: 100%;\r\n}\r\n\r\n.example-table th {\r\n  text-align: left;\r\n}\r\n\r\n.example-table td,\r\n.example-table th {\r\n  width: 16%;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i1.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i1.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i1.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "ngmodule", type: CdkPopoverEditModule }, { kind: "directive", type: i2.CdkEditable, selector: "table[editable], cdk-table[editable], mat-table[editable]" }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i2$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2$1.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i2$1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i2$1.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatPopoverEditModule }, { kind: "directive", type: i3.MatPopoverEdit, selector: "[matPopoverEdit]:not([matPopoverEditTabOut])", inputs: ["matPopoverEdit", "matPopoverEditContext", "matPopoverEditColspan", "matPopoverEditDisabled"] }, { kind: "directive", type: i3.MatRowHoverContent, selector: "[matRowHoverContent]" }, { kind: "directive", type: i3.MatEditLens, selector: "form[matEditLens]", inputs: ["matEditLensClickOutBehavior", "matEditLensPreservedFormValue", "matEditLensIgnoreSubmitUnlessValid"], outputs: ["matEditLensPreservedFormValueChange"] }, { kind: "directive", type: i3.MatEditRevert, selector: "button[matEditRevert]" }, { kind: "directive", type: i3.MatEditClose, selector: "[matEditClose]" }, { kind: "directive", type: i3.MatEditOpen, selector: "[matEditOpen]" }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i5.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i6.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i7.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "component", type: i7.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i8.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i10.MatCheckbox, selector: "mat-checkbox", inputs: ["aria-label", "aria-labelledby", "aria-describedby", "id", "required", "labelPosition", "name", "value", "disableRipple", "tabIndex", "color", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { kind: "ngmodule", type: MatListModule }, { kind: "component", type: i11.MatSelectionList, selector: "mat-selection-list", inputs: ["color", "compareWith", "multiple", "hideSingleSelectionIndicator", "disabled"], outputs: ["selectionChange"], exportAs: ["matSelectionList"] }, { kind: "component", type: i11.MatListOption, selector: "mat-list-option", inputs: ["togglePosition", "checkboxPosition", "color", "value", "selected"], outputs: ["selectedChange"], exportAs: ["matListOption"] }] }); }
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
        }], ctorParameters: () => [{ type: i1$1.MatSnackBar }] });
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
class ExampleDataSource$1 extends DataSource {
    constructor() {
        super(...arguments);
        /** Stream of data that is provided to the table. */
        this.data = new BehaviorSubject(ELEMENT_DATA$1);
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect() {
        return this.data;
    }
    disconnect() { }
}

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
 * @title Material Popover Edit with spreadsheet-like configuration on a Material data-table
 */
class PopoverEditTabOutMatTableExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new ExampleDataSource();
        this.preservedNameValues = new WeakMap();
        this.preservedWeightValues = new WeakMap();
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: PopoverEditTabOutMatTableExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: PopoverEditTabOutMatTableExample, isStandalone: true, selector: "popover-edit-tab-out-mat-table-example", ngImport: i0, template: "<table class=\"example-table\" mat-table editable [dataSource]=\"dataSource\">\r\n  <!--\r\n    This edit lens is specified outside of the cell and must explicitly declare\r\n    its context. It could be reused in multiple cells.\r\n  -->\r\n  <ng-template #weightEdit let-element>\r\n    <div>\r\n      <form #f=\"ngForm\"\r\n          matEditLens\r\n          matEditLensClickOutBehavior=\"submit\"\r\n          (ngSubmit)=\"onSubmitWeight(element, f)\"\r\n          [matEditLensPreservedFormValue]=\"preservedWeightValues.get(element)\"\r\n          (matEditLensPreservedFormValueChange)=\"preservedWeightValues.set(element, $event)\">\r\n        <div mat-edit-content>\r\n          <mat-form-field>\r\n            <input matInput type=\"number\" [ngModel]=\"element.weight\" name=\"weight\" required>\r\n          </mat-form-field>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"position\">\r\n    <th mat-header-cell *matHeaderCellDef> No. </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"name\">\r\n    <th mat-header-cell *matHeaderCellDef> Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"\r\n        [matPopoverEdit]=\"nameEdit\" matPopoverEditTabOut\r\n        matEditOpen>\r\n      {{element.name}}\r\n\r\n      <!-- This edit is defined in the cell and can implicitly access element -->\r\n      <ng-template #nameEdit>\r\n        <div>\r\n          <form #f=\"ngForm\"\r\n              matEditLens\r\n              matEditLensClickOutBehavior=\"submit\"\r\n              (ngSubmit)=\"onSubmitName(element, f)\"\r\n              [matEditLensPreservedFormValue]=\"preservedNameValues.get(element)\"\r\n              (matEditLensPreservedFormValueChange)=\"preservedNameValues.set(element, $event)\">\r\n            <div mat-edit-content>\r\n              <mat-form-field>\r\n                <input matInput [ngModel]=\"element.name\" name=\"name\" required>\r\n              </mat-form-field>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </ng-template>\r\n\r\n      <span *matRowHoverContent>\r\n        <mat-icon>edit</mat-icon>\r\n      </span>\r\n    </td>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container matColumnDef=\"weight\">\r\n    <th mat-header-cell *matHeaderCellDef> Weight </th>\r\n    <td mat-cell *matCellDef=\"let element\"\r\n        [matPopoverEdit]=\"weightEdit\" matPopoverEditTabOut\r\n        [matPopoverEditContext]=\"element\"\r\n        matEditOpen>\r\n      {{element.weight}}\r\n\r\n      <span *matRowHoverContent>\r\n        <mat-icon>edit</mat-icon>\r\n      </span>\r\n    </td>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container matColumnDef=\"symbol\">\r\n    <th mat-header-cell *matHeaderCellDef> Symbol </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n", styles: [".example-table {\r\n  width: 100%;\r\n}\r\n\r\n.example-table th {\r\n  text-align: left;\r\n}\r\n\r\n.example-table td,\r\n.example-table th {\r\n  width: 25%;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i1.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i1.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i1.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i2$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2$1.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i2$1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i2$1.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatPopoverEditModule }, { kind: "directive", type: i3.MatPopoverEditTabOut, selector: "[matPopoverEdit][matPopoverEditTabOut]", inputs: ["matPopoverEdit", "matPopoverEditContext", "matPopoverEditColspan", "matPopoverEditDisabled"] }, { kind: "directive", type: i3.MatRowHoverContent, selector: "[matRowHoverContent]" }, { kind: "directive", type: i3.MatEditLens, selector: "form[matEditLens]", inputs: ["matEditLensClickOutBehavior", "matEditLensPreservedFormValue", "matEditLensIgnoreSubmitUnlessValid"], outputs: ["matEditLensPreservedFormValueChange"] }, { kind: "directive", type: i3.MatEditOpen, selector: "[matEditOpen]" }, { kind: "directive", type: i2.CdkEditable, selector: "table[editable], cdk-table[editable], mat-table[editable]" }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i5.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i6.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i8.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: PopoverEditTabOutMatTableExample, decorators: [{
            type: Component,
            args: [{ selector: 'popover-edit-tab-out-mat-table-example', changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, imports: [
                        MatTableModule,
                        FormsModule,
                        MatPopoverEditModule,
                        MatFormFieldModule,
                        MatInputModule,
                        MatIconModule,
                    ], template: "<table class=\"example-table\" mat-table editable [dataSource]=\"dataSource\">\r\n  <!--\r\n    This edit lens is specified outside of the cell and must explicitly declare\r\n    its context. It could be reused in multiple cells.\r\n  -->\r\n  <ng-template #weightEdit let-element>\r\n    <div>\r\n      <form #f=\"ngForm\"\r\n          matEditLens\r\n          matEditLensClickOutBehavior=\"submit\"\r\n          (ngSubmit)=\"onSubmitWeight(element, f)\"\r\n          [matEditLensPreservedFormValue]=\"preservedWeightValues.get(element)\"\r\n          (matEditLensPreservedFormValueChange)=\"preservedWeightValues.set(element, $event)\">\r\n        <div mat-edit-content>\r\n          <mat-form-field>\r\n            <input matInput type=\"number\" [ngModel]=\"element.weight\" name=\"weight\" required>\r\n          </mat-form-field>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"position\">\r\n    <th mat-header-cell *matHeaderCellDef> No. </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"name\">\r\n    <th mat-header-cell *matHeaderCellDef> Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"\r\n        [matPopoverEdit]=\"nameEdit\" matPopoverEditTabOut\r\n        matEditOpen>\r\n      {{element.name}}\r\n\r\n      <!-- This edit is defined in the cell and can implicitly access element -->\r\n      <ng-template #nameEdit>\r\n        <div>\r\n          <form #f=\"ngForm\"\r\n              matEditLens\r\n              matEditLensClickOutBehavior=\"submit\"\r\n              (ngSubmit)=\"onSubmitName(element, f)\"\r\n              [matEditLensPreservedFormValue]=\"preservedNameValues.get(element)\"\r\n              (matEditLensPreservedFormValueChange)=\"preservedNameValues.set(element, $event)\">\r\n            <div mat-edit-content>\r\n              <mat-form-field>\r\n                <input matInput [ngModel]=\"element.name\" name=\"name\" required>\r\n              </mat-form-field>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </ng-template>\r\n\r\n      <span *matRowHoverContent>\r\n        <mat-icon>edit</mat-icon>\r\n      </span>\r\n    </td>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container matColumnDef=\"weight\">\r\n    <th mat-header-cell *matHeaderCellDef> Weight </th>\r\n    <td mat-cell *matCellDef=\"let element\"\r\n        [matPopoverEdit]=\"weightEdit\" matPopoverEditTabOut\r\n        [matPopoverEditContext]=\"element\"\r\n        matEditOpen>\r\n      {{element.weight}}\r\n\r\n      <span *matRowHoverContent>\r\n        <mat-icon>edit</mat-icon>\r\n      </span>\r\n    </td>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container matColumnDef=\"symbol\">\r\n    <th mat-header-cell *matHeaderCellDef> Symbol </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n", styles: [".example-table {\r\n  width: 100%;\r\n}\r\n\r\n.example-table th {\r\n  text-align: left;\r\n}\r\n\r\n.example-table td,\r\n.example-table th {\r\n  width: 25%;\r\n}\r\n"] }]
        }] });
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
class ExampleDataSource extends DataSource {
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

/**
 * Generated bundle index. Do not edit.
 */

export { PopoverEditCellSpanMatTableExample, PopoverEditMatTableExample, PopoverEditMatTableFlexExample, PopoverEditTabOutMatTableExample };
//# sourceMappingURL=popover-edit.mjs.map
