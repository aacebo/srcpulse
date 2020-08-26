import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'src-navbar-body',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./navbar-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarBodyComponent { }
