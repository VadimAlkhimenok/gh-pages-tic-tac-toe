import React, { Component } from 'react';
import classes from './App.module.css';
import { Board } from './components/Board/Board';
import { MainPage } from './components/MainPage/MainPage';
import { Winner } from './components/Winner/Winner';
import { Header } from './components/Header/Header';
import { NextPlayer } from './components/NextPlayer/NextPlayer';
import { Title } from './components/UI/Title/Title';
import { Button } from './components/UI/Button/Button';


export default class App extends Component {

  state = {
    mainPage: true,
    player1: 'X',
    player2: 'O',
    nextPlayer: true,
    winsPlayer1: 0,
    winsPlayer2: 0,
    notWins: 0,
    totalGames: 0,
    counter: 0,
    isGameOver: false,
    winner: '',
    data: Array(9).fill(null),
    combinationOfWin: [
      [0, 1, 2],
      [3, 4, 5], 
      [6, 7, 8], 
      [0, 3, 6], 
      [1, 4, 7], 
      [2, 5, 8], 
      [0, 4, 8], 
      [2, 4, 6]
    ]
  } 

  getWinner = (combinations, symbol, idx) => {
    for (let i = 0; i < combinations.length; i++) {
      let indexElement = combinations[i].indexOf(idx);
      if (indexElement !== -1) combinations[i].splice(indexElement, 1, symbol);
      let set = new Set(combinations[i]);
      if (set.size === 1) return Array.from(set).join();
    }
  }
  
  notWins = () => {
    if (this.state.counter === 8) {
      this.setState({ 
        winner: '-',
        isGameOver: true,
        notWins: this.state.notWins + 1,
      })
    };
  }

  handleClickOnCell = idx => {
    let { counter, data, combinationOfWin, isGameOver } = this.state;
    let x, o;

    if (isGameOver) return; // game over

    this.notWins();

    if (counter % 2 === 0) {
      if (data[idx] === 'X' || data[idx] === 'O') return; // click on the same cell
      data.splice(idx, 1, 'X'); // change data game
      x = this.getWinner(combinationOfWin, 'X', idx); // winner X
      if (x === 'X') this.setState({ winner: 'X', isGameOver: true, winsPlayer1: this.state.winsPlayer1 + 1 }); // game over
      this.setState({ counter: this.state.counter + 1, nextPlayer: !this.state.nextPlayer }); // change next player
    }
    else {
      if (data[idx] === 'X' || data[idx] === 'O') return; // click on the same cell
      data.splice(idx, 1, 'O'); // change data game
      o = this.getWinner(combinationOfWin, 'O', idx); // winner O
      if (o === 'O') this.setState({ winner: 'O', isGameOver: true, winsPlayer2: this.state.winsPlayer2 + 1 }); // game over
      this.setState({ counter: this.state.counter + 1, nextPlayer: !this.state.nextPlayer}); // change next player
    }
  }

  handleNewGame = () => {
    this.setState({ 
      totalGames: this.state.totalGames + 1,
      isGameOver: false,
      counter: 0,
      nextPlayer: true,
      data: Array(9).fill(null),
      combinationOfWin: [
        [0, 1, 2],
        [3, 4, 5], 
        [6, 7, 8], 
        [0, 3, 6], 
        [1, 4, 7], 
        [2, 5, 8], 
        [0, 4, 8], 
        [2, 4, 6]
      ]
    })
  }

  handleStartGame = () => {
    this.setState({ mainPage: false });
  }

  handleChange = event => {
    if (event.target.id === 'X')
      this.setState({ player1: event.target.value });
    if (event.target.id === 'O')
      this.setState({ player2: event.target.value });
  }
  
  render() {
     return (
      <div className={classes.App}>
        {
          this.state.mainPage 
          ? <MainPage 
              handleStartGame={this.handleStartGame}
              handleChange={this.handleChange}
            />
          : <>
              <Header 
                player1={this.state.player1} 
                player2={this.state.player2}
                winsPlayer1={this.state.winsPlayer1}
                winsPlayer2={this.state.winsPlayer2}
                totalGames={this.state.totalGames}
                notWins={this.state.notWins}
              />

              <div className={classes.Content}>
                <div className={classes.Game}>
                  <Title title={'Game board'}/>
                  <Board 
                    data={this.state.data}
                    handleClickOnCell={this.handleClickOnCell}
                  />
                </div>

                <div className={classes.Status}> 
                  <h3>Status game:</h3>
                  {/* button new game */}
                  <Button onClick={this.handleNewGame} name={'new game'} className={classes.NewGame}/> 
                  { this.state.nextPlayer ? <NextPlayer player={this.state.player1}/> :<NextPlayer player={this.state.player2}/> }
                  { this.state.isGameOver ? <Winner value={ this.state.winner }/> : null }
                </div>
              </div>
            </>
        }
      </div>
    );
  }
}
