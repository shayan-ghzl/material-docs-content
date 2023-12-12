import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/slider";
/**
 * @title Testing with MatSliderHarness
 */
export class SliderHarnessExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SliderHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: SliderHarnessExample, isStandalone: true, selector: "slider-harness-example", ngImport: i0, template: "<mat-slider>\r\n  <input matSliderThumb value=\"50\">\r\n</mat-slider>\r\n", dependencies: [{ kind: "ngmodule", type: MatSliderModule }, { kind: "component", type: i1.MatSlider, selector: "mat-slider", inputs: ["disabled", "discrete", "showTickMarks", "min", "color", "disableRipple", "max", "step", "displayWith"], exportAs: ["matSlider"] }, { kind: "directive", type: i1.MatSliderThumb, selector: "input[matSliderThumb]", inputs: ["value"], outputs: ["valueChange", "dragStart", "dragEnd"], exportAs: ["matSliderThumb"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SliderHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'slider-harness-example', standalone: true, imports: [MatSliderModule], template: "<mat-slider>\r\n  <input matSliderThumb value=\"50\">\r\n</mat-slider>\r\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NsaWRlci9zbGlkZXItaGFybmVzcy9zbGlkZXItaGFybmVzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2xpZGVyL3NsaWRlci1oYXJuZXNzL3NsaWRlci1oYXJuZXNzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQzs7O0FBRXpEOztHQUVHO0FBT0gsTUFBTSxPQUFPLG9CQUFvQjs4R0FBcEIsb0JBQW9CO2tHQUFwQixvQkFBb0Isa0ZDWmpDLDRFQUdBLDJDRE9ZLGVBQWU7OzJGQUVkLG9CQUFvQjtrQkFOaEMsU0FBUzsrQkFDRSx3QkFBd0IsY0FFdEIsSUFBSSxXQUNQLENBQUMsZUFBZSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge01hdFNsaWRlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2xpZGVyJztcclxuXHJcbi8qKlxyXG4gKiBAdGl0bGUgVGVzdGluZyB3aXRoIE1hdFNsaWRlckhhcm5lc3NcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2xpZGVyLWhhcm5lc3MtZXhhbXBsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICdzbGlkZXItaGFybmVzcy1leGFtcGxlLmh0bWwnLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW01hdFNsaWRlck1vZHVsZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTbGlkZXJIYXJuZXNzRXhhbXBsZSB7fVxyXG4iLCI8bWF0LXNsaWRlcj5cclxuICA8aW5wdXQgbWF0U2xpZGVyVGh1bWIgdmFsdWU9XCI1MFwiPlxyXG48L21hdC1zbGlkZXI+XHJcbiJdfQ==