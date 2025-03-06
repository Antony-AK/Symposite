import './App.css'
import EventDetail from './pages/EventDetails/EventDetail';
import Home from './pages/Home/Home'
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Routes, Route } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';



function App() {

  useEffect(() => {
    AOS.init(); 
   }, []);

  return (
    <>
     <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/events/:slug' element={<EventDetail/>} />
      </Routes>
     </div>
     
    </>
  )
}

export default App
