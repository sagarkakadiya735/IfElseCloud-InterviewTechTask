import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';


@Component({
  selector: 'app-count-section',
  templateUrl: './count-section.component.html',
  styleUrls: ['./count-section.component.css']
})
export class CountSectionComponent implements OnInit {
  chart: Chart;
  constructor() { }
  charts: Chart;
  chart3: Chart;
  chart4: Chart;

  ngOnInit() {
    this.init();
  }

  addPoint() {
    if (this.chart) {
      this.chart.addPoint(Math.floor(Math.random() * 10));
    } else {
      alert('init chart, first!');
    }
    if (this.charts) {
      this.charts.addPoint(Math.floor(Math.random() * 10));
    } else {
      alert('init chart, first!');
    }
    if (this.chart3) {
      this.chart3.addPoint(Math.floor(Math.random() * 10));
    } else {
      alert('init chart, first!');
    }
    if (this.chart4) {
      this.chart4.addPoint(Math.floor(Math.random() * 10));
    } else {
      alert('init chart, first!');
    }
  }

  init() {
    let chart = new Chart({
      chart: {
        type: 'areaspline',
        spacingBottom: -40,
        spacingTop: 0,
        spacingLeft: -40,
        spacingRight: 0,
        // width: 200,
        height: 150
      },
      title: {
        text: ''
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Line 1',
        data: [1, 2, 3, 5, 2, 4, 1, 3, 1, 5],
        color: '#ffc9c2',
      }]
    });
    chart.addPoint(4);
    this.chart = chart;
    chart.addPoint(5);
    setTimeout(() => {
      chart.addPoint(6);
    }, 2000);

    chart.ref$.subscribe(console.log);

    // second chart
    let charts = new Chart({
      chart: {
        type: 'areaspline',
        spacingBottom: -40,
        spacingTop: 0,
        spacingLeft: -40,
        spacingRight: 0,
        // width: 200,
        height: 150
      },
      title: {
        text: ''
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Line 1',
        data: [1, 2, 3, 5, 2, 4, 1, 3, 1, 5],
        color: '#ffeacd',
      }]
    });
    charts.addPoint(4);
    this.charts = charts;
    charts.addPoint(5);
    setTimeout(() => {
      charts.addPoint(6);
    }, 2000);

    charts.ref$.subscribe(console.log);


    // second chart
    let chart3 = new Chart({
      chart: {
        type: 'areaspline',
        spacingBottom: -40,
        spacingTop: 0,
        spacingLeft: -40,
        spacingRight: 0,
        // width: 200,
        height: 150
      },
      title: {
        text: ''
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Line 1',
        data: [1, 2, 3, 5, 2, 4, 1, 3, 1, 5],
        color: '#cef0d4',
      }]
    });
    chart3.addPoint(4);
    this.chart3 = chart3;
    chart3.addPoint(5);
    setTimeout(() => {
      chart3.addPoint(6);
    }, 2000);

    chart3.ref$.subscribe(console.log);

    // second chart
    let chart4 = new Chart({
      chart: {
        type: 'areaspline',
        spacingBottom: -40,
        spacingTop: 0,
        spacingLeft: -40,
        spacingRight: 0,
        // width: 200,
        height: 150
      },
      title: {
        text: ''
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Line 1',
        data: [1, 2, 3, 5, 2, 4, 1, 3, 1, 5],
        color: '#bae9f8',
      }]
    });
    chart4.addPoint(4);
    this.chart4 = chart4;
    chart4.addPoint(5);
    setTimeout(() => {
      chart4.addPoint(6);
    }, 2000);

    chart4.ref$.subscribe(console.log);
  }
}


