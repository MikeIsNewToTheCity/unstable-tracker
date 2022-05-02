import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
// import { ChartType } from 'chart.js';
// import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

    // Donut chart
    // public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    // public doughnutChartData: MultiDataSet = [
    //   [350, 450, 100],
    //   [50, 150, 120],
    //   [250, 130, 70],
    // ];
    // public doughnutChartType: ChartType = 'doughnut';

  constructor(public gameSvc: GameService) { }

  ngOnInit(): void {
    console.log(this.gameSvc.gameResults);
    this.myWins = this.gameSvc.gameResults.filter(x => x.go === "1").length;
  }

  myWins = 0;



}
