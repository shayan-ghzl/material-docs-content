import { Component, Injectable } from '@angular/core';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/paginator";
export class MyCustomPaginatorIntl {
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
export class PaginatorIntlExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: PaginatorIntlExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: PaginatorIntlExample, isStandalone: true, selector: "paginator-intl-example", providers: [{ provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl }], ngImport: i0, template: "<mat-paginator [length]=\"200\" [pageSizeOptions]=\"[10, 50, 100]\" aria-label=\"Select page\">\r\n</mat-paginator>\r\n", dependencies: [{ kind: "ngmodule", type: MatPaginatorModule }, { kind: "component", type: i1.MatPaginator, selector: "mat-paginator", inputs: ["color", "pageIndex", "length", "pageSize", "pageSizeOptions", "hidePageSize", "showFirstLastButtons", "selectConfig", "disabled"], outputs: ["page"], exportAs: ["matPaginator"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: PaginatorIntlExample, decorators: [{
            type: Component,
            args: [{ selector: 'paginator-intl-example', standalone: true, imports: [MatPaginatorModule], providers: [{ provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl }], template: "<mat-paginator [length]=\"200\" [pageSizeOptions]=\"[10, 50, 100]\" aria-label=\"Select page\">\r\n</mat-paginator>\r\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLWludGwtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3BhZ2luYXRvci9wYWdpbmF0b3ItaW50bC9wYWdpbmF0b3ItaW50bC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvcGFnaW5hdG9yL3BhZ2luYXRvci1pbnRsL3BhZ2luYXRvci1pbnRsLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUNqRixPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDOzs7QUFHN0IsTUFBTSxPQUFPLHFCQUFxQjtJQURsQztRQUVFLFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBRTlCLDBEQUEwRDtRQUMxRCwrQ0FBK0M7UUFDL0MsbUJBQWMsR0FBRyxTQUFTLENBQUEsWUFBWSxDQUFDO1FBQ3ZDLHNCQUFpQixHQUFHLFNBQVMsQ0FBQSxpQkFBaUIsQ0FBQztRQUMvQyxrQkFBYSxHQUFHLFNBQVMsQ0FBQSxXQUFXLENBQUM7UUFFckMsd0VBQXdFO1FBQ3hFLCtEQUErRDtRQUMvRCxrQkFBYSxHQUFHLFdBQVcsQ0FBQztRQUM1QixzQkFBaUIsR0FBRyxlQUFlLENBQUM7S0FTckM7SUFQQyxhQUFhLENBQUMsSUFBWSxFQUFFLFFBQWdCLEVBQUUsTUFBYztRQUMxRCxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDaEIsT0FBTyxTQUFTLENBQUEsYUFBYSxDQUFDO1NBQy9CO1FBQ0QsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLENBQUM7UUFDakQsT0FBTyxTQUFTLENBQUEsUUFBUSxJQUFJLEdBQUcsQ0FBQyxPQUFPLFdBQVcsRUFBRSxDQUFDO0lBQ3ZELENBQUM7OEdBcEJVLHFCQUFxQjtrSEFBckIscUJBQXFCOzsyRkFBckIscUJBQXFCO2tCQURqQyxVQUFVOztBQXdCWDs7R0FFRztBQVFILE1BQU0sT0FBTyxvQkFBb0I7OEdBQXBCLG9CQUFvQjtrR0FBcEIsb0JBQW9CLHFFQUZwQixDQUFDLEVBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxxQkFBcUIsRUFBQyxDQUFDLDBCQ3BDM0UseUhBRUEsMkNEaUNZLGtCQUFrQjs7MkZBR2pCLG9CQUFvQjtrQkFQaEMsU0FBUzsrQkFDRSx3QkFBd0IsY0FFdEIsSUFBSSxXQUNQLENBQUMsa0JBQWtCLENBQUMsYUFDbEIsQ0FBQyxFQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUscUJBQXFCLEVBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtNYXRQYWdpbmF0b3JJbnRsLCBNYXRQYWdpbmF0b3JNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvcic7XHJcbmltcG9ydCB7U3ViamVjdH0gZnJvbSAncnhqcyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNeUN1c3RvbVBhZ2luYXRvckludGwgaW1wbGVtZW50cyBNYXRQYWdpbmF0b3JJbnRsIHtcclxuICBjaGFuZ2VzID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgLy8gRm9yIGludGVybmF0aW9uYWxpemF0aW9uLCB0aGUgYCRsb2NhbGl6ZWAgZnVuY3Rpb24gZnJvbVxyXG4gIC8vIHRoZSBgQGFuZ3VsYXIvbG9jYWxpemVgIHBhY2thZ2UgY2FuIGJlIHVzZWQuXHJcbiAgZmlyc3RQYWdlTGFiZWwgPSAkbG9jYWxpemVgRmlyc3QgcGFnZWA7XHJcbiAgaXRlbXNQZXJQYWdlTGFiZWwgPSAkbG9jYWxpemVgSXRlbXMgcGVyIHBhZ2U6YDtcclxuICBsYXN0UGFnZUxhYmVsID0gJGxvY2FsaXplYExhc3QgcGFnZWA7XHJcblxyXG4gIC8vIFlvdSBjYW4gc2V0IGxhYmVscyB0byBhbiBhcmJpdHJhcnkgc3RyaW5nIHRvbywgb3IgZHluYW1pY2FsbHkgY29tcHV0ZVxyXG4gIC8vIGl0IHRocm91Z2ggb3RoZXIgdGhpcmQtcGFydHkgaW50ZXJuYXRpb25hbGl6YXRpb24gbGlicmFyaWVzLlxyXG4gIG5leHRQYWdlTGFiZWwgPSAnTmV4dCBwYWdlJztcclxuICBwcmV2aW91c1BhZ2VMYWJlbCA9ICdQcmV2aW91cyBwYWdlJztcclxuXHJcbiAgZ2V0UmFuZ2VMYWJlbChwYWdlOiBudW1iZXIsIHBhZ2VTaXplOiBudW1iZXIsIGxlbmd0aDogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGlmIChsZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuICRsb2NhbGl6ZWBQYWdlIDEgb2YgMWA7XHJcbiAgICB9XHJcbiAgICBjb25zdCBhbW91bnRQYWdlcyA9IE1hdGguY2VpbChsZW5ndGggLyBwYWdlU2l6ZSk7XHJcbiAgICByZXR1cm4gJGxvY2FsaXplYFBhZ2UgJHtwYWdlICsgMX0gb2YgJHthbW91bnRQYWdlc31gO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEB0aXRsZSBQYWdpbmF0b3IgaW50ZXJuYXRpb25hbGl6YXRpb25cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncGFnaW5hdG9yLWludGwtZXhhbXBsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICdwYWdpbmF0b3ItaW50bC1leGFtcGxlLmh0bWwnLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW01hdFBhZ2luYXRvck1vZHVsZV0sXHJcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IE1hdFBhZ2luYXRvckludGwsIHVzZUNsYXNzOiBNeUN1c3RvbVBhZ2luYXRvckludGx9XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2luYXRvckludGxFeGFtcGxlIHt9XHJcbiIsIjxtYXQtcGFnaW5hdG9yIFtsZW5ndGhdPVwiMjAwXCIgW3BhZ2VTaXplT3B0aW9uc109XCJbMTAsIDUwLCAxMDBdXCIgYXJpYS1sYWJlbD1cIlNlbGVjdCBwYWdlXCI+XHJcbjwvbWF0LXBhZ2luYXRvcj5cclxuIl19