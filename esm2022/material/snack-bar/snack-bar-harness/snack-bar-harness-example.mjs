import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/snack-bar";
/**
 * @title Testing with MatSnackBarHarness
 */
export class SnackBarHarnessExample {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    open(message, action = '', config) {
        return this.snackBar.open(message, action, config);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SnackBarHarnessExample, deps: [{ token: i1.MatSnackBar }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: SnackBarHarnessExample, isStandalone: true, selector: "snack-bar-harness-example", ngImport: i0, template: "<ng-template>Hello from the snackbar</ng-template>\r\n" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SnackBarHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'snack-bar-harness-example', standalone: true, template: "<ng-template>Hello from the snackbar</ng-template>\r\n" }]
        }], ctorParameters: () => [{ type: i1.MatSnackBar }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NuYWNrLWJhci9zbmFjay1iYXItaGFybmVzcy9zbmFjay1iYXItaGFybmVzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc25hY2stYmFyL3NuYWNrLWJhci1oYXJuZXNzL3NuYWNrLWJhci1oYXJuZXNzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQW9CLE1BQU0sNkJBQTZCLENBQUM7OztBQUUzRTs7R0FFRztBQU1ILE1BQU0sT0FBTyxzQkFBc0I7SUFDakMsWUFBcUIsUUFBcUI7UUFBckIsYUFBUSxHQUFSLFFBQVEsQ0FBYTtJQUFHLENBQUM7SUFFOUMsSUFBSSxDQUFDLE9BQWUsRUFBRSxNQUFNLEdBQUcsRUFBRSxFQUFFLE1BQTBCO1FBQzNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNyRCxDQUFDOzhHQUxVLHNCQUFzQjtrR0FBdEIsc0JBQXNCLHFGQ1huQyx3REFDQTs7MkZEVWEsc0JBQXNCO2tCQUxsQyxTQUFTOytCQUNFLDJCQUEyQixjQUV6QixJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge01hdFNuYWNrQmFyLCBNYXRTbmFja0JhckNvbmZpZ30gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcclxuXHJcbi8qKlxyXG4gKiBAdGl0bGUgVGVzdGluZyB3aXRoIE1hdFNuYWNrQmFySGFybmVzc1xyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzbmFjay1iYXItaGFybmVzcy1leGFtcGxlJyxcclxuICB0ZW1wbGF0ZVVybDogJ3NuYWNrLWJhci1oYXJuZXNzLWV4YW1wbGUuaHRtbCcsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNuYWNrQmFySGFybmVzc0V4YW1wbGUge1xyXG4gIGNvbnN0cnVjdG9yKHJlYWRvbmx5IHNuYWNrQmFyOiBNYXRTbmFja0Jhcikge31cclxuXHJcbiAgb3BlbihtZXNzYWdlOiBzdHJpbmcsIGFjdGlvbiA9ICcnLCBjb25maWc/OiBNYXRTbmFja0JhckNvbmZpZykge1xyXG4gICAgcmV0dXJuIHRoaXMuc25hY2tCYXIub3BlbihtZXNzYWdlLCBhY3Rpb24sIGNvbmZpZyk7XHJcbiAgfVxyXG59XHJcbiIsIjxuZy10ZW1wbGF0ZT5IZWxsbyBmcm9tIHRoZSBzbmFja2JhcjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==