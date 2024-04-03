# NgxFor

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.0.

This is a custom directive like the ngFor but with a few differences.

## Installation

```bash
npm install ngx-for
```

## Usage

app.component.html
```bash
<div *ngxFor="let user of users; showMoreTemplate: showMore; showCount: 4">
  <span>
    {{user.name}}
  </span>
</div>
<ng-template #showMore let-remaining="remaining">+{{remaining}}</ng-template>
```