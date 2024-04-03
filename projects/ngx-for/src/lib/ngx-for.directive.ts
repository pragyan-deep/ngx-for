import { Directive, Input, IterableDiffer, IterableDiffers, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

type TIterable<T> = Iterable<T> | null | undefined;
interface IListData<T> {
  $implicit: T;
  index: number;
}
interface ICountData<T> {
  remaining: number;
  items: Iterable<T>;
}

@Directive({
  selector: '[ngxFor][ngxForOf]',
  standalone: true
})
class NgxForOf<T> {

  private difference: IterableDiffer<T> | null = null;
  private iterableItems: TIterable<T>;
  private showMoreTemplate?: TemplateRef<ICountData<T>>;
  private showCount = 2;

  @Input() ngxForOf: TIterable<T>;
  @Input() ngxForShowMoreTemplate?: TemplateRef<IListData<T>>;
  @Input() ngxForShowCount: number = 2;

  constructor(
    private iterableDiffers: IterableDiffers,
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<IListData<T>>
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
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

  checkStateChange(iterableItems: TIterable<T>) {
    if (!this.difference && iterableItems) {
      this.difference = this.iterableDiffers.find(iterableItems).create();
    }

    if (this.difference) {
      const changes = this.difference.diff(iterableItems);
      if (changes) {
        iterableItems && this.updateView(iterableItems);
      }
    } else {
      this.updateView([]);
    }
  }

  updateView(iterableItems: Iterable<T>) {
    this.viewContainer.clear();
    const items = iterableItems ? [...iterableItems] : [];
    if (items.length <= this.showCount) {
      items.map((item, index) => {
        this.viewContainer.createEmbeddedView(this.templateRef, {
          $implicit: item,
          index,
        });
      });
    } else {
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

}

export { NgxForOf as NgxFor }
export { NgxForOf }

