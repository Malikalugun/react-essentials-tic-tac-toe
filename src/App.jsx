import { useState } from 'react'
import GameBoard from './components/GameBoard.jsx'
import './App.css';
import GameOver from './components/GameOver.jsx';
import Player from './components/Player.jsx'
import Log from './components/Log.jsx';
import {WINNING_COMBINATIONS} from './components/winning-combination.jsx';
// hepler function no state or no other data
const PLAYER = {
  X: 'Player 1',
  O: 'Player 2'
};
const INITIAL_GAME_BOARD = [
  [null,null,null],
  [null,null,null],
  [null,null,null],
]
function dervieActivePlayer(gameTurns){
  let currentPlayer = "X";
  if(gameTurns.length > 0 && gameTurns[0].player === "X"){
    currentPlayer = 'O';

 }
  return currentPlayer;
}
function deriveGameBoard(gameTurns){
  let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])];
  for(const turn of gameTurns){
    const{ square,player } = turn;
    const {row , col } = square;
    gameBoard[row][col] = player;
  }
  return gameBoard;
}
function driveWinner(gameBoard,Players){
  let winner;
  for (const combination of WINNING_COMBINATIONS){
  const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
  const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
  const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];
  if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol){
  winner = Players[firstSquareSymbol];
  }
  
  }
  return winner;
}
function App() {
  const [Players , setPlayers] = useState(PLAYER)


  
  const [gameTurns, setGameTurns] = useState([]);
  // const [hasWinner, setHasWinner] = useState(false);
  // const[activePlayer,setActivePlayer] = useState('X');
  const activePlayer  = dervieActivePlayer(gameTurns);
  // let gameBoard = initialGame;
  const gameBoard = deriveGameBoard(gameTurns);
 const winner = driveWinner(gameBoard,Players);
const hasDraw = gameTurns.length === 9 && !winner;
  function handleSelectSqure(rowIndex , colIndex){
    // setActivePlayer((currentlyActivePlayer) => currentlyActivePlayer ==='X' ? 'O' : 'X');
   
   
    setGameTurns(prevTurns=>{
       // replacing code
    // let currentPlayer = "X";
    // if(prevTurns.length > 0 && prevTurns[0].player === "X"){
    //   currentPlayer = 'O';
    // }
    const currentPlayer = dervieActivePlayer(prevTurns);
      const updateTurns = [
        { square: {
        row:rowIndex, col:colIndex
      },player:currentPlayer},...prevTurns];
      return updateTurns;
    });
  }
  function handRestart(){
    setGameTurns([]);
  }
  function handPlayerNameChange(symbol,newName){
    setPlayers(prevPlayer => {
return{
  ...prevPlayer,
  [symbol] : newName
};
    });
  }
  return (
   <main>
    <div id="game-container">
<ol id="players" className='highlight-player'>
<Player initialName={PLAYER.X} symbol="X" isActive={activePlayer === 'X'}
onChangeName={handPlayerNameChange}
/>
<Player initialName={PLAYER.O} symbol="O" isActive={activePlayer === 'O'}
onChangeName={handPlayerNameChange}/>
</ol>
{/* <GameBoard onSelectSquare={handleSelectSqure} activePlayerSymbol={activePlayer}/> */}
{(winner || hasDraw) && <GameOver winner={winner} OnRestart={handRestart} />}
<GameBoard onSelectSquare={handleSelectSqure} board={gameBoard}/>

    </div>
    <Log turns={gameTurns}/>
   </main>
  )
}

export default App
