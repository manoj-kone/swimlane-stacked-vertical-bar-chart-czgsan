import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import * as graphData from './graphData.json';
import { getData, categories } from './data';
import { prepareData } from './data2';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Activities';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Number';
  animations: boolean = true;
  colors = [
    '#e6194B',
    '#f58231',
    '#ffe119',
    '#bfef45',
    '#3cb44b',
    '#42d4f4',
    '#4363d8',
    '#911eb4',
    '#f032e6',
    '#a9a9a9',
    '#800000',
  ];
  // barCustomColors = categories.map((ctg, i) => ({
  //   name: ctg,
  //   value: this.colors[i],
  // }));
  totalData = prepareData(graphData); //getData(400);
  multi = [];
  view = [];

  // barCustomColors = [
  //   { name: '2010', value: '#C7B42C' },
  //   { name: '2011', value: '#5AA454' },
  // ];

  constructor() {
    this.setRange('1 M');
  }
  setRange(selected) {
    let days;
    let xAxis = 1400;
    switch (selected) {
      case 'D':
        days = 1;
        break;
      case 'W':
        days = 7;
        xAxis = 700;
        break;
      case '1 M':
        days = 31;
        xAxis = 1400;
        break;
      case '6 M':
        days = 183;
        xAxis = 2600;
        break;
      case '1 Y':
        days = 364;
        xAxis = 5200;
        break;
      case 'All':
        days = undefined;
        xAxis = 5400;
        break;
      default:
        days = 31;
        xAxis = 2600;
    }
    this.multi = this.totalData; //.slice(0, days);
    console.log('this.multi', this.multi);
    this.view = [xAxis, 400];
  }
  getFlag(d) {
    console.log('d', d);
  }
  onSelect(event) {
    alert(event);
  }
}
