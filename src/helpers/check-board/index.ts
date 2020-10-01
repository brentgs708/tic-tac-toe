import { BLOCK } from 'App'
import { checkWin } from 'helpers'

interface Input {
  newBoard: BLOCK[]
  isXTurn: boolean
  turnNumber: number  
}

type checkBoardOutput = 'XWIN' | 'OWIN' | 'DRAW' | 'NONE'


export default function checkBoard({ 
  isXTurn, 
  newBoard, 
  turnNumber, 
}: Input): checkBoardOutput {
    
  if (turnNumber >= 5 ) {

    if (isXTurn && checkWin(newBoard, 'X')) return 'XWIN'
    if (!isXTurn && checkWin(newBoard, 'O')) return 'OWIN'
    if (turnNumber === 9) return 'DRAW'

  }

   return 'NONE'
}