import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tooltip";
/**
 * @title Testing with MatTooltipHarness
 */
export class TooltipHarnessExample {
    constructor() {
        this.message = 'Tooltip message';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TooltipHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: TooltipHarnessExample, isStandalone: true, selector: "tooltip-harness-example", ngImport: i0, template: "<button [matTooltip]=\"message\" id=\"one\">Trigger 1</button>\r\n<button matTooltip=\"Static message\" id=\"two\">Trigger 2</button>\r\n", dependencies: [{ kind: "ngmodule", type: MatTooltipModule }, { kind: "directive", type: i1.MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TooltipHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'tooltip-harness-example', standalone: true, imports: [MatTooltipModule], template: "<button [matTooltip]=\"message\" id=\"one\">Trigger 1</button>\r\n<button matTooltip=\"Static message\" id=\"two\">Trigger 2</button>\r\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1oYXJuZXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90b29sdGlwL3Rvb2x0aXAtaGFybmVzcy90b29sdGlwLWhhcm5lc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1oYXJuZXNzL3Rvb2x0aXAtaGFybmVzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQzs7O0FBRTNEOztHQUVHO0FBT0gsTUFBTSxPQUFPLHFCQUFxQjtJQU5sQztRQU9FLFlBQU8sR0FBRyxpQkFBaUIsQ0FBQztLQUM3Qjs4R0FGWSxxQkFBcUI7a0dBQXJCLHFCQUFxQixtRkNabEMsMklBRUEsMkNEUVksZ0JBQWdCOzsyRkFFZixxQkFBcUI7a0JBTmpDLFNBQVM7K0JBQ0UseUJBQXlCLGNBRXZCLElBQUksV0FDUCxDQUFDLGdCQUFnQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge01hdFRvb2x0aXBNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xyXG5cclxuLyoqXHJcbiAqIEB0aXRsZSBUZXN0aW5nIHdpdGggTWF0VG9vbHRpcEhhcm5lc3NcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndG9vbHRpcC1oYXJuZXNzLWV4YW1wbGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAndG9vbHRpcC1oYXJuZXNzLWV4YW1wbGUuaHRtbCcsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbTWF0VG9vbHRpcE1vZHVsZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb29sdGlwSGFybmVzc0V4YW1wbGUge1xyXG4gIG1lc3NhZ2UgPSAnVG9vbHRpcCBtZXNzYWdlJztcclxufVxyXG4iLCI8YnV0dG9uIFttYXRUb29sdGlwXT1cIm1lc3NhZ2VcIiBpZD1cIm9uZVwiPlRyaWdnZXIgMTwvYnV0dG9uPlxyXG48YnV0dG9uIG1hdFRvb2x0aXA9XCJTdGF0aWMgbWVzc2FnZVwiIGlkPVwidHdvXCI+VHJpZ2dlciAyPC9idXR0b24+XHJcbiJdfQ==