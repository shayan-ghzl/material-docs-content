import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { CdkSelectionModule } from '@angular/cdk-experimental/selection';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk-experimental/selection";
import * as i2 from "@angular/material/checkbox";
/**
 * @title CDK Selection on a simple list.
 */
export class CdkSelectionListExample {
    constructor() {
        this.data = ELEMENT_NAMES;
        this.selected1 = [];
        this.selected2 = [];
        this.selected3 = [];
        this.selected4 = [];
    }
    getCurrentSelected(event) {
        return event.after.map(select => select.value);
    }
    trackByFn(index) {
        return index;
    }
    changeElementName() {
        this.data = ELEMENT_SYMBOLS;
    }
    reset() {
        this.data = ELEMENT_NAMES;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkSelectionListExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: CdkSelectionListExample, isStandalone: true, selector: "cdk-selection-list-example", ngImport: i0, template: "<h3><code>native input</code></h3>\r\nSelected: {{selected1}}\r\n<ul cdkSelection [dataSource]=\"data\" [cdkSelectionMultiple]=\"true\" (cdkSelectionChange)=\"selected1 = getCurrentSelected($event)\">\r\n  <input type=\"checkbox\" cdkSelectAll #allToggler=\"cdkSelectAll\"\r\n      [checked]=\"allToggler.checked | async\"\r\n      [indeterminate]=\"allToggler.indeterminate | async\"\r\n      (click)=\"allToggler.toggle($event)\">\r\n  @for (item of data; track item) {\r\n    <li>\r\n      <input type=\"checkbox\" cdkSelectionToggle #toggler=\"cdkSelectionToggle\" [cdkSelectionToggleValue]=\"item\"\r\n        [checked]=\"toggler.checked | async\" (click)=\"toggler.toggle()\">\r\n      {{item}}\r\n    </li>\r\n  }\r\n</ul>\r\n\r\n<h3><code>mat-checkbox</code></h3>\r\nSelected: {{selected2}}\r\n<ul cdkSelection [dataSource]=\"data\" [cdkSelectionMultiple]=\"true\" (cdkSelectionChange)=\"selected2 = getCurrentSelected($event)\">\r\n  <mat-checkbox cdkSelectAll #toggle1=\"cdkSelectAll\" [indeterminate]=\"toggle1.indeterminate | async\"></mat-checkbox>\r\n  @for (item of data; track item) {\r\n    <li>\r\n      <mat-checkbox cdkSelectionToggle [cdkSelectionToggleValue]=\"item\"></mat-checkbox>\r\n      {{item}}\r\n    </li>\r\n  }\r\n</ul>\r\n\r\n<h3><code>Single select with mat-checkbox</code></h3>\r\nSelected: {{selected3}}\r\n<ul cdkSelection [dataSource]=\"data\" [cdkSelectionMultiple]=\"false\" (cdkSelectionChange)=\"selected3 = getCurrentSelected($event)\">\r\n  @for (item of data; track item) {\r\n    <li>\r\n      <mat-checkbox cdkSelectionToggle [cdkSelectionToggleValue]=\"item\"></mat-checkbox>\r\n      {{item}}\r\n    </li>\r\n  }\r\n</ul>\r\n\r\n<h3><code>with trackBy</code></h3>\r\nSelected: {{selected4}}\r\n<ul cdkSelection [dataSource]=\"data\" [cdkSelectionMultiple]=\"true\" [trackBy]=\"trackByFn\" (cdkSelectionChange)=\"selected4 = getCurrentSelected($event)\">\r\n  <mat-checkbox cdkSelectAll #toggle2=\"cdkSelectAll\" [indeterminate]=\"toggle2.indeterminate | async\"></mat-checkbox>\r\n  @for (item of data; track trackByFn($index)) {\r\n    <li>\r\n      <mat-checkbox cdkSelectionToggle [cdkSelectionToggleValue]=\"item\" [cdkSelectionToggleIndex]=\"$index\"></mat-checkbox>\r\n      {{item}}\r\n    </li>\r\n  }\r\n</ul>\r\n\r\n<button (click)=\"changeElementName()\">Change element names and the already selected stays</button>\r\n<button (click)=\"reset()\">reset</button>\r\n", dependencies: [{ kind: "ngmodule", type: CdkSelectionModule }, { kind: "directive", type: i1.CdkSelection, selector: "[cdkSelection]", inputs: ["dataSource", "trackBy", "cdkSelectionMultiple"], outputs: ["cdkSelectionChange"], exportAs: ["cdkSelection"] }, { kind: "directive", type: i1.CdkSelectionToggle, selector: "[cdkSelectionToggle]", inputs: ["cdkSelectionToggleValue", "cdkSelectionToggleIndex"], exportAs: ["cdkSelectionToggle"] }, { kind: "directive", type: i1.CdkSelectAll, selector: "[cdkSelectAll]", exportAs: ["cdkSelectAll"] }, { kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i2.MatCheckbox, selector: "mat-checkbox", inputs: ["aria-label", "aria-labelledby", "aria-describedby", "id", "required", "labelPosition", "name", "value", "disableRipple", "tabIndex", "color", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { kind: "pipe", type: AsyncPipe, name: "async" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkSelectionListExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-selection-list-example', standalone: true, imports: [CdkSelectionModule, MatCheckboxModule, AsyncPipe], template: "<h3><code>native input</code></h3>\r\nSelected: {{selected1}}\r\n<ul cdkSelection [dataSource]=\"data\" [cdkSelectionMultiple]=\"true\" (cdkSelectionChange)=\"selected1 = getCurrentSelected($event)\">\r\n  <input type=\"checkbox\" cdkSelectAll #allToggler=\"cdkSelectAll\"\r\n      [checked]=\"allToggler.checked | async\"\r\n      [indeterminate]=\"allToggler.indeterminate | async\"\r\n      (click)=\"allToggler.toggle($event)\">\r\n  @for (item of data; track item) {\r\n    <li>\r\n      <input type=\"checkbox\" cdkSelectionToggle #toggler=\"cdkSelectionToggle\" [cdkSelectionToggleValue]=\"item\"\r\n        [checked]=\"toggler.checked | async\" (click)=\"toggler.toggle()\">\r\n      {{item}}\r\n    </li>\r\n  }\r\n</ul>\r\n\r\n<h3><code>mat-checkbox</code></h3>\r\nSelected: {{selected2}}\r\n<ul cdkSelection [dataSource]=\"data\" [cdkSelectionMultiple]=\"true\" (cdkSelectionChange)=\"selected2 = getCurrentSelected($event)\">\r\n  <mat-checkbox cdkSelectAll #toggle1=\"cdkSelectAll\" [indeterminate]=\"toggle1.indeterminate | async\"></mat-checkbox>\r\n  @for (item of data; track item) {\r\n    <li>\r\n      <mat-checkbox cdkSelectionToggle [cdkSelectionToggleValue]=\"item\"></mat-checkbox>\r\n      {{item}}\r\n    </li>\r\n  }\r\n</ul>\r\n\r\n<h3><code>Single select with mat-checkbox</code></h3>\r\nSelected: {{selected3}}\r\n<ul cdkSelection [dataSource]=\"data\" [cdkSelectionMultiple]=\"false\" (cdkSelectionChange)=\"selected3 = getCurrentSelected($event)\">\r\n  @for (item of data; track item) {\r\n    <li>\r\n      <mat-checkbox cdkSelectionToggle [cdkSelectionToggleValue]=\"item\"></mat-checkbox>\r\n      {{item}}\r\n    </li>\r\n  }\r\n</ul>\r\n\r\n<h3><code>with trackBy</code></h3>\r\nSelected: {{selected4}}\r\n<ul cdkSelection [dataSource]=\"data\" [cdkSelectionMultiple]=\"true\" [trackBy]=\"trackByFn\" (cdkSelectionChange)=\"selected4 = getCurrentSelected($event)\">\r\n  <mat-checkbox cdkSelectAll #toggle2=\"cdkSelectAll\" [indeterminate]=\"toggle2.indeterminate | async\"></mat-checkbox>\r\n  @for (item of data; track trackByFn($index)) {\r\n    <li>\r\n      <mat-checkbox cdkSelectionToggle [cdkSelectionToggleValue]=\"item\" [cdkSelectionToggleIndex]=\"$index\"></mat-checkbox>\r\n      {{item}}\r\n    </li>\r\n  }\r\n</ul>\r\n\r\n<button (click)=\"changeElementName()\">Change element names and the already selected stays</button>\r\n<button (click)=\"reset()\">reset</button>\r\n" }]
        }] });
const ELEMENT_NAMES = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium',
    'Boron',
    'Carbon',
    'Nitrogen',
    'Oxygen',
    'Fluorine',
    'Neon',
    'Sodium',
    'Magnesium',
    'Aluminum',
    'Silicon',
    'Phosphorus',
    'Sulfur',
    'Chlorine',
    'Argon',
    'Potassium',
    'Calcium',
];
const ELEMENT_SYMBOLS = [
    'H',
    'He',
    'Li',
    'Be',
    'B',
    'C',
    'N',
    'O',
    'F',
    'Ne',
    'Na',
    'Mg',
    'Al',
    'Si',
    'P',
    'S',
    'Cl',
    'Ar',
    'K',
    'Ca',
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXNlbGVjdGlvbi1saXN0LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGstZXhwZXJpbWVudGFsL3NlbGVjdGlvbi9jZGstc2VsZWN0aW9uLWxpc3QvY2RrLXNlbGVjdGlvbi1saXN0LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGstZXhwZXJpbWVudGFsL3NlbGVjdGlvbi9jZGstc2VsZWN0aW9uLWxpc3QvY2RrLXNlbGVjdGlvbi1saXN0LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUMxQyxPQUFPLEVBQWtCLGtCQUFrQixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDeEYsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7Ozs7QUFFN0Q7O0dBRUc7QUFPSCxNQUFNLE9BQU8sdUJBQXVCO0lBTnBDO1FBT0UsU0FBSSxHQUFHLGFBQWEsQ0FBQztRQUNyQixjQUFTLEdBQWEsRUFBRSxDQUFDO1FBQ3pCLGNBQVMsR0FBYSxFQUFFLENBQUM7UUFDekIsY0FBUyxHQUFhLEVBQUUsQ0FBQztRQUN6QixjQUFTLEdBQWEsRUFBRSxDQUFDO0tBaUIxQjtJQWZDLGtCQUFrQixDQUFDLEtBQThCO1FBQy9DLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFhO1FBQ3JCLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELGlCQUFpQjtRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsZUFBZSxDQUFDO0lBQzlCLENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLElBQUksR0FBRyxhQUFhLENBQUM7SUFDNUIsQ0FBQzs4R0FyQlUsdUJBQXVCO2tHQUF2Qix1QkFBdUIsc0ZDZHBDLDQzRUFxREEsMkNEekNZLGtCQUFrQiw4ZkFBRSxpQkFBaUIseVdBQUUsU0FBUzs7MkZBRS9DLHVCQUF1QjtrQkFObkMsU0FBUzsrQkFDRSw0QkFBNEIsY0FFMUIsSUFBSSxXQUNQLENBQUMsa0JBQWtCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxDQUFDOztBQTBCN0QsTUFBTSxhQUFhLEdBQUc7SUFDcEIsVUFBVTtJQUNWLFFBQVE7SUFDUixTQUFTO0lBQ1QsV0FBVztJQUNYLE9BQU87SUFDUCxRQUFRO0lBQ1IsVUFBVTtJQUNWLFFBQVE7SUFDUixVQUFVO0lBQ1YsTUFBTTtJQUNOLFFBQVE7SUFDUixXQUFXO0lBQ1gsVUFBVTtJQUNWLFNBQVM7SUFDVCxZQUFZO0lBQ1osUUFBUTtJQUNSLFVBQVU7SUFDVixPQUFPO0lBQ1AsV0FBVztJQUNYLFNBQVM7Q0FDVixDQUFDO0FBRUYsTUFBTSxlQUFlLEdBQUc7SUFDdEIsR0FBRztJQUNILElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixHQUFHO0lBQ0gsR0FBRztJQUNILElBQUk7SUFDSixJQUFJO0lBQ0osR0FBRztJQUNILElBQUk7Q0FDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0FzeW5jUGlwZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtTZWxlY3Rpb25DaGFuZ2UsIENka1NlbGVjdGlvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrLWV4cGVyaW1lbnRhbC9zZWxlY3Rpb24nO1xyXG5pbXBvcnQge01hdENoZWNrYm94TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XHJcblxyXG4vKipcclxuICogQHRpdGxlIENESyBTZWxlY3Rpb24gb24gYSBzaW1wbGUgbGlzdC5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY2RrLXNlbGVjdGlvbi1saXN0LWV4YW1wbGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnY2RrLXNlbGVjdGlvbi1saXN0LWV4YW1wbGUuaHRtbCcsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbQ2RrU2VsZWN0aW9uTW9kdWxlLCBNYXRDaGVja2JveE1vZHVsZSwgQXN5bmNQaXBlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENka1NlbGVjdGlvbkxpc3RFeGFtcGxlIHtcclxuICBkYXRhID0gRUxFTUVOVF9OQU1FUztcclxuICBzZWxlY3RlZDE6IHN0cmluZ1tdID0gW107XHJcbiAgc2VsZWN0ZWQyOiBzdHJpbmdbXSA9IFtdO1xyXG4gIHNlbGVjdGVkMzogc3RyaW5nW10gPSBbXTtcclxuICBzZWxlY3RlZDQ6IHN0cmluZ1tdID0gW107XHJcblxyXG4gIGdldEN1cnJlbnRTZWxlY3RlZChldmVudDogU2VsZWN0aW9uQ2hhbmdlPHN0cmluZz4pIHtcclxuICAgIHJldHVybiBldmVudC5hZnRlci5tYXAoc2VsZWN0ID0+IHNlbGVjdC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICB0cmFja0J5Rm4oaW5kZXg6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIGluZGV4O1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlRWxlbWVudE5hbWUoKSB7XHJcbiAgICB0aGlzLmRhdGEgPSBFTEVNRU5UX1NZTUJPTFM7XHJcbiAgfVxyXG5cclxuICByZXNldCgpIHtcclxuICAgIHRoaXMuZGF0YSA9IEVMRU1FTlRfTkFNRVM7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBFTEVNRU5UX05BTUVTID0gW1xyXG4gICdIeWRyb2dlbicsXHJcbiAgJ0hlbGl1bScsXHJcbiAgJ0xpdGhpdW0nLFxyXG4gICdCZXJ5bGxpdW0nLFxyXG4gICdCb3JvbicsXHJcbiAgJ0NhcmJvbicsXHJcbiAgJ05pdHJvZ2VuJyxcclxuICAnT3h5Z2VuJyxcclxuICAnRmx1b3JpbmUnLFxyXG4gICdOZW9uJyxcclxuICAnU29kaXVtJyxcclxuICAnTWFnbmVzaXVtJyxcclxuICAnQWx1bWludW0nLFxyXG4gICdTaWxpY29uJyxcclxuICAnUGhvc3Bob3J1cycsXHJcbiAgJ1N1bGZ1cicsXHJcbiAgJ0NobG9yaW5lJyxcclxuICAnQXJnb24nLFxyXG4gICdQb3Rhc3NpdW0nLFxyXG4gICdDYWxjaXVtJyxcclxuXTtcclxuXHJcbmNvbnN0IEVMRU1FTlRfU1lNQk9MUyA9IFtcclxuICAnSCcsXHJcbiAgJ0hlJyxcclxuICAnTGknLFxyXG4gICdCZScsXHJcbiAgJ0InLFxyXG4gICdDJyxcclxuICAnTicsXHJcbiAgJ08nLFxyXG4gICdGJyxcclxuICAnTmUnLFxyXG4gICdOYScsXHJcbiAgJ01nJyxcclxuICAnQWwnLFxyXG4gICdTaScsXHJcbiAgJ1AnLFxyXG4gICdTJyxcclxuICAnQ2wnLFxyXG4gICdBcicsXHJcbiAgJ0snLFxyXG4gICdDYScsXHJcbl07XHJcbiIsIjxoMz48Y29kZT5uYXRpdmUgaW5wdXQ8L2NvZGU+PC9oMz5cclxuU2VsZWN0ZWQ6IHt7c2VsZWN0ZWQxfX1cclxuPHVsIGNka1NlbGVjdGlvbiBbZGF0YVNvdXJjZV09XCJkYXRhXCIgW2Nka1NlbGVjdGlvbk11bHRpcGxlXT1cInRydWVcIiAoY2RrU2VsZWN0aW9uQ2hhbmdlKT1cInNlbGVjdGVkMSA9IGdldEN1cnJlbnRTZWxlY3RlZCgkZXZlbnQpXCI+XHJcbiAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNka1NlbGVjdEFsbCAjYWxsVG9nZ2xlcj1cImNka1NlbGVjdEFsbFwiXHJcbiAgICAgIFtjaGVja2VkXT1cImFsbFRvZ2dsZXIuY2hlY2tlZCB8IGFzeW5jXCJcclxuICAgICAgW2luZGV0ZXJtaW5hdGVdPVwiYWxsVG9nZ2xlci5pbmRldGVybWluYXRlIHwgYXN5bmNcIlxyXG4gICAgICAoY2xpY2spPVwiYWxsVG9nZ2xlci50b2dnbGUoJGV2ZW50KVwiPlxyXG4gIEBmb3IgKGl0ZW0gb2YgZGF0YTsgdHJhY2sgaXRlbSkge1xyXG4gICAgPGxpPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2RrU2VsZWN0aW9uVG9nZ2xlICN0b2dnbGVyPVwiY2RrU2VsZWN0aW9uVG9nZ2xlXCIgW2Nka1NlbGVjdGlvblRvZ2dsZVZhbHVlXT1cIml0ZW1cIlxyXG4gICAgICAgIFtjaGVja2VkXT1cInRvZ2dsZXIuY2hlY2tlZCB8IGFzeW5jXCIgKGNsaWNrKT1cInRvZ2dsZXIudG9nZ2xlKClcIj5cclxuICAgICAge3tpdGVtfX1cclxuICAgIDwvbGk+XHJcbiAgfVxyXG48L3VsPlxyXG5cclxuPGgzPjxjb2RlPm1hdC1jaGVja2JveDwvY29kZT48L2gzPlxyXG5TZWxlY3RlZDoge3tzZWxlY3RlZDJ9fVxyXG48dWwgY2RrU2VsZWN0aW9uIFtkYXRhU291cmNlXT1cImRhdGFcIiBbY2RrU2VsZWN0aW9uTXVsdGlwbGVdPVwidHJ1ZVwiIChjZGtTZWxlY3Rpb25DaGFuZ2UpPVwic2VsZWN0ZWQyID0gZ2V0Q3VycmVudFNlbGVjdGVkKCRldmVudClcIj5cclxuICA8bWF0LWNoZWNrYm94IGNka1NlbGVjdEFsbCAjdG9nZ2xlMT1cImNka1NlbGVjdEFsbFwiIFtpbmRldGVybWluYXRlXT1cInRvZ2dsZTEuaW5kZXRlcm1pbmF0ZSB8IGFzeW5jXCI+PC9tYXQtY2hlY2tib3g+XHJcbiAgQGZvciAoaXRlbSBvZiBkYXRhOyB0cmFjayBpdGVtKSB7XHJcbiAgICA8bGk+XHJcbiAgICAgIDxtYXQtY2hlY2tib3ggY2RrU2VsZWN0aW9uVG9nZ2xlIFtjZGtTZWxlY3Rpb25Ub2dnbGVWYWx1ZV09XCJpdGVtXCI+PC9tYXQtY2hlY2tib3g+XHJcbiAgICAgIHt7aXRlbX19XHJcbiAgICA8L2xpPlxyXG4gIH1cclxuPC91bD5cclxuXHJcbjxoMz48Y29kZT5TaW5nbGUgc2VsZWN0IHdpdGggbWF0LWNoZWNrYm94PC9jb2RlPjwvaDM+XHJcblNlbGVjdGVkOiB7e3NlbGVjdGVkM319XHJcbjx1bCBjZGtTZWxlY3Rpb24gW2RhdGFTb3VyY2VdPVwiZGF0YVwiIFtjZGtTZWxlY3Rpb25NdWx0aXBsZV09XCJmYWxzZVwiIChjZGtTZWxlY3Rpb25DaGFuZ2UpPVwic2VsZWN0ZWQzID0gZ2V0Q3VycmVudFNlbGVjdGVkKCRldmVudClcIj5cclxuICBAZm9yIChpdGVtIG9mIGRhdGE7IHRyYWNrIGl0ZW0pIHtcclxuICAgIDxsaT5cclxuICAgICAgPG1hdC1jaGVja2JveCBjZGtTZWxlY3Rpb25Ub2dnbGUgW2Nka1NlbGVjdGlvblRvZ2dsZVZhbHVlXT1cIml0ZW1cIj48L21hdC1jaGVja2JveD5cclxuICAgICAge3tpdGVtfX1cclxuICAgIDwvbGk+XHJcbiAgfVxyXG48L3VsPlxyXG5cclxuPGgzPjxjb2RlPndpdGggdHJhY2tCeTwvY29kZT48L2gzPlxyXG5TZWxlY3RlZDoge3tzZWxlY3RlZDR9fVxyXG48dWwgY2RrU2VsZWN0aW9uIFtkYXRhU291cmNlXT1cImRhdGFcIiBbY2RrU2VsZWN0aW9uTXVsdGlwbGVdPVwidHJ1ZVwiIFt0cmFja0J5XT1cInRyYWNrQnlGblwiIChjZGtTZWxlY3Rpb25DaGFuZ2UpPVwic2VsZWN0ZWQ0ID0gZ2V0Q3VycmVudFNlbGVjdGVkKCRldmVudClcIj5cclxuICA8bWF0LWNoZWNrYm94IGNka1NlbGVjdEFsbCAjdG9nZ2xlMj1cImNka1NlbGVjdEFsbFwiIFtpbmRldGVybWluYXRlXT1cInRvZ2dsZTIuaW5kZXRlcm1pbmF0ZSB8IGFzeW5jXCI+PC9tYXQtY2hlY2tib3g+XHJcbiAgQGZvciAoaXRlbSBvZiBkYXRhOyB0cmFjayB0cmFja0J5Rm4oJGluZGV4KSkge1xyXG4gICAgPGxpPlxyXG4gICAgICA8bWF0LWNoZWNrYm94IGNka1NlbGVjdGlvblRvZ2dsZSBbY2RrU2VsZWN0aW9uVG9nZ2xlVmFsdWVdPVwiaXRlbVwiIFtjZGtTZWxlY3Rpb25Ub2dnbGVJbmRleF09XCIkaW5kZXhcIj48L21hdC1jaGVja2JveD5cclxuICAgICAge3tpdGVtfX1cclxuICAgIDwvbGk+XHJcbiAgfVxyXG48L3VsPlxyXG5cclxuPGJ1dHRvbiAoY2xpY2spPVwiY2hhbmdlRWxlbWVudE5hbWUoKVwiPkNoYW5nZSBlbGVtZW50IG5hbWVzIGFuZCB0aGUgYWxyZWFkeSBzZWxlY3RlZCBzdGF5czwvYnV0dG9uPlxyXG48YnV0dG9uIChjbGljayk9XCJyZXNldCgpXCI+cmVzZXQ8L2J1dHRvbj5cclxuIl19