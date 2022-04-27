import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../game.service';

@Component({
  selector: 'app-setup-game',
  templateUrl: './setup-game.component.html',
  styleUrls: ['./setup-game.component.css']
})
export class SetupGameComponent implements OnInit {

  constructor(
    public gameSvc: GameService
    , public routerSvc: Router
  ) { }

  ngOnInit(): void {
  }

  playerCount = 2;

  increasePlayerCount = () => {
    if (this.playerCount === 8) {
      return;
    }
    this.playerCount = this.playerCount + 1;
  };

  decreasePlayerCount = () => {
    if (this.playerCount === 2) {
      return;
    }
    this.playerCount = this.playerCount - 1;
  };

  beginGame = () => {
    this.gameSvc.playerCount=this.playerCount
    this.routerSvc.navigateByUrl("/play");
  };

}
