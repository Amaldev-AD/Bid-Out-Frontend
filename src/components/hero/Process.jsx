import React from 'react'
import { Heading, Title } from '../ui/Design'

const Process = () => {
  return (
    <>
    
      <section className="process  bg-[#1C4742] ">
      <div className='w-full lg:pl-[300px]'>
        <div className='bg-white py-16 -mt-10 rounded-b-[40px]'></div>
      </div>


        <div className=' pb-32 px-10 pt-20 md:px-10 lg:pl-[320px] text-white lg:pr-5'>
            <Heading title="How it Works" subtitle="Easy 4 steps to win"></Heading>

            <div className=' content grid grid-cols-1 md:grid-cols-2 xl-grid:grid-cols-4 gap-4 mt-8'>
                <div className='p-4 bg-[rgba(38,90,77,0.62)] rounded-xl flex items-center justify-center flex-col text-center'>
                  <div className='img w-16 h-16'>
                    <img src="https://cdn3d.iconscout.com/3d/premium/thumb/social-media-post-3d-icon-download-in-png-blend-fbx-gltf-file-formats--like-logo-frame-photo-pack-entertainment-icons-4873903.png" alt="" />
                  </div>
                  <Title level={5} className="my-3 font-medium text-[16px] text-white">Post Items</Title>
                  <p className='text-gray-300'>Auctioneer posts items for bidding.</p>
                </div>
                <div className='py-6 bg-[rgba(38,90,77,0.62)] rounded-xl flex items-center justify-center flex-col text-center'>
                  <div className='img w-16 h-16'>
                    <img src="https://rainbowthemes.net/themes/nuron/wp-content/uploads/2023/09/auction.png" alt="" />
                  </div>
                  <Title level={5} className="my-3 font-medium text-[16px] text-white">Place Bids</Title>
                  <p className='text-gray-300'>Bidders place bids on listed items.</p>
                </div>
                <div className='py-6 bg-[rgba(38,90,77,0.62)] rounded-xl flex items-center justify-center flex-col text-center'>
                  <div className='img w-16 h-16'>
                    <img src="https://rainbowthemes.net/themes/nuron/wp-content/uploads/2023/09/auction-2.png" alt="" />
                  </div>
                  <Title level={5} className="my-3 font-medium text-[16px] text-white">Win Notification</Title>
                  <p className='text-gray-300'>Highest bidder receives a winning email.</p>
                </div>
                <div className='py-6 bg-[rgba(38,90,77,0.62)] rounded-xl flex items-center justify-center flex-col text-center'>
                  <div className='img w-16 h-16'>
                    <img src="https://rainbowthemes.net/themes/nuron/wp-content/uploads/2023/09/auction-3.png" alt="" />
                  </div>
                  <Title level={5} className="my-3 font-medium text-[16px] text-white">Payment & Fees</Title>
                  <p className='text-gray-300'>Bidder pays; Auctioneer pays 5% fee.</p>
                </div>
            </div> 
        </div>
      </section>
     
    </>
  )
}

export default Process
