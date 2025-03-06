import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className="contact mt-24 px-4 sm:px-6" id='contact'> 
                <div className="heading text-white text-center text-3xl sm:text-4xl font-bold font-main tracking-wider mb-12 sm:mb-16" data-aos="fade-up" data-aos-duration="1200">Contact</div>

                <div className="flex flex-col md:flex-row relative bg-darkblue text-white py-12 px-6 sm:py-16 sm:px-8 md:px-20 shadow-xl overflow-hidden">
                    <div className="md:w-1/2 mb-8 md:mb-0" data-aos="zoom-in" data-aos-duration="1300">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">
                            Reach Out to Us 📩
                        </h2>
                        <p className="text-gray-400 font-light mb-6 text-sm sm:text-lg">
                            Have questions or want to collaborate? Reach out, and let's make something amazing together!
                        </p>
                        <div className="space-y-4 text-sm sm:text-lg">
                            <div className="flex items-center space-x-2 sm:space-x-4">
                                <span> 📞  +91 9360877226,  +91 8838931843</span>
                            </div>
                            <div className="flex items-center space-x-2 sm:space-x-4">
                                <span> 📧   techolympicsfx@gmail.com</span>
                            </div>
                            <div className="flex items-center space-x-2 sm:space-x-4">
                                <span> 📍   103/G2, By pass Road, Vannarpet, Tirunelveli, Tamil Nadu 627003</span>
                            </div>
                        </div>
                    </div>

                    <div className="neoncol-ball-design absolute bottom-6 sm:bottom-10 right-6 sm:right-10 w-[70px] sm:w-[200px] md:w- h-[70px] sm:h-[200px] flex justify-center items-center animate-bounce-roll shadow-sm  bg-gradient-to-br from-[#fd68da] to-[#3808c9] transform rotate-[30deg]" >
                        <div className="ball-small-design w-[40px] sm:w-[100px] h-[40px] sm:h-[100px] shadow-lg bg-gradient-to-br to-[#fd68da] from-[#3808c9] rounded-full "></div>
                    </div>
                    <div className="neoncol-design absolute top-0 right-0 w-[160px] sm:w-[400px] h-[1000px] sm:h-[1500px] bg-gradient-to-br from-[#fd68da] to-[#3808c9] transform rotate-[30deg]" ></div>
                </div>
            </div>
        </div>
    )
}

export default Contact
