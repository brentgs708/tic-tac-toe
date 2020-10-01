import React, { useState } from 'react'

import { Block, Container, Row } from 'styles';
type SYMBOL = 'X' | 'O'
type BLOCK = SYMBOL | '-'
const App = () => {
  const [board, setBoard] = useState<BLOCK[]>([
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
  ])
const [startingTurn, setStartingTurn] = useState<SYMBOL>( 'X') 
const [isXTurn, setIsXTurn] = useState<boolean>(startingTurn === 'X')
const [turnNumber, setTurnNumber] = useState<number>(0)

function handleClick(index: number){
if (board[index] === '-') {
  const newBoard = [...board]
  newBoard[index] = isXTurn ? 'X' : 'O'

  //check which player wins
  if (turnNumber >= 5 ) {
    console.log('check Starting')
    let winner = false 
    if (isXTurn){
      if (
        (newBoard[0] === 'X') && (newBoard[1] === 'X') && (newBoard[2] === 'X') ||
        (newBoard[3] === 'X') && (newBoard[4] === 'X') && (newBoard[5] === 'X') ||
        (newBoard[6] === 'X') && (newBoard[7] === 'X') && (newBoard[8] === 'X') ||
        (newBoard[0] === 'X') && (newBoard[3] === 'X') && (newBoard[6] === 'X') ||
        (newBoard[1] === 'X') && (newBoard[4] === 'X') && (newBoard[7] === 'X') ||
        (newBoard[2] === 'X') && (newBoard[5] === 'X') && (newBoard[8] === 'X') ||
        (newBoard[0] === 'X') && (newBoard[4] === 'X') && (newBoard[8] === 'X') ||
        (newBoard[2] === 'X') && (newBoard[4] === 'X') && (newBoard[6] === 'X')         
        ) {
        alert('X wins!')
        winner = true
        }
    } else {
      if (
        (newBoard[0] === 'O') && (newBoard[1] === 'O') && (newBoard[2] === 'O') ||
        (newBoard[3] === 'O') && (newBoard[4] === 'O') && (newBoard[5] === 'O') ||
        (newBoard[6] === 'O') && (newBoard[7] === 'O') && (newBoard[8] === 'O') ||
        (newBoard[0] === 'O') && (newBoard[3] === 'O') && (newBoard[6] === 'O') ||
        (newBoard[1] === 'O') && (newBoard[4] === 'O') && (newBoard[7] === 'O') ||
        (newBoard[2] === 'O') && (newBoard[5] === 'O') && (newBoard[8] === 'O') ||
        (newBoard[0] === 'O') && (newBoard[4] === 'O') && (newBoard[8] === 'O') ||
        (newBoard[2] === 'O') && (newBoard[4] === 'O') && (newBoard[6] === 'O')         
        ) {
        alert('O wins!')
        winner = true
        }
    }    
    if (!winner && turnNumber === 9) alert('!----Draw----!')
  }


  setTurnNumber(turnNumber + 1)
  setIsXTurn(!isXTurn)
  setBoard(newBoard)
  }
}

function handleCLear() {
  setStartingTurn(startingTurn === 'X' ? 'O' : 'X' )
  setIsXTurn(startingTurn === 'X')
  setBoard([
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
  ])
}

return (
    <Container>
      <p>Players Turn: { isXTurn ? 'X': 'O' }</p>
      <Row>
        <Block onClick={() => handleClick(0)}>{ board[0] !== '-' && board[0] }</Block>
        <Block onClick={() => handleClick(1)}>{ board[1] !== '-' && board[1] }</Block>
        <Block onClick={() => handleClick(2)}>{ board[2] !== '-' && board[2] }</Block>
      </Row>
      <Row>
        <Block onClick={() => handleClick(3)}>{ board[3] !== '-' && board[3] }</Block>
        <Block onClick={() => handleClick(4)}>{ board[4] !== '-' && board[4] }</Block>
        <Block onClick={() => handleClick(5)}>{ board[5] !== '-' && board[5] }</Block>
      </Row>
      <Row>
        <Block onClick={() => handleClick(6)}>{ board[6] !== '-' && board[6] }</Block>
        <Block onClick={() => handleClick(7)}>{ board[7] !== '-' && board[7] }</Block>
        <Block onClick={() => handleClick(8)}>{ board[8] !== '-' && board[8] }</Block>
      </Row>
    <button onClick = { handleCLear }>Clear Board</button>
    </Container>

)

}

export default App;



