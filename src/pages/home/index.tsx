import React, { FC } from 'react'
import { H1, Button } from 'components'
import { useHistory } from 'react-router-dom'


const Home: FC = () => {
   const history = useHistory()

   function handleClick() {
      history.push('/room/aaaa')
   }
   return (
   <>
      <H1>Home Page</H1>
      <Button onClick={handleClick}> Play game</Button>
   
   </>
   )
}

export default Home