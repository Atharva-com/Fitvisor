import React from 'react'
import Header from '../components/Header'
import HealthVideo from '../components/HealthVideo'
import video from '../images/My lunch diet.mp4'
const Fitlight = () => {
  const videoData = {
    videoUrl: video,
    title: 'Healthy Living Tips',
    description: 'Learn about essential tips for a healthy lifestyle.',
  };
  return (
    <div>
      <div className='mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32'>
        <Header />
      </div>

      <div className='flex flex-col gap-y-1'>


        <div className='flex flex-col sm:gap-y-1 mt-4 sm:mt-0'>

          {/* Heading */}
          <h1 className="text-[#31255e] font-bold text-[2.5rem] md:text-5xl tracking-wider text-center sm:px-0 px-4 mb-12 sm:mb-0">
            FitLight.
          </h1>
          {/* Heading */}
          <h1 className="text-gray-600 sm:text-gray-200 font-bold text-lg md:text-xl tracking-widest text-center sm:px-0 px-4">
            Creating awareness with Health related contents by experts.
          </h1>

        </div>

      </div>

      <div className="container mx-auto mt-5 pb-20">

        <HealthVideo videoData={videoData} />
      </div>
    </div>
  )
}

export default Fitlight