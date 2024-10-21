import { Title } from '@/components/ui/Design'
import React from 'react'
import PaymentGraph from './sub-components/PaymentGraph'
import BiddersAuctioneerGraph from './sub-components/BiddersAuctioneerGraph'
import PaymentProofs from './sub-components/PaymentProofs'
import AuctionItemDelete from './sub-components/AuctionItemDelete'

const Dashboard = () => {
  return (
    <>
      <div className='w-full flex flex-col py-8 lg:pl-[320px] gap-10'>
        <h1 className='text-[#d6482b] text-2xl font-bold mb-2 min-[480px]:text-4xl md:text-6xl xl:text-7xl'>Dashboard</h1>
        <div className='flex flex-col gap-10'>
            <div>
                <Title level={4}>Monthly Total Payments Received</Title>
                <div className='flex px-10 py-2 shadow-xl rounded-lg'>
                <PaymentGraph />
                </div>
            </div>
            <div>
                <Title level={4}>Users</Title>
                <BiddersAuctioneerGraph />
            </div>
            <div>
                <Title level={4}>Payment Proofs</Title>
                <PaymentProofs />
            </div>
            <div>
                <Title level={4}>Delete Items from Auctions</Title>
                <AuctionItemDelete />
            </div>
        </div>

      </div>
    </>
  )
}

export default Dashboard
