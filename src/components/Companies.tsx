import Image from 'next/image'
import React from 'react'

const Companies = () => {
  return (
    <div className='lg:z-50 px-4 lg:px-[124px] xl:px-64 w-auto h-auto'>
        <h3 className='pt-[48px] font-Epilogue text-[#202430] text-lg'>Companies we helped grow</h3>

        <div className='hidden lg:flex flex-row justify-between fill-[#202430] mt-8'>
          <Image src="/vodafone.svg" alt="logo" width={153.54} height={40} className='w-[153.54px] h-[40px]' />
          <Image src="/intel.svg" alt="logo" width={82.06} height={32} className='w-[82.06px] h-[32px]' />
          <Image src="/tesla.svg" alt="logo" width={182.68} height={24} className='w-[182.68px] h-[24px]' />
          <Image src="/amd.svg" alt="logo" width={116.42} height={28} className='z-50 w-[116.42px] h-[28px]' />
          <Image src="/talkit.svg" alt="logo" width={108.19} height={32} className='z-50 w-[108.19px] h-[32px]' />
        </div>

        <div className='lg:hidden flex flex-col justify-between fill-[#202430] mt-8'>
          <div className='flex flex-row justify-between'>
            <div className='flex flex-col gap-y-[40px]'>
                <Image src="/vodafone.svg" alt="logo" width={153.54} height={40} className='w-[153.54px] h-[40px]' />
                <Image src="/talkit.svg" alt="logo" width={108.19} height={32} className='w-[108.19px] h-[32px]' />
            </div>
            <div className='flex flex-col gap-y-[40px]'>
                <Image src="/intel.svg" alt="logo" width={82.06} height={32} className='w-[82.06px] h-[32px]' />
                <Image src="/amd.svg" alt="logo" width={116.42} height={28} className='w-[116.42px] h-[28px]' />
            </div>
          </div>

          <div className='mt-[40px]'>
                 <Image src="/tesla.svg" alt="logo" width={182.68} height={24} className='w-[182.68px] h-[24px]' />
            </div>
 
        </div>
    </div>
  )
}

export default Companies