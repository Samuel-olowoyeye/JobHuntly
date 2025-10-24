"use client"
import { ChevronDown, LayoutGrid, LayoutList, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import AllJobs from './AllJobs'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from 'next/image'





const MainFindJobs = () => {
  const [openFilter, setOpenFilter] = useState(false)

  useEffect(() => {
    if (openFilter) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [openFilter]);
  
  return (
    <div className='flex lg:flex-row flex-col bg-[#ffff] lg:px-[124px] xl:px-64 lg:pt-[72px] pb-6 w-auto h-auto'>
      <div className='hidden lg:block lg:mr-[40px] xl:mr-[60px] lg:w-[234px] xl:w-[260px] h-auto'>
      <div className='lg:flex flex-col gap-y-[40px]'>

      <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className='pb-[20px] font-Epilogue font-bold text-[#25324B] text-[16px]'>Type of Employment</AccordionTrigger>
        <AccordionContent className="flex flex-col text-balance">
          <ul className='flex flex-col gap-y-[20px]'>
            <li className='flex flex-row items-center gap-4'>
                <input type='checkbox' className='w-6 h-6' />
								<h2 className='font-Epilogue text-[#515B6F] text-[16px]'>Full-time (3)</h2>
            </li>
            <li className='flex flex-row items-center gap-4'>
                <input type='checkbox' className='w-6 h-6' />
								<h2 className='font-Epilogue text-[#515B6F] text-[16px]'>Part-Time (5)</h2>
            </li>
            <li className='flex flex-row items-center gap-4'>
                <input type='checkbox' className='w-6 h-6' />
								<h2 className='font-Epilogue text-[#515B6F] text-[16px]'>Remote (2)</h2>
            </li>
            <li className='flex flex-row items-center gap-4'>
                <input type='checkbox' className='w-6 h-6' />
								<h2 className='font-Epilogue text-[#515B6F] text-[16px]'>Internship (24)</h2>
            </li>
            <li className='flex flex-row items-center gap-4'>
                <input type='checkbox' className='w-6 h-6' />
								<h2 className='font-Epilogue text-[#515B6F] text-[16px]'>Contract (3)</h2>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className='pb-[20px] font-Epilogue font-bold text-[#25324B] text-[16px]'>Categories</AccordionTrigger>
        <AccordionContent className="flex flex-col text-balance">
          <ul className='flex flex-col gap-y-[20px]'>
            <li className='flex flex-row items-center gap-4'>
                <input type='checkbox' className='w-6 h-6' />
								<h2 className='font-Epilogue text-[#515B6F] text-[16px]'>Design (24)</h2>
            </li>
            <li className='flex flex-row items-center gap-4'>
                <input type='checkbox' className='w-6 h-6' />
								<h2 className='font-Epilogue text-[#515B6F] text-[16px]'>Sales (3)</h2>
            </li>
            <li className='flex flex-row items-center gap-4'>
                <input type='checkbox' className='w-6 h-6' />
								<h2 className='font-Epilogue text-[#515B6F] text-[16px]'>Marketing (3)</h2>
            </li>
            <li className='flex flex-row items-center gap-4'>
                <input type='checkbox' className='w-6 h-6' />
								<h2 className='font-Epilogue text-[#515B6F] text-[16px]'>Business (3)</h2>
            </li>
            <li className='flex flex-row items-center gap-4'>
                <input type='checkbox' className='w-6 h-6' />
								<h2 className='font-Epilogue text-[#515B6F] text-[16px]'>Human Resource (6)</h2>
            </li>
            <li className='flex flex-row items-center gap-4'>
                <input type='checkbox' className='w-6 h-6' />
								<h2 className='font-Epilogue text-[#515B6F] text-[16px]'>Finance (4)</h2>
            </li>
            <li className='flex flex-row items-center gap-4'>
                <input type='checkbox' className='w-6 h-6' />
								<h2 className='font-Epilogue text-[#515B6F] text-[16px]'>Engineering (4)</h2>
            </li>
            <li className='flex flex-row items-center gap-4'>
                <input type='checkbox' className='w-6 h-6' />
								<h2 className='font-Epilogue text-[#515B6F] text-[16px]'>Technology (5)</h2>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className='pb-[20px] font-Epilogue font-bold text-[#25324B] text-[16px]'>Job Level</AccordionTrigger>
        <AccordionContent className="flex flex-col text-balance">
          <ul className='flex flex-col gap-y-[20px]'>
            <li className='flex flex-row items-center gap-4'>
                <input type='checkbox' className='w-6 h-6' />
								<h2 className='font-Epilogue text-[#515B6F] text-[16px]'>Entry Level (57)</h2>
            </li>
            <li className='flex flex-row items-center gap-4'>
                <input type='checkbox' className='w-6 h-6' />
								<h2 className='font-Epilogue text-[#515B6F] text-[16px]'>Mid Level (3)</h2>
            </li>
            <li className='flex flex-row items-center gap-4'>
                <input type='checkbox' className='w-6 h-6' />
								<h2 className='font-Epilogue text-[#515B6F] text-[16px]'>Senior Level (5)</h2>
            </li>
            <li className='flex flex-row items-center gap-4'>
                <input type='checkbox' className='w-6 h-6' />
								<h2 className='font-Epilogue text-[#515B6F] text-[16px]'>Director (12)</h2>
            </li>
            <li className='flex flex-row items-center gap-4'>
                <input type='checkbox' className='w-6 h-6' />
								<h2 className='font-Epilogue text-[#515B6F] text-[16px]'>VP or Above (8)</h2>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className='pb-[20px] font-Epilogue font-bold text-[#25324B] text-[16px]'>Salary Range</AccordionTrigger>
        <AccordionContent className="flex flex-col text-balance">
          <ul className='flex flex-col gap-y-[20px]'>
            <li className='flex flex-row items-center gap-4'>
                <input type='checkbox' className='w-6 h-6' />
								<h2 className='font-Epilogue text-[#515B6F] text-[16px]'>$700 - $1000 (4)</h2>
            </li>
            <li className='flex flex-row items-center gap-4'>
                <input type='checkbox' className='w-6 h-6' />
								<h2 className='font-Epilogue text-[#515B6F] text-[16px]'>$100 - $1500 (6)</h2>
            </li>
            <li className='flex flex-row items-center gap-4'>
                <input type='checkbox' className='w-6 h-6' />
								<h2 className='font-Epilogue text-[#515B6F] text-[16px]'>$1500 - $2000 (10)</h2>
            </li>
            <li className='flex flex-row items-center gap-4'>
                <input type='checkbox' className='w-6 h-6' />
								<h2 className='font-Epilogue text-[#515B6F] text-[16px]'>$3000 or above (4)</h2>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </div>
  </div>

    <div className='lg:hidden flex flex-row justify-center border-y-2 w-full font-medium'>
				<button onClick={()=> setOpenFilter(true)} className='flex flex-row items-center gap-2 py-3 font-Inter text-[#25324B] text-[16px] cursor-pointer'>
					<Image src="/icons/filter.svg" alt="" width={24} height={24}/>
					<h3>More Filters</h3>
				</button> 

				{/* Mobile filter menu page open  */}

				{openFilter && (
					<div className='z-50 fixed inset-0 flex justify-center items-end bg-black/40'>
						<div className='bg-white shadow-lg p-5 w-full h-full overflow-y-auto animate-slide-up'>
							<div className='flex justify-between items-center mb-6'>
									<h2 className='font-Red_Hat_Display font-extrabold text-[#000000] text-[20px]'>
											More Filters
									</h2>
									<button onClick={()=> setOpenFilter(false)} >
										<X className='w-6 h-6'/>
									</button>
							</div>
							{/* mobile filter features */}
							<div className='flex flex-col gap-y-6 w-full h-auto'>
                <div>
                  <div className='pb-[20px] font-Epilogue font-bold text-[#25324B] text-[16px]'>
                      Type of Employment
                  </div>
                  <ul className='flex flex-col gap-y-[20px]'>
                      <li className='flex flex-row items-center gap-4'>
                          <input type='checkbox' className='w-6 h-6' />
                          <h2 className='font-Epilogue text-[#515B6F] text-[16px]'>Full-time (3)</h2>
                      </li>
                      <li className='flex flex-row items-center gap-4'>
                          <input type='checkbox' className='w-6 h-6' />
                          <h2 className='font-Epilogue text-[#515B6F] text-[16px]'>Part-Time (5)</h2>
                      </li>
                      <li className='flex flex-row items-center gap-4'>
                          <input type='checkbox' className='w-6 h-6' />
                          <h2 className='font-Epilogue text-[#515B6F] text-[16px]'>Remote (2)</h2>
                      </li>
                      <li className='flex flex-row items-center gap-4'>
                          <input type='checkbox' className='w-6 h-6' />
                          <h2 className='font-Epilogue text-[#515B6F] text-[16px]'>Internship (24)</h2>
                      </li>
                      <li className='flex flex-row items-center gap-4'>
                          <input type='checkbox' className='w-6 h-6' />
                          <h2 className='font-Epilogue text-[#515B6F] text-[16px]'>Contract (3)</h2>
                      </li>
                  </ul>
                </div>
                <div>
                  <div className='pb-[20px] font-Epilogue font-bold text-[#25324B] text-[16px]'>
                      Categories
                  </div>
                  <ul className='flex flex-col gap-y-[20px]'>
                    <li className='flex flex-row items-center gap-4'>
                        <input type='checkbox' className='w-6 h-6' />
                        <h2 className='font-Epilogue text-[#515B6F] text-[16px]'>Design (24)</h2>
                    </li>
                    <li className='flex flex-row items-center gap-4'>
                        <input type='checkbox' className='w-6 h-6' />
                        <h2 className='font-Epilogue text-[#515B6F] text-[16px]'>Sales (3)</h2>
                    </li>
                    <li className='flex flex-row items-center gap-4'>
                        <input type='checkbox' className='w-6 h-6' />
                        <h2 className='font-Epilogue text-[#515B6F] text-[16px]'>Marketing (3)</h2>
                    </li>
                    <li className='flex flex-row items-center gap-4'>
                        <input type='checkbox' className='w-6 h-6' />
                        <h2 className='font-Epilogue text-[#515B6F] text-[16px]'>Business (3)</h2>
                    </li>
                    <li className='flex flex-row items-center gap-4'>
                        <input type='checkbox' className='w-6 h-6' />
                        <h2 className='font-Epilogue text-[#515B6F] text-[16px]'>Human Resource (6)</h2>
                    </li>
                    <li className='flex flex-row items-center gap-4'>
                        <input type='checkbox' className='w-6 h-6' />
                        <h2 className='font-Epilogue text-[#515B6F] text-[16px]'>Finance (4)</h2>
                    </li>
                    <li className='flex flex-row items-center gap-4'>
                        <input type='checkbox' className='w-6 h-6' />
                        <h2 className='font-Epilogue text-[#515B6F] text-[16px]'>Engineering (4)</h2>
                    </li>
                    <li className='flex flex-row items-center gap-4'>
                        <input type='checkbox' className='w-6 h-6' />
                        <h2 className='font-Epilogue text-[#515B6F] text-[16px]'>Technology (5)</h2>
                    </li>
                </ul>
                </div>
                <div>
                  <div className='pb-[20px] font-Epilogue font-bold text-[#25324B] text-[16px]'>
                      Job Level
                  </div>
                  <ul className='flex flex-col gap-y-[20px]'>
                    <li className='flex flex-row items-center gap-4'>
                        <input type='checkbox' className='w-6 h-6' />
                        <h2 className='font-Epilogue text-[#515B6F] text-[16px]'>Entry Level (57)</h2>
                    </li>
                    <li className='flex flex-row items-center gap-4'>
                        <input type='checkbox' className='w-6 h-6' />
                        <h2 className='font-Epilogue text-[#515B6F] text-[16px]'>Mid Level (3)</h2>
                    </li>
                    <li className='flex flex-row items-center gap-4'>
                        <input type='checkbox' className='w-6 h-6' />
                        <h2 className='font-Epilogue text-[#515B6F] text-[16px]'>Senior Level (5)</h2>
                    </li>
                    <li className='flex flex-row items-center gap-4'>
                        <input type='checkbox' className='w-6 h-6' />
                        <h2 className='font-Epilogue text-[#515B6F] text-[16px]'>Director (12)</h2>
                    </li>
                    <li className='flex flex-row items-center gap-4'>
                        <input type='checkbox' className='w-6 h-6' />
                        <h2 className='font-Epilogue text-[#515B6F] text-[16px]'>VP or Above (8)</h2>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className='pb-[20px] font-Epilogue font-bold text-[#25324B] text-[16px]'>
                      Salary Range
                  </div>
                  <ul className='flex flex-col gap-y-[20px]'>
                    <li className='flex flex-row items-center gap-4'>
                        <input type='checkbox' className='w-6 h-6' />
                        <h2 className='font-Epilogue text-[#515B6F] text-[16px]'>$700 - $1000 (4)</h2>
                    </li>
                    <li className='flex flex-row items-center gap-4'>
                        <input type='checkbox' className='w-6 h-6' />
                        <h2 className='font-Epilogue text-[#515B6F] text-[16px]'>$100 - $1500 (6)</h2>
                    </li>
                    <li className='flex flex-row items-center gap-4'>
                        <input type='checkbox' className='w-6 h-6' />
                        <h2 className='font-Epilogue text-[#515B6F] text-[16px]'>$1500 - $2000 (10)</h2>
                    </li>
                    <li className='flex flex-row items-center gap-4'>
                        <input type='checkbox' className='w-6 h-6' />
                        <h2 className='font-Epilogue text-[#515B6F] text-[16px]'>$3000 or above (4)</h2>
                    </li>
                  </ul>
                </div>

					    </div>
                <div className='py-6'>
                  <button className='w-full'>
                    <h3 className='bg-[#4640DE] py-[12px] font-Epilogue font-bold text-[#FFFFFF] text-[16px]'>Apply</h3>
                  </button>
					    </div>
					  </div>
					</div>
				)
				 }	
		</div>
					
      
      
      <div className='px-4 w-full lg:w-[919px] xl:w-[1059px] h-auto'>
        <div className='flex flex-col'>
        {/* sort header */}
          <div className='hidden lg:flex flex-row justify-between pb-8'>
            <div className='flex flex-col'>
                <h1 className='font-Red_Hat_Display font-extrabold text-[#25324B] text-[32px]'>All Jobs</h1>
                <h3 className='pt-1 font-Epilogue text-[#7C8493] text-[16px]'>Showing 73 results</h3>
            </div>
            <div className='flex flex-row items-center my-[14px] w-[365px] h-[40px]'>
                <h3 className='pr-3 font-Epilogue text-[#7C8493] text-[16px]'>Sort by:</h3>
                <div className='flex flex-row'>
                    <h3 className='pr-2 font-Epilogue font-medium text-[#25324B] text-[16px]'>Most relevant </h3>
                    <ChevronDown className='my-[3px] w-4 h-4 text-[#4640DE]'/>
                </div>
                <span className='mx-[22px] py-3.5 border border-[#D6DDEB]'></span>
                <button className='hover:bg-[#ECECFC] active:bg-[#ECECFC] p-3 rounded-lg hover:text-[#4640DE] active:text-[#4640DE]'><LayoutGrid className='w-6 h-6' /></button>
                <button className='hover:bg-[#ECECFC] active:bg-[#ECECFC] ml-4 p-3 rounded-lg hover:text-[#4640DE] active:text-[#4640DE]'><LayoutList className='w-6 h-6' /></button>
            </div>
        </div>

        {/* mobile */}
            <div className='lg:hidden flex flex-row justify-between pt-[40px] pb-6'>
            <div className='w-full'>
                <h1 className='font-Red_Hat_Display font-extrabold text-[#25324B] text-[32px]'>All Jobs</h1>

                <div className='flex flex-row justify-between'>
                  <h3 className='pt-1 font-Epilogue text-[#7C8493] text-[16px]'>Showing 73 results</h3>
                  <div className='flex flex-row pt-1'>
                      <h3 className='pr-2 font-Epilogue font-medium text-[#25324B] text-[16px]'>Most relevant </h3>
                      <ChevronDown className='my-[3px] w-4 h-4 text-[#4640DE]'/>
                  </div>
              </div>
            </div>
            </div>
        {/* sort header end */}
          
        {/* job contents */}

        <AllJobs />
        </div>
      </div>
    </div>
  )
}

export default MainFindJobs