import { Component, OnInit, ViewChild } from '@angular/core';
import { GameService } from '../game.service';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import ChartDataLabels from 'chartjs-plugin-datalabels';


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
        x: { 
          title: {
            display: true,
            text: 'Player Count'
          }
        }
        , y: {
          min: 0
          , title: {
            display: true
            , text: 'Game Count'
          }
          , ticks: {
            stepSize: 1
          }
        }
      },
      plugins: {
        tooltip: {
          callbacks: {
            // Title defaults to the x-axis value in the labels array in barChartData 
            afterTitle: () => "-player games"

            // Label defaults to the label value in the data object within the datasets array in barChartData 
            // , label: () => "Game Count"
          }
        }
        , legend: {
          display: false,
        },
        datalabels: {
          anchor: 'end',
          align: 'end'
        }
      }
    };
    public barChartType: ChartType = 'bar';
    public barChartPlugins = [
      // DataLabelsPlugin
    ];

    getGameCount = ( playerCount: number ) => {
      return this.gameSvc.gameResults.filter( x => x.playerCount === playerCount ).length;
    };

    public barChartData: ChartData<'bar'> = {
      labels: [ '2', '3', '4', '5', '6', '7', '8' ],
      datasets: [
        { data: [ 
            this.getGameCount(2)
            , this.getGameCount(3)
            , this.getGameCount(4)
            , this.getGameCount(5)
            , this.getGameCount(6)
            , this.getGameCount(7)
            , this.getGameCount(8)
          ]
          , label: 'Game Count'
        }
        // , { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
      ]
    };

    // Bar chart events
    public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
      console.log(event, active);
    }

    public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
      console.log(event, active);
    }



  constructor(public gameSvc: GameService) { }

  ngOnInit(): void {
    console.log(this.gameSvc.gameResults);
    this.myWins = this.gameSvc.gameResults.filter(x => x.gameOutcome === "I won").length;
    if (this.gameSvc.gameResults.length !== 0 ) {
        this.calculateRatio = (this.myWins / this.gameSvc.gameResults.length * 100).toFixed(0) + "%";
      }
  }

  myWins = 0;
  calculateRatio = 'N/A';
  winRatio = 0

}
