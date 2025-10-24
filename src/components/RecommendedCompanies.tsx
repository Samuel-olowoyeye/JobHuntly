import React from 'react'
import CompanyCards from './CompanyCards'



const RecommendedCompanies = () => {
  return (
   <div className='bg-[#ffff] lg:px-[124px] xl:px-64 pt-[40px] lg:pt-[72px] w-auto h-auto'>
      <div className='lg:flex lg:flex-col lg:justify-between px-4 lg:px-0'>
          <h1 className='font-Red_Hat_Display font-extrabold text-[#25324B] text-[32px]'>Recommended Companies</h1>
          <h3 className='pt-4 font-Epilogue text-[#7C8493] text-[16px]'>Based on your profile, company preferences, and recent activity</h3>  
      </div>
      
      <CompanyCards />
    </div>
  )
}

export default RecommendedCompanies