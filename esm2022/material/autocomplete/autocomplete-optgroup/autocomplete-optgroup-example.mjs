import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/material/autocomplete";
import * as i5 from "@angular/material/core";
export const _filter = (opt, value) => {
    const filterValue = value.toLowerCase();
    return opt.filter(item => item.toLowerCase().includes(filterValue));
};
/**
 * @title Option groups autocomplete
 */
export class AutocompleteOptgroupExample {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.stateForm = this._formBuilder.group({
            stateGroup: '',
        });
        this.stateGroups = [
            {
                letter: 'A',
                names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas'],
            },
            {
                letter: 'C',
                names: ['California', 'Colorado', 'Connecticut'],
            },
            {
                letter: 'D',
                names: ['Delaware'],
            },
            {
                letter: 'F',
                names: ['Florida'],
            },
            {
                letter: 'G',
                names: ['Georgia'],
            },
            {
                letter: 'H',
                names: ['Hawaii'],
            },
            {
                letter: 'I',
                names: ['Idaho', 'Illinois', 'Indiana', 'Iowa'],
            },
            {
                letter: 'K',
                names: ['Kansas', 'Kentucky'],
            },
            {
                letter: 'L',
                names: ['Louisiana'],
            },
            {
                letter: 'M',
                names: [
                    'Maine',
                    'Maryland',
                    'Massachusetts',
                    'Michigan',
                    'Minnesota',
                    'Mississippi',
                    'Missouri',
                    'Montana',
                ],
            },
            {
                letter: 'N',
                names: [
                    'Nebraska',
                    'Nevada',
                    'New Hampshire',
                    'New Jersey',
                    'New Mexico',
                    'New York',
                    'North Carolina',
                    'North Dakota',
                ],
            },
            {
                letter: 'O',
                names: ['Ohio', 'Oklahoma', 'Oregon'],
            },
            {
                letter: 'P',
                names: ['Pennsylvania'],
            },
            {
                letter: 'R',
                names: ['Rhode Island'],
            },
            {
                letter: 'S',
                names: ['South Carolina', 'South Dakota'],
            },
            {
                letter: 'T',
                names: ['Tennessee', 'Texas'],
            },
            {
                letter: 'U',
                names: ['Utah'],
            },
            {
                letter: 'V',
                names: ['Vermont', 'Virginia'],
            },
            {
                letter: 'W',
                names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
            },
        ];
    }
    ngOnInit() {
        this.stateGroupOptions = this.stateForm.get('stateGroup').valueChanges.pipe(startWith(''), map(value => this._filterGroup(value || '')));
    }
    _filterGroup(value) {
        if (value) {
            return this.stateGroups
                .map(group => ({ letter: group.letter, names: _filter(group.names, value) }))
                .filter(group => group.names.length > 0);
        }
        return this.stateGroups;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: AutocompleteOptgroupExample, deps: [{ token: i1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: AutocompleteOptgroupExample, isStandalone: true, selector: "autocomplete-optgroup-example", ngImport: i0, template: "<form [formGroup]=\"stateForm\">\r\n  <mat-form-field>\r\n    <mat-label>States Group</mat-label>\r\n    <input type=\"text\"\r\n           matInput\r\n           formControlName=\"stateGroup\"\r\n           required\r\n           [matAutocomplete]=\"autoGroup\">\r\n<!-- #docregion mat-autocomplete -->\r\n      <mat-autocomplete #autoGroup=\"matAutocomplete\">\r\n        @for (group of stateGroupOptions | async; track group) {\r\n          <mat-optgroup [label]=\"group.letter\">\r\n            @for (name of group.names; track name) {\r\n              <mat-option [value]=\"name\">{{name}}</mat-option>\r\n            }\r\n          </mat-optgroup>\r\n        }\r\n    </mat-autocomplete>\r\n<!-- #enddocregion mat-autocomplete -->\r\n  </mat-form-field>\r\n</form>\r\n", dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatAutocompleteModule }, { kind: "component", type: i4.MatAutocomplete, selector: "mat-autocomplete", inputs: ["aria-label", "aria-labelledby", "displayWith", "autoActiveFirstOption", "autoSelectActiveOption", "requireSelection", "panelWidth", "disableRipple", "class", "hideSingleSelectionIndicator"], outputs: ["optionSelected", "opened", "closed", "optionActivated"], exportAs: ["matAutocomplete"] }, { kind: "component", type: i5.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "component", type: i5.MatOptgroup, selector: "mat-optgroup", inputs: ["label", "disabled"], exportAs: ["matOptgroup"] }, { kind: "directive", type: i4.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", inputs: ["matAutocomplete", "matAutocompletePosition", "matAutocompleteConnectedTo", "autocomplete", "matAutocompleteDisabled"], exportAs: ["matAutocompleteTrigger"] }, { kind: "pipe", type: AsyncPipe, name: "async" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: AutocompleteOptgroupExample, decorators: [{
            type: Component,
            args: [{ selector: 'autocomplete-optgroup-example', standalone: true, imports: [
                        FormsModule,
                        ReactiveFormsModule,
                        MatFormFieldModule,
                        MatInputModule,
                        MatAutocompleteModule,
                        AsyncPipe,
                    ], template: "<form [formGroup]=\"stateForm\">\r\n  <mat-form-field>\r\n    <mat-label>States Group</mat-label>\r\n    <input type=\"text\"\r\n           matInput\r\n           formControlName=\"stateGroup\"\r\n           required\r\n           [matAutocomplete]=\"autoGroup\">\r\n<!-- #docregion mat-autocomplete -->\r\n      <mat-autocomplete #autoGroup=\"matAutocomplete\">\r\n        @for (group of stateGroupOptions | async; track group) {\r\n          <mat-optgroup [label]=\"group.letter\">\r\n            @for (name of group.names; track name) {\r\n              <mat-option [value]=\"name\">{{name}}</mat-option>\r\n            }\r\n          </mat-optgroup>\r\n        }\r\n    </mat-autocomplete>\r\n<!-- #enddocregion mat-autocomplete -->\r\n  </mat-form-field>\r\n</form>\r\n" }]
        }], ctorParameters: () => [{ type: i1.FormBuilder }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLW9wdGdyb3VwLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLW9wdGdyb3VwL2F1dG9jb21wbGV0ZS1vcHRncm91cC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS1vcHRncm91cC9hdXRvY29tcGxldGUtb3B0Z3JvdXAtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3RSxPQUFPLEVBQUMsU0FBUyxFQUFFLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUMxQyxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNyRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7QUFPaEUsTUFBTSxDQUFDLE1BQU0sT0FBTyxHQUFHLENBQUMsR0FBYSxFQUFFLEtBQWEsRUFBWSxFQUFFO0lBQ2hFLE1BQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUV4QyxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLFdBQVcs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QUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQzFFLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFDYixHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUM3QyxDQUFDO0lBQ0osQ0FBQztJQUVPLFlBQVksQ0FBQyxLQUFhO1FBQ2hDLElBQUksS0FBSyxFQUFFO1lBQ1QsT0FBTyxJQUFJLENBQUMsV0FBVztpQkFDcEIsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBQyxDQUFDLENBQUM7aUJBQzFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzVDO1FBRUQsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7OEdBekhVLDJCQUEyQjtrR0FBM0IsMkJBQTJCLHlGQ3BDeEMsd3dCQXFCQSwyQ0RPSSxXQUFXLHczQkFDWCxtQkFBbUIsK1VBQ25CLGtCQUFrQiwwU0FDbEIsY0FBYywwV0FDZCxxQkFBcUIscTlCQUNyQixTQUFTOzsyRkFHQSwyQkFBMkI7a0JBYnZDLFNBQVM7K0JBQ0UsK0JBQStCLGNBRTdCLElBQUksV0FDUDt3QkFDUCxXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsa0JBQWtCO3dCQUNsQixjQUFjO3dCQUNkLHFCQUFxQjt3QkFDckIsU0FBUztxQkFDViIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQge3N0YXJ0V2l0aCwgbWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7QXN5bmNQaXBlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge01hdEF1dG9jb21wbGV0ZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlJztcclxuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xyXG5pbXBvcnQge01hdEZvcm1GaWVsZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlR3JvdXAge1xyXG4gIGxldHRlcjogc3RyaW5nO1xyXG4gIG5hbWVzOiBzdHJpbmdbXTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IF9maWx0ZXIgPSAob3B0OiBzdHJpbmdbXSwgdmFsdWU6IHN0cmluZyk6IHN0cmluZ1tdID0+IHtcclxuICBjb25zdCBmaWx0ZXJWYWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gIHJldHVybiBvcHQuZmlsdGVyKGl0ZW0gPT4gaXRlbS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGZpbHRlclZhbHVlKSk7XHJcbn07XHJcblxyXG4vKipcclxuICogQHRpdGxlIE9wdGlvbiBncm91cHMgYXV0b2NvbXBsZXRlXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2F1dG9jb21wbGV0ZS1vcHRncm91cC1leGFtcGxlJyxcclxuICB0ZW1wbGF0ZVVybDogJ2F1dG9jb21wbGV0ZS1vcHRncm91cC1leGFtcGxlLmh0bWwnLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW1xyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG4gICAgTWF0SW5wdXRNb2R1bGUsXHJcbiAgICBNYXRBdXRvY29tcGxldGVNb2R1bGUsXHJcbiAgICBBc3luY1BpcGUsXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEF1dG9jb21wbGV0ZU9wdGdyb3VwRXhhbXBsZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgc3RhdGVGb3JtID0gdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgc3RhdGVHcm91cDogJycsXHJcbiAgfSk7XHJcblxyXG4gIHN0YXRlR3JvdXBzOiBTdGF0ZUdyb3VwW10gPSBbXHJcbiAgICB7XHJcbiAgICAgIGxldHRlcjogJ0EnLFxyXG4gICAgICBuYW1lczogWydBbGFiYW1hJywgJ0FsYXNrYScsICdBcml6b25hJywgJ0Fya2Fuc2FzJ10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsZXR0ZXI6ICdDJyxcclxuICAgICAgbmFtZXM6IFsnQ2FsaWZvcm5pYScsICdDb2xvcmFkbycsICdDb25uZWN0aWN1dCddLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGV0dGVyOiAnRCcsXHJcbiAgICAgIG5hbWVzOiBbJ0RlbGF3YXJlJ10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsZXR0ZXI6ICdGJyxcclxuICAgICAgbmFtZXM6IFsnRmxvcmlkYSddLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGV0dGVyOiAnRycsXHJcbiAgICAgIG5hbWVzOiBbJ0dlb3JnaWEnXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxldHRlcjogJ0gnLFxyXG4gICAgICBuYW1lczogWydIYXdhaWknXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxldHRlcjogJ0knLFxyXG4gICAgICBuYW1lczogWydJZGFobycsICdJbGxpbm9pcycsICdJbmRpYW5hJywgJ0lvd2EnXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxldHRlcjogJ0snLFxyXG4gICAgICBuYW1lczogWydLYW5zYXMnLCAnS2VudHVja3knXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxldHRlcjogJ0wnLFxyXG4gICAgICBuYW1lczogWydMb3Vpc2lhbmEnXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxldHRlcjogJ00nLFxyXG4gICAgICBuYW1lczogW1xyXG4gICAgICAgICdNYWluZScsXHJcbiAgICAgICAgJ01hcnlsYW5kJyxcclxuICAgICAgICAnTWFzc2FjaHVzZXR0cycsXHJcbiAgICAgICAgJ01pY2hpZ2FuJyxcclxuICAgICAgICAnTWlubmVzb3RhJyxcclxuICAgICAgICAnTWlzc2lzc2lwcGknLFxyXG4gICAgICAgICdNaXNzb3VyaScsXHJcbiAgICAgICAgJ01vbnRhbmEnLFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGV0dGVyOiAnTicsXHJcbiAgICAgIG5hbWVzOiBbXHJcbiAgICAgICAgJ05lYnJhc2thJyxcclxuICAgICAgICAnTmV2YWRhJyxcclxuICAgICAgICAnTmV3IEhhbXBzaGlyZScsXHJcbiAgICAgICAgJ05ldyBKZXJzZXknLFxyXG4gICAgICAgICdOZXcgTWV4aWNvJyxcclxuICAgICAgICAnTmV3IFlvcmsnLFxyXG4gICAgICAgICdOb3J0aCBDYXJvbGluYScsXHJcbiAgICAgICAgJ05vcnRoIERha290YScsXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsZXR0ZXI6ICdPJyxcclxuICAgICAgbmFtZXM6IFsnT2hpbycsICdPa2xhaG9tYScsICdPcmVnb24nXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxldHRlcjogJ1AnLFxyXG4gICAgICBuYW1lczogWydQZW5uc3lsdmFuaWEnXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxldHRlcjogJ1InLFxyXG4gICAgICBuYW1lczogWydSaG9kZSBJc2xhbmQnXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxldHRlcjogJ1MnLFxyXG4gICAgICBuYW1lczogWydTb3V0aCBDYXJvbGluYScsICdTb3V0aCBEYWtvdGEnXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxldHRlcjogJ1QnLFxyXG4gICAgICBuYW1lczogWydUZW5uZXNzZWUnLCAnVGV4YXMnXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxldHRlcjogJ1UnLFxyXG4gICAgICBuYW1lczogWydVdGFoJ10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsZXR0ZXI6ICdWJyxcclxuICAgICAgbmFtZXM6IFsnVmVybW9udCcsICdWaXJnaW5pYSddLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGV0dGVyOiAnVycsXHJcbiAgICAgIG5hbWVzOiBbJ1dhc2hpbmd0b24nLCAnV2VzdCBWaXJnaW5pYScsICdXaXNjb25zaW4nLCAnV3lvbWluZyddLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICBzdGF0ZUdyb3VwT3B0aW9uczogT2JzZXJ2YWJsZTxTdGF0ZUdyb3VwW10+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5zdGF0ZUdyb3VwT3B0aW9ucyA9IHRoaXMuc3RhdGVGb3JtLmdldCgnc3RhdGVHcm91cCcpIS52YWx1ZUNoYW5nZXMucGlwZShcclxuICAgICAgc3RhcnRXaXRoKCcnKSxcclxuICAgICAgbWFwKHZhbHVlID0+IHRoaXMuX2ZpbHRlckdyb3VwKHZhbHVlIHx8ICcnKSksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZmlsdGVyR3JvdXAodmFsdWU6IHN0cmluZyk6IFN0YXRlR3JvdXBbXSB7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc3RhdGVHcm91cHNcclxuICAgICAgICAubWFwKGdyb3VwID0+ICh7bGV0dGVyOiBncm91cC5sZXR0ZXIsIG5hbWVzOiBfZmlsdGVyKGdyb3VwLm5hbWVzLCB2YWx1ZSl9KSlcclxuICAgICAgICAuZmlsdGVyKGdyb3VwID0+IGdyb3VwLm5hbWVzLmxlbmd0aCA+IDApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLnN0YXRlR3JvdXBzO1xyXG4gIH1cclxufVxyXG4iLCI8Zm9ybSBbZm9ybUdyb3VwXT1cInN0YXRlRm9ybVwiPlxyXG4gIDxtYXQtZm9ybS1maWVsZD5cclxuICAgIDxtYXQtbGFiZWw+U3RhdGVzIEdyb3VwPC9tYXQtbGFiZWw+XHJcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgIG1hdElucHV0XHJcbiAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwic3RhdGVHcm91cFwiXHJcbiAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICBbbWF0QXV0b2NvbXBsZXRlXT1cImF1dG9Hcm91cFwiPlxyXG48IS0tICNkb2NyZWdpb24gbWF0LWF1dG9jb21wbGV0ZSAtLT5cclxuICAgICAgPG1hdC1hdXRvY29tcGxldGUgI2F1dG9Hcm91cD1cIm1hdEF1dG9jb21wbGV0ZVwiPlxyXG4gICAgICAgIEBmb3IgKGdyb3VwIG9mIHN0YXRlR3JvdXBPcHRpb25zIHwgYXN5bmM7IHRyYWNrIGdyb3VwKSB7XHJcbiAgICAgICAgICA8bWF0LW9wdGdyb3VwIFtsYWJlbF09XCJncm91cC5sZXR0ZXJcIj5cclxuICAgICAgICAgICAgQGZvciAobmFtZSBvZiBncm91cC5uYW1lczsgdHJhY2sgbmFtZSkge1xyXG4gICAgICAgICAgICAgIDxtYXQtb3B0aW9uIFt2YWx1ZV09XCJuYW1lXCI+e3tuYW1lfX08L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvbWF0LW9wdGdyb3VwPlxyXG4gICAgICAgIH1cclxuICAgIDwvbWF0LWF1dG9jb21wbGV0ZT5cclxuPCEtLSAjZW5kZG9jcmVnaW9uIG1hdC1hdXRvY29tcGxldGUgLS0+XHJcbiAgPC9tYXQtZm9ybS1maWVsZD5cclxuPC9mb3JtPlxyXG4iXX0=