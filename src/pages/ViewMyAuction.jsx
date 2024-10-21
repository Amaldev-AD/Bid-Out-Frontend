import { Title } from '@/components/ui/Design'
import CardTwo from '@/custom-component/CardTwo'
import React from 'react'

const ViewMyAuction = () => {
  return (
    <>
      <div className='w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col'>
        <Title level={1} className='text-[#d6482b]'>My Auctions</Title>
        <div className='flex flex-wrap gap-6'>
            <CardTwo /> 
        </div>
      </div>
    </>
  )
}

export default ViewMyAuction
