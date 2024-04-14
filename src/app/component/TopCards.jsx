'use client'
import React from 'react';
import Image from 'next/image';
import Vampyere from "../../../public/clothesimg/cradle-of-filth_supreme-vampyric-evil_long-sleeve-2500.jpg";
import Vampyere2 from "../../../public/clothesimg/cradle-of-filth_vigor_mortis_t-shirt-800.jpg";
import Vet from "../../../public/clothesimg/undercover-SS20-draculahands-coat.jpg";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel  from 'react-bootstrap/Carousel';

export default function TopCards () {
        
    return (
    <div>
      <div className='div-buble overflow-hidden mt-8 w-[600px] bg-gray-500 h-[500px] flex flex-col items-center justify-center
       bg-opacity-70 majortwo3:w-[450px]'>
      <h1 className='TOPCARDS-H1 text-black mt-1'>HIGHLIGHTS</h1>
        <div className='flex  items-center justify-center'>
      <Carousel className='h-[350px]'>
            <Carousel.Item interval={3000} className=''>
            <div className='flex items-center flex-col text-center gap-1 text-wrap justify-center w-[400px]'>
                <Image src={Vampyere}
                 className='w-[170px] h-[200px] rounded-lg self-center' alt="" />
                 <h1 className='text-black text-sm font-semibold'>Cradle of filth x Supreme - Vampyric evil - Long-Sleeve</h1>
                 <p className='font-semibold text-black text-lg'>Cradle of Filth, Supreme</p>
                 <p className='text-red-500 font-bold text-lg'>R$2600,00</p>
                </div>
            </Carousel.Item>
            <Carousel.Item interval={3000} className=''>
              <div className='flex items-center justify-center gap-1 text-center flex-col text-wrap w-[400px]'>
                <Image src={Vampyere2}
                 className='w-[170px] h-[200px] rounded-lg self-center' alt="" />
                  <h1 className='text-black text-sm font-semibold text-wrap'>Cradle of Filth - Vigor Mortis - T-Shirt</h1>
                  <p className='text-black text-lg font-semibold'>Cradle of Filth</p>
                  <p className='text-red-500 font-bold text-lg'>R$1600,00</p>
                  </div>
            </Carousel.Item>
            <Carousel.Item interval={3000} className=''>
            <div className='flex items-center flex-col text-center gap-1 text-wrap justify-center w-[400px]'>
                <Image src={Vet}
                 className='w-[170px] h-[200px] rounded-lg self-center' alt="" />
                  <h1 className='text-black text-sm font-semibold text-wrap'>Undercover SS20 Dracula hands - Coat</h1>
                  <p className='text-black text-lg font-semibold'>Undercover</p>
                  <p className='text-red-500 font-bold text-lg'>R$3200,00</p>
                </div>
            </Carousel.Item>
        </Carousel>
        </div>
      </div>
    </div>
    );
}
