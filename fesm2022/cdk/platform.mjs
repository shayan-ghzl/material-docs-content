import * as i0 from '@angular/core';
import { Component } from '@angular/core';
import * as i1 from '@angular/cdk/platform';
import { getSupportedInputTypes, supportsPassiveEventListeners, supportsScrollBehavior } from '@angular/cdk/platform';

/**
 * @title Platform overview
 */
class CdkPlatformOverviewExample {
    constructor(platform) {
        this.platform = platform;
        this.supportedInputTypes = Array.from(getSupportedInputTypes()).join(', ');
        this.supportsPassiveEventListeners = supportsPassiveEventListeners();
        this.supportsScrollBehavior = supportsScrollBehavior();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkPlatformOverviewExample, deps: [{ token: i1.Platform }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: CdkPlatformOverviewExample, isStandalone: true, selector: "cdk-platform-overview-example", ngImport: i0, template: "<h2>Platform information:</h2>\r\n<p>Is Android: {{platform.ANDROID}}</p>\r\n<p>Is iOS: {{platform.IOS}}</p>\r\n<p>Is Firefox: {{platform.FIREFOX}}</p>\r\n<p>Is Blink: {{platform.BLINK}}</p>\r\n<p>Is Webkit: {{platform.WEBKIT}}</p>\r\n<p>Is Trident: {{platform.TRIDENT}}</p>\r\n<p>Is Edge: {{platform.EDGE}}</p>\r\n<p>Is Safari: {{platform.SAFARI}}</p>\r\n<p>Supported input types: {{supportedInputTypes}}</p>\r\n<p>Supports passive event listeners: {{supportsPassiveEventListeners}}</p>\r\n<p>Supports scroll behavior: {{supportsScrollBehavior}}</p>\r\n" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkPlatformOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-platform-overview-example', standalone: true, template: "<h2>Platform information:</h2>\r\n<p>Is Android: {{platform.ANDROID}}</p>\r\n<p>Is iOS: {{platform.IOS}}</p>\r\n<p>Is Firefox: {{platform.FIREFOX}}</p>\r\n<p>Is Blink: {{platform.BLINK}}</p>\r\n<p>Is Webkit: {{platform.WEBKIT}}</p>\r\n<p>Is Trident: {{platform.TRIDENT}}</p>\r\n<p>Is Edge: {{platform.EDGE}}</p>\r\n<p>Is Safari: {{platform.SAFARI}}</p>\r\n<p>Supported input types: {{supportedInputTypes}}</p>\r\n<p>Supports passive event listeners: {{supportsPassiveEventListeners}}</p>\r\n<p>Supports scroll behavior: {{supportsScrollBehavior}}</p>\r\n" }]
        }], ctorParameters: () => [{ type: i1.Platform }] });

/**
 * Generated bundle index. Do not edit.
 */

export { CdkPlatformOverviewExample };
//# sourceMappingURL=platform.mjs.map
