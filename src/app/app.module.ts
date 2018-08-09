import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { LineChartComponent } from './line_chart/line-chart.component';
import { DataService } from './services/data.service';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AngularFontAwesomeModule  
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
