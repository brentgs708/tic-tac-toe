import { BLOCK, SYMBOL } from 'App'

export default function checkWin(board: BLOCK[], symbol: SYMBOL): boolean {
    if (
      ((board[0] === symbol) && (board[1] === symbol) && (board[2] === symbol)) ||
      ((board[3] === symbol) && (board[4] === symbol) && (board[5] === symbol)) ||
      ((board[6] === symbol) && (board[7] === symbol) && (board[8] === symbol)) ||
      ((board[0] === symbol) && (board[3] === symbol) && (board[6] === symbol)) ||
      ((board[1] === symbol) && (board[4] === symbol) && (board[7] === symbol)) ||
      ((board[2] === symbol) && (board[5] === symbol) && (board[8] === symbol)) ||
      ((board[0] === symbol) && (board[4] === symbol) && (board[8] === symbol)) ||
      ((board[2] === symbol) && (board[4] === symbol) && (board[6] === symbol))         
      ){
        //alert(symbol +' wins!')
        return true
        }
    return false
}

//export default checkWin

