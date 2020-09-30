import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptions: {};
  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {};
    HC_exporting(this.Highcharts);
  }

}
