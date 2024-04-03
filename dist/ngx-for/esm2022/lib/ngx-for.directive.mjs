import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
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
export { NgxForOf as NgxFor };
export { NgxForOf };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWZvci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZm9yL3NyYy9saWIvbmd4LWZvci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWlGLE1BQU0sZUFBZSxDQUFDOztBQVloSSxNQUlNLFFBQVE7SUFXWixZQUNVLGVBQWdDLEVBQ2hDLGFBQStCLEVBQy9CLFdBQXNDO1FBRnRDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFDL0IsZ0JBQVcsR0FBWCxXQUFXLENBQTJCO1FBWnhDLGVBQVUsR0FBNkIsSUFBSSxDQUFDO1FBRzVDLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFJYixvQkFBZSxHQUFXLENBQUMsQ0FBQztJQU1sQyxDQUFDO0lBRUosV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsQ0FBQztZQUNwQyxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDO1lBQ25ELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDNUMsQ0FBQztRQUNELElBQUksT0FBTyxFQUFFLHNCQUFzQixFQUFFLFlBQVksRUFBRSxDQUFDO1lBQ2xELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsWUFBWSxDQUFDO1lBQ3BFLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDNUQsQ0FBQztRQUNELElBQUksT0FBTyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsQ0FBQztZQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDO1lBQ3RELElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDNUQsQ0FBQztJQUNILENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxhQUEyQjtRQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxhQUFhLEVBQUUsQ0FBQztZQUN0QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3RFLENBQUM7UUFFRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNwQixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNwRCxJQUFJLE9BQU8sRUFBRSxDQUFDO2dCQUNaLGFBQWEsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ2xELENBQUM7UUFDSCxDQUFDO2FBQU0sQ0FBQztZQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdEIsQ0FBQztJQUNILENBQUM7SUFFRCxVQUFVLENBQUMsYUFBMEI7UUFDbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMzQixNQUFNLEtBQUssR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3RELElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDbkMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO29CQUN0RCxTQUFTLEVBQUUsSUFBSTtvQkFDZixLQUFLO2lCQUNOLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQzthQUFNLENBQUM7WUFDTixNQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDaEQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDeEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO29CQUN0RCxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDbkIsS0FBSyxFQUFFLENBQUM7aUJBQ1QsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztZQUNELElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO29CQUMzRCxTQUFTO29CQUNULEtBQUssRUFBRSxhQUFhO2lCQUNyQixDQUFDLENBQUM7WUFDTCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7OEdBeEVHLFFBQVE7a0dBQVIsUUFBUTs7MkZBQVIsUUFBUTtrQkFKYixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjs2SUFRVSxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLHNCQUFzQjtzQkFBOUIsS0FBSztnQkFDRyxlQUFlO3NCQUF2QixLQUFLOztBQW1FUixPQUFPLEVBQUUsUUFBUSxJQUFJLE1BQU0sRUFBRSxDQUFBO0FBQzdCLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIEl0ZXJhYmxlRGlmZmVyLCBJdGVyYWJsZURpZmZlcnMsIFNpbXBsZUNoYW5nZXMsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG50eXBlIFRJdGVyYWJsZTxUPiA9IEl0ZXJhYmxlPFQ+IHwgbnVsbCB8IHVuZGVmaW5lZDtcclxuaW50ZXJmYWNlIElMaXN0RGF0YTxUPiB7XHJcbiAgJGltcGxpY2l0OiBUO1xyXG4gIGluZGV4OiBudW1iZXI7XHJcbn1cclxuaW50ZXJmYWNlIElDb3VudERhdGE8VD4ge1xyXG4gIHJlbWFpbmluZzogbnVtYmVyO1xyXG4gIGl0ZW1zOiBJdGVyYWJsZTxUPjtcclxufVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbmd4Rm9yXVtuZ3hGb3JPZl0nLFxyXG4gIHN0YW5kYWxvbmU6IHRydWVcclxufSlcclxuY2xhc3MgTmd4Rm9yT2Y8VD4ge1xyXG5cclxuICBwcml2YXRlIGRpZmZlcmVuY2U6IEl0ZXJhYmxlRGlmZmVyPFQ+IHwgbnVsbCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBpdGVyYWJsZUl0ZW1zOiBUSXRlcmFibGU8VD47XHJcbiAgcHJpdmF0ZSBzaG93TW9yZVRlbXBsYXRlPzogVGVtcGxhdGVSZWY8SUNvdW50RGF0YTxUPj47XHJcbiAgcHJpdmF0ZSBzaG93Q291bnQgPSAyO1xyXG5cclxuICBASW5wdXQoKSBuZ3hGb3JPZjogVEl0ZXJhYmxlPFQ+O1xyXG4gIEBJbnB1dCgpIG5neEZvclNob3dNb3JlVGVtcGxhdGU/OiBUZW1wbGF0ZVJlZjxJTGlzdERhdGE8VD4+O1xyXG4gIEBJbnB1dCgpIG5neEZvclNob3dDb3VudDogbnVtYmVyID0gMjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGl0ZXJhYmxlRGlmZmVyczogSXRlcmFibGVEaWZmZXJzLFxyXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8SUxpc3REYXRhPFQ+PlxyXG4gICkge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXM/Lm5neEZvck9mPy5jdXJyZW50VmFsdWUpIHtcclxuICAgICAgdGhpcy5pdGVyYWJsZUl0ZW1zID0gY2hhbmdlcy5uZ3hGb3JPZi5jdXJyZW50VmFsdWU7XHJcbiAgICAgIHRoaXMuY2hlY2tTdGF0ZUNoYW5nZSh0aGlzLml0ZXJhYmxlSXRlbXMpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXM/Lm5neEZvclNob3dNb3JlVGVtcGxhdGU/LmN1cnJlbnRWYWx1ZSkge1xyXG4gICAgICB0aGlzLnNob3dNb3JlVGVtcGxhdGUgPSBjaGFuZ2VzLm5neEZvclNob3dNb3JlVGVtcGxhdGUuY3VycmVudFZhbHVlO1xyXG4gICAgICB0aGlzLml0ZXJhYmxlSXRlbXMgJiYgdGhpcy51cGRhdGVWaWV3KHRoaXMuaXRlcmFibGVJdGVtcyk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcz8ubmd4Rm9yU2hvd0NvdW50Py5jdXJyZW50VmFsdWUpIHtcclxuICAgICAgdGhpcy5zaG93Q291bnQgPSBjaGFuZ2VzLm5neEZvclNob3dDb3VudC5jdXJyZW50VmFsdWU7XHJcbiAgICAgIHRoaXMuaXRlcmFibGVJdGVtcyAmJiB0aGlzLnVwZGF0ZVZpZXcodGhpcy5pdGVyYWJsZUl0ZW1zKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoZWNrU3RhdGVDaGFuZ2UoaXRlcmFibGVJdGVtczogVEl0ZXJhYmxlPFQ+KSB7XHJcbiAgICBpZiAoIXRoaXMuZGlmZmVyZW5jZSAmJiBpdGVyYWJsZUl0ZW1zKSB7XHJcbiAgICAgIHRoaXMuZGlmZmVyZW5jZSA9IHRoaXMuaXRlcmFibGVEaWZmZXJzLmZpbmQoaXRlcmFibGVJdGVtcykuY3JlYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuZGlmZmVyZW5jZSkge1xyXG4gICAgICBjb25zdCBjaGFuZ2VzID0gdGhpcy5kaWZmZXJlbmNlLmRpZmYoaXRlcmFibGVJdGVtcyk7XHJcbiAgICAgIGlmIChjaGFuZ2VzKSB7XHJcbiAgICAgICAgaXRlcmFibGVJdGVtcyAmJiB0aGlzLnVwZGF0ZVZpZXcoaXRlcmFibGVJdGVtcyk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudXBkYXRlVmlldyhbXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVWaWV3KGl0ZXJhYmxlSXRlbXM6IEl0ZXJhYmxlPFQ+KSB7XHJcbiAgICB0aGlzLnZpZXdDb250YWluZXIuY2xlYXIoKTtcclxuICAgIGNvbnN0IGl0ZW1zID0gaXRlcmFibGVJdGVtcyA/IFsuLi5pdGVyYWJsZUl0ZW1zXSA6IFtdO1xyXG4gICAgaWYgKGl0ZW1zLmxlbmd0aCA8PSB0aGlzLnNob3dDb3VudCkge1xyXG4gICAgICBpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgdGhpcy52aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLnRlbXBsYXRlUmVmLCB7XHJcbiAgICAgICAgICAkaW1wbGljaXQ6IGl0ZW0sXHJcbiAgICAgICAgICBpbmRleCxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCByZW1haW5pbmcgPSBpdGVtcy5sZW5ndGggLSB0aGlzLnNob3dDb3VudDtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNob3dDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy52aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLnRlbXBsYXRlUmVmLCB7XHJcbiAgICAgICAgICAkaW1wbGljaXQ6IGl0ZW1zW2ldLFxyXG4gICAgICAgICAgaW5kZXg6IGksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuc2hvd01vcmVUZW1wbGF0ZSkge1xyXG4gICAgICAgIHRoaXMudmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy5zaG93TW9yZVRlbXBsYXRlLCB7XHJcbiAgICAgICAgICByZW1haW5pbmcsXHJcbiAgICAgICAgICBpdGVtczogaXRlcmFibGVJdGVtcyxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7IE5neEZvck9mIGFzIE5neEZvciB9XHJcbmV4cG9ydCB7IE5neEZvck9mIH1cclxuXHJcbiJdfQ==