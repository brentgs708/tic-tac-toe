import React, { useState } from 'react'

import { checkBoard } from 'helpers'
import { Block, Container, Row } from 'styles';
export type SYMBOL = 'X' | 'O'
export type BLOCK = SYMBOL | '-'
const Room = () => {
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
const [turnNumber, setTurnNumber] = useState<number>(1)
const [message, setMessage] = useState<string>( `${startingTurn.toUpperCase()}'s Turn` )
const [gameDone, setGameDone] = useState<boolean>(false)

function handleClick(index: number){
if (board[index] === '-' && (!gameDone === true)) {
  const newBoard = [...board]
  newBoard[index] = isXTurn ? 'X' : 'O'

  //check if game is done
  const outcome = checkBoard({ newBoard, isXTurn, turnNumber })

  switch (outcome) {

    case 'DRAW':
      setMessage('Draw, clear board and play again!!!!');
      setGameDone(true)
      break;

    case 'OWIN':
      setMessage('O WINS!!!');
      setGameDone(true)
      break;


    case 'XWIN':
      setMessage('X WINS!!!');
      setGameDone(true)
      break;    

    case 'NONE':
    default:
      setMessage(`${isXTurn ? 'O' : 'X'}'s Turn`)
  }

  
  setTurnNumber(turnNumber + 1)
  setIsXTurn(!isXTurn)
  setBoard(newBoard)
  }
}

function handleClear() {
  setStartingTurn(isXTurn === true ? 'X' : 'O' )
  setIsXTurn(isXTurn === true)
  setMessage(`${isXTurn ? 'X' : 'O'}'s Turn`)
  setTurnNumber(1)
  setGameDone(false)
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
      <h3>{message}</h3>
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
    <button onClick = { handleClear }>Clear Board</button>
    </Container>

)

}

export default Room;



