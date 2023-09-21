import React from 'react'
import Header from '../components/Header'
import img from '../images/fitness1 (3).jpg'
import imgM from '../images/Rectangle 47.png'

const Nutrionists = () => {
  return (
    <div>
      <div className='mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32'>
        <Header />
      </div>

      <div>

        <div className='flex flex-col gap-y-1'>

          {/* Heading */}
          <h1 className="text-[#31255e] font-bold text-5xl tracking-wider text-center sm:px-0 px-4">
            FitCoach.
          </h1>
          {/* Heading */}
          <h1 className="text-gray-200 font-bold text-xl tracking-widest text-center sm:px-0 px-4">
            Connecting You to Health Experts.
          </h1>

        </div>

        <div className='w-full h-full flex items-center justify-center my-6'>

          <img src={img} alt="" className='w-3/4 rounded-lg sm:flex hidden' />

          <img src={imgM} alt="" className='w-1/2 rounded-lg flex sm:hidden' />

        </div>


        <div className="flex flex-col items-center justify-center lg:my-20 sm:my-12 my-6">

          <div className="flex flex-wrap flex-col items-center text-center gap-y-4 sm:mt-0 my-16">

            <h1 className="sm:text-5xl text-xl text-[#31255e] font-bold tracking-wide">Popular Trainers .</h1>

          </div>


        </div>

      </div>
    </div>
  )
}

export default Nutrionists