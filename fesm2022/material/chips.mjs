import { ENTER, COMMA } from '@angular/cdk/keycodes';
import * as i0 from '@angular/core';
import { inject, Component, ViewChild } from '@angular/core';
import * as i1 from '@angular/forms';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i5 from '@angular/material/autocomplete';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import * as i1$1 from '@angular/material/chips';
import { MatChipsModule } from '@angular/material/chips';
import { startWith, map } from 'rxjs/operators';
import * as i4 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import { AsyncPipe } from '@angular/common';
import * as i2 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import * as i6 from '@angular/material/core';
import { moveItemInArray, CdkDropList, CdkDrag } from '@angular/cdk/drag-drop';
import * as i1$2 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';

/**
 * @title Chips Autocomplete
 */
class ChipsAutocompleteExample {
    constructor() {
        this.separatorKeysCodes = [ENTER, COMMA];
        this.fruitCtrl = new FormControl('');
        this.fruits = ['Lemon'];
        this.allFruits = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
        this.announcer = inject(LiveAnnouncer);
        this.filteredFruits = this.fruitCtrl.valueChanges.pipe(startWith(null), map((fruit) => (fruit ? this._filter(fruit) : this.allFruits.slice())));
    }
    add(event) {
        const value = (event.value || '').trim();
        // Add our fruit
        if (value) {
            this.fruits.push(value);
        }
        // Clear the input value
        event.chipInput.clear();
        this.fruitCtrl.setValue(null);
    }
    remove(fruit) {
        const index = this.fruits.indexOf(fruit);
        if (index >= 0) {
            this.fruits.splice(index, 1);
            this.announcer.announce(`Removed ${fruit}`);
        }
    }
    selected(event) {
        this.fruits.push(event.option.viewValue);
        this.fruitInput.nativeElement.value = '';
        this.fruitCtrl.setValue(null);
    }
    _filter(value) {
        const filterValue = value.toLowerCase();
        return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ChipsAutocompleteExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: ChipsAutocompleteExample, isStandalone: true, selector: "chips-autocomplete-example", viewQueries: [{ propertyName: "fruitInput", first: true, predicate: ["fruitInput"], descendants: true }], ngImport: i0, template: "<form>\r\n  <mat-form-field class=\"example-chip-list\">\r\n    <mat-label>Favorite Fruits</mat-label>\r\n    <mat-chip-grid #chipGrid aria-label=\"Fruit selection\">\r\n      @for (fruit of fruits; track fruit) {\r\n        <mat-chip-row (removed)=\"remove(fruit)\">\r\n          {{fruit}}\r\n          <button matChipRemove [attr.aria-label]=\"'remove ' + fruit\">\r\n            <mat-icon>cancel</mat-icon>\r\n          </button>\r\n        </mat-chip-row>\r\n      }\r\n    </mat-chip-grid>\r\n    <input placeholder=\"New Fruit...\" #fruitInput [formControl]=\"fruitCtrl\"\r\n      [matChipInputFor]=\"chipGrid\" [matAutocomplete]=\"auto\"\r\n      [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n      (matChipInputTokenEnd)=\"add($event)\"/>\r\n    <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\r\n      @for (fruit of filteredFruits | async; track fruit) {\r\n        <mat-option [value]=\"fruit\">{{fruit}}</mat-option>\r\n      }\r\n    </mat-autocomplete>\r\n  </mat-form-field>\r\n</form>\r\n", styles: [".example-chip-list {\r\n  width: 100%;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatChipsModule }, { kind: "component", type: i1$1.MatChipGrid, selector: "mat-chip-grid", inputs: ["disabled", "placeholder", "required", "value", "errorStateMatcher"], outputs: ["change", "valueChange"] }, { kind: "directive", type: i1$1.MatChipInput, selector: "input[matChipInputFor]", inputs: ["matChipInputFor", "matChipInputAddOnBlur", "matChipInputSeparatorKeyCodes", "placeholder", "id", "disabled"], outputs: ["matChipInputTokenEnd"], exportAs: ["matChipInput", "matChipInputFor"] }, { kind: "directive", type: i1$1.MatChipRemove, selector: "[matChipRemove]" }, { kind: "component", type: i1$1.MatChipRow, selector: "mat-chip-row, [mat-chip-row], mat-basic-chip-row, [mat-basic-chip-row]", inputs: ["editable"], outputs: ["edited"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "ngmodule", type: MatAutocompleteModule }, { kind: "component", type: i5.MatAutocomplete, selector: "mat-autocomplete", inputs: ["aria-label", "aria-labelledby", "displayWith", "autoActiveFirstOption", "autoSelectActiveOption", "requireSelection", "panelWidth", "disableRipple", "class", "hideSingleSelectionIndicator"], outputs: ["optionSelected", "opened", "closed", "optionActivated"], exportAs: ["matAutocomplete"] }, { kind: "component", type: i6.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "directive", type: i5.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", inputs: ["matAutocomplete", "matAutocompletePosition", "matAutocompleteConnectedTo", "autocomplete", "matAutocompleteDisabled"], exportAs: ["matAutocompleteTrigger"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "pipe", type: AsyncPipe, name: "async" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ChipsAutocompleteExample, decorators: [{
            type: Component,
            args: [{ selector: 'chips-autocomplete-example', standalone: true, imports: [
                        FormsModule,
                        MatFormFieldModule,
                        MatChipsModule,
                        MatIconModule,
                        MatAutocompleteModule,
                        ReactiveFormsModule,
                        AsyncPipe,
                    ], template: "<form>\r\n  <mat-form-field class=\"example-chip-list\">\r\n    <mat-label>Favorite Fruits</mat-label>\r\n    <mat-chip-grid #chipGrid aria-label=\"Fruit selection\">\r\n      @for (fruit of fruits; track fruit) {\r\n        <mat-chip-row (removed)=\"remove(fruit)\">\r\n          {{fruit}}\r\n          <button matChipRemove [attr.aria-label]=\"'remove ' + fruit\">\r\n            <mat-icon>cancel</mat-icon>\r\n          </button>\r\n        </mat-chip-row>\r\n      }\r\n    </mat-chip-grid>\r\n    <input placeholder=\"New Fruit...\" #fruitInput [formControl]=\"fruitCtrl\"\r\n      [matChipInputFor]=\"chipGrid\" [matAutocomplete]=\"auto\"\r\n      [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n      (matChipInputTokenEnd)=\"add($event)\"/>\r\n    <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\r\n      @for (fruit of filteredFruits | async; track fruit) {\r\n        <mat-option [value]=\"fruit\">{{fruit}}</mat-option>\r\n      }\r\n    </mat-autocomplete>\r\n  </mat-form-field>\r\n</form>\r\n", styles: [".example-chip-list {\r\n  width: 100%;\r\n}\r\n"] }]
        }], ctorParameters: () => [], propDecorators: { fruitInput: [{
                type: ViewChild,
                args: ['fruitInput']
            }] } });

/**
 * @title Chips Drag and Drop
 */
class ChipsDragDropExample {
    constructor() {
        this.vegetables = [
            { name: 'apple' },
            { name: 'banana' },
            { name: 'strawberry' },
            { name: 'orange' },
            { name: 'kiwi' },
            { name: 'cherry' },
        ];
    }
    drop(event) {
        moveItemInArray(this.vegetables, event.previousIndex, event.currentIndex);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ChipsDragDropExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: ChipsDragDropExample, isStandalone: true, selector: "chips-drag-drop-example", ngImport: i0, template: "<mat-chip-set\r\n  class=\"example-chip\"\r\n  cdkDropList\r\n  cdkDropListOrientation=\"horizontal\"\r\n  (cdkDropListDropped)=\"drop($event)\">\r\n  @for (vegetable of vegetables; track vegetable) {\r\n    <mat-chip class=\"example-box\" cdkDrag>{{vegetable.name}}</mat-chip>\r\n  }\r\n</mat-chip-set>\r\n", styles: [".example-box.cdk-drag-animating {\r\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n\r\n.example-chip .cdk-drop-list-dragging {\r\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatChipsModule }, { kind: "component", type: i1$1.MatChip, selector: "mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]", inputs: ["role", "id", "aria-label", "aria-description", "value", "color", "removable", "highlighted", "disableRipple", "disabled", "tabIndex"], outputs: ["removed", "destroyed"], exportAs: ["matChip"] }, { kind: "component", type: i1$1.MatChipSet, selector: "mat-chip-set", inputs: ["disabled", "role", "tabIndex"] }, { kind: "directive", type: CdkDropList, selector: "[cdkDropList], cdk-drop-list", inputs: ["cdkDropListConnectedTo", "cdkDropListData", "cdkDropListOrientation", "id", "cdkDropListLockAxis", "cdkDropListDisabled", "cdkDropListSortingDisabled", "cdkDropListEnterPredicate", "cdkDropListSortPredicate", "cdkDropListAutoScrollDisabled", "cdkDropListAutoScrollStep"], outputs: ["cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited", "cdkDropListSorted"], exportAs: ["cdkDropList"] }, { kind: "directive", type: CdkDrag, selector: "[cdkDrag]", inputs: ["cdkDragData", "cdkDragLockAxis", "cdkDragRootElement", "cdkDragBoundary", "cdkDragStartDelay", "cdkDragFreeDragPosition", "cdkDragDisabled", "cdkDragConstrainPosition", "cdkDragPreviewClass", "cdkDragPreviewContainer"], outputs: ["cdkDragStarted", "cdkDragReleased", "cdkDragEnded", "cdkDragEntered", "cdkDragExited", "cdkDragDropped", "cdkDragMoved"], exportAs: ["cdkDrag"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ChipsDragDropExample, decorators: [{
            type: Component,
            args: [{ selector: 'chips-drag-drop-example', standalone: true, imports: [MatChipsModule, CdkDropList, CdkDrag], template: "<mat-chip-set\r\n  class=\"example-chip\"\r\n  cdkDropList\r\n  cdkDropListOrientation=\"horizontal\"\r\n  (cdkDropListDropped)=\"drop($event)\">\r\n  @for (vegetable of vegetables; track vegetable) {\r\n    <mat-chip class=\"example-box\" cdkDrag>{{vegetable.name}}</mat-chip>\r\n  }\r\n</mat-chip-set>\r\n", styles: [".example-box.cdk-drag-animating {\r\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n\r\n.example-chip .cdk-drop-list-dragging {\r\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n"] }]
        }] });

/**
 * @title Chips with input
 */
class ChipsInputExample {
    constructor() {
        this.addOnBlur = true;
        this.separatorKeysCodes = [ENTER, COMMA];
        this.fruits = [{ name: 'Lemon' }, { name: 'Lime' }, { name: 'Apple' }];
        this.announcer = inject(LiveAnnouncer);
    }
    add(event) {
        const value = (event.value || '').trim();
        // Add our fruit
        if (value) {
            this.fruits.push({ name: value });
        }
        // Clear the input value
        event.chipInput.clear();
    }
    remove(fruit) {
        const index = this.fruits.indexOf(fruit);
        if (index >= 0) {
            this.fruits.splice(index, 1);
            this.announcer.announce(`Removed ${fruit}`);
        }
    }
    edit(fruit, event) {
        const value = event.value.trim();
        // Remove fruit if it no longer has a name
        if (!value) {
            this.remove(fruit);
            return;
        }
        // Edit existing fruit
        const index = this.fruits.indexOf(fruit);
        if (index >= 0) {
            this.fruits[index].name = value;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ChipsInputExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: ChipsInputExample, isStandalone: true, selector: "chips-input-example", ngImport: i0, template: "<mat-form-field class=\"example-chip-list\">\r\n  <mat-label>Favorite Fruits</mat-label>\r\n  <mat-chip-grid #chipGrid aria-label=\"Enter fruits\">\r\n    @for (fruit of fruits; track fruit) {\r\n      <mat-chip-row\r\n        (removed)=\"remove(fruit)\"\r\n        [editable]=\"true\"\r\n        (edited)=\"edit(fruit, $event)\"\r\n        [aria-description]=\"'press enter to edit ' + fruit.name\">\r\n        {{fruit.name}}\r\n        <button matChipRemove [attr.aria-label]=\"'remove ' + fruit.name\">\r\n          <mat-icon>cancel</mat-icon>\r\n        </button>\r\n      </mat-chip-row>\r\n    }\r\n    <input placeholder=\"New fruit...\"\r\n           [matChipInputFor]=\"chipGrid\"\r\n           [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n           [matChipInputAddOnBlur]=\"addOnBlur\"\r\n           (matChipInputTokenEnd)=\"add($event)\"/>\r\n  </mat-chip-grid>\r\n</mat-form-field>\r\n", styles: [".example-chip-list {\r\n  width: 100%;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatChipsModule }, { kind: "component", type: i1$1.MatChipGrid, selector: "mat-chip-grid", inputs: ["disabled", "placeholder", "required", "value", "errorStateMatcher"], outputs: ["change", "valueChange"] }, { kind: "directive", type: i1$1.MatChipInput, selector: "input[matChipInputFor]", inputs: ["matChipInputFor", "matChipInputAddOnBlur", "matChipInputSeparatorKeyCodes", "placeholder", "id", "disabled"], outputs: ["matChipInputTokenEnd"], exportAs: ["matChipInput", "matChipInputFor"] }, { kind: "directive", type: i1$1.MatChipRemove, selector: "[matChipRemove]" }, { kind: "component", type: i1$1.MatChipRow, selector: "mat-chip-row, [mat-chip-row], mat-basic-chip-row, [mat-basic-chip-row]", inputs: ["editable"], outputs: ["edited"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ChipsInputExample, decorators: [{
            type: Component,
            args: [{ selector: 'chips-input-example', standalone: true, imports: [MatFormFieldModule, MatChipsModule, MatIconModule], template: "<mat-form-field class=\"example-chip-list\">\r\n  <mat-label>Favorite Fruits</mat-label>\r\n  <mat-chip-grid #chipGrid aria-label=\"Enter fruits\">\r\n    @for (fruit of fruits; track fruit) {\r\n      <mat-chip-row\r\n        (removed)=\"remove(fruit)\"\r\n        [editable]=\"true\"\r\n        (edited)=\"edit(fruit, $event)\"\r\n        [aria-description]=\"'press enter to edit ' + fruit.name\">\r\n        {{fruit.name}}\r\n        <button matChipRemove [attr.aria-label]=\"'remove ' + fruit.name\">\r\n          <mat-icon>cancel</mat-icon>\r\n        </button>\r\n      </mat-chip-row>\r\n    }\r\n    <input placeholder=\"New fruit...\"\r\n           [matChipInputFor]=\"chipGrid\"\r\n           [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n           [matChipInputAddOnBlur]=\"addOnBlur\"\r\n           (matChipInputTokenEnd)=\"add($event)\"/>\r\n  </mat-chip-grid>\r\n</mat-form-field>\r\n", styles: [".example-chip-list {\r\n  width: 100%;\r\n}\r\n"] }]
        }] });

/**
 * @title Basic chips
 */
class ChipsOverviewExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ChipsOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: ChipsOverviewExample, isStandalone: true, selector: "chips-overview-example", ngImport: i0, template: "<mat-chip-listbox aria-label=\"Fish selection\">\r\n  <mat-chip-option>One fish</mat-chip-option>\r\n  <mat-chip-option>Two fish</mat-chip-option>\r\n  <mat-chip-option color=\"accent\" selected>Accent fish</mat-chip-option>\r\n  <mat-chip-option color=\"warn\">Warn fish</mat-chip-option>\r\n</mat-chip-listbox>", dependencies: [{ kind: "ngmodule", type: MatChipsModule }, { kind: "component", type: i1$1.MatChipListbox, selector: "mat-chip-listbox", inputs: ["multiple", "aria-orientation", "selectable", "compareWith", "required", "hideSingleSelectionIndicator", "value"], outputs: ["change"] }, { kind: "component", type: i1$1.MatChipOption, selector: "mat-basic-chip-option, [mat-basic-chip-option], mat-chip-option, [mat-chip-option]", inputs: ["selectable", "selected"], outputs: ["selectionChange"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ChipsOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'chips-overview-example', standalone: true, imports: [MatChipsModule], template: "<mat-chip-listbox aria-label=\"Fish selection\">\r\n  <mat-chip-option>One fish</mat-chip-option>\r\n  <mat-chip-option>Two fish</mat-chip-option>\r\n  <mat-chip-option color=\"accent\" selected>Accent fish</mat-chip-option>\r\n  <mat-chip-option color=\"warn\">Warn fish</mat-chip-option>\r\n</mat-chip-listbox>" }]
        }] });

/**
 * @title Stacked chips
 */
class ChipsStackedExample {
    constructor() {
        this.availableColors = [
            { name: 'none', color: undefined },
            { name: 'Primary', color: 'primary' },
            { name: 'Accent', color: 'accent' },
            { name: 'Warn', color: 'warn' },
        ];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ChipsStackedExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: ChipsStackedExample, isStandalone: true, selector: "chips-stacked-example", ngImport: i0, template: "<mat-chip-listbox class=\"mat-mdc-chip-set-stacked\" aria-label=\"Color selection\">\r\n  @for (chip of availableColors; track chip) {\r\n    <mat-chip-option selected [color]=\"chip.color\">{{chip.name}}</mat-chip-option>\r\n  }\r\n</mat-chip-listbox>\r\n", styles: [".mat-mdc-chip-set {\r\n  max-width: 200px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatChipsModule }, { kind: "component", type: i1$1.MatChipListbox, selector: "mat-chip-listbox", inputs: ["multiple", "aria-orientation", "selectable", "compareWith", "required", "hideSingleSelectionIndicator", "value"], outputs: ["change"] }, { kind: "component", type: i1$1.MatChipOption, selector: "mat-basic-chip-option, [mat-basic-chip-option], mat-chip-option, [mat-chip-option]", inputs: ["selectable", "selected"], outputs: ["selectionChange"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ChipsStackedExample, decorators: [{
            type: Component,
            args: [{ selector: 'chips-stacked-example', standalone: true, imports: [MatChipsModule], template: "<mat-chip-listbox class=\"mat-mdc-chip-set-stacked\" aria-label=\"Color selection\">\r\n  @for (chip of availableColors; track chip) {\r\n    <mat-chip-option selected [color]=\"chip.color\">{{chip.name}}</mat-chip-option>\r\n  }\r\n</mat-chip-listbox>\r\n", styles: [".mat-mdc-chip-set {\r\n  max-width: 200px;\r\n}\r\n"] }]
        }] });

/**
 * @title Testing with MatChipsHarness
 */
class ChipsHarnessExample {
    constructor() {
        this.isDisabled = false;
        this.remove = jasmine.createSpy('remove spy');
        this.add = jasmine.createSpy('add spy');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ChipsHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: ChipsHarnessExample, isStandalone: true, selector: "chips-harness-example", ngImport: i0, template: "<mat-chip-listbox\r\n    [disabled]=\"isDisabled\"\r\n    [aria-orientation]=\"'horizontal'\">\r\n  <mat-chip-option (removed)=\"remove()\">Chip 1</mat-chip-option>\r\n  <mat-chip-option (removed)=\"remove()\">\r\n    Chip 2\r\n    <button matChipRemove aria-label=\"remove Chip 2\"><mat-icon>remove_icon</mat-icon></button>\r\n  </mat-chip-option>\r\n  <mat-chip-option (removed)=\"remove()\"><mat-chip-avatar>C</mat-chip-avatar>Chip 4</mat-chip-option>\r\n</mat-chip-listbox>", dependencies: [{ kind: "ngmodule", type: MatChipsModule }, { kind: "directive", type: i1$1.MatChipAvatar, selector: "mat-chip-avatar, [matChipAvatar]" }, { kind: "component", type: i1$1.MatChipListbox, selector: "mat-chip-listbox", inputs: ["multiple", "aria-orientation", "selectable", "compareWith", "required", "hideSingleSelectionIndicator", "value"], outputs: ["change"] }, { kind: "component", type: i1$1.MatChipOption, selector: "mat-basic-chip-option, [mat-basic-chip-option], mat-chip-option, [mat-chip-option]", inputs: ["selectable", "selected"], outputs: ["selectionChange"] }, { kind: "directive", type: i1$1.MatChipRemove, selector: "[matChipRemove]" }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ChipsHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'chips-harness-example', standalone: true, imports: [MatChipsModule, MatIconModule], template: "<mat-chip-listbox\r\n    [disabled]=\"isDisabled\"\r\n    [aria-orientation]=\"'horizontal'\">\r\n  <mat-chip-option (removed)=\"remove()\">Chip 1</mat-chip-option>\r\n  <mat-chip-option (removed)=\"remove()\">\r\n    Chip 2\r\n    <button matChipRemove aria-label=\"remove Chip 2\"><mat-icon>remove_icon</mat-icon></button>\r\n  </mat-chip-option>\r\n  <mat-chip-option (removed)=\"remove()\"><mat-chip-avatar>C</mat-chip-avatar>Chip 4</mat-chip-option>\r\n</mat-chip-listbox>" }]
        }] });

/**
 * @title Chips with form control
 */
class ChipsFormControlExample {
    constructor() {
        this.keywords = ['angular', 'how-to', 'tutorial', 'accessibility'];
        this.formControl = new FormControl(['angular']);
        this.announcer = inject(LiveAnnouncer);
    }
    removeKeyword(keyword) {
        const index = this.keywords.indexOf(keyword);
        if (index >= 0) {
            this.keywords.splice(index, 1);
            this.announcer.announce(`removed ${keyword}`);
        }
    }
    add(event) {
        const value = (event.value || '').trim();
        // Add our keyword
        if (value) {
            this.keywords.push(value);
        }
        // Clear the input value
        event.chipInput.clear();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ChipsFormControlExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: ChipsFormControlExample, isStandalone: true, selector: "chips-form-control-example", ngImport: i0, template: "<div class=\"example-button-container\">\r\n  <button mat-raised-button (click)=\"formControl.disable()\">Disable form control</button>\r\n  <button mat-raised-button (click)=\"formControl.enable()\">Enable form control</button>\r\n</div>\r\n<p>\r\n  <em>Enter video keywords</em>\r\n</p>\r\n<mat-form-field class=\"example-form-field\">\r\n  <mat-label>Video keywords</mat-label>\r\n  <mat-chip-grid #chipGrid aria-label=\"Enter keywords\" [formControl]=\"formControl\" >\r\n    @for (keyword of keywords; track keyword) {\r\n      <mat-chip-row (removed)=\"removeKeyword(keyword)\">\r\n        {{keyword}}\r\n        <button matChipRemove aria-label=\"'remove ' + keyword\">\r\n          <mat-icon>cancel</mat-icon>\r\n        </button>\r\n      </mat-chip-row>\r\n    }\r\n  </mat-chip-grid>\r\n  <input placeholder=\"New keyword...\"\r\n          [matChipInputFor]=\"chipGrid\"\r\n          (matChipInputTokenEnd)=\"add($event)\"/>\r\n</mat-form-field>\r\n\r\n<p>\r\n  <strong>The following keywords are entered:</strong> {{formControl.value}}\r\n</p>\r\n", styles: [".example-form-field {\r\n  width: 100%;\r\n}\r\n\r\n.example-button-container > button {\r\n  margin: 0 12px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1$2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatChipsModule }, { kind: "component", type: i1$1.MatChipGrid, selector: "mat-chip-grid", inputs: ["disabled", "placeholder", "required", "value", "errorStateMatcher"], outputs: ["change", "valueChange"] }, { kind: "directive", type: i1$1.MatChipInput, selector: "input[matChipInputFor]", inputs: ["matChipInputFor", "matChipInputAddOnBlur", "matChipInputSeparatorKeyCodes", "placeholder", "id", "disabled"], outputs: ["matChipInputTokenEnd"], exportAs: ["matChipInput", "matChipInputFor"] }, { kind: "directive", type: i1$1.MatChipRemove, selector: "[matChipRemove]" }, { kind: "component", type: i1$1.MatChipRow, selector: "mat-chip-row, [mat-chip-row], mat-basic-chip-row, [mat-basic-chip-row]", inputs: ["editable"], outputs: ["edited"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ChipsFormControlExample, decorators: [{
            type: Component,
            args: [{ selector: 'chips-form-control-example', standalone: true, imports: [
                        MatButtonModule,
                        MatFormFieldModule,
                        MatChipsModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatIconModule,
                    ], template: "<div class=\"example-button-container\">\r\n  <button mat-raised-button (click)=\"formControl.disable()\">Disable form control</button>\r\n  <button mat-raised-button (click)=\"formControl.enable()\">Enable form control</button>\r\n</div>\r\n<p>\r\n  <em>Enter video keywords</em>\r\n</p>\r\n<mat-form-field class=\"example-form-field\">\r\n  <mat-label>Video keywords</mat-label>\r\n  <mat-chip-grid #chipGrid aria-label=\"Enter keywords\" [formControl]=\"formControl\" >\r\n    @for (keyword of keywords; track keyword) {\r\n      <mat-chip-row (removed)=\"removeKeyword(keyword)\">\r\n        {{keyword}}\r\n        <button matChipRemove aria-label=\"'remove ' + keyword\">\r\n          <mat-icon>cancel</mat-icon>\r\n        </button>\r\n      </mat-chip-row>\r\n    }\r\n  </mat-chip-grid>\r\n  <input placeholder=\"New keyword...\"\r\n          [matChipInputFor]=\"chipGrid\"\r\n          (matChipInputTokenEnd)=\"add($event)\"/>\r\n</mat-form-field>\r\n\r\n<p>\r\n  <strong>The following keywords are entered:</strong> {{formControl.value}}\r\n</p>\r\n", styles: [".example-form-field {\r\n  width: 100%;\r\n}\r\n\r\n.example-button-container > button {\r\n  margin: 0 12px;\r\n}\r\n"] }]
        }] });

/**
 * @title Chips avatar
 * @description An avatar inside a chip
 */
class ChipsAvatarExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ChipsAvatarExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: ChipsAvatarExample, isStandalone: true, selector: "chips-avatar-example", ngImport: i0, template: "<mat-chip-listbox aria-label=\"Dog selection\">\r\n  <mat-chip>\r\n    <img matChipAvatar src=\"https://material.angular.io/assets/img/examples/shiba1.jpg\" alt=\"Photo of a Shiba Inu\"/>\r\n    Dog one\r\n  </mat-chip>\r\n  <mat-chip color=\"primary\">\r\n    <img matChipAvatar src=\"https://material.angular.io/assets/img/examples/shiba1.jpg\" alt=\"Photo of a Shiba Inu\"/>\r\n    Dog two\r\n  </mat-chip>\r\n  <mat-chip color=\"accent\">\r\n    <img matChipAvatar src=\"https://material.angular.io/assets/img/examples/shiba1.jpg\" alt=\"Photo of a Shiba Inu\"/>\r\n    Dog three\r\n  </mat-chip>\r\n</mat-chip-listbox>", styles: [""], dependencies: [{ kind: "ngmodule", type: MatChipsModule }, { kind: "component", type: i1$1.MatChip, selector: "mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]", inputs: ["role", "id", "aria-label", "aria-description", "value", "color", "removable", "highlighted", "disableRipple", "disabled", "tabIndex"], outputs: ["removed", "destroyed"], exportAs: ["matChip"] }, { kind: "directive", type: i1$1.MatChipAvatar, selector: "mat-chip-avatar, [matChipAvatar]" }, { kind: "component", type: i1$1.MatChipListbox, selector: "mat-chip-listbox", inputs: ["multiple", "aria-orientation", "selectable", "compareWith", "required", "hideSingleSelectionIndicator", "value"], outputs: ["change"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ChipsAvatarExample, decorators: [{
            type: Component,
            args: [{ selector: 'chips-avatar-example', standalone: true, imports: [MatChipsModule], template: "<mat-chip-listbox aria-label=\"Dog selection\">\r\n  <mat-chip>\r\n    <img matChipAvatar src=\"https://material.angular.io/assets/img/examples/shiba1.jpg\" alt=\"Photo of a Shiba Inu\"/>\r\n    Dog one\r\n  </mat-chip>\r\n  <mat-chip color=\"primary\">\r\n    <img matChipAvatar src=\"https://material.angular.io/assets/img/examples/shiba1.jpg\" alt=\"Photo of a Shiba Inu\"/>\r\n    Dog two\r\n  </mat-chip>\r\n  <mat-chip color=\"accent\">\r\n    <img matChipAvatar src=\"https://material.angular.io/assets/img/examples/shiba1.jpg\" alt=\"Photo of a Shiba Inu\"/>\r\n    Dog three\r\n  </mat-chip>\r\n</mat-chip-listbox>" }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { ChipsAutocompleteExample, ChipsAvatarExample, ChipsDragDropExample, ChipsFormControlExample, ChipsHarnessExample, ChipsInputExample, ChipsOverviewExample, ChipsStackedExample };
//# sourceMappingURL=chips.mjs.map
