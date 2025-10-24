import FindJobs from '@/components/FindJobs'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import MainFindJobs from '@/components/MainFindJobs'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header />
      <FindJobs />
      <MainFindJobs />
      <Footer />
    </div>
  )
}

export default page