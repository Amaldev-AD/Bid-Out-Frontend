import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <section className='w-full m-0 py-16 px-5 flex flex-col lg:pl-[320px] min-h-screen justify-center '>
        <div className='bg-white py-4 px-4  w-1/2 mx-auto  h-auto flex flex-col gap-4 items-center rounded-md login_body'>
            <h1 className={`text-[#434141] text-xl font-semibold mb-2 min-[480px]:text-3xl md:text-4xl xl:text-5xl `}>New Member</h1>
            <p>Create a New Account? <Link  to={'/signup'} className='text-blue-600'>Register Here!</Link> </p>

            <form className='flex flex-col gap-5 w-full '>
                <div className='flex flex-col w-full gap-2'>
                    <label className='text-[16px] text-stone-600'>Enter Your Email *</label>
                    <input type="email" className='text-[16px] focus:outline-none border-[1px] border-gray-300 w-full py-2 px-2 rounded-sm' placeholder='Enter Your Email' />
                </div>
                <div className='flex flex-col w-full gap-2'>
                    <label className='text-[16px] text-stone-600'>Password *</label>
                    <input type="Password" className='text-[16px] focus:outline-none border-[1px] border-gray-300 w-full py-2 px-2 rounded-sm' placeholder='Password' />
                </div>

                <button className='py-2 w-full bg-[#47986C] text-white text-[20px] font-semibold rounded '>Login</button>
            </form>
        </div>
      </section>
    </>
  )
}

export default Login
