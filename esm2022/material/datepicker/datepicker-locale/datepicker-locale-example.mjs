import { Component, Inject } from '@angular/core';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS, } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule, MatDatepickerIntl } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import 'moment/locale/ja';
import 'moment/locale/fr';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/core";
import * as i2 from "@angular/material/datepicker";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/material/input";
import * as i5 from "@angular/material/button";
/** @title Datepicker with different locale */
export class DatepickerLocaleExample {
    constructor(_adapter, _intl, _locale) {
        this._adapter = _adapter;
        this._intl = _intl;
        this._locale = _locale;
    }
    ngOnInit() {
        this.updateCloseButtonLabel('カレンダーを閉じる');
    }
    french() {
        this._locale = 'fr';
        this._adapter.setLocale(this._locale);
        this.updateCloseButtonLabel('Fermer le calendrier');
    }
    updateCloseButtonLabel(label) {
        this._intl.closeCalendarLabel = label;
        this._intl.changes.next();
    }
    getDateFormatString() {
        if (this._locale === 'ja-JP') {
            return 'YYYY/MM/DD';
        }
        else if (this._locale === 'fr') {
            return 'DD/MM/YYYY';
        }
        return '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DatepickerLocaleExample, deps: [{ token: i1.DateAdapter }, { token: i2.MatDatepickerIntl }, { token: MAT_DATE_LOCALE }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: DatepickerLocaleExample, isStandalone: true, selector: "datepicker-locale-example", providers: [
            // The locale would typically be provided on the root module of your application. We do it at
            // the component level here, due to limitations of our example generation script.
            { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },
            // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
            // `MatMomentDateModule` in your applications root module. We provide it at the component level
            // here, due to limitations of our example generation script.
            {
                provide: DateAdapter,
                useClass: MomentDateAdapter,
                deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
            },
            { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
        ], ngImport: i0, template: "<mat-form-field>\r\n  <mat-label>Different locale</mat-label>\r\n  <input matInput [matDatepicker]=\"dp\">\r\n  <mat-hint>{{getDateFormatString()}}</mat-hint>\r\n  <mat-datepicker-toggle matIconSuffix [for]=\"dp\"></mat-datepicker-toggle>\r\n  <mat-datepicker #dp></mat-datepicker>\r\n</mat-form-field>\r\n<button mat-button (click)=\"french()\">Dynamically switch to French</button>\r\n", styles: ["mat-form-field {\r\n  margin-right: 12px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i3.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i3.MatLabel, selector: "mat-label" }, { kind: "directive", type: i3.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i3.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatDatepickerModule }, { kind: "component", type: i2.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i2.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i2.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i5.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DatepickerLocaleExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-locale-example', providers: [
                        // The locale would typically be provided on the root module of your application. We do it at
                        // the component level here, due to limitations of our example generation script.
                        { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },
                        // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                        // `MatMomentDateModule` in your applications root module. We provide it at the component level
                        // here, due to limitations of our example generation script.
                        {
                            provide: DateAdapter,
                            useClass: MomentDateAdapter,
                            deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
                        },
                        { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
                    ], standalone: true, imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatButtonModule], template: "<mat-form-field>\r\n  <mat-label>Different locale</mat-label>\r\n  <input matInput [matDatepicker]=\"dp\">\r\n  <mat-hint>{{getDateFormatString()}}</mat-hint>\r\n  <mat-datepicker-toggle matIconSuffix [for]=\"dp\"></mat-datepicker-toggle>\r\n  <mat-datepicker #dp></mat-datepicker>\r\n</mat-form-field>\r\n<button mat-button (click)=\"french()\">Dynamically switch to French</button>\r\n", styles: ["mat-form-field {\r\n  margin-right: 12px;\r\n}\r\n"] }]
        }], ctorParameters: () => [{ type: i1.DateAdapter }, { type: i2.MatDatepickerIntl }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DATE_LOCALE]
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1sb2NhbGUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1sb2NhbGUvZGF0ZXBpY2tlci1sb2NhbGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1sb2NhbGUvZGF0ZXBpY2tlci1sb2NhbGUtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLCtCQUErQixHQUNoQyxNQUFNLGtDQUFrQyxDQUFDO0FBQzFDLE9BQU8sRUFBQyxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDdEYsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxtQkFBbUIsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ3BGLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLGtCQUFrQixDQUFDO0FBQzFCLE9BQU8sa0JBQWtCLENBQUM7Ozs7Ozs7QUFFMUIsOENBQThDO0FBc0I5QyxNQUFNLE9BQU8sdUJBQXVCO0lBQ2xDLFlBQ1UsUUFBMEIsRUFDMUIsS0FBd0IsRUFDQyxPQUFlO1FBRnhDLGFBQVEsR0FBUixRQUFRLENBQWtCO1FBQzFCLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBQ0MsWUFBTyxHQUFQLE9BQU8sQ0FBUTtJQUMvQyxDQUFDO0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsc0JBQXNCLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsc0JBQXNCLENBQUMsS0FBYTtRQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztRQUN0QyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsbUJBQW1CO1FBQ2pCLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxPQUFPLEVBQUU7WUFDNUIsT0FBTyxZQUFZLENBQUM7U0FDckI7YUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQ2hDLE9BQU8sWUFBWSxDQUFDO1NBQ3JCO1FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDOzhHQTdCVSx1QkFBdUIsOEVBSXhCLGVBQWU7a0dBSmQsdUJBQXVCLHdFQWpCdkI7WUFDVCw2RkFBNkY7WUFDN0YsaUZBQWlGO1lBQ2pGLEVBQUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFDO1lBQzdDLCtGQUErRjtZQUMvRiwrRkFBK0Y7WUFDL0YsNkRBQTZEO1lBQzdEO2dCQUNFLE9BQU8sRUFBRSxXQUFXO2dCQUNwQixRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixJQUFJLEVBQUUsQ0FBQyxlQUFlLEVBQUUsK0JBQStCLENBQUM7YUFDekQ7WUFDRCxFQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsdUJBQXVCLEVBQUM7U0FDL0QsMEJDaENILHFZQVFBLDJHRDBCWSxrQkFBa0IsbWdCQUFFLGNBQWMsMFdBQUUsbUJBQW1CLGlnQkFBRSxlQUFlOzsyRkFFdkUsdUJBQXVCO2tCQXJCbkMsU0FBUzsrQkFDRSwyQkFBMkIsYUFHMUI7d0JBQ1QsNkZBQTZGO3dCQUM3RixpRkFBaUY7d0JBQ2pGLEVBQUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFDO3dCQUM3QywrRkFBK0Y7d0JBQy9GLCtGQUErRjt3QkFDL0YsNkRBQTZEO3dCQUM3RDs0QkFDRSxPQUFPLEVBQUUsV0FBVzs0QkFDcEIsUUFBUSxFQUFFLGlCQUFpQjs0QkFDM0IsSUFBSSxFQUFFLENBQUMsZUFBZSxFQUFFLCtCQUErQixDQUFDO3lCQUN6RDt3QkFDRCxFQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsdUJBQXVCLEVBQUM7cUJBQy9ELGNBQ1csSUFBSSxXQUNQLENBQUMsa0JBQWtCLEVBQUUsY0FBYyxFQUFFLG1CQUFtQixFQUFFLGVBQWUsQ0FBQzs7MEJBTWhGLE1BQU07MkJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3QsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgTUFUX01PTUVOVF9EQVRFX0ZPUk1BVFMsXHJcbiAgTW9tZW50RGF0ZUFkYXB0ZXIsXHJcbiAgTUFUX01PTUVOVF9EQVRFX0FEQVBURVJfT1BUSU9OUyxcclxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC1tb21lbnQtYWRhcHRlcic7XHJcbmltcG9ydCB7RGF0ZUFkYXB0ZXIsIE1BVF9EQVRFX0ZPUk1BVFMsIE1BVF9EQVRFX0xPQ0FMRX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XHJcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xyXG5pbXBvcnQge01hdERhdGVwaWNrZXJNb2R1bGUsIE1hdERhdGVwaWNrZXJJbnRsfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kYXRlcGlja2VyJztcclxuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xyXG5pbXBvcnQge01hdEZvcm1GaWVsZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XHJcbmltcG9ydCAnbW9tZW50L2xvY2FsZS9qYSc7XHJcbmltcG9ydCAnbW9tZW50L2xvY2FsZS9mcic7XHJcblxyXG4vKiogQHRpdGxlIERhdGVwaWNrZXIgd2l0aCBkaWZmZXJlbnQgbG9jYWxlICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZGF0ZXBpY2tlci1sb2NhbGUtZXhhbXBsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICdkYXRlcGlja2VyLWxvY2FsZS1leGFtcGxlLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydkYXRlcGlja2VyLWxvY2FsZS1leGFtcGxlLmNzcyddLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgLy8gVGhlIGxvY2FsZSB3b3VsZCB0eXBpY2FsbHkgYmUgcHJvdmlkZWQgb24gdGhlIHJvb3QgbW9kdWxlIG9mIHlvdXIgYXBwbGljYXRpb24uIFdlIGRvIGl0IGF0XHJcbiAgICAvLyB0aGUgY29tcG9uZW50IGxldmVsIGhlcmUsIGR1ZSB0byBsaW1pdGF0aW9ucyBvZiBvdXIgZXhhbXBsZSBnZW5lcmF0aW9uIHNjcmlwdC5cclxuICAgIHtwcm92aWRlOiBNQVRfREFURV9MT0NBTEUsIHVzZVZhbHVlOiAnamEtSlAnfSxcclxuICAgIC8vIGBNb21lbnREYXRlQWRhcHRlcmAgYW5kIGBNQVRfTU9NRU5UX0RBVEVfRk9STUFUU2AgY2FuIGJlIGF1dG9tYXRpY2FsbHkgcHJvdmlkZWQgYnkgaW1wb3J0aW5nXHJcbiAgICAvLyBgTWF0TW9tZW50RGF0ZU1vZHVsZWAgaW4geW91ciBhcHBsaWNhdGlvbnMgcm9vdCBtb2R1bGUuIFdlIHByb3ZpZGUgaXQgYXQgdGhlIGNvbXBvbmVudCBsZXZlbFxyXG4gICAgLy8gaGVyZSwgZHVlIHRvIGxpbWl0YXRpb25zIG9mIG91ciBleGFtcGxlIGdlbmVyYXRpb24gc2NyaXB0LlxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBEYXRlQWRhcHRlcixcclxuICAgICAgdXNlQ2xhc3M6IE1vbWVudERhdGVBZGFwdGVyLFxyXG4gICAgICBkZXBzOiBbTUFUX0RBVEVfTE9DQUxFLCBNQVRfTU9NRU5UX0RBVEVfQURBUFRFUl9PUFRJT05TXSxcclxuICAgIH0sXHJcbiAgICB7cHJvdmlkZTogTUFUX0RBVEVfRk9STUFUUywgdXNlVmFsdWU6IE1BVF9NT01FTlRfREFURV9GT1JNQVRTfSxcclxuICBdLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW01hdEZvcm1GaWVsZE1vZHVsZSwgTWF0SW5wdXRNb2R1bGUsIE1hdERhdGVwaWNrZXJNb2R1bGUsIE1hdEJ1dHRvbk1vZHVsZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyTG9jYWxlRXhhbXBsZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9hZGFwdGVyOiBEYXRlQWRhcHRlcjxhbnk+LFxyXG4gICAgcHJpdmF0ZSBfaW50bDogTWF0RGF0ZXBpY2tlckludGwsXHJcbiAgICBASW5qZWN0KE1BVF9EQVRFX0xPQ0FMRSkgcHJpdmF0ZSBfbG9jYWxlOiBzdHJpbmcsXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMudXBkYXRlQ2xvc2VCdXR0b25MYWJlbCgn44Kr44Os44Oz44OA44O844KS6ZaJ44GY44KLJyk7XHJcbiAgfVxyXG5cclxuICBmcmVuY2goKSB7XHJcbiAgICB0aGlzLl9sb2NhbGUgPSAnZnInO1xyXG4gICAgdGhpcy5fYWRhcHRlci5zZXRMb2NhbGUodGhpcy5fbG9jYWxlKTtcclxuICAgIHRoaXMudXBkYXRlQ2xvc2VCdXR0b25MYWJlbCgnRmVybWVyIGxlIGNhbGVuZHJpZXInKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUNsb3NlQnV0dG9uTGFiZWwobGFiZWw6IHN0cmluZykge1xyXG4gICAgdGhpcy5faW50bC5jbG9zZUNhbGVuZGFyTGFiZWwgPSBsYWJlbDtcclxuICAgIHRoaXMuX2ludGwuY2hhbmdlcy5uZXh0KCk7XHJcbiAgfVxyXG5cclxuICBnZXREYXRlRm9ybWF0U3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICBpZiAodGhpcy5fbG9jYWxlID09PSAnamEtSlAnKSB7XHJcbiAgICAgIHJldHVybiAnWVlZWS9NTS9ERCc7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2xvY2FsZSA9PT0gJ2ZyJykge1xyXG4gICAgICByZXR1cm4gJ0REL01NL1lZWVknO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICcnO1xyXG4gIH1cclxufVxyXG4iLCI8bWF0LWZvcm0tZmllbGQ+XHJcbiAgPG1hdC1sYWJlbD5EaWZmZXJlbnQgbG9jYWxlPC9tYXQtbGFiZWw+XHJcbiAgPGlucHV0IG1hdElucHV0IFttYXREYXRlcGlja2VyXT1cImRwXCI+XHJcbiAgPG1hdC1oaW50Pnt7Z2V0RGF0ZUZvcm1hdFN0cmluZygpfX08L21hdC1oaW50PlxyXG4gIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0SWNvblN1ZmZpeCBbZm9yXT1cImRwXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XHJcbiAgPG1hdC1kYXRlcGlja2VyICNkcD48L21hdC1kYXRlcGlja2VyPlxyXG48L21hdC1mb3JtLWZpZWxkPlxyXG48YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cImZyZW5jaCgpXCI+RHluYW1pY2FsbHkgc3dpdGNoIHRvIEZyZW5jaDwvYnV0dG9uPlxyXG4iXX0=