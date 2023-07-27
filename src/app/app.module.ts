import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PrimengModule } from 'src/shared/primeng.module';
import { NotificationsCenterComponent } from './notifications-center/notifications-center.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AllNotificationComponent } from './notifications-center/components/all-notification/all-notification.component';
import { ViewNotificationComponent } from './notifications-center/components/view-notification/view-notification.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotificationsCenterComponent,
    AllNotificationComponent,
    ViewNotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimengModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
