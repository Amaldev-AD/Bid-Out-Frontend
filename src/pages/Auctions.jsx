import { Title } from '@/components/ui/Design'
import ProductCard from '@/custom-component/ProductCard'
import React from 'react'

const Auctions = () => {
  return (
    <>
      <article className="w-full h-fit px-5 pt-16 lg:pl-[320px] flex flex-col  bg-gradient-to-b from-white to-gray-100">
        <section className='my-8'>
            <Title level={3}>Auctions</Title>
            <div className="grid grid-cols-1 sm:grid-cols-2 md-grid:grid-cols-3 lg:grid-cols-2 lg-grid:grid-cols-3 xl-grid:grid-cols-4 gap-4 my-8">
          <div className="flex justify-center items-center w-full h-full">
            <div className="w-full ">
              <ProductCard />
            </div>
          </div>
          <div className="flex justify-center items-center w-full h-full">
            <div className="w-full ">
              <ProductCard />
            </div>
          </div>
          <div className="flex justify-center items-center w-full h-full">
            <div className="w-full ">
              <ProductCard />
            </div>
          </div>
          <div className="flex justify-center items-center w-full h-full">
            <div className="w-full ">
              <ProductCard />
            </div>
          </div>
          <div className="flex justify-center items-center w-full h-full">
            <div className="w-full ">
              <ProductCard />
            </div>
          </div>
          <div className="flex justify-center items-center w-full h-full">
            <div className="w-full ">
              <ProductCard />
            </div>
          </div>
          <div className="flex justify-center items-center w-full h-full">
            <div className="w-full ">
              <ProductCard />
            </div>
          </div>
          <div className="flex justify-center items-center w-full h-full">
            <div className="w-full">
              <ProductCard />
            </div>
          </div>
        </div>
        </section>
      </article>
    </>
  )
}

export default Auctions
