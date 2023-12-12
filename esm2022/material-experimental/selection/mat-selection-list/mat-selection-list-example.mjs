import { Component } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AsyncPipe } from '@angular/common';
import { MatSelectionModule } from '@angular/material-experimental/selection';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material-experimental/selection";
import * as i2 from "@angular/material/checkbox";
/**
 * @title Mat Selection on a simple list.
 */
export class MatSelectionListExample {
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
    trackByFn(index, value) {
        return index;
    }
    changeElementName() {
        this.data = ELEMENT_SYMBOLS;
    }
    reset() {
        this.data = ELEMENT_NAMES;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: MatSelectionListExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: MatSelectionListExample, isStandalone: true, selector: "mat-selection-list-example", ngImport: i0, template: "<h3><code>native input</code></h3>\r\nSelected: {{selected1}}\r\n<ul matSelection [dataSource]=\"data\" [matSelectionMultiple]=\"true\" (matSelectionChange)=\"selected1 = getCurrentSelected($event)\">\r\n  <input type=\"checkbox\" matSelectAll #allToggler=\"matSelectAll\"\r\n      [checked]=\"allToggler.checked | async\"\r\n      [indeterminate]=\"allToggler.indeterminate | async\"\r\n      (click)=\"allToggler.toggle($event)\">\r\n  @for (item of data; track item) {\r\n    <li>\r\n      <input type=\"checkbox\" matSelectionToggle #toggler=\"matSelectionToggle\" [matSelectionToggleValue]=\"item\"\r\n        [checked]=\"toggler.checked | async\" (click)=\"toggler.toggle()\">\r\n      {{item}}\r\n    </li>\r\n  }\r\n</ul>\r\n\r\n<h3><code>mat-checkbox</code></h3>\r\nSelected: {{selected2}}\r\n<ul matSelection [dataSource]=\"data\" [matSelectionMultiple]=\"true\" (matSelectionChange)=\"selected2 = getCurrentSelected($event)\">\r\n  <mat-checkbox matSelectAll #toggle1=\"matSelectAll\" [indeterminate]=\"toggle1.indeterminate | async\"></mat-checkbox>\r\n  @for (item of data; track item) {\r\n  <li>\r\n    <mat-checkbox matSelectionToggle [matSelectionToggleValue]=\"item\"></mat-checkbox>\r\n    {{item}}\r\n  </li>\r\n}\r\n</ul>\r\n\r\n<h3><code>Single select with mat-checkbox</code></h3>\r\nSelected: {{selected3}}\r\n<ul matSelection [dataSource]=\"data\" [matSelectionMultiple]=\"false\" (matSelectionChange)=\"selected3 = getCurrentSelected($event)\">\r\n  @for (item of data; track item) {\r\n    <li>\r\n      <mat-checkbox matSelectionToggle [matSelectionToggleValue]=\"item\"></mat-checkbox>\r\n      {{item}}\r\n    </li>\r\n  }\r\n</ul>\r\n\r\n<h3><code>with trackBy</code></h3>\r\nSelected: {{selected4}}\r\n<ul matSelection [dataSource]=\"data\" [matSelectionMultiple]=\"true\" [trackBy]=\"trackByFn\" (matSelectionChange)=\"selected4 = getCurrentSelected($event)\">\r\n  <mat-checkbox matSelectAll #toggle2=\"matSelectAll\" [indeterminate]=\"toggle2.indeterminate | async\"></mat-checkbox>\r\n  @for (item of data; track trackByFn(i, item); let i = $index) {\r\n    <li>\r\n      <mat-checkbox matSelectionToggle [matSelectionToggleValue]=\"item\" [matSelectionToggleIndex]=\"i\"></mat-checkbox>\r\n      {{item}}\r\n    </li>\r\n  }\r\n</ul>\r\n\r\n<button (click)=\"changeElementName()\">Change element names and the already selected stays</button>\r\n<button (click)=\"reset()\">reset</button>\r\n", dependencies: [{ kind: "ngmodule", type: MatSelectionModule }, { kind: "directive", type: i1.MatSelectAll, selector: "[matSelectAll]", exportAs: ["matSelectAll"] }, { kind: "directive", type: i1.MatSelection, selector: "[matSelection]", inputs: ["matSelectionMultiple"], outputs: ["matSelectionChange"], exportAs: ["matSelection"] }, { kind: "directive", type: i1.MatSelectionToggle, selector: "[matSelectionToggle]", inputs: ["matSelectionToggleIndex", "matSelectionToggleValue"], exportAs: ["matSelectionToggle"] }, { kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i2.MatCheckbox, selector: "mat-checkbox", inputs: ["aria-label", "aria-labelledby", "aria-describedby", "id", "required", "labelPosition", "name", "value", "disableRipple", "tabIndex", "color", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { kind: "pipe", type: AsyncPipe, name: "async" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: MatSelectionListExample, decorators: [{
            type: Component,
            args: [{ selector: 'mat-selection-list-example', standalone: true, imports: [MatSelectionModule, MatCheckboxModule, AsyncPipe], template: "<h3><code>native input</code></h3>\r\nSelected: {{selected1}}\r\n<ul matSelection [dataSource]=\"data\" [matSelectionMultiple]=\"true\" (matSelectionChange)=\"selected1 = getCurrentSelected($event)\">\r\n  <input type=\"checkbox\" matSelectAll #allToggler=\"matSelectAll\"\r\n      [checked]=\"allToggler.checked | async\"\r\n      [indeterminate]=\"allToggler.indeterminate | async\"\r\n      (click)=\"allToggler.toggle($event)\">\r\n  @for (item of data; track item) {\r\n    <li>\r\n      <input type=\"checkbox\" matSelectionToggle #toggler=\"matSelectionToggle\" [matSelectionToggleValue]=\"item\"\r\n        [checked]=\"toggler.checked | async\" (click)=\"toggler.toggle()\">\r\n      {{item}}\r\n    </li>\r\n  }\r\n</ul>\r\n\r\n<h3><code>mat-checkbox</code></h3>\r\nSelected: {{selected2}}\r\n<ul matSelection [dataSource]=\"data\" [matSelectionMultiple]=\"true\" (matSelectionChange)=\"selected2 = getCurrentSelected($event)\">\r\n  <mat-checkbox matSelectAll #toggle1=\"matSelectAll\" [indeterminate]=\"toggle1.indeterminate | async\"></mat-checkbox>\r\n  @for (item of data; track item) {\r\n  <li>\r\n    <mat-checkbox matSelectionToggle [matSelectionToggleValue]=\"item\"></mat-checkbox>\r\n    {{item}}\r\n  </li>\r\n}\r\n</ul>\r\n\r\n<h3><code>Single select with mat-checkbox</code></h3>\r\nSelected: {{selected3}}\r\n<ul matSelection [dataSource]=\"data\" [matSelectionMultiple]=\"false\" (matSelectionChange)=\"selected3 = getCurrentSelected($event)\">\r\n  @for (item of data; track item) {\r\n    <li>\r\n      <mat-checkbox matSelectionToggle [matSelectionToggleValue]=\"item\"></mat-checkbox>\r\n      {{item}}\r\n    </li>\r\n  }\r\n</ul>\r\n\r\n<h3><code>with trackBy</code></h3>\r\nSelected: {{selected4}}\r\n<ul matSelection [dataSource]=\"data\" [matSelectionMultiple]=\"true\" [trackBy]=\"trackByFn\" (matSelectionChange)=\"selected4 = getCurrentSelected($event)\">\r\n  <mat-checkbox matSelectAll #toggle2=\"matSelectAll\" [indeterminate]=\"toggle2.indeterminate | async\"></mat-checkbox>\r\n  @for (item of data; track trackByFn(i, item); let i = $index) {\r\n    <li>\r\n      <mat-checkbox matSelectionToggle [matSelectionToggleValue]=\"item\" [matSelectionToggleIndex]=\"i\"></mat-checkbox>\r\n      {{item}}\r\n    </li>\r\n  }\r\n</ul>\r\n\r\n<button (click)=\"changeElementName()\">Change element names and the already selected stays</button>\r\n<button (click)=\"reset()\">reset</button>\r\n" }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXNlbGVjdGlvbi1saXN0LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC1leHBlcmltZW50YWwvc2VsZWN0aW9uL21hdC1zZWxlY3Rpb24tbGlzdC9tYXQtc2VsZWN0aW9uLWxpc3QtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9zZWxlY3Rpb24vbWF0LXNlbGVjdGlvbi1saXN0L21hdC1zZWxlY3Rpb24tbGlzdC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDMUMsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sMENBQTBDLENBQUM7Ozs7QUFFNUU7O0dBRUc7QUFPSCxNQUFNLE9BQU8sdUJBQXVCO0lBTnBDO1FBT0UsU0FBSSxHQUFHLGFBQWEsQ0FBQztRQUNyQixjQUFTLEdBQWEsRUFBRSxDQUFDO1FBQ3pCLGNBQVMsR0FBYSxFQUFFLENBQUM7UUFDekIsY0FBUyxHQUFhLEVBQUUsQ0FBQztRQUN6QixjQUFTLEdBQWEsRUFBRSxDQUFDO0tBaUIxQjtJQWZDLGtCQUFrQixDQUFDLEtBQThCO1FBQy9DLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFhLEVBQUUsS0FBYTtRQUNwQyxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxpQkFBaUI7UUFDZixJQUFJLENBQUMsSUFBSSxHQUFHLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDO0lBQzVCLENBQUM7OEdBckJVLHVCQUF1QjtrR0FBdkIsdUJBQXVCLHNGQ2ZwQyw4M0VBcURBLDJDRHhDWSxrQkFBa0IscWVBQUUsaUJBQWlCLHlXQUFFLFNBQVM7OzJGQUUvQyx1QkFBdUI7a0JBTm5DLFNBQVM7K0JBQ0UsNEJBQTRCLGNBRTFCLElBQUksV0FDUCxDQUFDLGtCQUFrQixFQUFFLGlCQUFpQixFQUFFLFNBQVMsQ0FBQzs7QUEwQjdELE1BQU0sYUFBYSxHQUFHO0lBQ3BCLFVBQVU7SUFDVixRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7SUFDWCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFVBQVU7SUFDVixRQUFRO0lBQ1IsVUFBVTtJQUNWLE1BQU07SUFDTixRQUFRO0lBQ1IsV0FBVztJQUNYLFVBQVU7SUFDVixTQUFTO0lBQ1QsWUFBWTtJQUNaLFFBQVE7SUFDUixVQUFVO0lBQ1YsT0FBTztJQUNQLFdBQVc7SUFDWCxTQUFTO0NBQ1YsQ0FBQztBQUVGLE1BQU0sZUFBZSxHQUFHO0lBQ3RCLEdBQUc7SUFDSCxJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osR0FBRztJQUNILEdBQUc7SUFDSCxJQUFJO0lBQ0osSUFBSTtJQUNKLEdBQUc7SUFDSCxJQUFJO0NBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2VsZWN0aW9uQ2hhbmdlfSBmcm9tICdAYW5ndWxhci9jZGstZXhwZXJpbWVudGFsL3NlbGVjdGlvbic7XHJcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtNYXRDaGVja2JveE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xyXG5pbXBvcnQge0FzeW5jUGlwZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtNYXRTZWxlY3Rpb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9zZWxlY3Rpb24nO1xyXG5cclxuLyoqXHJcbiAqIEB0aXRsZSBNYXQgU2VsZWN0aW9uIG9uIGEgc2ltcGxlIGxpc3QuXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21hdC1zZWxlY3Rpb24tbGlzdC1leGFtcGxlJyxcclxuICB0ZW1wbGF0ZVVybDogJ21hdC1zZWxlY3Rpb24tbGlzdC1leGFtcGxlLmh0bWwnLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW01hdFNlbGVjdGlvbk1vZHVsZSwgTWF0Q2hlY2tib3hNb2R1bGUsIEFzeW5jUGlwZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXRTZWxlY3Rpb25MaXN0RXhhbXBsZSB7XHJcbiAgZGF0YSA9IEVMRU1FTlRfTkFNRVM7XHJcbiAgc2VsZWN0ZWQxOiBzdHJpbmdbXSA9IFtdO1xyXG4gIHNlbGVjdGVkMjogc3RyaW5nW10gPSBbXTtcclxuICBzZWxlY3RlZDM6IHN0cmluZ1tdID0gW107XHJcbiAgc2VsZWN0ZWQ0OiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICBnZXRDdXJyZW50U2VsZWN0ZWQoZXZlbnQ6IFNlbGVjdGlvbkNoYW5nZTxzdHJpbmc+KSB7XHJcbiAgICByZXR1cm4gZXZlbnQuYWZ0ZXIubWFwKHNlbGVjdCA9PiBzZWxlY3QudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgdHJhY2tCeUZuKGluZGV4OiBudW1iZXIsIHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBpbmRleDtcclxuICB9XHJcblxyXG4gIGNoYW5nZUVsZW1lbnROYW1lKCkge1xyXG4gICAgdGhpcy5kYXRhID0gRUxFTUVOVF9TWU1CT0xTO1xyXG4gIH1cclxuXHJcbiAgcmVzZXQoKSB7XHJcbiAgICB0aGlzLmRhdGEgPSBFTEVNRU5UX05BTUVTO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgRUxFTUVOVF9OQU1FUyA9IFtcclxuICAnSHlkcm9nZW4nLFxyXG4gICdIZWxpdW0nLFxyXG4gICdMaXRoaXVtJyxcclxuICAnQmVyeWxsaXVtJyxcclxuICAnQm9yb24nLFxyXG4gICdDYXJib24nLFxyXG4gICdOaXRyb2dlbicsXHJcbiAgJ094eWdlbicsXHJcbiAgJ0ZsdW9yaW5lJyxcclxuICAnTmVvbicsXHJcbiAgJ1NvZGl1bScsXHJcbiAgJ01hZ25lc2l1bScsXHJcbiAgJ0FsdW1pbnVtJyxcclxuICAnU2lsaWNvbicsXHJcbiAgJ1Bob3NwaG9ydXMnLFxyXG4gICdTdWxmdXInLFxyXG4gICdDaGxvcmluZScsXHJcbiAgJ0FyZ29uJyxcclxuICAnUG90YXNzaXVtJyxcclxuICAnQ2FsY2l1bScsXHJcbl07XHJcblxyXG5jb25zdCBFTEVNRU5UX1NZTUJPTFMgPSBbXHJcbiAgJ0gnLFxyXG4gICdIZScsXHJcbiAgJ0xpJyxcclxuICAnQmUnLFxyXG4gICdCJyxcclxuICAnQycsXHJcbiAgJ04nLFxyXG4gICdPJyxcclxuICAnRicsXHJcbiAgJ05lJyxcclxuICAnTmEnLFxyXG4gICdNZycsXHJcbiAgJ0FsJyxcclxuICAnU2knLFxyXG4gICdQJyxcclxuICAnUycsXHJcbiAgJ0NsJyxcclxuICAnQXInLFxyXG4gICdLJyxcclxuICAnQ2EnLFxyXG5dO1xyXG4iLCI8aDM+PGNvZGU+bmF0aXZlIGlucHV0PC9jb2RlPjwvaDM+XHJcblNlbGVjdGVkOiB7e3NlbGVjdGVkMX19XHJcbjx1bCBtYXRTZWxlY3Rpb24gW2RhdGFTb3VyY2VdPVwiZGF0YVwiIFttYXRTZWxlY3Rpb25NdWx0aXBsZV09XCJ0cnVlXCIgKG1hdFNlbGVjdGlvbkNoYW5nZSk9XCJzZWxlY3RlZDEgPSBnZXRDdXJyZW50U2VsZWN0ZWQoJGV2ZW50KVwiPlxyXG4gIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBtYXRTZWxlY3RBbGwgI2FsbFRvZ2dsZXI9XCJtYXRTZWxlY3RBbGxcIlxyXG4gICAgICBbY2hlY2tlZF09XCJhbGxUb2dnbGVyLmNoZWNrZWQgfCBhc3luY1wiXHJcbiAgICAgIFtpbmRldGVybWluYXRlXT1cImFsbFRvZ2dsZXIuaW5kZXRlcm1pbmF0ZSB8IGFzeW5jXCJcclxuICAgICAgKGNsaWNrKT1cImFsbFRvZ2dsZXIudG9nZ2xlKCRldmVudClcIj5cclxuICBAZm9yIChpdGVtIG9mIGRhdGE7IHRyYWNrIGl0ZW0pIHtcclxuICAgIDxsaT5cclxuICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG1hdFNlbGVjdGlvblRvZ2dsZSAjdG9nZ2xlcj1cIm1hdFNlbGVjdGlvblRvZ2dsZVwiIFttYXRTZWxlY3Rpb25Ub2dnbGVWYWx1ZV09XCJpdGVtXCJcclxuICAgICAgICBbY2hlY2tlZF09XCJ0b2dnbGVyLmNoZWNrZWQgfCBhc3luY1wiIChjbGljayk9XCJ0b2dnbGVyLnRvZ2dsZSgpXCI+XHJcbiAgICAgIHt7aXRlbX19XHJcbiAgICA8L2xpPlxyXG4gIH1cclxuPC91bD5cclxuXHJcbjxoMz48Y29kZT5tYXQtY2hlY2tib3g8L2NvZGU+PC9oMz5cclxuU2VsZWN0ZWQ6IHt7c2VsZWN0ZWQyfX1cclxuPHVsIG1hdFNlbGVjdGlvbiBbZGF0YVNvdXJjZV09XCJkYXRhXCIgW21hdFNlbGVjdGlvbk11bHRpcGxlXT1cInRydWVcIiAobWF0U2VsZWN0aW9uQ2hhbmdlKT1cInNlbGVjdGVkMiA9IGdldEN1cnJlbnRTZWxlY3RlZCgkZXZlbnQpXCI+XHJcbiAgPG1hdC1jaGVja2JveCBtYXRTZWxlY3RBbGwgI3RvZ2dsZTE9XCJtYXRTZWxlY3RBbGxcIiBbaW5kZXRlcm1pbmF0ZV09XCJ0b2dnbGUxLmluZGV0ZXJtaW5hdGUgfCBhc3luY1wiPjwvbWF0LWNoZWNrYm94PlxyXG4gIEBmb3IgKGl0ZW0gb2YgZGF0YTsgdHJhY2sgaXRlbSkge1xyXG4gIDxsaT5cclxuICAgIDxtYXQtY2hlY2tib3ggbWF0U2VsZWN0aW9uVG9nZ2xlIFttYXRTZWxlY3Rpb25Ub2dnbGVWYWx1ZV09XCJpdGVtXCI+PC9tYXQtY2hlY2tib3g+XHJcbiAgICB7e2l0ZW19fVxyXG4gIDwvbGk+XHJcbn1cclxuPC91bD5cclxuXHJcbjxoMz48Y29kZT5TaW5nbGUgc2VsZWN0IHdpdGggbWF0LWNoZWNrYm94PC9jb2RlPjwvaDM+XHJcblNlbGVjdGVkOiB7e3NlbGVjdGVkM319XHJcbjx1bCBtYXRTZWxlY3Rpb24gW2RhdGFTb3VyY2VdPVwiZGF0YVwiIFttYXRTZWxlY3Rpb25NdWx0aXBsZV09XCJmYWxzZVwiIChtYXRTZWxlY3Rpb25DaGFuZ2UpPVwic2VsZWN0ZWQzID0gZ2V0Q3VycmVudFNlbGVjdGVkKCRldmVudClcIj5cclxuICBAZm9yIChpdGVtIG9mIGRhdGE7IHRyYWNrIGl0ZW0pIHtcclxuICAgIDxsaT5cclxuICAgICAgPG1hdC1jaGVja2JveCBtYXRTZWxlY3Rpb25Ub2dnbGUgW21hdFNlbGVjdGlvblRvZ2dsZVZhbHVlXT1cIml0ZW1cIj48L21hdC1jaGVja2JveD5cclxuICAgICAge3tpdGVtfX1cclxuICAgIDwvbGk+XHJcbiAgfVxyXG48L3VsPlxyXG5cclxuPGgzPjxjb2RlPndpdGggdHJhY2tCeTwvY29kZT48L2gzPlxyXG5TZWxlY3RlZDoge3tzZWxlY3RlZDR9fVxyXG48dWwgbWF0U2VsZWN0aW9uIFtkYXRhU291cmNlXT1cImRhdGFcIiBbbWF0U2VsZWN0aW9uTXVsdGlwbGVdPVwidHJ1ZVwiIFt0cmFja0J5XT1cInRyYWNrQnlGblwiIChtYXRTZWxlY3Rpb25DaGFuZ2UpPVwic2VsZWN0ZWQ0ID0gZ2V0Q3VycmVudFNlbGVjdGVkKCRldmVudClcIj5cclxuICA8bWF0LWNoZWNrYm94IG1hdFNlbGVjdEFsbCAjdG9nZ2xlMj1cIm1hdFNlbGVjdEFsbFwiIFtpbmRldGVybWluYXRlXT1cInRvZ2dsZTIuaW5kZXRlcm1pbmF0ZSB8IGFzeW5jXCI+PC9tYXQtY2hlY2tib3g+XHJcbiAgQGZvciAoaXRlbSBvZiBkYXRhOyB0cmFjayB0cmFja0J5Rm4oaSwgaXRlbSk7IGxldCBpID0gJGluZGV4KSB7XHJcbiAgICA8bGk+XHJcbiAgICAgIDxtYXQtY2hlY2tib3ggbWF0U2VsZWN0aW9uVG9nZ2xlIFttYXRTZWxlY3Rpb25Ub2dnbGVWYWx1ZV09XCJpdGVtXCIgW21hdFNlbGVjdGlvblRvZ2dsZUluZGV4XT1cImlcIj48L21hdC1jaGVja2JveD5cclxuICAgICAge3tpdGVtfX1cclxuICAgIDwvbGk+XHJcbiAgfVxyXG48L3VsPlxyXG5cclxuPGJ1dHRvbiAoY2xpY2spPVwiY2hhbmdlRWxlbWVudE5hbWUoKVwiPkNoYW5nZSBlbGVtZW50IG5hbWVzIGFuZCB0aGUgYWxyZWFkeSBzZWxlY3RlZCBzdGF5czwvYnV0dG9uPlxyXG48YnV0dG9uIChjbGljayk9XCJyZXNldCgpXCI+cmVzZXQ8L2J1dHRvbj5cclxuIl19