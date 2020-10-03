//import { BLOCK } from 'pages/room'
import { SYMBOL } from 'typings'
import checkWin from './check-win'

interface Input {
  newBoard: any[]
  playerTurn: SYMBOL
  turnNumber: number  
}

type checkBoardOutput = 'XWIN' | 'OWIN' | 'DRAW' | 'NONE'


export default function checkBoard({ 
  playerTurn, 
  newBoard, 
  turnNumber, 
}: Input): checkBoardOutput {
    
  if (turnNumber >= 5 ) {

    if (playerTurn === 'X' && checkWin(newBoard, 'X')) return 'XWIN'
    if (playerTurn === 'O' && checkWin(newBoard, 'O')) return 'OWIN'
    if (turnNumber === 9) return 'DRAW'

  }

   return 'NONE'
}