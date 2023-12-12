import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/slider";
/**
 * @title Slider with custom thumb label formatting.
 */
export class SliderFormattingExample {
    formatLabel(value) {
        if (value >= 1000) {
            return Math.round(value / 1000) + 'k';
        }
        return `${value}`;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SliderFormattingExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: SliderFormattingExample, isStandalone: true, selector: "slider-formatting-example", ngImport: i0, template: "<mat-slider min=\"0\" max=\"100000\" step=\"1000\" showTickMarks discrete [displayWith]=\"formatLabel\">\r\n  <input matSliderThumb>\r\n</mat-slider>\r\n", styles: ["mat-slider {\r\n  width: 300px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatSliderModule }, { kind: "component", type: i1.MatSlider, selector: "mat-slider", inputs: ["disabled", "discrete", "showTickMarks", "min", "color", "disableRipple", "max", "step", "displayWith"], exportAs: ["matSlider"] }, { kind: "directive", type: i1.MatSliderThumb, selector: "input[matSliderThumb]", inputs: ["value"], outputs: ["valueChange", "dragStart", "dragEnd"], exportAs: ["matSliderThumb"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SliderFormattingExample, decorators: [{
            type: Component,
            args: [{ selector: 'slider-formatting-example', standalone: true, imports: [MatSliderModule], template: "<mat-slider min=\"0\" max=\"100000\" step=\"1000\" showTickMarks discrete [displayWith]=\"formatLabel\">\r\n  <input matSliderThumb>\r\n</mat-slider>\r\n", styles: ["mat-slider {\r\n  width: 300px;\r\n}\r\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLWZvcm1hdHRpbmctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NsaWRlci9zbGlkZXItZm9ybWF0dGluZy9zbGlkZXItZm9ybWF0dGluZy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2xpZGVyL3NsaWRlci1mb3JtYXR0aW5nL3NsaWRlci1mb3JtYXR0aW5nLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQzs7O0FBRXpEOztHQUVHO0FBUUgsTUFBTSxPQUFPLHVCQUF1QjtJQUNsQyxXQUFXLENBQUMsS0FBYTtRQUN2QixJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7WUFDakIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUM7U0FDdkM7UUFFRCxPQUFPLEdBQUcsS0FBSyxFQUFFLENBQUM7SUFDcEIsQ0FBQzs4R0FQVSx1QkFBdUI7a0dBQXZCLHVCQUF1QixxRkNicEMsMkpBR0EsaUdEUVksZUFBZTs7MkZBRWQsdUJBQXVCO2tCQVBuQyxTQUFTOytCQUNFLDJCQUEyQixjQUd6QixJQUFJLFdBQ1AsQ0FBQyxlQUFlLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7TWF0U2xpZGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbGlkZXInO1xyXG5cclxuLyoqXHJcbiAqIEB0aXRsZSBTbGlkZXIgd2l0aCBjdXN0b20gdGh1bWIgbGFiZWwgZm9ybWF0dGluZy5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2xpZGVyLWZvcm1hdHRpbmctZXhhbXBsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICdzbGlkZXItZm9ybWF0dGluZy1leGFtcGxlLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydzbGlkZXItZm9ybWF0dGluZy1leGFtcGxlLmNzcyddLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW01hdFNsaWRlck1vZHVsZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTbGlkZXJGb3JtYXR0aW5nRXhhbXBsZSB7XHJcbiAgZm9ybWF0TGFiZWwodmFsdWU6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBpZiAodmFsdWUgPj0gMTAwMCkge1xyXG4gICAgICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAvIDEwMDApICsgJ2snO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBgJHt2YWx1ZX1gO1xyXG4gIH1cclxufVxyXG4iLCI8bWF0LXNsaWRlciBtaW49XCIwXCIgbWF4PVwiMTAwMDAwXCIgc3RlcD1cIjEwMDBcIiBzaG93VGlja01hcmtzIGRpc2NyZXRlIFtkaXNwbGF5V2l0aF09XCJmb3JtYXRMYWJlbFwiPlxyXG4gIDxpbnB1dCBtYXRTbGlkZXJUaHVtYj5cclxuPC9tYXQtc2xpZGVyPlxyXG4iXX0=