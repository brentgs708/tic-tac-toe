import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { db } from 'services'
import { Room } from 'typings'
import { getUpdatedGameState } from './helpers'

interface Output {
    isMarking: boolean
    markBoard:(boardIndex:number, room: Room) => void
}

const useMarkBoard = (): Output => {
    const {roomId}= useParams<any>()
    const [ isMarking, setIsMarking ] = useState(false)

    async function markBoard(boardIndex:number, room: Room) {
        setIsMarking(true)
        try {
           /* const doc = await db.collection('rooms').doc(roomId).get()
           if (!doc.exists) return console.error('Room does not exist with this ID: ' + roomId) */
           const { board, playerTurn, turnNumber } = room
            const {
              newBoard,
              newIsGameDone,
              newMessage,
              newPlayerTurn,
              newTurnNumber,  
            } = getUpdatedGameState({ board, boardIndex, playerTurn, turnNumber})

            await db.collection('rooms').doc(roomId).update({
                board: newBoard,
                isGameDone: newIsGameDone,
                message: newMessage,
                playerTurn: newPlayerTurn,
                turnNumber: newTurnNumber, 

            })
        } catch (err) {
            console.error(err)
        }

        setIsMarking(false)
    }

    return { isMarking, markBoard }
}

export default useMarkBoard


