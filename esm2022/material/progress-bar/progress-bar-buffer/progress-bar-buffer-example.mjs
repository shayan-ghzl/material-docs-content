import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/progress-bar";
/**
 * @title Buffer progress-bar
 */
export class ProgressBarBufferExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ProgressBarBufferExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: ProgressBarBufferExample, isStandalone: true, selector: "progress-bar-buffer-example", ngImport: i0, template: "<mat-progress-bar mode=\"buffer\"></mat-progress-bar>\r\n", dependencies: [{ kind: "ngmodule", type: MatProgressBarModule }, { kind: "component", type: i1.MatProgressBar, selector: "mat-progress-bar", inputs: ["color", "value", "bufferValue", "mode"], outputs: ["animationEnd"], exportAs: ["matProgressBar"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ProgressBarBufferExample, decorators: [{
            type: Component,
            args: [{ selector: 'progress-bar-buffer-example', standalone: true, imports: [MatProgressBarModule], template: "<mat-progress-bar mode=\"buffer\"></mat-progress-bar>\r\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtYmFyLWJ1ZmZlci1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci1idWZmZXIvcHJvZ3Jlc3MtYmFyLWJ1ZmZlci1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci1idWZmZXIvcHJvZ3Jlc3MtYmFyLWJ1ZmZlci1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQzs7O0FBRXBFOztHQUVHO0FBT0gsTUFBTSxPQUFPLHdCQUF3Qjs4R0FBeEIsd0JBQXdCO2tHQUF4Qix3QkFBd0IsdUZDWnJDLDJEQUNBLDJDRFNZLG9CQUFvQjs7MkZBRW5CLHdCQUF3QjtrQkFOcEMsU0FBUzsrQkFDRSw2QkFBNkIsY0FFM0IsSUFBSSxXQUNQLENBQUMsb0JBQW9CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7TWF0UHJvZ3Jlc3NCYXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLWJhcic7XHJcblxyXG4vKipcclxuICogQHRpdGxlIEJ1ZmZlciBwcm9ncmVzcy1iYXJcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncHJvZ3Jlc3MtYmFyLWJ1ZmZlci1leGFtcGxlJyxcclxuICB0ZW1wbGF0ZVVybDogJ3Byb2dyZXNzLWJhci1idWZmZXItZXhhbXBsZS5odG1sJyxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFtNYXRQcm9ncmVzc0Jhck1vZHVsZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0JhckJ1ZmZlckV4YW1wbGUge31cclxuIiwiPG1hdC1wcm9ncmVzcy1iYXIgbW9kZT1cImJ1ZmZlclwiPjwvbWF0LXByb2dyZXNzLWJhcj5cclxuIl19