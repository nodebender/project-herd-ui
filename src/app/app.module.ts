import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SeverityComponent } from "./components/instance-statistics/severity/severity.component";
import { InstanceStatusComponent } from "./components/instance-status/instance-status.component";
import { InstanceUptimeComponent } from "./components/instance-uptime/instance-uptime.component";
import { InstanceStatisticsComponent } from "./components/instance-statistics/instance-statistics.component";
import { InstanceMetricsComponent } from "./components/instance-metrics/instance-metrics.component";
import { CheckStateComponent } from "./components/check-state/check-state.component";

import { Timer } from "./pipes/human-date.pipe";
import { CommentComponent } from "./components/comment/comment.component";
import { CheckViewComponent } from "./views/check-view/check-view.component";
import { CheckDetailsComponent } from "./views/check-details/check-details.component";

import { StoreService } from "./services/store.service"

@NgModule({
  declarations: [
    AppComponent,
    SeverityComponent,
    InstanceStatusComponent,
    InstanceUptimeComponent,
    InstanceStatisticsComponent,
    InstanceMetricsComponent,
    CheckStateComponent,
	Timer,
	CheckDetailsComponent,
	CommentComponent,
	CheckViewComponent,
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
    AppRoutingModule
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
