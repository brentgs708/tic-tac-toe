import { useEffect, useState } from 'react'


import { db } from 'services'
import { Room } from 'typings'





interface Output {

    isFetching: boolean
    room?: Room
}


const useRoom = (roomId: string): Output => {

    const [isFetching, setIsFetching] = useState<boolean>(true)
    const [room, setRoom] = useState<Room | undefined>()

    useEffect(() => {
        const unsubscribe = db
        .collection('rooms')
        .doc(roomId)
        .onSnapshot((doc) => {
            if (doc.exists) setRoom(doc.data() as Room)
            else console.log('Room not found')
            if (isFetching) setIsFetching(false)
        })

        return () => {
            unsubscribe()
        }
    }, [roomId, isFetching])

    return { isFetching, room }
}

export default useRoom
