import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatBottomSheet, MatBottomSheetModule, } from '@angular/material/bottom-sheet';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/bottom-sheet";
/**
 * @title Testing with MatBottomSheetHarness
 */
export class BottomSheetHarnessExample {
    constructor(bottomSheet) {
        this.bottomSheet = bottomSheet;
    }
    open(config) {
        return this.bottomSheet.open(this.template, config);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: BottomSheetHarnessExample, deps: [{ token: i1.MatBottomSheet }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: BottomSheetHarnessExample, isStandalone: true, selector: "bottom-sheet-harness-example", viewQueries: [{ propertyName: "template", first: true, predicate: TemplateRef, descendants: true }], ngImport: i0, template: "<ng-template>\r\n  Hello from the bottom sheet!\r\n</ng-template>\r\n", dependencies: [{ kind: "ngmodule", type: MatBottomSheetModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: BottomSheetHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'bottom-sheet-harness-example', standalone: true, imports: [MatBottomSheetModule], template: "<ng-template>\r\n  Hello from the bottom sheet!\r\n</ng-template>\r\n" }]
        }], ctorParameters: () => [{ type: i1.MatBottomSheet }], propDecorators: { template: [{
                type: ViewChild,
                args: [TemplateRef]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90dG9tLXNoZWV0LWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2JvdHRvbS1zaGVldC9ib3R0b20tc2hlZXQtaGFybmVzcy9ib3R0b20tc2hlZXQtaGFybmVzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYm90dG9tLXNoZWV0L2JvdHRvbS1zaGVldC1oYXJuZXNzL2JvdHRvbS1zaGVldC1oYXJuZXNzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUNMLGNBQWMsRUFFZCxvQkFBb0IsR0FDckIsTUFBTSxnQ0FBZ0MsQ0FBQzs7O0FBRXhDOztHQUVHO0FBT0gsTUFBTSxPQUFPLHlCQUF5QjtJQUdwQyxZQUFxQixXQUEyQjtRQUEzQixnQkFBVyxHQUFYLFdBQVcsQ0FBZ0I7SUFBRyxDQUFDO0lBRXBELElBQUksQ0FBQyxNQUE2QjtRQUNoQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs4R0FQVSx5QkFBeUI7a0dBQXpCLHlCQUF5QixrSUFDekIsV0FBVyxnRENqQnhCLHVFQUdBLDJDRFdZLG9CQUFvQjs7MkZBRW5CLHlCQUF5QjtrQkFOckMsU0FBUzsrQkFDRSw4QkFBOEIsY0FFNUIsSUFBSSxXQUNQLENBQUMsb0JBQW9CLENBQUM7bUZBR1AsUUFBUTtzQkFBL0IsU0FBUzt1QkFBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIE1hdEJvdHRvbVNoZWV0LFxyXG4gIE1hdEJvdHRvbVNoZWV0Q29uZmlnLFxyXG4gIE1hdEJvdHRvbVNoZWV0TW9kdWxlLFxyXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2JvdHRvbS1zaGVldCc7XHJcblxyXG4vKipcclxuICogQHRpdGxlIFRlc3Rpbmcgd2l0aCBNYXRCb3R0b21TaGVldEhhcm5lc3NcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYm90dG9tLXNoZWV0LWhhcm5lc3MtZXhhbXBsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICdib3R0b20tc2hlZXQtaGFybmVzcy1leGFtcGxlLmh0bWwnLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW01hdEJvdHRvbVNoZWV0TW9kdWxlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEJvdHRvbVNoZWV0SGFybmVzc0V4YW1wbGUge1xyXG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYpIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBjb25zdHJ1Y3RvcihyZWFkb25seSBib3R0b21TaGVldDogTWF0Qm90dG9tU2hlZXQpIHt9XHJcblxyXG4gIG9wZW4oY29uZmlnPzogTWF0Qm90dG9tU2hlZXRDb25maWcpIHtcclxuICAgIHJldHVybiB0aGlzLmJvdHRvbVNoZWV0Lm9wZW4odGhpcy50ZW1wbGF0ZSwgY29uZmlnKTtcclxuICB9XHJcbn1cclxuIiwiPG5nLXRlbXBsYXRlPlxyXG4gIEhlbGxvIGZyb20gdGhlIGJvdHRvbSBzaGVldCFcclxuPC9uZy10ZW1wbGF0ZT5cclxuIl19