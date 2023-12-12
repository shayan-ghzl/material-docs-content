import * as i0 from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import * as i1 from '@angular/cdk/portal';
import { ComponentPortal, TemplatePortal, DomPortal, PortalModule } from '@angular/cdk/portal';

/**
 * @title Portal overview
 */
class CdkPortalOverviewExample {
    constructor(_viewContainerRef) {
        this._viewContainerRef = _viewContainerRef;
    }
    ngAfterViewInit() {
        this.componentPortal = new ComponentPortal(ComponentPortalExample);
        this.templatePortal = new TemplatePortal(this.templatePortalContent, this._viewContainerRef);
        this.domPortal = new DomPortal(this.domPortalContent);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkPortalOverviewExample, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: CdkPortalOverviewExample, isStandalone: true, selector: "cdk-portal-overview-example", viewQueries: [{ propertyName: "templatePortalContent", first: true, predicate: ["templatePortalContent"], descendants: true }, { propertyName: "domPortalContent", first: true, predicate: ["domPortalContent"], descendants: true }], ngImport: i0, template: "<h2>The portal outlet is below:</h2>\r\n<div class=\"example-portal-outlet\">\r\n  <ng-template [cdkPortalOutlet]=\"selectedPortal\"></ng-template>\r\n</div>\r\n<ng-template #templatePortalContent>Hello, this is a template portal</ng-template>\r\n\r\n<button (click)=\"selectedPortal = componentPortal\">Render component portal</button>\r\n<button (click)=\"selectedPortal = templatePortal\">Render template portal</button>\r\n<button (click)=\"selectedPortal = domPortal\">Render DOM portal</button>\r\n\r\n<div #domPortalContent>Hello, this is a DOM portal</div>\r\n", styles: [".example-portal-outlet {\r\n  margin-bottom: 10px;\r\n  padding: 10px;\r\n  border: 1px dashed black;\r\n  width: 250px;\r\n  height: 250px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: PortalModule }, { kind: "directive", type: i1.CdkPortalOutlet, selector: "[cdkPortalOutlet]", inputs: ["cdkPortalOutlet"], outputs: ["attached"], exportAs: ["cdkPortalOutlet"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkPortalOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-portal-overview-example', standalone: true, imports: [PortalModule], template: "<h2>The portal outlet is below:</h2>\r\n<div class=\"example-portal-outlet\">\r\n  <ng-template [cdkPortalOutlet]=\"selectedPortal\"></ng-template>\r\n</div>\r\n<ng-template #templatePortalContent>Hello, this is a template portal</ng-template>\r\n\r\n<button (click)=\"selectedPortal = componentPortal\">Render component portal</button>\r\n<button (click)=\"selectedPortal = templatePortal\">Render template portal</button>\r\n<button (click)=\"selectedPortal = domPortal\">Render DOM portal</button>\r\n\r\n<div #domPortalContent>Hello, this is a DOM portal</div>\r\n", styles: [".example-portal-outlet {\r\n  margin-bottom: 10px;\r\n  padding: 10px;\r\n  border: 1px dashed black;\r\n  width: 250px;\r\n  height: 250px;\r\n}\r\n"] }]
        }], ctorParameters: () => [{ type: i0.ViewContainerRef }], propDecorators: { templatePortalContent: [{
                type: ViewChild,
                args: ['templatePortalContent']
            }], domPortalContent: [{
                type: ViewChild,
                args: ['domPortalContent']
            }] } });
class ComponentPortalExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ComponentPortalExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: ComponentPortalExample, isStandalone: true, selector: "component-portal-example", ngImport: i0, template: 'Hello, this is a component portal', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ComponentPortalExample, decorators: [{
            type: Component,
            args: [{
                    selector: 'component-portal-example',
                    template: 'Hello, this is a component portal',
                    standalone: true,
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { CdkPortalOverviewExample, ComponentPortalExample };
//# sourceMappingURL=portal.mjs.map
