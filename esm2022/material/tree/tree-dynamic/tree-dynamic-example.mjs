import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Injectable } from '@angular/core';
import { BehaviorSubject, merge } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTreeModule } from '@angular/material/tree';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tree";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
import * as i4 from "@angular/material/progress-bar";
/** Flat node with expandable and level information */
export class DynamicFlatNode {
    constructor(item, level = 1, expandable = false, isLoading = false) {
        this.item = item;
        this.level = level;
        this.expandable = expandable;
        this.isLoading = isLoading;
    }
}
/**
 * Database for dynamic data. When expanding a node in the tree, the data source will need to fetch
 * the descendants data from the database.
 */
export class DynamicDatabase {
    constructor() {
        this.dataMap = new Map([
            ['Fruits', ['Apple', 'Orange', 'Banana']],
            ['Vegetables', ['Tomato', 'Potato', 'Onion']],
            ['Apple', ['Fuji', 'Macintosh']],
            ['Onion', ['Yellow', 'White', 'Purple']],
        ]);
        this.rootLevelNodes = ['Fruits', 'Vegetables'];
    }
    /** Initial data from database */
    initialData() {
        return this.rootLevelNodes.map(name => new DynamicFlatNode(name, 0, true));
    }
    getChildren(node) {
        return this.dataMap.get(node);
    }
    isExpandable(node) {
        return this.dataMap.has(node);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DynamicDatabase, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DynamicDatabase, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DynamicDatabase, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });
/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
export class DynamicDataSource {
    get data() {
        return this.dataChange.value;
    }
    set data(value) {
        this._treeControl.dataNodes = value;
        this.dataChange.next(value);
    }
    constructor(_treeControl, _database) {
        this._treeControl = _treeControl;
        this._database = _database;
        this.dataChange = new BehaviorSubject([]);
    }
    connect(collectionViewer) {
        this._treeControl.expansionModel.changed.subscribe(change => {
            if (change.added ||
                change.removed) {
                this.handleTreeControl(change);
            }
        });
        return merge(collectionViewer.viewChange, this.dataChange).pipe(map(() => this.data));
    }
    disconnect(collectionViewer) { }
    /** Handle expand/collapse behaviors */
    handleTreeControl(change) {
        if (change.added) {
            change.added.forEach(node => this.toggleNode(node, true));
        }
        if (change.removed) {
            change.removed
                .slice()
                .reverse()
                .forEach(node => this.toggleNode(node, false));
        }
    }
    /**
     * Toggle the node, remove from display list
     */
    toggleNode(node, expand) {
        const children = this._database.getChildren(node.item);
        const index = this.data.indexOf(node);
        if (!children || index < 0) {
            // If no children, or cannot find the node, no op
            return;
        }
        node.isLoading = true;
        setTimeout(() => {
            if (expand) {
                const nodes = children.map(name => new DynamicFlatNode(name, node.level + 1, this._database.isExpandable(name)));
                this.data.splice(index + 1, 0, ...nodes);
            }
            else {
                let count = 0;
                for (let i = index + 1; i < this.data.length && this.data[i].level > node.level; i++, count++) { }
                this.data.splice(index + 1, count);
            }
            // notify the change
            this.dataChange.next(this.data);
            node.isLoading = false;
        }, 1000);
    }
}
/**
 * @title Tree with dynamic data
 */
export class TreeDynamicExample {
    constructor(database) {
        this.getLevel = (node) => node.level;
        this.isExpandable = (node) => node.expandable;
        this.hasChild = (_, _nodeData) => _nodeData.expandable;
        this.treeControl = new FlatTreeControl(this.getLevel, this.isExpandable);
        this.dataSource = new DynamicDataSource(this.treeControl, database);
        this.dataSource.data = database.initialData();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TreeDynamicExample, deps: [{ token: DynamicDatabase }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: TreeDynamicExample, isStandalone: true, selector: "tree-dynamic-example", ngImport: i0, template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\r\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\r\n    <button mat-icon-button disabled></button>\r\n    {{node.item}}\r\n  </mat-tree-node>\r\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\r\n    <button mat-icon-button\r\n            [attr.aria-label]=\"'Toggle ' + node.item\" matTreeNodeToggle>\r\n      <mat-icon class=\"mat-icon-rtl-mirror\">\r\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\r\n      </mat-icon>\r\n    </button>\r\n    {{node.item}}\r\n    @if (node.isLoading) {\r\n      <mat-progress-bar\r\n          mode=\"indeterminate\"\r\n          class=\"example-tree-progress-bar\"></mat-progress-bar>\r\n    }\r\n  </mat-tree-node>\r\n</mat-tree>\r\n", styles: [".example-tree-progress-bar {\r\n  margin-left: 30px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatTreeModule }, { kind: "directive", type: i1.MatTreeNodeDef, selector: "[matTreeNodeDef]", inputs: ["matTreeNodeDefWhen", "matTreeNode"] }, { kind: "directive", type: i1.MatTreeNodePadding, selector: "[matTreeNodePadding]", inputs: ["matTreeNodePadding", "matTreeNodePaddingIndent"] }, { kind: "directive", type: i1.MatTreeNodeToggle, selector: "[matTreeNodeToggle]", inputs: ["matTreeNodeToggleRecursive"] }, { kind: "component", type: i1.MatTree, selector: "mat-tree", exportAs: ["matTree"] }, { kind: "directive", type: i1.MatTreeNode, selector: "mat-tree-node", inputs: ["disabled", "tabIndex"], exportAs: ["matTreeNode"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "ngmodule", type: MatProgressBarModule }, { kind: "component", type: i4.MatProgressBar, selector: "mat-progress-bar", inputs: ["color", "value", "bufferValue", "mode"], outputs: ["animationEnd"], exportAs: ["matProgressBar"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TreeDynamicExample, decorators: [{
            type: Component,
            args: [{ selector: 'tree-dynamic-example', standalone: true, imports: [MatTreeModule, MatButtonModule, MatIconModule, MatProgressBarModule], template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\r\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\r\n    <button mat-icon-button disabled></button>\r\n    {{node.item}}\r\n  </mat-tree-node>\r\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\r\n    <button mat-icon-button\r\n            [attr.aria-label]=\"'Toggle ' + node.item\" matTreeNodeToggle>\r\n      <mat-icon class=\"mat-icon-rtl-mirror\">\r\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\r\n      </mat-icon>\r\n    </button>\r\n    {{node.item}}\r\n    @if (node.isLoading) {\r\n      <mat-progress-bar\r\n          mode=\"indeterminate\"\r\n          class=\"example-tree-progress-bar\"></mat-progress-bar>\r\n    }\r\n  </mat-tree-node>\r\n</mat-tree>\r\n", styles: [".example-tree-progress-bar {\r\n  margin-left: 30px;\r\n}\r\n"] }]
        }], ctorParameters: () => [{ type: DynamicDatabase }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1keW5hbWljLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90cmVlL3RyZWUtZHluYW1pYy90cmVlLWR5bmFtaWMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RyZWUvdHJlZS1keW5hbWljL3RyZWUtZHluYW1pYy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBQyxlQUFlLEVBQUUsS0FBSyxFQUFhLE1BQU0sTUFBTSxDQUFDO0FBQ3hELE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuQyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7O0FBRXJELHNEQUFzRDtBQUN0RCxNQUFNLE9BQU8sZUFBZTtJQUMxQixZQUNTLElBQVksRUFDWixRQUFRLENBQUMsRUFDVCxhQUFhLEtBQUssRUFDbEIsWUFBWSxLQUFLO1FBSGpCLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixVQUFLLEdBQUwsS0FBSyxDQUFJO1FBQ1QsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUNsQixjQUFTLEdBQVQsU0FBUyxDQUFRO0lBQ3ZCLENBQUM7Q0FDTDtBQUVEOzs7R0FHRztBQUVILE1B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QUMsYUFBYSxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsb0JBQW9CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbGxlY3Rpb25WaWV3ZXIsIFNlbGVjdGlvbkNoYW5nZSwgRGF0YVNvdXJjZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcclxuaW1wb3J0IHtGbGF0VHJlZUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Nkay90cmVlJztcclxuaW1wb3J0IHtDb21wb25lbnQsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgbWVyZ2UsIE9ic2VydmFibGV9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQge21hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQge01hdFByb2dyZXNzQmFyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1iYXInO1xyXG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xyXG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcclxuaW1wb3J0IHtNYXRUcmVlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90cmVlJztcclxuXHJcbi8qKiBGbGF0IG5vZGUgd2l0aCBleHBhbmRhYmxlIGFuZCBsZXZlbCBpbmZvcm1hdGlvbiAqL1xyXG5leHBvcnQgY2xhc3MgRHluYW1pY0ZsYXROb2RlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBpdGVtOiBzdHJpbmcsXHJcbiAgICBwdWJsaWMgbGV2ZWwgPSAxLFxyXG4gICAgcHVibGljIGV4cGFuZGFibGUgPSBmYWxzZSxcclxuICAgIHB1YmxpYyBpc0xvYWRpbmcgPSBmYWxzZSxcclxuICApIHt9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEYXRhYmFzZSBmb3IgZHluYW1pYyBkYXRhLiBXaGVuIGV4cGFuZGluZyBhIG5vZGUgaW4gdGhlIHRyZWUsIHRoZSBkYXRhIHNvdXJjZSB3aWxsIG5lZWQgdG8gZmV0Y2hcclxuICogdGhlIGRlc2NlbmRhbnRzIGRhdGEgZnJvbSB0aGUgZGF0YWJhc2UuXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcclxuZXhwb3J0IGNsYXNzIER5bmFtaWNEYXRhYmFzZSB7XHJcbiAgZGF0YU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmdbXT4oW1xyXG4gICAgWydGcnVpdHMnLCBbJ0FwcGxlJywgJ09yYW5nZScsICdCYW5hbmEnXV0sXHJcbiAgICBbJ1ZlZ2V0YWJsZXMnLCBbJ1RvbWF0bycsICdQb3RhdG8nLCAnT25pb24nXV0sXHJcbiAgICBbJ0FwcGxlJywgWydGdWppJywgJ01hY2ludG9zaCddXSxcclxuICAgIFsnT25pb24nLCBbJ1llbGxvdycsICdXaGl0ZScsICdQdXJwbGUnXV0sXHJcbiAgXSk7XHJcblxyXG4gIHJvb3RMZXZlbE5vZGVzOiBzdHJpbmdbXSA9IFsnRnJ1aXRzJywgJ1ZlZ2V0YWJsZXMnXTtcclxuXHJcbiAgLyoqIEluaXRpYWwgZGF0YSBmcm9tIGRhdGFiYXNlICovXHJcbiAgaW5pdGlhbERhdGEoKTogRHluYW1pY0ZsYXROb2RlW10ge1xyXG4gICAgcmV0dXJuIHRoaXMucm9vdExldmVsTm9kZXMubWFwKG5hbWUgPT4gbmV3IER5bmFtaWNGbGF0Tm9kZShuYW1lLCAwLCB0cnVlKSk7XHJcbiAgfVxyXG5cclxuICBnZXRDaGlsZHJlbihub2RlOiBzdHJpbmcpOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCB7XHJcbiAgICByZXR1cm4gdGhpcy5kYXRhTWFwLmdldChub2RlKTtcclxuICB9XHJcblxyXG4gIGlzRXhwYW5kYWJsZShub2RlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmRhdGFNYXAuaGFzKG5vZGUpO1xyXG4gIH1cclxufVxyXG4vKipcclxuICogRmlsZSBkYXRhYmFzZSwgaXQgY2FuIGJ1aWxkIGEgdHJlZSBzdHJ1Y3R1cmVkIEpzb24gb2JqZWN0IGZyb20gc3RyaW5nLlxyXG4gKiBFYWNoIG5vZGUgaW4gSnNvbiBvYmplY3QgcmVwcmVzZW50cyBhIGZpbGUgb3IgYSBkaXJlY3RvcnkuIEZvciBhIGZpbGUsIGl0IGhhcyBmaWxlbmFtZSBhbmQgdHlwZS5cclxuICogRm9yIGEgZGlyZWN0b3J5LCBpdCBoYXMgZmlsZW5hbWUgYW5kIGNoaWxkcmVuIChhIGxpc3Qgb2YgZmlsZXMgb3IgZGlyZWN0b3JpZXMpLlxyXG4gKiBUaGUgaW5wdXQgd2lsbCBiZSBhIGpzb24gb2JqZWN0IHN0cmluZywgYW5kIHRoZSBvdXRwdXQgaXMgYSBsaXN0IG9mIGBGaWxlTm9kZWAgd2l0aCBuZXN0ZWRcclxuICogc3RydWN0dXJlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIER5bmFtaWNEYXRhU291cmNlIGltcGxlbWVudHMgRGF0YVNvdXJjZTxEeW5hbWljRmxhdE5vZGU+IHtcclxuICBkYXRhQ2hhbmdlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxEeW5hbWljRmxhdE5vZGVbXT4oW10pO1xyXG5cclxuICBnZXQgZGF0YSgpOiBEeW5hbWljRmxhdE5vZGVbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5kYXRhQ2hhbmdlLnZhbHVlO1xyXG4gIH1cclxuICBzZXQgZGF0YSh2YWx1ZTogRHluYW1pY0ZsYXROb2RlW10pIHtcclxuICAgIHRoaXMuX3RyZWVDb250cm9sLmRhdGFOb2RlcyA9IHZhbHVlO1xyXG4gICAgdGhpcy5kYXRhQ2hhbmdlLm5leHQodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF90cmVlQ29udHJvbDogRmxhdFRyZWVDb250cm9sPER5bmFtaWNGbGF0Tm9kZT4sXHJcbiAgICBwcml2YXRlIF9kYXRhYmFzZTogRHluYW1pY0RhdGFiYXNlLFxyXG4gICkge31cclxuXHJcbiAgY29ubmVjdChjb2xsZWN0aW9uVmlld2VyOiBDb2xsZWN0aW9uVmlld2VyKTogT2JzZXJ2YWJsZTxEeW5hbWljRmxhdE5vZGVbXT4ge1xyXG4gICAgdGhpcy5fdHJlZUNvbnRyb2wuZXhwYW5zaW9uTW9kZWwuY2hhbmdlZC5zdWJzY3JpYmUoY2hhbmdlID0+IHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIChjaGFuZ2UgYXMgU2VsZWN0aW9uQ2hhbmdlPER5bmFtaWNGbGF0Tm9kZT4pLmFkZGVkIHx8XHJcbiAgICAgICAgKGNoYW5nZSBhcyBTZWxlY3Rpb25DaGFuZ2U8RHluYW1pY0ZsYXROb2RlPikucmVtb3ZlZFxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLmhhbmRsZVRyZWVDb250cm9sKGNoYW5nZSBhcyBTZWxlY3Rpb25DaGFuZ2U8RHluYW1pY0ZsYXROb2RlPik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBtZXJnZShjb2xsZWN0aW9uVmlld2VyLnZpZXdDaGFuZ2UsIHRoaXMuZGF0YUNoYW5nZSkucGlwZShtYXAoKCkgPT4gdGhpcy5kYXRhKSk7XHJcbiAgfVxyXG5cclxuICBkaXNjb25uZWN0KGNvbGxlY3Rpb25WaWV3ZXI6IENvbGxlY3Rpb25WaWV3ZXIpOiB2b2lkIHt9XHJcblxyXG4gIC8qKiBIYW5kbGUgZXhwYW5kL2NvbGxhcHNlIGJlaGF2aW9ycyAqL1xyXG4gIGhhbmRsZVRyZWVDb250cm9sKGNoYW5nZTogU2VsZWN0aW9uQ2hhbmdlPER5bmFtaWNGbGF0Tm9kZT4pIHtcclxuICAgIGlmIChjaGFuZ2UuYWRkZWQpIHtcclxuICAgICAgY2hhbmdlLmFkZGVkLmZvckVhY2gobm9kZSA9PiB0aGlzLnRvZ2dsZU5vZGUobm9kZSwgdHJ1ZSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZS5yZW1vdmVkKSB7XHJcbiAgICAgIGNoYW5nZS5yZW1vdmVkXHJcbiAgICAgICAgLnNsaWNlKClcclxuICAgICAgICAucmV2ZXJzZSgpXHJcbiAgICAgICAgLmZvckVhY2gobm9kZSA9PiB0aGlzLnRvZ2dsZU5vZGUobm9kZSwgZmFsc2UpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRvZ2dsZSB0aGUgbm9kZSwgcmVtb3ZlIGZyb20gZGlzcGxheSBsaXN0XHJcbiAgICovXHJcbiAgdG9nZ2xlTm9kZShub2RlOiBEeW5hbWljRmxhdE5vZGUsIGV4cGFuZDogYm9vbGVhbikge1xyXG4gICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLl9kYXRhYmFzZS5nZXRDaGlsZHJlbihub2RlLml0ZW0pO1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmRhdGEuaW5kZXhPZihub2RlKTtcclxuICAgIGlmICghY2hpbGRyZW4gfHwgaW5kZXggPCAwKSB7XHJcbiAgICAgIC8vIElmIG5vIGNoaWxkcmVuLCBvciBjYW5ub3QgZmluZCB0aGUgbm9kZSwgbm8gb3BcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIG5vZGUuaXNMb2FkaW5nID0gdHJ1ZTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKGV4cGFuZCkge1xyXG4gICAgICAgIGNvbnN0IG5vZGVzID0gY2hpbGRyZW4ubWFwKFxyXG4gICAgICAgICAgbmFtZSA9PiBuZXcgRHluYW1pY0ZsYXROb2RlKG5hbWUsIG5vZGUubGV2ZWwgKyAxLCB0aGlzLl9kYXRhYmFzZS5pc0V4cGFuZGFibGUobmFtZSkpLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5kYXRhLnNwbGljZShpbmRleCArIDEsIDAsIC4uLm5vZGVzKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgICAgIGZvciAoXHJcbiAgICAgICAgICBsZXQgaSA9IGluZGV4ICsgMTtcclxuICAgICAgICAgIGkgPCB0aGlzLmRhdGEubGVuZ3RoICYmIHRoaXMuZGF0YVtpXS5sZXZlbCA+IG5vZGUubGV2ZWw7XHJcbiAgICAgICAgICBpKyssIGNvdW50KytcclxuICAgICAgICApIHt9XHJcbiAgICAgICAgdGhpcy5kYXRhLnNwbGljZShpbmRleCArIDEsIGNvdW50KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gbm90aWZ5IHRoZSBjaGFuZ2VcclxuICAgICAgdGhpcy5kYXRhQ2hhbmdlLm5leHQodGhpcy5kYXRhKTtcclxuICAgICAgbm9kZS5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgIH0sIDEwMDApO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEB0aXRsZSBUcmVlIHdpdGggZHluYW1pYyBkYXRhXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3RyZWUtZHluYW1pYy1leGFtcGxlJyxcclxuICB0ZW1wbGF0ZVVybDogJ3RyZWUtZHluYW1pYy1leGFtcGxlLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWyd0cmVlLWR5bmFtaWMtZXhhbXBsZS5jc3MnXSxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFtNYXRUcmVlTW9kdWxlLCBNYXRCdXR0b25Nb2R1bGUsIE1hdEljb25Nb2R1bGUsIE1hdFByb2dyZXNzQmFyTW9kdWxlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRyZWVEeW5hbWljRXhhbXBsZSB7XHJcbiAgY29uc3RydWN0b3IoZGF0YWJhc2U6IER5bmFtaWNEYXRhYmFzZSkge1xyXG4gICAgdGhpcy50cmVlQ29udHJvbCA9IG5ldyBGbGF0VHJlZUNvbnRyb2w8RHluYW1pY0ZsYXROb2RlPih0aGlzLmdldExldmVsLCB0aGlzLmlzRXhwYW5kYWJsZSk7XHJcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgRHluYW1pY0RhdGFTb3VyY2UodGhpcy50cmVlQ29udHJvbCwgZGF0YWJhc2UpO1xyXG5cclxuICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gZGF0YWJhc2UuaW5pdGlhbERhdGEoKTtcclxuICB9XHJcblxyXG4gIHRyZWVDb250cm9sOiBGbGF0VHJlZUNvbnRyb2w8RHluYW1pY0ZsYXROb2RlPjtcclxuXHJcbiAgZGF0YVNvdXJjZTogRHluYW1pY0RhdGFTb3VyY2U7XHJcblxyXG4gIGdldExldmVsID0gKG5vZGU6IER5bmFtaWNGbGF0Tm9kZSkgPT4gbm9kZS5sZXZlbDtcclxuXHJcbiAgaXNFeHBhbmRhYmxlID0gKG5vZGU6IER5bmFtaWNGbGF0Tm9kZSkgPT4gbm9kZS5leHBhbmRhYmxlO1xyXG5cclxuICBoYXNDaGlsZCA9IChfOiBudW1iZXIsIF9ub2RlRGF0YTogRHluYW1pY0ZsYXROb2RlKSA9PiBfbm9kZURhdGEuZXhwYW5kYWJsZTtcclxufVxyXG4iLCI8bWF0LXRyZWUgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiIFt0cmVlQ29udHJvbF09XCJ0cmVlQ29udHJvbFwiPlxyXG4gIDxtYXQtdHJlZS1ub2RlICptYXRUcmVlTm9kZURlZj1cImxldCBub2RlXCIgbWF0VHJlZU5vZGVQYWRkaW5nPlxyXG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gZGlzYWJsZWQ+PC9idXR0b24+XHJcbiAgICB7e25vZGUuaXRlbX19XHJcbiAgPC9tYXQtdHJlZS1ub2RlPlxyXG4gIDxtYXQtdHJlZS1ub2RlICptYXRUcmVlTm9kZURlZj1cImxldCBub2RlOyB3aGVuOiBoYXNDaGlsZFwiIG1hdFRyZWVOb2RlUGFkZGluZz5cclxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uXHJcbiAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiJ1RvZ2dsZSAnICsgbm9kZS5pdGVtXCIgbWF0VHJlZU5vZGVUb2dnbGU+XHJcbiAgICAgIDxtYXQtaWNvbiBjbGFzcz1cIm1hdC1pY29uLXJ0bC1taXJyb3JcIj5cclxuICAgICAgICB7e3RyZWVDb250cm9sLmlzRXhwYW5kZWQobm9kZSkgPyAnZXhwYW5kX21vcmUnIDogJ2NoZXZyb25fcmlnaHQnfX1cclxuICAgICAgPC9tYXQtaWNvbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gICAge3tub2RlLml0ZW19fVxyXG4gICAgQGlmIChub2RlLmlzTG9hZGluZykge1xyXG4gICAgICA8bWF0LXByb2dyZXNzLWJhclxyXG4gICAgICAgICAgbW9kZT1cImluZGV0ZXJtaW5hdGVcIlxyXG4gICAgICAgICAgY2xhc3M9XCJleGFtcGxlLXRyZWUtcHJvZ3Jlc3MtYmFyXCI+PC9tYXQtcHJvZ3Jlc3MtYmFyPlxyXG4gICAgfVxyXG4gIDwvbWF0LXRyZWUtbm9kZT5cclxuPC9tYXQtdHJlZT5cclxuIl19