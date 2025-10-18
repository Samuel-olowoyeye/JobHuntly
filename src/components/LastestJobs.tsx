import { ArrowRight } from 'lucide-react'
import React from 'react'
import LargeCards from './LargeCards'


const LastestJobs = () => {
  return (
    <div className="bg-[url('/BG.svg')] lg:bg-[#f8f8fd] bg-cover bg-no-repeat bg-center px-4 lg:px-[124px] xl:px-64 pt-[96px] lg:pt-[72px] lg:pb-[48px] w-auto h-auto">
            <div className='flex justify-between pb-12'>
              <h1 className='font-Red_Hat_Display font-extrabold text-[#25324B] text-[32px] lg:text-[42px] lg:tracking-tight tracking-wider'>Latest <span className='text-[#26A4FF]'>jobs open</span></h1>
    
              <div className='hidden lg:flex flex-row gap-4 text-[#4640DE]'>
                <h3 className='pt-[27px] font-Epilogue font-semibold text-[16px]'>Show all jobs</h3>
                <ArrowRight className='mt-[27px] w-[24px] h-[24px]' />
              </div>
            </div>

            <LargeCards />
          
        </div>
  )
}

export default LastestJobs