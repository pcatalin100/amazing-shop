import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { RightContentComponent } from './body/right-content/right-content.component';
import { LeftContentComponent } from './body/left-content/left-content.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './body/right-content/product/product.component';
import { ProductModalComponent, NgbdModalContent } from './body/right-content/product-modal/product-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StarComponent } from './body/right-content/star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    RightContentComponent,
    LeftContentComponent,
    ProductComponent,
    ProductModalComponent,
    NgbdModalContent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NgbdModalContent]
})
export class AppModule { }
