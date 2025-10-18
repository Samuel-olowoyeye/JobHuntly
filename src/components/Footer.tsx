import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col bg-[#202430] px-4 lg:px-[124px] xl:px-64 w-auto h-auto'>
        <div className='flex lg:flex-row flex-col justify-between pt-[40px] lg:pt-16 border-[#FFFFFF] border-b'>
          <div className='flex flex-col'>
            <div className='flex flex-row gap-2'>
              <Image src="/Logo.svg" alt="logo" width={32} height={32} />
              <h1 className='font-Red_Hat_Display font-bold text-[#FFFFFF] text-2xl'>JobHuntly</h1>
            </div>
            <h3 className='pt-8 w-[333px] lg:w-[376px] h-[78px] font-Epilogue text-[#D6DDEB]'>Great platform for the job seeker that passionate about startups. Find your dream job easier.</h3>
          </div>


       <div className='flex flex-row gap-[96px] pt-12 lg:pt-0'>
          <div>
            <h1 className='pb-[18px] font-Epilogue font-semibold text-[#FFFFFF] text-[18px]'>About</h1>
            <h3 className='pb-[16px] font-Epilogue text-[#D6DDEB] text-[16px]'>Companies</h3>
            <h3 className='pb-[16px] font-Epilogue text-[#D6DDEB] text-[16px]'>Pricing</h3>
            <h3 className='pb-[16px] font-Epilogue text-[#D6DDEB] text-[16px]'>Terms</h3>
            <h3 className='pb-[16px] font-Epilogue text-[#D6DDEB] text-[16px]'>Advice</h3>
            <h3 className='lg:pb-[80px] font-Epilogue text-[#D6DDEB] text-[16px]'>Privacy Policy</h3>
          </div>

          <div>
            <h1 className='pb-[18px] font-Epilogue font-semibold text-[#FFFFFF] text-[18px]'>Resources</h1>
            <h3 className='pb-[23px] font-Epilogue text-[#D6DDEB] text-[16px]'>Help Docs</h3>
            <h3 className='pb-[23px] font-Epilogue text-[#D6DDEB] text-[16px]'>Guide</h3>
            <h3 className='pb-[23px] font-Epilogue text-[#D6DDEB] text-[16px]'>Updates</h3>
            <h3 className='lg:pb-[101px] font-Epilogue text-[#D6DDEB] text-[16px]'>Contact Us</h3>
          </div>
        </div>

          <div className='flex flex-col pt-6 lg:pt-0 font-Epilogue'>
            <h1 className='pb-2 lg:pb-[18px] font-Epilogue font-semibold text-[#FFFFFF] text-[18px]'>Get job notifications</h1>
            <h3 className='w-[306px] h-[52px] font-Epilogue text-[#D6DDEB]'>The latest job news, articles, sent to your inbox weekly.</h3>
            <div className='flex lg:flex-row flex-col gap-2 pt-4 lg:pt-6 pb-6 lg:pb-[132px]'>
                <input type="email" placeholder='Email Address' className='bg-[#ffffff] px-4 outline-none w-full lg:w-[233px] h-[50px] placeholder:text-[#A8ADB7] placeholder:text-[16px]' />
                <button >
                  <h3 className='bg-[#4640DE] px-6 py-3 w-[131px] h-[50px] lg:h-[52px] font-bold text-[#FFFFFF] text-[16px]'>Subscribe</h3>
                </button>
            </div>
          </div>

        </div>

        <div className='flex lg:flex-row flex-col justify-between pt-6 lg:pt-[42px] lg:pb-[44px] font-Epilogue'>
          <h3 className='font-medium text-[#FFFFFF] text-[16px] text-center lg:text-start'>2021 @ JobHuntly. All rights reserved.</h3>

          <div className="flex flex-row gap-6 mx-auto lg:mx-0 pt-6 lg:pt-0 pb-[40px] lg:pb-0">
            <Image src="/icons/Facebook.svg" alt="facebook" width={32} height={32} className='w-8 h-8' />
            <Image src="/icons/Instagram.svg" alt="instagram" width={32} height={32} className='w-8 h-8' />
            <Image src="/icons/Dribbble.svg" alt="dribble" width={32} height={32} className='w-8 h-8' />
            <Image src="/icons/LinkedIn.svg" alt="instagram" width={32} height={32} className='w-8 h-8'/>
            <Image src="/icons/Twitter2.svg" alt="instagram" width={32} height={32} className='w-8 h-8'/>
          </div>
        </div>
      </div>
  )
}

export default Footer