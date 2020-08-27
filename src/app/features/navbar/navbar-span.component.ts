import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'src-navbar-span-start, src-navbar-span-end',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./navbar-span.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarSpanComponent { }
