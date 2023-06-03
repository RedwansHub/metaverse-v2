'use client'

import React from 'react'
import { motion } from 'framer-motion';
import styles from '../constants/extraStyles';
import { navVariants } from '../utils/motion';
import Image from 'next/image';

const Navbar = () => {
  return (
    <motion.div
        variants={navVariants}
        initial="hidden"
        whileInView="show" 
        className={` ${styles.xPaddings} py-8  relative`} >
      <div className="absolute lg:w-full w-[50%]  ">
        <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
          <Image
              src="/search.svg"
              alt="search"
              width={24} height={24}
              className=" object-contain"
            />
          <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
            METAVERSUS
          </h2>
          <Image
              src="/menu.svg"
              alt="menu"
              width={24} height={24}
              className="w-[24px] h-[24px] object-contain"
          />
        </div>
      </div>
    </motion.div>
  )
}

export default Navbar