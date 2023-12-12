import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';
import * as i1 from '@angular/cdk/scrolling';
import { ScrollingModule, FixedSizeVirtualScrollStrategy, VIRTUAL_SCROLL_STRATEGY } from '@angular/cdk/scrolling';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Subscription } from 'rxjs';

/** @title Virtual scroll with view recycling disabled. */
class CdkVirtualScrollAppendOnlyExample {
    constructor() {
        this.items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkVirtualScrollAppendOnlyExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: CdkVirtualScrollAppendOnlyExample, isStandalone: true, selector: "cdk-virtual-scroll-append-only-example", ngImport: i0, template: "<cdk-virtual-scroll-viewport appendOnly itemSize=\"50\" class=\"example-viewport\">\r\n  <div *cdkVirtualFor=\"let item of items\" class=\"example-item\">{{item}}</div>\r\n</cdk-virtual-scroll-viewport>\r\n", styles: [".example-viewport {\r\n  height: 200px;\r\n  width: 200px;\r\n  border: 1px solid black;\r\n}\r\n\r\n.example-item {\r\n  height: 50px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: ScrollingModule }, { kind: "directive", type: i1.CdkFixedSizeVirtualScroll, selector: "cdk-virtual-scroll-viewport[itemSize]", inputs: ["itemSize", "minBufferPx", "maxBufferPx"] }, { kind: "directive", type: i1.CdkVirtualForOf, selector: "[cdkVirtualFor][cdkVirtualForOf]", inputs: ["cdkVirtualForOf", "cdkVirtualForTrackBy", "cdkVirtualForTemplate", "cdkVirtualForTemplateCacheSize"] }, { kind: "component", type: i1.CdkVirtualScrollViewport, selector: "cdk-virtual-scroll-viewport", inputs: ["orientation", "appendOnly"], outputs: ["scrolledIndexChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkVirtualScrollAppendOnlyExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-virtual-scroll-append-only-example', changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, imports: [ScrollingModule], template: "<cdk-virtual-scroll-viewport appendOnly itemSize=\"50\" class=\"example-viewport\">\r\n  <div *cdkVirtualFor=\"let item of items\" class=\"example-item\">{{item}}</div>\r\n</cdk-virtual-scroll-viewport>\r\n", styles: [".example-viewport {\r\n  height: 200px;\r\n  width: 200px;\r\n  border: 1px solid black;\r\n}\r\n\r\n.example-item {\r\n  height: 50px;\r\n}\r\n"] }]
        }] });

/** @title Virtual scroll context variables */
class CdkVirtualScrollContextExample {
    constructor() {
        this.items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkVirtualScrollContextExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: CdkVirtualScrollContextExample, isStandalone: true, selector: "cdk-virtual-scroll-context-example", ngImport: i0, template: "<cdk-virtual-scroll-viewport [itemSize]=\"18 * 7\" class=\"example-viewport\">\r\n  <div *cdkVirtualFor=\"let item of items;\r\n                       let index = index;\r\n                       let count = count;\r\n                       let first = first;\r\n                       let last = last;\r\n                       let even = even;\r\n                       let odd = odd;\" [class.example-alternate]=\"odd\">\r\n    <div class=\"example-item-detail\">Item: {{item}}</div>\r\n    <div class=\"example-item-detail\">Index: {{index}}</div>\r\n    <div class=\"example-item-detail\">Count: {{count}}</div>\r\n    <div class=\"example-item-detail\">First: {{first ? 'Yes' : 'No'}}</div>\r\n    <div class=\"example-item-detail\">Last: {{last ? 'Yes' : 'No'}}</div>\r\n    <div class=\"example-item-detail\">Even: {{even ? 'Yes' : 'No'}}</div>\r\n    <div class=\"example-item-detail\">Odd: {{odd ? 'Yes' : 'No'}}</div>\r\n  </div>\r\n</cdk-virtual-scroll-viewport>\r\n", styles: [".example-viewport {\r\n  height: 200px;\r\n  width: 200px;\r\n  border: 1px solid black;\r\n}\r\n\r\n.example-item-detail {\r\n  height: 18px;\r\n}\r\n\r\n.example-alternate {\r\n  background: rgba(127, 127, 127, 0.3);\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: ScrollingModule }, { kind: "directive", type: i1.CdkFixedSizeVirtualScroll, selector: "cdk-virtual-scroll-viewport[itemSize]", inputs: ["itemSize", "minBufferPx", "maxBufferPx"] }, { kind: "directive", type: i1.CdkVirtualForOf, selector: "[cdkVirtualFor][cdkVirtualForOf]", inputs: ["cdkVirtualForOf", "cdkVirtualForTrackBy", "cdkVirtualForTemplate", "cdkVirtualForTemplateCacheSize"] }, { kind: "component", type: i1.CdkVirtualScrollViewport, selector: "cdk-virtual-scroll-viewport", inputs: ["orientation", "appendOnly"], outputs: ["scrolledIndexChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkVirtualScrollContextExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-virtual-scroll-context-example', changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, imports: [ScrollingModule], template: "<cdk-virtual-scroll-viewport [itemSize]=\"18 * 7\" class=\"example-viewport\">\r\n  <div *cdkVirtualFor=\"let item of items;\r\n                       let index = index;\r\n                       let count = count;\r\n                       let first = first;\r\n                       let last = last;\r\n                       let even = even;\r\n                       let odd = odd;\" [class.example-alternate]=\"odd\">\r\n    <div class=\"example-item-detail\">Item: {{item}}</div>\r\n    <div class=\"example-item-detail\">Index: {{index}}</div>\r\n    <div class=\"example-item-detail\">Count: {{count}}</div>\r\n    <div class=\"example-item-detail\">First: {{first ? 'Yes' : 'No'}}</div>\r\n    <div class=\"example-item-detail\">Last: {{last ? 'Yes' : 'No'}}</div>\r\n    <div class=\"example-item-detail\">Even: {{even ? 'Yes' : 'No'}}</div>\r\n    <div class=\"example-item-detail\">Odd: {{odd ? 'Yes' : 'No'}}</div>\r\n  </div>\r\n</cdk-virtual-scroll-viewport>\r\n", styles: [".example-viewport {\r\n  height: 200px;\r\n  width: 200px;\r\n  border: 1px solid black;\r\n}\r\n\r\n.example-item-detail {\r\n  height: 18px;\r\n}\r\n\r\n.example-alternate {\r\n  background: rgba(127, 127, 127, 0.3);\r\n}\r\n"] }]
        }] });

class CustomVirtualScrollStrategy extends FixedSizeVirtualScrollStrategy {
    constructor() {
        super(50, 250, 500);
    }
}
/** @title Virtual scroll with a custom strategy */
class CdkVirtualScrollCustomStrategyExample {
    constructor() {
        this.items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkVirtualScrollCustomStrategyExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: CdkVirtualScrollCustomStrategyExample, isStandalone: true, selector: "cdk-virtual-scroll-custom-strategy-example", providers: [{ provide: VIRTUAL_SCROLL_STRATEGY, useClass: CustomVirtualScrollStrategy }], ngImport: i0, template: "<cdk-virtual-scroll-viewport class=\"example-viewport\">\r\n  <div *cdkVirtualFor=\"let item of items\" class=\"example-item\">{{item}}</div>\r\n</cdk-virtual-scroll-viewport>\r\n", styles: [".example-viewport {\r\n  height: 200px;\r\n  width: 200px;\r\n  border: 1px solid black;\r\n}\r\n\r\n.example-item {\r\n  height: 50px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: ScrollingModule }, { kind: "directive", type: i1.CdkVirtualForOf, selector: "[cdkVirtualFor][cdkVirtualForOf]", inputs: ["cdkVirtualForOf", "cdkVirtualForTrackBy", "cdkVirtualForTemplate", "cdkVirtualForTemplateCacheSize"] }, { kind: "component", type: i1.CdkVirtualScrollViewport, selector: "cdk-virtual-scroll-viewport", inputs: ["orientation", "appendOnly"], outputs: ["scrolledIndexChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkVirtualScrollCustomStrategyExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-virtual-scroll-custom-strategy-example', changeDetection: ChangeDetectionStrategy.OnPush, providers: [{ provide: VIRTUAL_SCROLL_STRATEGY, useClass: CustomVirtualScrollStrategy }], standalone: true, imports: [ScrollingModule], template: "<cdk-virtual-scroll-viewport class=\"example-viewport\">\r\n  <div *cdkVirtualFor=\"let item of items\" class=\"example-item\">{{item}}</div>\r\n</cdk-virtual-scroll-viewport>\r\n", styles: [".example-viewport {\r\n  height: 200px;\r\n  width: 200px;\r\n  border: 1px solid black;\r\n}\r\n\r\n.example-item {\r\n  height: 50px;\r\n}\r\n"] }]
        }] });

/** @title Virtual scroll with a custom data source */
class CdkVirtualScrollDataSourceExample {
    constructor() {
        this.ds = new MyDataSource();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkVirtualScrollDataSourceExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: CdkVirtualScrollDataSourceExample, isStandalone: true, selector: "cdk-virtual-scroll-data-source-example", ngImport: i0, template: "<cdk-virtual-scroll-viewport itemSize=\"50\" class=\"example-viewport\">\r\n  <div *cdkVirtualFor=\"let item of ds\" class=\"example-item\">{{item || 'Loading...'}}</div>\r\n</cdk-virtual-scroll-viewport>\r\n", styles: [".example-viewport {\r\n  height: 200px;\r\n  width: 200px;\r\n  border: 1px solid black;\r\n}\r\n\r\n.example-item {\r\n  height: 50px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: ScrollingModule }, { kind: "directive", type: i1.CdkFixedSizeVirtualScroll, selector: "cdk-virtual-scroll-viewport[itemSize]", inputs: ["itemSize", "minBufferPx", "maxBufferPx"] }, { kind: "directive", type: i1.CdkVirtualForOf, selector: "[cdkVirtualFor][cdkVirtualForOf]", inputs: ["cdkVirtualForOf", "cdkVirtualForTrackBy", "cdkVirtualForTemplate", "cdkVirtualForTemplateCacheSize"] }, { kind: "component", type: i1.CdkVirtualScrollViewport, selector: "cdk-virtual-scroll-viewport", inputs: ["orientation", "appendOnly"], outputs: ["scrolledIndexChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkVirtualScrollDataSourceExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-virtual-scroll-data-source-example', changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, imports: [ScrollingModule], template: "<cdk-virtual-scroll-viewport itemSize=\"50\" class=\"example-viewport\">\r\n  <div *cdkVirtualFor=\"let item of ds\" class=\"example-item\">{{item || 'Loading...'}}</div>\r\n</cdk-virtual-scroll-viewport>\r\n", styles: [".example-viewport {\r\n  height: 200px;\r\n  width: 200px;\r\n  border: 1px solid black;\r\n}\r\n\r\n.example-item {\r\n  height: 50px;\r\n}\r\n"] }]
        }] });
class MyDataSource extends DataSource {
    constructor() {
        super(...arguments);
        this._length = 100000;
        this._pageSize = 100;
        this._cachedData = Array.from({ length: this._length });
        this._fetchedPages = new Set();
        this._dataStream = new BehaviorSubject(this._cachedData);
        this._subscription = new Subscription();
    }
    connect(collectionViewer) {
        this._subscription.add(collectionViewer.viewChange.subscribe(range => {
            const startPage = this._getPageForIndex(range.start);
            const endPage = this._getPageForIndex(range.end - 1);
            for (let i = startPage; i <= endPage; i++) {
                this._fetchPage(i);
            }
        }));
        return this._dataStream;
    }
    disconnect() {
        this._subscription.unsubscribe();
    }
    _getPageForIndex(index) {
        return Math.floor(index / this._pageSize);
    }
    _fetchPage(page) {
        if (this._fetchedPages.has(page)) {
            return;
        }
        this._fetchedPages.add(page);
        // Use `setTimeout` to simulate fetching data from server.
        setTimeout(() => {
            this._cachedData.splice(page * this._pageSize, this._pageSize, ...Array.from({ length: this._pageSize }).map((_, i) => `Item #${page * this._pageSize + i}`));
            this._dataStream.next(this._cachedData);
        }, Math.random() * 1000 + 200);
    }
}

/** @title Virtual scrolling `<dl>` */
class CdkVirtualScrollDlExample {
    constructor() {
        this.states = [
            { name: 'Alabama', capital: 'Montgomery' },
            { name: 'Alaska', capital: 'Juneau' },
            { name: 'Arizona', capital: 'Phoenix' },
            { name: 'Arkansas', capital: 'Little Rock' },
            { name: 'California', capital: 'Sacramento' },
            { name: 'Colorado', capital: 'Denver' },
            { name: 'Connecticut', capital: 'Hartford' },
            { name: 'Delaware', capital: 'Dover' },
            { name: 'Florida', capital: 'Tallahassee' },
            { name: 'Georgia', capital: 'Atlanta' },
            { name: 'Hawaii', capital: 'Honolulu' },
            { name: 'Idaho', capital: 'Boise' },
            { name: 'Illinois', capital: 'Springfield' },
            { name: 'Indiana', capital: 'Indianapolis' },
            { name: 'Iowa', capital: 'Des Moines' },
            { name: 'Kansas', capital: 'Topeka' },
            { name: 'Kentucky', capital: 'Frankfort' },
            { name: 'Louisiana', capital: 'Baton Rouge' },
            { name: 'Maine', capital: 'Augusta' },
            { name: 'Maryland', capital: 'Annapolis' },
            { name: 'Massachusetts', capital: 'Boston' },
            { name: 'Michigan', capital: 'Lansing' },
            { name: 'Minnesota', capital: 'St. Paul' },
            { name: 'Mississippi', capital: 'Jackson' },
            { name: 'Missouri', capital: 'Jefferson City' },
            { name: 'Montana', capital: 'Helena' },
            { name: 'Nebraska', capital: 'Lincoln' },
            { name: 'Nevada', capital: 'Carson City' },
            { name: 'New Hampshire', capital: 'Concord' },
            { name: 'New Jersey', capital: 'Trenton' },
            { name: 'New Mexico', capital: 'Santa Fe' },
            { name: 'New York', capital: 'Albany' },
            { name: 'North Carolina', capital: 'Raleigh' },
            { name: 'North Dakota', capital: 'Bismarck' },
            { name: 'Ohio', capital: 'Columbus' },
            { name: 'Oklahoma', capital: 'Oklahoma City' },
            { name: 'Oregon', capital: 'Salem' },
            { name: 'Pennsylvania', capital: 'Harrisburg' },
            { name: 'Rhode Island', capital: 'Providence' },
            { name: 'South Carolina', capital: 'Columbia' },
            { name: 'South Dakota', capital: 'Pierre' },
            { name: 'Tennessee', capital: 'Nashville' },
            { name: 'Texas', capital: 'Austin' },
            { name: 'Utah', capital: 'Salt Lake City' },
            { name: 'Vermont', capital: 'Montpelier' },
            { name: 'Virginia', capital: 'Richmond' },
            { name: 'Washington', capital: 'Olympia' },
            { name: 'West Virginia', capital: 'Charleston' },
            { name: 'Wisconsin', capital: 'Madison' },
            { name: 'Wyoming', capital: 'Cheyenne' },
        ];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkVirtualScrollDlExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: CdkVirtualScrollDlExample, isStandalone: true, selector: "cdk-virtual-scroll-dl-example", ngImport: i0, template: "<cdk-virtual-scroll-viewport class=\"example-viewport\" itemSize=\"60\">\r\n  <dl class=\"example-dl\">\r\n    <ng-container *cdkVirtualFor=\"let state of states\">\r\n      <dt class=\"example-dt\">{{state.name}}</dt>\r\n      <dd class=\"example-dd\">{{state.capital}}</dd>\r\n    </ng-container>\r\n  </dl>\r\n</cdk-virtual-scroll-viewport>\r\n", styles: [".example-viewport {\r\n  height: 200px;\r\n  width: 200px;\r\n  border: 1px solid black;\r\n}\r\n\r\n.example-dt {\r\n  height: 30px;\r\n  font-weight: bold;\r\n}\r\n\r\n.example-dd {\r\n  height: 30px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: ScrollingModule }, { kind: "directive", type: i1.CdkFixedSizeVirtualScroll, selector: "cdk-virtual-scroll-viewport[itemSize]", inputs: ["itemSize", "minBufferPx", "maxBufferPx"] }, { kind: "directive", type: i1.CdkVirtualForOf, selector: "[cdkVirtualFor][cdkVirtualForOf]", inputs: ["cdkVirtualForOf", "cdkVirtualForTrackBy", "cdkVirtualForTemplate", "cdkVirtualForTemplateCacheSize"] }, { kind: "component", type: i1.CdkVirtualScrollViewport, selector: "cdk-virtual-scroll-viewport", inputs: ["orientation", "appendOnly"], outputs: ["scrolledIndexChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkVirtualScrollDlExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-virtual-scroll-dl-example', changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, imports: [ScrollingModule], template: "<cdk-virtual-scroll-viewport class=\"example-viewport\" itemSize=\"60\">\r\n  <dl class=\"example-dl\">\r\n    <ng-container *cdkVirtualFor=\"let state of states\">\r\n      <dt class=\"example-dt\">{{state.name}}</dt>\r\n      <dd class=\"example-dd\">{{state.capital}}</dd>\r\n    </ng-container>\r\n  </dl>\r\n</cdk-virtual-scroll-viewport>\r\n", styles: [".example-viewport {\r\n  height: 200px;\r\n  width: 200px;\r\n  border: 1px solid black;\r\n}\r\n\r\n.example-dt {\r\n  height: 30px;\r\n  font-weight: bold;\r\n}\r\n\r\n.example-dd {\r\n  height: 30px;\r\n}\r\n"] }]
        }] });

/** @title Fixed size virtual scroll with custom buffer parameters */
class CdkVirtualScrollFixedBufferExample {
    constructor() {
        this.items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkVirtualScrollFixedBufferExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: CdkVirtualScrollFixedBufferExample, isStandalone: true, selector: "cdk-virtual-scroll-fixed-buffer-example", ngImport: i0, template: "<cdk-virtual-scroll-viewport itemSize=\"50\" minBufferPx=\"200\" maxBufferPx=\"400\"\r\n                             class=\"example-viewport\">\r\n  <div *cdkVirtualFor=\"let item of items\" class=\"example-item\">{{item}}</div>\r\n</cdk-virtual-scroll-viewport>\r\n", styles: [".example-viewport {\r\n  height: 200px;\r\n  width: 200px;\r\n  border: 1px solid black;\r\n}\r\n\r\n.example-item {\r\n  height: 50px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: ScrollingModule }, { kind: "directive", type: i1.CdkFixedSizeVirtualScroll, selector: "cdk-virtual-scroll-viewport[itemSize]", inputs: ["itemSize", "minBufferPx", "maxBufferPx"] }, { kind: "directive", type: i1.CdkVirtualForOf, selector: "[cdkVirtualFor][cdkVirtualForOf]", inputs: ["cdkVirtualForOf", "cdkVirtualForTrackBy", "cdkVirtualForTemplate", "cdkVirtualForTemplateCacheSize"] }, { kind: "component", type: i1.CdkVirtualScrollViewport, selector: "cdk-virtual-scroll-viewport", inputs: ["orientation", "appendOnly"], outputs: ["scrolledIndexChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkVirtualScrollFixedBufferExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-virtual-scroll-fixed-buffer-example', changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, imports: [ScrollingModule], template: "<cdk-virtual-scroll-viewport itemSize=\"50\" minBufferPx=\"200\" maxBufferPx=\"400\"\r\n                             class=\"example-viewport\">\r\n  <div *cdkVirtualFor=\"let item of items\" class=\"example-item\">{{item}}</div>\r\n</cdk-virtual-scroll-viewport>\r\n", styles: [".example-viewport {\r\n  height: 200px;\r\n  width: 200px;\r\n  border: 1px solid black;\r\n}\r\n\r\n.example-item {\r\n  height: 50px;\r\n}\r\n"] }]
        }] });

/** @title Horizontal virtual scroll */
class CdkVirtualScrollHorizontalExample {
    constructor() {
        this.items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkVirtualScrollHorizontalExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: CdkVirtualScrollHorizontalExample, isStandalone: true, selector: "cdk-virtual-scroll-horizontal-example", ngImport: i0, template: "<div class=\"cdk-virtual-scroll-data-source-example\">\r\n  <cdk-virtual-scroll-viewport orientation=\"horizontal\" itemSize=\"50\" class=\"example-viewport\">\r\n    <div *cdkVirtualFor=\"let item of items\" class=\"example-item\">{{item}}</div>\r\n  </cdk-virtual-scroll-viewport>\r\n</div>\r\n", styles: [".cdk-virtual-scroll-data-source-example .example-viewport {\r\n  height: 200px;\r\n  width: 200px;\r\n  border: 1px solid black;\r\n}\r\n\r\n.cdk-virtual-scroll-data-source-example .example-viewport .cdk-virtual-scroll-content-wrapper {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.cdk-virtual-scroll-data-source-example .example-item {\r\n  width: 50px;\r\n  height: 100%;\r\n  writing-mode: vertical-lr;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: ScrollingModule }, { kind: "directive", type: i1.CdkFixedSizeVirtualScroll, selector: "cdk-virtual-scroll-viewport[itemSize]", inputs: ["itemSize", "minBufferPx", "maxBufferPx"] }, { kind: "directive", type: i1.CdkVirtualForOf, selector: "[cdkVirtualFor][cdkVirtualForOf]", inputs: ["cdkVirtualForOf", "cdkVirtualForTrackBy", "cdkVirtualForTemplate", "cdkVirtualForTemplateCacheSize"] }, { kind: "component", type: i1.CdkVirtualScrollViewport, selector: "cdk-virtual-scroll-viewport", inputs: ["orientation", "appendOnly"], outputs: ["scrolledIndexChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkVirtualScrollHorizontalExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-virtual-scroll-horizontal-example', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, imports: [ScrollingModule], template: "<div class=\"cdk-virtual-scroll-data-source-example\">\r\n  <cdk-virtual-scroll-viewport orientation=\"horizontal\" itemSize=\"50\" class=\"example-viewport\">\r\n    <div *cdkVirtualFor=\"let item of items\" class=\"example-item\">{{item}}</div>\r\n  </cdk-virtual-scroll-viewport>\r\n</div>\r\n", styles: [".cdk-virtual-scroll-data-source-example .example-viewport {\r\n  height: 200px;\r\n  width: 200px;\r\n  border: 1px solid black;\r\n}\r\n\r\n.cdk-virtual-scroll-data-source-example .example-viewport .cdk-virtual-scroll-content-wrapper {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.cdk-virtual-scroll-data-source-example .example-item {\r\n  width: 50px;\r\n  height: 100%;\r\n  writing-mode: vertical-lr;\r\n}\r\n"] }]
        }] });

/** @title Basic virtual scroll */
class CdkVirtualScrollOverviewExample {
    constructor() {
        this.items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkVirtualScrollOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: CdkVirtualScrollOverviewExample, isStandalone: true, selector: "cdk-virtual-scroll-overview-example", ngImport: i0, template: "<cdk-virtual-scroll-viewport itemSize=\"50\" class=\"example-viewport\">\r\n  <div *cdkVirtualFor=\"let item of items\" class=\"example-item\">{{item}}</div>\r\n</cdk-virtual-scroll-viewport>\r\n", styles: [".example-viewport {\r\n  height: 200px;\r\n  width: 200px;\r\n  border: 1px solid black;\r\n}\r\n\r\n.example-item {\r\n  height: 50px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: ScrollingModule }, { kind: "directive", type: i1.CdkFixedSizeVirtualScroll, selector: "cdk-virtual-scroll-viewport[itemSize]", inputs: ["itemSize", "minBufferPx", "maxBufferPx"] }, { kind: "directive", type: i1.CdkVirtualForOf, selector: "[cdkVirtualFor][cdkVirtualForOf]", inputs: ["cdkVirtualForOf", "cdkVirtualForTrackBy", "cdkVirtualForTemplate", "cdkVirtualForTemplateCacheSize"] }, { kind: "component", type: i1.CdkVirtualScrollViewport, selector: "cdk-virtual-scroll-viewport", inputs: ["orientation", "appendOnly"], outputs: ["scrolledIndexChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkVirtualScrollOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-virtual-scroll-overview-example', changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, imports: [ScrollingModule], template: "<cdk-virtual-scroll-viewport itemSize=\"50\" class=\"example-viewport\">\r\n  <div *cdkVirtualFor=\"let item of items\" class=\"example-item\">{{item}}</div>\r\n</cdk-virtual-scroll-viewport>\r\n", styles: [".example-viewport {\r\n  height: 200px;\r\n  width: 200px;\r\n  border: 1px solid black;\r\n}\r\n\r\n.example-item {\r\n  height: 50px;\r\n}\r\n"] }]
        }] });

/** @title Virtual scrolling viewport parent element */
class CdkVirtualScrollParentScrollingExample {
    constructor() {
        this.items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkVirtualScrollParentScrollingExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: CdkVirtualScrollParentScrollingExample, isStandalone: true, selector: "cdk-virtual-scroll-parent-scrolling-example", ngImport: i0, template: "<div class=\"example-viewport\" cdkVirtualScrollingElement>\r\n  <div class=\"example-header\">Content before</div>\r\n  <cdk-virtual-scroll-viewport itemSize=\"50\">\r\n    <div *cdkVirtualFor=\"let item of items\" class=\"example-item\">{{item}}</div>\r\n  </cdk-virtual-scroll-viewport>\r\n  <div class=\"example-footer\">Content after</div>\r\n</div>\r\n", styles: [".example-viewport {\r\n  flex: 1;\r\n  width: 200px;\r\n  min-height: 200px;\r\n  border: 1px solid black;\r\n}\r\n\r\n.example-item {\r\n  height: 50px;\r\n}\r\n\r\n.example-header,\r\n.example-footer {\r\n  height: 100px;\r\n  background: lightgray;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: ScrollingModule }, { kind: "directive", type: i1.CdkFixedSizeVirtualScroll, selector: "cdk-virtual-scroll-viewport[itemSize]", inputs: ["itemSize", "minBufferPx", "maxBufferPx"] }, { kind: "directive", type: i1.CdkVirtualForOf, selector: "[cdkVirtualFor][cdkVirtualForOf]", inputs: ["cdkVirtualForOf", "cdkVirtualForTrackBy", "cdkVirtualForTemplate", "cdkVirtualForTemplateCacheSize"] }, { kind: "component", type: i1.CdkVirtualScrollViewport, selector: "cdk-virtual-scroll-viewport", inputs: ["orientation", "appendOnly"], outputs: ["scrolledIndexChange"] }, { kind: "directive", type: i1.CdkVirtualScrollableElement, selector: "[cdkVirtualScrollingElement]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkVirtualScrollParentScrollingExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-virtual-scroll-parent-scrolling-example', changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, imports: [ScrollingModule], template: "<div class=\"example-viewport\" cdkVirtualScrollingElement>\r\n  <div class=\"example-header\">Content before</div>\r\n  <cdk-virtual-scroll-viewport itemSize=\"50\">\r\n    <div *cdkVirtualFor=\"let item of items\" class=\"example-item\">{{item}}</div>\r\n  </cdk-virtual-scroll-viewport>\r\n  <div class=\"example-footer\">Content after</div>\r\n</div>\r\n", styles: [".example-viewport {\r\n  flex: 1;\r\n  width: 200px;\r\n  min-height: 200px;\r\n  border: 1px solid black;\r\n}\r\n\r\n.example-item {\r\n  height: 50px;\r\n}\r\n\r\n.example-header,\r\n.example-footer {\r\n  height: 100px;\r\n  background: lightgray;\r\n}\r\n"] }]
        }] });

/** @title Virtual scroll with no template caching */
class CdkVirtualScrollTemplateCacheExample {
    constructor() {
        this.items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkVirtualScrollTemplateCacheExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: CdkVirtualScrollTemplateCacheExample, isStandalone: true, selector: "cdk-virtual-scroll-template-cache-example", ngImport: i0, template: "<cdk-virtual-scroll-viewport itemSize=\"50\" class=\"example-viewport\">\r\n  <div *cdkVirtualFor=\"let item of items; templateCacheSize: 0\" class=\"example-item\">{{item}}</div>\r\n</cdk-virtual-scroll-viewport>\r\n", styles: [".example-viewport {\r\n  height: 200px;\r\n  width: 200px;\r\n  border: 1px solid black;\r\n}\r\n\r\n.example-item {\r\n  height: 50px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: ScrollingModule }, { kind: "directive", type: i1.CdkFixedSizeVirtualScroll, selector: "cdk-virtual-scroll-viewport[itemSize]", inputs: ["itemSize", "minBufferPx", "maxBufferPx"] }, { kind: "directive", type: i1.CdkVirtualForOf, selector: "[cdkVirtualFor][cdkVirtualForOf]", inputs: ["cdkVirtualForOf", "cdkVirtualForTrackBy", "cdkVirtualForTemplate", "cdkVirtualForTemplateCacheSize"] }, { kind: "component", type: i1.CdkVirtualScrollViewport, selector: "cdk-virtual-scroll-viewport", inputs: ["orientation", "appendOnly"], outputs: ["scrolledIndexChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkVirtualScrollTemplateCacheExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-virtual-scroll-template-cache-example', changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, imports: [ScrollingModule], template: "<cdk-virtual-scroll-viewport itemSize=\"50\" class=\"example-viewport\">\r\n  <div *cdkVirtualFor=\"let item of items; templateCacheSize: 0\" class=\"example-item\">{{item}}</div>\r\n</cdk-virtual-scroll-viewport>\r\n", styles: [".example-viewport {\r\n  height: 200px;\r\n  width: 200px;\r\n  border: 1px solid black;\r\n}\r\n\r\n.example-item {\r\n  height: 50px;\r\n}\r\n"] }]
        }] });

/** @title Virtual scrolling window */
class CdkVirtualScrollWindowScrollingExample {
    constructor() {
        this.shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
        this.items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkVirtualScrollWindowScrollingExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: CdkVirtualScrollWindowScrollingExample, isStandalone: true, selector: "cdk-virtual-scroll-window-scrolling-example", inputs: { shouldRun: "shouldRun" }, ngImport: i0, template: "@if (shouldRun) {\r\n  <div class=\"example-header\">Content before</div>\r\n  <cdk-virtual-scroll-viewport scrollWindow itemSize=\"50\">\r\n    <div *cdkVirtualFor=\"let item of items\" class=\"example-item\">{{item}}</div>\r\n  </cdk-virtual-scroll-viewport>\r\n  <div class=\"example-footer\">Content after</div>\r\n}\r\n\r\n@if (!shouldRun) {\r\n  <div>Please open on StackBlitz to see result</div>\r\n}\r\n", styles: [".example-item {\r\n  height: 50px;\r\n}\r\n\r\n.example-header,\r\n.example-footer {\r\n  height: 100px;\r\n  background: lightgray;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: ScrollingModule }, { kind: "directive", type: i1.CdkFixedSizeVirtualScroll, selector: "cdk-virtual-scroll-viewport[itemSize]", inputs: ["itemSize", "minBufferPx", "maxBufferPx"] }, { kind: "directive", type: i1.CdkVirtualForOf, selector: "[cdkVirtualFor][cdkVirtualForOf]", inputs: ["cdkVirtualForOf", "cdkVirtualForTrackBy", "cdkVirtualForTemplate", "cdkVirtualForTemplateCacheSize"] }, { kind: "component", type: i1.CdkVirtualScrollViewport, selector: "cdk-virtual-scroll-viewport", inputs: ["orientation", "appendOnly"], outputs: ["scrolledIndexChange"] }, { kind: "directive", type: i1.CdkVirtualScrollableWindow, selector: "cdk-virtual-scroll-viewport[scrollWindow]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkVirtualScrollWindowScrollingExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-virtual-scroll-window-scrolling-example', changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, imports: [ScrollingModule], template: "@if (shouldRun) {\r\n  <div class=\"example-header\">Content before</div>\r\n  <cdk-virtual-scroll-viewport scrollWindow itemSize=\"50\">\r\n    <div *cdkVirtualFor=\"let item of items\" class=\"example-item\">{{item}}</div>\r\n  </cdk-virtual-scroll-viewport>\r\n  <div class=\"example-footer\">Content after</div>\r\n}\r\n\r\n@if (!shouldRun) {\r\n  <div>Please open on StackBlitz to see result</div>\r\n}\r\n", styles: [".example-item {\r\n  height: 50px;\r\n}\r\n\r\n.example-header,\r\n.example-footer {\r\n  height: 100px;\r\n  background: lightgray;\r\n}\r\n"] }]
        }], propDecorators: { shouldRun: [{
                type: Input
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { CdkVirtualScrollAppendOnlyExample, CdkVirtualScrollContextExample, CdkVirtualScrollCustomStrategyExample, CdkVirtualScrollDataSourceExample, CdkVirtualScrollDlExample, CdkVirtualScrollFixedBufferExample, CdkVirtualScrollHorizontalExample, CdkVirtualScrollOverviewExample, CdkVirtualScrollParentScrollingExample, CdkVirtualScrollTemplateCacheExample, CdkVirtualScrollWindowScrollingExample };
//# sourceMappingURL=scrolling.mjs.map
