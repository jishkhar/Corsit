import React from 'react';

const Contact = () => {
  return (
    <div className='bg-[#080514]'>
      <div className="flex flex-col md:flex-row items-center justify-center w-[90%] mx-auto py-36 gap-20">
        <div className="w-full md:w-[60%] rounded-lg overflow-hidden shadow-lg relative">
          <div className="absolute inset-0 bg-black opacity-40 pointer-events-none"></div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6437.483263773803!2d77.124437705653!3d13.327329070140145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb02e826fb691ef%3A0xe78608813c36f380!2sSiddaganga%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1739469272484!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[550px] rounded-2xl"
          />

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[85%] md:w-[75%] text-white p-6 rounded-2xl shadow-xl border-2 border-[rgba(173,216,230,0.8)] bg-gray-900 backdrop-blur-3xl">
            <div className="flex flex-col md:flex-row justify-between items-start text-left gap-40">
              <div className="w-full md:w-1/2">
                <h2 className="text-sm font-semibold uppercase mb-1">Address</h2>
                <p>
                  E-Yantra Robotics Lab, Siddaganga Institute of Technology, Tumkur, Karnataka
                </p>
              </div>

              <div className="w-full md:w-1/2 mt-4 md:mt-0 flex flex-col items-start">
                <div className="mb-2">
                  <h2 className="text-sm font-semibold uppercase mb-1">Email</h2>
                  <a href="mailto:corsit@sit.ac.in" className="cursor-pointer hover:underline hover:text-orange-500">
                    corsit@sit.ac.in
                  </a>
                </div>
                <div>
                  <h2 className="text-sm font-semibold uppercase mb-1">Phone</h2>
                  <p>8104882160</p>
                </div>
              </div>
            </div>
          </div>

        </div>









        <div className="w-full md:w-[40%] border border-[rgba(173,216,230,0.8)] shadow-lg rounded-3xl px-9 py-16 bg-gray-900 backdrop-blur-3xl flex flex-col justify-center">
          <h1 className="text-4xl lg:text-5xl font-semibold text-white mb-6 flex items-center justify-center">
            <span>Contact Us</span>
          </h1>

          <form className="flex flex-col space-y-5">
            <div>
              <label className="block text-xl font-medium text-gray-300 pl-2 pb-2">Name</label>
              <input
                type="text"
                className="w-full h-12 px-4 text-lg border border-gray-600 text-white rounded-3xl focus:outline-none focus:ring-2 focus:ring-[rgba(173,216,230,0.6)]"
              />
            </div>

            <div>
              <label className="block text-xl font-medium text-gray-300 pl-2 pb-2">Email</label>
              <input
                type="email"
                className="w-full h-12 px-4 text-lg border border-gray-600 text-white rounded-3xl focus:outline-none focus:ring-2 focus:ring-[rgba(173,216,230,0.6)]"
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-300 pl-2 pb-2">Message</label>
              <textarea
                className="w-full h-32 p-4 text-lg border border-gray-600 text-white rounded-3xl focus:outline-none focus:ring-2 focus:ring-[rgba(173,216,230,0.6)]"
              ></textarea>
            </div>

            <input
              type="submit"
              value="Submit"
              className="w-[95%] mx-auto px-6 my-2 py-3 border-[0.25px] border-slate-400 rounded-4xl text-xl font-semibold text-center transition text-white shadow-md hover:scale-105 active:scale-95 cursor-pointer bg-[rgba(209,213,219,0.1)]"
            />
          </form>
        </div>


      </div>
    </div>
  );
};

export default Contact;
