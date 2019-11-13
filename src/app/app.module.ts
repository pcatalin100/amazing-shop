import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LeftNavComponent } from './navbar/left-nav/left-nav.component';
import { RightNavComponent } from './navbar/right-nav/right-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LeftNavComponent,
    RightNavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
