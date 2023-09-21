import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../images/Image carousel 1.jpg'
import img2 from '../images/image carousel 2.jpg'
import img3 from '../images/image carousel 3.jpg'
import img4 from '../images/image carousel 4.jpg'
import img5 from '../images/image carousel 5.jpg'
import {BiArrowBack} from 'react-icons/bi'
const HomeCarousel = () => {
    return (
        <Carousel
            showThumbs={false}
            infiniteLoop={true}
            emulateTouch={true}
            autoPlay={true}
            interval={3000}
            transitionTime={500}
            showStatus={false}

            renderArrowPrev={(clickHandler, hasPrev) => (
                <div
                    onClick={clickHandler}
                    className="absolute right-[160px] bottom-0 w-[50px] h-[30px] bg-transparent z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
                >
                    <BiArrowBack className="text-4xl text-[#31255e] font-bold" />
                </div>
            )}

            renderArrowNext={(clickHandler, hasNext) => (
                <div
                    onClick={clickHandler}
                    className="absolute right-[100px] bottom-0 w-[50px] h-[30px] bg-transparent z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
                >
                    <BiArrowBack className="rotate-180 text-4xl text-[#31255e] font-bold" />
                </div>
            )}
        >
            <div>
                <img src={img1} alt='' className='rounded-lg cursor-pointer' />
            </div>
            <div>
                <img src={img2} alt='' className='rounded-lg cursor-pointer' />
            </div>
            <div>
                <img src={img3} alt='' className='rounded-lg cursor-pointer' />
            </div>
            <div>
                <img src={img4} alt='' className='rounded-lg cursor-pointer h-[30.2rem] object-cover w-full' />
            </div>
            <div>
                <img src={img5} alt='' className='rounded-lg cursor-pointer h-[30.2rem] object-cover w-full' />
            </div>
        </Carousel>
    )
}

export default HomeCarousel