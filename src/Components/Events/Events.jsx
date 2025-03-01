import React from 'react'
import tech from '../../assets/images/tech.jpg';
import paperpres from '../../assets/images/paperpres.jpg';
import datathon from '../../assets/images/datathon.png';
import tresurehunt from '../../assets/images/treasure_hunt.jpg';
import addsup from '../../assets/images/addsup.jfif.jpg';
import poster from '../../assets/images/Tech (2).png'
import projectexpo from '../../assets/images/project_expo.png'





const Events = () => {
  return (
    <div>
        <div className="events w-full h-[100%] mt-24 flex flex-col justify-center items-center ">
        <div className="heading text-white text-center text-4xl font-bold font-main tracking-wider mb-16">Events</div>

        <div className="event-box flex flex-wrap gap-10  justify-center items-center">
          <div className="event-card w-[300px] h-[290px] bg-darkblue text-white rounded-lg shadow-lg flex flex-col justify-center items-center">
            <div className="event-image w-[150px] h-[150px] bg-gray-300 rounded-full flex justify-center items-center">
              <img src={tech} alt="" className='rounded-full object-right' />
            </div>
            <div className="event-title text-center text-2xl font-bold  mt-5 font-main">Tech Connections</div>
          </div>

          <div className="event-card w-[300px] h-[290px] bg-darkblue text-white rounded-lg shadow-lg flex flex-col justify-center items-center">
            <div className="event-image w-[150px] h-[150px] bg-gray-300 rounded-full flex justify-center items-center">
              <img src={datathon} alt="" className='rounded-full object-center' />
            </div>
            <div className="event-title text-center text-2xl font-bold  mt-5 font-main">Datathon</div>
          </div>

          <div className="event-card w-[300px] h-[290px] bg-darkblue text-white rounded-lg shadow-lg flex flex-col justify-center items-center">
            <div className="event-image w-[150px] h-[150px] bg-gray-300 rounded-full flex justify-center items-center">
              <img src={tresurehunt} alt="" className='rounded-full object-center' />
            </div>
            <div className="event-title text-center text-2xl font-bold  mt-5 font-main">Tech Connections</div>
          </div>

          <div className="event-card w-[300px] h-[290px] bg-darkblue text-white rounded-lg shadow-lg flex flex-col justify-center items-center">
            <div className="event-image w-[150px] h-[150px] bg-gray-300 rounded-full flex justify-center items-center">
              <img src={paperpres} alt="" className='rounded-full object-center ' />
            </div>
            <div className="event-title text-center text-2xl font-bold  mt-5 font-main">Tech Connections</div>
          </div>

          <div className="event-card w-[300px] h-[290px] bg-darkblue text-white rounded-lg shadow-lg flex flex-col justify-center items-center">
            <div className="event-image w-[150px] h-[150px] bg-gray-300 rounded-full flex justify-center items-center">
              <img src={poster} alt="" className='rounded-full object-top' />
            </div>
            <div className="event-title text-center text-2xl font-bold  mt-5 font-main">Tech Connections</div>
          </div>

          <div className="event-card w-[300px] h-[290px] bg-darkblue text-white rounded-lg shadow-lg flex flex-col justify-center items-center">
            <div className="event-image w-[150px] h-[150px] bg-gray-300 rounded-full flex justify-center items-center">
              <img src={addsup} alt="" className='rounded-full object-center' />
            </div>
            <div className="event-title text-center text-2xl font-bold  mt-5 font-main">Tech Connections</div>
          </div>

          <div className="event-card w-[300px] h-[290px] bg-darkblue text-white  rounded-lg shadow-lg flex flex-col justify-center items-center">
            <div className="event-image w-[150px] h-[150px] bg-gray-300 rounded-full flex justify-center items-center">
              <img src={projectexpo} alt="" className='rounded-full object-center' />
            </div>
            <div className="event-title text-center text-2xl font-bold  mt-5 font-main">Tech Connections</div>
          </div>

          <div className="event-card w-[300px] h-[290px] bg-darkblue text-white rounded-lg shadow-lg flex flex-col justify-center items-center">
            <div className="event-image w-[150px] h-[150px] bg-gray-300 rounded-full flex justify-center items-center">
              <img src={addsup} alt="" className='rounded-full object-center' />
            </div>
            <div className="event-title text-center text-2xl font-bold  mt-5 font-main">Tech Connections</div>
          </div>

          
        </div>



        </div>


      
    </div>
  )
}

export default Events
