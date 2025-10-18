import { MapPin, Search } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className= "lg:flex lg:flex-row justify-between bg-[url('/mbg.svg')] lg:bg-[#f8f8fd] bg-cover bg-no-repeat lg:bg-none bg-bottom px-4 lg:px-[124px] xl:px-64 w-full h-auto">
      <div className='pt-4 lg:pt-[82px]'>
        <h1 className='font-Red_Hat_Display font-bold text-[#25324B] lg:text-[72px] text-5xl leading-[55px] lg:leading-[90px] lg:tracking-tight'>Discover <br /> more than <br /><span className='text-[#26A4FF]'>5000+ Jobs</span></h1>

        <Image src="/slash.svg" alt="logo" width={455} height={32.17} className='w-[334px] lg:w-[455px] h-[32.17px]' />

        <h3 className='pt-[23px] lg:w-[521px] font-Epilogue text-[#515B6F] lg:text-[20px] text-lg'>Great platform for the job seeker that searching for new career heights and passionate about startups.</h3>


        <div className='lg:z-10 lg:absolute flex lg:flex-row flex-col bg-[#ffff] mt-[23px] lg:w-[852px] h-auto lg:h-[89px]'>
          <div className='px-4 py-4 h-[57px]'>
            <div className='flex flex-row gap-4'>
              <Search className='my-[16.5px] lg:ml-4 w-[24px] h-[24px] text-[#25324B]' />
              <input type="text" placeholder='Job title or keyword' className='pt-[20px] pb-[11px] placeholder:pb-[10px] border-b w-full lg:w-[233.5px] h-[57px] font-Epilogue placeholder:text-[#7C8493] placeholder:text-[16px]' />
            </div>
          </div>

          <div className='px-4 lg:px-0 py-4 h-[57px]'>
            <div className='flex flex-row gap-4'>
              <MapPin className='my-[16.5px] lg:ml-4 w-[24px] h-[24px] text-[#25324B]' />
              <input type="text" placeholder='Florence, Italy' className='pt-[20px] pb-[11px] placeholder:pb-[10px] border-b w-full lg:w-[233.5px] h-[57px] font-Epilogue placeholder:text-[#7C8493] placeholder:text-[16px]' />
            </div>
          </div>

          <button className='px-4 py-4 lg:py-0 lg:pl-4'>
            <h3 className='bg-[#4640DE] lg:px-[39.5px] py-[14px] font-Epilogue font-bold text-[#FFFFFF] text-lg'>Search my job</h3>
          </button>
        </div>

        <h3 className='pt-4 lg:pt-36 pb-8 lg:pb-[103.42px] font-Epilogue text-[#202430] text-[16px]'>Popular : <br /> UI Designer, UX Researcher, Android, Admin</h3>

      </div>
      
      <div className='hidden lg:block'>
          <Image src="/heroImage.svg" alt='heroImage' width={501} height={707} className='relative w-[501px] h-full object-cover' />
          <Image src="/heroshape.svg" alt='heroImage' width={510.38} height={716.25} className='hidden lg:block lg:top-[600px] xl:top-[570px] lg:right-[0px] xl:right-[0px] lg:absolute w-[383.38px] xl:w-[510.38px] h-[716.25px] object-cover' />
        </div>
    </div>
  )
}

export default Hero 