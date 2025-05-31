import React from 'react'

const Hero = () => {
  return (
    // <div className='bg-blue-100 py-20 px-7'>
    <section className="bg-[#ffffff] px-20 mx-12 pt-20 pb-10  sm:px-10 flex justify-between items-center h-auto max-sm:px-5 max-md:flex-wrap-reverse max-md:justify-center max-md: max-md: gap-[20px] overflow-x-hidden"
    >
      <div className="text-left">
        <h2 className="max-sm:text-2xl text-4xl font-bold mb-4 animate-fade-in-down"
          style={{
            animation: 'popIn 0.8s ease-out forwards',
          }}
        >Upgrade Your Lifestyle</h2>
        <p className="max-sm:text-sm text-lg mb-6">Find the best gadgets at unbeatable prices</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Shop Now
        </button>
      </div>
      <div>
        <img className="w-[600px] h-[70vh] max-md:w-[400px] max-sm:h-[40vh] max-sm:w-[300px]" src="https://img.freepik.com/free-psd/view-hawaiian-shirt-with-clothing-rack_23-2150819228.jpg?t=st=1748703231~exp=1748706831~hmac=218662cf37a36e72787ab7e6cb5c0a5b8aa854a75c861b5bc96f54e3b0e27db8&w=1380" alt="" />
      </div>
    </section>
    // </div>
  )
}

export default Hero
