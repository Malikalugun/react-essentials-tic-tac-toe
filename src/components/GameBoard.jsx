import { useState } from "react";
// const initialGame = [
//     [null,null,null],
//     [null,null,null],
//     [null,null,null],
// ]
// export default function GameBoard({onSelectSquare,turns}){
  export default function GameBoard({onSelectSquare,board}){
  // let gameBoard = initialGame;
  // for(const turn of turns){
  //   const{ square,player } = turn;
  //   const {row , col } = square;
  //   gameBoard[row][col] = player;
  // }
// export default function GameBoard({onSelectSquare,activePlayerSymbol}){
//    const[gameBoard,setGameBoard] = useState(initialGame);
//    function handleSeleteSquare(rowIndex,colIndex,){
//     setGameBoard((prevGameBoard)=> {
//         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
//         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
// return updatedBoard;
//     });
//     onSelectSquare();
//    }
    return (
    <ol id="game-board">
      {board.map((row,rowIndex) => <li key={rowIndex}>
      {/* {gameBoard.map((row,rowIndex) => <li key={rowIndex}> */}
        <ol>
            {/* {row.map((playerSymbol,colIndex) => <li key={colIndex}><button onClick={() => handleSeleteSquare(rowIndex,colIndex)}>{playerSymbol}</button></li>)} */}
            {row.map((playerSymbol,colIndex) => <li key={colIndex}>
              <button onClick={()=> onSelectSquare(rowIndex,colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
              </li>)}
        </ol>
      </li>)}
    </ol>
    );
}