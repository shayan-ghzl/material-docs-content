import * as i0 from '@angular/core';
import { Component, Inject } from '@angular/core';
import * as i1 from '@angular/cdk/dialog';
import { DialogModule, DIALOG_DATA } from '@angular/cdk/dialog';
import * as i2 from '@angular/forms';
import { FormsModule } from '@angular/forms';

/**
 * @title Injecting data when opening a dialog
 */
class CdkDialogDataExample {
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
class CdkDialogDataExampleDialog {
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

/**
 * @title CDK Dialog Overview
 */
class CdkDialogOverviewExample {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog() {
        const dialogRef = this.dialog.open(CdkDialogOverviewExampleDialog, {
            width: '250px',
            data: { name: this.name, animal: this.animal },
        });
        dialogRef.closed.subscribe(result => {
            console.log('The dialog was closed');
            this.animal = result;
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkDialogOverviewExample, deps: [{ token: i1.Dialog }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: CdkDialogOverviewExample, isStandalone: true, selector: "cdk-dialog-overview-example", ngImport: i0, template: "<ol>\r\n  <li>\r\n    <label id=\"dialog-user-name\">What's your name?</label>\r\n    <input for=\"dialog-user-name\" [(ngModel)]=\"name\">\r\n  </li>\r\n  <li>\r\n    <button (click)=\"openDialog()\">Pick one</button>\r\n  </li>\r\n  @if (animal) {\r\n    <li>\r\n      You chose: <em>{{animal}}</em>\r\n    </li>\r\n  }\r\n</ol>\r\n", dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: DialogModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkDialogOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-dialog-overview-example', standalone: true, imports: [FormsModule, DialogModule], template: "<ol>\r\n  <li>\r\n    <label id=\"dialog-user-name\">What's your name?</label>\r\n    <input for=\"dialog-user-name\" [(ngModel)]=\"name\">\r\n  </li>\r\n  <li>\r\n    <button (click)=\"openDialog()\">Pick one</button>\r\n  </li>\r\n  @if (animal) {\r\n    <li>\r\n      You chose: <em>{{animal}}</em>\r\n    </li>\r\n  }\r\n</ol>\r\n" }]
        }], ctorParameters: () => [{ type: i1.Dialog }] });
class CdkDialogOverviewExampleDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkDialogOverviewExampleDialog, deps: [{ token: i1.DialogRef }, { token: DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: CdkDialogOverviewExampleDialog, isStandalone: true, selector: "cdk-dialog-overview-example-dialog", ngImport: i0, template: "<h1>Hi {{data.name}}</h1>\r\n<div>\r\n  <label id=\"favorite-animal\">What's your favorite animal?</label>\r\n  <input for=\"favorite-animal\" [(ngModel)]=\"data.animal\" placeholder=\"Enter your name\">\r\n</div>\r\n<div>\r\n  <button (click)=\"dialogRef.close(data.animal)\">OK</button>\r\n  <button (click)=\"dialogRef.close()\">Cancel</button>\r\n</div>\r\n", styles: [":host {\r\n  display: block;\r\n  background: #fff;\r\n  border-radius: 8px;\r\n  padding: 8px 16px 16px;\r\n}\r\n\r\ninput {\r\n  margin: 8px 0;\r\n}\r\n\r\nbutton + button {\r\n  margin-left: 8px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkDialogOverviewExampleDialog, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-dialog-overview-example-dialog', standalone: true, imports: [FormsModule], template: "<h1>Hi {{data.name}}</h1>\r\n<div>\r\n  <label id=\"favorite-animal\">What's your favorite animal?</label>\r\n  <input for=\"favorite-animal\" [(ngModel)]=\"data.animal\" placeholder=\"Enter your name\">\r\n</div>\r\n<div>\r\n  <button (click)=\"dialogRef.close(data.animal)\">OK</button>\r\n  <button (click)=\"dialogRef.close()\">Cancel</button>\r\n</div>\r\n", styles: [":host {\r\n  display: block;\r\n  background: #fff;\r\n  border-radius: 8px;\r\n  padding: 8px 16px 16px;\r\n}\r\n\r\ninput {\r\n  margin: 8px 0;\r\n}\r\n\r\nbutton + button {\r\n  margin-left: 8px;\r\n}\r\n"] }]
        }], ctorParameters: () => [{ type: i1.DialogRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DIALOG_DATA]
                }] }] });

/**
 * @title CDK Dialog Styling
 */
class CdkDialogStylingExample {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog() {
        this.dialog.open(CdkDialogStylingExampleDialog);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkDialogStylingExample, deps: [{ token: i1.Dialog }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: CdkDialogStylingExample, isStandalone: true, selector: "cdk-dialog-styling-example", ngImport: i0, template: "<button (click)=\"openDialog()\">Open custom dialog</button>\r\n", dependencies: [{ kind: "ngmodule", type: DialogModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkDialogStylingExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-dialog-styling-example', standalone: true, imports: [DialogModule], template: "<button (click)=\"openDialog()\">Open custom dialog</button>\r\n" }]
        }], ctorParameters: () => [{ type: i1.Dialog }] });
class CdkDialogStylingExampleDialog {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkDialogStylingExampleDialog, deps: [{ token: i1.DialogRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: CdkDialogStylingExampleDialog, isStandalone: true, selector: "cdk-dialog-styling-example-dialog", ngImport: i0, template: "Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It's not a story the Jedi\r\nwould tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so\r\nwise he could use the Force to influence the midichlorians to create life\u2026 He had such a knowledge\r\nof the dark side that he could even keep the ones he cared about from dying. The dark side of the\r\nForce is a pathway to many abilities some consider to be unnatural. He became so powerful\u2026 the only\r\nthing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately,\r\nhe taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic.\r\nHe could save others from death, but not himself.\r\n\r\n<hr>\r\n\r\n<button (click)=\"dialogRef.close()\">Close</button>\r\n", styles: [":host {\r\n  display: block;\r\n  background: #fff;\r\n  border-radius: 8px;\r\n  padding: 16px;\r\n  max-width: 500px;\r\n  animation: custom-dialog-enter 1s ease;\r\n}\r\n\r\n@keyframes custom-dialog-enter {\r\n  from {\r\n    transform: scale(0) rotate(360deg);\r\n  }\r\n\r\n  to {\r\n    transform: none;\r\n  }\r\n}\r\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkDialogStylingExampleDialog, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-dialog-styling-example-dialog', standalone: true, template: "Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It's not a story the Jedi\r\nwould tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so\r\nwise he could use the Force to influence the midichlorians to create life\u2026 He had such a knowledge\r\nof the dark side that he could even keep the ones he cared about from dying. The dark side of the\r\nForce is a pathway to many abilities some consider to be unnatural. He became so powerful\u2026 the only\r\nthing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately,\r\nhe taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic.\r\nHe could save others from death, but not himself.\r\n\r\n<hr>\r\n\r\n<button (click)=\"dialogRef.close()\">Close</button>\r\n", styles: [":host {\r\n  display: block;\r\n  background: #fff;\r\n  border-radius: 8px;\r\n  padding: 16px;\r\n  max-width: 500px;\r\n  animation: custom-dialog-enter 1s ease;\r\n}\r\n\r\n@keyframes custom-dialog-enter {\r\n  from {\r\n    transform: scale(0) rotate(360deg);\r\n  }\r\n\r\n  to {\r\n    transform: none;\r\n  }\r\n}\r\n"] }]
        }], ctorParameters: () => [{ type: i1.DialogRef }] });

/**
 * Generated bundle index. Do not edit.
 */

export { CdkDialogDataExample, CdkDialogDataExampleDialog, CdkDialogOverviewExample, CdkDialogOverviewExampleDialog, CdkDialogStylingExample, CdkDialogStylingExampleDialog };
//# sourceMappingURL=dialog.mjs.map
