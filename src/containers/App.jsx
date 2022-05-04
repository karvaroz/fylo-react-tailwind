import React from 'react'
import Benefits from '../components/Benefits'
import Comments from '../components/Comments'
import Footer from '../components/Footer'
import Header from "../components/Header"
import Productive from '../components/Productive'


const App = () => {
  return (
    <>
      <Header />
      <Benefits />
      <Productive />
      <Comments />
      <Footer /> 
    </>
  )
}

export default App