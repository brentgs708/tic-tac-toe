import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { SYMBOL } from 'typings'
import { db } from 'services'

interface Output {
    clearBoard: (startingTurn: SYMBOL) => void
    isClearing: boolean
}

const useClearBoard =  (): Output => {
    const { roomId } = useParams<any>()
    const [isClearing, setIsClearing] = useState<boolean>(false)

    async function clearBoard(startingTurn: SYMBOL ) {
        setIsClearing(true)
        const newStartingTurn = startingTurn === 'X' ? 'O' : 'X'
        try {
          await db.collection('rooms').doc(roomId).update({
              board: [
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                ],
              isGameDone: false,
              message: `${newStartingTurn}'s Turn`,
              playerTurn: newStartingTurn,
              startingTurn: newStartingTurn,
              turnNumber: 1, 

          })
        } catch (err){
            console.error(err)
        }

        setIsClearing(false)
    }

    return {clearBoard, isClearing}
}

export default useClearBoard


