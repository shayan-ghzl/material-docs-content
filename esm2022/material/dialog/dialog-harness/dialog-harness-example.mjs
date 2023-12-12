import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
/**
 * @title Testing with MatDialogHarness
 */
export class DialogHarnessExample {
    constructor(dialog) {
        this.dialog = dialog;
    }
    open(config) {
        return this.dialog.open(this.dialogTemplate, config);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DialogHarnessExample, deps: [{ token: i1.MatDialog }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: DialogHarnessExample, isStandalone: true, selector: "dialog-harness-example", viewQueries: [{ propertyName: "dialogTemplate", first: true, predicate: TemplateRef, descendants: true }], ngImport: i0, template: "<ng-template>\r\n  Hello from the dialog!\r\n</ng-template>\r\n" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DialogHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-harness-example', standalone: true, template: "<ng-template>\r\n  Hello from the dialog!\r\n</ng-template>\r\n" }]
        }], ctorParameters: () => [{ type: i1.MatDialog }], propDecorators: { dialogTemplate: [{
                type: ViewChild,
                args: [TemplateRef]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RpYWxvZy9kaWFsb2ctaGFybmVzcy9kaWFsb2ctaGFybmVzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1oYXJuZXNzL2RpYWxvZy1oYXJuZXNzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFDLFNBQVMsRUFBa0IsTUFBTSwwQkFBMEIsQ0FBQzs7O0FBRXBFOztHQUVHO0FBTUgsTUFBTSxPQUFPLG9CQUFvQjtJQUcvQixZQUFxQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQUcsQ0FBQztJQUUxQyxJQUFJLENBQUMsTUFBd0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZELENBQUM7OEdBUFUsb0JBQW9CO2tHQUFwQixvQkFBb0Isa0lBQ3BCLFdBQVcsZ0RDWnhCLGlFQUdBOzsyRkRRYSxvQkFBb0I7a0JBTGhDLFNBQVM7K0JBQ0Usd0JBQXdCLGNBRXRCLElBQUk7OEVBR1EsY0FBYztzQkFBckMsU0FBUzt1QkFBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge01hdERpYWxvZywgTWF0RGlhbG9nQ29uZmlnfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5cclxuLyoqXHJcbiAqIEB0aXRsZSBUZXN0aW5nIHdpdGggTWF0RGlhbG9nSGFybmVzc1xyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdkaWFsb2ctaGFybmVzcy1leGFtcGxlJyxcclxuICB0ZW1wbGF0ZVVybDogJ2RpYWxvZy1oYXJuZXNzLWV4YW1wbGUuaHRtbCcsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIERpYWxvZ0hhcm5lc3NFeGFtcGxlIHtcclxuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmKSBkaWFsb2dUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgY29uc3RydWN0b3IocmVhZG9ubHkgZGlhbG9nOiBNYXREaWFsb2cpIHt9XHJcblxyXG4gIG9wZW4oY29uZmlnPzogTWF0RGlhbG9nQ29uZmlnKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kaWFsb2cub3Blbih0aGlzLmRpYWxvZ1RlbXBsYXRlLCBjb25maWcpO1xyXG4gIH1cclxufVxyXG4iLCI8bmctdGVtcGxhdGU+XHJcbiAgSGVsbG8gZnJvbSB0aGUgZGlhbG9nIVxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=