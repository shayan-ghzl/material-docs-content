import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, } from '@angular/core';
import { MatCalendar, MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS, MatNativeDateModule, } from '@angular/material/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/datepicker";
import * as i4 from "@angular/material/core";
import * as i5 from "@angular/material/button";
import * as i6 from "@angular/material/icon";
/** @title Datepicker with custom calendar header */
export class DatepickerCustomHeaderExample {
    constructor() {
        this.exampleHeader = ExampleHeader;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DatepickerCustomHeaderExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: DatepickerCustomHeaderExample, isStandalone: true, selector: "datepicker-custom-header-example", ngImport: i0, template: "<mat-form-field>\r\n  <mat-label>Custom calendar header</mat-label>\r\n  <input matInput [matDatepicker]=\"picker\">\r\n  <mat-hint>MM/DD/YYYY</mat-hint>\r\n  <mat-datepicker-toggle matIconSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n  <mat-datepicker #picker [calendarHeaderComponent]=\"exampleHeader\"></mat-datepicker>\r\n</mat-form-field>\r\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i1.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatNativeDateModule }, { kind: "ngmodule", type: MatDatepickerModule }, { kind: "component", type: i3.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i3.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i3.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DatepickerCustomHeaderExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-custom-header-example', changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, imports: [MatFormFieldModule, MatInputModule, MatNativeDateModule, MatDatepickerModule], template: "<mat-form-field>\r\n  <mat-label>Custom calendar header</mat-label>\r\n  <input matInput [matDatepicker]=\"picker\">\r\n  <mat-hint>MM/DD/YYYY</mat-hint>\r\n  <mat-datepicker-toggle matIconSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n  <mat-datepicker #picker [calendarHeaderComponent]=\"exampleHeader\"></mat-datepicker>\r\n</mat-form-field>\r\n" }]
        }] });
/** Custom header component for datepicker. */
export class ExampleHeader {
    constructor(_calendar, _dateAdapter, _dateFormats, cdr) {
        this._calendar = _calendar;
        this._dateAdapter = _dateAdapter;
        this._dateFormats = _dateFormats;
        this._destroyed = new Subject();
        _calendar.stateChanges.pipe(takeUntil(this._destroyed)).subscribe(() => cdr.markForCheck());
    }
    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
    }
    get periodLabel() {
        return this._dateAdapter
            .format(this._calendar.activeDate, this._dateFormats.display.monthYearLabel)
            .toLocaleUpperCase();
    }
    previousClicked(mode) {
        this._calendar.activeDate =
            mode === 'month'
                ? this._dateAdapter.addCalendarMonths(this._calendar.activeDate, -1)
                : this._dateAdapter.addCalendarYears(this._calendar.activeDate, -1);
    }
    nextClicked(mode) {
        this._calendar.activeDate =
            mode === 'month'
                ? this._dateAdapter.addCalendarMonths(this._calendar.activeDate, 1)
                : this._dateAdapter.addCalendarYears(this._calendar.activeDate, 1);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ExampleHeader, deps: [{ token: i3.MatCalendar }, { token: i4.DateAdapter }, { token: MAT_DATE_FORMATS }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: ExampleHeader, isStandalone: true, selector: "example-header", ngImport: i0, template: `
    <div class="example-header">
      <button mat-icon-button (click)="previousClicked('year')">
        <mat-icon>keyboard_double_arrow_left</mat-icon>
      </button>
      <button mat-icon-button (click)="previousClicked('month')">
        <mat-icon>keyboard_arrow_left</mat-icon>
      </button>
      <span class="example-header-label">{{periodLabel}}</span>
      <button mat-icon-button (click)="nextClicked('month')">
        <mat-icon>keyboard_arrow_right</mat-icon>
      </button>
      <button mat-icon-button (click)="nextClicked('year')">
        <mat-icon>keyboard_double_arrow_right</mat-icon>
      </button>
    </div>
  `, isInline: true, styles: ["\n    .example-header {\n      display: flex;\n      align-items: center;\n      padding: 0.5em;\n    }\n\n    .example-header-label {\n      flex: 1;\n      height: 1em;\n      font-weight: 500;\n      text-align: center;\n    }\n  "], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i5.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i6.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ExampleHeader, decorators: [{
            type: Component,
            args: [{ selector: 'example-header', template: `
    <div class="example-header">
      <button mat-icon-button (click)="previousClicked('year')">
        <mat-icon>keyboard_double_arrow_left</mat-icon>
      </button>
      <button mat-icon-button (click)="previousClicked('month')">
        <mat-icon>keyboard_arrow_left</mat-icon>
      </button>
      <span class="example-header-label">{{periodLabel}}</span>
      <button mat-icon-button (click)="nextClicked('month')">
        <mat-icon>keyboard_arrow_right</mat-icon>
      </button>
      <button mat-icon-button (click)="nextClicked('year')">
        <mat-icon>keyboard_double_arrow_right</mat-icon>
      </button>
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, imports: [MatButtonModule, MatIconModule], styles: ["\n    .example-header {\n      display: flex;\n      align-items: center;\n      padding: 0.5em;\n    }\n\n    .example-header-label {\n      flex: 1;\n      height: 1em;\n      font-weight: 500;\n      text-align: center;\n    }\n  "] }]
        }], ctorParameters: () => [{ type: i3.MatCalendar }, { type: i4.DateAdapter }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DATE_FORMATS]
                }] }, { type: i0.ChangeDetectorRef }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1jdXN0b20taGVhZGVyLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kYXRlcGlja2VyL2RhdGVwaWNrZXItY3VzdG9tLWhlYWRlci9kYXRlcGlja2VyLWN1c3RvbS1oZWFkZXItZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1jdXN0b20taGVhZGVyL2RhdGVwaWNrZXItY3VzdG9tLWhlYWRlci1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULE1BQU0sR0FFUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDOUUsT0FBTyxFQUNMLFdBQVcsRUFDWCxnQkFBZ0IsRUFFaEIsbUJBQW1CLEdBQ3BCLE1BQU0sd0JBQXdCLENBQUM7QUFDaEMsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUM3QixPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDekMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7O0FBRWhFLG9EQUFvRDtBQVFwRCxNQUFNLE9BQU8sNkJBQTZCO0lBUDFDO1FBUUUsa0JBQWEsR0FBRyxhQUFhLENBQUM7S0FDL0I7OEdBRlksNkJBQTZCO2tHQUE3Qiw2QkFBNkIsNEZDN0IxQyxtV0FPQSwyQ0RvQlksa0JBQWtCLG1nQkFBRSxjQUFjLDBXQUFFLG1CQUFtQiw4QkFBRSxtQkFBbUI7OzJGQUUzRSw2QkFBNkI7a0JBUHpDLFNBQVM7K0JBQ0Usa0NBQWtDLG1CQUUzQix1QkFBdUIsQ0FBQyxNQUFNLGNBQ25DLElBQUksV0FDUCxDQUFDLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUIsQ0FBQzs7QUFNekYsOENBQThDO0FBd0M5QyxNQUFNLE9BQU8sYUFBYTtJQUd4QixZQUNVLFNBQXlCLEVBQ3pCLFlBQTRCLEVBQ0YsWUFBNEIsRUFDOUQsR0FBc0I7UUFIZCxjQUFTLEdBQVQsU0FBUyxDQUFnQjtRQUN6QixpQkFBWSxHQUFaLFlBQVksQ0FBZ0I7UUFDRixpQkFBWSxHQUFaLFlBQVksQ0FBZ0I7UUFMeEQsZUFBVSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFRdkMsU0FBUyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUM5RixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWTthQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDO2FBQzNFLGlCQUFpQixFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELGVBQWUsQ0FBQyxJQUFzQjtRQUNwQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVU7WUFDdkIsSUFBSSxLQUFLLE9BQU87Z0JBQ2QsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVELFdBQVcsQ0FBQyxJQUFzQjtRQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVU7WUFDdkIsSUFBSSxLQUFLLE9BQU87Z0JBQ2QsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO2dCQUNuRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6RSxDQUFDOzhHQW5DVSxhQUFhLHdFQU1kLGdCQUFnQjtrR0FOZixhQUFhLDBFQXJCZDs7Ozs7Ozs7Ozs7Ozs7OztHQWdCVCxrVEFHUyxlQUFlLDJJQUFFLGFBQWE7OzJGQUU3QixhQUFhO2tCQXZDekIsU0FBUzsrQkFDRSxnQkFBZ0IsWUFpQmhCOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0JULG1CQUNnQix1QkFBdUIsQ0FBQyxNQUFNLGNBQ25DLElBQUksV0FDUCxDQUFDLGVBQWUsRUFBRSxhQUFhLENBQUM7OzBCQVF0QyxNQUFNOzJCQUFDLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEluamVjdCxcclxuICBPbkRlc3Ryb3ksXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7TWF0Q2FsZW5kYXIsIE1hdERhdGVwaWNrZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xyXG5pbXBvcnQge1xyXG4gIERhdGVBZGFwdGVyLFxyXG4gIE1BVF9EQVRFX0ZPUk1BVFMsXHJcbiAgTWF0RGF0ZUZvcm1hdHMsXHJcbiAgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcclxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcclxuaW1wb3J0IHtTdWJqZWN0fSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHt0YWtlVW50aWx9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcclxuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XHJcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcclxuaW1wb3J0IHtNYXRGb3JtRmllbGRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xyXG5cclxuLyoqIEB0aXRsZSBEYXRlcGlja2VyIHdpdGggY3VzdG9tIGNhbGVuZGFyIGhlYWRlciAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2RhdGVwaWNrZXItY3VzdG9tLWhlYWRlci1leGFtcGxlJyxcclxuICB0ZW1wbGF0ZVVybDogJ2RhdGVwaWNrZXItY3VzdG9tLWhlYWRlci1leGFtcGxlLmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW01hdEZvcm1GaWVsZE1vZHVsZSwgTWF0SW5wdXRNb2R1bGUsIE1hdE5hdGl2ZURhdGVNb2R1bGUsIE1hdERhdGVwaWNrZXJNb2R1bGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlckN1c3RvbUhlYWRlckV4YW1wbGUge1xyXG4gIGV4YW1wbGVIZWFkZXIgPSBFeGFtcGxlSGVhZGVyO1xyXG59XHJcblxyXG4vKiogQ3VzdG9tIGhlYWRlciBjb21wb25lbnQgZm9yIGRhdGVwaWNrZXIuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZXhhbXBsZS1oZWFkZXInLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgLmV4YW1wbGUtaGVhZGVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogMC41ZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmV4YW1wbGUtaGVhZGVyLWxhYmVsIHtcclxuICAgICAgZmxleDogMTtcclxuICAgICAgaGVpZ2h0OiAxZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICBgLFxyXG4gIF0sXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWhlYWRlclwiPlxyXG4gICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwicHJldmlvdXNDbGlja2VkKCd5ZWFyJylcIj5cclxuICAgICAgICA8bWF0LWljb24+a2V5Ym9hcmRfZG91YmxlX2Fycm93X2xlZnQ8L21hdC1pY29uPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT1cInByZXZpb3VzQ2xpY2tlZCgnbW9udGgnKVwiPlxyXG4gICAgICAgIDxtYXQtaWNvbj5rZXlib2FyZF9hcnJvd19sZWZ0PC9tYXQtaWNvbj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiZXhhbXBsZS1oZWFkZXItbGFiZWxcIj57e3BlcmlvZExhYmVsfX08L3NwYW4+XHJcbiAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIChjbGljayk9XCJuZXh0Q2xpY2tlZCgnbW9udGgnKVwiPlxyXG4gICAgICAgIDxtYXQtaWNvbj5rZXlib2FyZF9hcnJvd19yaWdodDwvbWF0LWljb24+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwibmV4dENsaWNrZWQoJ3llYXInKVwiPlxyXG4gICAgICAgIDxtYXQtaWNvbj5rZXlib2FyZF9kb3VibGVfYXJyb3dfcmlnaHQ8L21hdC1pY29uPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIGAsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbTWF0QnV0dG9uTW9kdWxlLCBNYXRJY29uTW9kdWxlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEV4YW1wbGVIZWFkZXI8RD4gaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgX2Rlc3Ryb3llZCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfY2FsZW5kYXI6IE1hdENhbGVuZGFyPEQ+LFxyXG4gICAgcHJpdmF0ZSBfZGF0ZUFkYXB0ZXI6IERhdGVBZGFwdGVyPEQ+LFxyXG4gICAgQEluamVjdChNQVRfREFURV9GT1JNQVRTKSBwcml2YXRlIF9kYXRlRm9ybWF0czogTWF0RGF0ZUZvcm1hdHMsXHJcbiAgICBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICkge1xyXG4gICAgX2NhbGVuZGFyLnN0YXRlQ2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95ZWQpKS5zdWJzY3JpYmUoKCkgPT4gY2RyLm1hcmtGb3JDaGVjaygpKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5fZGVzdHJveWVkLm5leHQoKTtcclxuICAgIHRoaXMuX2Rlc3Ryb3llZC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBlcmlvZExhYmVsKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RhdGVBZGFwdGVyXHJcbiAgICAgIC5mb3JtYXQodGhpcy5fY2FsZW5kYXIuYWN0aXZlRGF0ZSwgdGhpcy5fZGF0ZUZvcm1hdHMuZGlzcGxheS5tb250aFllYXJMYWJlbClcclxuICAgICAgLnRvTG9jYWxlVXBwZXJDYXNlKCk7XHJcbiAgfVxyXG5cclxuICBwcmV2aW91c0NsaWNrZWQobW9kZTogJ21vbnRoJyB8ICd5ZWFyJykge1xyXG4gICAgdGhpcy5fY2FsZW5kYXIuYWN0aXZlRGF0ZSA9XHJcbiAgICAgIG1vZGUgPT09ICdtb250aCdcclxuICAgICAgICA/IHRoaXMuX2RhdGVBZGFwdGVyLmFkZENhbGVuZGFyTW9udGhzKHRoaXMuX2NhbGVuZGFyLmFjdGl2ZURhdGUsIC0xKVxyXG4gICAgICAgIDogdGhpcy5fZGF0ZUFkYXB0ZXIuYWRkQ2FsZW5kYXJZZWFycyh0aGlzLl9jYWxlbmRhci5hY3RpdmVEYXRlLCAtMSk7XHJcbiAgfVxyXG5cclxuICBuZXh0Q2xpY2tlZChtb2RlOiAnbW9udGgnIHwgJ3llYXInKSB7XHJcbiAgICB0aGlzLl9jYWxlbmRhci5hY3RpdmVEYXRlID1cclxuICAgICAgbW9kZSA9PT0gJ21vbnRoJ1xyXG4gICAgICAgID8gdGhpcy5fZGF0ZUFkYXB0ZXIuYWRkQ2FsZW5kYXJNb250aHModGhpcy5fY2FsZW5kYXIuYWN0aXZlRGF0ZSwgMSlcclxuICAgICAgICA6IHRoaXMuX2RhdGVBZGFwdGVyLmFkZENhbGVuZGFyWWVhcnModGhpcy5fY2FsZW5kYXIuYWN0aXZlRGF0ZSwgMSk7XHJcbiAgfVxyXG59XHJcbiIsIjxtYXQtZm9ybS1maWVsZD5cclxuICA8bWF0LWxhYmVsPkN1c3RvbSBjYWxlbmRhciBoZWFkZXI8L21hdC1sYWJlbD5cclxuICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwicGlja2VyXCI+XHJcbiAgPG1hdC1oaW50Pk1NL0REL1lZWVk8L21hdC1oaW50PlxyXG4gIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0SWNvblN1ZmZpeCBbZm9yXT1cInBpY2tlclwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxyXG4gIDxtYXQtZGF0ZXBpY2tlciAjcGlja2VyIFtjYWxlbmRhckhlYWRlckNvbXBvbmVudF09XCJleGFtcGxlSGVhZGVyXCI+PC9tYXQtZGF0ZXBpY2tlcj5cclxuPC9tYXQtZm9ybS1maWVsZD5cclxuIl19