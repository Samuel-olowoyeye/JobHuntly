"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"


const AllJob = [
  {
    id: 1,
    image: "/logos/Nomad.svg",
    title: "Social Media Assistant",
    company: "Nomad",
    country: "Paris, France",
    applications: 5,
    percentage: "50%",
  },
  {
    id: 2,
    image: "/logos/Dropbox.svg",
    title: "Brand Designer",
    company: "Dropbox",
    country: "San Fransisco, USA",
     applications: 2,
     percentage: "20%",
  },
  {
    id: 3,
    image: "/logos/Terraform.svg",
    title: "Interactive Developer",
    company: "Terraform",
    country: "Hamburg, Germany",
     applications: 8,
     percentage: "80%",
  },
  {
    id: 4,
    image: "/icons/revolut.svg",
    title: "Email Marketing",
    company: "Revolut",
    country: "Madrid, Spain",
     applications: 0,
     percentage: "0%",
  },
  {
    id: 5,
    image: "/icons/canva.svg",
    title: "Lead Engineer",
    company: "canva",
    country: "Ankara, Turkey",
    applications: 5,
    percentage: "50%",
  },
  {
    id: 6,
    image: "/icons/classpass.svg",
    title: "Product Designer",
    company: "ClassPass",
    country: "Berlin, Germany",
    applications: 5,
    percentage: "50%",
  },
  {
    id: 7,
    image: "/icons/pitch.svg",
    title: "Customer Manager",
    company: "Pitch",
    country: "Berlin, Germany",
    applications: 5,
    percentage: "50%",
  },
  {
    id: 8,
    image: "/logos/Udacity.svg",
    title: "Interactive Developer",
    company: "Udacity",
    country: "Hamburg, Germany",
    applications: 3,
    percentage: "30%",
  },
  {
    id: 9,
    image: "/logos/Netlify.svg",
    title: "Social Media Assistant",
    company: "Netlify",
    country: "Paris, France",
    applications: 6,
    percentage: "60%",
  },
  {
    id: 10,
    image: "/logos/Maze.svg",
    title: "Brand Designer",
    company: "Maze",
    country: "San Fransisco, USA",
    applications: 5,
    percentage: "50%",
  },
  {
    id: 11,
    image: "/logos/Packer.svg",
    title: "HR Manager",
    company: "Packer",
    country: "Lucern, Switzerland",
    applications: 4,
    percentage: "40%",
  },
  {
    id: 12,
    image: "/logos/Webflow.svg",
    title: "HR Manager",
    company: "Webflow",
    country: "Lucern, Switzerland",
    applications: 8,
    percentage: "80%",
  },
]


const AllJobs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 7;

  const totalPages = Math.ceil(AllJobs.length / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentJob = AllJob.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber: React.SetStateAction<number>) => setCurrentPage(pageNumber);

  return (
    <div className='gap-x-8 gap-y-4 grid grid-cols-1 pb-[60px]'>
          {currentJob.map((jobs) => (
          <div key={jobs.id} className='flex lg:flex-row flex-col justify-between bg-[#ffffff] border border-[#D6DDEB]'>
            <div  className='lg:flex lg:flex-row lg:gap-6 lg:py-6 pt-4 pb-6 pl-4 lg:pl-6'>
              <Image src={jobs.image} alt={jobs.company} width={64} height={64} className='w-12 lg:w-16 h-12 lg:h-16'/>
    
              <div className="flex flex-col">
                <h2 className='px-4 lg:px-6 pt-6 lg:pt-0 pb-2 font-Epilogue font-semibold text-[#25324B] text-[20px]'> {jobs.title} </h2>
    
    
                <div className='flex flex-row items-center'>
                  <h3 className='pl-4 lg:pl-6 font-Epilogue text-[#515B6F] text-[16px] tracking-tighter'>{jobs.company}</h3>
                  <span className='bg-[#515B6F] mr-[11px] ml-2 px-[1px] py-[1px] border border-[#25324B] rounded-full'></span>
                  <h3 className='font-Epilogue text-[#515B6F] text-[16px] tracking-tighter'>{jobs.country}</h3>
                </div>
    
                
                <div className='flex flex-row gap-x-2 lg:gap-x-2 mt-[8.5px] ml-4 lg:ml-6'>
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

            <div className='px-4 lg:pr-4'>
              <button className='pt-4 pb-[15px] w-full'>
                <h3 className='bg-[#4640DE] lg:px-[59px] py-[12px] font-Epilogue font-bold text-[#FFFFFF] text-[16px]'>Apply</h3>
              </button>

              {/* slider */}

                <div className="bg-[#D6DDEB] w-full h-[6px]">
                  <div className="bg-[#56CDAD] h-[6px]" style={{ width: jobs.percentage }}></div>
                </div>

              {/* slider end */}

              <h3 className='pt-2 pb-4 lg:pb-0 font-Epilogue text-[#7C8493] text-[14px]'> <span className='font-medium text-[#000000]'>{jobs.applications} applied</span> of 10 capacity</h3>
            </div>
          </div>
              ))}

          {/* Paginations */}
        <div className='items-center mt-4'>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    if (currentPage === 1) {
                      e.preventDefault(); // Prevent the default action if the button should be disabled
                      return;
                    }
                    paginate(currentPage - 1);
                  }}
                  className={`${
                    currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
                  }`}
                />
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink href="#" onClick={() => paginate(index + 1)}>
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationEllipsis />
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    if (currentPage === totalPages) {
                      e.preventDefault(); // Prevent the default action if the button should be disabled
                      return;
                    }
                    paginate(currentPage + 1);
                  }}
                  className={`${
                    currentPage === totalPages ? "cursor-not-allowed opacity-50" : ""
                  }`}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
          </div>
        </div>
  )
}

export default AllJobs