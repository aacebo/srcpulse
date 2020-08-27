import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NavbarComponent } from './navbar.component';
import { NavbarBodyComponent } from './navbar-body.component';
import { NavbarHeaderComponent } from './navbar-header.component';
import { NavbarSpanComponent } from './navbar-span.component';

const declarations = [
  NavbarComponent,
  NavbarBodyComponent,
  NavbarHeaderComponent,
  NavbarSpanComponent,
];

@NgModule({
  declarations,
  exports: declarations,
  imports: [CommonModule, MatToolbarModule],
})
export class NavbarModule { }
