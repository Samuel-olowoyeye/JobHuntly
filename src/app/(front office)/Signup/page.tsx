import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="lg:flex flex-row bg-[#FFFFFF] w-full lg:h-[850px] xl:h-screen">

      <div className="lg:bg-[url('/Login.svg')] bg-cover bg-no-repeat bg-center lg:w-[634px] xl:w-[844.8px]">
        <div className='flex flex-row justify-center lg:justify-start gap-2 pt-[25px] lg:pl-[124px]'>
          <Image src="/Logo.svg" alt="logo" width={32} height={32} />
          <Link href="/">
          <h1 className='font-Red_Hat_Display font-bold text-[#25324B] text-2xl'>JobHuntly</h1>
          </Link>
        </div>
      </div>


      <div className='xl:mx-auto xl:my-auto mt-[56px] lg:mt-[58px] lg:ml-[204px] px-4'>
        <div className='flex flex-row justify-center lg:justify-start gap-4 font-Epilogue font-semibold text-[#4640DE] text-[16px] xl:text-[20px]'>
            <h2 className='lg:pl-[108.5px]'>Job Seeker</h2>
            <h2 className='lg:pr-[108.5px]'>Company</h2>
        </div>

        <h1 className='py-6 font-Red_Hat_Display font-semibold text-[#202430] text-[32px] xl:text-[48px] text-center'>Get more opportunities </h1>
      
        <button className='flex flex-row justify-center items-center gap-2 border border-[#CCCCF5] w-full'>
          <Image src="/google.svg" alt="google" width={20} height={20} className='mb-1' />
          <h3 className='py-3 xl:py-4 font-Epilogue font-bold text-[#4640DE] text-[16px] xl:text-[20px]'>Sign Up with Google</h3>
        </button>

        <div className='flex flex-row justify-center py-6'> 
          <h3 className="flex items-center w-full font-Epilogue text-[#A8ADB7] text-[16px] xl:[20px]">
              <span className="inline-flex bg-[#A8ADB7] w-1/3 h-[1px]"></span>
              <span className="w-2/3 text-center">Or signup with email </span>
              <span className="inline-flex bg-[#A8ADB7] w-1/3 h-[1px]"></span>
            </h3>
        </div>

        <form>
          <div className='pb-[22px] font-Epilogue'>
            <label className='pb-1 font-semibold text-[#515B6F] text-[16px] xl:text-[20px]'>Full name</label>
            <input type="text" placeholder='Enter your full name' className='py-3 xl:py-4 pl-4 border border-[#D6DDEB] w-full lg:placeholder:text-[16px] xl:placeholder:text-[18px] placeholder:text-[#A8ADB7]' />
          </div>
          <div className='pb-[22px] font-Epilogue'>
            <label className='pb-1 font-semibold text-[#515B6F] text-[16px] xl:text-[20px]'>Email Address</label>
            <input type="email" placeholder='Enter email address' className='py-3 xl:py-4 pl-4 border border-[#D6DDEB] w-full lg:placeholder:text-[16px] xl:placeholder:text-[18px] placeholder:text-[#A8ADB7]' />
          </div>
          <div className='pb-[22px] font-Epilogue'>
            <label className='pb-1 font-semibold text-[#515B6F] text-[16px] xl:text-[20px]'>Password</label>
            <input type="password" placeholder='Enter password' className='py-3 xl:py-4 pl-4 border border-[#D6DDEB] w-full lg:placeholder:text-[16px] xl:placeholder:text-[18px] placeholder:text-[#A8ADB7]' />
          </div>

          <button type='submit' className='w-full'>
            <h3 className='bg-[#4640DE] py-3 xl:py-4 font-Epilogue font-bold text-[#ffffff] text-[16px] xl:text-[20px]'>Continue</h3>
          </button>
        </form>

        <h3 className='py-6 font-Epilogue text-[#202430] text-[16px] xl:text-[20px]'>Already have an account? <Link href="/Login"> <span className='font-semibold text-[#4640DE]'>Login</span> </Link></h3>
      
        <h3 className='lg:w-[408px] xl:w-[510px] font-Epilogue text-[#7C8493] text-[14px] xl:text-[16px]'>
        By clicking &apos;Continue&apos;, you acknowledge that you have read and accept the <span className='text-[#4640DE]'>Terms of Service</span> and <span className='text-[#4640DE]'>Privacy Policy.</span> 
        </h3>
      </div>

    </div>
  )
}

export default page