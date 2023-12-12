import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/divider";
/**
 * @title Testing with MatDividerHarness
 */
export class DividerHarnessExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DividerHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: DividerHarnessExample, isStandalone: true, selector: "divider-harness-example", ngImport: i0, template: "<mat-divider></mat-divider>\r\n<mat-divider inset vertical></mat-divider>\r\n", dependencies: [{ kind: "ngmodule", type: MatDividerModule }, { kind: "component", type: i1.MatDivider, selector: "mat-divider", inputs: ["vertical", "inset"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DividerHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'divider-harness-example', standalone: true, imports: [MatDividerModule], template: "<mat-divider></mat-divider>\r\n<mat-divider inset vertical></mat-divider>\r\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGl2aWRlci1oYXJuZXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kaXZpZGVyL2RpdmlkZXItaGFybmVzcy9kaXZpZGVyLWhhcm5lc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RpdmlkZXIvZGl2aWRlci1oYXJuZXNzL2RpdmlkZXItaGFybmVzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQzs7O0FBRTNEOztHQUVHO0FBT0gsTUFBTSxPQUFPLHFCQUFxQjs4R0FBckIscUJBQXFCO2tHQUFyQixxQkFBcUIsbUZDWmxDLCtFQUVBLDJDRFFZLGdCQUFnQjs7MkZBRWYscUJBQXFCO2tCQU5qQyxTQUFTOytCQUNFLHlCQUF5QixjQUV2QixJQUFJLFdBQ1AsQ0FBQyxnQkFBZ0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtNYXREaXZpZGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaXZpZGVyJztcclxuXHJcbi8qKlxyXG4gKiBAdGl0bGUgVGVzdGluZyB3aXRoIE1hdERpdmlkZXJIYXJuZXNzXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2RpdmlkZXItaGFybmVzcy1leGFtcGxlJyxcclxuICB0ZW1wbGF0ZVVybDogJ2RpdmlkZXItaGFybmVzcy1leGFtcGxlLmh0bWwnLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW01hdERpdmlkZXJNb2R1bGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGl2aWRlckhhcm5lc3NFeGFtcGxlIHt9XHJcbiIsIjxtYXQtZGl2aWRlcj48L21hdC1kaXZpZGVyPlxyXG48bWF0LWRpdmlkZXIgaW5zZXQgdmVydGljYWw+PC9tYXQtZGl2aWRlcj5cclxuIl19