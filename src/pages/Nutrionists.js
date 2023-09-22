import React from 'react'
import Header from '../components/Header'
import fitness from '../images/fitness1 (3).jpg'
import fitnessM from '../images/Rectangle 47.png'
import profile from '../images/Ellipse 31.png'

const Nutrionists = () => {
  return (
    <div>
      <div className='mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32'>
        <Header />
      </div>

      <div>

        <div className='flex flex-col sm:gap-y-1 relative bottom-8'>

          {/* Heading */}
          <h1 className="text-[#31255e] font-bold text-[2.5rem] md:text-5xl tracking-wider text-center sm:px-0 px-4">
            FitCoach.
          </h1>
          {/* Heading */}
          <h1 className="text-gray-200 font-bold text-lg md:text-xl tracking-widest text-center sm:px-0 px-4">
            Connecting You to Health Experts.
          </h1>

        </div>

        <div className='w-full h-full flex items-center justify-center my-6'>

          <fitness src={fitness} alt="" className='w-3/4 rounded-lg sm:flex hidden' />

          <fitness src={fitnessM} alt="" className='w-full rounded-lg flex sm:hidden' />

        </div>


        <div className="flex flex-col items-center justify-center lg:my-[5.5rem] sm:my-[3.5rem] my-6">

          <div className="flex flex-wrap flex-col items-center text-center gap-y-4 mt-0 mb-6 sm:mb-10 lg:mb-14">

            <h1 className="sm:text-5xl text-[2rem] text-[#31255e] font-bold tracking-wide">Popular Trainers .</h1>

          </div>

          <div class="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 lg:gap-12">

            <div className='flex flex-col gap-y-2 md:p-4'>
              {/* <!-- First Div --> */}
              <div class="p-4 space-y-4 flex flex-col md:flex-row items-center justify-center gap-x-8 border-2 border-white rounded-lg" style={{ background: 'linear-gradient(170.42deg, rgba(157, 135, 237, 0.88) 3.29%, rgba(107, 73, 231, 0.95) 125.3%)', boxShadow: '0px 4px 7px 0px #00000040' }}>

                {/* <!-- Left Div --> */}
                <div class="flex flex-col">

                  {/* <!-- Image --> */}
                  <img src={profile} alt="Profile Image" class="w-16 h-16 rounded-full" />

                  {/* <!-- Rating Stars --> */}
                  <div class="ml-2">
                    {/* <!-- You can replace this with your rating component or icons --> */}
                    <span class="text-yellow-500">★</span>
                    <span class="text-yellow-500">★</span>
                    <span class="text-yellow-500">★</span>
                    <span class="text-yellow-500">★</span>
                    <span class="text-gray-400">☆</span>
                  </div>
                </div>

                {/* <!-- Right Div --> */}
                <div className='flex flex-col gap-y-2'>
                  {/* <!-- Highlighted Information --> */}
                  <h2 class="text-xl font-bold">Dr. Rakesh Sharma</h2>
                  <p class="text-gray-200">English</p>
                  <p class="text-gray-200">5 years of experience</p>
                  <p class="text-gray-200 font-semibold">Price: ₹1000/hr</p>
                </div>

              </div>

              {/* <!-- Buttons --> */}
              <div class="flex justify-between items-center w-full px-2 md:px-6">
                <button class="bg-blue-500 text-white px-4 py-2 rounded-lg">Chat</button>
                <button class="bg-gray-500 text-white px-4 py-2 ml-2 rounded-lg">More</button>
              </div>

            </div>

            {/* <!-- Second Div --> */}

            <div className='flex flex-col gap-y-2 md:p-4'>
              {/* <!-- First Div --> */}
              <div class="p-4 space-y-4 flex flex-col md:flex-row items-center justify-center gap-x-8 border-2 border-white rounded-lg" style={{ background: 'linear-gradient(170.42deg, rgba(157, 135, 237, 0.88) 3.29%, rgba(107, 73, 231, 0.95) 125.3%)', boxShadow: '0px 4px 7px 0px #00000040' }}>

                {/* <!-- Left Div --> */}
                <div class="flex flex-col">

                  {/* <!-- Image --> */}
                  <img src={profile} alt="Profile Image" class="w-16 h-16 rounded-full" />

                  {/* <!-- Rating Stars --> */}
                  <div class="ml-2">
                    {/* <!-- You can replace this with your rating component or icons --> */}
                    <span class="text-yellow-500">★</span>
                    <span class="text-yellow-500">★</span>
                    <span class="text-yellow-500">★</span>
                    <span class="text-yellow-500">★</span>
                    <span class="text-gray-400">☆</span>
                  </div>
                </div>

                {/* <!-- Right Div --> */}
                <div className='flex flex-col gap-y-2'>
                  {/* <!-- Highlighted Information --> */}
                  <h2 class="text-xl font-bold">Dr. Angella Julie</h2>
                  <p class="text-gray-200">English</p>
                  <p class="text-gray-200">7+ years of experience</p>
                  <p class="text-gray-200 font-semibold">Price: ₹1500/hr</p>
                </div>

              </div>

              {/* <!-- Buttons --> */}
              <div class="flex justify-between items-center w-full px-2 md:px-6">
                <button class="bg-blue-500 text-white px-4 py-2 rounded-lg">Chat</button>
                <button class="bg-gray-500 text-white px-4 py-2 ml-2 rounded-lg">More</button>
              </div>

            </div>

            {/* <!-- ... --> */}

            {/* <!-- Third Div --> */}

            <div className='flex flex-col gap-y-2 md:p-4'>
              {/* <!-- First Div --> */}
              <div class="p-4 space-y-4 flex flex-col md:flex-row items-center justify-center gap-x-8 border-2 border-white rounded-lg" style={{ background: 'linear-gradient(170.42deg, rgba(157, 135, 237, 0.88) 3.29%, rgba(107, 73, 231, 0.95) 125.3%)', boxShadow: '0px 4px 7px 0px #00000040' }}>

                {/* <!-- Left Div --> */}
                <div class="flex flex-col">

                  {/* <!-- Image --> */}
                  <img src={profile} alt="Profile Image" class="w-16 h-16 rounded-full" />

                  {/* <!-- Rating Stars --> */}
                  <div class="ml-2">
                    {/* <!-- You can replace this with your rating component or icons --> */}
                    <span class="text-yellow-500">★</span>
                    <span class="text-yellow-500">★</span>
                    <span class="text-yellow-500">★</span>
                    <span class="text-yellow-500">★</span>
                    <span class="text-gray-400">☆</span>
                  </div>
                </div>

                {/* <!-- Right Div --> */}
                <div className='flex flex-col gap-y-2'>
                  {/* <!-- Highlighted Information --> */}
                  <h2 class="text-xl font-bold">Dr. Rahul Chauhan</h2>
                  <p class="text-gray-200">English, Hindi</p>
                  <p class="text-gray-200">3+ years of experience</p>
                  <p class="text-gray-200 font-semibold">Price: ₹750/hr</p>
                </div>

              </div>

              {/* <!-- Buttons --> */}
              <div class="flex justify-between items-center w-full px-2 md:px-6">
                <button class="bg-blue-500 text-white px-4 py-2 rounded-lg">Chat</button>
                <button class="bg-gray-500 text-white px-4 py-2 ml-2 rounded-lg">More</button>
              </div>

            </div>

            {/* <!-- ... --> */}

            {/* <!-- Fourth Div --> */}

            <div className='flex flex-col gap-y-2 md:p-4'>
              {/* <!-- First Div --> */}
              <div class="p-4 space-y-4 flex flex-col md:flex-row items-center justify-center gap-x-8 border-2 border-white rounded-lg" style={{ background: 'linear-gradient(170.42deg, rgba(157, 135, 237, 0.88) 3.29%, rgba(107, 73, 231, 0.95) 125.3%)', boxShadow: '0px 4px 7px 0px #00000040' }}>

                {/* <!-- Left Div --> */}
                <div class="flex flex-col">

                  {/* <!-- Image --> */}
                  <img src={profile} alt="Profile Image" class="w-16 h-16 rounded-full" />

                  {/* <!-- Rating Stars --> */}
                  <div class="ml-2">
                    {/* <!-- You can replace this with your rating component or icons --> */}
                    <span class="text-yellow-500">★</span>
                    <span class="text-yellow-500">★</span>
                    <span class="text-yellow-500">★</span>
                    <span class="text-yellow-500">★</span>
                    <span class="text-gray-400">☆</span>
                  </div>
                </div>

                {/* <!-- Right Div --> */}
                <div className='flex flex-col gap-y-2'>
                  {/* <!-- Highlighted Information --> */}
                  <h2 class="text-xl font-bold">Dr. Shekar Gupta</h2>
                  <p class="text-gray-200">English, Hindi</p>
                  <p class="text-gray-200">10+ years of experience</p>
                  <p class="text-gray-200 font-semibold">Price: ₹2500/hr</p>
                </div>

              </div>

              {/* <!-- Buttons --> */}
              <div class="flex justify-between items-center w-full px-2 md:px-6">
                <button class="bg-blue-500 text-white px-4 py-2 rounded-lg">Chat</button>
                <button class="bg-gray-500 text-white px-4 py-2 ml-2 rounded-lg">More</button>
              </div>

            </div>

            {/* <!-- ... --> */}

            {/* <!-- Fifth Div --> */}

            <div className='flex flex-col gap-y-2 md:p-4' >
              {/* <!-- First Div --> */}
              <div class="p-4 space-y-4 flex flex-col md:flex-row items-center justify-center gap-x-8 border-2 border-white rounded-lg" style={{ background: 'linear-gradient(170.42deg, rgba(157, 135, 237, 0.88) 3.29%, rgba(107, 73, 231, 0.95) 125.3%)', boxShadow: '0px 4px 7px 0px #00000040' }}>

                {/* <!-- Left Div --> */}
                <div class="flex flex-col">

                  {/* <!-- Image --> */}
                  <img src={profile} alt="Profile Image" class="w-16 h-16 rounded-full" />

                  {/* <!-- Rating Stars --> */}
                  <div class="ml-2">
                    {/* <!-- You can replace this with your rating component or icons --> */}
                    <span class="text-yellow-500">★</span>
                    <span class="text-yellow-500">★</span>
                    <span class="text-yellow-500">★</span>
                    <span class="text-yellow-500">★</span>
                    <span class="text-gray-400">☆</span>
                  </div>
                </div>

                {/* <!-- Right Div --> */}
                <div className='flex flex-col gap-y-2'>
                  {/* <!-- Highlighted Information --> */}
                  <h2 class="text-xl font-bold">John Doe</h2>
                  <p class="text-gray-200">English</p>
                  <p class="text-gray-200">6+ years of experience</p>
                  <p class="text-gray-200 font-semibold">Price: ₹1750/hr</p>
                </div>

              </div>

              {/* <!-- Buttons --> */}
              <div class="flex justify-between items-center w-full px-2 md:px-6">
                <button class="bg-blue-500 text-white px-4 py-2 rounded-lg">Chat</button>
                <button class="bg-gray-500 text-white px-4 py-2 ml-2 rounded-lg">More</button>
              </div>

            </div>

            {/* <!-- ... --> */}

            {/* <!-- Sixth Div --> */}

            <div className='flex flex-col gap-y-2 md:p-4'>
              {/* <!-- First Div --> */}
              <div class="p-4 space-y-4 flex flex-col md:flex-row items-center justify-center gap-x-8 border-2 border-white rounded-lg" style={{ background: 'linear-gradient(170.42deg, rgba(157, 135, 237, 0.88) 3.29%, rgba(107, 73, 231, 0.95) 125.3%)', boxShadow: '0px 4px 7px 0px #00000040' }}>

                {/* <!-- Left Div --> */}
                <div class="flex flex-col">

                  {/* <!-- Image --> */}
                  <img src={profile} alt="Profile Image" class="w-16 h-16 rounded-full" />

                  {/* <!-- Rating Stars --> */}
                  <div class="ml-2">
                    {/* <!-- You can replace this with your rating component or icons --> */}
                    <span class="text-yellow-500">★</span>
                    <span class="text-yellow-500">★</span>
                    <span class="text-yellow-500">★</span>
                    <span class="text-yellow-500">★</span>
                    <span class="text-gray-400">☆</span>
                  </div>
                </div>

                {/* <!-- Right Div --> */}
                <div className='flex flex-col gap-y-2'>
                  {/* <!-- Highlighted Information --> */}
                  <h2 class="text-xl font-bold">Dr. Sheikh Abdullah</h2>
                  <p class="text-gray-200">English, Urdu</p>
                  <p class="text-gray-200">5+ years of experience</p>
                  <p class="text-gray-200 font-semibold">Price: ₹500/hr</p>
                </div>

              </div>

              {/* <!-- Buttons --> */}
              <div class="flex justify-between items-center w-full px-2 md:px-6">
                <button class="bg-blue-500 text-white px-4 py-2 rounded-lg">Chat</button>
                <button class="bg-gray-500 text-white px-4 py-2 ml-2 rounded-lg">More</button>
              </div>

            </div>

            {/* <!-- ... --> */}
          </div>

        </div>

      </div>
    </div>
  )
}

export default Nutrionists