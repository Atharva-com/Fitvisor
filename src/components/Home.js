import React from 'react'
import HomeCarousel from './HomeCarousel'
import Header from './Header'
import background from '../images/blob-haikei-removebg-preview.png'
import img from '../images/scanning image.png'

const Home = () => {
  return (
    <div className='mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32'>
        <Header />

        <div class="flex flex-col items-center justify-center md:items-start md:flex-row p-4 sm:my-0 my-10">
        {/* <!-- Left Side (Image) --> */}
        <div class="md:w-1/2 flex justify-center md:justify-start">
          <img src={img} alt="Fitlight" class="w-full md:w-[80%] h-auto" />
        </div>

        {/* <!-- Right Side (Heading and Paragraph) --> */}
        <div class="md:w-1/2 lg:ml-4 mt-4 md:mt-0">
          <h1 class="text-3xl md:text-[2rem] lg:text-4xl font-semibold mb-4 text-gray-800 sm:text-white tracking-wider ">Elevate Your

            <span className='sm:text-[#31255e] text-gray-600 mr-2'>

              <img src={background} alt="" className='absolute z-[-1] right-20 hidden md:flex' /> Wellness 

            </span>

             with Fitlight</h1>

          <p class="text-[17px] lg:text-[20px] sm:text-[#31255e] text-gray-600 font-semibold tracking-wide md:leading-6 lg:leading-8">Elevate your well-being with Fitlight: Scan product ingredients, receive harm assessments, and access personalized diet and health mentoring. Connect with our network of gyms for a holistic journey to wellness.</p>
        </div>
      </div>
        <HomeCarousel />
    </div>
  )
}

export default Home