import { DataSource } from '@angular/cdk/collections';
import * as i0 from '@angular/core';
import { Component } from '@angular/core';
import * as i1 from '@angular/cdk/table';
import { CdkTableModule } from '@angular/cdk/table';
import { BehaviorSubject } from 'rxjs';

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
 * @title Basic use of `<cdk-table>` (uses display flex)
 */
class CdkTableFlexBasicExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new ExampleDataSource$3();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkTableFlexBasicExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: CdkTableFlexBasicExample, isStandalone: true, selector: "cdk-table-flex-basic-example", ngImport: i0, template: "<cdk-table [dataSource]=\"dataSource\">\r\n  <!-- Position Column -->\r\n  <ng-container cdkColumnDef=\"position\">\r\n    <cdk-header-cell *cdkHeaderCellDef> No. </cdk-header-cell>\r\n    <cdk-cell *cdkCellDef=\"let element\"> {{element.position}} </cdk-cell>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container cdkColumnDef=\"name\">\r\n    <cdk-header-cell *cdkHeaderCellDef> Name </cdk-header-cell>\r\n    <cdk-cell *cdkCellDef=\"let element\"> {{element.name}} </cdk-cell>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container cdkColumnDef=\"weight\">\r\n    <cdk-header-cell *cdkHeaderCellDef> Weight </cdk-header-cell>\r\n    <cdk-cell *cdkCellDef=\"let element\"> {{element.weight}} </cdk-cell>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container cdkColumnDef=\"symbol\">\r\n    <cdk-header-cell *cdkHeaderCellDef> Symbol </cdk-header-cell>\r\n    <cdk-cell *cdkCellDef=\"let element\"> {{element.symbol}} </cdk-cell>\r\n  </ng-container>\r\n\r\n  <cdk-header-row *cdkHeaderRowDef=\"displayedColumns\"></cdk-header-row>\r\n  <cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\"></cdk-row>\r\n</cdk-table>\r\n", styles: ["/**\r\n * Add basic flex styling so that the cells evenly space themselves in the row.\r\n */\r\ncdk-row, cdk-header-row, cdk-footer-row {\r\n  display: flex;\r\n}\r\n\r\ncdk-cell, cdk-header-cell, cdk-footer-cell {\r\n  flex: 1;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: CdkTableModule }, { kind: "component", type: i1.CdkTable, selector: "cdk-table, table[cdk-table]", inputs: ["trackBy", "dataSource", "multiTemplateDataRows", "fixedLayout"], outputs: ["contentChanged"], exportAs: ["cdkTable"] }, { kind: "directive", type: i1.CdkRowDef, selector: "[cdkRowDef]", inputs: ["cdkRowDefColumns", "cdkRowDefWhen"] }, { kind: "directive", type: i1.CdkCellDef, selector: "[cdkCellDef]" }, { kind: "directive", type: i1.CdkHeaderCellDef, selector: "[cdkHeaderCellDef]" }, { kind: "directive", type: i1.CdkColumnDef, selector: "[cdkColumnDef]", inputs: ["sticky", "cdkColumnDef", "stickyEnd"] }, { kind: "directive", type: i1.CdkCell, selector: "cdk-cell, td[cdk-cell]" }, { kind: "component", type: i1.CdkRow, selector: "cdk-row, tr[cdk-row]" }, { kind: "directive", type: i1.CdkHeaderCell, selector: "cdk-header-cell, th[cdk-header-cell]" }, { kind: "component", type: i1.CdkHeaderRow, selector: "cdk-header-row, tr[cdk-header-row]" }, { kind: "directive", type: i1.CdkHeaderRowDef, selector: "[cdkHeaderRowDef]", inputs: ["cdkHeaderRowDef", "cdkHeaderRowDefSticky"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkTableFlexBasicExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-table-flex-basic-example', standalone: true, imports: [CdkTableModule], template: "<cdk-table [dataSource]=\"dataSource\">\r\n  <!-- Position Column -->\r\n  <ng-container cdkColumnDef=\"position\">\r\n    <cdk-header-cell *cdkHeaderCellDef> No. </cdk-header-cell>\r\n    <cdk-cell *cdkCellDef=\"let element\"> {{element.position}} </cdk-cell>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container cdkColumnDef=\"name\">\r\n    <cdk-header-cell *cdkHeaderCellDef> Name </cdk-header-cell>\r\n    <cdk-cell *cdkCellDef=\"let element\"> {{element.name}} </cdk-cell>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container cdkColumnDef=\"weight\">\r\n    <cdk-header-cell *cdkHeaderCellDef> Weight </cdk-header-cell>\r\n    <cdk-cell *cdkCellDef=\"let element\"> {{element.weight}} </cdk-cell>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container cdkColumnDef=\"symbol\">\r\n    <cdk-header-cell *cdkHeaderCellDef> Symbol </cdk-header-cell>\r\n    <cdk-cell *cdkCellDef=\"let element\"> {{element.symbol}} </cdk-cell>\r\n  </ng-container>\r\n\r\n  <cdk-header-row *cdkHeaderRowDef=\"displayedColumns\"></cdk-header-row>\r\n  <cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\"></cdk-row>\r\n</cdk-table>\r\n", styles: ["/**\r\n * Add basic flex styling so that the cells evenly space themselves in the row.\r\n */\r\ncdk-row, cdk-header-row, cdk-footer-row {\r\n  display: flex;\r\n}\r\n\r\ncdk-cell, cdk-header-cell, cdk-footer-cell {\r\n  flex: 1;\r\n}\r\n"] }]
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
        this.data = new BehaviorSubject(ELEMENT_DATA$3);
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
];
/**
 * @title Basic CDK data-table
 */
class CdkTableBasicExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new ExampleDataSource$2();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkTableBasicExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: CdkTableBasicExample, isStandalone: true, selector: "cdk-table-basic-example", ngImport: i0, template: "<table cdk-table [dataSource]=\"dataSource\">\r\n  <!-- Position Column -->\r\n  <ng-container cdkColumnDef=\"position\">\r\n    <th cdk-header-cell *cdkHeaderCellDef> No. </th>\r\n    <td cdk-cell *cdkCellDef=\"let element\"> {{element.position}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container cdkColumnDef=\"name\">\r\n    <th cdk-header-cell *cdkHeaderCellDef> Name </th>\r\n    <td cdk-cell *cdkCellDef=\"let element\"> {{element.name}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container cdkColumnDef=\"weight\">\r\n    <th cdk-header-cell *cdkHeaderCellDef> Weight </th>\r\n    <td cdk-cell *cdkCellDef=\"let element\"> {{element.weight}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container cdkColumnDef=\"symbol\">\r\n    <th cdk-header-cell *cdkHeaderCellDef> Symbol </th>\r\n    <td cdk-cell *cdkCellDef=\"let element\"> {{element.symbol}} </td>\r\n  </ng-container>\r\n\r\n  <tr cdk-header-row *cdkHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n", styles: ["table {\r\n  width: 100%;\r\n}\r\n\r\nth {\r\n  text-align: left;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: CdkTableModule }, { kind: "component", type: i1.CdkTable, selector: "cdk-table, table[cdk-table]", inputs: ["trackBy", "dataSource", "multiTemplateDataRows", "fixedLayout"], outputs: ["contentChanged"], exportAs: ["cdkTable"] }, { kind: "directive", type: i1.CdkRowDef, selector: "[cdkRowDef]", inputs: ["cdkRowDefColumns", "cdkRowDefWhen"] }, { kind: "directive", type: i1.CdkCellDef, selector: "[cdkCellDef]" }, { kind: "directive", type: i1.CdkHeaderCellDef, selector: "[cdkHeaderCellDef]" }, { kind: "directive", type: i1.CdkColumnDef, selector: "[cdkColumnDef]", inputs: ["sticky", "cdkColumnDef", "stickyEnd"] }, { kind: "directive", type: i1.CdkCell, selector: "cdk-cell, td[cdk-cell]" }, { kind: "component", type: i1.CdkRow, selector: "cdk-row, tr[cdk-row]" }, { kind: "directive", type: i1.CdkHeaderCell, selector: "cdk-header-cell, th[cdk-header-cell]" }, { kind: "component", type: i1.CdkHeaderRow, selector: "cdk-header-row, tr[cdk-header-row]" }, { kind: "directive", type: i1.CdkHeaderRowDef, selector: "[cdkHeaderRowDef]", inputs: ["cdkHeaderRowDef", "cdkHeaderRowDefSticky"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkTableBasicExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-table-basic-example', standalone: true, imports: [CdkTableModule], template: "<table cdk-table [dataSource]=\"dataSource\">\r\n  <!-- Position Column -->\r\n  <ng-container cdkColumnDef=\"position\">\r\n    <th cdk-header-cell *cdkHeaderCellDef> No. </th>\r\n    <td cdk-cell *cdkCellDef=\"let element\"> {{element.position}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container cdkColumnDef=\"name\">\r\n    <th cdk-header-cell *cdkHeaderCellDef> Name </th>\r\n    <td cdk-cell *cdkCellDef=\"let element\"> {{element.name}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container cdkColumnDef=\"weight\">\r\n    <th cdk-header-cell *cdkHeaderCellDef> Weight </th>\r\n    <td cdk-cell *cdkCellDef=\"let element\"> {{element.weight}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container cdkColumnDef=\"symbol\">\r\n    <th cdk-header-cell *cdkHeaderCellDef> Symbol </th>\r\n    <td cdk-cell *cdkCellDef=\"let element\"> {{element.symbol}} </td>\r\n  </ng-container>\r\n\r\n  <tr cdk-header-row *cdkHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n", styles: ["table {\r\n  width: 100%;\r\n}\r\n\r\nth {\r\n  text-align: left;\r\n}\r\n"] }]
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
 * @title CDK table with a fixed layout.
 */
class CdkTableFixedLayoutExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new ExampleDataSource$1();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkTableFixedLayoutExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: CdkTableFixedLayoutExample, isStandalone: true, selector: "cdk-table-fixed-layout-example", ngImport: i0, template: "<table cdk-table [dataSource]=\"dataSource\" fixedLayout>\r\n  <!-- Position Column -->\r\n  <ng-container cdkColumnDef=\"position\">\r\n    <th cdk-header-cell *cdkHeaderCellDef> No. </th>\r\n    <td cdk-cell *cdkCellDef=\"let element\"> {{element.position}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container cdkColumnDef=\"name\">\r\n    <th cdk-header-cell *cdkHeaderCellDef> Name </th>\r\n    <td cdk-cell *cdkCellDef=\"let element\"> {{element.name}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container cdkColumnDef=\"weight\">\r\n    <th cdk-header-cell *cdkHeaderCellDef> Weight </th>\r\n    <td cdk-cell *cdkCellDef=\"let element\"> {{element.weight}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container cdkColumnDef=\"symbol\">\r\n    <th cdk-header-cell *cdkHeaderCellDef> Symbol </th>\r\n    <td cdk-cell *cdkCellDef=\"let element\"> {{element.symbol}} </td>\r\n  </ng-container>\r\n\r\n  <tr cdk-header-row *cdkHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n", styles: ["table {\r\n  width: 100%;\r\n}\r\n\r\nth {\r\n  text-align: left;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: CdkTableModule }, { kind: "component", type: i1.CdkTable, selector: "cdk-table, table[cdk-table]", inputs: ["trackBy", "dataSource", "multiTemplateDataRows", "fixedLayout"], outputs: ["contentChanged"], exportAs: ["cdkTable"] }, { kind: "directive", type: i1.CdkRowDef, selector: "[cdkRowDef]", inputs: ["cdkRowDefColumns", "cdkRowDefWhen"] }, { kind: "directive", type: i1.CdkCellDef, selector: "[cdkCellDef]" }, { kind: "directive", type: i1.CdkHeaderCellDef, selector: "[cdkHeaderCellDef]" }, { kind: "directive", type: i1.CdkColumnDef, selector: "[cdkColumnDef]", inputs: ["sticky", "cdkColumnDef", "stickyEnd"] }, { kind: "directive", type: i1.CdkCell, selector: "cdk-cell, td[cdk-cell]" }, { kind: "component", type: i1.CdkRow, selector: "cdk-row, tr[cdk-row]" }, { kind: "directive", type: i1.CdkHeaderCell, selector: "cdk-header-cell, th[cdk-header-cell]" }, { kind: "component", type: i1.CdkHeaderRow, selector: "cdk-header-row, tr[cdk-header-row]" }, { kind: "directive", type: i1.CdkHeaderRowDef, selector: "[cdkHeaderRowDef]", inputs: ["cdkHeaderRowDef", "cdkHeaderRowDefSticky"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkTableFixedLayoutExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-table-fixed-layout-example', standalone: true, imports: [CdkTableModule], template: "<table cdk-table [dataSource]=\"dataSource\" fixedLayout>\r\n  <!-- Position Column -->\r\n  <ng-container cdkColumnDef=\"position\">\r\n    <th cdk-header-cell *cdkHeaderCellDef> No. </th>\r\n    <td cdk-cell *cdkCellDef=\"let element\"> {{element.position}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container cdkColumnDef=\"name\">\r\n    <th cdk-header-cell *cdkHeaderCellDef> Name </th>\r\n    <td cdk-cell *cdkCellDef=\"let element\"> {{element.name}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container cdkColumnDef=\"weight\">\r\n    <th cdk-header-cell *cdkHeaderCellDef> Weight </th>\r\n    <td cdk-cell *cdkCellDef=\"let element\"> {{element.weight}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container cdkColumnDef=\"symbol\">\r\n    <th cdk-header-cell *cdkHeaderCellDef> Symbol </th>\r\n    <td cdk-cell *cdkCellDef=\"let element\"> {{element.symbol}} </td>\r\n  </ng-container>\r\n\r\n  <tr cdk-header-row *cdkHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n", styles: ["table {\r\n  width: 100%;\r\n}\r\n\r\nth {\r\n  text-align: left;\r\n}\r\n"] }]
        }] });
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
];
/**
 * @title Table that uses the recycle view repeater strategy.
 */
class CdkTableRecycleRowsExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new ExampleDataSource();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkTableRecycleRowsExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: CdkTableRecycleRowsExample, isStandalone: true, selector: "cdk-table-recycle-rows-example", ngImport: i0, template: "<table class=\"example-table\" cdk-table recycleRows [dataSource]=\"dataSource\">\r\n  <!-- Position Column -->\r\n  <ng-container cdkColumnDef=\"position\">\r\n    <th class=\"example-row\" cdk-header-cell *cdkHeaderCellDef> No. </th>\r\n    <td cdk-cell *cdkCellDef=\"let element\"> {{element.position}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container cdkColumnDef=\"name\">\r\n    <th class=\"example-row\" cdk-header-cell *cdkHeaderCellDef> Name </th>\r\n    <td cdk-cell *cdkCellDef=\"let element\"> {{element.name}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container cdkColumnDef=\"weight\">\r\n    <th class=\"example-row\" cdk-header-cell *cdkHeaderCellDef> Weight </th>\r\n    <td cdk-cell *cdkCellDef=\"let element\"> {{element.weight}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container cdkColumnDef=\"symbol\">\r\n    <th class=\"example-row\" cdk-header-cell *cdkHeaderCellDef> Symbol </th>\r\n    <td cdk-cell *cdkCellDef=\"let element\"> {{element.symbol}} </td>\r\n  </ng-container>\r\n\r\n  <tr cdk-header-row *cdkHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n", styles: [".example-table {\r\n  width: 100%;\r\n}\r\n\r\n.example-row {\r\n  text-align: left;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: CdkTableModule }, { kind: "component", type: i1.CdkTable, selector: "cdk-table, table[cdk-table]", inputs: ["trackBy", "dataSource", "multiTemplateDataRows", "fixedLayout"], outputs: ["contentChanged"], exportAs: ["cdkTable"] }, { kind: "directive", type: i1.CdkRowDef, selector: "[cdkRowDef]", inputs: ["cdkRowDefColumns", "cdkRowDefWhen"] }, { kind: "directive", type: i1.CdkCellDef, selector: "[cdkCellDef]" }, { kind: "directive", type: i1.CdkHeaderCellDef, selector: "[cdkHeaderCellDef]" }, { kind: "directive", type: i1.CdkColumnDef, selector: "[cdkColumnDef]", inputs: ["sticky", "cdkColumnDef", "stickyEnd"] }, { kind: "directive", type: i1.CdkCell, selector: "cdk-cell, td[cdk-cell]" }, { kind: "component", type: i1.CdkRow, selector: "cdk-row, tr[cdk-row]" }, { kind: "directive", type: i1.CdkHeaderCell, selector: "cdk-header-cell, th[cdk-header-cell]" }, { kind: "component", type: i1.CdkHeaderRow, selector: "cdk-header-row, tr[cdk-header-row]" }, { kind: "directive", type: i1.CdkHeaderRowDef, selector: "[cdkHeaderRowDef]", inputs: ["cdkHeaderRowDef", "cdkHeaderRowDefSticky"] }, { kind: "directive", type: i1.CdkRecycleRows, selector: "cdk-table[recycleRows], table[cdk-table][recycleRows]" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkTableRecycleRowsExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-table-recycle-rows-example', standalone: true, imports: [CdkTableModule], template: "<table class=\"example-table\" cdk-table recycleRows [dataSource]=\"dataSource\">\r\n  <!-- Position Column -->\r\n  <ng-container cdkColumnDef=\"position\">\r\n    <th class=\"example-row\" cdk-header-cell *cdkHeaderCellDef> No. </th>\r\n    <td cdk-cell *cdkCellDef=\"let element\"> {{element.position}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container cdkColumnDef=\"name\">\r\n    <th class=\"example-row\" cdk-header-cell *cdkHeaderCellDef> Name </th>\r\n    <td cdk-cell *cdkCellDef=\"let element\"> {{element.name}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container cdkColumnDef=\"weight\">\r\n    <th class=\"example-row\" cdk-header-cell *cdkHeaderCellDef> Weight </th>\r\n    <td cdk-cell *cdkCellDef=\"let element\"> {{element.weight}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container cdkColumnDef=\"symbol\">\r\n    <th class=\"example-row\" cdk-header-cell *cdkHeaderCellDef> Symbol </th>\r\n    <td cdk-cell *cdkCellDef=\"let element\"> {{element.symbol}} </td>\r\n  </ng-container>\r\n\r\n  <tr cdk-header-row *cdkHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n", styles: [".example-table {\r\n  width: 100%;\r\n}\r\n\r\n.example-row {\r\n  text-align: left;\r\n}\r\n"] }]
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

export { CdkTableBasicExample, CdkTableFixedLayoutExample, CdkTableFlexBasicExample, CdkTableRecycleRowsExample };
//# sourceMappingURL=table.mjs.map
