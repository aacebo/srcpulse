import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NavbarComponent } from './navbar.component';
import { NavbarBodyComponent } from './navbar-body.component';

const declarations = [
  NavbarComponent,
  NavbarBodyComponent,
];

@NgModule({
  declarations,
  exports: declarations,
  imports: [CommonModule, MatToolbarModule],
})
export class NavbarModule { }
