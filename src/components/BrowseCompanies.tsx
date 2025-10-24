import { MapPin, Search } from 'lucide-react'
import Image from 'next/image'
import React from 'react'


const BrowseCompanies = () => {
  return (
  
  <div className= "lg:flex lg:flex-col bg-[#ffff] bg-[url('/mbg.svg')] lg:bg-[#f8f8fd] bg-cover bg-no-repeat lg:bg-none bg-bottom px-4 lg:px-[124px] xl:px-64 w-full h-auto">

    <div className='lg:flex lg:flex-col items-center pt-4 lg:pt-[65px]'>
      <div className='flex lg:flex-row flex-col items-center lg:gap-4'>
          <h1 className='font-Red_Hat_Display font-bold text-[#25324B] lg:text-[48px] text-5xl leading-[65px]'>Find your</h1>
        <div className='flex flex-col items-center'>
          <span className='font-Red_Hat_Display font-bold text-[#26A4FF] lg:text-[48px] text-5xl text-center lg:text-start leading-[65px]'>dream companies</span>
          <Image src="/slash.svg" alt="logo" width={431} height={11.38} className='w-[241px] lg:w-[431px] h-[11.38px] object-cover' />
        </div>
      </div>
        
        <h3 className='items-center pt-6 font-Epilogue text-[#515B6F] lg:text-[18px] text-lg text-center lg:text-start'>Find the dream companies you dream work for</h3>


        <div className='flex lg:flex-row flex-col lg:justify-between bg-[#ffff] mt-[40px] lg:w-full h-auto lg:h-[104px]'>
          <div className='px-4 py-4 h-[57px]'>
            <div className='flex flex-row gap-4'>
              <Search className='my-[16.5px] lg:ml-4 w-[24px] h-[24px] text-[#25324B]' />
              <input type="text" placeholder='Company name or keyword' className='pt-[20px] pb-[11px] placeholder:pb-[10px] border-b w-full lg:w-[413.5px] h-[57px] font-Epilogue placeholder:text-[#7C8493] placeholder:text-[16px]' />
            </div>
          </div>
          <span className='hidden lg:block mx-5 mt-5.5 mb-7.5 border-[#D6DDEB] border-1'></span>

          <div className='px-4 lg:px-0 py-4 h-[57px]'>
            <div className='flex flex-row gap-4'>
              <MapPin className='my-[16.5px] lg:ml-4 w-[24px] h-[24px] text-[#25324B]' />
              <input type="text" placeholder='Florence, Italy' className='pt-[20px] pb-[11px] placeholder:pb-[10px] border-b w-full lg:w-[413.5px] h-[57px] font-Epilogue placeholder:text-[#7C8493] placeholder:text-[16px]' />
            </div>
          </div>
          
          <button className='px-4 py-4 lg:py-0 lg:pl-4'>
            <h3 className='hidden lg:block bg-[#4640DE] lg:px-[27px] py-[12px] font-Epilogue font-bold text-[#FFFFFF] text-[16px]'>Search</h3>
            <h3 className='lg:hidden bg-[#4640DE] lg:px-[27px] py-[14px] font-Epilogue font-bold text-[#FFFFFF] text-[16px]'>Search my job</h3>
          </button>
        </div>

      </div>
      <h3 className='pt-4 pb-8 lg:pb-[65px] font-Epilogue text-[#202430] text-[16px]'>Popular : Twitter, Microsoft, Apple, Facebook</h3>

    </div>
  )
}

export default BrowseCompanies