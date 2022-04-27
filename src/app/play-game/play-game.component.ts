import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../game.service';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.css']
})
export class PlayGameComponent implements OnInit {

  constructor(
    public gameSvc: GameService
    , public routerSvc: Router
    ) { }

  ngOnInit(): void {
  }

  ginormousPlayed = "3";
  ginormousWonGame = false;
  gameOutcome = "3";

  finishGame = () => {
    this.gameSvc.addNewGameResult(
      {
        gp: this.ginormousPlayed
        , gwg: this.ginormousWonGame
        , go: this.gameOutcome
        , pc: this.gameSvc.playerCount
      }
    );

    this.routerSvc.navigateByUrl("/");
  }


}
