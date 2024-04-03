import * as i0 from '@angular/core';
import { Directive, Input } from '@angular/core';

class NgxForOf {
    constructor(iterableDiffers, viewContainer, templateRef) {
        this.iterableDiffers = iterableDiffers;
        this.viewContainer = viewContainer;
        this.templateRef = templateRef;
        this.difference = null;
        this.showCount = 2;
        this.ngxForShowCount = 2;
    }
    ngOnChanges(changes) {
        if (changes?.ngxForOf?.currentValue) {
            this.iterableItems = changes.ngxForOf.currentValue;
            this.checkStateChange(this.iterableItems);
        }
        if (changes?.ngxForShowMoreTemplate?.currentValue) {
            this.showMoreTemplate = changes.ngxForShowMoreTemplate.currentValue;
            this.iterableItems && this.updateView(this.iterableItems);
        }
        if (changes?.ngxForShowCount?.currentValue) {
            this.showCount = changes.ngxForShowCount.currentValue;
            this.iterableItems && this.updateView(this.iterableItems);
        }
    }
    checkStateChange(iterableItems) {
        if (!this.difference && iterableItems) {
            this.difference = this.iterableDiffers.find(iterableItems).create();
        }
        if (this.difference) {
            const changes = this.difference.diff(iterableItems);
            if (changes) {
                iterableItems && this.updateView(iterableItems);
            }
        }
        else {
            this.updateView([]);
        }
    }
    updateView(iterableItems) {
        this.viewContainer.clear();
        const items = iterableItems ? [...iterableItems] : [];
        if (items.length <= this.showCount) {
            items.map((item, index) => {
                this.viewContainer.createEmbeddedView(this.templateRef, {
                    $implicit: item,
                    index,
                });
            });
        }
        else {
            const remaining = items.length - this.showCount;
            for (let i = 0; i < this.showCount; i++) {
                this.viewContainer.createEmbeddedView(this.templateRef, {
                    $implicit: items[i],
                    index: i,
                });
            }
            if (this.showMoreTemplate) {
                this.viewContainer.createEmbeddedView(this.showMoreTemplate, {
                    remaining,
                    items: iterableItems,
                });
            }
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: NgxForOf, deps: [{ token: i0.IterableDiffers }, { token: i0.ViewContainerRef }, { token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.2", type: NgxForOf, isStandalone: true, selector: "[ngxFor][ngxForOf]", inputs: { ngxForOf: "ngxForOf", ngxForShowMoreTemplate: "ngxForShowMoreTemplate", ngxForShowCount: "ngxForShowCount" }, usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: NgxForOf, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngxFor][ngxForOf]',
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.IterableDiffers }, { type: i0.ViewContainerRef }, { type: i0.TemplateRef }], propDecorators: { ngxForOf: [{
                type: Input
            }], ngxForShowMoreTemplate: [{
                type: Input
            }], ngxForShowCount: [{
                type: Input
            }] } });

/*
 * Public API Surface of ngx-for
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxForOf as NgxFor, NgxForOf };
//# sourceMappingURL=ngx-for.mjs.map
