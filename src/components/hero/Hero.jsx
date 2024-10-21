import React from 'react'
import { Body, Caption, Container, PrimaryButton, ProfileCard, Title } from '../ui/Design'
import { IoSearchOutline } from 'react-icons/io5'
import hero from '../../assets/images/home/hero.webp'
import { AiOutlinePropertySafety } from "react-icons/ai";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Hero = () => {
    const { isAuthenticated } = useSelector((state) => state.user)
  return (
    <>
      <section className='hero w-full bg-[#1C4742] py-8 lg:pl-[320px] '>
        <div className="flex items-center justify-between md:flex-row flex-col px-8 lg:px-3 py-6">
            <div className='w-full md:w-1/2 text-white sm:pr-10  '>
                <Title level={3} className="text-white">Build, sell & collect digital items</Title>
                <Body className="leading-7 text-gray-200 my-8">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, saepe velit, aliquam ex et facere fuga ratione rerum.
                </Body>
                {/* search */}
                <form>
                    <label htmlFor="search" className='mb-2 text-sm font-medium text-gray-800 sr-only'>Search</label>
                    <div className=" relative">
                        <div className='z-0 absolute inset-y-0 start-2 flex items-center p-3 pointer-events-none '>
                            <IoSearchOutline color='black' size={25} />
                        </div>
                       
                        <input type="text" className=' block shadow-md w-full p-5 ps-16 text-sm text-gray-800 rounded-full bg-gray-50 outline-none ' placeholder='Search Product...' />
                        <PrimaryButton className="absolute end-2.5 bg-[#53AF7A] hover:bg-[#1C4741] py-[8px]  bottom-2" >Search</PrimaryButton>
                    </div>
                   
                </form>

                <div className='flex items-center gap-8 my-8'>
                    <div>
                        <Title level={4} className="text-white" >842M</Title>
                        <Body className=" leading-7 text-gray-200">Total Product</Body>
                    </div>
                    <div>
                        <Title level={4} className="text-white" >82M</Title>
                        <Body className=" leading-7 text-gray-200">Total Auction</Body>
                    </div>
                    <div>
                        <Title level={4} className="text-white" >54</Title>
                        <Body className=" leading-7 text-gray-200">Total Category</Body>
                    </div>
                </div>

                <div className='flex gap-8 '>
                        {
                            !isAuthenticated && (
                                <>
                                 <Link to={'/signup'} className='px-8 py-3 bg-[#53AF7A] hover:bg-[#305e58] rounded-md font-medium transition-all duration-300'>Sign Up</Link>
                                 <Link to={'/login'} className='px-8 py-3 text-[#deccbe] bg-transparent border-2 border-[#deccbe] hover:bg-[#fff3fd] hover:text-[#fdba88] font-medium rounded-md transition-all duration-300'>Login</Link>
                                </>
                            )
                        }
                    </div>
            </div>

            <div className='w-full z-0 relative py-16 md:w-1/2 '>
                <img src={hero} alt="" />
                <div className='horiz_move absolute top-28 md:top-24 lg:top-18 left-0 xl:top-40 '>
                    <Box title="proof of quality" desc="Lorem Ipsum Dolar amet" />
                </div>
                <div className='horiz_move absolute bottom-32 md:bottom-40 -right-8  lg:-right-3 lg:bottom-48 xl:bottom-60 '>
                    <Box title="Safe and Secure" desc="Lorem Ipsum Dolar amet" />
                </div>

                <div className='vert_move absolute bottom-0 left-0'>
                    <div className='px-2 py-2 bg-white shadow-md flex items-center gap-2 rounded-xl  -mt-5 w-auto z-0 md:px-2 md:py-3 '>
                       <Title className="text-base lg:text-[18px] font-[500]">58M Happy Client</Title>
                       <div className='flex items-center'>
                        <ProfileCard className="border-2 border-white w-10 h-10 lg:w-14 lg:h-14 ">
                            <img src="https://cdn-icons-png.flaticon.com/128/6997/6997662.png" alt="" />
                        </ProfileCard>
                        <ProfileCard className="border-2 border-white -ml-4 w-10 h-10 lg:w-14 lg:h-14">
                            <img src="https://cdn-icons-png.flaticon.com/128/236/236832.png" alt="" />
                        </ProfileCard>
                        <ProfileCard className="border-2 border-white -ml-4 w-10 h-10 lg:w-14 lg:h-14">
                            <img src="https://cdn-icons-png.flaticon.com/128/236/236831.png" alt="" />
                        </ProfileCard>
                        <ProfileCard className="border-2 border-white -ml-4 w-10 h-10 lg:w-14 lg:h-14">
                            <img src="https://cdn-icons-png.flaticon.com/128/1154/1154448.png" alt="" />
                        </ProfileCard>
                       </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <div className='w-full lg:pl-[300px]'>
        <div className='bg-white py-16 -mt-10 rounded-[40px]'></div>
      </div>
    </>
  )
}

export const Box = ({title,desc}) => {
    return(
        <>
            <div className='px-2 py-2 bg-white shadow-md flex items-center gap-5 rounded-xl w-auto z-0 md:px-2 md:py-3'>
                <div className='w-10 h-10 bg-green-100 flex items-center justify-center rounded-full md:w-14 md:h-14 '>
                    <AiOutlinePropertySafety size={27} className='text-[#1C4742] ' />
                </div>
                <div className=''>
                    <Title className="text-base lg:text-[18px] font-[500]">{title}</Title>
                    <Caption className="text-sm">{desc}</Caption>
                </div>
            </div>
        </>
    )
}

export default Hero
