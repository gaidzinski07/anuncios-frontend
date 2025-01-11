import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { LoginModule } from './modules/login/login.module';
import { PageElemetsModule } from "./modules/page-elemets/page-elemets.module";
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    PageElemetsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
