import * as i0 from '@angular/core';
import { Component } from '@angular/core';
import * as i1 from '@angular/cdk/overlay';
import { OverlayModule } from '@angular/cdk/overlay';

/**
 * @title Overlay basic example
 */
class CdkOverlayBasicExample {
    constructor() {
        this.isOpen = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkOverlayBasicExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: CdkOverlayBasicExample, isStandalone: true, selector: "cdk-overlay-basic-example", ngImport: i0, template: "<!-- This button triggers the overlay and is it's origin -->\r\n<button (click)=\"isOpen = !isOpen\" type=\"button\" cdkOverlayOrigin #trigger=\"cdkOverlayOrigin\">\r\n  {{isOpen ? \"Close\" : \"Open\"}}\r\n</button>\r\n\r\n<!-- This template displays the overlay content and is connected to the button -->\r\n<ng-template\r\n  cdkConnectedOverlay\r\n  [cdkConnectedOverlayOrigin]=\"trigger\"\r\n  [cdkConnectedOverlayOpen]=\"isOpen\"\r\n>\r\n  <ul class=\"example-list\">\r\n    <li>Item 1</li>\r\n    <li>Item 2</li>\r\n    <li>Item 3</li>\r\n  </ul>\r\n</ng-template>\r\n", styles: [".example-list {\r\n  width: 100px;\r\n  border: solid 1px #ccc;\r\n  border-radius: 5px;\r\n  background: #fff;\r\n  text-align: center;\r\n  padding: 10px;\r\n  margin: 0;\r\n}\r\n\r\n.example-list > li {\r\n  list-style-type: none;\r\n  border-bottom: solid 1px #8b8b8b;\r\n  padding: 8px 0;\r\n}\r\n\r\n.example-list > li:last-child {\r\n  border-bottom: none;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: OverlayModule }, { kind: "directive", type: i1.CdkConnectedOverlay, selector: "[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]", inputs: ["cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayPositionStrategy", "cdkConnectedOverlayOffsetX", "cdkConnectedOverlayOffsetY", "cdkConnectedOverlayWidth", "cdkConnectedOverlayHeight", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayMinHeight", "cdkConnectedOverlayBackdropClass", "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayViewportMargin", "cdkConnectedOverlayScrollStrategy", "cdkConnectedOverlayOpen", "cdkConnectedOverlayDisableClose", "cdkConnectedOverlayTransformOriginOn", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayLockPosition", "cdkConnectedOverlayFlexibleDimensions", "cdkConnectedOverlayGrowAfterOpen", "cdkConnectedOverlayPush", "cdkConnectedOverlayDisposeOnNavigation"], outputs: ["backdropClick", "positionChange", "attach", "detach", "overlayKeydown", "overlayOutsideClick"], exportAs: ["cdkConnectedOverlay"] }, { kind: "directive", type: i1.CdkOverlayOrigin, selector: "[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]", exportAs: ["cdkOverlayOrigin"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkOverlayBasicExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-overlay-basic-example', standalone: true, imports: [OverlayModule], template: "<!-- This button triggers the overlay and is it's origin -->\r\n<button (click)=\"isOpen = !isOpen\" type=\"button\" cdkOverlayOrigin #trigger=\"cdkOverlayOrigin\">\r\n  {{isOpen ? \"Close\" : \"Open\"}}\r\n</button>\r\n\r\n<!-- This template displays the overlay content and is connected to the button -->\r\n<ng-template\r\n  cdkConnectedOverlay\r\n  [cdkConnectedOverlayOrigin]=\"trigger\"\r\n  [cdkConnectedOverlayOpen]=\"isOpen\"\r\n>\r\n  <ul class=\"example-list\">\r\n    <li>Item 1</li>\r\n    <li>Item 2</li>\r\n    <li>Item 3</li>\r\n  </ul>\r\n</ng-template>\r\n", styles: [".example-list {\r\n  width: 100px;\r\n  border: solid 1px #ccc;\r\n  border-radius: 5px;\r\n  background: #fff;\r\n  text-align: center;\r\n  padding: 10px;\r\n  margin: 0;\r\n}\r\n\r\n.example-list > li {\r\n  list-style-type: none;\r\n  border-bottom: solid 1px #8b8b8b;\r\n  padding: 8px 0;\r\n}\r\n\r\n.example-list > li:last-child {\r\n  border-bottom: none;\r\n}\r\n"] }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { CdkOverlayBasicExample };
//# sourceMappingURL=overlay.mjs.map
