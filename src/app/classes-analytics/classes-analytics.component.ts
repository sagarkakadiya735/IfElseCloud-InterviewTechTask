import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-classes-analytics',
  templateUrl: './classes-analytics.component.html',
  styleUrls: ['./classes-analytics.component.css']
})
export class ClassesAnalyticsComponent implements OnInit {
  chart: Chart;
  constructor() { }
  // chart: Chart;

  ngOnInit() {
    this.init();
  }

  addPoint() {
    if (this.chart) {
      this.chart.addPoint(Math.floor(Math.random() * 10));
    } else {
      alert('init chart, first!');
    }
  }

  addSerie() {
    this.chart.addPoint(Math.floor(Math.random() * 10));
    // this.chart.addSeries({
    //   name: 'Line ' + Math.floor(Math.random() * 10),
    //   data: [
    //     Math.floor(Math.random() * 10),
    //     Math.floor(Math.random() * 10),
    //     Math.floor(Math.random() * 10),
    //     Math.floor(Math.random() * 10),
    //     Math.floor(Math.random() * 10),
    //     Math.floor(Math.random() * 10),
    //     Math.floor(Math.random() * 10),
    //     Math.floor(Math.random() * 10),
    //     Math.floor(Math.random() * 10)
    //   ]
    // });
  }

  removePoint() {
    this.chart.removePoint(this.chart.ref.series[0].data.length - 1);
  }

  removeSerie() {
    this.chart.removeSeries(this.chart.ref.series.length - 1);
  }

  init() {
    let chart = new Chart({
      //   chart: {
      //     type: 'areaspline',
      //     zoomType: 'x',
      //     panning: true,
      //     panKey: 'shift'
      //   },
      //   title: {
      //     text: 'Linechart'
      //   },
      //   credits: {
      //     enabled: false
      //   },
      //   series: [{
      //     name: 'Line 1',
      //     data: [1, 2]
      //   }]
      // });
      chart: {
        type: 'area',
        spacingBottom: 0,
        spacingTop: 0,
        spacingLeft: 0,
        spacingRight: 0,
        // width: 200,
        height: 150
      },
      title: {
        text: ''
      },
      legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 150,
        y: 100,
        floating: true,
        borderWidth: 1,
        //               backgroundColor:
        // Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
      },
      xAxis: {
        categories: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
        // plotBands: [{ // visualize the weekend
        //   // from: 4.5,
        //   // to: 6.5,
        //   color: 'rgba(68, 170, 213, .2)'
        // }]
      },
      yAxis: {
        title: {
          text: '',
          color: '#8bdb99',
        }
      },
      tooltip: {
        shared: true,
        valueSuffix: ' units'
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        areaspline: {
          fillOpacity: 0.5
        }
      },
      series: [{
        // name: 'John',
        data: [3, 4, 3.1, 9],
        color: '#d1eef1',
      }]
    });
    chart.addPoint(4);
    this.chart = chart;
    chart.addPoint(5);
    setTimeout(() => {
      chart.addPoint(6);
    }, 2000);

    chart.ref$.subscribe(console.log);
  }

}