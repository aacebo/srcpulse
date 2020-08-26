import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatherModule } from './feather.module';

import { NavbarModule } from './features/navbar';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'srcpulse' }),
    AppRoutingModule,
    FeatherModule,
    NavbarModule,
  ],
})
export class AppModule { }
