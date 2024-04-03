import { IterableDiffers, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
type TIterable<T> = Iterable<T> | null | undefined;
interface IListData<T> {
    $implicit: T;
    index: number;
}
declare class NgxForOf<T> {
    private iterableDiffers;
    private viewContainer;
    private templateRef;
    private difference;
    private iterableItems;
    private showMoreTemplate?;
    private showCount;
    ngxForOf: TIterable<T>;
    ngxForShowMoreTemplate?: TemplateRef<IListData<T>>;
    ngxForShowCount: number;
    constructor(iterableDiffers: IterableDiffers, viewContainer: ViewContainerRef, templateRef: TemplateRef<IListData<T>>);
    ngOnChanges(changes: SimpleChanges): void;
    checkStateChange(iterableItems: TIterable<T>): void;
    updateView(iterableItems: Iterable<T>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxForOf<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NgxForOf<any>, "[ngxFor][ngxForOf]", never, { "ngxForOf": { "alias": "ngxForOf"; "required": false; }; "ngxForShowMoreTemplate": { "alias": "ngxForShowMoreTemplate"; "required": false; }; "ngxForShowCount": { "alias": "ngxForShowCount"; "required": false; }; }, {}, never, never, true, never>;
}
export { NgxForOf as NgxFor };
export { NgxForOf };
