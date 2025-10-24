import React from 'react'
import CompaniesCard from './CompaniesCard'

const CompaniesCategory = () => {
  return (
    <div className='bg-[#f8f8fd] lg:px-[124px] xl:px-64 pt-[96px] lg:pt-[72px] pb-6 w-auto h-auto'>
      <div className='px-4 lg:px-0'>
        <h1 className='font-Red_Hat_Display font-extrabold text-[#25324B] text-[32px]'>Companies by Category</h1>
      </div>
          <CompaniesCard />
      </div>
  )
}

export default CompaniesCategory