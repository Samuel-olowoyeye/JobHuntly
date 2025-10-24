import React from 'react'
import { ArrowRight, ChartNoAxesCombined, CodeXml, PencilRuler } from 'lucide-react'
import Image from 'next/image'

const companies = [
  {
    icon: <PencilRuler  className='w-[36px] lg:w-[40px] h-[36px] lg:h-[40px]'/>,
    label: "Design",
    total: "235",

  },
  {
    icon: <ChartNoAxesCombined className='w-[36px] lg:w-[40px] h-[36px] lg:h-[40px]'  /> ,
    label: "Sales",
    total: "756",
  },
  {
    icon: <svg className="group w-[40px] lg:w-[48px] h-[40px] lg:h-[48px] text-[#4640DE] dark:text-[#4640DE] group-hover:text-[#ffffff]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 9H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6m0-6v6m0-6 5.419-3.87A1 1 0 0 1 18 5.942v12.114a1 1 0 0 1-1.581.814L11 15m7 0a3 3 0 0 0 0-6M6 15h3v5H6v-5Z"/>
</svg>,
    label: "Marketing",
    total: "140",
  },
  {
    icon: <svg className="group w-[40px] lg:w-[48px] h-[40px] lg:h-[48px] text-[#4640DE] dark:text-[#4640DE] group-hover:text-[#ffffff]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M8 7V6a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1M3 18v-7a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
</svg>,
    label: "Finance",
    total: "325",
  },
  {
    icon: <svg className="group w-[40px] lg:w-[48px] h-[40px] lg:h-[48px] text-[#4640DE] dark:text-[#4640DE] group-hover:text-[#ffffff]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"/>
</svg>
,
    label: "Technology",
    total: "436",
  },
  {
    icon: <CodeXml className='w-[36px] lg:w-[40px] h-[36px] lg:h-[40px]'/>,
    label: "Engineering",
    total: "542",
  },
  {
    icon: <svg className="group w-[40px] lg:w-[48px] h-[40px] lg:h-[48px] text-[#4640DE] dark:text-[#4640DE] group-hover:text-[#ffffff]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 0 0-2 2v4m5-6h8M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m0 0h3a2 2 0 0 1 2 2v4m0 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6m18 0s-4 2-9 2-9-2-9-2m9-2h.01"/>
</svg>,
    label: "Business",
    total: "211",
  },
  {
    icon: <svg className="group w-[40px] lg:w-[48px] h-[40px] lg:h-[48px] text-[#4640DE] dark:text-[#4640DE] group-hover:text-[#ffffff]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
</svg>,
    label: "Human Resource",
    total: "346",
  },
]


const company  = [
  {
    image: "/logos/pentagram.svg",
    name: "Pentagram",
    jobs: 3,
    class: "rounded-full",

  },
  {
    image: "/logos/wolff.svg",
    name: "Wolff Olins",
    jobs: 3,
     class: "rounded-full",
  },
  {
    image: "/logos/clay.svg",
    name: "Clay",
    jobs: 3,
     class: "rounded-full",
  },
  {
    image: "/logos/monks.svg",
    name: "MediaMonks",
    jobs: 3,
     class: "rounded-full",
  },
  {
    image: "/logos/Packer.svg",
    name: "Packer",
    jobs: 3,
  },
  {
    image: "/logos/square.svg",
    name: "Square",
    jobs: 3,
  },
  {
    image: "/logos/divy.svg",
    name: "Divy",
    jobs: 3,
  },
  {
    image: "/logos/Webflow.svg",
    name: "WebFlow",
    jobs: 3,
  },
]



const CompaniesCard = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-row gap-x-4 lg:gap-8 px-4 lg:px-0 lg:py-[48px] pt-6 w-full h-auto overflow-visible overflow-x-auto scroll-smooth no-scrollbar'>
      {companies.map((company) => (
        <div key={company.label} className='group lg:z-10 flex-row lg:flex-col flex-shrink-0 bg-[#ffffff] hover:bg-[#4640DE] active:bg-[#4640DE] border border-[#D6DDEB] w-[224px] lg:w-[274px] xl:w-[320px] h-full lg:h-[173px] group-active:text-[#ffffff] group-hover:text-[#ffffff]'>
          <div className='group lg:mx-8 my-[22px] lg:my-8 mr-8 ml-4 text-[#4640DE] group-active:text-[#ffffff] group-hover:text-[#ffffff]'>
            {company.icon} 
          </div>
        
        
        <div className='flex flex-col my-4 lg:my-0 lg:mr-0 px-4 lg:px-0 w-full'>
          <h2 className='group lg:px-8 lg:pb-3 font-Red_Hat_Display font-extrabold text-[#25324B] text-[20px] group-active:text-[#ffffff] group-hover:text-[#ffffff] lg:text-2xl'> {company.label} </h2>
          </div>
        </div>
        ))}
    </div>

    <div className='flex flex-row items-center gap-4 py-6 lg:py-0'>
      <span className='bg-[#ffffff] p-4 rounded-full'><PencilRuler  className='w-[24px] lg:w-[24px] h-[24px] lg:h-[24px] text-[#4640DE]'/></span>
      <h2 className='font-Red_Hat_Display font-semibold text-[#202430] text-2xl'>24 Results</h2>
    </div>

    <div className='gap-6 lg:gap-8 lg:gap-x-4 grid grid-cols-1 lg:grid-cols-4 px-4 lg:px-0 lg:pt-[48px] w-full h-auto text-center'>
      {company.map((company) => (
        <div key={company.name} className='flex flex-col bg-[#ffffff] border border-[#D6DDEB] w-full lg:w-[274px] xl:w-[320px] h-[245px]'>
          <div className='flex justify-center lg:mx-8 mt-6 lg:mt-6 lg:mr-8 mb-[30px]'>
             <Image src={company.image} alt={company.name} width={88} height={88} className={company.class}/>
          </div>
        
        
        <div className='flex flex-col lg:my-0 lg:mr-0 mb-4 lg:px-4 w-full'>
          <h2 className='lg:px-8 lg:pb-3 font-Red_Hat_Display font-extrabold text-[#25324B] text-[24px] lg:text-2xl'> {company.name} </h2>
          </div>

          <div>
            <button className='bg-[#F8F8FD] mx-4'>
                <h3 className='px-3 py-1 font-Epilogue text-[#4640DE] text-[16px]'>{company.jobs} Jobs</h3>
            </button>
          </div>
        </div>
        ))}
        
    </div>


    <div className='flex flex-row gap-4 px-4 pt-6 pb-[40px] lg:pb-[72px] text-[#4640DE]'>
            <h3 className='font-Epilogue font-semibold text-[16px]'>View more Design companies</h3>
            <ArrowRight className='w-[24px] h-[24px]' />
          </div>
    </div>

    
  )
}

export default CompaniesCard