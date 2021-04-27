import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './views/demo/demo.component';
import { SeverityComponent } from './components/instance-statistics/severity/severity.component';
import { InstanceStatusComponent } from './components/instance-status/instance-status.component';
import { InstanceUptimeComponent } from './components/instance-uptime/instance-uptime.component';
import { InstanceStatisticsComponent } from './components/instance-statistics/instance-statistics.component';
import { InstanceMetricsComponent } from './components/instance-metrics/instance-metrics.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    SeverityComponent,
    InstanceStatusComponent,
    InstanceUptimeComponent,
    InstanceStatisticsComponent,
    InstanceMetricsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
