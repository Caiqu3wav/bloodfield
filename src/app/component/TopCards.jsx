'use client'
import Image from 'next/image';
import Vampyere from "../../../public/assets/uploads/cradle-of-filth_supreme-vampyric-evil_long-sleeve-2500.jpg";
import Vampyere2 from "../../../public/assets/uploads/cradle-of-filth_vigor_mortis_t-shirt-800.jpg";
import Vet from "../../../public/assets/uploads/undercover-SS20-draculahands-coat.jpg";
import {Swiper, SwiperSlide} from 'swiper/react' 
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function TopCards () {
        
    return (
    <div>
      <div className='div-buble overflow-hidden mt-8 w-[600px] bg-gray-500 h-[500px] flex flex-col items-center justify-center
       bg-opacity-70 majortwo3:w-[450px] majorfour1:mt-5 midtw:w-[350px] midtwo:w-[450px] midtwo4:w-[350px] midtwo4:h-[427px]'>
      <h1 className='TOPCARDS-H1 midtw:text-[2.6rem] text-black mt-1 midtw:mt-2
       midtwo4:mt-3 midtwo4:text-[2rem]'>HIGHLIGHTS</h1>
         <div className='flex  items-center justify-center'>
      <Swiper modules={[Navigation, Pagination]}
      navigation
      pagination={{clickable:true}} className='w-[400px] h-[350px] midtw:h-[370px] midtwo4:h-[330px] midtw:w-[340px]'>
            <SwiperSlide className=''>
            <div className='flex flex-col items-center justify-center midtw:w-[320px]'>
                <Image src={Vampyere}
                 className='w-[180px] h-[220px] rounded-lg midtwo4:w-[160px] midtwo4:h-[190px]' alt="" />
                 <h1 className='text-black text-sm font-semibold text-center'>Cradle of filth x Supreme - Vampyric evil - Long-Sleeve</h1>
                 <p className='font-semibold text-black text-lg'>Cradle of Filth, Supreme</p>
                 <p className='text-red-500 font-bold text-lg'>R$2600,00</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className=''>
              <div className='flex flex-col items-center justify-center'>
                <Image src={Vampyere2}
                 className='w-[180px] h-[220px] rounded-lg midtwo4:w-[160px] midtwo4:h-[190px]' alt="" />
                  <h1 className='text-black text-sm font-semibold text-center'>Cradle of Filth - Vigor Mortis - T-Shirt</h1>
                  <p className='text-black text-lg font-semibold'>Cradle of Filth</p>
                  <p className='text-red-500 font-bold text-lg'>R$1600,00</p>
                  </div>
            </SwiperSlide>
            <SwiperSlide className=''>
            <div className='flex flex-col items-center justify-center'>
                <Image src={Vet}
                 className='w-[180px] h-[220px] rounded-lg midtwo4:w-[160px] midtwo4:h-[190px]' alt="" />
                  <h1 className='text-black text-sm font-semibold text-center'>Undercover SS20 Dracula hands - Coat</h1>
                  <p className='text-black text-lg font-semibold'>Undercover</p>
                  <p className='text-red-500 font-bold text-lg'>R$3200,00</p>
                </div>
            </SwiperSlide>
        </Swiper>
        </div>
      </div>
    </div>
    );
}
