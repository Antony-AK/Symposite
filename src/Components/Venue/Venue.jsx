import React from 'react'

const Venue = () => {
    return (
        <div>
            <div className="venue-location mt-24 ">
                <div className="heading text-white text-center text-4xl font-bold font-main tracking-wider mb-16">Venue</div>

                <div className="contant-locations w-[90%] mx-auto flex gap-10 justify-center items-center">
                    <div className="venue-info left flex flex-col text-white gap-5 w-[50%] p-10 mb-5 font-base ">
                        <p className='font-light'>GET IN TOUCH</p>
                        <h2 className='text-5xl mb-5'>Visit our symposium venue or reach out to us for any queries!</h2>
                        <div className="location-details text-lg flex gap-10">
                            <div className="venue-head flex gap-2">
                                <p>📍</p>
                                <p className='text-purple-500 font-semibold'>Venue</p>
                            </div>
                            <div className="clg-details">
                                <p>Francis Xavier Engineering College</p>
                                <p>APJ Auditorium</p>
                                <p>Tirunelveli, Tamilnade, 627003</p>
                            </div>

                        </div>
                        <div className="email-details text-lg flex gap-11">
                            <div className="venue-head flex gap-2">
                                <p>📧</p>
                                <p className='text-purple-500 font-semibold'>Email</p>
                            </div>
                            <p>techolympicsfx@gmail.com</p>
                        </div>
                        <div className="phone-no-details text-lg flex gap-6">
                            <div className="contact-head flex gap-2">
                                <p>📞</p>
                                <p className='text-purple-500 font-semibold'>Contact</p>
                            </div>
                            <div className="coordinator-info">
                                <p className='font-main'>+91 96005 63323
                                    (Mrs Poornam S)</p>
                            </div>

                        </div>
                        <div className="timing-details text-lg flex gap-8">
                            <div className="timing-head flex gap-2">
                                <p>🕒</p>
                                <p className='text-purple-500 font-semibold'>Timing  </p>
                            </div>
                            <p>Monday to Saturday | 9:00 AM - 4:00 PM</p>
                        </div>
                    </div>

                    <div className="location-map relative w-[45%] h-[470px] flex justify-center items-center rounded-lg shadow-lg   3s linear infinite">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.572424639135!2d77.72410497123387!3d8.732086977862666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0411f2fd003b89%3A0xcbfcb2bcc6823787!2sFrancis%20Xavier%20Engineering%20College%2C%20Tirunelveli!5e0!3m2!1sen!2sin!4v1740753055311!5m2!1sen!2sin"
                            className="w-full h-full border-0 rounded-lg"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>


                </div>



            </div>

        </div>
    )
}

export default Venue
