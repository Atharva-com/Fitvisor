import React, { useState } from 'react'
import logoM from '../images/logo home.png'
import { BiLogOutCircle } from 'react-icons/bi'
import { AiFillSetting } from 'react-icons/ai'
import { MdLanguage, MdOutlineAccountCircle } from 'react-icons/md'
import Navbar from './Navbar';

const Header = () => {

    const [isOpen, setisOpen] = useState("")
    return (
        <div>
            <div className='flex items-center justify-between py-6'>

                <div>

                    <img src={logoM} alt="" className='h-16 flex' />

                </div>

                <Navbar />

                <div className='flex gap-x-2 items-center'>

                    <div className='sm:relative sm:top-0 sm:left-0 absolute top-[7rem] left-[2rem]'>
                        <h1 className='text-white font-semibold text-xl font-mono '>Hello, there👋</h1>
                    </div>

                    <MdOutlineAccountCircle className='text-[2.3rem] text-white cursor-pointer' onMouseEnter={() => { setisOpen(true) }} onMouseLeave={() => { setisOpen(false) }} />

                    {isOpen && <div onMouseEnter={() => { setisOpen(true) }} onMouseLeave={() => { setisOpen(false) }} className='h-auto w-auto absolute z-50 right-4 sm:right-8 md:right-16 lg:right-24 xl:right-32 top-[4.5rem] rounded-md flex flex-col transform transition-all py-2 px-8 justify-center font-semibold text-white text-center' style={{ background: 'linear-gradient(170.42deg, rgba(157, 135, 237, 0.88) 3.29%, rgba(107, 73, 231, 0.95) 125.3%)', boxShadow: '0px 4px 7px 0px #00000040' }}>

                        <h1 className='text-[1.3rem]'>Atharva Barve</h1>

                        <p className='font-light text-gray-200 font-sm'>atharva@gmail.com</p>

                        <div className='h-[2px] bg-[#31255e]'></div>

                        <div className='flex flex-col gap-y-2 my-2'>

                            <div className='flex items-center hover:underline text-lg gap-x-2 cursor-pointer'>
                                <BiLogOutCircle className='text-2xl text-[#31255e]' /> Logout
                            </div>

                            <div className='flex items-center hover:underline text-lg gap-x-2 cursor-pointer'>
                                <MdLanguage className='text-2xl text-[#31255e]' /> Language
                            </div>

                            <div className='flex items-center hover:underline text-lg gap-x-2 cursor-pointer'>
                                <AiFillSetting className='text-2xl text-[#31255e]' /> Settings
                            </div>

                        </div>

                    </div>}

                </div>

            </div>
        </div>
    )
}

export default Header