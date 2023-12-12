import * as i0 from '@angular/core';
import { Component, ViewChild, forwardRef, ContentChildren, ContentChild, Input } from '@angular/core';
import * as i1 from '@angular/material/table';
import { MatTableModule, MatTableDataSource, MatNoDataRow, MatHeaderRowDef, MatRowDef, MatColumnDef, MatTable } from '@angular/material/table';
import * as i1$1 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import { trigger, state, style, transition, animate } from '@angular/animations';
import * as i3 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i2 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i1$2 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CurrencyPipe, DatePipe, DecimalPipe } from '@angular/common';
import * as i1$3 from '@angular/common/http';
import * as i5 from '@angular/material/paginator';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import * as i4 from '@angular/material/sort';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { merge, of, ReplaySubject } from 'rxjs';
import { startWith, switchMap, catchError, map } from 'rxjs/operators';
import * as i2$1 from '@angular/material/progress-spinner';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SelectionModel, DataSource } from '@angular/cdk/collections';
import * as i2$2 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i1$4 from '@angular/cdk/a11y';
import * as i2$3 from '@angular/material/button-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { moveItemInArray, CdkDropList, CdkDrag } from '@angular/cdk/drag-drop';
import * as i2$4 from '@angular/material/core';
import { MatRippleModule } from '@angular/material/core';

const ELEMENT_DATA$n = [
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
];
/**
 * @title Basic use of `<mat-table>` (uses display flex)
 */
class TableFlexBasicExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA$n;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableFlexBasicExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: TableFlexBasicExample, isStandalone: true, selector: "table-flex-basic-example", ngImport: i0, template: "<mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"position\">\r\n    <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"name\">\r\n    <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container matColumnDef=\"weight\">\r\n    <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container matColumnDef=\"symbol\">\r\n    <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\r\n  </ng-container>\r\n\r\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n</mat-table>", styles: ["table {\r\n  width: 100%;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i1.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i1.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i1.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableFlexBasicExample, decorators: [{
            type: Component,
            args: [{ selector: 'table-flex-basic-example', standalone: true, imports: [MatTableModule], template: "<mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"position\">\r\n    <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"name\">\r\n    <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container matColumnDef=\"weight\">\r\n    <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container matColumnDef=\"symbol\">\r\n    <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\r\n  </ng-container>\r\n\r\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n</mat-table>", styles: ["table {\r\n  width: 100%;\r\n}\r\n"] }]
        }] });

const ELEMENT_DATA$m = [
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
];
/**
 * @title Basic use of `<table mat-table>`
 */
class TableBasicExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA$m;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableBasicExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: TableBasicExample, isStandalone: true, selector: "table-basic-example", ngImport: i0, template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n\r\n  <!--- Note that these columns can be defined in any order.\r\n        The actual rendered columns are set as a property on the row definition\" -->\r\n\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"position\">\r\n    <th mat-header-cell *matHeaderCellDef> No. </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"name\">\r\n    <th mat-header-cell *matHeaderCellDef> Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container matColumnDef=\"weight\">\r\n    <th mat-header-cell *matHeaderCellDef> Weight </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container matColumnDef=\"symbol\">\r\n    <th mat-header-cell *matHeaderCellDef> Symbol </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n\r\n", styles: ["table {\r\n  width: 100%;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i1.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i1.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i1.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableBasicExample, decorators: [{
            type: Component,
            args: [{ selector: 'table-basic-example', standalone: true, imports: [MatTableModule], template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n\r\n  <!--- Note that these columns can be defined in any order.\r\n        The actual rendered columns are set as a property on the row definition\" -->\r\n\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"position\">\r\n    <th mat-header-cell *matHeaderCellDef> No. </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"name\">\r\n    <th mat-header-cell *matHeaderCellDef> Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container matColumnDef=\"weight\">\r\n    <th mat-header-cell *matHeaderCellDef> Weight </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container matColumnDef=\"symbol\">\r\n    <th mat-header-cell *matHeaderCellDef> Symbol </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n\r\n", styles: ["table {\r\n  width: 100%;\r\n}\r\n"] }]
        }] });

const ELEMENT_DATA$l = [
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
];
/**
 * @title Table dynamically changing the columns displayed
 */
class TableDynamicColumnsExample {
    constructor() {
        this.displayedColumns = ['name', 'weight', 'symbol', 'position'];
        this.columnsToDisplay = this.displayedColumns.slice();
        this.data = ELEMENT_DATA$l;
    }
    addColumn() {
        const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
        this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
    }
    removeColumn() {
        if (this.columnsToDisplay.length) {
            this.columnsToDisplay.pop();
        }
    }
    shuffle() {
        let currentIndex = this.columnsToDisplay.length;
        while (0 !== currentIndex) {
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // Swap
            let temp = this.columnsToDisplay[currentIndex];
            this.columnsToDisplay[currentIndex] = this.columnsToDisplay[randomIndex];
            this.columnsToDisplay[randomIndex] = temp;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableDynamicColumnsExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: TableDynamicColumnsExample, isStandalone: true, selector: "table-dynamic-columns-example", ngImport: i0, template: "<button mat-raised-button (click)=\"addColumn()\"> Add column </button>\r\n<button mat-raised-button (click)=\"removeColumn()\"> Remove column </button>\r\n<button mat-raised-button (click)=\"shuffle()\"> Shuffle </button>\r\n\r\n<table mat-table [dataSource]=\"data\" class=\"mat-elevation-z8\">\r\n  @for (column of displayedColumns; track column) {\r\n    <ng-container [matColumnDef]=\"column\">\r\n      <th mat-header-cell *matHeaderCellDef> {{column}} </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element[column]}} </td>\r\n    </ng-container>\r\n  }\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: columnsToDisplay;\"></tr>\r\n</table>\r\n", styles: ["table {\r\n  width: 100%;\r\n}\r\n\r\nbutton {\r\n  margin: 16px 8px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1$1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i1.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i1.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i1.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableDynamicColumnsExample, decorators: [{
            type: Component,
            args: [{ selector: 'table-dynamic-columns-example', standalone: true, imports: [MatButtonModule, MatTableModule], template: "<button mat-raised-button (click)=\"addColumn()\"> Add column </button>\r\n<button mat-raised-button (click)=\"removeColumn()\"> Remove column </button>\r\n<button mat-raised-button (click)=\"shuffle()\"> Shuffle </button>\r\n\r\n<table mat-table [dataSource]=\"data\" class=\"mat-elevation-z8\">\r\n  @for (column of displayedColumns; track column) {\r\n    <ng-container [matColumnDef]=\"column\">\r\n      <th mat-header-cell *matHeaderCellDef> {{column}} </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element[column]}} </td>\r\n    </ng-container>\r\n  }\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: columnsToDisplay;\"></tr>\r\n</table>\r\n", styles: ["table {\r\n  width: 100%;\r\n}\r\n\r\nbutton {\r\n  margin: 16px 8px;\r\n}\r\n"] }]
        }] });

/**
 * @title Table with expandable rows
 */
class TableExpandableRowsExample {
    constructor() {
        this.dataSource = ELEMENT_DATA$k;
        this.columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
        this.columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableExpandableRowsExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: TableExpandableRowsExample, isStandalone: true, selector: "table-expandable-rows-example", ngImport: i0, template: "<table mat-table\r\n       [dataSource]=\"dataSource\" multiTemplateDataRows\r\n       class=\"mat-elevation-z8\">\r\n  @for (column of columnsToDisplay; track column) {\r\n    <ng-container matColumnDef=\"{{column}}\">\r\n      <th mat-header-cell *matHeaderCellDef> {{column}} </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element[column]}} </td>\r\n    </ng-container>\r\n  }\r\n  <ng-container matColumnDef=\"expand\">\r\n    <th mat-header-cell *matHeaderCellDef aria-label=\"row actions\">&nbsp;</th>\r\n    <td mat-cell *matCellDef=\"let element\">\r\n      <button mat-icon-button aria-label=\"expand row\" (click)=\"(expandedElement = expandedElement === element ? null : element); $event.stopPropagation()\">\r\n        @if (expandedElement === element) {\r\n          <mat-icon>keyboard_arrow_up</mat-icon>\r\n        } @else {\r\n          <mat-icon>keyboard_arrow_down</mat-icon>\r\n        }\r\n      </button>\r\n    </td>\r\n  </ng-container>\r\n\r\n  <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->\r\n  <ng-container matColumnDef=\"expandedDetail\">\r\n    <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplayWithExpand.length\">\r\n      <div class=\"example-element-detail\"\r\n           [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\r\n        <div class=\"example-element-diagram\">\r\n          <div class=\"example-element-position\"> {{element.position}} </div>\r\n          <div class=\"example-element-symbol\"> {{element.symbol}} </div>\r\n          <div class=\"example-element-name\"> {{element.name}} </div>\r\n          <div class=\"example-element-weight\"> {{element.weight}} </div>\r\n        </div>\r\n        <div class=\"example-element-description\">\r\n          {{element.description}}\r\n          <span class=\"example-element-description-attribution\"> -- Wikipedia </span>\r\n        </div>\r\n      </div>\r\n    </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"columnsToDisplayWithExpand\"></tr>\r\n  <tr mat-row *matRowDef=\"let element; columns: columnsToDisplayWithExpand;\"\r\n      class=\"example-element-row\"\r\n      [class.example-expanded-row]=\"expandedElement === element\"\r\n      (click)=\"expandedElement = expandedElement === element ? null : element\">\r\n  </tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\r\n</table>\r\n", styles: ["table {\r\n  width: 100%;\r\n}\r\n\r\ntr.example-detail-row {\r\n  height: 0;\r\n}\r\n\r\ntr.example-element-row:not(.example-expanded-row):hover {\r\n  background: whitesmoke;\r\n}\r\n\r\ntr.example-element-row:not(.example-expanded-row):active {\r\n  background: #efefef;\r\n}\r\n\r\n.example-element-row td {\r\n  border-bottom-width: 0;\r\n}\r\n\r\n.example-element-detail {\r\n  overflow: hidden;\r\n  display: flex;\r\n}\r\n\r\n.example-element-diagram {\r\n  min-width: 80px;\r\n  border: 2px solid black;\r\n  padding: 8px;\r\n  font-weight: lighter;\r\n  margin: 8px 0;\r\n  height: 104px;\r\n}\r\n\r\n.example-element-symbol {\r\n  font-weight: bold;\r\n  font-size: 40px;\r\n  line-height: normal;\r\n}\r\n\r\n.example-element-description {\r\n  padding: 16px;\r\n}\r\n\r\n.example-element-description-attribution {\r\n  opacity: 0.5;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i1.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i1.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i1.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1$1.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], animations: [
            trigger('detailExpand', [
                state('collapsed,void', style({ height: '0px', minHeight: '0' })),
                state('expanded', style({ height: '*' })),
                transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableExpandableRowsExample, decorators: [{
            type: Component,
            args: [{ selector: 'table-expandable-rows-example', animations: [
                        trigger('detailExpand', [
                            state('collapsed,void', style({ height: '0px', minHeight: '0' })),
                            state('expanded', style({ height: '*' })),
                            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                        ]),
                    ], standalone: true, imports: [MatTableModule, MatButtonModule, MatIconModule], template: "<table mat-table\r\n       [dataSource]=\"dataSource\" multiTemplateDataRows\r\n       class=\"mat-elevation-z8\">\r\n  @for (column of columnsToDisplay; track column) {\r\n    <ng-container matColumnDef=\"{{column}}\">\r\n      <th mat-header-cell *matHeaderCellDef> {{column}} </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element[column]}} </td>\r\n    </ng-container>\r\n  }\r\n  <ng-container matColumnDef=\"expand\">\r\n    <th mat-header-cell *matHeaderCellDef aria-label=\"row actions\">&nbsp;</th>\r\n    <td mat-cell *matCellDef=\"let element\">\r\n      <button mat-icon-button aria-label=\"expand row\" (click)=\"(expandedElement = expandedElement === element ? null : element); $event.stopPropagation()\">\r\n        @if (expandedElement === element) {\r\n          <mat-icon>keyboard_arrow_up</mat-icon>\r\n        } @else {\r\n          <mat-icon>keyboard_arrow_down</mat-icon>\r\n        }\r\n      </button>\r\n    </td>\r\n  </ng-container>\r\n\r\n  <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->\r\n  <ng-container matColumnDef=\"expandedDetail\">\r\n    <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplayWithExpand.length\">\r\n      <div class=\"example-element-detail\"\r\n           [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\r\n        <div class=\"example-element-diagram\">\r\n          <div class=\"example-element-position\"> {{element.position}} </div>\r\n          <div class=\"example-element-symbol\"> {{element.symbol}} </div>\r\n          <div class=\"example-element-name\"> {{element.name}} </div>\r\n          <div class=\"example-element-weight\"> {{element.weight}} </div>\r\n        </div>\r\n        <div class=\"example-element-description\">\r\n          {{element.description}}\r\n          <span class=\"example-element-description-attribution\"> -- Wikipedia </span>\r\n        </div>\r\n      </div>\r\n    </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"columnsToDisplayWithExpand\"></tr>\r\n  <tr mat-row *matRowDef=\"let element; columns: columnsToDisplayWithExpand;\"\r\n      class=\"example-element-row\"\r\n      [class.example-expanded-row]=\"expandedElement === element\"\r\n      (click)=\"expandedElement = expandedElement === element ? null : element\">\r\n  </tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\r\n</table>\r\n", styles: ["table {\r\n  width: 100%;\r\n}\r\n\r\ntr.example-detail-row {\r\n  height: 0;\r\n}\r\n\r\ntr.example-element-row:not(.example-expanded-row):hover {\r\n  background: whitesmoke;\r\n}\r\n\r\ntr.example-element-row:not(.example-expanded-row):active {\r\n  background: #efefef;\r\n}\r\n\r\n.example-element-row td {\r\n  border-bottom-width: 0;\r\n}\r\n\r\n.example-element-detail {\r\n  overflow: hidden;\r\n  display: flex;\r\n}\r\n\r\n.example-element-diagram {\r\n  min-width: 80px;\r\n  border: 2px solid black;\r\n  padding: 8px;\r\n  font-weight: lighter;\r\n  margin: 8px 0;\r\n  height: 104px;\r\n}\r\n\r\n.example-element-symbol {\r\n  font-weight: bold;\r\n  font-size: 40px;\r\n  line-height: normal;\r\n}\r\n\r\n.example-element-description {\r\n  padding: 16px;\r\n}\r\n\r\n.example-element-description-attribution {\r\n  opacity: 0.5;\r\n}\r\n"] }]
        }] });
const ELEMENT_DATA$k = [
    {
        position: 1,
        name: 'Hydrogen',
        weight: 1.0079,
        symbol: 'H',
        description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
    },
    {
        position: 2,
        name: 'Helium',
        weight: 4.0026,
        symbol: 'He',
        description: `Helium is a chemical element with symbol He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`,
    },
    {
        position: 3,
        name: 'Lithium',
        weight: 6.941,
        symbol: 'Li',
        description: `Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,
        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
        lightest solid element.`,
    },
    {
        position: 4,
        name: 'Beryllium',
        weight: 9.0122,
        symbol: 'Be',
        description: `Beryllium is a chemical element with symbol Be and atomic number 4. It is a
        relatively rare element in the universe, usually occurring as a product of the spallation of
        larger atomic nuclei that have collided with cosmic rays.`,
    },
    {
        position: 5,
        name: 'Boron',
        weight: 10.811,
        symbol: 'B',
        description: `Boron is a chemical element with symbol B and atomic number 5. Produced entirely
        by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
        low-abundance element in the Solar system and in the Earth's crust.`,
    },
    {
        position: 6,
        name: 'Carbon',
        weight: 12.0107,
        symbol: 'C',
        description: `Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic
        and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
        to group 14 of the periodic table.`,
    },
    {
        position: 7,
        name: 'Nitrogen',
        weight: 14.0067,
        symbol: 'N',
        description: `Nitrogen is a chemical element with symbol N and atomic number 7. It was first
        discovered and isolated by Scottish physician Daniel Rutherford in 1772.`,
    },
    {
        position: 8,
        name: 'Oxygen',
        weight: 15.9994,
        symbol: 'O',
        description: `Oxygen is a chemical element with symbol O and atomic number 8. It is a member of
         the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
         agent that readily forms oxides with most elements as well as with other compounds.`,
    },
    {
        position: 9,
        name: 'Fluorine',
        weight: 18.9984,
        symbol: 'F',
        description: `Fluorine is a chemical element with symbol F and atomic number 9. It is the
        lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
        conditions.`,
    },
    {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`,
    },
];

const ELEMENT_DATA$j = [
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
];
/**
 * @title Table with filtering
 */
class TableFilteringExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new MatTableDataSource(ELEMENT_DATA$j);
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableFilteringExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: TableFilteringExample, isStandalone: true, selector: "table-filtering-example", ngImport: i0, template: "<mat-form-field>\r\n  <mat-label>Filter</mat-label>\r\n  <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Ex. ium\" #input>\r\n</mat-form-field>\r\n\r\n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"position\">\r\n    <th mat-header-cell *matHeaderCellDef> No. </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"name\">\r\n    <th mat-header-cell *matHeaderCellDef> Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container matColumnDef=\"weight\">\r\n    <th mat-header-cell *matHeaderCellDef> Weight </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container matColumnDef=\"symbol\">\r\n    <th mat-header-cell *matHeaderCellDef> Symbol </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\r\n  <!-- Row shown when there is no matching data. -->\r\n  <tr class=\"mat-row\" *matNoDataRow>\r\n    <td class=\"mat-cell\" colspan=\"4\">No data matching the filter \"{{input.value}}\"</td>\r\n  </tr>\r\n</table>\r\n", styles: ["/* Structure */\r\ntable {\r\n  width: 100%;\r\n}\r\n\r\n.mat-mdc-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1$2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1$2.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i1.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i1.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i1.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "directive", type: i1.MatNoDataRow, selector: "ng-template[matNoDataRow]" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableFilteringExample, decorators: [{
            type: Component,
            args: [{ selector: 'table-filtering-example', standalone: true, imports: [MatFormFieldModule, MatInputModule, MatTableModule], template: "<mat-form-field>\r\n  <mat-label>Filter</mat-label>\r\n  <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Ex. ium\" #input>\r\n</mat-form-field>\r\n\r\n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"position\">\r\n    <th mat-header-cell *matHeaderCellDef> No. </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"name\">\r\n    <th mat-header-cell *matHeaderCellDef> Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container matColumnDef=\"weight\">\r\n    <th mat-header-cell *matHeaderCellDef> Weight </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container matColumnDef=\"symbol\">\r\n    <th mat-header-cell *matHeaderCellDef> Symbol </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\r\n  <!-- Row shown when there is no matching data. -->\r\n  <tr class=\"mat-row\" *matNoDataRow>\r\n    <td class=\"mat-cell\" colspan=\"4\">No data matching the filter \"{{input.value}}\"</td>\r\n  </tr>\r\n</table>\r\n", styles: ["/* Structure */\r\ntable {\r\n  width: 100%;\r\n}\r\n\r\n.mat-mdc-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n"] }]
        }] });

/**
 * @title Footer row table
 */
class TableFooterRowExample {
    constructor() {
        this.displayedColumns = ['item', 'cost'];
        this.transactions = [
            { item: 'Beach ball', cost: 4 },
            { item: 'Towel', cost: 5 },
            { item: 'Frisbee', cost: 2 },
            { item: 'Sunscreen', cost: 4 },
            { item: 'Cooler', cost: 25 },
            { item: 'Swim suit', cost: 15 },
        ];
    }
    /** Gets the total cost of all transactions. */
    getTotalCost() {
        return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableFooterRowExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: TableFooterRowExample, isStandalone: true, selector: "table-footer-row-example", ngImport: i0, template: "<table mat-table [dataSource]=\"transactions\" class=\"mat-elevation-z8\">\r\n  <!-- Item Column -->\r\n  <ng-container matColumnDef=\"item\">\r\n    <th mat-header-cell *matHeaderCellDef> Item </th>\r\n    <td mat-cell *matCellDef=\"let transaction\"> {{transaction.item}} </td>\r\n    <td mat-footer-cell *matFooterCellDef> Total </td>\r\n  </ng-container>\r\n\r\n  <!-- Cost Column -->\r\n  <ng-container matColumnDef=\"cost\">\r\n    <th mat-header-cell *matHeaderCellDef> Cost </th>\r\n    <td mat-cell *matCellDef=\"let transaction\"> {{transaction.cost | currency}} </td>\r\n    <td mat-footer-cell *matFooterCellDef> {{getTotalCost() | currency}} </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  <tr mat-footer-row *matFooterRowDef=\"displayedColumns\"></tr>\r\n</table>\r\n", styles: ["table {\r\n  width: 100%;\r\n}\r\n\r\ntr.mat-mdc-footer-row td {\r\n  font-weight: bold;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i1.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i1.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i1.MatFooterCellDef, selector: "[matFooterCellDef]" }, { kind: "directive", type: i1.MatFooterRowDef, selector: "[matFooterRowDef]", inputs: ["matFooterRowDef", "matFooterRowDefSticky"] }, { kind: "directive", type: i1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i1.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "directive", type: i1.MatFooterCell, selector: "mat-footer-cell, td[mat-footer-cell]" }, { kind: "component", type: i1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "component", type: i1.MatFooterRow, selector: "mat-footer-row, tr[mat-footer-row]", exportAs: ["matFooterRow"] }, { kind: "pipe", type: CurrencyPipe, name: "currency" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableFooterRowExample, decorators: [{
            type: Component,
            args: [{ selector: 'table-footer-row-example', standalone: true, imports: [MatTableModule, CurrencyPipe], template: "<table mat-table [dataSource]=\"transactions\" class=\"mat-elevation-z8\">\r\n  <!-- Item Column -->\r\n  <ng-container matColumnDef=\"item\">\r\n    <th mat-header-cell *matHeaderCellDef> Item </th>\r\n    <td mat-cell *matCellDef=\"let transaction\"> {{transaction.item}} </td>\r\n    <td mat-footer-cell *matFooterCellDef> Total </td>\r\n  </ng-container>\r\n\r\n  <!-- Cost Column -->\r\n  <ng-container matColumnDef=\"cost\">\r\n    <th mat-header-cell *matHeaderCellDef> Cost </th>\r\n    <td mat-cell *matCellDef=\"let transaction\"> {{transaction.cost | currency}} </td>\r\n    <td mat-footer-cell *matFooterCellDef> {{getTotalCost() | currency}} </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  <tr mat-footer-row *matFooterRowDef=\"displayedColumns\"></tr>\r\n</table>\r\n", styles: ["table {\r\n  width: 100%;\r\n}\r\n\r\ntr.mat-mdc-footer-row td {\r\n  font-weight: bold;\r\n}\r\n"] }]
        }] });

/**
 * @title Table retrieving data through HTTP
 */
class TableHttpExample {
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        this.displayedColumns = ['created', 'state', 'number', 'title'];
        this.data = [];
        this.resultsLength = 0;
        this.isLoadingResults = true;
        this.isRateLimitReached = false;
    }
    ngAfterViewInit() {
        this.exampleDatabase = new ExampleHttpDatabase(this._httpClient);
        // If the user changes the sort order, reset back to the first page.
        this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));
        merge(this.sort.sortChange, this.paginator.page)
            .pipe(startWith({}), switchMap(() => {
            this.isLoadingResults = true;
            return this.exampleDatabase.getRepoIssues(this.sort.active, this.sort.direction, this.paginator.pageIndex).pipe(catchError(() => of(null)));
        }), map(data => {
            // Flip flag to show that loading has finished.
            this.isLoadingResults = false;
            this.isRateLimitReached = data === null;
            if (data === null) {
                return [];
            }
            // Only refresh the result length if there is new data. In case of rate
            // limit errors, we do not want to reset the paginator to zero, as that
            // would prevent users from re-triggering requests.
            this.resultsLength = data.total_count;
            return data.items;
        }))
            .subscribe(data => (this.data = data));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableHttpExample, deps: [{ token: i1$3.HttpClient }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: TableHttpExample, isStandalone: true, selector: "table-http-example", viewQueries: [{ propertyName: "paginator", first: true, predicate: MatPaginator, descendants: true }, { propertyName: "sort", first: true, predicate: MatSort, descendants: true }], ngImport: i0, template: "<div class=\"example-container mat-elevation-z8\">\r\n  @if (isLoadingResults || isRateLimitReached) {\r\n    <div class=\"example-loading-shade\">\r\n      @if (isLoadingResults) {\r\n        <mat-spinner></mat-spinner>\r\n      }\r\n      @if (isRateLimitReached) {\r\n        <div class=\"example-rate-limit-reached\">\r\n          GitHub's API rate limit has been reached. It will be reset in one minute.\r\n        </div>\r\n      }\r\n    </div>\r\n  }\r\n\r\n  <div class=\"example-table-container\">\r\n\r\n    <table mat-table [dataSource]=\"data\" class=\"example-table\"\r\n           matSort matSortActive=\"created\" matSortDisableClear matSortDirection=\"desc\">\r\n      <!-- Number Column -->\r\n      <ng-container matColumnDef=\"number\">\r\n        <th mat-header-cell *matHeaderCellDef>#</th>\r\n        <td mat-cell *matCellDef=\"let row\">{{row.number}}</td>\r\n      </ng-container>\r\n\r\n      <!-- Title Column -->\r\n      <ng-container matColumnDef=\"title\">\r\n        <th mat-header-cell *matHeaderCellDef>Title</th>\r\n        <td mat-cell *matCellDef=\"let row\">{{row.title}}</td>\r\n      </ng-container>\r\n\r\n      <!-- State Column -->\r\n      <ng-container matColumnDef=\"state\">\r\n        <th mat-header-cell *matHeaderCellDef>State</th>\r\n        <td mat-cell *matCellDef=\"let row\">{{row.state}}</td>\r\n      </ng-container>\r\n\r\n      <!-- Created Column -->\r\n      <ng-container matColumnDef=\"created\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\r\n          Created\r\n        </th>\r\n        <td mat-cell *matCellDef=\"let row\">{{row.created_at | date}}</td>\r\n      </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n  </div>\r\n\r\n  <mat-paginator [length]=\"resultsLength\" [pageSize]=\"30\" aria-label=\"Select page of GitHub search results\"></mat-paginator>\r\n</div>\r\n", styles: ["/* Structure */\r\n.example-container {\r\n  position: relative;\r\n}\r\n\r\n.example-table-container {\r\n  position: relative;\r\n  min-height: 200px;\r\n  max-height: 400px;\r\n  overflow: auto;\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n}\r\n\r\n.example-loading-shade {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 56px;\r\n  right: 0;\r\n  background: rgba(0, 0, 0, 0.15);\r\n  z-index: 1;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.example-rate-limit-reached {\r\n  max-width: 360px;\r\n  text-align: center;\r\n}\r\n\r\n/* Column Widths */\r\n.mat-column-number,\r\n.mat-column-state {\r\n  max-width: 64px;\r\n}\r\n\r\n.mat-column-created {\r\n  max-width: 124px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatProgressSpinnerModule }, { kind: "component", type: i2$1.MatProgressSpinner, selector: "mat-progress-spinner, mat-spinner", inputs: ["color", "mode", "value", "diameter", "strokeWidth"], exportAs: ["matProgressSpinner"] }, { kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i1.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i1.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i1.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "ngmodule", type: MatSortModule }, { kind: "directive", type: i4.MatSort, selector: "[matSort]", inputs: ["matSortActive", "matSortStart", "matSortDirection", "matSortDisableClear", "matSortDisabled"], outputs: ["matSortChange"], exportAs: ["matSort"] }, { kind: "component", type: i4.MatSortHeader, selector: "[mat-sort-header]", inputs: ["mat-sort-header", "arrowPosition", "start", "disabled", "sortActionDescription", "disableClear"], exportAs: ["matSortHeader"] }, { kind: "ngmodule", type: MatPaginatorModule }, { kind: "component", type: i5.MatPaginator, selector: "mat-paginator", inputs: ["color", "pageIndex", "length", "pageSize", "pageSizeOptions", "hidePageSize", "showFirstLastButtons", "selectConfig", "disabled"], outputs: ["page"], exportAs: ["matPaginator"] }, { kind: "pipe", type: DatePipe, name: "date" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableHttpExample, decorators: [{
            type: Component,
            args: [{ selector: 'table-http-example', standalone: true, imports: [MatProgressSpinnerModule, MatTableModule, MatSortModule, MatPaginatorModule, DatePipe], template: "<div class=\"example-container mat-elevation-z8\">\r\n  @if (isLoadingResults || isRateLimitReached) {\r\n    <div class=\"example-loading-shade\">\r\n      @if (isLoadingResults) {\r\n        <mat-spinner></mat-spinner>\r\n      }\r\n      @if (isRateLimitReached) {\r\n        <div class=\"example-rate-limit-reached\">\r\n          GitHub's API rate limit has been reached. It will be reset in one minute.\r\n        </div>\r\n      }\r\n    </div>\r\n  }\r\n\r\n  <div class=\"example-table-container\">\r\n\r\n    <table mat-table [dataSource]=\"data\" class=\"example-table\"\r\n           matSort matSortActive=\"created\" matSortDisableClear matSortDirection=\"desc\">\r\n      <!-- Number Column -->\r\n      <ng-container matColumnDef=\"number\">\r\n        <th mat-header-cell *matHeaderCellDef>#</th>\r\n        <td mat-cell *matCellDef=\"let row\">{{row.number}}</td>\r\n      </ng-container>\r\n\r\n      <!-- Title Column -->\r\n      <ng-container matColumnDef=\"title\">\r\n        <th mat-header-cell *matHeaderCellDef>Title</th>\r\n        <td mat-cell *matCellDef=\"let row\">{{row.title}}</td>\r\n      </ng-container>\r\n\r\n      <!-- State Column -->\r\n      <ng-container matColumnDef=\"state\">\r\n        <th mat-header-cell *matHeaderCellDef>State</th>\r\n        <td mat-cell *matCellDef=\"let row\">{{row.state}}</td>\r\n      </ng-container>\r\n\r\n      <!-- Created Column -->\r\n      <ng-container matColumnDef=\"created\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\r\n          Created\r\n        </th>\r\n        <td mat-cell *matCellDef=\"let row\">{{row.created_at | date}}</td>\r\n      </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n  </div>\r\n\r\n  <mat-paginator [length]=\"resultsLength\" [pageSize]=\"30\" aria-label=\"Select page of GitHub search results\"></mat-paginator>\r\n</div>\r\n", styles: ["/* Structure */\r\n.example-container {\r\n  position: relative;\r\n}\r\n\r\n.example-table-container {\r\n  position: relative;\r\n  min-height: 200px;\r\n  max-height: 400px;\r\n  overflow: auto;\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n}\r\n\r\n.example-loading-shade {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 56px;\r\n  right: 0;\r\n  background: rgba(0, 0, 0, 0.15);\r\n  z-index: 1;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.example-rate-limit-reached {\r\n  max-width: 360px;\r\n  text-align: center;\r\n}\r\n\r\n/* Column Widths */\r\n.mat-column-number,\r\n.mat-column-state {\r\n  max-width: 64px;\r\n}\r\n\r\n.mat-column-created {\r\n  max-width: 124px;\r\n}\r\n"] }]
        }], ctorParameters: () => [{ type: i1$3.HttpClient }], propDecorators: { paginator: [{
                type: ViewChild,
                args: [MatPaginator]
            }], sort: [{
                type: ViewChild,
                args: [MatSort]
            }] } });
/** An example database that the data source uses to retrieve data for the table. */
class ExampleHttpDatabase {
    constructor(_httpClient) {
        this._httpClient = _httpClient;
    }
    getRepoIssues(sort, order, page) {
        const href = 'https://api.github.com/search/issues';
        const requestUrl = `${href}?q=repo:angular/components&sort=${sort}&order=${order}&page=${page + 1}`;
        return this._httpClient.get(requestUrl);
    }
}

/**
 * @title Table with multiple header and footer rows
 */
class TableMultipleHeaderFooterExample {
    constructor() {
        this.displayedColumns = ['item', 'cost'];
        this.transactions = [
            { item: 'Beach ball', cost: 4 },
            { item: 'Towel', cost: 5 },
            { item: 'Frisbee', cost: 2 },
            { item: 'Sunscreen', cost: 4 },
            { item: 'Cooler', cost: 25 },
            { item: 'Swim suit', cost: 15 },
        ];
    }
    /** Gets the total cost of all transactions. */
    getTotalCost() {
        return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableMultipleHeaderFooterExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: TableMultipleHeaderFooterExample, isStandalone: true, selector: "table-multiple-header-footer-example", ngImport: i0, template: "<table mat-table [dataSource]=\"transactions\" class=\"mat-elevation-z8\">\r\n  <!-- Item Column -->\r\n  <ng-container matColumnDef=\"item\">\r\n    <th mat-header-cell *matHeaderCellDef> Item </th>\r\n    <td mat-cell *matCellDef=\"let transaction\"> {{transaction.item}} </td>\r\n    <td mat-footer-cell *matFooterCellDef> Total </td>\r\n  </ng-container>\r\n\r\n  <!-- Cost Column -->\r\n  <ng-container matColumnDef=\"cost\">\r\n    <th mat-header-cell *matHeaderCellDef> Cost </th>\r\n    <td mat-cell *matCellDef=\"let transaction\"> {{transaction.cost | currency}} </td>\r\n    <td mat-footer-cell *matFooterCellDef> {{getTotalCost() | currency}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Item Description Column -->\r\n  <ng-container matColumnDef=\"item-description\">\r\n    <th mat-header-cell *matHeaderCellDef> Name of the item purchased </th>\r\n  </ng-container>\r\n\r\n  <!-- Cost Description Column -->\r\n  <ng-container matColumnDef=\"cost-description\">\r\n    <th mat-header-cell *matHeaderCellDef> Cost of the item in USD </th>\r\n  </ng-container>\r\n\r\n  <!-- Disclaimer column -->\r\n  <ng-container matColumnDef=\"disclaimer\">\r\n    <td mat-footer-cell *matFooterCellDef colspan=\"2\">\r\n      Please note that the cost of items displayed are completely and totally made up.\r\n    </td>\r\n  </ng-container>\r\n\r\n  <!-- The table will render two header rows, one data row per data object, and two footer rows. -->\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"\r\n      class=\"example-first-header-row\">\r\n  </tr>\r\n  <tr mat-header-row *matHeaderRowDef=\"['item-description', 'cost-description']\"\r\n      class=\"example-second-header-row\">\r\n  </tr>\r\n\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\r\n  <tr mat-footer-row *matFooterRowDef=\"displayedColumns\" class=\"example-first-footer-row\"></tr>\r\n  <tr mat-footer-row *matFooterRowDef=\"['disclaimer']\" class=\"example-second-footer-row\"></tr>\r\n</table>\r\n", styles: ["table {\r\n  width: 100%;\r\n}\r\n\r\n.example-first-header-row th {\r\n  border-bottom: none;\r\n}\r\n\r\n.example-second-header-row {\r\n  font-style: italic;\r\n}\r\n\r\n.example-first-footer-row {\r\n  font-weight: bold;\r\n}\r\n\r\n.example-second-footer-row td {\r\n  font-style: italic;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i1.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i1.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i1.MatFooterCellDef, selector: "[matFooterCellDef]" }, { kind: "directive", type: i1.MatFooterRowDef, selector: "[matFooterRowDef]", inputs: ["matFooterRowDef", "matFooterRowDefSticky"] }, { kind: "directive", type: i1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i1.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "directive", type: i1.MatFooterCell, selector: "mat-footer-cell, td[mat-footer-cell]" }, { kind: "component", type: i1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "component", type: i1.MatFooterRow, selector: "mat-footer-row, tr[mat-footer-row]", exportAs: ["matFooterRow"] }, { kind: "pipe", type: CurrencyPipe, name: "currency" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableMultipleHeaderFooterExample, decorators: [{
            type: Component,
            args: [{ selector: 'table-multiple-header-footer-example', standalone: true, imports: [MatTableModule, CurrencyPipe], template: "<table mat-table [dataSource]=\"transactions\" class=\"mat-elevation-z8\">\r\n  <!-- Item Column -->\r\n  <ng-container matColumnDef=\"item\">\r\n    <th mat-header-cell *matHeaderCellDef> Item </th>\r\n    <td mat-cell *matCellDef=\"let transaction\"> {{transaction.item}} </td>\r\n    <td mat-footer-cell *matFooterCellDef> Total </td>\r\n  </ng-container>\r\n\r\n  <!-- Cost Column -->\r\n  <ng-container matColumnDef=\"cost\">\r\n    <th mat-header-cell *matHeaderCellDef> Cost </th>\r\n    <td mat-cell *matCellDef=\"let transaction\"> {{transaction.cost | currency}} </td>\r\n    <td mat-footer-cell *matFooterCellDef> {{getTotalCost() | currency}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Item Description Column -->\r\n  <ng-container matColumnDef=\"item-description\">\r\n    <th mat-header-cell *matHeaderCellDef> Name of the item purchased </th>\r\n  </ng-container>\r\n\r\n  <!-- Cost Description Column -->\r\n  <ng-container matColumnDef=\"cost-description\">\r\n    <th mat-header-cell *matHeaderCellDef> Cost of the item in USD </th>\r\n  </ng-container>\r\n\r\n  <!-- Disclaimer column -->\r\n  <ng-container matColumnDef=\"disclaimer\">\r\n    <td mat-footer-cell *matFooterCellDef colspan=\"2\">\r\n      Please note that the cost of items displayed are completely and totally made up.\r\n    </td>\r\n  </ng-container>\r\n\r\n  <!-- The table will render two header rows, one data row per data object, and two footer rows. -->\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"\r\n      class=\"example-first-header-row\">\r\n  </tr>\r\n  <tr mat-header-row *matHeaderRowDef=\"['item-description', 'cost-description']\"\r\n      class=\"example-second-header-row\">\r\n  </tr>\r\n\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\r\n  <tr mat-footer-row *matFooterRowDef=\"displayedColumns\" class=\"example-first-footer-row\"></tr>\r\n  <tr mat-footer-row *matFooterRowDef=\"['disclaimer']\" class=\"example-second-footer-row\"></tr>\r\n</table>\r\n", styles: ["table {\r\n  width: 100%;\r\n}\r\n\r\n.example-first-header-row th {\r\n  border-bottom: none;\r\n}\r\n\r\n.example-second-header-row {\r\n  font-style: italic;\r\n}\r\n\r\n.example-first-footer-row {\r\n  font-weight: bold;\r\n}\r\n\r\n.example-second-footer-row td {\r\n  font-style: italic;\r\n}\r\n"] }]
        }] });

/** Constants used to fill up our data base. */
const FRUITS = [
    'blueberry',
    'lychee',
    'kiwi',
    'mango',
    'peach',
    'lime',
    'pomegranate',
    'pineapple',
];
const NAMES = [
    'Maia',
    'Asher',
    'Olivia',
    'Atticus',
    'Amelia',
    'Jack',
    'Charlotte',
    'Theodore',
    'Isla',
    'Oliver',
    'Isabella',
    'Jasper',
    'Cora',
    'Levi',
    'Violet',
    'Arthur',
    'Mia',
    'Thomas',
    'Elizabeth',
];
/**
 * @title Data table with sorting, pagination, and filtering.
 */
class TableOverviewExample {
    constructor() {
        this.displayedColumns = ['id', 'name', 'progress', 'fruit'];
        // Create 100 users
        const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));
        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(users);
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: TableOverviewExample, isStandalone: true, selector: "table-overview-example", viewQueries: [{ propertyName: "paginator", first: true, predicate: MatPaginator, descendants: true }, { propertyName: "sort", first: true, predicate: MatSort, descendants: true }], ngImport: i0, template: "<mat-form-field>\r\n  <mat-label>Filter</mat-label>\r\n  <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Ex. Mia\" #input>\r\n</mat-form-field>\r\n\r\n<div class=\"mat-elevation-z8\">\r\n  <table mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n    <!-- ID Column -->\r\n    <ng-container matColumnDef=\"id\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\r\n      <td mat-cell *matCellDef=\"let row\"> {{row.id}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Progress Column -->\r\n    <ng-container matColumnDef=\"progress\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Progress </th>\r\n      <td mat-cell *matCellDef=\"let row\"> {{row.progress}}% </td>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"name\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n      <td mat-cell *matCellDef=\"let row\"> {{row.name}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Fruit Column -->\r\n    <ng-container matColumnDef=\"fruit\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Fruit </th>\r\n      <td mat-cell *matCellDef=\"let row\"> {{row.fruit}} </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\r\n    <!-- Row shown when there is no matching data. -->\r\n    <tr class=\"mat-row\" *matNoDataRow>\r\n      <td class=\"mat-cell\" colspan=\"4\">No data matching the filter \"{{input.value}}\"</td>\r\n    </tr>\r\n  </table>\r\n\r\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" aria-label=\"Select page of users\"></mat-paginator>\r\n</div>\r\n\r\n", styles: ["table {\r\n  width: 100%;\r\n}\r\n\r\n.mat-mdc-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n\r\ntd, th {\r\n  width: 25%;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1$2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1$2.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i1.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i1.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i1.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "directive", type: i1.MatNoDataRow, selector: "ng-template[matNoDataRow]" }, { kind: "ngmodule", type: MatSortModule }, { kind: "directive", type: i4.MatSort, selector: "[matSort]", inputs: ["matSortActive", "matSortStart", "matSortDirection", "matSortDisableClear", "matSortDisabled"], outputs: ["matSortChange"], exportAs: ["matSort"] }, { kind: "component", type: i4.MatSortHeader, selector: "[mat-sort-header]", inputs: ["mat-sort-header", "arrowPosition", "start", "disabled", "sortActionDescription", "disableClear"], exportAs: ["matSortHeader"] }, { kind: "ngmodule", type: MatPaginatorModule }, { kind: "component", type: i5.MatPaginator, selector: "mat-paginator", inputs: ["color", "pageIndex", "length", "pageSize", "pageSizeOptions", "hidePageSize", "showFirstLastButtons", "selectConfig", "disabled"], outputs: ["page"], exportAs: ["matPaginator"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'table-overview-example', standalone: true, imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule], template: "<mat-form-field>\r\n  <mat-label>Filter</mat-label>\r\n  <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Ex. Mia\" #input>\r\n</mat-form-field>\r\n\r\n<div class=\"mat-elevation-z8\">\r\n  <table mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n    <!-- ID Column -->\r\n    <ng-container matColumnDef=\"id\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\r\n      <td mat-cell *matCellDef=\"let row\"> {{row.id}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Progress Column -->\r\n    <ng-container matColumnDef=\"progress\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Progress </th>\r\n      <td mat-cell *matCellDef=\"let row\"> {{row.progress}}% </td>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"name\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n      <td mat-cell *matCellDef=\"let row\"> {{row.name}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Fruit Column -->\r\n    <ng-container matColumnDef=\"fruit\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Fruit </th>\r\n      <td mat-cell *matCellDef=\"let row\"> {{row.fruit}} </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\r\n    <!-- Row shown when there is no matching data. -->\r\n    <tr class=\"mat-row\" *matNoDataRow>\r\n      <td class=\"mat-cell\" colspan=\"4\">No data matching the filter \"{{input.value}}\"</td>\r\n    </tr>\r\n  </table>\r\n\r\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" aria-label=\"Select page of users\"></mat-paginator>\r\n</div>\r\n\r\n", styles: ["table {\r\n  width: 100%;\r\n}\r\n\r\n.mat-mdc-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n\r\ntd, th {\r\n  width: 25%;\r\n}\r\n"] }]
        }], ctorParameters: () => [], propDecorators: { paginator: [{
                type: ViewChild,
                args: [MatPaginator]
            }], sort: [{
                type: ViewChild,
                args: [MatSort]
            }] } });
/** Builds and returns a new User. */
function createNewUser(id) {
    const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
        ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
        '.';
    return {
        id: id.toString(),
        name: name,
        progress: Math.round(Math.random() * 100).toString(),
        fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
    };
}

/**
 * @title Table with pagination
 */
class TablePaginationExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new MatTableDataSource(ELEMENT_DATA$i);
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TablePaginationExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: TablePaginationExample, isStandalone: true, selector: "table-pagination-example", viewQueries: [{ propertyName: "paginator", first: true, predicate: MatPaginator, descendants: true }], ngImport: i0, template: "<div class=\"mat-elevation-z8\">\r\n  <table mat-table [dataSource]=\"dataSource\">\r\n\r\n    <!-- Position Column -->\r\n    <ng-container matColumnDef=\"position\">\r\n      <th mat-header-cell *matHeaderCellDef> No. </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"name\">\r\n      <th mat-header-cell *matHeaderCellDef> Name </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Weight Column -->\r\n    <ng-container matColumnDef=\"weight\">\r\n      <th mat-header-cell *matHeaderCellDef> Weight </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Symbol Column -->\r\n    <ng-container matColumnDef=\"symbol\">\r\n      <th mat-header-cell *matHeaderCellDef> Symbol </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  </table>\r\n\r\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\"\r\n                 showFirstLastButtons\r\n                 aria-label=\"Select page of periodic elements\">\r\n  </mat-paginator>\r\n</div>\r\n", styles: ["table {\r\n  width: 100%;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i1.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i1.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i1.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "ngmodule", type: MatPaginatorModule }, { kind: "component", type: i5.MatPaginator, selector: "mat-paginator", inputs: ["color", "pageIndex", "length", "pageSize", "pageSizeOptions", "hidePageSize", "showFirstLastButtons", "selectConfig", "disabled"], outputs: ["page"], exportAs: ["matPaginator"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TablePaginationExample, decorators: [{
            type: Component,
            args: [{ selector: 'table-pagination-example', standalone: true, imports: [MatTableModule, MatPaginatorModule], template: "<div class=\"mat-elevation-z8\">\r\n  <table mat-table [dataSource]=\"dataSource\">\r\n\r\n    <!-- Position Column -->\r\n    <ng-container matColumnDef=\"position\">\r\n      <th mat-header-cell *matHeaderCellDef> No. </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"name\">\r\n      <th mat-header-cell *matHeaderCellDef> Name </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Weight Column -->\r\n    <ng-container matColumnDef=\"weight\">\r\n      <th mat-header-cell *matHeaderCellDef> Weight </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Symbol Column -->\r\n    <ng-container matColumnDef=\"symbol\">\r\n      <th mat-header-cell *matHeaderCellDef> Symbol </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  </table>\r\n\r\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\"\r\n                 showFirstLastButtons\r\n                 aria-label=\"Select page of periodic elements\">\r\n  </mat-paginator>\r\n</div>\r\n", styles: ["table {\r\n  width: 100%;\r\n}\r\n"] }]
        }], propDecorators: { paginator: [{
                type: ViewChild,
                args: [MatPaginator]
            }] } });
const ELEMENT_DATA$i = [
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
 * @title Table showing each row context properties.
 */
class TableRowContextExample {
    constructor() {
        this.displayedColumns = ['$implicit', 'index', 'count', 'first', 'last', 'even', 'odd'];
        this.data = ['one', 'two', 'three', 'four', 'five'];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableRowContextExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: TableRowContextExample, isStandalone: true, selector: "table-row-context-example", ngImport: i0, template: "<table mat-table [dataSource]=\"data\" class=\"mat-elevation-z8\">\r\n  <!-- Implicit Column -->\r\n  <ng-container matColumnDef=\"$implicit\">\r\n    <th mat-header-cell *matHeaderCellDef> $implicit </th>\r\n    <td mat-cell *matCellDef=\"let data\"> {{data}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Index Column -->\r\n  <ng-container matColumnDef=\"index\">\r\n    <th mat-header-cell *matHeaderCellDef> index </th>\r\n    <td mat-cell *matCellDef=\"let index = index\"> {{index}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Count Column -->\r\n  <ng-container matColumnDef=\"count\">\r\n    <th mat-header-cell *matHeaderCellDef> count </th>\r\n    <td mat-cell *matCellDef=\"let count = count\"> {{count}} </td>\r\n  </ng-container>\r\n\r\n  <!-- First Column -->\r\n  <ng-container matColumnDef=\"first\">\r\n    <th mat-header-cell *matHeaderCellDef> first </th>\r\n    <td mat-cell *matCellDef=\"let first = first\"> {{first}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Last Column -->\r\n  <ng-container matColumnDef=\"last\">\r\n    <th mat-header-cell *matHeaderCellDef> last </th>\r\n    <td mat-cell *matCellDef=\"let last = last\"> {{last}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Even Column -->\r\n  <ng-container matColumnDef=\"even\">\r\n    <th mat-header-cell *matHeaderCellDef> even </th>\r\n    <td mat-cell *matCellDef=\"let even = even\"> {{even}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Odd Column -->\r\n  <ng-container matColumnDef=\"odd\">\r\n    <th mat-header-cell *matHeaderCellDef> odd </th>\r\n    <td mat-cell *matCellDef=\"let odd = odd\"> {{odd}} </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n", styles: ["table {\r\n  width: 100%;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i1.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i1.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i1.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableRowContextExample, decorators: [{
            type: Component,
            args: [{ selector: 'table-row-context-example', standalone: true, imports: [MatTableModule], template: "<table mat-table [dataSource]=\"data\" class=\"mat-elevation-z8\">\r\n  <!-- Implicit Column -->\r\n  <ng-container matColumnDef=\"$implicit\">\r\n    <th mat-header-cell *matHeaderCellDef> $implicit </th>\r\n    <td mat-cell *matCellDef=\"let data\"> {{data}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Index Column -->\r\n  <ng-container matColumnDef=\"index\">\r\n    <th mat-header-cell *matHeaderCellDef> index </th>\r\n    <td mat-cell *matCellDef=\"let index = index\"> {{index}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Count Column -->\r\n  <ng-container matColumnDef=\"count\">\r\n    <th mat-header-cell *matHeaderCellDef> count </th>\r\n    <td mat-cell *matCellDef=\"let count = count\"> {{count}} </td>\r\n  </ng-container>\r\n\r\n  <!-- First Column -->\r\n  <ng-container matColumnDef=\"first\">\r\n    <th mat-header-cell *matHeaderCellDef> first </th>\r\n    <td mat-cell *matCellDef=\"let first = first\"> {{first}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Last Column -->\r\n  <ng-container matColumnDef=\"last\">\r\n    <th mat-header-cell *matHeaderCellDef> last </th>\r\n    <td mat-cell *matCellDef=\"let last = last\"> {{last}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Even Column -->\r\n  <ng-container matColumnDef=\"even\">\r\n    <th mat-header-cell *matHeaderCellDef> even </th>\r\n    <td mat-cell *matCellDef=\"let even = even\"> {{even}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Odd Column -->\r\n  <ng-container matColumnDef=\"odd\">\r\n    <th mat-header-cell *matHeaderCellDef> odd </th>\r\n    <td mat-cell *matCellDef=\"let odd = odd\"> {{odd}} </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n", styles: ["table {\r\n  width: 100%;\r\n}\r\n"] }]
        }] });

const ELEMENT_DATA$h = [
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
];
/**
 * @title Table with selection
 */
class TableSelectionExample {
    constructor() {
        this.displayedColumns = ['select', 'position', 'name', 'weight', 'symbol'];
        this.dataSource = new MatTableDataSource(ELEMENT_DATA$h);
        this.selection = new SelectionModel(true, []);
    }
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    toggleAllRows() {
        if (this.isAllSelected()) {
            this.selection.clear();
            return;
        }
        this.selection.select(...this.dataSource.data);
    }
    /** The label for the checkbox on the passed row */
    checkboxLabel(row) {
        if (!row) {
            return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableSelectionExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: TableSelectionExample, isStandalone: true, selector: "table-selection-example", ngImport: i0, template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n\r\n  <!-- Checkbox Column -->\r\n  <ng-container matColumnDef=\"select\">\r\n    <th mat-header-cell *matHeaderCellDef>\r\n      <mat-checkbox (change)=\"$event ? toggleAllRows() : null\"\r\n                    [checked]=\"selection.hasValue() && isAllSelected()\"\r\n                    [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\r\n                    [aria-label]=\"checkboxLabel()\">\r\n      </mat-checkbox>\r\n    </th>\r\n    <td mat-cell *matCellDef=\"let row\">\r\n      <mat-checkbox (click)=\"$event.stopPropagation()\"\r\n                    (change)=\"$event ? selection.toggle(row) : null\"\r\n                    [checked]=\"selection.isSelected(row)\"\r\n                    [aria-label]=\"checkboxLabel(row)\">\r\n      </mat-checkbox>\r\n    </td>\r\n  </ng-container>\r\n\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"position\">\r\n    <th mat-header-cell *matHeaderCellDef> No. </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"name\">\r\n    <th mat-header-cell *matHeaderCellDef> Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container matColumnDef=\"weight\">\r\n    <th mat-header-cell *matHeaderCellDef> Weight </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container matColumnDef=\"symbol\">\r\n    <th mat-header-cell *matHeaderCellDef> Symbol </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"\r\n      (click)=\"selection.toggle(row)\">\r\n  </tr>\r\n</table>\r\n", styles: ["table {\r\n  width: 100%;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i1.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i1.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i1.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i2$2.MatCheckbox, selector: "mat-checkbox", inputs: ["aria-label", "aria-labelledby", "aria-describedby", "id", "required", "labelPosition", "name", "value", "disableRipple", "tabIndex", "color", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableSelectionExample, decorators: [{
            type: Component,
            args: [{ selector: 'table-selection-example', standalone: true, imports: [MatTableModule, MatCheckboxModule], template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n\r\n  <!-- Checkbox Column -->\r\n  <ng-container matColumnDef=\"select\">\r\n    <th mat-header-cell *matHeaderCellDef>\r\n      <mat-checkbox (change)=\"$event ? toggleAllRows() : null\"\r\n                    [checked]=\"selection.hasValue() && isAllSelected()\"\r\n                    [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\r\n                    [aria-label]=\"checkboxLabel()\">\r\n      </mat-checkbox>\r\n    </th>\r\n    <td mat-cell *matCellDef=\"let row\">\r\n      <mat-checkbox (click)=\"$event.stopPropagation()\"\r\n                    (change)=\"$event ? selection.toggle(row) : null\"\r\n                    [checked]=\"selection.isSelected(row)\"\r\n                    [aria-label]=\"checkboxLabel(row)\">\r\n      </mat-checkbox>\r\n    </td>\r\n  </ng-container>\r\n\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"position\">\r\n    <th mat-header-cell *matHeaderCellDef> No. </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"name\">\r\n    <th mat-header-cell *matHeaderCellDef> Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container matColumnDef=\"weight\">\r\n    <th mat-header-cell *matHeaderCellDef> Weight </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container matColumnDef=\"symbol\">\r\n    <th mat-header-cell *matHeaderCellDef> Symbol </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"\r\n      (click)=\"selection.toggle(row)\">\r\n  </tr>\r\n</table>\r\n", styles: ["table {\r\n  width: 100%;\r\n}\r\n"] }]
        }] });

const ELEMENT_DATA$g = [
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
];
/**
 * @title Table with sorting
 */
class TableSortingExample {
    constructor(_liveAnnouncer) {
        this._liveAnnouncer = _liveAnnouncer;
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new MatTableDataSource(ELEMENT_DATA$g);
    }
    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
    }
    /** Announce the change in sort state for assistive technology. */
    announceSortChange(sortState) {
        // This example uses English messages. If your application supports
        // multiple language, you would internationalize these strings.
        // Furthermore, you can customize the message to add additional
        // details about the values being sorted.
        if (sortState.direction) {
            this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
        }
        else {
            this._liveAnnouncer.announce('Sorting cleared');
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableSortingExample, deps: [{ token: i1$4.LiveAnnouncer }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: TableSortingExample, isStandalone: true, selector: "table-sorting-example", viewQueries: [{ propertyName: "sort", first: true, predicate: MatSort, descendants: true }], ngImport: i0, template: "<table mat-table [dataSource]=\"dataSource\" matSort (matSortChange)=\"announceSortChange($event)\"\r\n       class=\"mat-elevation-z8\">\r\n\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"position\">\r\n    <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription=\"Sort by number\">\r\n      No.\r\n    </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"name\">\r\n    <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription=\"Sort by name\">\r\n      Name\r\n    </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container matColumnDef=\"weight\">\r\n    <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription=\"Sort by weight\">\r\n      Weight\r\n    </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container matColumnDef=\"symbol\">\r\n    <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription=\"Sort by symbol\">\r\n      Symbol\r\n    </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n", styles: ["table {\r\n  width: 100%;\r\n}\r\n\r\nth.mat-sort-header-sorted {\r\n  color: black;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i1.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i1.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i1.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "ngmodule", type: MatSortModule }, { kind: "directive", type: i4.MatSort, selector: "[matSort]", inputs: ["matSortActive", "matSortStart", "matSortDirection", "matSortDisableClear", "matSortDisabled"], outputs: ["matSortChange"], exportAs: ["matSort"] }, { kind: "component", type: i4.MatSortHeader, selector: "[mat-sort-header]", inputs: ["mat-sort-header", "arrowPosition", "start", "disabled", "sortActionDescription", "disableClear"], exportAs: ["matSortHeader"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableSortingExample, decorators: [{
            type: Component,
            args: [{ selector: 'table-sorting-example', standalone: true, imports: [MatTableModule, MatSortModule], template: "<table mat-table [dataSource]=\"dataSource\" matSort (matSortChange)=\"announceSortChange($event)\"\r\n       class=\"mat-elevation-z8\">\r\n\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"position\">\r\n    <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription=\"Sort by number\">\r\n      No.\r\n    </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"name\">\r\n    <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription=\"Sort by name\">\r\n      Name\r\n    </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container matColumnDef=\"weight\">\r\n    <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription=\"Sort by weight\">\r\n      Weight\r\n    </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container matColumnDef=\"symbol\">\r\n    <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription=\"Sort by symbol\">\r\n      Symbol\r\n    </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n", styles: ["table {\r\n  width: 100%;\r\n}\r\n\r\nth.mat-sort-header-sorted {\r\n  color: black;\r\n}\r\n"] }]
        }], ctorParameters: () => [{ type: i1$4.LiveAnnouncer }], propDecorators: { sort: [{
                type: ViewChild,
                args: [MatSort]
            }] } });

/**
 * @title Table with sticky columns
 */
class TableStickyColumnsExample {
    constructor() {
        this.displayedColumns = [
            'name',
            'position',
            'weight',
            'symbol',
            'position',
            'weight',
            'symbol',
            'star',
        ];
        this.dataSource = ELEMENT_DATA$f;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableStickyColumnsExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: TableStickyColumnsExample, isStandalone: true, selector: "table-sticky-columns-example", ngImport: i0, template: "<section class=\"example-container mat-elevation-z8\" tabindex=\"0\">\r\n  <table mat-table [dataSource]=\"dataSource\">\r\n\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"name\" sticky>\r\n      <th mat-header-cell *matHeaderCellDef> Name </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Position Column -->\r\n    <ng-container matColumnDef=\"position\">\r\n      <th mat-header-cell *matHeaderCellDef> No. </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Weight Column -->\r\n    <ng-container matColumnDef=\"weight\">\r\n      <th mat-header-cell *matHeaderCellDef> Weight </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Symbol Column -->\r\n    <ng-container matColumnDef=\"symbol\">\r\n      <th mat-header-cell *matHeaderCellDef> Symbol </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Star Column -->\r\n    <ng-container matColumnDef=\"star\" stickyEnd>\r\n      <th mat-header-cell *matHeaderCellDef aria-label=\"row actions\">&nbsp;</th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n        <mat-icon>more_vert</mat-icon>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  </table>\r\n</section>\r\n", styles: [".example-container {\r\n  height: 400px;\r\n  width: 550px;\r\n  max-width: 100%;\r\n  overflow: auto;\r\n}\r\n\r\ntable {\r\n  width: 800px;\r\n}\r\n\r\ntd.mat-column-star {\r\n  width: 20px;\r\n  padding-right: 8px;\r\n}\r\n\r\nth.mat-column-position, td.mat-column-position {\r\n  padding-left: 8px;\r\n}\r\n\r\n.mat-mdc-table-sticky-border-elem-right {\r\n  border-left: 1px solid #e0e0e0;\r\n}\r\n\r\n.mat-mdc-table-sticky-border-elem-left {\r\n  border-right: 1px solid #e0e0e0;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i1.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i1.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i1.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableStickyColumnsExample, decorators: [{
            type: Component,
            args: [{ selector: 'table-sticky-columns-example', standalone: true, imports: [MatTableModule, MatIconModule], template: "<section class=\"example-container mat-elevation-z8\" tabindex=\"0\">\r\n  <table mat-table [dataSource]=\"dataSource\">\r\n\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"name\" sticky>\r\n      <th mat-header-cell *matHeaderCellDef> Name </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Position Column -->\r\n    <ng-container matColumnDef=\"position\">\r\n      <th mat-header-cell *matHeaderCellDef> No. </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Weight Column -->\r\n    <ng-container matColumnDef=\"weight\">\r\n      <th mat-header-cell *matHeaderCellDef> Weight </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Symbol Column -->\r\n    <ng-container matColumnDef=\"symbol\">\r\n      <th mat-header-cell *matHeaderCellDef> Symbol </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Star Column -->\r\n    <ng-container matColumnDef=\"star\" stickyEnd>\r\n      <th mat-header-cell *matHeaderCellDef aria-label=\"row actions\">&nbsp;</th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n        <mat-icon>more_vert</mat-icon>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  </table>\r\n</section>\r\n", styles: [".example-container {\r\n  height: 400px;\r\n  width: 550px;\r\n  max-width: 100%;\r\n  overflow: auto;\r\n}\r\n\r\ntable {\r\n  width: 800px;\r\n}\r\n\r\ntd.mat-column-star {\r\n  width: 20px;\r\n  padding-right: 8px;\r\n}\r\n\r\nth.mat-column-position, td.mat-column-position {\r\n  padding-left: 8px;\r\n}\r\n\r\n.mat-mdc-table-sticky-border-elem-right {\r\n  border-left: 1px solid #e0e0e0;\r\n}\r\n\r\n.mat-mdc-table-sticky-border-elem-left {\r\n  border-right: 1px solid #e0e0e0;\r\n}\r\n"] }]
        }] });
const ELEMENT_DATA$f = [
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
];

/**
 * @title Flex-layout tables with toggle-able sticky headers, footers, and columns
 */
class TableStickyComplexFlexExample {
    constructor() {
        this.displayedColumns = [];
        this.dataSource = ELEMENT_DATA$e;
        this.tables = [0];
        this.displayedColumns.length = 24;
        this.displayedColumns.fill('filler');
        // The first two columns should be position and name; the last two columns: weight, symbol
        this.displayedColumns[0] = 'position';
        this.displayedColumns[1] = 'name';
        this.displayedColumns[22] = 'weight';
        this.displayedColumns[23] = 'symbol';
    }
    /** Whether the button toggle group contains the id as an active value. */
    isSticky(buttonToggleGroup, id) {
        return (buttonToggleGroup.value || []).indexOf(id) !== -1;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableStickyComplexFlexExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: TableStickyComplexFlexExample, isStandalone: true, selector: "table-sticky-complex-flex-example", ngImport: i0, template: "<div>\r\n  <button mat-raised-button (click)=\"tables.push(tables.length)\">Add table</button>\r\n  <button mat-raised-button (click)=\"tables.pop()\">Remove table</button>\r\n</div>\r\n\r\n<div>\r\n  Sticky Headers:\r\n  <mat-button-toggle-group multiple [value]=\"['header-1']\"\r\n                           #stickyHeaders=\"matButtonToggleGroup\"\r\n                           class=\"example-sticky-toggle-group\">\r\n    <mat-button-toggle value=\"header-1\"> Row 1 </mat-button-toggle>\r\n    <mat-button-toggle value=\"header-2\"> Row 2 </mat-button-toggle>\r\n  </mat-button-toggle-group>\r\n</div>\r\n\r\n<div>\r\n  Sticky Footers:\r\n  <mat-button-toggle-group multiple [value]=\"['footer-1']\"\r\n                           #stickyFooters=\"matButtonToggleGroup\"\r\n                           class=\"example-sticky-toggle-group\">\r\n    <mat-button-toggle value=\"footer-1\"> Row 1 </mat-button-toggle>\r\n    <mat-button-toggle value=\"footer-2\"> Row 2 </mat-button-toggle>\r\n  </mat-button-toggle-group>\r\n</div>\r\n\r\n<div>\r\n  Sticky Columns:\r\n  <mat-button-toggle-group multiple [value]=\"['position', 'symbol']\"\r\n                           #stickyColumns=\"matButtonToggleGroup\"\r\n                           class=\"example-sticky-toggle-group\">\r\n    <mat-button-toggle value=\"position\"> Position </mat-button-toggle>\r\n    <mat-button-toggle value=\"name\"> Name </mat-button-toggle>\r\n    <mat-button-toggle value=\"weight\"> Weight </mat-button-toggle>\r\n    <mat-button-toggle value=\"symbol\"> Symbol </mat-button-toggle>\r\n  </mat-button-toggle-group>\r\n</div>\r\n\r\n<section class=\"example-container mat-elevation-z8\" tabindex=\"0\">\r\n  @for (table of tables; track table) {\r\n    <mat-table [dataSource]=\"dataSource\">\r\n      <ng-container matColumnDef=\"position\" [sticky]=\"isSticky(stickyColumns, 'position')\">\r\n        <mat-header-cell *matHeaderCellDef> Position </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\r\n        <mat-footer-cell *matFooterCellDef> Position Footer </mat-footer-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"name\" [sticky]=\"isSticky(stickyColumns, 'name')\">\r\n        <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\r\n        <mat-footer-cell *matFooterCellDef> Name Footer </mat-footer-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"weight\" [stickyEnd]=\"isSticky(stickyColumns, 'weight')\">\r\n        <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\r\n        <mat-footer-cell *matFooterCellDef> Weight Footer </mat-footer-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"symbol\" [stickyEnd]=\"isSticky(stickyColumns, 'symbol')\">\r\n        <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\r\n        <mat-footer-cell *matFooterCellDef> Symbol Footer </mat-footer-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"filler\">\r\n        <mat-header-cell *matHeaderCellDef> Filler header cell </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\"> Filler data cell </mat-cell>\r\n        <mat-footer-cell *matFooterCellDef> Filler footer cell </mat-footer-cell>\r\n      </ng-container>\r\n\r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: isSticky(stickyHeaders, 'header-1')\"></mat-header-row>\r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: isSticky(stickyHeaders, 'header-2')\"></mat-header-row>\r\n\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n\r\n      <mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: isSticky(stickyFooters, 'footer-1')\"></mat-footer-row>\r\n      <mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: isSticky(stickyFooters, 'footer-2')\"></mat-footer-row>\r\n    </mat-table>\r\n  }\r\n</section>\r\n", styles: [".example-container {\r\n  height: 400px;\r\n  overflow: auto;\r\n}\r\n\r\n.mat-mdc-table-sticky {\r\n  background: #59abfd;\r\n  opacity: 1;\r\n}\r\n\r\n.example-sticky-toggle-group {\r\n  margin: 8px;\r\n}\r\n\r\n.mat-column-filler {\r\n  padding: 0 8px;\r\n  font-size: 10px;\r\n  text-align: center;\r\n}\r\n\r\n.mat-mdc-header-cell, .mat-mdc-footer-cell, .mat-mdc-cell {\r\n  min-width: 80px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.mat-mdc-header-row, .mat-mdc-footer-row, .mat-mdc-row {\r\n  min-width: 1920px; /* 24 columns, 80px each */\r\n}\r\n\r\n.mat-mdc-table-sticky-border-elem-top {\r\n  border-bottom: 2px solid midnightblue;\r\n}\r\n\r\n.mat-mdc-table-sticky-border-elem-right {\r\n  border-left: 2px solid midnightblue;\r\n}\r\n\r\n.mat-mdc-table-sticky-border-elem-bottom {\r\n  border-top: 2px solid midnightblue;\r\n}\r\n\r\n.mat-mdc-table-sticky-border-elem-left {\r\n  border-right: 2px solid midnightblue;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1$1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatButtonToggleModule }, { kind: "directive", type: i2$3.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { kind: "component", type: i2$3.MatButtonToggle, selector: "mat-button-toggle", inputs: ["aria-label", "aria-labelledby", "id", "name", "value", "tabIndex", "disableRipple", "appearance", "checked", "disabled"], outputs: ["change"], exportAs: ["matButtonToggle"] }, { kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i1.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i1.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i1.MatFooterCellDef, selector: "[matFooterCellDef]" }, { kind: "directive", type: i1.MatFooterRowDef, selector: "[matFooterRowDef]", inputs: ["matFooterRowDef", "matFooterRowDefSticky"] }, { kind: "directive", type: i1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i1.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "directive", type: i1.MatFooterCell, selector: "mat-footer-cell, td[mat-footer-cell]" }, { kind: "component", type: i1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "component", type: i1.MatFooterRow, selector: "mat-footer-row, tr[mat-footer-row]", exportAs: ["matFooterRow"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableStickyComplexFlexExample, decorators: [{
            type: Component,
            args: [{ selector: 'table-sticky-complex-flex-example', standalone: true, imports: [MatButtonModule, MatButtonToggleModule, MatTableModule], template: "<div>\r\n  <button mat-raised-button (click)=\"tables.push(tables.length)\">Add table</button>\r\n  <button mat-raised-button (click)=\"tables.pop()\">Remove table</button>\r\n</div>\r\n\r\n<div>\r\n  Sticky Headers:\r\n  <mat-button-toggle-group multiple [value]=\"['header-1']\"\r\n                           #stickyHeaders=\"matButtonToggleGroup\"\r\n                           class=\"example-sticky-toggle-group\">\r\n    <mat-button-toggle value=\"header-1\"> Row 1 </mat-button-toggle>\r\n    <mat-button-toggle value=\"header-2\"> Row 2 </mat-button-toggle>\r\n  </mat-button-toggle-group>\r\n</div>\r\n\r\n<div>\r\n  Sticky Footers:\r\n  <mat-button-toggle-group multiple [value]=\"['footer-1']\"\r\n                           #stickyFooters=\"matButtonToggleGroup\"\r\n                           class=\"example-sticky-toggle-group\">\r\n    <mat-button-toggle value=\"footer-1\"> Row 1 </mat-button-toggle>\r\n    <mat-button-toggle value=\"footer-2\"> Row 2 </mat-button-toggle>\r\n  </mat-button-toggle-group>\r\n</div>\r\n\r\n<div>\r\n  Sticky Columns:\r\n  <mat-button-toggle-group multiple [value]=\"['position', 'symbol']\"\r\n                           #stickyColumns=\"matButtonToggleGroup\"\r\n                           class=\"example-sticky-toggle-group\">\r\n    <mat-button-toggle value=\"position\"> Position </mat-button-toggle>\r\n    <mat-button-toggle value=\"name\"> Name </mat-button-toggle>\r\n    <mat-button-toggle value=\"weight\"> Weight </mat-button-toggle>\r\n    <mat-button-toggle value=\"symbol\"> Symbol </mat-button-toggle>\r\n  </mat-button-toggle-group>\r\n</div>\r\n\r\n<section class=\"example-container mat-elevation-z8\" tabindex=\"0\">\r\n  @for (table of tables; track table) {\r\n    <mat-table [dataSource]=\"dataSource\">\r\n      <ng-container matColumnDef=\"position\" [sticky]=\"isSticky(stickyColumns, 'position')\">\r\n        <mat-header-cell *matHeaderCellDef> Position </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\r\n        <mat-footer-cell *matFooterCellDef> Position Footer </mat-footer-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"name\" [sticky]=\"isSticky(stickyColumns, 'name')\">\r\n        <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\r\n        <mat-footer-cell *matFooterCellDef> Name Footer </mat-footer-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"weight\" [stickyEnd]=\"isSticky(stickyColumns, 'weight')\">\r\n        <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\r\n        <mat-footer-cell *matFooterCellDef> Weight Footer </mat-footer-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"symbol\" [stickyEnd]=\"isSticky(stickyColumns, 'symbol')\">\r\n        <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\r\n        <mat-footer-cell *matFooterCellDef> Symbol Footer </mat-footer-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"filler\">\r\n        <mat-header-cell *matHeaderCellDef> Filler header cell </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\"> Filler data cell </mat-cell>\r\n        <mat-footer-cell *matFooterCellDef> Filler footer cell </mat-footer-cell>\r\n      </ng-container>\r\n\r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: isSticky(stickyHeaders, 'header-1')\"></mat-header-row>\r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: isSticky(stickyHeaders, 'header-2')\"></mat-header-row>\r\n\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n\r\n      <mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: isSticky(stickyFooters, 'footer-1')\"></mat-footer-row>\r\n      <mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: isSticky(stickyFooters, 'footer-2')\"></mat-footer-row>\r\n    </mat-table>\r\n  }\r\n</section>\r\n", styles: [".example-container {\r\n  height: 400px;\r\n  overflow: auto;\r\n}\r\n\r\n.mat-mdc-table-sticky {\r\n  background: #59abfd;\r\n  opacity: 1;\r\n}\r\n\r\n.example-sticky-toggle-group {\r\n  margin: 8px;\r\n}\r\n\r\n.mat-column-filler {\r\n  padding: 0 8px;\r\n  font-size: 10px;\r\n  text-align: center;\r\n}\r\n\r\n.mat-mdc-header-cell, .mat-mdc-footer-cell, .mat-mdc-cell {\r\n  min-width: 80px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.mat-mdc-header-row, .mat-mdc-footer-row, .mat-mdc-row {\r\n  min-width: 1920px; /* 24 columns, 80px each */\r\n}\r\n\r\n.mat-mdc-table-sticky-border-elem-top {\r\n  border-bottom: 2px solid midnightblue;\r\n}\r\n\r\n.mat-mdc-table-sticky-border-elem-right {\r\n  border-left: 2px solid midnightblue;\r\n}\r\n\r\n.mat-mdc-table-sticky-border-elem-bottom {\r\n  border-top: 2px solid midnightblue;\r\n}\r\n\r\n.mat-mdc-table-sticky-border-elem-left {\r\n  border-right: 2px solid midnightblue;\r\n}\r\n"] }]
        }], ctorParameters: () => [] });
const ELEMENT_DATA$e = [
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
];

/**
 * @title Tables with toggle-able sticky headers, footers, and columns
 */
class TableStickyComplexExample {
    constructor() {
        this.displayedColumns = [];
        this.dataSource = ELEMENT_DATA$d;
        this.tables = [0];
        this.displayedColumns.length = 24;
        this.displayedColumns.fill('filler');
        // The first two columns should be position and name; the last two columns: weight, symbol
        this.displayedColumns[0] = 'position';
        this.displayedColumns[1] = 'name';
        this.displayedColumns[22] = 'weight';
        this.displayedColumns[23] = 'symbol';
    }
    /** Whether the button toggle group contains the id as an active value. */
    isSticky(buttonToggleGroup, id) {
        return (buttonToggleGroup.value || []).indexOf(id) !== -1;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableStickyComplexExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: TableStickyComplexExample, isStandalone: true, selector: "table-sticky-complex-example", ngImport: i0, template: "<div>\r\n  <button mat-raised-button (click)=\"tables.push(tables.length)\">Add table</button>\r\n  <button mat-raised-button (click)=\"tables.pop()\">Remove table</button>\r\n</div>\r\n\r\n<div>\r\n  Sticky Headers:\r\n  <mat-button-toggle-group multiple [value]=\"['header-1']\"\r\n                           #stickyHeaders=\"matButtonToggleGroup\"\r\n                           class=\"example-sticky-toggle-group\">\r\n    <mat-button-toggle value=\"header-1\"> Row 1 </mat-button-toggle>\r\n    <mat-button-toggle value=\"header-2\"> Row 2 </mat-button-toggle>\r\n  </mat-button-toggle-group>\r\n</div>\r\n\r\n<div>\r\n  Sticky Footers:\r\n  <mat-button-toggle-group multiple [value]=\"['footer-1']\"\r\n                           #stickyFooters=\"matButtonToggleGroup\"\r\n                           class=\"example-sticky-toggle-group\">\r\n    <mat-button-toggle value=\"footer-1\"> Row 1 </mat-button-toggle>\r\n    <mat-button-toggle value=\"footer-2\"> Row 2 </mat-button-toggle>\r\n  </mat-button-toggle-group>\r\n</div>\r\n\r\n<div>\r\n  Sticky Columns:\r\n  <mat-button-toggle-group multiple [value]=\"['position', 'symbol']\"\r\n                           #stickyColumns=\"matButtonToggleGroup\"\r\n                           class=\"example-sticky-toggle-group\">\r\n    <mat-button-toggle value=\"position\"> Position </mat-button-toggle>\r\n    <mat-button-toggle value=\"name\"> Name </mat-button-toggle>\r\n    <mat-button-toggle value=\"weight\"> Weight </mat-button-toggle>\r\n    <mat-button-toggle value=\"symbol\"> Symbol </mat-button-toggle>\r\n  </mat-button-toggle-group>\r\n</div>\r\n\r\n<section class=\"example-container mat-elevation-z8\" tabindex=\"0\">\r\n  @for (table of tables; track table) {\r\n    <table mat-table [dataSource]=\"dataSource\">\r\n      <ng-container matColumnDef=\"position\" [sticky]=\"isSticky(stickyColumns, 'position')\">\r\n        <th mat-header-cell *matHeaderCellDef> Position </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n        <td mat-footer-cell *matFooterCellDef> Position Footer </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"name\" [sticky]=\"isSticky(stickyColumns, 'name')\">\r\n        <th mat-header-cell *matHeaderCellDef> Name </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n        <td mat-footer-cell *matFooterCellDef> Name Footer </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"weight\" [stickyEnd]=\"isSticky(stickyColumns, 'weight')\">\r\n        <th mat-header-cell *matHeaderCellDef> Weight </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\r\n        <td mat-footer-cell *matFooterCellDef> Weight Footer </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"symbol\" [stickyEnd]=\"isSticky(stickyColumns, 'symbol')\">\r\n        <th mat-header-cell *matHeaderCellDef> Symbol </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\r\n        <td mat-footer-cell *matFooterCellDef> Symbol Footer </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"filler\">\r\n        <th mat-header-cell *matHeaderCellDef> Filler header cell </th>\r\n        <td mat-cell *matCellDef=\"let element\"> Filler data cell </td>\r\n        <td mat-footer-cell *matFooterCellDef> Filler footer cell </td>\r\n      </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: isSticky(stickyHeaders, 'header-1')\"></tr>\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: isSticky(stickyHeaders, 'header-2')\"></tr>\r\n\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\r\n      <tr mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: isSticky(stickyFooters, 'footer-1')\"></tr>\r\n      <tr mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: isSticky(stickyFooters, 'footer-2')\"></tr>\r\n    </table>\r\n  }\r\n</section>\r\n", styles: [".example-container {\r\n  height: 400px;\r\n  overflow: auto;\r\n}\r\n\r\n.mat-mdc-table-sticky {\r\n  background: #59abfd;\r\n  opacity: 1;\r\n}\r\n\r\n.example-sticky-toggle-group {\r\n  margin: 8px;\r\n}\r\n\r\n.mat-column-filler {\r\n  padding: 0 8px;\r\n  font-size: 10px;\r\n  text-align: center;\r\n}\r\n\r\n.mat-mdc-header-cell, .mat-mdc-footer-cell, .mat-mdc-cell {\r\n  min-width: 80px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.mat-mdc-table-sticky-border-elem-top {\r\n  border-bottom: 2px solid midnightblue;\r\n}\r\n\r\n.mat-mdc-table-sticky-border-elem-right {\r\n  border-left: 2px solid midnightblue;\r\n}\r\n\r\n.mat-mdc-table-sticky-border-elem-bottom {\r\n  border-top: 2px solid midnightblue;\r\n}\r\n\r\n.mat-mdc-table-sticky-border-elem-left {\r\n  border-right: 2px solid midnightblue;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1$1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatButtonToggleModule }, { kind: "directive", type: i2$3.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { kind: "component", type: i2$3.MatButtonToggle, selector: "mat-button-toggle", inputs: ["aria-label", "aria-labelledby", "id", "name", "value", "tabIndex", "disableRipple", "appearance", "checked", "disabled"], outputs: ["change"], exportAs: ["matButtonToggle"] }, { kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i1.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i1.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i1.MatFooterCellDef, selector: "[matFooterCellDef]" }, { kind: "directive", type: i1.MatFooterRowDef, selector: "[matFooterRowDef]", inputs: ["matFooterRowDef", "matFooterRowDefSticky"] }, { kind: "directive", type: i1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i1.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "directive", type: i1.MatFooterCell, selector: "mat-footer-cell, td[mat-footer-cell]" }, { kind: "component", type: i1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "component", type: i1.MatFooterRow, selector: "mat-footer-row, tr[mat-footer-row]", exportAs: ["matFooterRow"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableStickyComplexExample, decorators: [{
            type: Component,
            args: [{ selector: 'table-sticky-complex-example', standalone: true, imports: [MatButtonModule, MatButtonToggleModule, MatTableModule], template: "<div>\r\n  <button mat-raised-button (click)=\"tables.push(tables.length)\">Add table</button>\r\n  <button mat-raised-button (click)=\"tables.pop()\">Remove table</button>\r\n</div>\r\n\r\n<div>\r\n  Sticky Headers:\r\n  <mat-button-toggle-group multiple [value]=\"['header-1']\"\r\n                           #stickyHeaders=\"matButtonToggleGroup\"\r\n                           class=\"example-sticky-toggle-group\">\r\n    <mat-button-toggle value=\"header-1\"> Row 1 </mat-button-toggle>\r\n    <mat-button-toggle value=\"header-2\"> Row 2 </mat-button-toggle>\r\n  </mat-button-toggle-group>\r\n</div>\r\n\r\n<div>\r\n  Sticky Footers:\r\n  <mat-button-toggle-group multiple [value]=\"['footer-1']\"\r\n                           #stickyFooters=\"matButtonToggleGroup\"\r\n                           class=\"example-sticky-toggle-group\">\r\n    <mat-button-toggle value=\"footer-1\"> Row 1 </mat-button-toggle>\r\n    <mat-button-toggle value=\"footer-2\"> Row 2 </mat-button-toggle>\r\n  </mat-button-toggle-group>\r\n</div>\r\n\r\n<div>\r\n  Sticky Columns:\r\n  <mat-button-toggle-group multiple [value]=\"['position', 'symbol']\"\r\n                           #stickyColumns=\"matButtonToggleGroup\"\r\n                           class=\"example-sticky-toggle-group\">\r\n    <mat-button-toggle value=\"position\"> Position </mat-button-toggle>\r\n    <mat-button-toggle value=\"name\"> Name </mat-button-toggle>\r\n    <mat-button-toggle value=\"weight\"> Weight </mat-button-toggle>\r\n    <mat-button-toggle value=\"symbol\"> Symbol </mat-button-toggle>\r\n  </mat-button-toggle-group>\r\n</div>\r\n\r\n<section class=\"example-container mat-elevation-z8\" tabindex=\"0\">\r\n  @for (table of tables; track table) {\r\n    <table mat-table [dataSource]=\"dataSource\">\r\n      <ng-container matColumnDef=\"position\" [sticky]=\"isSticky(stickyColumns, 'position')\">\r\n        <th mat-header-cell *matHeaderCellDef> Position </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n        <td mat-footer-cell *matFooterCellDef> Position Footer </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"name\" [sticky]=\"isSticky(stickyColumns, 'name')\">\r\n        <th mat-header-cell *matHeaderCellDef> Name </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n        <td mat-footer-cell *matFooterCellDef> Name Footer </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"weight\" [stickyEnd]=\"isSticky(stickyColumns, 'weight')\">\r\n        <th mat-header-cell *matHeaderCellDef> Weight </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\r\n        <td mat-footer-cell *matFooterCellDef> Weight Footer </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"symbol\" [stickyEnd]=\"isSticky(stickyColumns, 'symbol')\">\r\n        <th mat-header-cell *matHeaderCellDef> Symbol </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\r\n        <td mat-footer-cell *matFooterCellDef> Symbol Footer </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"filler\">\r\n        <th mat-header-cell *matHeaderCellDef> Filler header cell </th>\r\n        <td mat-cell *matCellDef=\"let element\"> Filler data cell </td>\r\n        <td mat-footer-cell *matFooterCellDef> Filler footer cell </td>\r\n      </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: isSticky(stickyHeaders, 'header-1')\"></tr>\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: isSticky(stickyHeaders, 'header-2')\"></tr>\r\n\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\r\n      <tr mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: isSticky(stickyFooters, 'footer-1')\"></tr>\r\n      <tr mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: isSticky(stickyFooters, 'footer-2')\"></tr>\r\n    </table>\r\n  }\r\n</section>\r\n", styles: [".example-container {\r\n  height: 400px;\r\n  overflow: auto;\r\n}\r\n\r\n.mat-mdc-table-sticky {\r\n  background: #59abfd;\r\n  opacity: 1;\r\n}\r\n\r\n.example-sticky-toggle-group {\r\n  margin: 8px;\r\n}\r\n\r\n.mat-column-filler {\r\n  padding: 0 8px;\r\n  font-size: 10px;\r\n  text-align: center;\r\n}\r\n\r\n.mat-mdc-header-cell, .mat-mdc-footer-cell, .mat-mdc-cell {\r\n  min-width: 80px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.mat-mdc-table-sticky-border-elem-top {\r\n  border-bottom: 2px solid midnightblue;\r\n}\r\n\r\n.mat-mdc-table-sticky-border-elem-right {\r\n  border-left: 2px solid midnightblue;\r\n}\r\n\r\n.mat-mdc-table-sticky-border-elem-bottom {\r\n  border-top: 2px solid midnightblue;\r\n}\r\n\r\n.mat-mdc-table-sticky-border-elem-left {\r\n  border-right: 2px solid midnightblue;\r\n}\r\n"] }]
        }], ctorParameters: () => [] });
const ELEMENT_DATA$d = [
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
];

/**
 * @title Table with a sticky footer
 */
class TableStickyFooterExample {
    constructor() {
        this.displayedColumns = ['item', 'cost'];
        this.transactions = [
            { item: 'Beach ball', cost: 4 },
            { item: 'Towel', cost: 5 },
            { item: 'Frisbee', cost: 2 },
            { item: 'Sunscreen', cost: 4 },
            { item: 'Cooler', cost: 25 },
            { item: 'Swim suit', cost: 15 },
        ];
    }
    /** Gets the total cost of all transactions. */
    getTotalCost() {
        return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableStickyFooterExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: TableStickyFooterExample, isStandalone: true, selector: "table-sticky-footer-example", ngImport: i0, template: "<section class=\"example-container mat-elevation-z8\" tabindex=\"0\">\r\n  <table mat-table [dataSource]=\"transactions\">\r\n    <!-- Item Column -->\r\n    <ng-container matColumnDef=\"item\">\r\n      <th mat-header-cell *matHeaderCellDef> Item </th>\r\n      <td mat-cell *matCellDef=\"let transaction\"> {{transaction.item}} </td>\r\n      <td mat-footer-cell *matFooterCellDef> Total </td>\r\n    </ng-container>\r\n\r\n    <!-- Cost Column -->\r\n    <ng-container matColumnDef=\"cost\">\r\n      <th mat-header-cell *matHeaderCellDef> Cost </th>\r\n      <td mat-cell *matCellDef=\"let transaction\"> {{transaction.cost | currency}} </td>\r\n      <td mat-footer-cell *matFooterCellDef> {{getTotalCost() | currency}} </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    <tr mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: true\"></tr>\r\n  </table>\r\n</section>\r\n", styles: [".example-container {\r\n  height: 270px;\r\n  overflow: auto;\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n}\r\n\r\ntr.mat-mdc-footer-row {\r\n  font-weight: bold;\r\n}\r\n\r\n.mat-mdc-table-sticky {\r\n  border-top: 1px solid #e0e0e0;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i1.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i1.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i1.MatFooterCellDef, selector: "[matFooterCellDef]" }, { kind: "directive", type: i1.MatFooterRowDef, selector: "[matFooterRowDef]", inputs: ["matFooterRowDef", "matFooterRowDefSticky"] }, { kind: "directive", type: i1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i1.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "directive", type: i1.MatFooterCell, selector: "mat-footer-cell, td[mat-footer-cell]" }, { kind: "component", type: i1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "component", type: i1.MatFooterRow, selector: "mat-footer-row, tr[mat-footer-row]", exportAs: ["matFooterRow"] }, { kind: "pipe", type: CurrencyPipe, name: "currency" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableStickyFooterExample, decorators: [{
            type: Component,
            args: [{ selector: 'table-sticky-footer-example', standalone: true, imports: [MatTableModule, CurrencyPipe], template: "<section class=\"example-container mat-elevation-z8\" tabindex=\"0\">\r\n  <table mat-table [dataSource]=\"transactions\">\r\n    <!-- Item Column -->\r\n    <ng-container matColumnDef=\"item\">\r\n      <th mat-header-cell *matHeaderCellDef> Item </th>\r\n      <td mat-cell *matCellDef=\"let transaction\"> {{transaction.item}} </td>\r\n      <td mat-footer-cell *matFooterCellDef> Total </td>\r\n    </ng-container>\r\n\r\n    <!-- Cost Column -->\r\n    <ng-container matColumnDef=\"cost\">\r\n      <th mat-header-cell *matHeaderCellDef> Cost </th>\r\n      <td mat-cell *matCellDef=\"let transaction\"> {{transaction.cost | currency}} </td>\r\n      <td mat-footer-cell *matFooterCellDef> {{getTotalCost() | currency}} </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    <tr mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: true\"></tr>\r\n  </table>\r\n</section>\r\n", styles: [".example-container {\r\n  height: 270px;\r\n  overflow: auto;\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n}\r\n\r\ntr.mat-mdc-footer-row {\r\n  font-weight: bold;\r\n}\r\n\r\n.mat-mdc-table-sticky {\r\n  border-top: 1px solid #e0e0e0;\r\n}\r\n"] }]
        }] });

/**
 * @title Table with sticky header
 */
class TableStickyHeaderExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA$c;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableStickyHeaderExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: TableStickyHeaderExample, isStandalone: true, selector: "table-sticky-header-example", ngImport: i0, template: "<section class=\"example-container mat-elevation-z8\" tabindex=\"0\">\r\n  <table mat-table [dataSource]=\"dataSource\">\r\n\r\n    <!-- Position Column -->\r\n    <ng-container matColumnDef=\"position\">\r\n      <th mat-header-cell *matHeaderCellDef> No. </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"name\">\r\n      <th mat-header-cell *matHeaderCellDef> Name </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Weight Column -->\r\n    <ng-container matColumnDef=\"weight\">\r\n      <th mat-header-cell *matHeaderCellDef> Weight </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Symbol Column -->\r\n    <ng-container matColumnDef=\"symbol\">\r\n      <th mat-header-cell *matHeaderCellDef> Symbol </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  </table>\r\n</section>\r\n", styles: [".example-container {\r\n  height: 400px;\r\n  overflow: auto;\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i1.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i1.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i1.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableStickyHeaderExample, decorators: [{
            type: Component,
            args: [{ selector: 'table-sticky-header-example', standalone: true, imports: [MatTableModule], template: "<section class=\"example-container mat-elevation-z8\" tabindex=\"0\">\r\n  <table mat-table [dataSource]=\"dataSource\">\r\n\r\n    <!-- Position Column -->\r\n    <ng-container matColumnDef=\"position\">\r\n      <th mat-header-cell *matHeaderCellDef> No. </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"name\">\r\n      <th mat-header-cell *matHeaderCellDef> Name </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Weight Column -->\r\n    <ng-container matColumnDef=\"weight\">\r\n      <th mat-header-cell *matHeaderCellDef> Weight </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Symbol Column -->\r\n    <ng-container matColumnDef=\"symbol\">\r\n      <th mat-header-cell *matHeaderCellDef> Symbol </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  </table>\r\n</section>\r\n", styles: [".example-container {\r\n  height: 400px;\r\n  overflow: auto;\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n}\r\n"] }]
        }] });
const ELEMENT_DATA$c = [
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
];

const ELEMENT_DATA$b = [
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
];
/**
 * @title Use of 'mat-text-column' with various configurations of the interface.
 */
class TableTextColumnAdvancedExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new MatTableDataSource(ELEMENT_DATA$b);
        this.decimalPipe = new DecimalPipe('en-US');
        /** Data accessor function that transforms the weight value to have at most 2 decimal digits. */
        this.getWeight = (data) => {
            const result = this.decimalPipe.transform(data.weight, '1.0-2');
            return result === null ? '' : result;
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableTextColumnAdvancedExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: TableTextColumnAdvancedExample, isStandalone: true, selector: "table-text-column-advanced-example", ngImport: i0, template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n  <mat-text-column name=\"position\" [headerText]=\"headerText\"></mat-text-column>\r\n\r\n  <!-- Change the header text. -->\r\n  <mat-text-column name=\"name\" headerText=\"Element\"></mat-text-column>\r\n\r\n  <!-- Provide a data accessor for getting the cell text values. -->\r\n  <mat-text-column name=\"weight\" [dataAccessor]=\"getWeight\"></mat-text-column>\r\n\r\n  <!-- Justify the content of the cells to the cell end. -->\r\n  <mat-text-column name=\"symbol\" justify=\"end\"></mat-text-column>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n", styles: ["table {\r\n  width: 100%;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "component", type: i1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "component", type: i1.MatTextColumn, selector: "mat-text-column" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableTextColumnAdvancedExample, decorators: [{
            type: Component,
            args: [{ selector: 'table-text-column-advanced-example', standalone: true, imports: [MatTableModule], template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n  <mat-text-column name=\"position\" [headerText]=\"headerText\"></mat-text-column>\r\n\r\n  <!-- Change the header text. -->\r\n  <mat-text-column name=\"name\" headerText=\"Element\"></mat-text-column>\r\n\r\n  <!-- Provide a data accessor for getting the cell text values. -->\r\n  <mat-text-column name=\"weight\" [dataAccessor]=\"getWeight\"></mat-text-column>\r\n\r\n  <!-- Justify the content of the cells to the cell end. -->\r\n  <mat-text-column name=\"symbol\" justify=\"end\"></mat-text-column>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n", styles: ["table {\r\n  width: 100%;\r\n}\r\n"] }]
        }] });

const ELEMENT_DATA$a = [
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
];
/**
 * @title Use of `mat-text-column` which can be used for simple columns that only need to display
 * a text value for the header and cells.
 */
class TableTextColumnExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA$a;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableTextColumnExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: TableTextColumnExample, isStandalone: true, selector: "table-text-column-example", ngImport: i0, template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n  <mat-text-column name=\"position\"></mat-text-column>\r\n  <mat-text-column name=\"name\"></mat-text-column>\r\n  <mat-text-column name=\"weight\"></mat-text-column>\r\n  <mat-text-column name=\"symbol\"></mat-text-column>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n", styles: ["table {\r\n  width: 100%;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "component", type: i1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "component", type: i1.MatTextColumn, selector: "mat-text-column" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableTextColumnExample, decorators: [{
            type: Component,
            args: [{ selector: 'table-text-column-example', standalone: true, imports: [MatTableModule], template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n  <mat-text-column name=\"position\"></mat-text-column>\r\n  <mat-text-column name=\"name\"></mat-text-column>\r\n  <mat-text-column name=\"weight\"></mat-text-column>\r\n  <mat-text-column name=\"symbol\"></mat-text-column>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n", styles: ["table {\r\n  width: 100%;\r\n}\r\n"] }]
        }] });

const ELEMENT_DATA$9 = [
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
];
/**
 * @title Table example that shows how to wrap a table component for definition and behavior reuse.
 */
class TableWrappedExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new MatTableDataSource(ELEMENT_DATA$9);
    }
    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
    }
    clearTable() {
        this.dataSource.data = [];
    }
    addData() {
        this.dataSource.data = ELEMENT_DATA$9;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableWrappedExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: TableWrappedExample, isStandalone: true, selector: "table-wrapped-example", viewQueries: [{ propertyName: "sort", first: true, predicate: ["sort"], descendants: true }], ngImport: i0, template: "<div>\r\n  <button mat-raised-button (click)=\"clearTable()\">Clear table</button>\r\n  <button mat-raised-button (click)=\"addData()\">Add data</button>\r\n</div>\r\n\r\n<wrapper-table [dataSource]=\"dataSource\" [columns]=\"displayedColumns\"\r\n               matSort #sort=\"matSort\">\r\n  <!-- Custom column definition to be provided to the wrapper table. -->\r\n  <ng-container matColumnDef=\"name\">\r\n    <th mat-header-cell *matHeaderCellDef> Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Custom row definitions to be provided to the wrapper table. -->\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\r\n  <!-- Row shown when there is no matching data that will be provided to the wrapper table. -->\r\n  <tr class=\"mat-row\" *matNoDataRow>\r\n    <td class=\"mat-cell\" colspan=\"4\">No data</td>\r\n  </tr>\r\n</wrapper-table>\r\n", styles: ["table {\r\n  width: 100%;\r\n}\r\n\r\nbutton {\r\n  margin: 0 8px 8px 0;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: i0.forwardRef(() => MatButtonModule) }, { kind: "component", type: i0.forwardRef(() => i1$1.MatButton), selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "component", type: i0.forwardRef(() => WrapperTable), selector: "wrapper-table", inputs: ["columns", "dataSource"] }, { kind: "ngmodule", type: i0.forwardRef(() => MatSortModule) }, { kind: "directive", type: i0.forwardRef(() => i4.MatSort), selector: "[matSort]", inputs: ["matSortActive", "matSortStart", "matSortDirection", "matSortDisableClear", "matSortDisabled"], outputs: ["matSortChange"], exportAs: ["matSort"] }, { kind: "ngmodule", type: i0.forwardRef(() => MatTableModule) }, { kind: "directive", type: i0.forwardRef(() => i1.MatHeaderCellDef), selector: "[matHeaderCellDef]" }, { kind: "directive", type: i0.forwardRef(() => i1.MatHeaderRowDef), selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i0.forwardRef(() => i1.MatColumnDef), selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i0.forwardRef(() => i1.MatCellDef), selector: "[matCellDef]" }, { kind: "directive", type: i0.forwardRef(() => i1.MatRowDef), selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i0.forwardRef(() => i1.MatHeaderCell), selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i0.forwardRef(() => i1.MatCell), selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i0.forwardRef(() => i1.MatHeaderRow), selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i0.forwardRef(() => i1.MatRow), selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "directive", type: i0.forwardRef(() => i1.MatNoDataRow), selector: "ng-template[matNoDataRow]" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableWrappedExample, decorators: [{
            type: Component,
            args: [{ selector: 'table-wrapped-example', standalone: true, imports: [MatButtonModule, forwardRef(() => WrapperTable), MatSortModule, MatTableModule], template: "<div>\r\n  <button mat-raised-button (click)=\"clearTable()\">Clear table</button>\r\n  <button mat-raised-button (click)=\"addData()\">Add data</button>\r\n</div>\r\n\r\n<wrapper-table [dataSource]=\"dataSource\" [columns]=\"displayedColumns\"\r\n               matSort #sort=\"matSort\">\r\n  <!-- Custom column definition to be provided to the wrapper table. -->\r\n  <ng-container matColumnDef=\"name\">\r\n    <th mat-header-cell *matHeaderCellDef> Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Custom row definitions to be provided to the wrapper table. -->\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\r\n  <!-- Row shown when there is no matching data that will be provided to the wrapper table. -->\r\n  <tr class=\"mat-row\" *matNoDataRow>\r\n    <td class=\"mat-cell\" colspan=\"4\">No data</td>\r\n  </tr>\r\n</wrapper-table>\r\n", styles: ["table {\r\n  width: 100%;\r\n}\r\n\r\nbutton {\r\n  margin: 0 8px 8px 0;\r\n}\r\n"] }]
        }], propDecorators: { sort: [{
                type: ViewChild,
                args: ['sort']
            }] } });
/**
 * Table component that accepts column and row definitions in its content to be registered to the
 * table.
 */
class WrapperTable {
    ngAfterContentInit() {
        this.columnDefs.forEach(columnDef => this.table.addColumnDef(columnDef));
        this.rowDefs.forEach(rowDef => this.table.addRowDef(rowDef));
        this.headerRowDefs.forEach(headerRowDef => this.table.addHeaderRowDef(headerRowDef));
        this.table.setNoDataRow(this.noDataRow);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: WrapperTable, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: WrapperTable, isStandalone: true, selector: "wrapper-table", inputs: { columns: "columns", dataSource: "dataSource" }, queries: [{ propertyName: "noDataRow", first: true, predicate: MatNoDataRow, descendants: true }, { propertyName: "headerRowDefs", predicate: MatHeaderRowDef }, { propertyName: "rowDefs", predicate: MatRowDef }, { propertyName: "columnDefs", predicate: MatColumnDef }], viewQueries: [{ propertyName: "table", first: true, predicate: MatTable, descendants: true, static: true }], ngImport: i0, template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n  <ng-content></ng-content>\r\n\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"position\">\r\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> No. </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container matColumnDef=\"weight\">\r\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Weight </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Color Column -->\r\n  <ng-container matColumnDef=\"symbol\">\r\n    <th mat-header-cell *matHeaderCellDef> Symbol </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\r\n  </ng-container>\r\n</table>\r\n", styles: ["\n    table {\n      width: 100%;\n    }\n  "], dependencies: [{ kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i1.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i1.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i1.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "ngmodule", type: MatSortModule }, { kind: "component", type: i4.MatSortHeader, selector: "[mat-sort-header]", inputs: ["mat-sort-header", "arrowPosition", "start", "disabled", "sortActionDescription", "disableClear"], exportAs: ["matSortHeader"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: WrapperTable, decorators: [{
            type: Component,
            args: [{ selector: 'wrapper-table', standalone: true, imports: [MatTableModule, MatSortModule], template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n  <ng-content></ng-content>\r\n\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"position\">\r\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> No. </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container matColumnDef=\"weight\">\r\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Weight </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Color Column -->\r\n  <ng-container matColumnDef=\"symbol\">\r\n    <th mat-header-cell *matHeaderCellDef> Symbol </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\r\n  </ng-container>\r\n</table>\r\n", styles: ["\n    table {\n      width: 100%;\n    }\n  "] }]
        }], propDecorators: { headerRowDefs: [{
                type: ContentChildren,
                args: [MatHeaderRowDef]
            }], rowDefs: [{
                type: ContentChildren,
                args: [MatRowDef]
            }], columnDefs: [{
                type: ContentChildren,
                args: [MatColumnDef]
            }], noDataRow: [{
                type: ContentChild,
                args: [MatNoDataRow]
            }], table: [{
                type: ViewChild,
                args: [MatTable, { static: true }]
            }], columns: [{
                type: Input
            }], dataSource: [{
                type: Input
            }] } });

/**
 * @title Table with re-orderable columns
 */
class TableReorderableExample {
    constructor() {
        this.columns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA$8;
    }
    drop(event) {
        moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableReorderableExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: TableReorderableExample, isStandalone: true, selector: "table-reorderable-example", ngImport: i0, template: "<table mat-table\r\n       [dataSource]=\"dataSource\" \r\n       cdkDropList\r\n       cdkDropListOrientation=\"horizontal\"\r\n       (cdkDropListDropped)=\"drop($event)\">\r\n\r\n  <ng-container matColumnDef=\"position\">\r\n    <th mat-header-cell cdkDrag *matHeaderCellDef> No. </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"name\">\r\n    <th mat-header-cell cdkDrag *matHeaderCellDef> Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"weight\">\r\n    <th mat-header-cell cdkDrag *matHeaderCellDef> Weight </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"symbol\">\r\n    <th mat-header-cell cdkDrag *matHeaderCellDef> Symbol </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"columns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: columns;\"></tr>\r\n</table>\r\n", styles: ["table {\r\n  width: 100%;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i1.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i1.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i1.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "directive", type: CdkDropList, selector: "[cdkDropList], cdk-drop-list", inputs: ["cdkDropListConnectedTo", "cdkDropListData", "cdkDropListOrientation", "id", "cdkDropListLockAxis", "cdkDropListDisabled", "cdkDropListSortingDisabled", "cdkDropListEnterPredicate", "cdkDropListSortPredicate", "cdkDropListAutoScrollDisabled", "cdkDropListAutoScrollStep"], outputs: ["cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited", "cdkDropListSorted"], exportAs: ["cdkDropList"] }, { kind: "directive", type: CdkDrag, selector: "[cdkDrag]", inputs: ["cdkDragData", "cdkDragLockAxis", "cdkDragRootElement", "cdkDragBoundary", "cdkDragStartDelay", "cdkDragFreeDragPosition", "cdkDragDisabled", "cdkDragConstrainPosition", "cdkDragPreviewClass", "cdkDragPreviewContainer"], outputs: ["cdkDragStarted", "cdkDragReleased", "cdkDragEnded", "cdkDragEntered", "cdkDragExited", "cdkDragDropped", "cdkDragMoved"], exportAs: ["cdkDrag"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableReorderableExample, decorators: [{
            type: Component,
            args: [{ selector: 'table-reorderable-example', standalone: true, imports: [MatTableModule, CdkDropList, CdkDrag], template: "<table mat-table\r\n       [dataSource]=\"dataSource\" \r\n       cdkDropList\r\n       cdkDropListOrientation=\"horizontal\"\r\n       (cdkDropListDropped)=\"drop($event)\">\r\n\r\n  <ng-container matColumnDef=\"position\">\r\n    <th mat-header-cell cdkDrag *matHeaderCellDef> No. </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"name\">\r\n    <th mat-header-cell cdkDrag *matHeaderCellDef> Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"weight\">\r\n    <th mat-header-cell cdkDrag *matHeaderCellDef> Weight </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"symbol\">\r\n    <th mat-header-cell cdkDrag *matHeaderCellDef> Symbol </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"columns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: columns;\"></tr>\r\n</table>\r\n", styles: ["table {\r\n  width: 100%;\r\n}\r\n"] }]
        }] });
const ELEMENT_DATA$8 = [
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
];

const ELEMENT_DATA$7 = [
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
];
/**
 * @title Table that uses the recycle view repeater strategy.
 */
class TableRecycleRowsExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA$7;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableRecycleRowsExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: TableRecycleRowsExample, isStandalone: true, selector: "table-recycle-rows-example", ngImport: i0, template: "<table class=\"example-table mat-elevation-z8\" mat-table recycleRows [dataSource]=\"dataSource\">\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"position\">\r\n    <th mat-header-cell *matHeaderCellDef> No. </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"name\">\r\n    <th mat-header-cell *matHeaderCellDef> Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container matColumnDef=\"weight\">\r\n    <th mat-header-cell *matHeaderCellDef> Weight </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container matColumnDef=\"symbol\">\r\n    <th mat-header-cell *matHeaderCellDef> Symbol </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n\r\n", styles: [".example-table {\r\n  width: 100%;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i1.MatRecycleRows, selector: "mat-table[recycleRows], table[mat-table][recycleRows]" }, { kind: "directive", type: i1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i1.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i1.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i1.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableRecycleRowsExample, decorators: [{
            type: Component,
            args: [{ selector: 'table-recycle-rows-example', standalone: true, imports: [MatTableModule], template: "<table class=\"example-table mat-elevation-z8\" mat-table recycleRows [dataSource]=\"dataSource\">\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"position\">\r\n    <th mat-header-cell *matHeaderCellDef> No. </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"name\">\r\n    <th mat-header-cell *matHeaderCellDef> Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container matColumnDef=\"weight\">\r\n    <th mat-header-cell *matHeaderCellDef> Weight </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container matColumnDef=\"symbol\">\r\n    <th mat-header-cell *matHeaderCellDef> Symbol </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n\r\n", styles: [".example-table {\r\n  width: 100%;\r\n}\r\n"] }]
        }] });

/**
 * @title Testing with MatTableHarness
 */
class TableHarnessExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = [
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
        ];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: TableHarnessExample, isStandalone: true, selector: "table-harness-example", ngImport: i0, template: "<table mat-table [dataSource]=\"dataSource\">\r\n  <ng-container matColumnDef=\"position\">\r\n    <th mat-header-cell *matHeaderCellDef>No.</th>\r\n    <td mat-cell *matCellDef=\"let element\">{{element.position}}</td>\r\n    <td mat-footer-cell *matFooterCellDef>Number of the element</td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"name\">\r\n    <th mat-header-cell *matHeaderCellDef>Name</th>\r\n    <td mat-cell *matCellDef=\"let element\">{{element.name}}</td>\r\n    <td mat-footer-cell *matFooterCellDef>Name of the element</td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"weight\">\r\n    <th mat-header-cell *matHeaderCellDef>Weight</th>\r\n    <td mat-cell *matCellDef=\"let element\">{{element.weight}}</td>\r\n    <td mat-footer-cell *matFooterCellDef>Weight of the element</td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"symbol\">\r\n    <th mat-header-cell *matHeaderCellDef>Symbol</th>\r\n    <td mat-cell *matCellDef=\"let element\">{{element.symbol}}</td>\r\n    <td mat-footer-cell *matFooterCellDef>Symbol of the element</td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-footer-row *matFooterRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n", dependencies: [{ kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i1.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i1.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i1.MatFooterCellDef, selector: "[matFooterCellDef]" }, { kind: "directive", type: i1.MatFooterRowDef, selector: "[matFooterRowDef]", inputs: ["matFooterRowDef", "matFooterRowDefSticky"] }, { kind: "directive", type: i1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i1.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "directive", type: i1.MatFooterCell, selector: "mat-footer-cell, td[mat-footer-cell]" }, { kind: "component", type: i1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "component", type: i1.MatFooterRow, selector: "mat-footer-row, tr[mat-footer-row]", exportAs: ["matFooterRow"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'table-harness-example', standalone: true, imports: [MatTableModule], template: "<table mat-table [dataSource]=\"dataSource\">\r\n  <ng-container matColumnDef=\"position\">\r\n    <th mat-header-cell *matHeaderCellDef>No.</th>\r\n    <td mat-cell *matCellDef=\"let element\">{{element.position}}</td>\r\n    <td mat-footer-cell *matFooterCellDef>Number of the element</td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"name\">\r\n    <th mat-header-cell *matHeaderCellDef>Name</th>\r\n    <td mat-cell *matCellDef=\"let element\">{{element.name}}</td>\r\n    <td mat-footer-cell *matFooterCellDef>Name of the element</td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"weight\">\r\n    <th mat-header-cell *matHeaderCellDef>Weight</th>\r\n    <td mat-cell *matCellDef=\"let element\">{{element.weight}}</td>\r\n    <td mat-footer-cell *matFooterCellDef>Weight of the element</td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"symbol\">\r\n    <th mat-header-cell *matHeaderCellDef>Symbol</th>\r\n    <td mat-cell *matCellDef=\"let element\">{{element.symbol}}</td>\r\n    <td mat-footer-cell *matFooterCellDef>Symbol of the element</td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-footer-row *matFooterRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n" }]
        }] });

const ELEMENT_DATA$6 = [
    { name: 'Hydrogen' },
    { name: 'Helium' },
    { name: 'Lithium' },
    { name: 'Beryllium' },
    { name: 'Boron' },
    { name: 'Carbon' },
    { name: 'Nitrogen' },
    { name: 'Oxygen' },
    { name: 'Fluorine' },
    { name: 'Neon' },
];
/**
 * @title Tables with Material Design ripples.
 */
class TableWithRipplesExample {
    constructor() {
        this.displayedColumns = ['name'];
        this.dataSource = ELEMENT_DATA$6;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableWithRipplesExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: TableWithRipplesExample, isStandalone: true, selector: "table-with-ripples-example", ngImport: i0, template: "<mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n  <ng-container matColumnDef=\"name\">\r\n    <mat-header-cell mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\r\n    <mat-cell mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\r\n  </ng-container>\r\n\r\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n  <mat-row matRipple *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n</mat-table>\r\n", dependencies: [{ kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i1.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i1.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i1.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "ngmodule", type: MatRippleModule }, { kind: "directive", type: i2$4.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleRadius", "matRippleAnimation", "matRippleDisabled", "matRippleTrigger"], exportAs: ["matRipple"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableWithRipplesExample, decorators: [{
            type: Component,
            args: [{ selector: 'table-with-ripples-example', standalone: true, imports: [MatTableModule, MatRippleModule], template: "<mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n  <ng-container matColumnDef=\"name\">\r\n    <mat-header-cell mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\r\n    <mat-cell mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\r\n  </ng-container>\r\n\r\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n  <mat-row matRipple *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n</mat-table>\r\n" }]
        }] });

const ELEMENT_DATA$5 = [
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
];
/**
 * @title Styling columns using their auto-generated column names
 */
class TableColumnStylingExample {
    constructor() {
        this.displayedColumns = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol'];
        this.dataSource = ELEMENT_DATA$5;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableColumnStylingExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: TableColumnStylingExample, isStandalone: true, selector: "table-column-styling-example", ngImport: i0, template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 demo-table\">\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"demo-position\">\r\n    <th mat-header-cell *matHeaderCellDef> No. </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"demo-name\">\r\n    <th mat-header-cell *matHeaderCellDef> Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container matColumnDef=\"demo-weight\">\r\n    <th mat-header-cell *matHeaderCellDef> Weight </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container matColumnDef=\"demo-symbol\">\r\n    <th mat-header-cell *matHeaderCellDef> Symbol </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n\r\n", styles: [".demo-table {\r\n  width: 100%;\r\n}\r\n\r\n.mat-column-demo-position {\r\n  width: 32px;\r\n  border-right: 1px solid currentColor;\r\n  padding-right: 24px;\r\n  text-align: center;\r\n}\r\n\r\n.mat-column-demo-name {\r\n  padding-left: 16px;\r\n  font-size: 20px;\r\n}\r\n\r\n.mat-column-demo-weight {\r\n  font-style: italic;\r\n}\r\n\r\n.mat-column-demo-symbol {\r\n  width: 32px;\r\n  text-align: center;\r\n  font-weight: bold;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i1.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i1.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i1.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableColumnStylingExample, decorators: [{
            type: Component,
            args: [{ selector: 'table-column-styling-example', standalone: true, imports: [MatTableModule], template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 demo-table\">\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"demo-position\">\r\n    <th mat-header-cell *matHeaderCellDef> No. </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"demo-name\">\r\n    <th mat-header-cell *matHeaderCellDef> Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container matColumnDef=\"demo-weight\">\r\n    <th mat-header-cell *matHeaderCellDef> Weight </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container matColumnDef=\"demo-symbol\">\r\n    <th mat-header-cell *matHeaderCellDef> Symbol </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n\r\n", styles: [".demo-table {\r\n  width: 100%;\r\n}\r\n\r\n.mat-column-demo-position {\r\n  width: 32px;\r\n  border-right: 1px solid currentColor;\r\n  padding-right: 24px;\r\n  text-align: center;\r\n}\r\n\r\n.mat-column-demo-name {\r\n  padding-left: 16px;\r\n  font-size: 20px;\r\n}\r\n\r\n.mat-column-demo-weight {\r\n  font-style: italic;\r\n}\r\n\r\n.mat-column-demo-symbol {\r\n  width: 32px;\r\n  text-align: center;\r\n  font-weight: bold;\r\n}\r\n"] }]
        }] });

const ELEMENT_DATA$4 = [
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
];
/**
 * @title Binding event handlers and properties to the table rows.
 */
class TableRowBindingExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA$4;
        this.clickedRows = new Set();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableRowBindingExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: TableRowBindingExample, isStandalone: true, selector: "table-row-binding-example", ngImport: i0, template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 demo-table\">\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"position\">\r\n    <th mat-header-cell *matHeaderCellDef>No.</th>\r\n    <td mat-cell *matCellDef=\"let element\">{{element.position}}</td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"name\">\r\n    <th mat-header-cell *matHeaderCellDef>Name</th>\r\n    <td mat-cell *matCellDef=\"let element\">{{element.name}}</td>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container matColumnDef=\"weight\">\r\n    <th mat-header-cell *matHeaderCellDef>Weight</th>\r\n    <td mat-cell *matCellDef=\"let element\">{{element.weight}}</td>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container matColumnDef=\"symbol\">\r\n    <th mat-header-cell *matHeaderCellDef>Symbol</th>\r\n    <td mat-cell *matCellDef=\"let element\">{{element.symbol}}</td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr\r\n      mat-row\r\n      (click)=\"clickedRows.add(row)\"\r\n      [class.demo-row-is-clicked]=\"clickedRows.has(row)\"\r\n      *matRowDef=\"let row; columns: displayedColumns;\"\r\n  ></tr>\r\n</table>\r\n\r\n<div>\r\n  <h3>\r\n    Click Log\r\n  </h3>\r\n</div>\r\n\r\n@if (!clickedRows.size) {\r\n  <div>Clicked rows will be logged here</div>\r\n}\r\n\r\n<ul>\r\n  @for (clickedRow of clickedRows; track clickedRow) {\r\n    <li>Clicked on {{clickedRow.name}}</li>\r\n  }\r\n</ul>\r\n", styles: [".demo-table {\r\n  width: 100%;\r\n}\r\n\r\n.mat-mdc-row .mat-mdc-cell {\r\n  border-bottom: 1px solid transparent;\r\n  border-top: 1px solid transparent;\r\n  cursor: pointer;\r\n}\r\n\r\n.mat-mdc-row:hover .mat-mdc-cell {\r\n  border-color: currentColor;\r\n}\r\n\r\n.demo-row-is-clicked {\r\n  font-weight: bold;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i1.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i1.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i1.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableRowBindingExample, decorators: [{
            type: Component,
            args: [{ selector: 'table-row-binding-example', standalone: true, imports: [MatTableModule], template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 demo-table\">\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"position\">\r\n    <th mat-header-cell *matHeaderCellDef>No.</th>\r\n    <td mat-cell *matCellDef=\"let element\">{{element.position}}</td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"name\">\r\n    <th mat-header-cell *matHeaderCellDef>Name</th>\r\n    <td mat-cell *matCellDef=\"let element\">{{element.name}}</td>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container matColumnDef=\"weight\">\r\n    <th mat-header-cell *matHeaderCellDef>Weight</th>\r\n    <td mat-cell *matCellDef=\"let element\">{{element.weight}}</td>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container matColumnDef=\"symbol\">\r\n    <th mat-header-cell *matHeaderCellDef>Symbol</th>\r\n    <td mat-cell *matCellDef=\"let element\">{{element.symbol}}</td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr\r\n      mat-row\r\n      (click)=\"clickedRows.add(row)\"\r\n      [class.demo-row-is-clicked]=\"clickedRows.has(row)\"\r\n      *matRowDef=\"let row; columns: displayedColumns;\"\r\n  ></tr>\r\n</table>\r\n\r\n<div>\r\n  <h3>\r\n    Click Log\r\n  </h3>\r\n</div>\r\n\r\n@if (!clickedRows.size) {\r\n  <div>Clicked rows will be logged here</div>\r\n}\r\n\r\n<ul>\r\n  @for (clickedRow of clickedRows; track clickedRow) {\r\n    <li>Clicked on {{clickedRow.name}}</li>\r\n  }\r\n</ul>\r\n", styles: [".demo-table {\r\n  width: 100%;\r\n}\r\n\r\n.mat-mdc-row .mat-mdc-cell {\r\n  border-bottom: 1px solid transparent;\r\n  border-top: 1px solid transparent;\r\n  cursor: pointer;\r\n}\r\n\r\n.mat-mdc-row:hover .mat-mdc-cell {\r\n  border-color: currentColor;\r\n}\r\n\r\n.demo-row-is-clicked {\r\n  font-weight: bold;\r\n}\r\n"] }]
        }] });

const ELEMENT_DATA$3 = [
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
];
/**
 * @title Adding and removing data when using an array-based datasource.
 */
class TableDynamicArrayDataExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = [...ELEMENT_DATA$3];
    }
    addData() {
        const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA$3.length);
        this.dataSource.push(ELEMENT_DATA$3[randomElementIndex]);
        this.table.renderRows();
    }
    removeData() {
        this.dataSource.pop();
        this.table.renderRows();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableDynamicArrayDataExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: TableDynamicArrayDataExample, isStandalone: true, selector: "table-dynamic-array-data-example", viewQueries: [{ propertyName: "table", first: true, predicate: MatTable, descendants: true }], ngImport: i0, template: "<div class=\"demo-button-container\">\r\n  <button mat-raised-button (click)=\"addData()\" class=\"demo-button\">\r\n    Add data\r\n  </button>\r\n  <button\r\n      mat-raised-button\r\n      [disabled]=\"!dataSource.length\"\r\n      (click)=\"removeData()\"\r\n      class=\"demo-button\">\r\n    Remove data\r\n  </button>\r\n</div>\r\n\r\n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 demo-table\">\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"position\">\r\n    <th mat-header-cell *matHeaderCellDef>No.</th>\r\n    <td mat-cell *matCellDef=\"let element\">{{element.position}}</td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"name\">\r\n    <th mat-header-cell *matHeaderCellDef>Name</th>\r\n    <td mat-cell *matCellDef=\"let element\">{{element.name}}</td>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container matColumnDef=\"weight\">\r\n    <th mat-header-cell *matHeaderCellDef>Weight</th>\r\n    <td mat-cell *matCellDef=\"let element\">{{element.weight}}</td>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container matColumnDef=\"symbol\">\r\n    <th mat-header-cell *matHeaderCellDef>Symbol</th>\r\n    <td mat-cell *matCellDef=\"let element\">{{element.symbol}}</td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n", styles: [".demo-table {\r\n  width: 100%;\r\n}\r\n\r\n.demo-button-container {\r\n  padding-bottom: 16px;\r\n}\r\n\r\n.demo-button + .demo-button {\r\n  margin-left: 8px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1$1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i1.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i1.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i1.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableDynamicArrayDataExample, decorators: [{
            type: Component,
            args: [{ selector: 'table-dynamic-array-data-example', standalone: true, imports: [MatButtonModule, MatTableModule], template: "<div class=\"demo-button-container\">\r\n  <button mat-raised-button (click)=\"addData()\" class=\"demo-button\">\r\n    Add data\r\n  </button>\r\n  <button\r\n      mat-raised-button\r\n      [disabled]=\"!dataSource.length\"\r\n      (click)=\"removeData()\"\r\n      class=\"demo-button\">\r\n    Remove data\r\n  </button>\r\n</div>\r\n\r\n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 demo-table\">\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"position\">\r\n    <th mat-header-cell *matHeaderCellDef>No.</th>\r\n    <td mat-cell *matCellDef=\"let element\">{{element.position}}</td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"name\">\r\n    <th mat-header-cell *matHeaderCellDef>Name</th>\r\n    <td mat-cell *matCellDef=\"let element\">{{element.name}}</td>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container matColumnDef=\"weight\">\r\n    <th mat-header-cell *matHeaderCellDef>Weight</th>\r\n    <td mat-cell *matCellDef=\"let element\">{{element.weight}}</td>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container matColumnDef=\"symbol\">\r\n    <th mat-header-cell *matHeaderCellDef>Symbol</th>\r\n    <td mat-cell *matCellDef=\"let element\">{{element.symbol}}</td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n", styles: [".demo-table {\r\n  width: 100%;\r\n}\r\n\r\n.demo-button-container {\r\n  padding-bottom: 16px;\r\n}\r\n\r\n.demo-button + .demo-button {\r\n  margin-left: 8px;\r\n}\r\n"] }]
        }], propDecorators: { table: [{
                type: ViewChild,
                args: [MatTable]
            }] } });

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
];
/**
 * @title Adding and removing data when using an observable-based datasource.
 */
class TableDynamicObservableDataExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataToDisplay = [...ELEMENT_DATA$2];
        this.dataSource = new ExampleDataSource(this.dataToDisplay);
    }
    addData() {
        const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA$2.length);
        this.dataToDisplay = [...this.dataToDisplay, ELEMENT_DATA$2[randomElementIndex]];
        this.dataSource.setData(this.dataToDisplay);
    }
    removeData() {
        this.dataToDisplay = this.dataToDisplay.slice(0, -1);
        this.dataSource.setData(this.dataToDisplay);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableDynamicObservableDataExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: TableDynamicObservableDataExample, isStandalone: true, selector: "table-dynamic-observable-data-example", ngImport: i0, template: "<div class=\"demo-button-container\">\r\n  <button mat-raised-button (click)=\"addData()\" class=\"demo-button\">\r\n    Add data\r\n  </button>\r\n  <button\r\n      mat-raised-button\r\n      [disabled]=\"!dataToDisplay.length\"\r\n      (click)=\"removeData()\"\r\n      class=\"demo-button\">\r\n    Remove data\r\n  </button>\r\n</div>\r\n\r\n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 demo-table\">\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"position\">\r\n    <th mat-header-cell *matHeaderCellDef>No.</th>\r\n    <td mat-cell *matCellDef=\"let element\">{{element.position}}</td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"name\">\r\n    <th mat-header-cell *matHeaderCellDef>Name</th>\r\n    <td mat-cell *matCellDef=\"let element\">{{element.name}}</td>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container matColumnDef=\"weight\">\r\n    <th mat-header-cell *matHeaderCellDef>Weight</th>\r\n    <td mat-cell *matCellDef=\"let element\">{{element.weight}}</td>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container matColumnDef=\"symbol\">\r\n    <th mat-header-cell *matHeaderCellDef>Symbol</th>\r\n    <td mat-cell *matCellDef=\"let element\">{{element.symbol}}</td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n", styles: [".demo-table {\r\n  width: 100%;\r\n}\r\n\r\n.demo-button-container {\r\n  padding-bottom: 16px;\r\n}\r\n\r\n.demo-button + .demo-button {\r\n  margin-left: 8px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1$1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i1.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i1.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i1.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableDynamicObservableDataExample, decorators: [{
            type: Component,
            args: [{ selector: 'table-dynamic-observable-data-example', standalone: true, imports: [MatButtonModule, MatTableModule], template: "<div class=\"demo-button-container\">\r\n  <button mat-raised-button (click)=\"addData()\" class=\"demo-button\">\r\n    Add data\r\n  </button>\r\n  <button\r\n      mat-raised-button\r\n      [disabled]=\"!dataToDisplay.length\"\r\n      (click)=\"removeData()\"\r\n      class=\"demo-button\">\r\n    Remove data\r\n  </button>\r\n</div>\r\n\r\n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 demo-table\">\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"position\">\r\n    <th mat-header-cell *matHeaderCellDef>No.</th>\r\n    <td mat-cell *matCellDef=\"let element\">{{element.position}}</td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"name\">\r\n    <th mat-header-cell *matHeaderCellDef>Name</th>\r\n    <td mat-cell *matCellDef=\"let element\">{{element.name}}</td>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container matColumnDef=\"weight\">\r\n    <th mat-header-cell *matHeaderCellDef>Weight</th>\r\n    <td mat-cell *matCellDef=\"let element\">{{element.weight}}</td>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container matColumnDef=\"symbol\">\r\n    <th mat-header-cell *matHeaderCellDef>Symbol</th>\r\n    <td mat-cell *matCellDef=\"let element\">{{element.symbol}}</td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n", styles: [".demo-table {\r\n  width: 100%;\r\n}\r\n\r\n.demo-button-container {\r\n  padding-bottom: 16px;\r\n}\r\n\r\n.demo-button + .demo-button {\r\n  margin-left: 8px;\r\n}\r\n"] }]
        }] });
class ExampleDataSource extends DataSource {
    constructor(initialData) {
        super();
        this._dataStream = new ReplaySubject();
        this.setData(initialData);
    }
    connect() {
        return this._dataStream;
    }
    disconnect() { }
    setData(data) {
        this._dataStream.next(data);
    }
}

const ELEMENT_DATA$1 = [
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
];
/**
 * @title Table with columns defined using a for loop instead of statically written in the template.
 */
class TableGeneratedColumnsExample {
    constructor() {
        this.columns = [
            {
                columnDef: 'position',
                header: 'No.',
                cell: (element) => `${element.position}`,
            },
            {
                columnDef: 'name',
                header: 'Name',
                cell: (element) => `${element.name}`,
            },
            {
                columnDef: 'weight',
                header: 'Weight',
                cell: (element) => `${element.weight}`,
            },
            {
                columnDef: 'symbol',
                header: 'Symbol',
                cell: (element) => `${element.symbol}`,
            },
        ];
        this.dataSource = ELEMENT_DATA$1;
        this.displayedColumns = this.columns.map(c => c.columnDef);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableGeneratedColumnsExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: TableGeneratedColumnsExample, isStandalone: true, selector: "table-generated-columns-example", ngImport: i0, template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 demo-table\">\r\n  @for (column of columns; track column) {\r\n    <ng-container [matColumnDef]=\"column.columnDef\">\r\n      <th mat-header-cell *matHeaderCellDef>\r\n        {{column.header}}\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let row\">\r\n        {{column.cell(row)}}\r\n      </td>\r\n    </ng-container>\r\n  }\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n", styles: [".demo-table {\r\n  width: 100%;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i1.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i1.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i1.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableGeneratedColumnsExample, decorators: [{
            type: Component,
            args: [{ selector: 'table-generated-columns-example', standalone: true, imports: [MatTableModule], template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 demo-table\">\r\n  @for (column of columns; track column) {\r\n    <ng-container [matColumnDef]=\"column.columnDef\">\r\n      <th mat-header-cell *matHeaderCellDef>\r\n        {{column.header}}\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let row\">\r\n        {{column.cell(row)}}\r\n      </td>\r\n    </ng-container>\r\n  }\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n", styles: [".demo-table {\r\n  width: 100%;\r\n}\r\n"] }]
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
];
/**
 * @title Flex table where one column's cells has a greater height than others.
 */
class TableFlexLargeRowExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableFlexLargeRowExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: TableFlexLargeRowExample, isStandalone: true, selector: "table-flex-large-row-example", ngImport: i0, template: "<mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"position\">\r\n    <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"name\">\r\n    <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container matColumnDef=\"weight\">\r\n    <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container matColumnDef=\"symbol\">\r\n    <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\r\n  </ng-container>\r\n\r\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n</mat-table>", styles: [".mat-mdc-table {\r\n  width: 100%;\r\n  max-height: 500px;\r\n  overflow: auto;\r\n}\r\n\r\n.mat-column-name {\r\n  height: 100px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i1.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i1.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i1.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableFlexLargeRowExample, decorators: [{
            type: Component,
            args: [{ selector: 'table-flex-large-row-example', standalone: true, imports: [MatTableModule], template: "<mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"position\">\r\n    <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"name\">\r\n    <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container matColumnDef=\"weight\">\r\n    <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container matColumnDef=\"symbol\">\r\n    <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\r\n  </ng-container>\r\n\r\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n</mat-table>", styles: [".mat-mdc-table {\r\n  width: 100%;\r\n  max-height: 500px;\r\n  overflow: auto;\r\n}\r\n\r\n.mat-column-name {\r\n  height: 100px;\r\n}\r\n"] }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { TableBasicExample, TableColumnStylingExample, TableDynamicArrayDataExample, TableDynamicColumnsExample, TableDynamicObservableDataExample, TableExpandableRowsExample, TableFilteringExample, TableFlexBasicExample, TableFlexLargeRowExample, TableFooterRowExample, TableGeneratedColumnsExample, TableHarnessExample, TableHttpExample, TableMultipleHeaderFooterExample, TableOverviewExample, TablePaginationExample, TableRecycleRowsExample, TableReorderableExample, TableRowBindingExample, TableRowContextExample, TableSelectionExample, TableSortingExample, TableStickyColumnsExample, TableStickyComplexExample, TableStickyComplexFlexExample, TableStickyFooterExample, TableStickyHeaderExample, TableTextColumnAdvancedExample, TableTextColumnExample, TableWithRipplesExample, TableWrappedExample, WrapperTable };
//# sourceMappingURL=table.mjs.map
