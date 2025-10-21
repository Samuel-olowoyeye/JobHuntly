import Image from 'next/image'
import React from 'react'

const CategoryBaner = () => {
  return (
    <div className="flex lg:flex-row flex-col gap-[26px] lg:gap-[190px] xl:gap-[280px] bg-[url('/RectangleMobile.svg')] lg:bg-[url('/Rectangle.svg')] bg-cover bg-no-repeat mb-[40px] lg:mb-[72px] w-full lg:w-[1192px] xl:w-full h-[670px] lg:h-[414px]" >
      <div className='pt-[88px] lg:pt-[93px] lg:pb-[91px] pl-4 lg:pl-[70px] xl:pl-[140px] w-full lg:w-[364px] xl:w-[464px] text-center lg:text-start'>
          <h1 className='px-4 lg:px-0 font-Red_Hat_Display font-extrabold text-[#FFFFFF] text-[32px] lg:text-[46px] leading-[40px] lg:leading-[60px]'>Start posting jobs today</h1>
          <h3 className='py-4 lg:py-6 font-Epilogue font-medium text-[#FFFFFF] text-[16px]'>Start posting jobs for only $10.</h3>
          <button>
            <h3 className='bg-[#FFFFFF] mb-[26px] lg:mb-0 px-[80px] lg:px-6 py-3 font-Epilogue font-bold text-[#4640DE] text-[16px]'>Sign Up For Free</h3>
          </button>
      </div>
      <div className='pl-4'>
        <Image src="/Dashboard.svg" alt='Dashboard' width={564} height={344} className='lg:mt-[70px] w-[404px] lg:w-[564px] h-[246.41px] lg:h-[344px] object-cover' />
      </div>
      
    </div>
  )
}

export default CategoryBaner

