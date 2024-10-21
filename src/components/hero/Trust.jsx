import React from 'react'
import { Heading } from '../ui/Design'
import { trustList } from '@/utils/data'

const Trust = () => {
  return (
    <>
      <section className="trust py-12 pb-40 relative z-10 px-10 lg:pl-[320px]">
        <div className='w-full'>
            <Heading title="Trusted By 500+ Businesses" subtitle="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum natus dolorem, ratione."></Heading>

            <div className='content grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-5 mt-8'>
                {trustList.map((item,index) => (
                    <div className=' flex items-center justify-between border rounded-lg 'key={index} >
                    <div className='flex items-center justify-center'>
                        <img src={item.profile} alt="" className='w-full h-full rounded-full object-contain flex items-center justify-center' />
                    </div>
                </div>
                ))}
            </div>
        </div>
      </section>
    </>
  )
}

export default Trust
