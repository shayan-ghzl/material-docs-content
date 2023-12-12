import { BehaviorSubject } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import * as i0 from '@angular/core';
import { Observable } from 'rxjs';

/**
 * @title Basic CDK data-table
 */
export declare class CdkTableBasicExample {
    displayedColumns: string[];
    dataSource: ExampleDataSource_2;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkTableBasicExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkTableBasicExample, "cdk-table-basic-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title CDK table with a fixed layout.
 */
export declare class CdkTableFixedLayoutExample {
    displayedColumns: string[];
    dataSource: ExampleDataSource_3;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkTableFixedLayoutExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkTableFixedLayoutExample, "cdk-table-fixed-layout-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Basic use of `<cdk-table>` (uses display flex)
 */
export declare class CdkTableFlexBasicExample {
    displayedColumns: string[];
    dataSource: ExampleDataSource;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkTableFlexBasicExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkTableFlexBasicExample, "cdk-table-flex-basic-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Table that uses the recycle view repeater strategy.
 */
export declare class CdkTableRecycleRowsExample {
    displayedColumns: string[];
    dataSource: ExampleDataSource_4;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkTableRecycleRowsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkTableRecycleRowsExample, "cdk-table-recycle-rows-example", never, {}, {}, never, never, true, never>;
}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
declare class ExampleDataSource extends DataSource<PeriodicElement> {
    /** Stream of data that is provided to the table. */
    data: BehaviorSubject<PeriodicElement[]>;
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<PeriodicElement[]>;
    disconnect(): void;
}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
declare class ExampleDataSource_2 extends DataSource<PeriodicElement_2> {
    /** Stream of data that is provided to the table. */
    data: BehaviorSubject<PeriodicElement_2[]>;
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<PeriodicElement_2[]>;
    disconnect(): void;
}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
declare class ExampleDataSource_3 extends DataSource<PeriodicElement_3> {
    /** Stream of data that is provided to the table. */
    data: BehaviorSubject<PeriodicElement_3[]>;
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<PeriodicElement_3[]>;
    disconnect(): void;
}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
declare class ExampleDataSource_4 extends DataSource<PeriodicElement_4> {
    /** Stream of data that is provided to the table. */
    data: BehaviorSubject<PeriodicElement_4[]>;
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<PeriodicElement_4[]>;
    disconnect(): void;
}

declare interface PeriodicElement {
    name: string;
    position: number;
    symbol: string;
    weight: number;
}

declare interface PeriodicElement_2 {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

declare interface PeriodicElement_3 {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

declare interface PeriodicElement_4 {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

export { }
