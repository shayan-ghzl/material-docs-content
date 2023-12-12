import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent, } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/button";
/**
 * @title Injecting data when opening a dialog
 */
export class DialogDataExample {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog() {
        this.dialog.open(DialogDataExampleDialog, {
            data: {
                animal: 'panda',
            },
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DialogDataExample, deps: [{ token: i1.MatDialog }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: DialogDataExample, isStandalone: true, selector: "dialog-data-example", ngImport: i0, template: "<button mat-button (click)=\"openDialog()\">Open dialog</button>\r\n", dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DialogDataExample, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-data-example', standalone: true, imports: [MatButtonModule], template: "<button mat-button (click)=\"openDialog()\">Open dialog</button>\r\n" }]
        }], ctorParameters: () => [{ type: i1.MatDialog }] });
export class DialogDataExampleDialog {
    constructor(data) {
        this.data = data;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DialogDataExampleDialog, deps: [{ token: MAT_DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: DialogDataExampleDialog, isStandalone: true, selector: "dialog-data-example-dialog", ngImport: i0, template: "<h1 mat-dialog-title>Favorite Animal</h1>\r\n<div mat-dialog-content>\r\n  My favorite animal is:\r\n  <ul>\r\n    <li>\r\n      @if (data.animal === 'panda') {\r\n        <span>&#10003;</span>\r\n      } Panda\r\n    </li>\r\n    <li>\r\n      @if (data.animal === 'unicorn') {\r\n        <span>&#10003;</span>\r\n      } Unicorn\r\n    </li>\r\n    <li>\r\n      @if (data.animal === 'lion') {\r\n        <span>&#10003;</span>\r\n      } Lion\r\n    </li>\r\n  </ul>\r\n</div>\r\n", dependencies: [{ kind: "directive", type: MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { kind: "directive", type: MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DialogDataExampleDialog, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-data-example-dialog', standalone: true, imports: [MatDialogTitle, MatDialogContent], template: "<h1 mat-dialog-title>Favorite Animal</h1>\r\n<div mat-dialog-content>\r\n  My favorite animal is:\r\n  <ul>\r\n    <li>\r\n      @if (data.animal === 'panda') {\r\n        <span>&#10003;</span>\r\n      } Panda\r\n    </li>\r\n    <li>\r\n      @if (data.animal === 'unicorn') {\r\n        <span>&#10003;</span>\r\n      } Unicorn\r\n    </li>\r\n    <li>\r\n      @if (data.animal === 'lion') {\r\n        <span>&#10003;</span>\r\n      } Lion\r\n    </li>\r\n  </ul>\r\n</div>\r\n" }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWRhdGEtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RpYWxvZy9kaWFsb2ctZGF0YS9kaWFsb2ctZGF0YS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1kYXRhL2RpYWxvZy1kYXRhLWV4YW1wbGUuaHRtbCIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RpYWxvZy9kaWFsb2ctZGF0YS9kaWFsb2ctZGF0YS1leGFtcGxlLWRpYWxvZy5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFDTCxTQUFTLEVBQ1QsZUFBZSxFQUNmLGNBQWMsRUFDZCxnQkFBZ0IsR0FDakIsTUFBTSwwQkFBMEIsQ0FBQztBQUNsQyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFNekQ7O0dBRUc7QUFPSCxNQUFNLE9BQU8saUJBQWlCO0lBQzVCLFlBQW1CLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7SUFBRyxDQUFDO0lBRXhDLFVBQVU7UUFDUixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtZQUN4QyxJQUFJLEVBQUU7Z0JBQ0osTUFBTSxFQUFFLE9BQU87YUFDaEI7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDOzhHQVRVLGlCQUFpQjtrR0FBakIsaUJBQWlCLCtFQ3RCOUIsc0VBQ0EsMkNEbUJZLGVBQWU7OzJGQUVkLGlCQUFpQjtrQkFON0IsU0FBUzsrQkFDRSxxQkFBcUIsY0FFbkIsSUFBSSxXQUNQLENBQUMsZUFBZSxDQUFDOztBQW9CNUIsTUFBTSxPQUFPLHVCQUF1QjtJQUNsQyxZQUE0QyxJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUcsQ0FBQzs4R0FEckQsdUJBQXVCLGtCQUNkLGVBQWU7a0dBRHhCLHVCQUF1QixzRkV4Q3BDLG9lQXFCQSw0Q0ZpQlksY0FBYywrSEFBRSxnQkFBZ0I7OzJGQUUvQix1QkFBdUI7a0JBTm5DLFNBQVM7K0JBQ0UsNEJBQTRCLGNBRTFCLElBQUksV0FDUCxDQUFDLGNBQWMsRUFBRSxnQkFBZ0IsQ0FBQzs7MEJBRzlCLE1BQU07MkJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIE1hdERpYWxvZyxcclxuICBNQVRfRElBTE9HX0RBVEEsXHJcbiAgTWF0RGlhbG9nVGl0bGUsXHJcbiAgTWF0RGlhbG9nQ29udGVudCxcclxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nRGF0YSB7XHJcbiAgYW5pbWFsOiAncGFuZGEnIHwgJ3VuaWNvcm4nIHwgJ2xpb24nO1xyXG59XHJcblxyXG4vKipcclxuICogQHRpdGxlIEluamVjdGluZyBkYXRhIHdoZW4gb3BlbmluZyBhIGRpYWxvZ1xyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdkaWFsb2ctZGF0YS1leGFtcGxlJyxcclxuICB0ZW1wbGF0ZVVybDogJ2RpYWxvZy1kYXRhLWV4YW1wbGUuaHRtbCcsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbTWF0QnV0dG9uTW9kdWxlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIERpYWxvZ0RhdGFFeGFtcGxlIHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2cpIHt9XHJcblxyXG4gIG9wZW5EaWFsb2coKSB7XHJcbiAgICB0aGlzLmRpYWxvZy5vcGVuKERpYWxvZ0RhdGFFeGFtcGxlRGlhbG9nLCB7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBhbmltYWw6ICdwYW5kYScsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZGlhbG9nLWRhdGEtZXhhbXBsZS1kaWFsb2cnLFxyXG4gIHRlbXBsYXRlVXJsOiAnZGlhbG9nLWRhdGEtZXhhbXBsZS1kaWFsb2cuaHRtbCcsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbTWF0RGlhbG9nVGl0bGUsIE1hdERpYWxvZ0NvbnRlbnRdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGlhbG9nRGF0YUV4YW1wbGVEaWFsb2cge1xyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogRGlhbG9nRGF0YSkge31cclxufVxyXG4iLCI8YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cIm9wZW5EaWFsb2coKVwiPk9wZW4gZGlhbG9nPC9idXR0b24+XHJcbiIsIjxoMSBtYXQtZGlhbG9nLXRpdGxlPkZhdm9yaXRlIEFuaW1hbDwvaDE+XHJcbjxkaXYgbWF0LWRpYWxvZy1jb250ZW50PlxyXG4gIE15IGZhdm9yaXRlIGFuaW1hbCBpczpcclxuICA8dWw+XHJcbiAgICA8bGk+XHJcbiAgICAgIEBpZiAoZGF0YS5hbmltYWwgPT09ICdwYW5kYScpIHtcclxuICAgICAgICA8c3Bhbj4mIzEwMDAzOzwvc3Bhbj5cclxuICAgICAgfSBQYW5kYVxyXG4gICAgPC9saT5cclxuICAgIDxsaT5cclxuICAgICAgQGlmIChkYXRhLmFuaW1hbCA9PT0gJ3VuaWNvcm4nKSB7XHJcbiAgICAgICAgPHNwYW4+JiMxMDAwMzs8L3NwYW4+XHJcbiAgICAgIH0gVW5pY29yblxyXG4gICAgPC9saT5cclxuICAgIDxsaT5cclxuICAgICAgQGlmIChkYXRhLmFuaW1hbCA9PT0gJ2xpb24nKSB7XHJcbiAgICAgICAgPHNwYW4+JiMxMDAwMzs8L3NwYW4+XHJcbiAgICAgIH0gTGlvblxyXG4gICAgPC9saT5cclxuICA8L3VsPlxyXG48L2Rpdj5cclxuIl19