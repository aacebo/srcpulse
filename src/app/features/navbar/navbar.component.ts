import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'src-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent { }