import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/progress-spinner";
/**
 * @title Basic progress-spinner
 */
export class ProgressSpinnerOverviewExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ProgressSpinnerOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: ProgressSpinnerOverviewExample, isStandalone: true, selector: "progress-spinner-overview-example", ngImport: i0, template: "<mat-spinner></mat-spinner>\r\n", dependencies: [{ kind: "ngmodule", type: MatProgressSpinnerModule }, { kind: "component", type: i1.MatProgressSpinner, selector: "mat-progress-spinner, mat-spinner", inputs: ["color", "mode", "value", "diameter", "strokeWidth"], exportAs: ["matProgressSpinner"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ProgressSpinnerOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'progress-spinner-overview-example', standalone: true, imports: [MatProgressSpinnerModule], template: "<mat-spinner></mat-spinner>\r\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3Mtc3Bpbm5lci1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvcHJvZ3Jlc3Mtc3Bpbm5lci9wcm9ncmVzcy1zcGlubmVyLW92ZXJ2aWV3L3Byb2dyZXNzLXNwaW5uZXItb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Byb2dyZXNzLXNwaW5uZXIvcHJvZ3Jlc3Mtc3Bpbm5lci1vdmVydmlldy9wcm9ncmVzcy1zcGlubmVyLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLG9DQUFvQyxDQUFDOzs7QUFFNUU7O0dBRUc7QUFPSCxNQUFNLE9BQU8sOEJBQThCOzhHQUE5Qiw4QkFBOEI7a0dBQTlCLDhCQUE4Qiw2RkNaM0MsaUNBQ0EsMkNEU1ksd0JBQXdCOzsyRkFFdkIsOEJBQThCO2tCQU4xQyxTQUFTOytCQUNFLG1DQUFtQyxjQUVqQyxJQUFJLFdBQ1AsQ0FBQyx3QkFBd0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLXNwaW5uZXInO1xyXG5cclxuLyoqXHJcbiAqIEB0aXRsZSBCYXNpYyBwcm9ncmVzcy1zcGlubmVyXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3Byb2dyZXNzLXNwaW5uZXItb3ZlcnZpZXctZXhhbXBsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICdwcm9ncmVzcy1zcGlubmVyLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2dyZXNzU3Bpbm5lck92ZXJ2aWV3RXhhbXBsZSB7fVxyXG4iLCI8bWF0LXNwaW5uZXI+PC9tYXQtc3Bpbm5lcj5cclxuIl19