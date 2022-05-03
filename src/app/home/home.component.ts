import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

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

  constructor(public gameSvc: GameService) { }

  ngOnInit(): void {
    console.log(this.gameSvc.gameResults);
    this.myWins = this.gameSvc.gameResults.filter(x => x.gameOutcome === "I won").length;
  }

  myWins = 0;



}
