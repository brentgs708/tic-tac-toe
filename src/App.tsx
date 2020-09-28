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

function handleClick(index: number){
if (board[index] === '-') {
  const newBoard = [...board]
  newBoard[index] = isXTurn ? 'X' : 'O'
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


