import { Component } from '@angular/core';
import { ArrayDataSource } from '@angular/cdk/collections';
import { FlatTreeControl, CdkTreeModule } from '@angular/cdk/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/tree";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
const TREE_DATA = [
    {
        name: 'Fruit',
        expandable: true,
        level: 0,
    },
    {
        name: 'Apple',
        expandable: false,
        level: 1,
    },
    {
        name: 'Banana',
        expandable: false,
        level: 1,
    },
    {
        name: 'Fruit loops',
        expandable: false,
        level: 1,
    },
    {
        name: 'Vegetables',
        expandable: true,
        level: 0,
    },
    {
        name: 'Green',
        expandable: true,
        level: 1,
    },
    {
        name: 'Broccoli',
        expandable: false,
        level: 2,
    },
    {
        name: 'Brussels sprouts',
        expandable: false,
        level: 2,
    },
    {
        name: 'Orange',
        expandable: true,
        level: 1,
    },
    {
        name: 'Pumpkins',
        expandable: false,
        level: 2,
    },
    {
        name: 'Carrots',
        expandable: false,
        level: 2,
    },
];
/**
 * @title Tree with flat nodes
 */
export class CdkTreeFlatExample {
    constructor() {
        this.treeControl = new FlatTreeControl(node => node.level, node => node.expandable);
        this.dataSource = new ArrayDataSource(TREE_DATA);
        this.hasChild = (_, node) => node.expandable;
    }
    getParentNode(node) {
        const nodeIndex = TREE_DATA.indexOf(node);
        for (let i = nodeIndex - 1; i >= 0; i--) {
            if (TREE_DATA[i].level === node.level - 1) {
                return TREE_DATA[i];
            }
        }
        return null;
    }
    shouldRender(node) {
        let parent = this.getParentNode(node);
        while (parent) {
            if (!parent.isExpanded) {
                return false;
            }
            parent = this.getParentNode(parent);
        }
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkTreeFlatExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: CdkTreeFlatExample, isStandalone: true, selector: "cdk-tree-flat-example", ngImport: i0, template: "<cdk-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\r\n  <!-- This is the tree node template for leaf nodes -->\r\n  <cdk-tree-node *cdkTreeNodeDef=\"let node\" cdkTreeNodePadding\r\n                 [style.display]=\"shouldRender(node) ? 'flex' : 'none'\"\r\n                 class=\"example-tree-node\">\r\n    <!-- use a disabled button to provide padding for tree leaf -->\r\n    <button mat-icon-button disabled></button>\r\n    {{node.name}}\r\n  </cdk-tree-node>\r\n  <!-- This is the tree node template for expandable nodes -->\r\n  <cdk-tree-node *cdkTreeNodeDef=\"let node; when: hasChild\" cdkTreeNodePadding\r\n                 [style.display]=\"shouldRender(node) ? 'flex' : 'none'\"\r\n                 class=\"example-tree-node\">\r\n    <button mat-icon-button cdkTreeNodeToggle\r\n            [attr.aria-label]=\"'Toggle ' + node.name\"\r\n            (click)=\"node.isExpanded = !node.isExpanded\"\r\n            [style.visibility]=\"node.expandable ? 'visible' : 'hidden'\">\r\n      <mat-icon class=\"mat-icon-rtl-mirror\">\r\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\r\n      </mat-icon>\r\n    </button>\r\n    {{node.name}}\r\n  </cdk-tree-node>\r\n</cdk-tree>\r\n", styles: [".example-tree-node {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: CdkTreeModule }, { kind: "directive", type: i1.CdkTreeNodeDef, selector: "[cdkTreeNodeDef]", inputs: ["cdkTreeNodeDefWhen"] }, { kind: "directive", type: i1.CdkTreeNodePadding, selector: "[cdkTreeNodePadding]", inputs: ["cdkTreeNodePadding", "cdkTreeNodePaddingIndent"] }, { kind: "directive", type: i1.CdkTreeNodeToggle, selector: "[cdkTreeNodeToggle]", inputs: ["cdkTreeNodeToggleRecursive"] }, { kind: "component", type: i1.CdkTree, selector: "cdk-tree", inputs: ["dataSource", "treeControl", "trackBy"], exportAs: ["cdkTree"] }, { kind: "directive", type: i1.CdkTreeNode, selector: "cdk-tree-node", inputs: ["role"], exportAs: ["cdkTreeNode"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkTreeFlatExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-tree-flat-example', standalone: true, imports: [CdkTreeModule, MatButtonModule, MatIconModule], template: "<cdk-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\r\n  <!-- This is the tree node template for leaf nodes -->\r\n  <cdk-tree-node *cdkTreeNodeDef=\"let node\" cdkTreeNodePadding\r\n                 [style.display]=\"shouldRender(node) ? 'flex' : 'none'\"\r\n                 class=\"example-tree-node\">\r\n    <!-- use a disabled button to provide padding for tree leaf -->\r\n    <button mat-icon-button disabled></button>\r\n    {{node.name}}\r\n  </cdk-tree-node>\r\n  <!-- This is the tree node template for expandable nodes -->\r\n  <cdk-tree-node *cdkTreeNodeDef=\"let node; when: hasChild\" cdkTreeNodePadding\r\n                 [style.display]=\"shouldRender(node) ? 'flex' : 'none'\"\r\n                 class=\"example-tree-node\">\r\n    <button mat-icon-button cdkTreeNodeToggle\r\n            [attr.aria-label]=\"'Toggle ' + node.name\"\r\n            (click)=\"node.isExpanded = !node.isExpanded\"\r\n            [style.visibility]=\"node.expandable ? 'visible' : 'hidden'\">\r\n      <mat-icon class=\"mat-icon-rtl-mirror\">\r\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\r\n      </mat-icon>\r\n    </button>\r\n    {{node.name}}\r\n  </cdk-tree-node>\r\n</cdk-tree>\r\n", styles: [".example-tree-node {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXRyZWUtZmxhdC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL3RyZWUvY2RrLXRyZWUtZmxhdC9jZGstdHJlZS1mbGF0LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvdHJlZS9jZGstdHJlZS1mbGF0L2Nkay10cmVlLWZsYXQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxlQUFlLEVBQUUsYUFBYSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDakUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7QUFFekQsTUFBTSxTQUFTLEdBQXNCO0lBQ25DO1FBQ0UsSUFBSSxFQUFFLE9BQU87UUFDYixVQUFVLEVBQUUsSUFBSTtRQUNoQixLQUFLLEVBQUUsQ0FBQztLQUNUO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsT0FBTztRQUNiLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLEtBQUssRUFBRSxDQUFDO0tBQ1Q7SUFDRDtRQUNFLElBQUksRUFBRSxRQUFRO1FBQ2QsVUFBVSxFQUFFLEtBQUs7UUFDakIsS0FBSyxFQUFFLENBQUM7S0FDVDtJQUNEO1FBQ0UsSUFBSSxFQUFFLGFBQWE7UUFDbkIsVUFBVSxFQUFFLEtBQUs7UUFDakIsS0FBSyxFQUFFLENBQUM7S0FDVDtJQUNEO1FBQ0UsSUFBSSxFQUFFLFlBQVk7UUFDbEIsVUFBVSxFQUFFLElBQUk7UUFDaEIsS0FBSyxFQUFFLENBQUM7S0FDVDtJQUNEO1FBQ0UsSUFBSSxFQUFFLE9BQU87UUFDYixVQUFVLEVBQUUsSUFBSTtRQUNoQixLQUFLLEVBQUUsQ0FBQztLQUNUO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsVUFBVTtRQUNoQixVQUFVLEVBQUUsS0FBSztRQUNqQixLQUFLLEVBQUUsQ0FBQztLQUNUO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsa0JBQWtCO1FBQ3hCLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLEtBQUssRUFBRSxDQUFDO0tBQ1Q7SUFDRDtRQUNFLElBQUksRUFBRSxRQUFRO1FBQ2QsVUFBVSxFQUFFLElBQUk7UUFDaEIsS0FBSyxFQUFFLENBQUM7S0FDVDtJQUNEO1FBQ0UsSUFBSSxFQUFFLFVBQVU7UUFDaEIsVUFBVSxFQUFFLEtBQUs7UUFDakIsS0FBSyxFQUFFLENBQUM7S0FDVDtJQUNEO1FBQ0UsSUFBSSxFQUFFLFNBQVM7UUFDZixVQUFVLEVBQUUsS0FBSztRQUNqQixLQUFLLEVBQUUsQ0FBQztLQUNUO0NBQ0YsQ0FBQztBQVVGOztHQUVHO0FBUUgsTUFBTSxPQUFPLGtCQUFrQjtJQVAvQjtRQVFFLGdCQUFXLEdBQUcsSUFBSSxlQUFlLENBQy9CLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFDbEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUN4QixDQUFDO1FBRUYsZUFBVSxHQUFHLElBQUksZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRTVDLGFBQVEsR0FBRyxDQUFDLENBQVMsRUFBRSxJQUFxQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0tBd0JsRTtJQXRCQyxhQUFhLENBQUMsSUFBcUI7UUFDakMsTUFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUxQyxLQUFLLElBQUksQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN2QyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUU7Z0JBQ3pDLE9BQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3JCO1NBQ0Y7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxZQUFZLENBQUMsSUFBcUI7UUFDaEMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxPQUFPLE1BQU0sRUFBRTtZQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFO2dCQUN0QixPQUFPLEtBQUssQ0FBQzthQUNkO1lBQ0QsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDckM7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7OEdBL0JVLGtCQUFrQjtrR0FBbEIsa0JBQWtCLGlGQ2xGL0Isd3RDQXdCQSxvSUR3RFksYUFBYSx1cEJBQUUsZUFBZSwySUFBRSxhQUFhOzsyRkFFNUMsa0JBQWtCO2tCQVA5QixTQUFTOytCQUNFLHVCQUF1QixjQUdyQixJQUFJLFdBQ1AsQ0FBQyxhQUFhLEVBQUUsZUFBZSxFQUFFLGFBQWEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtBcnJheURhdGFTb3VyY2V9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XHJcbmltcG9ydCB7RmxhdFRyZWVDb250cm9sLCBDZGtUcmVlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvdHJlZSc7XHJcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XHJcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xyXG5cclxuY29uc3QgVFJFRV9EQVRBOiBFeGFtcGxlRmxhdE5vZGVbXSA9IFtcclxuICB7XHJcbiAgICBuYW1lOiAnRnJ1aXQnLFxyXG4gICAgZXhwYW5kYWJsZTogdHJ1ZSxcclxuICAgIGxldmVsOiAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0FwcGxlJyxcclxuICAgIGV4cGFuZGFibGU6IGZhbHNlLFxyXG4gICAgbGV2ZWw6IDEsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQmFuYW5hJyxcclxuICAgIGV4cGFuZGFibGU6IGZhbHNlLFxyXG4gICAgbGV2ZWw6IDEsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnRnJ1aXQgbG9vcHMnLFxyXG4gICAgZXhwYW5kYWJsZTogZmFsc2UsXHJcbiAgICBsZXZlbDogMSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdWZWdldGFibGVzJyxcclxuICAgIGV4cGFuZGFibGU6IHRydWUsXHJcbiAgICBsZXZlbDogMCxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdHcmVlbicsXHJcbiAgICBleHBhbmRhYmxlOiB0cnVlLFxyXG4gICAgbGV2ZWw6IDEsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQnJvY2NvbGknLFxyXG4gICAgZXhwYW5kYWJsZTogZmFsc2UsXHJcbiAgICBsZXZlbDogMixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdCcnVzc2VscyBzcHJvdXRzJyxcclxuICAgIGV4cGFuZGFibGU6IGZhbHNlLFxyXG4gICAgbGV2ZWw6IDIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnT3JhbmdlJyxcclxuICAgIGV4cGFuZGFibGU6IHRydWUsXHJcbiAgICBsZXZlbDogMSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdQdW1wa2lucycsXHJcbiAgICBleHBhbmRhYmxlOiBmYWxzZSxcclxuICAgIGxldmVsOiAyLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0NhcnJvdHMnLFxyXG4gICAgZXhwYW5kYWJsZTogZmFsc2UsXHJcbiAgICBsZXZlbDogMixcclxuICB9LFxyXG5dO1xyXG5cclxuLyoqIEZsYXQgbm9kZSB3aXRoIGV4cGFuZGFibGUgYW5kIGxldmVsIGluZm9ybWF0aW9uICovXHJcbmludGVyZmFjZSBFeGFtcGxlRmxhdE5vZGUge1xyXG4gIGV4cGFuZGFibGU6IGJvb2xlYW47XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGxldmVsOiBudW1iZXI7XHJcbiAgaXNFeHBhbmRlZD86IGJvb2xlYW47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAdGl0bGUgVHJlZSB3aXRoIGZsYXQgbm9kZXNcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY2RrLXRyZWUtZmxhdC1leGFtcGxlJyxcclxuICB0ZW1wbGF0ZVVybDogJ2Nkay10cmVlLWZsYXQtZXhhbXBsZS5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnY2RrLXRyZWUtZmxhdC1leGFtcGxlLmNzcyddLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW0Nka1RyZWVNb2R1bGUsIE1hdEJ1dHRvbk1vZHVsZSwgTWF0SWNvbk1vZHVsZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDZGtUcmVlRmxhdEV4YW1wbGUge1xyXG4gIHRyZWVDb250cm9sID0gbmV3IEZsYXRUcmVlQ29udHJvbDxFeGFtcGxlRmxhdE5vZGU+KFxyXG4gICAgbm9kZSA9PiBub2RlLmxldmVsLFxyXG4gICAgbm9kZSA9PiBub2RlLmV4cGFuZGFibGUsXHJcbiAgKTtcclxuXHJcbiAgZGF0YVNvdXJjZSA9IG5ldyBBcnJheURhdGFTb3VyY2UoVFJFRV9EQVRBKTtcclxuXHJcbiAgaGFzQ2hpbGQgPSAoXzogbnVtYmVyLCBub2RlOiBFeGFtcGxlRmxhdE5vZGUpID0+IG5vZGUuZXhwYW5kYWJsZTtcclxuXHJcbiAgZ2V0UGFyZW50Tm9kZShub2RlOiBFeGFtcGxlRmxhdE5vZGUpIHtcclxuICAgIGNvbnN0IG5vZGVJbmRleCA9IFRSRUVfREFUQS5pbmRleE9mKG5vZGUpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSBub2RlSW5kZXggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICBpZiAoVFJFRV9EQVRBW2ldLmxldmVsID09PSBub2RlLmxldmVsIC0gMSkge1xyXG4gICAgICAgIHJldHVybiBUUkVFX0RBVEFbaV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHNob3VsZFJlbmRlcihub2RlOiBFeGFtcGxlRmxhdE5vZGUpIHtcclxuICAgIGxldCBwYXJlbnQgPSB0aGlzLmdldFBhcmVudE5vZGUobm9kZSk7XHJcbiAgICB3aGlsZSAocGFyZW50KSB7XHJcbiAgICAgIGlmICghcGFyZW50LmlzRXhwYW5kZWQpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgcGFyZW50ID0gdGhpcy5nZXRQYXJlbnROb2RlKHBhcmVudCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn1cclxuIiwiPGNkay10cmVlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIiBbdHJlZUNvbnRyb2xdPVwidHJlZUNvbnRyb2xcIj5cclxuICA8IS0tIFRoaXMgaXMgdGhlIHRyZWUgbm9kZSB0ZW1wbGF0ZSBmb3IgbGVhZiBub2RlcyAtLT5cclxuICA8Y2RrLXRyZWUtbm9kZSAqY2RrVHJlZU5vZGVEZWY9XCJsZXQgbm9kZVwiIGNka1RyZWVOb2RlUGFkZGluZ1xyXG4gICAgICAgICAgICAgICAgIFtzdHlsZS5kaXNwbGF5XT1cInNob3VsZFJlbmRlcihub2RlKSA/ICdmbGV4JyA6ICdub25lJ1wiXHJcbiAgICAgICAgICAgICAgICAgY2xhc3M9XCJleGFtcGxlLXRyZWUtbm9kZVwiPlxyXG4gICAgPCEtLSB1c2UgYSBkaXNhYmxlZCBidXR0b24gdG8gcHJvdmlkZSBwYWRkaW5nIGZvciB0cmVlIGxlYWYgLS0+XHJcbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBkaXNhYmxlZD48L2J1dHRvbj5cclxuICAgIHt7bm9kZS5uYW1lfX1cclxuICA8L2Nkay10cmVlLW5vZGU+XHJcbiAgPCEtLSBUaGlzIGlzIHRoZSB0cmVlIG5vZGUgdGVtcGxhdGUgZm9yIGV4cGFuZGFibGUgbm9kZXMgLS0+XHJcbiAgPGNkay10cmVlLW5vZGUgKmNka1RyZWVOb2RlRGVmPVwibGV0IG5vZGU7IHdoZW46IGhhc0NoaWxkXCIgY2RrVHJlZU5vZGVQYWRkaW5nXHJcbiAgICAgICAgICAgICAgICAgW3N0eWxlLmRpc3BsYXldPVwic2hvdWxkUmVuZGVyKG5vZGUpID8gJ2ZsZXgnIDogJ25vbmUnXCJcclxuICAgICAgICAgICAgICAgICBjbGFzcz1cImV4YW1wbGUtdHJlZS1ub2RlXCI+XHJcbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBjZGtUcmVlTm9kZVRvZ2dsZVxyXG4gICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cIidUb2dnbGUgJyArIG5vZGUubmFtZVwiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJub2RlLmlzRXhwYW5kZWQgPSAhbm9kZS5pc0V4cGFuZGVkXCJcclxuICAgICAgICAgICAgW3N0eWxlLnZpc2liaWxpdHldPVwibm9kZS5leHBhbmRhYmxlID8gJ3Zpc2libGUnIDogJ2hpZGRlbidcIj5cclxuICAgICAgPG1hdC1pY29uIGNsYXNzPVwibWF0LWljb24tcnRsLW1pcnJvclwiPlxyXG4gICAgICAgIHt7dHJlZUNvbnRyb2wuaXNFeHBhbmRlZChub2RlKSA/ICdleHBhbmRfbW9yZScgOiAnY2hldnJvbl9yaWdodCd9fVxyXG4gICAgICA8L21hdC1pY29uPlxyXG4gICAgPC9idXR0b24+XHJcbiAgICB7e25vZGUubmFtZX19XHJcbiAgPC9jZGstdHJlZS1ub2RlPlxyXG48L2Nkay10cmVlPlxyXG4iXX0=