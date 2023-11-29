import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <div className='h-full p-5 md:p-24 flex md:flex-row flex-col background-image text-white'>
      <div className='content-above-overlay flex flex-col justify-end w-full md:w-1/2 py-10 md:py-20 px-5'>
        <h1 className='text-5xl font-bold '>Blog de tecnología - OVA semana 13-15</h1>
        <p>Aprende de sistemas Unix, programación shell y mucho más...</p>
      </div>
      <div className='flex items-center justify-center content-above-overlay w-full md:w-1/2 py-10'>
        <Image className='' width={500} height={500} src="/heroimage.webp" alt="imagen de tecnología" />
      </div>
    </div>
  )
}
