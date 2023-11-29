import Link from 'next/link';
import React from 'react'
import { FaArrowUp } from "react-icons/fa";


export default function BlogPagesLayour({ children }: { children: React.ReactNode }) {
  return (
    <div className='relative'>
      {children}
      <div className='fixed bottom-4 right-4 bg-slate-300 flex items-center justify-center rounded-full p-4 '>
        <Link href="#unix__inicio">
          <FaArrowUp className="text-3xl" />
        </Link>
      </div>
    </div>
  )
}
