import { Component, Inject } from '@angular/core';
import { Dialog, DIALOG_DATA, DialogModule } from '@angular/cdk/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/dialog";
/**
 * @title Injecting data when opening a dialog
 */
export class CdkDialogDataExample {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog() {
        this.dialog.open(CdkDialogDataExampleDialog, {
            minWidth: '300px',
            data: {
                animal: 'panda',
            },
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkDialogDataExample, deps: [{ token: i1.Dialog }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: CdkDialogDataExample, isStandalone: true, selector: "cdk-dialog-data-example", ngImport: i0, template: "<button (click)=\"openDialog()\">Open dialog</button>\r\n", dependencies: [{ kind: "ngmodule", type: DialogModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkDialogDataExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-dialog-data-example', standalone: true, imports: [DialogModule], template: "<button (click)=\"openDialog()\">Open dialog</button>\r\n" }]
        }], ctorParameters: () => [{ type: i1.Dialog }] });
export class CdkDialogDataExampleDialog {
    constructor(data) {
        this.data = data;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkDialogDataExampleDialog, deps: [{ token: DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: CdkDialogDataExampleDialog, isStandalone: true, selector: "cdk-dialog-data-example-dialog", ngImport: i0, template: "<h1>Favorite Animal</h1>\r\n<div>\r\n  My favorite animal is:\r\n  <ul>\r\n    <li>\r\n      @if (data.animal === 'panda') {\r\n        <span>&#10003;</span>\r\n      } Panda\r\n    </li>\r\n    <li>\r\n      @if (data.animal === 'unicorn') {\r\n        <span>&#10003;</span>\r\n      } Unicorn\r\n    </li>\r\n    <li>\r\n      @if (data.animal === 'lion') {\r\n        <span>&#10003;</span>\r\n      } Lion\r\n    </li>\r\n  </ul>\r\n</div>\r\n", styles: [":host {\r\n  display: block;\r\n  background: #fff;\r\n  border-radius: 8px;\r\n  padding: 8px 16px;\r\n}\r\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkDialogDataExampleDialog, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-dialog-data-example-dialog', standalone: true, template: "<h1>Favorite Animal</h1>\r\n<div>\r\n  My favorite animal is:\r\n  <ul>\r\n    <li>\r\n      @if (data.animal === 'panda') {\r\n        <span>&#10003;</span>\r\n      } Panda\r\n    </li>\r\n    <li>\r\n      @if (data.animal === 'unicorn') {\r\n        <span>&#10003;</span>\r\n      } Unicorn\r\n    </li>\r\n    <li>\r\n      @if (data.animal === 'lion') {\r\n        <span>&#10003;</span>\r\n      } Lion\r\n    </li>\r\n  </ul>\r\n</div>\r\n", styles: [":host {\r\n  display: block;\r\n  background: #fff;\r\n  border-radius: 8px;\r\n  padding: 8px 16px;\r\n}\r\n"] }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [DIALOG_DATA]
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRpYWxvZy1kYXRhLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvZGlhbG9nL2Nkay1kaWFsb2ctZGF0YS9jZGstZGlhbG9nLWRhdGEtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kaWFsb2cvY2RrLWRpYWxvZy1kYXRhL2Nkay1kaWFsb2ctZGF0YS1leGFtcGxlLmh0bWwiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvZGlhbG9nL2Nkay1kaWFsb2ctZGF0YS9jZGstZGlhbG9nLWRhdGEtZXhhbXBsZS1kaWFsb2cuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQzs7O0FBTXRFOztHQUVHO0FBT0gsTUFBTSxPQUFPLG9CQUFvQjtJQUMvQixZQUFtQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFHLENBQUM7SUFFckMsVUFBVTtRQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDBCQUEwQixFQUFFO1lBQzNDLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLElBQUksRUFBRTtnQkFDSixNQUFNLEVBQUUsT0FBTzthQUNoQjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7OEdBVlUsb0JBQW9CO2tHQUFwQixvQkFBb0IsbUZDaEJqQywyREFDQSwyQ0RhWSxZQUFZOzsyRkFFWCxvQkFBb0I7a0JBTmhDLFNBQVM7K0JBQ0UseUJBQXlCLGNBRXZCLElBQUksV0FDUCxDQUFDLFlBQVksQ0FBQzs7QUFxQnpCLE1BQU0sT0FBTywwQkFBMEI7SUFDckMsWUFBd0MsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFHLENBQUM7OEdBRGpELDBCQUEwQixrQkFDakIsV0FBVztrR0FEcEIsMEJBQTBCLDBGRW5DdkMsZ2NBcUJBOzsyRkZjYSwwQkFBMEI7a0JBTnRDLFNBQVM7K0JBQ0UsZ0NBQWdDLGNBRzlCLElBQUk7OzBCQUdILE1BQU07MkJBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0RpYWxvZywgRElBTE9HX0RBVEEsIERpYWxvZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RpYWxvZyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ0RhdGEge1xyXG4gIGFuaW1hbDogJ3BhbmRhJyB8ICd1bmljb3JuJyB8ICdsaW9uJztcclxufVxyXG5cclxuLyoqXHJcbiAqIEB0aXRsZSBJbmplY3RpbmcgZGF0YSB3aGVuIG9wZW5pbmcgYSBkaWFsb2dcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY2RrLWRpYWxvZy1kYXRhLWV4YW1wbGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnY2RrLWRpYWxvZy1kYXRhLWV4YW1wbGUuaHRtbCcsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbRGlhbG9nTW9kdWxlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENka0RpYWxvZ0RhdGFFeGFtcGxlIHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nOiBEaWFsb2cpIHt9XHJcblxyXG4gIG9wZW5EaWFsb2coKSB7XHJcbiAgICB0aGlzLmRpYWxvZy5vcGVuKENka0RpYWxvZ0RhdGFFeGFtcGxlRGlhbG9nLCB7XHJcbiAgICAgIG1pbldpZHRoOiAnMzAwcHgnLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgYW5pbWFsOiAncGFuZGEnLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Nkay1kaWFsb2ctZGF0YS1leGFtcGxlLWRpYWxvZycsXHJcbiAgdGVtcGxhdGVVcmw6ICdjZGstZGlhbG9nLWRhdGEtZXhhbXBsZS1kaWFsb2cuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY2RrLWRpYWxvZy1kYXRhLWV4YW1wbGUtZGlhbG9nLmNzcyddLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDZGtEaWFsb2dEYXRhRXhhbXBsZURpYWxvZyB7XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IERpYWxvZ0RhdGEpIHt9XHJcbn1cclxuIiwiPGJ1dHRvbiAoY2xpY2spPVwib3BlbkRpYWxvZygpXCI+T3BlbiBkaWFsb2c8L2J1dHRvbj5cclxuIiwiPGgxPkZhdm9yaXRlIEFuaW1hbDwvaDE+XHJcbjxkaXY+XHJcbiAgTXkgZmF2b3JpdGUgYW5pbWFsIGlzOlxyXG4gIDx1bD5cclxuICAgIDxsaT5cclxuICAgICAgQGlmIChkYXRhLmFuaW1hbCA9PT0gJ3BhbmRhJykge1xyXG4gICAgICAgIDxzcGFuPiYjMTAwMDM7PC9zcGFuPlxyXG4gICAgICB9IFBhbmRhXHJcbiAgICA8L2xpPlxyXG4gICAgPGxpPlxyXG4gICAgICBAaWYgKGRhdGEuYW5pbWFsID09PSAndW5pY29ybicpIHtcclxuICAgICAgICA8c3Bhbj4mIzEwMDAzOzwvc3Bhbj5cclxuICAgICAgfSBVbmljb3JuXHJcbiAgICA8L2xpPlxyXG4gICAgPGxpPlxyXG4gICAgICBAaWYgKGRhdGEuYW5pbWFsID09PSAnbGlvbicpIHtcclxuICAgICAgICA8c3Bhbj4mIzEwMDAzOzwvc3Bhbj5cclxuICAgICAgfSBMaW9uXHJcbiAgICA8L2xpPlxyXG4gIDwvdWw+XHJcbjwvZGl2PlxyXG4iXX0=