import { Component } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/paginator";
/**
 * @title Testing with MatPaginatorHarness
 */
export class PaginatorHarnessExample {
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: PaginatorHarnessExample, isStandalone: true, selector: "paginator-harness-example", ngImport: i0, template: "<mat-paginator\r\n    (page)=\"handlePageEvent($event)\"\r\n    [length]=\"length\"\r\n    [pageSize]=\"pageSize\"\r\n    [showFirstLastButtons]=\"showFirstLastButtons\"\r\n    [pageSizeOptions]=\"pageSizeOptions\"\r\n    [pageIndex]=\"pageIndex\"\r\n    aria-label=\"Select page\">\r\n</mat-paginator>\r\n", dependencies: [{ kind: "ngmodule", type: MatPaginatorModule }, { kind: "component", type: i1.MatPaginator, selector: "mat-paginator", inputs: ["color", "pageIndex", "length", "pageSize", "pageSizeOptions", "hidePageSize", "showFirstLastButtons", "selectConfig", "disabled"], outputs: ["page"], exportAs: ["matPaginator"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: PaginatorHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'paginator-harness-example', standalone: true, imports: [MatPaginatorModule], template: "<mat-paginator\r\n    (page)=\"handlePageEvent($event)\"\r\n    [length]=\"length\"\r\n    [pageSize]=\"pageSize\"\r\n    [showFirstLastButtons]=\"showFirstLastButtons\"\r\n    [pageSizeOptions]=\"pageSizeOptions\"\r\n    [pageIndex]=\"pageIndex\"\r\n    aria-label=\"Select page\">\r\n</mat-paginator>\r\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3BhZ2luYXRvci9wYWdpbmF0b3ItaGFybmVzcy9wYWdpbmF0b3ItaGFybmVzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvcGFnaW5hdG9yL3BhZ2luYXRvci1oYXJuZXNzL3BhZ2luYXRvci1oYXJuZXNzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBWSxrQkFBa0IsRUFBQyxNQUFNLDZCQUE2QixDQUFDOzs7QUFFMUU7O0dBRUc7QUFPSCxNQUFNLE9BQU8sdUJBQXVCO0lBTnBDO1FBT0UsV0FBTSxHQUFHLEdBQUcsQ0FBQztRQUNiLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2Qsb0JBQWUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDOUIseUJBQW9CLEdBQUcsSUFBSSxDQUFDO0tBTzdCO0lBTEMsZUFBZSxDQUFDLEtBQWdCO1FBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO0lBQ25DLENBQUM7OEdBWFUsdUJBQXVCO2tHQUF2Qix1QkFBdUIscUZDWnBDLG9UQVNBLDJDRENZLGtCQUFrQjs7MkZBRWpCLHVCQUF1QjtrQkFObkMsU0FBUzsrQkFDRSwyQkFBMkIsY0FFekIsSUFBSSxXQUNQLENBQUMsa0JBQWtCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7UGFnZUV2ZW50LCBNYXRQYWdpbmF0b3JNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvcic7XHJcblxyXG4vKipcclxuICogQHRpdGxlIFRlc3Rpbmcgd2l0aCBNYXRQYWdpbmF0b3JIYXJuZXNzXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BhZ2luYXRvci1oYXJuZXNzLWV4YW1wbGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAncGFnaW5hdG9yLWhhcm5lc3MtZXhhbXBsZS5odG1sJyxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFtNYXRQYWdpbmF0b3JNb2R1bGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFnaW5hdG9ySGFybmVzc0V4YW1wbGUge1xyXG4gIGxlbmd0aCA9IDUwMDtcclxuICBwYWdlU2l6ZSA9IDEwO1xyXG4gIHBhZ2VJbmRleCA9IDA7XHJcbiAgcGFnZVNpemVPcHRpb25zID0gWzUsIDEwLCAyNV07XHJcbiAgc2hvd0ZpcnN0TGFzdEJ1dHRvbnMgPSB0cnVlO1xyXG5cclxuICBoYW5kbGVQYWdlRXZlbnQoZXZlbnQ6IFBhZ2VFdmVudCkge1xyXG4gICAgdGhpcy5sZW5ndGggPSBldmVudC5sZW5ndGg7XHJcbiAgICB0aGlzLnBhZ2VTaXplID0gZXZlbnQucGFnZVNpemU7XHJcbiAgICB0aGlzLnBhZ2VJbmRleCA9IGV2ZW50LnBhZ2VJbmRleDtcclxuICB9XHJcbn1cclxuIiwiPG1hdC1wYWdpbmF0b3JcclxuICAgIChwYWdlKT1cImhhbmRsZVBhZ2VFdmVudCgkZXZlbnQpXCJcclxuICAgIFtsZW5ndGhdPVwibGVuZ3RoXCJcclxuICAgIFtwYWdlU2l6ZV09XCJwYWdlU2l6ZVwiXHJcbiAgICBbc2hvd0ZpcnN0TGFzdEJ1dHRvbnNdPVwic2hvd0ZpcnN0TGFzdEJ1dHRvbnNcIlxyXG4gICAgW3BhZ2VTaXplT3B0aW9uc109XCJwYWdlU2l6ZU9wdGlvbnNcIlxyXG4gICAgW3BhZ2VJbmRleF09XCJwYWdlSW5kZXhcIlxyXG4gICAgYXJpYS1sYWJlbD1cIlNlbGVjdCBwYWdlXCI+XHJcbjwvbWF0LXBhZ2luYXRvcj5cclxuIl19