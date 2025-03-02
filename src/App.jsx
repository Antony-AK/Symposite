import './App.css'
import EventDetail from './pages/EventDetails/EventDetail';
import Home from './pages/Home/Home'
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
     <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/events/:id' element={<EventDetail/>} />
      </Routes>
     </div>
     
    </>
  )
}

export default App
