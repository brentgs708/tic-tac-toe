import React, { useEffect } from 'react'

import { H1, Button } from 'components'
import { useClearBoard, useMarkBoard, useRoom } from 'hooks'

import { Block, Container, Grid, Row} from 'pages/room/styles'; //'./styles'
import useCountDown from 'hooks/use-countdown';

const Room = () => {
  const { counter, setCounter } = useCountDown(() => {})
  const { clearBoard, isClearing } = useClearBoard()
  const { isMarking, markBoard }  = useMarkBoard()
  const { isFetching, room } = useRoom()

  if (isFetching) return <H1>Loading Room...</H1>
  if (!room) return <h1>Room not found</h1>

  const  { board, isGameDone, message, startingTurn } = room


async function handleClick(index: number){
  if (!isMarking && !board[index] && !isGameDone) {markBoard(index, room!)
    setCounter(10)}
}

async function handleClear() {
  clearBoard(startingTurn)
  setCounter(10)
}

return (
    <Container>
      <H1>Timer: {counter} second{counter === 1 ? '' : 's'}</H1>
      <h3>{message}</h3>
      <Grid marking={isMarking}>        
        <Row>
          <Block onClick={() => handleClick(0)}>{ board[0] }</Block>
          <Block onClick={() => handleClick(1)}>{ board[1] }</Block>
          <Block onClick={() => handleClick(2)}>{ board[2] }</Block>
        </Row>
        <Row>
          <Block onClick={() => handleClick(3)}>{ board[3] }</Block>
          <Block onClick={() => handleClick(4)}>{ board[4] }</Block>
          <Block onClick={() => handleClick(5)}>{ board[5] }</Block>
        </Row>
        <Row>
          <Block onClick={() => handleClick(6)}>{ board[6] }</Block>
          <Block onClick={() => handleClick(7)}>{ board[7] }</Block>
          <Block onClick={() => handleClick(8)}>{ board[8] }</Block>
        </Row>
      </Grid>
      <Button disabled = { isClearing } onClick = { handleClear }>Clear{isClearing ? 'ing' : ''} Board</Button>
    </Container>

)

}

export default Room;



