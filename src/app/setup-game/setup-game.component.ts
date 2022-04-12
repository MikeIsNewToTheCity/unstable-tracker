import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setup-game',
  templateUrl: './setup-game.component.html',
  styleUrls: ['./setup-game.component.css']
})
export class SetupGameComponent implements OnInit {

  constructor() { }

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

}
