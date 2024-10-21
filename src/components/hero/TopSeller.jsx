import React from 'react'
import { Caption, Heading, ProfileCard, Title } from '../ui/Design'


const TopSeller = () => {
  return (
    <>
      <section className="top-seller px-10 lg:pl-[320px] mb-16 mt-28">
        <div className=''>
        <Heading title="Top Seller" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, nostrum!"></Heading>
        <div className='content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl-grid:grid-cols-4 mt-4 gap-4'>
            <div className='flex items-center justify-between border p-2 rounded-lg'>
                <div className='flex items-center gap-3'>
                    <ProfileCard className="w-16 h-16">
                        <img src="https://cdn-icons-png.flaticon.com/128/6997/6997662.png" alt="" className='w-full h-full rounded-full object-cover' />
                    </ProfileCard>
                    <div>
                       <Title level={5} className="font-normal text-xl" >Orso</Title> 
                       <Caption className="text-sm text-gray-500">$10000</Caption>
                    </div>
                </div>
                <Title level={2} className="opacity-10" >01</Title>
            </div>
            <div className='flex items-center justify-between border p-3 rounded-lg'>
                <div className='flex items-center gap-3'>
                    <ProfileCard className="w-16 h-16">
                        <img src="https://cdn-icons-png.flaticon.com/128/236/236832.png" alt="" className='w-full h-full rounded-full object-cover' />
                    </ProfileCard>
                    <div>
                       <Title level={5} className="font-normal text-xl" >Jacob</Title> 
                       <Caption className="text-sm text-gray-500">$9000</Caption>
                    </div>
                </div>
                <Title level={2} className="opacity-10" >02</Title>
            </div>
            <div className='flex items-center justify-between border p-3 rounded-lg'>
                <div className='flex items-center gap-3'>
                    <ProfileCard className="w-16 h-16">
                        <img src="https://cdn-icons-png.flaticon.com/128/236/236831.png" alt="" className='w-full h-full rounded-full object-cover' />
                    </ProfileCard>
                    <div>
                       <Title level={5} className="font-normal text-xl" >Mercy</Title> 
                       <Caption className="text-sm text-gray-500">$8000</Caption>
                    </div>
                </div>
                <Title level={2} className="opacity-10" >03</Title>
            </div>
            <div className='flex items-center justify-between border p-3 rounded-lg'>
                <div className='flex items-center gap-3'>
                    <ProfileCard className="w-16 h-16">
                        <img src="https://cdn-icons-png.flaticon.com/128/1154/1154448.png" alt="" className='w-full h-full rounded-full object-cover' />
                    </ProfileCard>
                    <div>
                       <Title level={5} className="font-normal text-xl" >Jackson</Title> 
                       <Caption className="text-sm text-gray-500">$7000</Caption>
                    </div>
                </div>
                <Title level={2} className="opacity-10" >04</Title>
            </div>
            <div className='flex items-center justify-between border p-2 rounded-lg'>
                <div className='flex items-center gap-3'>
                    <ProfileCard className="w-16 h-16">
                        <img src="https://cdn-icons-png.flaticon.com/128/6997/6997662.png" alt="" className='w-full h-full rounded-full object-cover' />
                    </ProfileCard>
                    <div>
                       <Title level={5} className="font-normal text-xl" >Manu</Title> 
                       <Caption className="text-sm text-gray-500">$6000</Caption>
                    </div>
                </div>
                <Title level={2} className="opacity-10" >05</Title>
            </div>
            <div className='flex items-center justify-between border p-3 rounded-lg'>
                <div className='flex items-center gap-3'>
                    <ProfileCard className="w-16 h-16">
                        <img src="https://cdn-icons-png.flaticon.com/128/236/236832.png" alt="" className='w-full h-full rounded-full object-cover' />
                    </ProfileCard>
                    <div>
                       <Title level={5} className="font-normal text-xl" >Alex</Title> 
                       <Caption className="text-sm text-gray-500">$5000</Caption>
                    </div>
                </div>
                <Title level={2} className="opacity-10" >06</Title>
            </div>
            <div className='flex items-center justify-between border p-3 rounded-lg'>
                <div className='flex items-center gap-3'>
                    <ProfileCard className="w-16 h-16">
                        <img src="https://cdn-icons-png.flaticon.com/128/236/236831.png" alt="" className='w-full h-full rounded-full object-cover' />
                    </ProfileCard>
                    <div>
                       <Title level={5} className="font-normal text-xl" >John</Title> 
                       <Caption className="text-sm text-gray-500">$4000</Caption>
                    </div>
                </div>
                <Title level={2} className="opacity-10" >07</Title>
            </div>
            <div className='flex items-center justify-between border p-3 rounded-lg'>
                <div className='flex items-center gap-3'>
                    <ProfileCard className="w-16 h-16">
                        <img src="https://cdn-icons-png.flaticon.com/128/1154/1154448.png" alt="" className='w-full h-full rounded-full object-cover' />
                    </ProfileCard>
                    <div>
                       <Title level={5} className="font-normal text-xl" >Albin</Title> 
                       <Caption className="text-sm text-gray-500">$2000</Caption>
                    </div>
                </div>
                <Title level={2} className="opacity-10" >08</Title>
            </div>
            
        </div>
        </div>
      </section>
    </>
  )
}

export default TopSeller
