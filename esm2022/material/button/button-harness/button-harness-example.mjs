import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
/**
 * @title Testing with MatButtonHarness
 */
export class ButtonHarnessExample {
    constructor() {
        this.clicked = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ButtonHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: ButtonHarnessExample, isStandalone: true, selector: "button-harness-example", ngImport: i0, template: "<button id=\"basic\" type=\"button\" mat-button (click)=\"clicked = true\">\r\n  Basic button\r\n</button>\r\n", dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ButtonHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'button-harness-example', standalone: true, imports: [MatButtonModule], template: "<button id=\"basic\" type=\"button\" mat-button (click)=\"clicked = true\">\r\n  Basic button\r\n</button>\r\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2J1dHRvbi9idXR0b24taGFybmVzcy9idXR0b24taGFybmVzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYnV0dG9uL2J1dHRvbi1oYXJuZXNzL2J1dHRvbi1oYXJuZXNzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQzs7O0FBRXpEOztHQUVHO0FBT0gsTUFBTSxPQUFPLG9CQUFvQjtJQU5qQztRQU9FLFlBQU8sR0FBRyxLQUFLLENBQUM7S0FDakI7OEdBRlksb0JBQW9CO2tHQUFwQixvQkFBb0Isa0ZDWmpDLGdIQUdBLDJDRE9ZLGVBQWU7OzJGQUVkLG9CQUFvQjtrQkFOaEMsU0FBUzsrQkFDRSx3QkFBd0IsY0FFdEIsSUFBSSxXQUNQLENBQUMsZUFBZSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcclxuXHJcbi8qKlxyXG4gKiBAdGl0bGUgVGVzdGluZyB3aXRoIE1hdEJ1dHRvbkhhcm5lc3NcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYnV0dG9uLWhhcm5lc3MtZXhhbXBsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICdidXR0b24taGFybmVzcy1leGFtcGxlLmh0bWwnLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW01hdEJ1dHRvbk1vZHVsZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCdXR0b25IYXJuZXNzRXhhbXBsZSB7XHJcbiAgY2xpY2tlZCA9IGZhbHNlO1xyXG59XHJcbiIsIjxidXR0b24gaWQ9XCJiYXNpY1wiIHR5cGU9XCJidXR0b25cIiBtYXQtYnV0dG9uIChjbGljayk9XCJjbGlja2VkID0gdHJ1ZVwiPlxyXG4gIEJhc2ljIGJ1dHRvblxyXG48L2J1dHRvbj5cclxuIl19