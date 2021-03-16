import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { CountSectionComponent } from './count-section/count-section.component';
import { ClassesAnalyticsComponent } from './classes-analytics/classes-analytics.component';
import { MarketingAnalyticsComponent } from './marketing-analytics/marketing-analytics.component';
import { ChartModule } from 'angular-highcharts';
import {
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    CountSectionComponent,
    ClassesAnalyticsComponent,
    MarketingAnalyticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
