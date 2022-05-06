import { Component, OnInit, ViewChild } from '@angular/core';
import { GameService } from '../game.service';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
// import {Chart} from 'chart.js'; // WTF?!
import ChartDataLabels from 'chartjs-plugin-datalabels'; // WTF?!


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

    // Donut chart
    public doughnutChartLabels: string[] = ['Wins', 'Losses', 'No Winner (edge case)'];

    public doughnutChartData: ChartData<'doughnut'> = {
      labels: this.doughnutChartLabels,
      datasets: [
        { data: [ 
          this.gameSvc.gameResults.filter( x => x.gameOutcome === "I won" ).length
          , this.gameSvc.gameResults.filter( x => x.gameOutcome === "I lost" ).length
          , this.gameSvc.gameResults.filter( x => x.gameOutcome === "No winner" ).length
        ] },
      ]
    };

    public doughnutChartType: ChartType = 'doughnut';

    // Bar chart
    @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

    public barChartOptions: ChartConfiguration['options'] = {
      responsive: true,
      // We use these empty structures as placeholders for dynamic theming.
      scales: {
        x: {},
        y: {
          min: 10
        }
      },
      plugins: {
        legend: {
          display: true,
        },
        datalabels: {
          anchor: 'end',
          align: 'end'
        }
      }
    };
    public barChartType: ChartType = 'bar';
    public barChartPlugins = [
      // DataLabelsPlugin  // WTF?!
    ];

    public barChartData: ChartData<'bar'> = {
      labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
      datasets: [
        { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
        { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
      ]
    };

    // Bar chart events
    public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
      console.log(event, active);
    }

    public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
      console.log(event, active);
    }

    public randomize(): void {
      // Only Change 3 values
      this.barChartData.datasets[0].data = [
        Math.round(Math.random() * 100),
        59,
        80,
        Math.round(Math.random() * 100),
        56,
        Math.round(Math.random() * 100),
        40 ];

      this.chart?.update();
    }





  constructor(public gameSvc: GameService) { }

  ngOnInit(): void {
    console.log(this.gameSvc.gameResults);
    this.myWins = this.gameSvc.gameResults.filter(x => x.gameOutcome === "I won").length;
  }

  myWins = 0;



}
