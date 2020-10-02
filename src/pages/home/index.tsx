import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'


const Home: FC = () => {
   const history = useHistory()

   function handleClick() {
      history.push('/room/aaaa')
   }
   return (
   <>
      <h1>Home Page</h1>
      <button onClick={handleClick}> Play game</button>
   
   </>
   )
}

export default Home