import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import About from '../../Components/About/About'
import Events from '../../Components/Events/Events'
import Carosal from '../../Components/Carosul/Carosal'
import Venue from '../../Components/Venue/Venue'
import Contact from '../../Components/Contact/Contact'

const Home = () => {
  return (
    <div className='w-full min-h-[100vh]'>
        <Navbar/>
        <Header/>
        <About/>
        <Carosal/>
        <Events/>
        <Venue/>
        <Contact/>
    </div>
  )
}

export default Home
