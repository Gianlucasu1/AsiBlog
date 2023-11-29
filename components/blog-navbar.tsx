import Link from 'next/link';
import React from 'react'
import { IoMdMenu } from "react-icons/io";


export default function BlogNavbar({position}:{position:string}) {
  return (
    <nav className={`${position} blog__gradient-background w-full justify-start md:justify-center items-center py-3 md:py-8 text-white`}>
      <div className='flex text-4xl px-3 py-1/2 md:hidden'>
        <IoMdMenu/>
      </div>
      <div className='hidden md:flex flex-row justify-between items-center'>
        <Link href="/" className="text-lg hover:font-bold font-thin">
          Blog de tecnología
        </Link>

        <Link href="/programacion-unix" className="nav-item px-3 py-2 hover:font-bold font-thin transition-colors">OVA Semana 13</Link>
        <Link href="#" className="nav-item px-3 py-2 hover:font-bold font-thin transition-colors">OVA Semana 13</Link>
        {/* Add more nav items here */}
        <Link href="#" className="nav-item px-3 py-2 hover:font-bold font-thin transition-colors">OVA Semana 13</Link>
        <Link href="#" className="nav-item px-3 py-2 hover:font-bold font-thin transition-colors">OVA Semana 13</Link>
      </div>
    </nav>
  );
}
