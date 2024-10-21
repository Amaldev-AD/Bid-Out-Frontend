import Hero from '@/components/hero/Hero'
import Process from '@/components/hero/Process'
import ProductList from '@/components/hero/ProductList'
import TopCollection from '@/components/hero/TopCollection'
import TopSeller from '@/components/hero/TopSeller'
import Trust from '@/components/hero/Trust'
import UpcomingAuction from '@/components/hero/UpcomingAuction'
import React from 'react'

const Home = () => {
  return (
    <>
      <Hero />
      <ProductList />
      <TopSeller />
      <Process />
      <UpcomingAuction />
      <Trust />
      <TopCollection />
    </>
  )
}

export default Home
