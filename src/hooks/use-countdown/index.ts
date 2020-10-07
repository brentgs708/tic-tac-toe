import { useEffect, useState } from 'react'

interface Output {
    counter: number
    setCounter: (counter: number) => void

}
//const useCountDown = (onComplete: () => void, startsAt = 10): Output => {
const useCountDown = (onComplete: any, startsAt = 10): Output => {
    const [counter, setCounter] = useState(startsAt)

    useEffect(() => {
      const interval= setInterval(() => {
      setCounter(counter - 1)
      }, 1000)
  
      if (counter === 0) {
          clearInterval(interval)
          //onComplete()   
     }
  
      return () => clearInterval(interval)
      //, [counter,  onComplete])
    }, [counter])

    useEffect(() => {
      if (counter === 0 && onComplete) onComplete()
      //, [counter])
    }, [counter,  onComplete])

    return { counter, setCounter }
}

export default useCountDown