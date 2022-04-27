import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  gameResults: any[] = [];

  addNewGameResult = (newGameResult: any) => {
    this.gameResults = [
      ...this.gameResults
      , newGameResult
    ];
  }

  playerCount = 0;
}
