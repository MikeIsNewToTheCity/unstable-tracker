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

  ginormousPlayed = "No";
  ginormousWonGame = false;
  gameOutcome = "No winner";

  finishGame = () => {
    this.gameSvc.addNewGameResult(
      {
        ginormousUnicornPlayed: this.ginormousPlayed
        , ginormousUnicornWonTheGame: this.ginormousWonGame
        , gameOutcome: this.gameOutcome
        , playerCount: this.gameSvc.playerCount
      } // old property names: gp, gwg, go, pc
    );

    this.routerSvc.navigateByUrl("/");
  }


}
