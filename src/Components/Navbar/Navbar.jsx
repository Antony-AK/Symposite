import React from 'react'
import logo from '../../assets/images/logofx.png'

const Navbar = () => {
  return (
    <div>
        <div className="navbar absolute w-[100%] h-[4rem] bg-transparent flex justify-between items-center z-10">
            <div className="logo text-white text-2xl mt-8 w-52 h-14 ml-10">
                <img src={logo} alt="" />
            </div>
            <div className="menus">
                <ul className="flex gap-1 me-10 mt-5">
                    <li className="mx-4 menu text-white"><a href="#home"></a>Home</li>
                    <li className="mx-4 menu text-white"><a href="#about"></a>About</li>
                    <li className="mx-4 menu text-white"><a href="#events"></a>Events</li>
                    <li className="mx-4 menu text-white"><a href="#venue"></a>Venue</li>
                    <li className="mx-4 menu text-white"><a href="#contact"></a>Contact</li>
                </ul>
            </div>

        </div>
      
    </div>
  )
}

export default Navbar
