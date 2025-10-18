import Image from 'next/image'
import React from 'react'

const job = [
  {
    id: 1,
    image: "/logos/Nomad.svg",
    title: "Social Media Assistant",
    company: "Nomad",
    country: "Paris, France",
  },
  {
    id: 2,
    image: "/logos/Netlify.svg",
    title: "Social Media Assistant",
    company: "Netlify",
    country: "Paris, France",
  },
  {
    id: 3,
    image: "/logos/Dropbox.svg",
    title: "Brand Designer",
    company: "Dropbox",
    country: "San Fransisco, USA",
  },
  {
    id: 4,
    image: "/logos/Maze.svg",
    title: "Brand Designer",
    company: "Maze",
    country: "San Fransisco, USA",
  },
  {
    id: 5,
    image: "/logos/Terraform.svg",
    title: "Interactive Developer",
    company: "Terraform",
    country: "Hamburg, Germany",
  },
  {
    id: 6,
    image: "/logos/Udacity.svg",
    title: "Interactive Developer",
    company: "Udacity",
    country: "Hamburg, Germany",
  },
  {
    id: 7,
    image: "/logos/Packer.svg",
    title: "HR Manager",
    company: "Packer",
    country: "Lucern, Switzerland",
  },
  {
    id: 8,
    image: "/logos/Webflow.svg",
    title: "HR Manager",
    company: "Webflow",
    country: "Lucern, Switzerland",
  },
]

const LargeCards = () => {
  return (
    <div className='gap-x-8 gap-y-4 grid grid-cols-1 lg:grid-cols-2 pb-[60px]'>
      {job.map((jobs) => (
      <div key={jobs.id} className='flex bg-[#ffffff]'>
        <div  className='lg:flex lg:flex-row lg:gap-6 lg:py-6 pt-4 pb-6 pl-4 lg:pl-[40px]'>
          <Image src={jobs.image} alt={jobs.company} width={64} height={64} className='w-12 lg:w-16 h-12 lg:h-16'/>

          <div className="flex flex-col lg:gap-2">
            <h2 className='px-4 lg:px-6 pt-6 lg:pt-0 font-Epilogue font-semibold text-[#25324B] text-[20px]'> {jobs.title} </h2>


            <div className='flex flex-row items-center'>
              <h3 className='pl-4 lg:pl-6 font-Epilogue text-[#515B6F] text-[16px] tracking-tighter'>{jobs.company}</h3>
              <span className='bg-[#515B6F] mr-[11px] ml-2 px-[1px] py-[1px] border border-[#25324B] rounded-full'></span>
              <h3 className='font-Epilogue text-[#515B6F] text-[16px] tracking-tighter'>{jobs.country}</h3>
            </div>

            
            <div className='flex flex-row gap-x-2 lg:gap-2 mt-[8.5px] lg:mt-0 ml-4 lg:ml-6'>
            <button>
                  <h3 className='bg-[#EEFAF7] px-[10px] py-[6px] rounded-full font-Epilogue font-semibold text-[#56CDAD] text-[14px]'>Full-Time</h3>
              </button>
              <span className='border border-[#D6DDEB]'></span>
              <button>
                  <h3 className='px-[10px] py-[6px] border border-[#FFB836] rounded-full font-Epilogue font-semibold text-[#FFB836] text-[14px]'>Marketing</h3>
              </button>
              <button>
                  <h3 className='px-[10px] py-[6px] border border-[#4640DE] rounded-full font-Epilogue font-semibold text-[#4640DE] text-[14px]'>Design</h3>
              </button>
          </div>


        </div>

        </div>
      </div>
          ))}
    </div>
  )
}

export default LargeCards