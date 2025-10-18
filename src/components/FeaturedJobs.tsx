import { ArrowRight } from 'lucide-react'
import React from 'react'
import BigCards from './BigCards'


const FeaturedJobs = () => {
  return (
    <div className='px-4 lg:px-[124px] xl:px-64 pb-6 lg:pb-[48px] w-auto h-auto'>
      <div className='lg:flex lg:flex-row lg:justify-between px-4 lg:px-0'>
                <h1 className='font-Red_Hat_Display font-extrabold text-[#25324B] text-[32px] lg:text-[42px] lg:tracking-tight tracking-wider'>Featured <span className='text-[#26A4FF]'>jobs</span></h1>
      
                <div className='hidden lg:z-10 lg:flex flex-row gap-4 text-[#4640DE]'>
                  <h3 className='pt-[27px] font-Epilogue font-semibold text-[16px]'>Show all jobs</h3>
                  <ArrowRight className='mt-[27px] w-[24px] h-[24px]' />
                </div>
              </div>
          <BigCards />

          <div className='lg:hidden flex flex-row gap-4 px-4 pt-6 pb-[40px] text-[#4640DE]'>
            <h3 className='font-Epilogue font-semibold text-[16px]'>Show all jobs</h3>
            <ArrowRight className='w-[24px] h-[24px]' />
          </div>
        </div>
  )
}

export default FeaturedJobs