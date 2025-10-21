"use client"
import { X } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Prevent background scroll when menu is open
      useEffect(() => {
        if (menuOpen) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "";
        }
        return () => {
          document.body.style.overflow = "";
        };
      }, [menuOpen]);

  return (
    <div className="flex flex-row justify-between bg-[#FFFFFF] lg:bg-[#f8f8fd] px-4 lg:px-[124px] xl:px-64 lg:py-[20px] pt-2 pb-4 w-full h-auto">
        <div className='flex lg:flex-row items-center gap-2'>
          <div className='flex flex-row gap-2'>
            <Image src="/Logo.svg" alt="logo" width={32} height={32} />
            <h1 className='font-Red_Hat_Display font-bold text-[#25324B] text-2xl'>JobHuntly</h1>
          </div>
          <div>
            <div className='hidden lg:flex lg:flex-row items-center gap-4 pl-[48px] font-Epilogue text-[#515B6F] text-[16px]'>
              <h3>Find Jobs</h3>
              <h3>Browse Companies</h3>
          </div>
        </div>
      </div>

      <div className='lg:hidden'>
        {menuOpen ? <div className='bg-[#ffffff] p-1.5 border-[#D6DDEB] border-1 rounded-full'><X size={22} /></div> : <Image src="/hamburger.svg" alt="logo" width={20} height={20} onClick={toggleMenu} className='bg-[#ffffff] p-2 border-[#D6DDEB] border-1 rounded-full w-full h-full' />}
     
      {/* Slide-in Mobile Menu */}
            <div
              className={` fixed overflow-y-auto top-15 left-0 h-screen w-[300px]  bg-[#f8f8fd] shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
                menuOpen ? " translate-x-0  " : "-translate-x-full"
              }`}
            >
            <div className=''> 
                <ul>
                    <Link href="" onClick={toggleMenu}>
                  <li className='items-center px-4 py-[2px] border-b cursor-pointer'>
                         <h3 className="my-2 font-Epilogue text-[#515B6F] text-[16px]">Find Jobs</h3>
                      </li>
                    </Link>  
                </ul>
              </div>
            <div className=''> 
                <ul>
                    <Link href="" onClick={toggleMenu}>
                  <li className='items-center px-4 py-[2px] border-b cursor-pointer'>
                         <h3 className="my-2 font-Epilogue text-[#515B6F] text-[16px]">Browse Companies</h3>
                      </li>
                    </Link>  
                </ul>
              </div>
            <div className=''> 
                <ul>
                    <Link href="/Login" onClick={toggleMenu}>
                  <li className='items-center px-4 py-[2px] border-b cursor-pointer'>
                         <h3 className="my-2 font-Epilogue text-[#515B6F] text-[16px]">Login</h3>
                      </li>
                    </Link>  
                </ul>
              </div>
            <div className=''> 
                <ul>
                    <Link href="/Signup" onClick={toggleMenu}>
                  <li className='items-center px-4 py-[2px] border-b cursor-pointer'>
                         <h3 className="my-2 font-Epilogue text-[#515B6F] text-[16px]">Sign up</h3>
                      </li>
                    </Link>  
                </ul>
              </div>
              
          </div>

      {/* Overlay */}
        {menuOpen && (
          <div
            className="z-40 fixed inset-0 bg-black/40"
            onClick={toggleMenu}
          />
        )}
         
      </div>
        
        <div className='hidden lg:flex flex-row items-center font-Epilogue text-[16px]'>
          <Link href= "/Login">
            <h3 className='hover:bg-[#4640DE] px-6 py-3 hover:border font-bold text-[#4640DE] hover:text-[#ffff]'>Login</h3></Link>
            <span className='mx-4 py-5.5 border border-[#D6DDEB]'></span>
            <Link href= "/Signup">
            <h3 className='bg-[#4640DE] px-6 py-3 border font-bold text-[#ffff] hover:text-[#4640DE]'>Sign Up</h3> </Link>
        </div>
    </div>
  )
}

export default Header