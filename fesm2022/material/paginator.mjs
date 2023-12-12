import * as i0 from '@angular/core';
import { Component, Injectable } from '@angular/core';
import * as i1$1 from '@angular/material/paginator';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { JsonPipe } from '@angular/common';
import * as i4 from '@angular/material/slide-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import * as i3 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i2 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i1 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Subject } from 'rxjs';

/**
 * @title Configurable paginator
 */
class PaginatorConfigurableExample {
    constructor() {
        this.length = 50;
        this.pageSize = 10;
        this.pageIndex = 0;
        this.pageSizeOptions = [5, 10, 25];
        this.hidePageSize = false;
        this.showPageSizeOptions = true;
        this.showFirstLastButtons = true;
        this.disabled = false;
    }
    handlePageEvent(e) {
        this.pageEvent = e;
        this.length = e.length;
        this.pageSize = e.pageSize;
        this.pageIndex = e.pageIndex;
    }
    setPageSizeOptions(setPageSizeOptionsInput) {
        if (setPageSizeOptionsInput) {
            this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: PaginatorConfigurableExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: PaginatorConfigurableExample, isStandalone: true, selector: "paginator-configurable-example", ngImport: i0, template: "<div class=\"demo-options\">\r\n  <mat-form-field>\r\n    <mat-label>Length</mat-label>\r\n    <input matInput placeholder=\"Length\" type=\"number\" [(ngModel)]=\"length\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field>\r\n    <mat-label>Page Size</mat-label>\r\n    <input matInput placeholder=\"Page Size\" type=\"number\" [(ngModel)]=\"pageSize\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field>\r\n    <mat-label>Page Index</mat-label>\r\n    <input matInput placeholder=\"Page Index\" type=\"number\" [(ngModel)]=\"pageIndex\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field>\r\n    <mat-label>Page Size Options</mat-label>\r\n    <input matInput [ngModel]=\"pageSizeOptions\" (ngModelChange)=\"setPageSizeOptions($event)\"\r\n           [ngModelOptions]=\"{updateOn: 'blur'}\" placeholder=\"Ex. 10,25,50\">\r\n  </mat-form-field>\r\n\r\n  <div class=\"demo-toggles\">\r\n    <mat-slide-toggle [(ngModel)]=\"hidePageSize\">Hide page size</mat-slide-toggle>\r\n    <mat-slide-toggle [(ngModel)]=\"showPageSizeOptions\">Show multiple page size options</mat-slide-toggle>\r\n    <mat-slide-toggle [(ngModel)]=\"showFirstLastButtons\">Show first/last buttons</mat-slide-toggle>\r\n    <mat-slide-toggle [(ngModel)]=\"disabled\">Disabled</mat-slide-toggle>\r\n  </div>\r\n</div>\r\n\r\n<mat-paginator #paginator\r\n               class=\"demo-paginator\"\r\n               (page)=\"handlePageEvent($event)\"\r\n               [length]=\"length\"\r\n               [pageSize]=\"pageSize\"\r\n               [disabled]=\"disabled\"\r\n               [showFirstLastButtons]=\"showFirstLastButtons\"\r\n               [pageSizeOptions]=\"showPageSizeOptions ? pageSizeOptions : []\"\r\n               [hidePageSize]=\"hidePageSize\"\r\n               [pageIndex]=\"pageIndex\"\r\n               aria-label=\"Select page\">\r\n</mat-paginator>\r\n\r\n<div class=\"demo-data\">\r\n  <div> Output event: {{(pageEvent | json) || 'No events dispatched yet'}} </div>\r\n  <div> getNumberOfPages: {{paginator.getNumberOfPages()}} </div>\r\n</div>\r\n", styles: [".demo-toggles {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.demo-toggles * {\r\n  margin-bottom: 16px;\r\n}\r\n\r\n.demo-options {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 600px;\r\n}\r\n\r\n.demo-data * {\r\n  margin: 16px 0;\r\n}\r\n\r\n.demo-paginator {\r\n  width: 600px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: MatSlideToggleModule }, { kind: "component", type: i4.MatSlideToggle, selector: "mat-slide-toggle", inputs: ["disabled", "disableRipple", "color", "tabIndex", "name", "id", "labelPosition", "aria-label", "aria-labelledby", "aria-describedby", "required", "checked", "hideIcon"], outputs: ["change", "toggleChange"], exportAs: ["matSlideToggle"] }, { kind: "ngmodule", type: MatPaginatorModule }, { kind: "component", type: i1$1.MatPaginator, selector: "mat-paginator", inputs: ["color", "pageIndex", "length", "pageSize", "pageSizeOptions", "hidePageSize", "showFirstLastButtons", "selectConfig", "disabled"], outputs: ["page"], exportAs: ["matPaginator"] }, { kind: "pipe", type: JsonPipe, name: "json" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: PaginatorConfigurableExample, decorators: [{
            type: Component,
            args: [{ selector: 'paginator-configurable-example', standalone: true, imports: [
                        MatFormFieldModule,
                        MatInputModule,
                        FormsModule,
                        MatSlideToggleModule,
                        MatPaginatorModule,
                        JsonPipe,
                    ], template: "<div class=\"demo-options\">\r\n  <mat-form-field>\r\n    <mat-label>Length</mat-label>\r\n    <input matInput placeholder=\"Length\" type=\"number\" [(ngModel)]=\"length\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field>\r\n    <mat-label>Page Size</mat-label>\r\n    <input matInput placeholder=\"Page Size\" type=\"number\" [(ngModel)]=\"pageSize\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field>\r\n    <mat-label>Page Index</mat-label>\r\n    <input matInput placeholder=\"Page Index\" type=\"number\" [(ngModel)]=\"pageIndex\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field>\r\n    <mat-label>Page Size Options</mat-label>\r\n    <input matInput [ngModel]=\"pageSizeOptions\" (ngModelChange)=\"setPageSizeOptions($event)\"\r\n           [ngModelOptions]=\"{updateOn: 'blur'}\" placeholder=\"Ex. 10,25,50\">\r\n  </mat-form-field>\r\n\r\n  <div class=\"demo-toggles\">\r\n    <mat-slide-toggle [(ngModel)]=\"hidePageSize\">Hide page size</mat-slide-toggle>\r\n    <mat-slide-toggle [(ngModel)]=\"showPageSizeOptions\">Show multiple page size options</mat-slide-toggle>\r\n    <mat-slide-toggle [(ngModel)]=\"showFirstLastButtons\">Show first/last buttons</mat-slide-toggle>\r\n    <mat-slide-toggle [(ngModel)]=\"disabled\">Disabled</mat-slide-toggle>\r\n  </div>\r\n</div>\r\n\r\n<mat-paginator #paginator\r\n               class=\"demo-paginator\"\r\n               (page)=\"handlePageEvent($event)\"\r\n               [length]=\"length\"\r\n               [pageSize]=\"pageSize\"\r\n               [disabled]=\"disabled\"\r\n               [showFirstLastButtons]=\"showFirstLastButtons\"\r\n               [pageSizeOptions]=\"showPageSizeOptions ? pageSizeOptions : []\"\r\n               [hidePageSize]=\"hidePageSize\"\r\n               [pageIndex]=\"pageIndex\"\r\n               aria-label=\"Select page\">\r\n</mat-paginator>\r\n\r\n<div class=\"demo-data\">\r\n  <div> Output event: {{(pageEvent | json) || 'No events dispatched yet'}} </div>\r\n  <div> getNumberOfPages: {{paginator.getNumberOfPages()}} </div>\r\n</div>\r\n", styles: [".demo-toggles {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.demo-toggles * {\r\n  margin-bottom: 16px;\r\n}\r\n\r\n.demo-options {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 600px;\r\n}\r\n\r\n.demo-data * {\r\n  margin: 16px 0;\r\n}\r\n\r\n.demo-paginator {\r\n  width: 600px;\r\n}\r\n"] }]
        }] });

/**
 * @title Paginator
 */
class PaginatorOverviewExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: PaginatorOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: PaginatorOverviewExample, isStandalone: true, selector: "paginator-overview-example", ngImport: i0, template: "<mat-paginator [length]=\"100\"\r\n              [pageSize]=\"10\"\r\n              [pageSizeOptions]=\"[5, 10, 25, 100]\"\r\n              aria-label=\"Select page\">\r\n</mat-paginator>\r\n", dependencies: [{ kind: "ngmodule", type: MatPaginatorModule }, { kind: "component", type: i1$1.MatPaginator, selector: "mat-paginator", inputs: ["color", "pageIndex", "length", "pageSize", "pageSizeOptions", "hidePageSize", "showFirstLastButtons", "selectConfig", "disabled"], outputs: ["page"], exportAs: ["matPaginator"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: PaginatorOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'paginator-overview-example', standalone: true, imports: [MatPaginatorModule], template: "<mat-paginator [length]=\"100\"\r\n              [pageSize]=\"10\"\r\n              [pageSizeOptions]=\"[5, 10, 25, 100]\"\r\n              aria-label=\"Select page\">\r\n</mat-paginator>\r\n" }]
        }] });

/**
 * @title Testing with MatPaginatorHarness
 */
class PaginatorHarnessExample {
    constructor() {
        this.length = 500;
        this.pageSize = 10;
        this.pageIndex = 0;
        this.pageSizeOptions = [5, 10, 25];
        this.showFirstLastButtons = true;
    }
    handlePageEvent(event) {
        this.length = event.length;
        this.pageSize = event.pageSize;
        this.pageIndex = event.pageIndex;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: PaginatorHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: PaginatorHarnessExample, isStandalone: true, selector: "paginator-harness-example", ngImport: i0, template: "<mat-paginator\r\n    (page)=\"handlePageEvent($event)\"\r\n    [length]=\"length\"\r\n    [pageSize]=\"pageSize\"\r\n    [showFirstLastButtons]=\"showFirstLastButtons\"\r\n    [pageSizeOptions]=\"pageSizeOptions\"\r\n    [pageIndex]=\"pageIndex\"\r\n    aria-label=\"Select page\">\r\n</mat-paginator>\r\n", dependencies: [{ kind: "ngmodule", type: MatPaginatorModule }, { kind: "component", type: i1$1.MatPaginator, selector: "mat-paginator", inputs: ["color", "pageIndex", "length", "pageSize", "pageSizeOptions", "hidePageSize", "showFirstLastButtons", "selectConfig", "disabled"], outputs: ["page"], exportAs: ["matPaginator"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: PaginatorHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'paginator-harness-example', standalone: true, imports: [MatPaginatorModule], template: "<mat-paginator\r\n    (page)=\"handlePageEvent($event)\"\r\n    [length]=\"length\"\r\n    [pageSize]=\"pageSize\"\r\n    [showFirstLastButtons]=\"showFirstLastButtons\"\r\n    [pageSizeOptions]=\"pageSizeOptions\"\r\n    [pageIndex]=\"pageIndex\"\r\n    aria-label=\"Select page\">\r\n</mat-paginator>\r\n" }]
        }] });

class MyCustomPaginatorIntl {
    constructor() {
        this.changes = new Subject();
        // For internationalization, the `$localize` function from
        // the `@angular/localize` package can be used.
        this.firstPageLabel = $localize `First page`;
        this.itemsPerPageLabel = $localize `Items per page:`;
        this.lastPageLabel = $localize `Last page`;
        // You can set labels to an arbitrary string too, or dynamically compute
        // it through other third-party internationalization libraries.
        this.nextPageLabel = 'Next page';
        this.previousPageLabel = 'Previous page';
    }
    getRangeLabel(page, pageSize, length) {
        if (length === 0) {
            return $localize `Page 1 of 1`;
        }
        const amountPages = Math.ceil(length / pageSize);
        return $localize `Page ${page + 1} of ${amountPages}`;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: MyCustomPaginatorIntl, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: MyCustomPaginatorIntl }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: MyCustomPaginatorIntl, decorators: [{
            type: Injectable
        }] });
/**
 * @title Paginator internationalization
 */
class PaginatorIntlExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: PaginatorIntlExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: PaginatorIntlExample, isStandalone: true, selector: "paginator-intl-example", providers: [{ provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl }], ngImport: i0, template: "<mat-paginator [length]=\"200\" [pageSizeOptions]=\"[10, 50, 100]\" aria-label=\"Select page\">\r\n</mat-paginator>\r\n", dependencies: [{ kind: "ngmodule", type: MatPaginatorModule }, { kind: "component", type: i1$1.MatPaginator, selector: "mat-paginator", inputs: ["color", "pageIndex", "length", "pageSize", "pageSizeOptions", "hidePageSize", "showFirstLastButtons", "selectConfig", "disabled"], outputs: ["page"], exportAs: ["matPaginator"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: PaginatorIntlExample, decorators: [{
            type: Component,
            args: [{ selector: 'paginator-intl-example', standalone: true, imports: [MatPaginatorModule], providers: [{ provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl }], template: "<mat-paginator [length]=\"200\" [pageSizeOptions]=\"[10, 50, 100]\" aria-label=\"Select page\">\r\n</mat-paginator>\r\n" }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { PaginatorConfigurableExample, PaginatorHarnessExample, PaginatorIntlExample, PaginatorOverviewExample };
//# sourceMappingURL=paginator.mjs.map
