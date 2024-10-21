import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <>
      <section className='w-full ml-0 m-0  px-5 pt-16 lg:pl-[320px]  flex flex-col min-h-screen py-4 justify-center'>
        <div className='bg-white mx-auto w-75 h-auto px-4 flex flex-col gap-4 items-center py-4 justify-center rounded-md signup_body'>
          <h1 className={`text-[#434141] text-xl font-semibold mb-2 min-[480px]:text-3xl md:text-4xl xl:text-5xl `}>Sign Up</h1>
          <p>Do you already have an account?<Link  to={'/login'} className='text-blue-600'>Log In Here!</Link> </p>

          <form className='flex flex-col gap-5 w-75'>
             <p className=' font-semibold text-xl md:text2xl'>Personal Details</p>

             <div className='flex flex-col gap-4  sm:flex-row'>
              <div className='flex flex-col sm:flex-1'>
                <label className='text-[16px] text-stone-600'>Full Name</label>
                <input className='text-[16px] py-2 bg-transparent focus:outline-none border-b-[1px] border-b-stone-500 ' type="text"  />
              </div>
              <div className='flex flex-col sm:flex-1'>
                <label className='text-[16px] text-stone-600'>Email</label>
                <input className='text-[16px] py-2 bg-transparent focus:outline-none border-b-[1px] border-b-stone-500 ' type="email"  />
              </div>
             </div>
             <div className='flex flex-col gap-4  sm:flex-row'>
              <div className='flex flex-col sm:flex-1'>
                <label className='text-[16px] text-stone-600'>Phone</label>
                <input className='text-[16px] py-2 bg-transparent focus:outline-none border-b-[1px] border-b-stone-500 ' type="number"  />
              </div>
              <div className='flex flex-col sm:flex-1'>
                <label className='text-[16px] text-stone-600'>Address</label>
                <input className='text-[16px] py-2 bg-transparent focus:outline-none border-b-[1px] border-b-stone-500 ' type="text"  />
              </div>
             </div>
             <div className='flex flex-col gap-4  sm:flex-row'>
              <div className='flex flex-col sm:flex-1'>
                <label className='text-[16px] text-stone-600'>Role</label>
               <select className='text-[16px] py-2 bg-transparent focus:outline-none border-b-[1px] border-b-stone-500 ' >
                <option value="">Select Role</option>
                <option value="Auctioneer">Auctioneer</option>
                <option value="Bidder">Bidder</option>
               </select>
              </div>
              <div className='flex flex-col sm:flex-1'>
                <label className='text-[16px] text-stone-600'>Password</label>
                <input className='text-[16px] py-2 bg-transparent focus:outline-none border-b-[1px] border-b-stone-500 ' type="password"  />
              </div>
             </div>

             <div className='flex flex-col gap-2 sm:flex-1'>
                <label className='text-[16px] text-stone-600'>Profile Image</label>
                <div className='flex items-center gap-3'>
                  <img src="" alt="" className='w-14 h-14 rounded-full' />
                  <input type="file" />
                </div>
             </div>

             {/* payment */}
             <div className='flex flex-col gap-4'>
                <label className='font-semibold text-xl md:2xl flex flex-col'>Payment Method Details <span className='text-[12px] text-stone-500'>Fill Payment Details Only If You Are Registering as a Auctioneer</span></label>

                <div className='flex flex-col gap-2'>
                    <label className='text-[16px] text-stone-500'>Bank Details</label> 
                    <div className=' flex flex-col gap-1 sm:flex-row sm:gap-4'>
                        <select className='text-[16px] py-2 bg-transparent focus:outline-none border-b-[1px] border-b-stone-500 sm:flex-1'  >
                          <option value="">Select Your Bank</option>
                          <option value="SBI">SBI</option>
                          <option value="UBL">UBL</option>
                          <option value="HBL">HBL</option>
                          <option value="Allied Bank">Allied Bank</option>
                        </select>  
                        <input type="text" placeholder='IFSC' className='text-[16px] py-2 bg-transparent focus:outline-none border-b-[1px] border-b-stone-500 sm:flex-1'  />
                        <input type="text" placeholder='Bank Account Username' className='text-[16px] py-2 bg-transparent focus:outline-none border-b-[1px] border-b-stone-500 sm:flex-1'  />
                    </div> 
                </div> 

                <div>
                    <label htmlFor="" className='text-[16px] text-stone-600 font-semibold'>Paypal Details</label>  
                    <div className='flex flex-col gap-1 sm:flex-row sm:gap-4'>
                        <input type="number" placeholder='Easypaise Account Number' className='text-[16px] py-2 bg-transparent focus:outline-none border-b-[1px] border-b-stone-500 sm:flex-1'  />
                        <input type="email" placeholder='Paypal Email' className='text-[16px] py-2 bg-transparent focus:outline-none border-b-[1px] border-b-stone-500 sm:flex-1'  />
                    </div>
                </div>       
             </div>


             <button className='bg-[#d6482b] font-semibold hover:bg-[#b8381e] transition-all duration-300 text-xl py-2 px-4 rounded-md text-white w-[280px] mx-auto lg:w-[640px] my-4' type='submit'>Register</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default SignUp
