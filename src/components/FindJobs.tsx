import { MapPin, Search } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const FindJobs = () => {
  return (
    <div className= "lg:flex lg:flex-col bg-[url('/mbg.svg')] lg:bg-[#f8f8fd] bg-cover bg-no-repeat lg:bg-none bg-bottom px-4 lg:px-[124px] xl:px-64 w-full h-auto">
    <div className='lg:flex lg:flex-col items-center pt-4 lg:pt-[65px]'>
      <div className='flex lg:flex-row flex-col items-center lg:gap-4'>
          <h1 className='font-Red_Hat_Display font-bold text-[#25324B] text-[48px] text-5xl leading-[65px]'>Find your</h1>
        <div className='flex flex-col'>
          <span className='font-Red_Hat_Display font-bold text-[#26A4FF] lg:text-[48px] text-5xl leading-[65px]'>dream job</span>
          <Image src="/slash.svg" alt="logo" width={241} height={14} className='w-[241px] lg:w-[241px] h-[14px]' />
        </div>
      </div>
        
        <h3 className='pt-6 lg:w-[673px] font-Epilogue text-[#515B6F] lg:text-[18px] text-lg text-center lg:text-start'>Find your next career at companies like HubSpot, Nike, and Dropbox</h3>


        <div className='flex lg:flex-row flex-col lg:justify-between bg-[#ffff] mt-[40px] lg:w-full h-auto lg:h-[104px]'>
          <div className='px-4 py-4 h-[57px]'>
            <div className='flex flex-row gap-4'>
              <Search className='my-[16.5px] lg:ml-4 w-[24px] h-[24px] text-[#25324B]' />
              <input type="text" placeholder='Job title or keyword' className='pt-[20px] pb-[11px] placeholder:pb-[10px] border-b outline-none w-full lg:w-[413.5px] h-[57px] font-Epilogue placeholder:text-[#7C8493] placeholder:text-[16px]' />
            </div>
          </div>
          <span className='hidden lg:block mx-5 mt-5.5 mb-7.5 border-[#D6DDEB] border-1'></span>

          <div className='px-4 lg:px-0 py-4 h-[57px]'>
            <div className='flex flex-row gap-4'>
              <MapPin className='my-[16.5px] lg:ml-4 w-[24px] h-[24px] text-[#25324B]' />
              <input type="text" placeholder='Florence, Italy' className='pt-[20px] pb-[11px] placeholder:pb-[10px] border-b outline-none w-full lg:w-[413.5px] h-[57px] font-Epilogue placeholder:text-[#7C8493] placeholder:text-[16px]' />
            </div>
          </div>
          
          <button className='px-4 py-4 lg:py-0 lg:pl-4'>
            <h3 className='bg-[#4640DE] lg:px-[27px] py-[12px] font-Epilogue font-bold text-[#FFFFFF] text-[16px]'>Search</h3>
          </button>
        </div>

      </div>
      <h3 className='pt-4 pb-8 lg:pb-[65px] font-Epilogue text-[#202430] text-[16px]'>Popular : UI Designer, UX Researcher, Android, Admin</h3>
      
      
    </div>
  )
}

export default FindJobs