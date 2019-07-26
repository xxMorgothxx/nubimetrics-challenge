import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

// Formato argentino
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es-AR';
registerLocaleData(localeEs, 'es-AR');

// External modules
import { ToastrModule } from "ngx-toastr";
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {GoTopButtonModule} from 'ng2-go-top-button';

// Own modules
import { CoreModule } from '@core-nubimetrics/core.module';
import { ProductsNbmModule } from '@products-nbm-nubimetrics/products-nbm.module';

// Components
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { ProductModalComponent } from '@products-nbm-nubimetrics/components/modals/product-modal/product-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    GoTopButtonModule,
    NgbModule,
    LoadingBarHttpClientModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-top-right',
      preventDuplicates: false
    }),
    CoreModule,
    ProductsNbmModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-AR' }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ProductModalComponent
  ]
})
export class AppModule { }
