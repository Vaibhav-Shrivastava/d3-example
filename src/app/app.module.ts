import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { D3VisualizationComponent } from './D3/d3-visualization/d3-visualization.component';
import { LineChartComponent } from './D3/charts/line-chart/line-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    D3VisualizationComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
