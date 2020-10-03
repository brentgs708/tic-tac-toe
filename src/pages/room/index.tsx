import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import { Block, Container, Row } from 'styles';
import { useMarkBoard, useRoom } from 'hooks'

export type SYMBOL = 'X' | 'O'
export type BLOCK = SYMBOL | '-'


const Room = () => {

  const {id}= useParams<any>()
  const { isMarking, markBoard }  = useMarkBoard(id)
  const { isFetching, room } = useRoom(id)

  if (isFetching) return <h1>Loading Page...</h1>
  if (!room) return <h1>Room not found</h1>

  const  { board, isGameDone, message } = room


function handleClick(index: number){
  if (!isMarking && !board[index] && !isGameDone) markBoard(index, room!)
}

function handleClear() {
  /* setStartingTurn(isXTurn === true ? 'X' : 'O' )
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
  ]) */
}

return (
    <Container>
      <h3>{message}</h3>
      <Row>
        <Block onClick={() => handleClick(0)}>{ isMarking ? '-' : board[0] }</Block>
        <Block onClick={() => handleClick(1)}>{ isMarking ? '-' : board[1] }</Block>
        <Block onClick={() => handleClick(2)}>{ isMarking ? '-' : board[2] }</Block>
      </Row>
      <Row>
        <Block onClick={() => handleClick(3)}>{ isMarking ? '-' : board[3] }</Block>
        <Block onClick={() => handleClick(4)}>{ isMarking ? '-' : board[4] }</Block>
        <Block onClick={() => handleClick(5)}>{ isMarking ? '-' : board[5] }</Block>
      </Row>
      <Row>
        <Block onClick={() => handleClick(6)}>{ isMarking ? '-' : board[6] }</Block>
        <Block onClick={() => handleClick(7)}>{ isMarking ? '-' : board[7] }</Block>
        <Block onClick={() => handleClick(8)}>{ isMarking ? '-' : board[8] }</Block>
      </Row>
    <button onClick = { handleClear }>Clear Board</button>
    </Container>

)

}

export default Room;



