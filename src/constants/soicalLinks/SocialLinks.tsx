import Link from 'next/link';
import React from 'react'
import { FaEnvelope, FaFacebook, FaGithub } from "react-icons/fa";
import { FaLinkedin } from 'react-icons/fa6';
function SoicalLinks() {
    const linksData =[
        {icon: <FaGithub/>, href: '/' },
        {icon: <FaFacebook/>, href: '/' },
        {icon: <FaLinkedin/>, href: '/' },
        {icon: <FaEnvelope/>, href: '/' },
    ]
  return (
    <div className='text-white text-xl py-2 flex '>
    {
        linksData?.map((item,index)=>(
            <Link key={index} href={item?.href} target='black' className='border border-white-20 inline-flex p-4 rounded-full hover:text-sky-600 mr-2 hover:border-sky-600 duration-300 cursor-pointer' >
                {item?.icon}
            </Link>
        ))
    }    
    </div>
  )
}

export default SoicalLinks