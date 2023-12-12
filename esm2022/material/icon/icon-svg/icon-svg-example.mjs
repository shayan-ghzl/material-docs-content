import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry, MatIconModule } from '@angular/material/icon';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/icon";
import * as i2 from "@angular/platform-browser";
const THUMBUP_ICON = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.` +
    `44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5` +
    `1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/>
  </svg>
`;
/**
 * @title SVG icons
 */
export class IconSvgExample {
    constructor(iconRegistry, sanitizer) {
        // Note that we provide the icon here as a string literal here due to a limitation in
        // Stackblitz. If you want to provide the icon from a URL, you can use:
        // `iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('icon.svg'));`
        iconRegistry.addSvgIconLiteral('thumbs-up', sanitizer.bypassSecurityTrustHtml(THUMBUP_ICON));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: IconSvgExample, deps: [{ token: i1.MatIconRegistry }, { token: i2.DomSanitizer }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: IconSvgExample, isStandalone: true, selector: "icon-svg-example", ngImport: i0, template: "<mat-icon svgIcon=\"thumbs-up\" aria-hidden=\"false\" aria-label=\"Example thumbs up SVG icon\"></mat-icon>\r\n", dependencies: [{ kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: IconSvgExample, decorators: [{
            type: Component,
            args: [{ selector: 'icon-svg-example', standalone: true, imports: [MatIconModule], template: "<mat-icon svgIcon=\"thumbs-up\" aria-hidden=\"false\" aria-label=\"Example thumbs up SVG icon\"></mat-icon>\r\n" }]
        }], ctorParameters: () => [{ type: i1.MatIconRegistry }, { type: i2.DomSanitizer }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1zdmctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2ljb24vaWNvbi1zdmcvaWNvbi1zdmctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2ljb24vaWNvbi1zdmcvaWNvbi1zdmctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxlQUFlLEVBQUUsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFFdEUsTUFBTSxZQUFZLEdBQ2hCOzs7d0ZBR3NGO0lBQ3RGLGlGQUFpRjtJQUNqRjs7Q0FFRCxDQUFDO0FBRUY7O0dBRUc7QUFPSCxNQUFNLE9BQU8sY0FBYztJQUN6QixZQUFZLFlBQTZCLEVBQUUsU0FBdUI7UUFDaEUscUZBQXFGO1FBQ3JGLHVFQUF1RTtRQUN2RSxnR0FBZ0c7UUFDaEcsWUFBWSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsdUJBQXVCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUMvRixDQUFDOzhHQU5VLGNBQWM7a0dBQWQsY0FBYyw0RUN2QjNCLGlIQUNBLDJDRG9CWSxhQUFhOzsyRkFFWixjQUFjO2tCQU4xQixTQUFTOytCQUNFLGtCQUFrQixjQUVoQixJQUFJLFdBQ1AsQ0FBQyxhQUFhLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7RG9tU2FuaXRpemVyfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHtNYXRJY29uUmVnaXN0cnksIE1hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xyXG5cclxuY29uc3QgVEhVTUJVUF9JQ09OID1cclxuICBgXHJcbiAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNHB4XCIgaGVpZ2h0PVwiMjRweFwiPlxyXG4gICAgPHBhdGggZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiLz5cclxuICAgIDxwYXRoIGQ9XCJNMSAyMWg0VjlIMXYxMnptMjItMTFjMC0xLjEtLjktMi0yLTJoLTYuMzFsLjk1LTQuNTcuMDMtLjMyYzAtLjQxLS4xNy0uNzktLmAgK1xyXG4gIGA0NC0xLjA2TDE0LjE3IDEgNy41OSA3LjU5QzcuMjIgNy45NSA3IDguNDUgNyA5djEwYzAgMS4xLjkgMiAyIDJoOWMuODMgMCAxLjU0LS41YCArXHJcbiAgYDEuODQtMS4yMmwzLjAyLTcuMDVjLjA5LS4yMy4xNC0uNDcuMTQtLjczdi0xLjkxbC0uMDEtLjAxTDIzIDEwelwiLz5cclxuICA8L3N2Zz5cclxuYDtcclxuXHJcbi8qKlxyXG4gKiBAdGl0bGUgU1ZHIGljb25zXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ljb24tc3ZnLWV4YW1wbGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnaWNvbi1zdmctZXhhbXBsZS5odG1sJyxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFtNYXRJY29uTW9kdWxlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEljb25TdmdFeGFtcGxlIHtcclxuICBjb25zdHJ1Y3RvcihpY29uUmVnaXN0cnk6IE1hdEljb25SZWdpc3RyeSwgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHtcclxuICAgIC8vIE5vdGUgdGhhdCB3ZSBwcm92aWRlIHRoZSBpY29uIGhlcmUgYXMgYSBzdHJpbmcgbGl0ZXJhbCBoZXJlIGR1ZSB0byBhIGxpbWl0YXRpb24gaW5cclxuICAgIC8vIFN0YWNrYmxpdHouIElmIHlvdSB3YW50IHRvIHByb3ZpZGUgdGhlIGljb24gZnJvbSBhIFVSTCwgeW91IGNhbiB1c2U6XHJcbiAgICAvLyBgaWNvblJlZ2lzdHJ5LmFkZFN2Z0ljb24oJ3RodW1icy11cCcsIHNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwoJ2ljb24uc3ZnJykpO2BcclxuICAgIGljb25SZWdpc3RyeS5hZGRTdmdJY29uTGl0ZXJhbCgndGh1bWJzLXVwJywgc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKFRIVU1CVVBfSUNPTikpO1xyXG4gIH1cclxufVxyXG4iLCI8bWF0LWljb24gc3ZnSWNvbj1cInRodW1icy11cFwiIGFyaWEtaGlkZGVuPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSB0aHVtYnMgdXAgU1ZHIGljb25cIj48L21hdC1pY29uPlxyXG4iXX0=