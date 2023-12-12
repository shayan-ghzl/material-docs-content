import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { DatePipe } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/list";
import * as i2 from "@angular/material/divider";
import * as i3 from "@angular/material/icon";
/**
 * @title List with sections
 */
export class ListSectionsExample {
    constructor() {
        this.folders = [
            {
                name: 'Photos',
                updated: new Date('1/1/16'),
            },
            {
                name: 'Recipes',
                updated: new Date('1/17/16'),
            },
            {
                name: 'Work',
                updated: new Date('1/28/16'),
            },
        ];
        this.notes = [
            {
                name: 'Vacation Itinerary',
                updated: new Date('2/20/16'),
            },
            {
                name: 'Kitchen Remodel',
                updated: new Date('1/18/16'),
            },
        ];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ListSectionsExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: ListSectionsExample, isStandalone: true, selector: "list-sections-example", ngImport: i0, template: "<mat-list>\r\n  <div mat-subheader>Folders</div>\r\n  @for (folder of folders; track folder) {\r\n    <mat-list-item>\r\n      <mat-icon matListItemIcon>folder</mat-icon>\r\n      <div matListItemTitle>{{folder.name}}</div>\r\n      <div matListItemLine>{{folder.updated | date}}</div>\r\n    </mat-list-item>\r\n  }\r\n  <mat-divider></mat-divider>\r\n  <div mat-subheader>Notes</div>\r\n  @for (note of notes; track note) {\r\n    <mat-list-item>\r\n      <mat-icon matListItemIcon>note</mat-icon>\r\n      <div matListItemTitle>{{note.name}}</div>\r\n      <div matListItemLine>{{note.updated | date}}</div>\r\n    </mat-list-item>\r\n  }\r\n</mat-list>\r\n", styles: [".mat-mdc-list-item-icon {\r\n  color: rgba(0, 0, 0, 0.54);\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatListModule }, { kind: "component", type: i1.MatList, selector: "mat-list", exportAs: ["matList"] }, { kind: "component", type: i1.MatListItem, selector: "mat-list-item, a[mat-list-item], button[mat-list-item]", inputs: ["activated"], exportAs: ["matListItem"] }, { kind: "directive", type: i1.MatListItemIcon, selector: "[matListItemIcon]" }, { kind: "directive", type: i1.MatListSubheaderCssMatStyler, selector: "[mat-subheader], [matSubheader]" }, { kind: "component", type: i2.MatDivider, selector: "mat-divider", inputs: ["vertical", "inset"] }, { kind: "directive", type: i1.MatListItemLine, selector: "[matListItemLine]" }, { kind: "directive", type: i1.MatListItemTitle, selector: "[matListItemTitle]" }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "ngmodule", type: MatDividerModule }, { kind: "pipe", type: DatePipe, name: "date" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ListSectionsExample, decorators: [{
            type: Component,
            args: [{ selector: 'list-sections-example', standalone: true, imports: [MatListModule, MatIconModule, MatDividerModule, DatePipe], template: "<mat-list>\r\n  <div mat-subheader>Folders</div>\r\n  @for (folder of folders; track folder) {\r\n    <mat-list-item>\r\n      <mat-icon matListItemIcon>folder</mat-icon>\r\n      <div matListItemTitle>{{folder.name}}</div>\r\n      <div matListItemLine>{{folder.updated | date}}</div>\r\n    </mat-list-item>\r\n  }\r\n  <mat-divider></mat-divider>\r\n  <div mat-subheader>Notes</div>\r\n  @for (note of notes; track note) {\r\n    <mat-list-item>\r\n      <mat-icon matListItemIcon>note</mat-icon>\r\n      <div matListItemTitle>{{note.name}}</div>\r\n      <div matListItemLine>{{note.updated | date}}</div>\r\n    </mat-list-item>\r\n  }\r\n</mat-list>\r\n", styles: [".mat-mdc-list-item-icon {\r\n  color: rgba(0, 0, 0, 0.54);\r\n}\r\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1zZWN0aW9ucy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvbGlzdC9saXN0LXNlY3Rpb25zL2xpc3Qtc2VjdGlvbnMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2xpc3QvbGlzdC1zZWN0aW9ucy9saXN0LXNlY3Rpb25zLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDOzs7OztBQU9yRDs7R0FFRztBQVFILE1BQU0sT0FBTyxtQkFBbUI7SUFQaEM7UUFRRSxZQUFPLEdBQWM7WUFDbkI7Z0JBQ0UsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUM1QjtZQUNEO2dCQUNFLElBQUksRUFBRSxTQUFTO2dCQUNmLE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDN0I7WUFDRDtnQkFDRSxJQUFJLEVBQUUsTUFBTTtnQkFDWixPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQzdCO1NBQ0YsQ0FBQztRQUNGLFVBQUssR0FBYztZQUNqQjtnQkFDRSxJQUFJLEVBQUUsb0JBQW9CO2dCQUMxQixPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQzdCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLGlCQUFpQjtnQkFDdkIsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUM3QjtTQUNGLENBQUM7S0FDSDs4R0F6QlksbUJBQW1CO2tHQUFuQixtQkFBbUIsaUZDckJoQyxzcEJBbUJBLDRIREFZLGFBQWEsd3RCQUFFLGFBQWEsbUxBQUUsZ0JBQWdCLDBCQUFFLFFBQVE7OzJGQUV2RCxtQkFBbUI7a0JBUC9CLFNBQVM7K0JBQ0UsdUJBQXVCLGNBR3JCLElBQUksV0FDUCxDQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge01hdERpdmlkZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpdmlkZXInO1xyXG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xyXG5pbXBvcnQge0RhdGVQaXBlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge01hdExpc3RNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xpc3QnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZWN0aW9uIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgdXBkYXRlZDogRGF0ZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEB0aXRsZSBMaXN0IHdpdGggc2VjdGlvbnNcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGlzdC1zZWN0aW9ucy1leGFtcGxlJyxcclxuICBzdHlsZVVybHM6IFsnbGlzdC1zZWN0aW9ucy1leGFtcGxlLmNzcyddLFxyXG4gIHRlbXBsYXRlVXJsOiAnbGlzdC1zZWN0aW9ucy1leGFtcGxlLmh0bWwnLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW01hdExpc3RNb2R1bGUsIE1hdEljb25Nb2R1bGUsIE1hdERpdmlkZXJNb2R1bGUsIERhdGVQaXBlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIExpc3RTZWN0aW9uc0V4YW1wbGUge1xyXG4gIGZvbGRlcnM6IFNlY3Rpb25bXSA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogJ1Bob3RvcycsXHJcbiAgICAgIHVwZGF0ZWQ6IG5ldyBEYXRlKCcxLzEvMTYnKSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdSZWNpcGVzJyxcclxuICAgICAgdXBkYXRlZDogbmV3IERhdGUoJzEvMTcvMTYnKSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdXb3JrJyxcclxuICAgICAgdXBkYXRlZDogbmV3IERhdGUoJzEvMjgvMTYnKSxcclxuICAgIH0sXHJcbiAgXTtcclxuICBub3RlczogU2VjdGlvbltdID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiAnVmFjYXRpb24gSXRpbmVyYXJ5JyxcclxuICAgICAgdXBkYXRlZDogbmV3IERhdGUoJzIvMjAvMTYnKSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdLaXRjaGVuIFJlbW9kZWwnLFxyXG4gICAgICB1cGRhdGVkOiBuZXcgRGF0ZSgnMS8xOC8xNicpLFxyXG4gICAgfSxcclxuICBdO1xyXG59XHJcbiIsIjxtYXQtbGlzdD5cclxuICA8ZGl2IG1hdC1zdWJoZWFkZXI+Rm9sZGVyczwvZGl2PlxyXG4gIEBmb3IgKGZvbGRlciBvZiBmb2xkZXJzOyB0cmFjayBmb2xkZXIpIHtcclxuICAgIDxtYXQtbGlzdC1pdGVtPlxyXG4gICAgICA8bWF0LWljb24gbWF0TGlzdEl0ZW1JY29uPmZvbGRlcjwvbWF0LWljb24+XHJcbiAgICAgIDxkaXYgbWF0TGlzdEl0ZW1UaXRsZT57e2ZvbGRlci5uYW1lfX08L2Rpdj5cclxuICAgICAgPGRpdiBtYXRMaXN0SXRlbUxpbmU+e3tmb2xkZXIudXBkYXRlZCB8IGRhdGV9fTwvZGl2PlxyXG4gICAgPC9tYXQtbGlzdC1pdGVtPlxyXG4gIH1cclxuICA8bWF0LWRpdmlkZXI+PC9tYXQtZGl2aWRlcj5cclxuICA8ZGl2IG1hdC1zdWJoZWFkZXI+Tm90ZXM8L2Rpdj5cclxuICBAZm9yIChub3RlIG9mIG5vdGVzOyB0cmFjayBub3RlKSB7XHJcbiAgICA8bWF0LWxpc3QtaXRlbT5cclxuICAgICAgPG1hdC1pY29uIG1hdExpc3RJdGVtSWNvbj5ub3RlPC9tYXQtaWNvbj5cclxuICAgICAgPGRpdiBtYXRMaXN0SXRlbVRpdGxlPnt7bm90ZS5uYW1lfX08L2Rpdj5cclxuICAgICAgPGRpdiBtYXRMaXN0SXRlbUxpbmU+e3tub3RlLnVwZGF0ZWQgfCBkYXRlfX08L2Rpdj5cclxuICAgIDwvbWF0LWxpc3QtaXRlbT5cclxuICB9XHJcbjwvbWF0LWxpc3Q+XHJcbiJdfQ==