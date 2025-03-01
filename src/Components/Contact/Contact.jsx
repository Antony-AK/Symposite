import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className="contact mt-24">
                <div className="heading text-white text-center text-4xl font-bold font-main tracking-wider mb-16">Contact</div>

                <div className="flex flex-col md:flex-row relative bg-darkblue text-white py-16 px-8 md:px-20 shadow-xl overflow-hidden">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h2 className="text-4xl font-bold text-gradient mb-4">
                            Reach Out to Us 📩
                        </h2>
                        <p className="text-gray-400 font-light mb-6">
                            Have questions or want to collaborate? Reach out, and let's make something amazing together!
                        </p>
                        <div className="space-y-4 text-lg">
                            <div className="flex items-center space-x-4">
                                <div className="text-[#fd68da] text-xl" />
                                <span> 📞  +91 9360877226,  +91 8838931843</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="text-[#fd68da] text-xl" />
                                <span> 📧   techolympicsfx@gmail.com</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="text-[#fd68da] text-xl" />
                                <span> 📍   103/G2, By pass Road, Vannarpet, Tirunelveli, Tamil Nadu 627003</span>
                            </div>
                        </div>
                    </div>

                    <div className="neoncol-ball-design absolute bottom-10 right-10 w-[200px] h-[200px] animate-bounce-roll shadow-sm  bg-gradient-to-br from-[#fd68da] to-[#3808c9]  transform rotate-[30deg]" >
                        <div className="ball-small-design absolute bottom-5 right-2 left-7 w-[100px] h-[100px] animate-bounce-roll shadow-lg bg-gradient-to-br from-[#fd68da] to-[#3808c9] rounded-full "></div>
                    </div>
                    <div className="neoncol-design absolute top-0 right-0 w-[400px] h-[1500px] bg-gradient-to-br from-[#fd68da] to-[#3808c9] transform rotate-[30deg]" ></div>
                </div>

            </div>

        </div>
    )
}

export default Contact
