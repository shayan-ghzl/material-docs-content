import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/layout";
/** @title Respond to viewport changes with BreakpointObserver */
export class BreakpointObserverOverviewExample {
    constructor(breakpointObserver) {
        this.destroyed = new Subject();
        // Create a map to display breakpoint names for demonstration purposes.
        this.displayNameMap = new Map([
            [Breakpoints.XSmall, 'XSmall'],
            [Breakpoints.Small, 'Small'],
            [Breakpoints.Medium, 'Medium'],
            [Breakpoints.Large, 'Large'],
            [Breakpoints.XLarge, 'XLarge'],
        ]);
        breakpointObserver
            .observe([
            Breakpoints.XSmall,
            Breakpoints.Small,
            Breakpoints.Medium,
            Breakpoints.Large,
            Breakpoints.XLarge,
        ])
            .pipe(takeUntil(this.destroyed))
            .subscribe(result => {
            for (const query of Object.keys(result.breakpoints)) {
                if (result.breakpoints[query]) {
                    this.currentScreenSize = this.displayNameMap.get(query) ?? 'Unknown';
                }
            }
        });
    }
    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: BreakpointObserverOverviewExample, deps: [{ token: i1.BreakpointObserver }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: BreakpointObserverOverviewExample, isStandalone: true, selector: "breakpoint-observer-overview-example", ngImport: i0, template: "<p>\r\n  Resize your browser window to see the current screen size change.\r\n</p>\r\n<p>\r\n  The current screen size is <strong>{{currentScreenSize}}</strong>\r\n</p>\r\n", styles: ["/** No CSS for this example */\r\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: BreakpointObserverOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'breakpoint-observer-overview-example', standalone: true, template: "<p>\r\n  Resize your browser window to see the current screen size change.\r\n</p>\r\n<p>\r\n  The current screen size is <strong>{{currentScreenSize}}</strong>\r\n</p>\r\n", styles: ["/** No CSS for this example */\r\n"] }]
        }], ctorParameters: () => [{ type: i1.BreakpointObserver }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWtwb2ludC1vYnNlcnZlci1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL2xheW91dC9icmVha3BvaW50LW9ic2VydmVyLW92ZXJ2aWV3L2JyZWFrcG9pbnQtb2JzZXJ2ZXItb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9sYXlvdXQvYnJlYWtwb2ludC1vYnNlcnZlci1vdmVydmlldy9icmVha3BvaW50LW9ic2VydmVyLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsa0JBQWtCLEVBQUUsV0FBVyxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDcEUsT0FBTyxFQUFDLFNBQVMsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQzdCLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBRXpDLGlFQUFpRTtBQU9qRSxNQUFNLE9BQU8saUNBQWlDO0lBYTVDLFlBQVksa0JBQXNDO1FBWmxELGNBQVMsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBR2hDLHVFQUF1RTtRQUN2RSxtQkFBYyxHQUFHLElBQUksR0FBRyxDQUFDO1lBQ3ZCLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUM7WUFDOUIsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQztZQUM1QixDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDO1lBQzlCLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUM7WUFDNUIsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQztTQUMvQixDQUFDLENBQUM7UUFHRCxrQkFBa0I7YUFDZixPQUFPLENBQUM7WUFDUCxXQUFXLENBQUMsTUFBTTtZQUNsQixXQUFXLENBQUMsS0FBSztZQUNqQixXQUFXLENBQUMsTUFBTTtZQUNsQixXQUFXLENBQUMsS0FBSztZQUNqQixXQUFXLENBQUMsTUFBTTtTQUNuQixDQUFDO2FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDL0IsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2xCLEtBQUssTUFBTSxLQUFLLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQ25ELElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDN0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLFNBQVMsQ0FBQztpQkFDdEU7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDNUIsQ0FBQzs4R0FuQ1UsaUNBQWlDO2tHQUFqQyxpQ0FBaUMsZ0dDWjlDLDhLQU1BOzsyRkRNYSxpQ0FBaUM7a0JBTjdDLFNBQVM7K0JBQ0Usc0NBQXNDLGNBR3BDLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0JyZWFrcG9pbnRPYnNlcnZlciwgQnJlYWtwb2ludHN9IGZyb20gJ0Bhbmd1bGFyL2Nkay9sYXlvdXQnO1xyXG5pbXBvcnQge0NvbXBvbmVudCwgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtTdWJqZWN0fSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHt0YWtlVW50aWx9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbi8qKiBAdGl0bGUgUmVzcG9uZCB0byB2aWV3cG9ydCBjaGFuZ2VzIHdpdGggQnJlYWtwb2ludE9ic2VydmVyICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYnJlYWtwb2ludC1vYnNlcnZlci1vdmVydmlldy1leGFtcGxlJyxcclxuICB0ZW1wbGF0ZVVybDogJ2JyZWFrcG9pbnQtb2JzZXJ2ZXItb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnYnJlYWtwb2ludC1vYnNlcnZlci1vdmVydmlldy1leGFtcGxlLmNzcyddLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcmVha3BvaW50T2JzZXJ2ZXJPdmVydmlld0V4YW1wbGUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIGRlc3Ryb3llZCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgY3VycmVudFNjcmVlblNpemU6IHN0cmluZztcclxuXHJcbiAgLy8gQ3JlYXRlIGEgbWFwIHRvIGRpc3BsYXkgYnJlYWtwb2ludCBuYW1lcyBmb3IgZGVtb25zdHJhdGlvbiBwdXJwb3Nlcy5cclxuICBkaXNwbGF5TmFtZU1hcCA9IG5ldyBNYXAoW1xyXG4gICAgW0JyZWFrcG9pbnRzLlhTbWFsbCwgJ1hTbWFsbCddLFxyXG4gICAgW0JyZWFrcG9pbnRzLlNtYWxsLCAnU21hbGwnXSxcclxuICAgIFtCcmVha3BvaW50cy5NZWRpdW0sICdNZWRpdW0nXSxcclxuICAgIFtCcmVha3BvaW50cy5MYXJnZSwgJ0xhcmdlJ10sXHJcbiAgICBbQnJlYWtwb2ludHMuWExhcmdlLCAnWExhcmdlJ10sXHJcbiAgXSk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGJyZWFrcG9pbnRPYnNlcnZlcjogQnJlYWtwb2ludE9ic2VydmVyKSB7XHJcbiAgICBicmVha3BvaW50T2JzZXJ2ZXJcclxuICAgICAgLm9ic2VydmUoW1xyXG4gICAgICAgIEJyZWFrcG9pbnRzLlhTbWFsbCxcclxuICAgICAgICBCcmVha3BvaW50cy5TbWFsbCxcclxuICAgICAgICBCcmVha3BvaW50cy5NZWRpdW0sXHJcbiAgICAgICAgQnJlYWtwb2ludHMuTGFyZ2UsXHJcbiAgICAgICAgQnJlYWtwb2ludHMuWExhcmdlLFxyXG4gICAgICBdKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQpKVxyXG4gICAgICAuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgZm9yIChjb25zdCBxdWVyeSBvZiBPYmplY3Qua2V5cyhyZXN1bHQuYnJlYWtwb2ludHMpKSB7XHJcbiAgICAgICAgICBpZiAocmVzdWx0LmJyZWFrcG9pbnRzW3F1ZXJ5XSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTY3JlZW5TaXplID0gdGhpcy5kaXNwbGF5TmFtZU1hcC5nZXQocXVlcnkpID8/ICdVbmtub3duJztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmRlc3Ryb3llZC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3llZC5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iLCI8cD5cclxuICBSZXNpemUgeW91ciBicm93c2VyIHdpbmRvdyB0byBzZWUgdGhlIGN1cnJlbnQgc2NyZWVuIHNpemUgY2hhbmdlLlxyXG48L3A+XHJcbjxwPlxyXG4gIFRoZSBjdXJyZW50IHNjcmVlbiBzaXplIGlzIDxzdHJvbmc+e3tjdXJyZW50U2NyZWVuU2l6ZX19PC9zdHJvbmc+XHJcbjwvcD5cclxuIl19