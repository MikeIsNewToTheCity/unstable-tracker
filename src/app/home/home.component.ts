import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public gameSvc: GameService) { }

  ngOnInit(): void {
    console.log(this.gameSvc.gameResults);
    this.myWins=this.gameSvc.gameResults.filter(x => x.go === "1").length;
  }

  myWins = 0;

}
