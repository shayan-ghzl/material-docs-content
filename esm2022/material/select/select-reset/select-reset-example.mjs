import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/material/core";
import * as i4 from "@angular/material/input";
import * as i5 from "@angular/forms";
/** @title Select with reset option */
export class SelectResetExample {
    constructor() {
        this.states = [
            'Alabama',
            'Alaska',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'Florida',
            'Georgia',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Carolina',
            'North Dakota',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Pennsylvania',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming',
        ];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SelectResetExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: SelectResetExample, isStandalone: true, selector: "select-reset-example", ngImport: i0, template: "<h4>mat-select</h4>\r\n<mat-form-field>\r\n  <mat-label>State</mat-label>\r\n  <mat-select>\r\n    <mat-option>None</mat-option>\r\n    @for (state of states; track state) {\r\n      <mat-option [value]=\"state\">{{state}}</mat-option>\r\n    }\r\n  </mat-select>\r\n</mat-form-field>\r\n\r\n<h4>native html select</h4>\r\n<mat-form-field>\r\n  <mat-label>Select your car</mat-label>\r\n  <select matNativeControl id=\"mySelectId\">\r\n    <option value=\"\" disabled selected></option>\r\n    <option value=\"volvo\">Volvo</option>\r\n    <option value=\"saab\">Saab</option>\r\n    <option value=\"mercedes\">Mercedes</option>\r\n    <option value=\"audi\">Audi</option>\r\n  </select>\r\n</mat-form-field>\r\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i2.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i3.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i5.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i5.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SelectResetExample, decorators: [{
            type: Component,
            args: [{ selector: 'select-reset-example', standalone: true, imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule], template: "<h4>mat-select</h4>\r\n<mat-form-field>\r\n  <mat-label>State</mat-label>\r\n  <mat-select>\r\n    <mat-option>None</mat-option>\r\n    @for (state of states; track state) {\r\n      <mat-option [value]=\"state\">{{state}}</mat-option>\r\n    }\r\n  </mat-select>\r\n</mat-form-field>\r\n\r\n<h4>native html select</h4>\r\n<mat-form-field>\r\n  <mat-label>Select your car</mat-label>\r\n  <select matNativeControl id=\"mySelectId\">\r\n    <option value=\"\" disabled selected></option>\r\n    <option value=\"volvo\">Volvo</option>\r\n    <option value=\"saab\">Saab</option>\r\n    <option value=\"mercedes\">Mercedes</option>\r\n    <option value=\"audi\">Audi</option>\r\n  </select>\r\n</mat-form-field>\r\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXJlc2V0LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zZWxlY3Qvc2VsZWN0LXJlc2V0L3NlbGVjdC1yZXNldC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1yZXNldC9zZWxlY3QtcmVzZXQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7QUFFaEUsc0NBQXNDO0FBT3RDLE1BQU0sT0FBTyxrQkFBa0I7SUFOL0I7UUFPRSxXQUFNLEdBQWE7WUFDakIsU0FBUztZQUNULFFBQVE7WUFDUixTQUFTO1lBQ1QsVUFBVTtZQUNWLFlBQVk7WUFDWixVQUFVO1lBQ1YsYUFBYTtZQUNiLFVBQVU7WUFDVixTQUFTO1lBQ1QsU0FBUztZQUNULFFBQVE7WUFDUixPQUFPO1lBQ1AsVUFBVTtZQUNWLFNBQVM7WUFDVCxNQUFNO1lBQ04sUUFBUTtZQUNSLFVBQVU7WUFDVixXQUFXO1lBQ1gsT0FBTztZQUNQLFVBQVU7WUFDVixlQUFlO1lBQ2YsVUFBVTtZQUNWLFdBQVc7WUFDWCxhQUFhO1lBQ2IsVUFBVTtZQUNWLFNBQVM7WUFDVCxVQUFVO1lBQ1YsUUFBUTtZQUNSLGVBQWU7WUFDZixZQUFZO1lBQ1osWUFBWTtZQUNaLFVBQVU7WUFDVixnQkFBZ0I7WUFDaEIsY0FBYztZQUNkLE1BQU07WUFDTixVQUFVO1lBQ1YsUUFBUTtZQUNSLGNBQWM7WUFDZCxjQUFjO1lBQ2QsZ0JBQWdCO1lBQ2hCLGNBQWM7WUFDZCxXQUFXO1lBQ1gsT0FBTztZQUNQLE1BQU07WUFDTixTQUFTO1lBQ1QsVUFBVTtZQUNWLFlBQVk7WUFDWixlQUFlO1lBQ2YsV0FBVztZQUNYLFNBQVM7U0FDVixDQUFDO0tBQ0g7OEdBckRZLGtCQUFrQjtrR0FBbEIsa0JBQWtCLGdGQ2IvQiwwc0JBc0JBLDJDRFhZLGtCQUFrQiwwU0FBRSxlQUFlLG1yQkFBRSxjQUFjLDBXQUFFLFdBQVc7OzJGQUUvRCxrQkFBa0I7a0JBTjlCLFNBQVM7K0JBQ0Usc0JBQXNCLGNBRXBCLElBQUksV0FDUCxDQUFDLGtCQUFrQixFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsV0FBVyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcclxuaW1wb3J0IHtNYXRTZWxlY3RNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NlbGVjdCc7XHJcbmltcG9ydCB7TWF0Rm9ybUZpZWxkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcclxuXHJcbi8qKiBAdGl0bGUgU2VsZWN0IHdpdGggcmVzZXQgb3B0aW9uICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2VsZWN0LXJlc2V0LWV4YW1wbGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnc2VsZWN0LXJlc2V0LWV4YW1wbGUuaHRtbCcsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbTWF0Rm9ybUZpZWxkTW9kdWxlLCBNYXRTZWxlY3RNb2R1bGUsIE1hdElucHV0TW9kdWxlLCBGb3Jtc01vZHVsZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RSZXNldEV4YW1wbGUge1xyXG4gIHN0YXRlczogc3RyaW5nW10gPSBbXHJcbiAgICAnQWxhYmFtYScsXHJcbiAgICAnQWxhc2thJyxcclxuICAgICdBcml6b25hJyxcclxuICAgICdBcmthbnNhcycsXHJcbiAgICAnQ2FsaWZvcm5pYScsXHJcbiAgICAnQ29sb3JhZG8nLFxyXG4gICAgJ0Nvbm5lY3RpY3V0JyxcclxuICAgICdEZWxhd2FyZScsXHJcbiAgICAnRmxvcmlkYScsXHJcbiAgICAnR2VvcmdpYScsXHJcbiAgICAnSGF3YWlpJyxcclxuICAgICdJZGFobycsXHJcbiAgICAnSWxsaW5vaXMnLFxyXG4gICAgJ0luZGlhbmEnLFxyXG4gICAgJ0lvd2EnLFxyXG4gICAgJ0thbnNhcycsXHJcbiAgICAnS2VudHVja3knLFxyXG4gICAgJ0xvdWlzaWFuYScsXHJcbiAgICAnTWFpbmUnLFxyXG4gICAgJ01hcnlsYW5kJyxcclxuICAgICdNYXNzYWNodXNldHRzJyxcclxuICAgICdNaWNoaWdhbicsXHJcbiAgICAnTWlubmVzb3RhJyxcclxuICAgICdNaXNzaXNzaXBwaScsXHJcbiAgICAnTWlzc291cmknLFxyXG4gICAgJ01vbnRhbmEnLFxyXG4gICAgJ05lYnJhc2thJyxcclxuICAgICdOZXZhZGEnLFxyXG4gICAgJ05ldyBIYW1wc2hpcmUnLFxyXG4gICAgJ05ldyBKZXJzZXknLFxyXG4gICAgJ05ldyBNZXhpY28nLFxyXG4gICAgJ05ldyBZb3JrJyxcclxuICAgICdOb3J0aCBDYXJvbGluYScsXHJcbiAgICAnTm9ydGggRGFrb3RhJyxcclxuICAgICdPaGlvJyxcclxuICAgICdPa2xhaG9tYScsXHJcbiAgICAnT3JlZ29uJyxcclxuICAgICdQZW5uc3lsdmFuaWEnLFxyXG4gICAgJ1Job2RlIElzbGFuZCcsXHJcbiAgICAnU291dGggQ2Fyb2xpbmEnLFxyXG4gICAgJ1NvdXRoIERha290YScsXHJcbiAgICAnVGVubmVzc2VlJyxcclxuICAgICdUZXhhcycsXHJcbiAgICAnVXRhaCcsXHJcbiAgICAnVmVybW9udCcsXHJcbiAgICAnVmlyZ2luaWEnLFxyXG4gICAgJ1dhc2hpbmd0b24nLFxyXG4gICAgJ1dlc3QgVmlyZ2luaWEnLFxyXG4gICAgJ1dpc2NvbnNpbicsXHJcbiAgICAnV3lvbWluZycsXHJcbiAgXTtcclxufVxyXG4iLCI8aDQ+bWF0LXNlbGVjdDwvaDQ+XHJcbjxtYXQtZm9ybS1maWVsZD5cclxuICA8bWF0LWxhYmVsPlN0YXRlPC9tYXQtbGFiZWw+XHJcbiAgPG1hdC1zZWxlY3Q+XHJcbiAgICA8bWF0LW9wdGlvbj5Ob25lPC9tYXQtb3B0aW9uPlxyXG4gICAgQGZvciAoc3RhdGUgb2Ygc3RhdGVzOyB0cmFjayBzdGF0ZSkge1xyXG4gICAgICA8bWF0LW9wdGlvbiBbdmFsdWVdPVwic3RhdGVcIj57e3N0YXRlfX08L21hdC1vcHRpb24+XHJcbiAgICB9XHJcbiAgPC9tYXQtc2VsZWN0PlxyXG48L21hdC1mb3JtLWZpZWxkPlxyXG5cclxuPGg0Pm5hdGl2ZSBodG1sIHNlbGVjdDwvaDQ+XHJcbjxtYXQtZm9ybS1maWVsZD5cclxuICA8bWF0LWxhYmVsPlNlbGVjdCB5b3VyIGNhcjwvbWF0LWxhYmVsPlxyXG4gIDxzZWxlY3QgbWF0TmF0aXZlQ29udHJvbCBpZD1cIm15U2VsZWN0SWRcIj5cclxuICAgIDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZCBzZWxlY3RlZD48L29wdGlvbj5cclxuICAgIDxvcHRpb24gdmFsdWU9XCJ2b2x2b1wiPlZvbHZvPC9vcHRpb24+XHJcbiAgICA8b3B0aW9uIHZhbHVlPVwic2FhYlwiPlNhYWI8L29wdGlvbj5cclxuICAgIDxvcHRpb24gdmFsdWU9XCJtZXJjZWRlc1wiPk1lcmNlZGVzPC9vcHRpb24+XHJcbiAgICA8b3B0aW9uIHZhbHVlPVwiYXVkaVwiPkF1ZGk8L29wdGlvbj5cclxuICA8L3NlbGVjdD5cclxuPC9tYXQtZm9ybS1maWVsZD5cclxuIl19