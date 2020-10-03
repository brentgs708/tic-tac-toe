import React from 'react'

import { Block, Container, Row } from 'styles';
import { useClearBoard, useMarkBoard, useRoom } from 'hooks'

export type SYMBOL = 'X' | 'O'
export type BLOCK = SYMBOL | '-'


const Room = () => {
  const { clearBoard, isClearing } = useClearBoard()
  const { isMarking, markBoard }  = useMarkBoard()
  const { isFetching, room } = useRoom()

  if (isFetching) return <h1>Loading Page...</h1>
  if (!room) return <h1>Room not found</h1>

  const  { board, isGameDone, message, startingTurn } = room


function handleClick(index: number){
  if (!isMarking && !board[index] && !isGameDone) markBoard(index, room!)
}

function handleClear() {
  clearBoard(startingTurn)
}

return (
    <Container>
      <h3>{message}</h3>
      <Row>
        <Block onClick={() => handleClick(0)}>{ isMarking && !board[0] ? '-' : board[0] }</Block>
        <Block onClick={() => handleClick(1)}>{ isMarking && !board[1] ? '-' : board[1] }</Block>
        <Block onClick={() => handleClick(2)}>{ isMarking && !board[2] ? '-' : board[2] }</Block>
      </Row>
      <Row>
        <Block onClick={() => handleClick(3)}>{ isMarking && !board[3] ? '-' : board[3] }</Block>
        <Block onClick={() => handleClick(4)}>{ isMarking && !board[4] ? '-' : board[4] }</Block>
        <Block onClick={() => handleClick(5)}>{ isMarking && !board[5] ? '-' : board[5] }</Block>
      </Row>
      <Row>
        <Block onClick={() => handleClick(6)}>{ isMarking && !board[6] ? '-' : board[6] }</Block>
        <Block onClick={() => handleClick(7)}>{ isMarking && !board[7] ? '-' : board[7] }</Block>
        <Block onClick={() => handleClick(8)}>{ isMarking && !board[8] ? '-' : board[8] }</Block>
      </Row>
    <button disabled = { isClearing } onClick = { handleClear }>Clear{isClearing ? 'ing' : ''} Board</button>
    </Container>

)

}

export default Room;



