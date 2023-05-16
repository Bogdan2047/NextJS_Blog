import { FC } from 'react';
import Cards from '../components/cards'
import Inputs from '../components/inputs'



const Home:FC = () => {
  return (
    <div 
      className="mt-0 w-full h-full min-h-screen 2xl:pl-80 md:pl-10 pt-5"
    >
      <div 
        className="2xl:pl-92 md:pl-80 w-full"
      >
        <h1
          className="text-4xl md:pl-10"
         >Blog</h1>
      </div>
      <Inputs />
      <Cards />
    </div>
  )
}

export default Home;