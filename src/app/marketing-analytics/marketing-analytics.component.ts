import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-marketing-analytics',
  templateUrl: './marketing-analytics.component.html',
  styleUrls: ['./marketing-analytics.component.css']
})
export class MarketingAnalyticsComponent implements OnInit {
  chart0: Chart;
  constructor() { }
  chart1: Chart;
  arraydata = [];
  array = [
    {
      "guid": "0b52fbe4-d39b-4de8-9174-b78a56c3ea34",
      "Card1": {
        "icon": "Up",
        "color": "green",
        "name1": "Imperssion",
        "balance1": "3,465.36",
        "percent1": 62
      },
      "Card2": {
        "icon": "Up",
        "color": "green",
        "name2": "Hover",
        "balance2": "3,121.66",
        "percent2": 72
      },
      "Card3": {
        "icon": "Down",
        "color": "red",
        "name3": "Click",
        "balance3": "3,081.01",
        "percent3": 52
      },
      "Card4": {
        "icon": "Up",
        "color": "green",
        "name4": "Hover & Submit",
        "balance4": "2,298.34",
        "percent4": 78
      },
      "Card5": {
        "icon": "Up",
        "color": "green",
        "name5": "Click & Submit",
        "balance5": "2,589.40",
        "percent5": 71
      },
    },
    {
      "guid": "09bfba86-a1b2-4932-8f00-66a59928b4c6",
      "Card1": {
        "icon": "Up",
        "color": "green",
        "name1": "Imperssion",
        "balance1": "2,437.02",
        "percent1": 71
      },
      "Card2": {
        "icon": "Up",
        "color": "green",
        "name2": "Hover",
        "balance2": "3,841.14",
        "percent2": 64
      },
      "Card3": {
        "icon": "Down",
        "color": "red",
        "name3": "Click",
        "balance3": "3,328.80",
        "percent3": 62
      },
      "Card4": {
        "icon": "Up",
        "color": "green",
        "name4": "Hover & Submit",
        "balance4": "3,932.23",
        "percent4": 71
      },
      "Card5": {
        "icon": "Up",
        "color": "green",
        "name5": "Click & Submit",
        "balance5": "1,250.06",
        "percent5": 80
      }
    }
  ];
  objectarray = [];
  ngOnInit() {
    this.init();
    this.init2();
    const data = [];
    const datanew = [];
    this.array.forEach((element, key) => {
      // this.arraydata.push(element);
      Object.keys(element).forEach((ele, index) => {
        var keyName = 'Card' + index;
        if (keyName === ele) {
          if (key === 0) {
            data.push(element['Card' + index]);
          } else {
            datanew.push(element['Card' + index]);
          }
        }
      });
    });
    this.arraydata.push(data);
    this.arraydata.push(datanew);
  }

  addPoint() {
    if (this.chart0) {
      this.chart0.addPoint(Math.floor(Math.random() * 10));
    } else {
      alert('init chart, first!');
    }
    if (this.chart1) {
      this.chart1.addPoint(Math.floor(Math.random() * 10));
    } else {
      alert('init chart, first!');
    }
  }

  addSerie() {
    this.chart0.addPoint(Math.floor(Math.random() * 10));
    this.chart1.addPoint(Math.floor(Math.random() * 10));
  }

  init() {
    let chart0 = new Chart({
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        spacingBottom: 0,
        spacingTop: 0,
        spacingLeft: 0,
        spacingRight: 0,
        width: 80,
        height: 80

      },
      title: {
        text: ''
      },
      plotOptions: {
        pie: {
          shadow: false,
          center: ['50%', '50%']
        }
      },
      tooltip: {
        outside: true
      },
      pane: {
        size: '85%',
        innerSize: '20%',
        endAngle: 270
      },
      xAxis: {
        tickInterval: 1,
        lineWidth: 0,
      },
      yAxis: {
        crosshair: {
          enabled: true,
          color: '#333'
        },
        lineWidth: 0,
        tickInterval: 25,
        reversedStacks: false,
        endOnTick: true,
        showLastLabel: true
      },
      series: [{
        name: '',
        colorByPoint: true,
        data: [{
          name: '',
          y: 40.41,

        }, {
          name: '',
          y: 11.84
        }, {
          name: '',
          y: 10.85
        }, {
          name: '',
          y: 4.67
        }, {
          name: '',
          y: 2.61
        }]
      }],
    });
    chart0.addPoint(4);
    this.chart0 = chart0;
    chart0.addPoint(5);
    setTimeout(() => {
      chart0.addPoint(6);
    }, 2000);

    // chart.ref$.subscribe(console.log);
  }
  init2() {
    let chart1 = new Chart({
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        spacingBottom: 0,
        spacingTop: 0,
        spacingLeft: 0,
        spacingRight: 0,
        width: 80,
        height: 80

      },
      title: {
        text: ''
      },
      plotOptions: {
        pie: {
          shadow: false,
          center: ['50%', '50%']
        }
      },
      tooltip: {
        outside: true
      },
      pane: {
        size: '85%',
        innerSize: '20%',
        endAngle: 270
      },
      xAxis: {
        tickInterval: 1,
        lineWidth: 0,
      },
      yAxis: {
        crosshair: {
          enabled: true,
          color: '#333'
        },
        lineWidth: 0,
        tickInterval: 25,
        reversedStacks: false,
        endOnTick: true,
        showLastLabel: true
      },
      series: [{
        name: '',
        colorByPoint: true,
        data: [{
          name: '',
          y: 40.41,

        }, {
          name: '',
          y: 11.84
        }, {
          name: '',
          y: 10.85
        }, {
          name: '',
          y: 4.67
        }, {
          name: '',
          y: 2.61
        }]
      }],
    });
    chart1.addPoint(4);
    this.chart1 = chart1;
    chart1.addPoint(5);
    setTimeout(() => {
      chart1.addPoint(6);
    }, 2000);

    // chart1.ref$.subscribe(console.log);
  }

  getBalance(item, index) {
    const sum = index + 1;
    return item['balance' + sum];
  }
  getPercent(item, index) {
    // console.log('index', index);

    const sum = index + 1;
    return item['percent' + sum];
  }
  getName(item, index) {
    const sum = index + 1;
    return item['name' + sum];
  }

  getChart(chart, i) {
    // console.log(chart, "hhhhhhhh");
    if (i == 0) {
      return this.chart0;
    }
    else {
      return this.chart1;
    }
  }

}