import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {


  Highcharts = Highcharts;
  chartOptions = {}
  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Прибыль компании по направлениям'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
        }
      },
      exporting: {
        enabled: true
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
          name: 'Модернизация устаревших систем',
          y: 61.41,
          sliced: true,
          selected: true
        }, {
          name: 'Облачные',
          y: 11.84
        }, {
          name: 'Мобильная',
          y: 10.85
        }, {
          name: 'API-разработка',
          y: 4.67
        }, {
          name: 'Автоматизация БП',
          y: 4.18
        }, {
          name: 'Кибербезопасность',
          y: 1.64
        }, {
          name: 'AI/ML',
          y: 1.6
        }, {
          name: 'IoT',
          y: 1.2
        }, {
          name: 'Custom',
          y: 2.61
        }]
      }]
    };

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    },300);
  }

}
