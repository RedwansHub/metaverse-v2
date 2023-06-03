'use client'

import React, { SetStateAction } from 'react'
import { motion } from 'framer-motion';

import styles from '../constants/extraStyles';
import { fadeIn } from '../utils/motion';
import Image from 'next/image';

interface CardProps 
{
   id : string, 
   imgUrl : string, 
   title : string, 
   index : number, 
   active : string, 
   handleClick : React.Dispatch<SetStateAction<string>>
}
const ExploreCard = ( { id, imgUrl, title, index, active, handleClick }: CardProps) => {
  return (
    <div>
       <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] border-2 border-red-400 flex-[10] w-[550px] duration-200 ease-in-out' : 'lg:flex-[0.5] flex-[2] duration-200 ease-in-out '
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <Image
      src={imgUrl}
      alt="planet-04"
      width={4500} 
      height={1600}
      className="absolute w-full h-full object-cover rounded-[24px]"
    />
    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
        <div
          className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
        >
          <Image
            src="/headset.svg"
            alt="headset"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>
        <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase">
          Enter Metaverse
        </p>
        <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
    </div>
  )
}

export default ExploreCard