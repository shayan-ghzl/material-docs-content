import * as i0 from '@angular/core';
import { Component } from '@angular/core';
import * as i1 from '@angular/material/sort';
import { MatSortModule } from '@angular/material/sort';

/**
 * @title Sorting overview
 */
class SortOverviewExample {
    constructor() {
        this.desserts = [
            { name: 'Frozen yogurt', calories: 159, fat: 6, carbs: 24, protein: 4 },
            { name: 'Ice cream sandwich', calories: 237, fat: 9, carbs: 37, protein: 4 },
            { name: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6 },
            { name: 'Cupcake', calories: 305, fat: 4, carbs: 67, protein: 4 },
            { name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 4 },
        ];
        this.sortedData = this.desserts.slice();
    }
    sortData(sort) {
        const data = this.desserts.slice();
        if (!sort.active || sort.direction === '') {
            this.sortedData = data;
            return;
        }
        this.sortedData = data.sort((a, b) => {
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'name':
                    return compare(a.name, b.name, isAsc);
                case 'calories':
                    return compare(a.calories, b.calories, isAsc);
                case 'fat':
                    return compare(a.fat, b.fat, isAsc);
                case 'carbs':
                    return compare(a.carbs, b.carbs, isAsc);
                case 'protein':
                    return compare(a.protein, b.protein, isAsc);
                default:
                    return 0;
            }
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SortOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: SortOverviewExample, isStandalone: true, selector: "sort-overview-example", ngImport: i0, template: "<table matSort (matSortChange)=\"sortData($event)\">\r\n  <tr>\r\n    <th mat-sort-header=\"name\">Dessert (100g)</th>\r\n    <th mat-sort-header=\"calories\">Calories</th>\r\n    <th mat-sort-header=\"fat\">Fat (g)</th>\r\n    <th mat-sort-header=\"carbs\">Carbs (g)</th>\r\n    <th mat-sort-header=\"protein\">Protein (g)</th>\r\n  </tr>\r\n\r\n  @for (dessert of sortedData; track dessert) {\r\n    <tr>\r\n      <td>{{dessert.name}}</td>\r\n      <td>{{dessert.calories}}</td>\r\n      <td>{{dessert.fat}}</td>\r\n      <td>{{dessert.carbs}}</td>\r\n      <td>{{dessert.protein}}</td>\r\n    </tr>\r\n  }\r\n</table>\r\n", styles: [".mat-sort-header-container {\r\n  align-items: center;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatSortModule }, { kind: "directive", type: i1.MatSort, selector: "[matSort]", inputs: ["matSortActive", "matSortStart", "matSortDirection", "matSortDisableClear", "matSortDisabled"], outputs: ["matSortChange"], exportAs: ["matSort"] }, { kind: "component", type: i1.MatSortHeader, selector: "[mat-sort-header]", inputs: ["mat-sort-header", "arrowPosition", "start", "disabled", "sortActionDescription", "disableClear"], exportAs: ["matSortHeader"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SortOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'sort-overview-example', standalone: true, imports: [MatSortModule], template: "<table matSort (matSortChange)=\"sortData($event)\">\r\n  <tr>\r\n    <th mat-sort-header=\"name\">Dessert (100g)</th>\r\n    <th mat-sort-header=\"calories\">Calories</th>\r\n    <th mat-sort-header=\"fat\">Fat (g)</th>\r\n    <th mat-sort-header=\"carbs\">Carbs (g)</th>\r\n    <th mat-sort-header=\"protein\">Protein (g)</th>\r\n  </tr>\r\n\r\n  @for (dessert of sortedData; track dessert) {\r\n    <tr>\r\n      <td>{{dessert.name}}</td>\r\n      <td>{{dessert.calories}}</td>\r\n      <td>{{dessert.fat}}</td>\r\n      <td>{{dessert.carbs}}</td>\r\n      <td>{{dessert.protein}}</td>\r\n    </tr>\r\n  }\r\n</table>\r\n", styles: [".mat-sort-header-container {\r\n  align-items: center;\r\n}\r\n"] }]
        }], ctorParameters: () => [] });
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

/**
 * @title Testing with MatSortHarness
 */
class SortHarnessExample {
    constructor() {
        this.disableThirdHeader = false;
        this.desserts = [
            { name: 'Frozen yogurt', calories: 159, fat: 6, carbs: 24, protein: 4 },
            { name: 'Ice cream sandwich', calories: 237, fat: 9, carbs: 37, protein: 4 },
            { name: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6 },
            { name: 'Cupcake', calories: 305, fat: 4, carbs: 67, protein: 4 },
            { name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 4 },
        ];
        this.sortedData = this.desserts.slice();
    }
    sortData(sort) {
        const data = this.desserts.slice();
        if (!sort.active || sort.direction === '') {
            this.sortedData = data;
        }
        else {
            this.sortedData = data.sort((a, b) => {
                const aValue = a[sort.active];
                const bValue = b[sort.active];
                return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
            });
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SortHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: SortHarnessExample, isStandalone: true, selector: "sort-harness-example", ngImport: i0, template: "<table matSort (matSortChange)=\"sortData($event)\">\r\n  <tr>\r\n    <th mat-sort-header=\"name\">Dessert</th>\r\n    <th mat-sort-header=\"calories\">Calories</th>\r\n    <th mat-sort-header=\"fat\" [disabled]=\"disableThirdHeader\">Fat</th>\r\n    <th mat-sort-header=\"carbs\">Carbs</th>\r\n    <th mat-sort-header=\"protein\">Protein</th>\r\n  </tr>\r\n\r\n  @for (dessert of sortedData; track dessert) {\r\n    <tr>\r\n      <td>{{dessert.name}}</td>\r\n      <td>{{dessert.calories}}</td>\r\n      <td>{{dessert.fat}}</td>\r\n      <td>{{dessert.carbs}}</td>\r\n      <td>{{dessert.protein}}</td>\r\n    </tr>\r\n  }\r\n</table>\r\n", dependencies: [{ kind: "ngmodule", type: MatSortModule }, { kind: "directive", type: i1.MatSort, selector: "[matSort]", inputs: ["matSortActive", "matSortStart", "matSortDirection", "matSortDisableClear", "matSortDisabled"], outputs: ["matSortChange"], exportAs: ["matSort"] }, { kind: "component", type: i1.MatSortHeader, selector: "[mat-sort-header]", inputs: ["mat-sort-header", "arrowPosition", "start", "disabled", "sortActionDescription", "disableClear"], exportAs: ["matSortHeader"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SortHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'sort-harness-example', standalone: true, imports: [MatSortModule], template: "<table matSort (matSortChange)=\"sortData($event)\">\r\n  <tr>\r\n    <th mat-sort-header=\"name\">Dessert</th>\r\n    <th mat-sort-header=\"calories\">Calories</th>\r\n    <th mat-sort-header=\"fat\" [disabled]=\"disableThirdHeader\">Fat</th>\r\n    <th mat-sort-header=\"carbs\">Carbs</th>\r\n    <th mat-sort-header=\"protein\">Protein</th>\r\n  </tr>\r\n\r\n  @for (dessert of sortedData; track dessert) {\r\n    <tr>\r\n      <td>{{dessert.name}}</td>\r\n      <td>{{dessert.calories}}</td>\r\n      <td>{{dessert.fat}}</td>\r\n      <td>{{dessert.carbs}}</td>\r\n      <td>{{dessert.protein}}</td>\r\n    </tr>\r\n  }\r\n</table>\r\n" }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { SortHarnessExample, SortOverviewExample };
//# sourceMappingURL=sort.mjs.map
