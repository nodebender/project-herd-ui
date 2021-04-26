import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './views/demo/demo.component';
import { StatSeverityComponent } from './components/stat-severity/stat-severity.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    StatSeverityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
