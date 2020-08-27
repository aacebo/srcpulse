import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'src-navbar',
  template: `
    <ng-content select="src-navbar-header"></ng-content>
    <ng-content select="src-navbar-body"></ng-content>
  `,
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent { }
